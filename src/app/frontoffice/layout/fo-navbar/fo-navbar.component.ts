import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../frontoffice/services/auth.service';

@Component({
  selector: 'app-fo-navbar',
  templateUrl: './fo-navbar.component.html',
  styleUrls: ['./fo-navbar.component.scss']
})
export class FoNavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor(public authService: AuthService, private router: Router) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToDashboard(): void {
    this.router.navigate(['/backoffice/dashboard']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
