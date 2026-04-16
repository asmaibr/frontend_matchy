import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.setDarkMode(isDark, false);
  }

  toggleDarkMode(): void {
    const newMode = !this.darkModeSubject.value;
    this.setDarkMode(newMode, true);
  }

  setDarkMode(isDark: boolean, animate: boolean = true): void {
    this.darkModeSubject.next(isDark);

    const html = document.documentElement;
    const body = document.body;

    if (animate) {
      body.classList.add('theme-transitioning');
      setTimeout(() => {
        body.classList.remove('theme-transitioning');
      }, 500);
    }

    if (isDark) {
      body.classList.add('dark-mode', 'bo-dark', 'dark');
      body.classList.remove('bo-light');
      html.classList.add('bo-dark');
      html.classList.remove('bo-light');
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode', 'bo-dark', 'dark');
      body.classList.add('bo-light');
      html.classList.remove('bo-dark');
      html.classList.add('bo-light');
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
