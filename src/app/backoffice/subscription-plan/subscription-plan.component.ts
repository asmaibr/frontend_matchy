import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../frontoffice/services/subscription.service';
import { SubscriptionPlan } from '../../frontoffice/models/subscription.model';
import { PromoCodeService, PromoCode } from '../../frontoffice/services/promo-code.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bo-subscription-plan',
    templateUrl: './subscription-plan.component.html',
    styleUrls: ['./subscription-plan.component.scss']
})
export class BoSubscriptionPlanComponent implements OnInit {
    plans: SubscriptionPlan[] = [];
    billingCycle: 'monthly' | 'yearly' = 'monthly';
    showComparison = false;

    // Modal state
    showModal = false;
    showDeleteModal = false;
    isEditing = false;
    editingPlan: SubscriptionPlan | null = null;
    planToDelete: SubscriptionPlan | null = null;

    // Form
    form = this.getEmptyForm();

    // Pickers
    icons = ['🌱', '⚡', '👑', '🚀', '💎', '🔥', '⭐', '🎯', '💼', '🏆'];
    colors = ['#6b7280', '#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#06b6d4'];

    constructor(private subscriptionService: SubscriptionService, private router: Router, private promoService: PromoCodeService) { }

    ngOnInit(): void {
        this.loadPlans();
        this.loadPromoCodes();
    }

    loadPlans(): void {
        this.plans = this.subscriptionService.getPlans(this.billingCycle);
    }

    toggleBilling(cycle: 'monthly' | 'yearly'): void {
        this.billingCycle = cycle;
        this.loadPlans();
    }

    toggleComparison(): void {
        this.router.navigate(['/backoffice/subscription-plan-comparison']);
    }

    getEmptyForm() {
        return {
            id: '' as string | number, name: '', price: 0, currency: 'TND',
            description: '', features: '',
            isPopular: false, color: '#10b981', icon: '🌱'
        };
    }

    openAdd(): void {
        this.isEditing = false;
        this.form = this.getEmptyForm();
        this.showModal = true;
    }

    openEdit(plan: SubscriptionPlan): void {
        this.isEditing = true;
        this.editingPlan = plan;
        this.form = {
            id: plan.id || '',
            name: plan.name,
            price: plan.price,
            currency: plan.currency,
            description: plan.description,
            features: (plan.features || []).join('\n'),
            isPopular: plan.isPopular || false,
            color: plan.color || '#10b981',
            icon: plan.icon || '🌱'
        };
        this.showModal = true;
    }

    save(): void {
        if (!this.form.name.trim() || !this.form.description.trim()) return;

        const plan: SubscriptionPlan = {
            id: this.isEditing ? this.form.id : this.form.name.toLowerCase().replace(/\s+/g, '-'),
            name: this.form.name as any,
            price: this.form.price,
            currency: this.form.currency,
            billingCycle: 'monthly',
            description: this.form.description,
            features: this.form.features.split('\n').map(f => f.trim()).filter(f => f),
            isPopular: this.form.isPopular,
            isCurrent: false,
            color: this.form.color,
            icon: this.form.icon
        };

        if (this.isEditing) {
            this.subscriptionService.updatePlan(plan);
        } else {
            this.subscriptionService.addPlan(plan);
        }
        this.loadPlans();
        this.showModal = false;
    }

    confirmDelete(plan: SubscriptionPlan): void {
        this.planToDelete = plan;
        this.showDeleteModal = true;
    }

    deletePlan(): void {
        if (this.planToDelete && this.planToDelete.id !== undefined) {
            this.subscriptionService.deletePlan(this.planToDelete.id.toString());
            this.loadPlans();
            this.showDeleteModal = false;
            this.planToDelete = null;
        }
    }

    closeModal(): void {
        this.showModal = false;
        this.showDeleteModal = false;
    }

    // ── Promo Code Management ─────────────────────────────────

    promoCodes: PromoCode[] = [];
    promoToast = '';
    newPromoCodeInput = '';
    promoInputError = '';

    loadPromoCodes(): void {
        // Load from backend API
        this.promoService.getCodesObservable().subscribe(
            (codes: PromoCode[]) => {
                this.promoCodes = codes;
            },
            (error) => {
                console.error('Error loading promo codes:', error);
                // Fallback to local cache
                this.promoCodes = this.promoService.getCodes();
            }
        );
    }

    generatePromoCode(): void {
        this.promoService.generateCodeObservable().subscribe(
            (code: PromoCode) => {
                this.loadPromoCodes();
                this.showPromoToast(`✅ Code generated: ${code.code}`);
            },
            (error) => {
                console.error('Error generating code:', error);
                this.showPromoToast('❌ Failed to generate code');
            }
        );
    }

    addManualPromoCode(): void {
        const raw = this.newPromoCodeInput.trim().toUpperCase();
        if (!raw) return;
        // Validate: only letters, numbers, hyphens
        if (!/^[A-Z0-9\-]{3,20}$/.test(raw)) {
            this.promoInputError = 'Code must be 3–20 characters (letters, numbers, hyphens only).';
            return;
        }
        // Check duplicate in local cache
        if (this.promoService.getCodes().some(c => c.code === raw)) {
            this.promoInputError = 'This code already exists.';
            return;
        }
        this.promoInputError = '';
        
        // Create code via backend API
        this.promoService.createCodeObservable(raw, 10).subscribe(
            (createdCode: PromoCode) => {
                this.newPromoCodeInput = '';
                this.loadPromoCodes();
                this.showPromoToast(`✅ Code "${raw}" added to database`);
            },
            (error) => {
                console.error('Error creating promo code:', error);
                this.promoInputError = error.error?.message || 'Failed to create code';
            }
        );
    }

    togglePromoCode(code: PromoCode): void {
        if (!code.id) {
            console.error('Code ID is missing');
            return;
        }
        
        if (code.active) {
            // Deactivate
            this.promoService.deactivateCode(code.id).subscribe(
                () => {
                    this.loadPromoCodes();
                    this.showPromoToast(`🔒 Code deactivated`);
                },
                (error) => {
                    console.error('Error deactivating code:', error);
                    this.showPromoToast('❌ Failed to deactivate code');
                }
            );
        } else {
            // Reactivate
            this.promoService.reactivateCode(code.id).subscribe(
                () => {
                    this.loadPromoCodes();
                    this.showPromoToast(`✅ Code reactivated`);
                },
                (error) => {
                    console.error('Error reactivating code:', error);
                    this.showPromoToast('❌ Failed to reactivate code');
                }
            );
        }
    }

    deletePromoCode(code: PromoCode): void {
        if (!code.id) {
            console.error('Code ID is missing');
            return;
        }
        
        if (confirm(`Delete code "${code.code}"?`)) {
            this.promoService.deleteCodeObservable(code.id).subscribe(
                () => {
                    this.loadPromoCodes();
                    this.showPromoToast('🗑 Code deleted');
                },
                (error) => {
                    console.error('Error deleting code:', error);
                    this.showPromoToast('❌ Failed to delete code');
                }
            );
        }
    }

    copyCode(code: string): void {
        navigator.clipboard.writeText(code).then(() => this.showPromoToast('📋 Copied to clipboard'));
    }

    private showPromoToast(msg: string): void {
        this.promoToast = msg;
        setTimeout(() => this.promoToast = '', 3000);
    }
    getAllFeatures(): string[] {
        const all = new Set<string>();
        this.plans.forEach(p => (p.features || []).forEach(f => all.add(f)));
        return Array.from(all);
    }

    planHasFeature(plan: SubscriptionPlan, feature: string): boolean {
        return (plan.features || []).includes(feature);
    }

    getYearlyPrice(price: number): number {
        return Math.round(price * 12 * 0.80);
    }
}
