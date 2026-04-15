import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../frontoffice/services/auth.service";
import { CertificationService } from "../../frontoffice/services/certification.service";

@Component({
  selector: "app-bo-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class BoProfileSettingsComponent implements OnInit {
  form: FormGroup;
  saved = false;
  settings = {
    maintenance: false,
    registration: true,
    emails: true,
    verification: true,
  };
  badges: string[] = [];
  primaryBadge = "";
  currentUserId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private certificationService: CertificationService,
  ) {
    this.form = this.fb.group({
      name: ["Admin Matchy", Validators.required],
      email: ["admin@matchy.tn", [Validators.required, Validators.email]],
      phone: ["+216 55 000 000"],
      role: ["Super Admin"],
    });
  }

  ngOnInit(): void {
    const currentUser = this.authService.currentUser;
    this.currentUserId = currentUser?.id ?? currentUser?.userId ?? null;

    if (currentUser) {
      this.form.patchValue({
        name:
          currentUser.name ||
          `${currentUser.firstName || ""} ${currentUser.lastName || ""}`.trim(),
        email: currentUser.email || "admin@matchy.tn",
      });
    }

    this.loadBadges();
  }

  save(): void {
    this.saved = true;
    setTimeout(() => (this.saved = false), 3000);
  }

  private loadBadges(): void {
    if (this.currentUserId == null) {
      this.badges = [];
      this.primaryBadge = "";
      return;
    }

    this.certificationService.getAllCertifications().subscribe({
      next: () => {
        this.badges = this.certificationService.getBadgesForUser(
          this.currentUserId as number,
        );
        this.primaryBadge =
          this.certificationService.getPrimaryBadgeForUser(
            this.currentUserId as number,
          ) || "";
      },
      error: () => {
        this.badges = [];
        this.primaryBadge = "";
      },
    });
  }

  getBadgeClass(badge: string): string {
    switch (badge) {
      case "Bronze Badge":
        return "badge-bronze";
      case "Silver Badge":
        return "badge-silver";
      case "Gold Badge":
        return "badge-gold";
      case "Perfect Score Badge":
        return "badge-perfect";
      default:
        return "badge-muted";
    }
  }
}
