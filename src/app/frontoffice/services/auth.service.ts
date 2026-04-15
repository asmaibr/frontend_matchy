import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, map, of, catchError, switchMap } from "rxjs";
import { environment } from "../../../environments/environment";
import { User, AuthResponse } from "../models/models";
import { NotificationService } from "./notification.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly TOKEN_KEY = "matchy_token";
  private readonly USER_KEY = "matchy_user";

  // ✅ Direct backend URL for OAuth (bypasses Gateway)
  private readonly backendUrl = "http://localhost:8081/api";

  currentUser: (User & { name: string }) | null = null;
  isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.checkAuth(); // ✅ Vérifier l'authentification au démarrage du service
  }

  checkAuth(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const user = localStorage.getItem(this.USER_KEY);
    if (token && user) {
      this.currentUser = JSON.parse(user);
      this.isAuthenticated = true;
    }
  }

  login(email: string, password: string): Observable<boolean> {
    // ✅ Compte admin fixe pour le backoffice
    if (email === "admin@gmail.com" && password === "admin") {
      const adminUser = {
        id: 1,
        email: "admin@gmail.com",
        firstName: "Admin",
        lastName: "User",
        role: "ADMIN",
        status: "ACTIVE",
        name: "Admin User",
      };

      const token = "admin_token_" + Date.now();
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(adminUser));
      this.currentUser = adminUser;
      this.isAuthenticated = true;
      this.notificationService.refreshForCurrentUser();
      return of(true);
    }

    // ✅ Comptes CLIENT fixes
    const fixedClientAccounts: Record<
      string,
      { id: number; email: string; firstName: string; lastName: string }
    > = {
      "asmaibrahim1920@gmail.com": {
        id: 2,
        email: "asmaibrahim1920@gmail.com",
        firstName: "Asma",
        lastName: "Ibrahim",
      },
      "asma.ibrahim@esprit.tn": {
        id: 3,
        email: "asma.ibrahim@esprit.tn",
        firstName: "Asma",
        lastName: "Ibrahim",
      },
    };

    if (fixedClientAccounts[email] && password === "asma") {
      const fixedClient = fixedClientAccounts[email];
      return this.findOrCreateFixedClientBackendUser(
        fixedClient.email,
        fixedClient.firstName,
        fixedClient.lastName,
      ).pipe(
        map((backendUserId) => {
          const clientUser = {
            id: backendUserId,
            email: fixedClient.email,
            firstName: fixedClient.firstName,
            lastName: fixedClient.lastName,
            role: "CLIENT",
            status: "ACTIVE",
            name: "Asma Ibrahim",
          };

          const token = "client_token_" + Date.now();
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(clientUser));
          this.currentUser = clientUser;
          this.isAuthenticated = true;
          this.notificationService.refreshForCurrentUser();
          return true;
        }),
        catchError(() => {
          const fallbackClientUser = {
            id: fixedClient.id,
            email: fixedClient.email,
            firstName: fixedClient.firstName,
            lastName: fixedClient.lastName,
            role: "CLIENT",
            status: "ACTIVE",
            name: "Asma Ibrahim",
          };

          const token = "client_token_" + Date.now();
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(fallbackClientUser));
          this.currentUser = fallbackClientUser;
          this.isAuthenticated = true;
          this.notificationService.refreshForCurrentUser();
          return of(true);
        }),
      );
    }

    // ✅ Vérifier les utilisateurs créés via sign up en localStorage
    const signupKey = `signup_user_${email}`;
    const signupUserData = localStorage.getItem(signupKey);
    if (signupUserData) {
      const signupUser = JSON.parse(signupUserData);
      if (signupUser.password === password) {
        // Identifiants valides
        const user = {
          id: Math.random(),
          email: signupUser.email,
          firstName: signupUser.firstName,
          lastName: signupUser.lastName,
          role: signupUser.role || "CLIENT",
          status: "ACTIVE",
          name: `${signupUser.firstName} ${signupUser.lastName}`,
        };

        const token = "user_token_" + Date.now();
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUser = user;
        this.isAuthenticated = true;
        this.notificationService.refreshForCurrentUser();
        return of(true);
      }
      // Mot de passe incorrect pour le compte local
      return of(false);
    }

    // ✅ Sinon, essayer le backend
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          const user = {
            ...res.user,
            name: `${res.user.firstName} ${res.user.lastName}`,
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          this.currentUser = user;
          this.isAuthenticated = true;
          this.notificationService.refreshForCurrentUser();
          return true;
        }),
        catchError(() => of(false)),
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser = null;
    this.isAuthenticated = false;
    this.notificationService.refreshForCurrentUser();
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean {
    return this.currentUser?.role === "ADMIN";
  }
  isClient(): boolean {
    return this.currentUser?.role === "CLIENT";
  }
  isFreelancer(): boolean {
    return this.currentUser?.role === "FREELANCER";
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, {
      email,
    });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, {
      token,
      newPassword,
    });
  }

  // ✅ Calls port 8081 directly — bypasses Gateway
  loginWithGoogle(): void {
    this.http.get<{ url: string }>(`${this.backendUrl}/auth/google`).subscribe({
      next: (res) => (window.location.href = res.url),
      error: () => console.error("Google OAuth failed"),
    });
  }

  handleGoogleCallback(token: string): void {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      firstName: payload.firstName,
      lastName: payload.lastName,
      name: `${payload.firstName} ${payload.lastName}`,
    };
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUser = user as any;
    this.isAuthenticated = true;
    this.notificationService.refreshForCurrentUser();
  }

  private findOrCreateFixedClientBackendUser(
    email: string,
    firstName: string,
    lastName: string,
  ): Observable<number> {
    return this.http
      .get<any[]>(`${environment.apiUrl}/User/getAllUsers`)
      .pipe(
        map((users) =>
          users.find(
            (user) =>
              String(user?.email || "").trim().toLowerCase() ===
              email.trim().toLowerCase(),
          ),
        ),
        switchMap((existingUser) => {
          if (existingUser?.id != null) {
            return of(Number(existingUser.id));
          }

          const newUserPayload = {
            name: `${firstName} ${lastName}`,
            email,
            password: "asma",
            role: "CLIENT",
            status: "ACTIVE",
            city: "Tunis",
            verified: false,
          };

          return this.http
            .post<any>(`${environment.apiUrl}/User/addUser`, newUserPayload)
            .pipe(map((createdUser) => Number(createdUser?.id)));
        }),
      );
  }
}
