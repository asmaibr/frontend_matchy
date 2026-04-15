import { Injectable } from "@angular/core";
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(): boolean {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isAdmin())
      return true;
    this.router.navigate(["/frontoffice/register"]);
    return false;
  }
}

@Injectable({ providedIn: "root" })
export class ClientGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(): boolean {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isClient())
      return true;
    this.router.navigate(["/frontoffice/register"]);
    return false;
  }
}

@Injectable({ providedIn: "root" })
export class FreelancerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(): boolean {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isFreelancer())
      return true;
    this.router.navigate(["/frontoffice/register"]);
    return false;
  }
}

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    // ✅ Revérifier l'authentification à chaque accès
    this.auth.checkAuth();

    // ✅ Si authentifié, laisser passer
    if (this.auth.isAuthenticated) {
      return true;
    }

    // ✅ Sinon, rediriger vers l'enregistrement
    this.router.navigate(["/frontoffice/register"]);
    return false;
  }
}
