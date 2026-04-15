import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CertificationService } from "../services/certification.service";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class ProfileSettingsComponent implements OnInit {
  activeTab = "profile";
  tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "skills", label: "Skills", icon: "🎯" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
  ];

  profileForm!: FormGroup;
  securityForm!: FormGroup;
  saveSuccess = false;
  profileBadges: string[] = [];
  primaryBadge = "";
  currentUserId: number | null = null;
  currentRoleLabel = "Client";

  skills: string[] = ["Angular", "React", "UI/UX Design", "Node.js"];
  newSkill = "";

  notifications = {
    emailProjects: true,
    emailMessages: true,
    emailPayments: true,
    pushProjects: false,
    pushMessages: true,
    pushPayments: false,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private certificationService: CertificationService,
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUser;
    this.currentUserId = currentUser?.id ?? currentUser?.userId ?? null;
    this.currentRoleLabel =
      currentUser?.role === "FREELANCER"
        ? "Freelancer"
        : currentUser?.role === "ADMIN"
          ? "Admin"
          : "Client";

    this.profileForm = this.fb.group({
      firstName: [currentUser?.firstName || "Admin", Validators.required],
      lastName: [currentUser?.lastName || "Matchy", Validators.required],
      email: [
        currentUser?.email || "admin@matchy.tn",
        [Validators.required, Validators.email],
      ],
      phone: ["+216 55 000 000"],
      city: [currentUser?.city || "Tunis"],
      bio: [
        currentUser?.bio ||
          "Freelance platform administrator & passionate about connecting Tunisian talent.",
      ],
      website: ["https://matchy.tn"],
    });

    this.securityForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
    });

    this.loadBadges();
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      this.saveSuccess = true;
      setTimeout(() => (this.saveSuccess = false), 3000);
    }
  }

  addSkill(): void {
    const skill = this.newSkill.trim();
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
      this.newSkill = "";
    }
  }

  removeSkill(skill: string): void {
    this.skills = this.skills.filter((s) => s !== skill);
  }

  getInitials(): string {
    const f = this.profileForm.get("firstName")?.value || "";
    const l = this.profileForm.get("lastName")?.value || "";
    return (f[0] || "") + (l[0] || "");
  }

  private loadBadges(): void {
    if (this.currentUserId == null) {
      this.profileBadges = [];
      this.primaryBadge = "";
      return;
    }

    this.certificationService.getAllCertifications().subscribe({
      next: () => {
        this.profileBadges = this.certificationService.getBadgesForUser(
          this.currentUserId as number,
        );
        this.primaryBadge =
          this.certificationService.getPrimaryBadgeForUser(
            this.currentUserId as number,
          ) || "";
      },
      error: () => {
        this.profileBadges = [];
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
