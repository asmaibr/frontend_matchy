import {
  ChatbotService,
  NotificationService,
  ProposalService,
  WebSocketService
} from "./chunk-QQ7LITVV.js";
import {
  ClientGuard,
  ProjectService,
  UserService
} from "./chunk-WIHVAV43.js";
import {
  ActivatedRoute,
  AuthService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  EventEmitter,
  FormsModule,
  HttpClient,
  HttpHeaders,
  MaxLengthValidator,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  environment,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-74CLTESD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/client/layout/cl-sidebar/cl-sidebar.component.ts
function ClSidebarComponent_a_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function ClSidebarComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ClSidebarComponent_a_13_span_5_Template, 2, 1, "span", 22);
    \u0275\u0275element(6, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r3 * 0.07 + "s");
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.badge && ctx_r0.unreadCount > 0);
  }
}
function ClSidebarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3, "Hello, ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.firstName) || (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getInitials((ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name) || ""));
  }
}
var ClSidebarComponent = class _ClSidebarComponent {
  constructor(authService, router, notifService) {
    this.authService = authService;
    this.router = router;
    this.notifService = notifService;
    this.unreadCount = 0;
    this.isDark = true;
    this.isScrolled = false;
    this.navItems = [
      { label: "Dashboard", icon: "\u{1F4CA}", route: "/client/dashboard", badge: false },
      { label: "My Projects", icon: "\u{1F4C1}", route: "/client/projects", badge: false },
      { label: "Proposals", icon: "\u{1F4DD}", route: "/client/proposals", badge: false },
      { label: "Notifications", icon: "\u{1F514}", route: "/client/notifications", badge: true },
      { label: "Profile", icon: "\u2699\uFE0F", route: "/client/profile", badge: false }
    ];
    this.isDark = localStorage.getItem("cl-theme") !== "light";
    this.applyTheme();
    const userId = this.authService.currentUser?.id;
    if (userId) {
      this.notifService.countUnread(userId).subscribe({
        next: (r) => this.unreadCount = r.count,
        error: () => this.unreadCount = 0
      });
    }
    window.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 20;
    });
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem("cl-theme", this.isDark ? "dark" : "light");
    this.applyTheme();
  }
  applyTheme() {
    const root = document.documentElement;
    root.setAttribute("data-theme", this.isDark ? "dark" : "light");
    if (this.isDark) {
      root.style.setProperty("--bo-bg-primary", "#080a14");
      root.style.setProperty("--bo-bg-secondary", "#0f1320");
      root.style.setProperty("--bo-bg-sidebar", "#080a14");
      root.style.setProperty("--bo-text-primary", "#e8eaf6");
      root.style.setProperty("--bo-text-secondary", "#7986a3");
      root.style.setProperty("--bo-border", "rgba(255,255,255,0.07)");
      root.style.setProperty("--shadow-card", "0 4px 24px rgba(0,0,0,0.4)");
      root.style.setProperty("--primary", "#6366f1");
      root.style.setProperty("--radius-md", "16px");
    } else {
      root.style.setProperty("--bo-bg-primary", "#f0f2fb");
      root.style.setProperty("--bo-bg-secondary", "#ffffff");
      root.style.setProperty("--bo-bg-sidebar", "#080a14");
      root.style.setProperty("--bo-text-primary", "#1a1d2e");
      root.style.setProperty("--bo-text-secondary", "#6b7280");
      root.style.setProperty("--bo-border", "rgba(0,0,0,0.07)");
      root.style.setProperty("--shadow-card", "0 4px 24px rgba(99,102,241,0.08)");
      root.style.setProperty("--primary", "#6366f1");
      root.style.setProperty("--radius-md", "16px");
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function ClSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClSidebarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClSidebarComponent, selectors: [["app-cl-sidebar"]], decls: 26, vars: 8, consts: [[1, "navbar"], [1, "navbar-mesh"], [1, "navbar-left"], [1, "logo"], [1, "logo-icon"], [1, "logo-letter"], [1, "logo-glow"], [1, "logo-text"], [1, "accent"], [1, "navbar-center"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "animation-delay", 4, "ngFor", "ngForOf"], [1, "navbar-right"], [1, "theme-btn", 3, "click", "title"], [1, "theme-icon"], [1, "theme-track"], [1, "theme-thumb"], ["class", "user-pill", 4, "ngIf"], [1, "btn-logout", 3, "click"], [1, "logout-icon"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-icon"], [1, "nav-label"], ["class", "notif-badge", 4, "ngIf"], [1, "nav-link-bg"], [1, "notif-badge"], [1, "user-pill"], [1, "online-dot"], [1, "user-greeting"], [1, "user-avatar"], [1, "avatar-ring"]], template: function ClSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "Match");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "y");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, ClSidebarComponent_a_13_Template, 7, 6, "a", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
        \u0275\u0275listener("click", function ClSidebarComponent_Template_button_click_15_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275element(19, "span", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, ClSidebarComponent_div_20_Template, 10, 2, "div", 16);
        \u0275\u0275elementStart(21, "button", 17);
        \u0275\u0275listener("click", function ClSidebarComponent_Template_button_click_21_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "Logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 18);
        \u0275\u0275text(25, "\u23FB");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.isDark ? "Light mode" : "Dark mode");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDark ? "\u2600\uFE0F" : "\u{1F319}");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("dark", ctx.isDark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.currentUser);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ['@import "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  background: rgba(8, 10, 20, 0.95);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_navSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  height: 60px;\n  background: rgba(8, 10, 20, 0.98);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);\n}\n.navbar-mesh[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 100% at 20% 50%,\n      rgba(99, 102, 241, 0.08) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 30% 100% at 80% 50%,\n      rgba(168, 85, 247, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_navSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.navbar-left[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  animation: _ngcontent-%COMP%_fadeInLeft 0.6s ease both 0.1s;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n  &:hover {\n    transform: rotate(-8deg) scale(1.1);\n    box-shadow: 0 0 30px rgba(99, 102, 241, 0.7), 0 4px 20px rgba(0, 0, 0, 0.4);\n  }\n}\n.logo-letter[_ngcontent-%COMP%] {\n  color: white;\n  font-family: "Syne", sans-serif;\n  font-weight: 800;\n  font-size: 20px;\n  position: relative;\n  z-index: 1;\n}\n.logo-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n}\n.logo-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: "Syne", sans-serif;\n  font-weight: 800;\n  font-size: 21px;\n  letter-spacing: -0.5px;\n}\n.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #818cf8,\n      #c084fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.navbar-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.25s ease;\n  position: relative;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_navItemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n  overflow: hidden;\n}\n.nav-link-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.nav-link[_ngcontent-%COMP%]:hover   .nav-link-bg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n.nav-link.active[_ngcontent-%COMP%]   .nav-link-bg[_ngcontent-%COMP%] {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(168, 85, 247, 0.15));\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.nav-link.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 25%;\n  right: 25%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #a855f7);\n  border-radius: 2px 2px 0 0;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.8);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  position: relative;\n  z-index: 1;\n}\n.nav-label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);\n  animation: _ngcontent-%COMP%_badgePulse 2s ease infinite;\n  position: relative;\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_badgePulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_navItemIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeInRight 0.6s ease both 0.2s;\n}\n.theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.theme-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.theme-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.theme-track[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  position: relative;\n  transition: background 0.3s ease;\n}\n.theme-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.theme-thumb.dark[_ngcontent-%COMP%] {\n  transform: translateX(12px);\n  background: #818cf8;\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 4px 6px 4px 10px;\n  transition: all 0.2s ease;\n}\n.user-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.online-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #22c55e;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px rgba(34, 197, 94, 0.7);\n  animation: _ngcontent-%COMP%_onlinePulse 2s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_onlinePulse {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(34, 197, 94, 0.7);\n  }\n  50% {\n    box-shadow: 0 0 14px rgba(34, 197, 94, 0.9);\n  }\n}\n.user-greeting[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 12.5px;\n  white-space: nowrap;\n  strong {\n    color: rgba(255, 255, 255, 0.9);\n    font-weight: 600;\n  }\n}\n.user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.avatar-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -2px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(99, 102, 241, 0.5);\n  animation: _ngcontent-%COMP%_ringRotate 4s linear infinite;\n  border-top-color: #818cf8;\n}\n@keyframes _ngcontent-%COMP%_ringRotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  transition: all 0.25s ease;\n  position: relative;\n  overflow: hidden;\n}\n.btn-logout[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);\n}\n.btn-logout[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.logout-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=cl-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClSidebarComponent, { className: "ClSidebarComponent", filePath: "app\\client\\layout\\cl-sidebar\\cl-sidebar.component.ts", lineNumber: 427 });
})();

// src/app/client/chatbot/chatbot.component.ts
var _c0 = ["messagesRef"];
var _c1 = ["inputRef"];
function ClientChatbotComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23);
    \u0275\u0275text(5, "\u{1F389} Badge d\xE9bloqu\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.badgeToast.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.badgeToast.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.badgeToast.desc);
  }
}
function ClientChatbotComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount);
  }
}
function ClientChatbotComponent_div_17_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_17_button_26_Template_button_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendSuggestion(s_r5.text));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r5.text, " ");
  }
}
function ClientChatbotComponent_div_17_div_29_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_17_div_29_button_8_Template_button_click_0_listener() {
      const q_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendSuggestion(q_r7.text));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", q_r7.icon, " ", q_r7.text, " ");
  }
}
function ClientChatbotComponent_div_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275text(4, "Hello, I am Matchy Bot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275text(6, "I can help you post projects, find freelancers, and manage everything on the platform.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275template(8, ClientChatbotComponent_div_17_div_29_button_8_Template, 2, 2, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.quickStarts);
  }
}
function ClientChatbotComponent_div_17_div_30_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "\u2714\u2714");
    \u0275\u0275elementEnd();
  }
}
function ClientChatbotComponent_div_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275element(4, "div", 74);
    \u0275\u0275elementStart(5, "div", 75)(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClientChatbotComponent_div_17_div_30_span_8_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("user", m_r8.role === "user")("bot", m_r8.role === "bot");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.role === "bot" ? "\u{1F916}" : "\u{1F464}");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.formatContent(m_r8.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r8.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r8.role === "user");
  }
}
function ClientChatbotComponent_div_17_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 72);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 80);
    \u0275\u0275element(5, "span", 81)(6, "span", 81)(7, "span", 81);
    \u0275\u0275elementEnd()()();
  }
}
function ClientChatbotComponent_div_17_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u27A4");
    \u0275\u0275elementEnd();
  }
}
function ClientChatbotComponent_div_17_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 82);
  }
}
function ClientChatbotComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 32);
    \u0275\u0275element(5, "rect", 33)(6, "circle", 34)(7, "circle", 35)(8, "circle", 36)(9, "circle", 37)(10, "rect", 38)(11, "line", 39)(12, "circle", 40)(13, "rect", 41)(14, "rect", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div")(16, "div", 43);
    \u0275\u0275text(17, "Matchy Bot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 44);
    \u0275\u0275text(19, "\u25CF Online");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 45)(21, "button", 46);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearChat());
    });
    \u0275\u0275text(22, "\u{1F5D1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 47);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_17_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(24, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 48);
    \u0275\u0275template(26, ClientChatbotComponent_div_17_button_26_Template, 4, 3, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 50, 0);
    \u0275\u0275template(29, ClientChatbotComponent_div_17_div_29_Template, 9, 1, "div", 51)(30, ClientChatbotComponent_div_17_div_30_Template, 9, 8, "div", 52)(31, ClientChatbotComponent_div_17_div_31_Template, 8, 0, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 54)(33, "div", 55)(34, "textarea", 56, 1);
    \u0275\u0275twoWayListener("ngModelChange", function ClientChatbotComponent_div_17_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userInput, $event) || (ctx_r1.userInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientChatbotComponent_div_17_Template_textarea_input_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInput());
    })("keydown", function ClientChatbotComponent_div_17_Template_textarea_keydown_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 57);
    \u0275\u0275listener("click", function ClientChatbotComponent_div_17_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275template(37, ClientChatbotComponent_div_17_span_37_Template, 2, 0, "span", 58)(38, ClientChatbotComponent_div_17_span_38_Template, 1, 0, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 60)(40, "span", 61);
    \u0275\u0275text(41, "Enter \u21B5 to send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 62);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.suggestions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.messages.length === 0 && !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("focused", ctx_r1.userInput.length > 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userInput);
    \u0275\u0275property("disabled", ctx_r1.isLoading)("maxlength", ctx_r1.MAX_CHARS);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading || !ctx_r1.userInput.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("warn", ctx_r1.charCount > 450);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.charCount, "/", ctx_r1.MAX_CHARS, "");
  }
}
var ClientChatbotComponent = class _ClientChatbotComponent {
  constructor(chatbotService, authService) {
    this.chatbotService = chatbotService;
    this.authService = authService;
    this.isOpen = false;
    this.isLoading = false;
    this.userInput = "";
    this.charCount = 0;
    this.unreadCount = 0;
    this.hasOpened = false;
    this.badgeToast = null;
    this.messages = [];
    this.history = [];
    this.shouldScroll = false;
    this.knownBadges = [];
    this.MAX_CHARS = 500;
    this.allBadgeDefs = [
      { icon: "\u{1F680}", name: "First Project", desc: "Posted your first project", key: "FIRST_PROJECT" },
      { icon: "\u{1F4CB}", name: "Active Client", desc: "Actively posting projects", key: "ACTIVE_CLIENT" },
      { icon: "\u{1F4AA}", name: "Power Client", desc: "Completed 5+ projects", key: "POWER_CLIENT" },
      { icon: "\u{1F3C6}", name: "Mega Client", desc: "Completed 10+ projects", key: "MEGA_CLIENT" },
      { icon: "\u2B50", name: "Loyal Client", desc: "Active for 30+ days", key: "LOYAL_CLIENT" },
      { icon: "\u26A1", name: "Speed Poster", desc: "Post 3 projects in 1 day", key: "SPEED_POSTER" },
      { icon: "\u{1F48E}", name: "VIP Client", desc: "Spend 5000+ TND", key: "VIP_CLIENT" },
      { icon: "\u{1F31F}", name: "Top Reviewer", desc: "Leave 10+ reviews", key: "TOP_REVIEWER" },
      { icon: "\u{1F91D}", name: "Team Player", desc: "Hire 5 different freelancers", key: "TEAM_PLAYER" },
      { icon: "\u{1F451}", name: "Legend", desc: "Complete 25+ projects", key: "LEGEND" }
    ];
    this.suggestions = [
      { icon: "\u{1F4CB}", text: "How to post a project?" },
      { icon: "\u{1F4B0}", text: "How to set my budget?" },
      { icon: "\u{1F50D}", text: "How to find a freelancer?" },
      { icon: "\u2B50", text: "How to leave a review?" }
    ];
    this.quickStarts = [
      { icon: "\u{1F4DD}", text: "Post a new project" },
      { icon: "\u{1F91D}", text: "How to hire a freelancer?" },
      { icon: "\u{1F4B3}", text: "Payment methods" },
      { icon: "\u{1F4CA}", text: "Track my projects" }
    ];
  }
  ngOnInit() {
    this.loadInitialBadges();
    this.badgeCheckInterval = setInterval(() => this.checkNewBadges(), 3e4);
  }
  ngOnDestroy() {
    if (this.badgeCheckInterval)
      clearInterval(this.badgeCheckInterval);
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
  }
  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }
  loadInitialBadges() {
    const userId = this.authService.currentUser?.id;
    if (!userId)
      return;
    fetch(`http://localhost:8081/api/badges/user/${userId}`).then((r) => r.json()).then((data) => {
      this.knownBadges = data.map((b) => b.badgeType ?? b.key ?? b.name);
    }).catch(() => {
    });
  }
  checkNewBadges() {
    const userId = this.authService.currentUser?.id;
    if (!userId)
      return;
    fetch(`http://localhost:8081/api/badges/user/${userId}`).then((r) => r.json()).then((data) => {
      const currentKeys = data.map((b) => b.badgeType ?? b.key ?? b.name);
      const newBadges = currentKeys.filter((k) => !this.knownBadges.includes(k));
      if (newBadges.length > 0) {
        newBadges.forEach((key) => {
          const badgeDef = this.allBadgeDefs.find((b) => b.key === key);
          if (badgeDef) {
            this.showBadgeToast(badgeDef);
            this.sendBadgeEmail(badgeDef);
          }
        });
        this.knownBadges = currentKeys;
      }
    }).catch(() => {
    });
  }
  showBadgeToast(badge) {
    this.badgeToast = badge;
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.dismissToast(), 6e3);
  }
  dismissToast() {
    this.badgeToast = null;
  }
  sendBadgeEmail(badge) {
    const userId = this.authService.currentUser?.id;
    const email = this.authService.currentUser?.email;
    if (!userId || !email)
      return;
    fetch(`http://localhost:8081/api/badges/notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email, badgeKey: badge.key, badgeName: badge.name, badgeDesc: badge.desc })
    }).catch(() => {
    });
  }
  onEscape() {
    if (this.isOpen)
      this.close();
  }
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.hasOpened = true;
      this.unreadCount = 0;
      setTimeout(() => this.inputRef?.nativeElement.focus(), 200);
    }
  }
  close() {
    this.isOpen = false;
  }
  onInput() {
    this.charCount = this.userInput.length;
    const ta = this.inputRef?.nativeElement;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
    }
  }
  onKeydown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.send();
    }
  }
  sendSuggestion(text) {
    this.userInput = text;
    this.send();
  }
  send() {
    const text = this.userInput.trim();
    if (!text || this.isLoading)
      return;
    const time = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    this.messages.push({ role: "user", content: text, time });
    this.history.push({ role: "user", content: text });
    this.userInput = "";
    this.charCount = 0;
    this.shouldScroll = true;
    if (this.inputRef?.nativeElement) {
      this.inputRef.nativeElement.style.height = "auto";
    }
    this.isLoading = true;
    this.chatbotService.sendMessage(this.history).subscribe({
      next: (res) => {
        const botText = res?.content?.[0]?.text ?? "No response.";
        const botTime = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        this.messages.push({ role: "bot", content: botText, time: botTime });
        this.history.push({ role: "assistant", content: botText });
        this.isLoading = false;
        this.shouldScroll = true;
        if (!this.isOpen)
          this.unreadCount++;
      },
      error: () => {
        this.messages.push({ role: "bot", content: "\u{1F50C} Connection error. Please try again.", time: (/* @__PURE__ */ new Date()).toLocaleTimeString() });
        this.isLoading = false;
        this.shouldScroll = true;
      }
    });
  }
  formatContent(text) {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");
  }
  scrollToBottom() {
    const el = this.messagesRef?.nativeElement;
    if (el)
      el.scrollTop = el.scrollHeight;
  }
  clearChat() {
    this.messages = [];
    this.history = [];
  }
  static {
    this.\u0275fac = function ClientChatbotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientChatbotComponent)(\u0275\u0275directiveInject(ChatbotService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientChatbotComponent, selectors: [["app-client-chatbot"]], viewQuery: function ClientChatbotComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
      }
    }, hostBindings: function ClientChatbotComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ClientChatbotComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 18, vars: 5, consts: [["messagesRef", ""], ["inputRef", ""], ["class", "badge-toast", 3, "click", 4, "ngIf"], ["title", "Chat with Matchy", 1, "cw-fab", 3, "click"], [1, "robot-icon"], ["viewBox", "0 0 64 64", "xmlns", "http://www.w3.org/2000/svg", "fill", "white"], ["x", "14", "y", "18", "width", "36", "height", "28", "rx", "6", "fill", "white", "opacity", "0.95"], ["cx", "24", "cy", "30", "r", "4", "fill", "#6366f1"], ["cx", "40", "cy", "30", "r", "4", "fill", "#6366f1"], ["cx", "25.5", "cy", "28.5", "r", "1.5", "fill", "white"], ["cx", "41.5", "cy", "28.5", "r", "1.5", "fill", "white"], ["x", "22", "y", "37", "width", "20", "height", "3", "rx", "1.5", "fill", "#6366f1", "opacity", "0.7"], ["x1", "32", "y1", "18", "x2", "32", "y2", "10", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round"], ["cx", "32", "cy", "8", "r", "3", "fill", "#a855f7"], ["x", "8", "y", "26", "width", "6", "height", "8", "rx", "2", "fill", "white", "opacity", "0.8"], ["x", "50", "y", "26", "width", "6", "height", "8", "rx", "2", "fill", "white", "opacity", "0.8"], ["x", "22", "y", "46", "width", "20", "height", "4", "rx", "2", "fill", "white", "opacity", "0.4"], ["class", "cw-badge", 4, "ngIf"], [1, "fab-pulse"], ["class", "cw-window visible", 4, "ngIf"], [1, "badge-toast", 3, "click"], [1, "badge-toast-icon"], [1, "badge-toast-content"], [1, "badge-toast-title"], [1, "badge-toast-name"], [1, "badge-toast-desc"], [1, "badge-toast-close", 3, "click"], [1, "cw-badge"], [1, "cw-window", "visible"], [1, "cw-header"], [1, "cw-header-info"], [1, "cw-avatar"], ["viewBox", "0 0 40 40", "xmlns", "http://www.w3.org/2000/svg"], ["x", "6", "y", "10", "width", "28", "height", "22", "rx", "5", "fill", "white", "opacity", "0.9"], ["cx", "14", "cy", "19", "r", "3.5", "fill", "#6366f1"], ["cx", "26", "cy", "19", "r", "3.5", "fill", "#6366f1"], ["cx", "15", "cy", "18", "r", "1.2", "fill", "white"], ["cx", "27", "cy", "18", "r", "1.2", "fill", "white"], ["x", "13", "y", "25", "width", "14", "height", "2.5", "rx", "1.2", "fill", "#6366f1", "opacity", "0.6"], ["x1", "20", "y1", "10", "x2", "20", "y2", "5", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "20", "cy", "4", "r", "2.5", "fill", "#a855f7"], ["x", "2", "y", "17", "width", "4", "height", "6", "rx", "1.5", "fill", "white", "opacity", "0.7"], ["x", "34", "y", "17", "width", "4", "height", "6", "rx", "1.5", "fill", "white", "opacity", "0.7"], [1, "cw-name"], [1, "cw-status"], [1, "cw-header-actions"], ["title", "Clear", 1, "cw-action-btn", 3, "click"], ["title", "Close", 1, "cw-action-btn", 3, "click"], [1, "cw-suggestions"], ["class", "cw-chip", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "cw-messages"], ["class", "cw-empty", 4, "ngIf"], ["class", "msg-row", 3, "user", "bot", 4, "ngFor", "ngForOf"], ["class", "msg-row bot", 4, "ngIf"], [1, "cw-input-area"], [1, "cw-input-wrap"], ["placeholder", "Ask your question...", "rows", "1", 1, "cw-textarea", 3, "ngModelChange", "input", "keydown", "ngModel", "disabled", "maxlength"], ["title", "Send", 1, "cw-send-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "btn-spinner", 4, "ngIf"], [1, "cw-footer"], [1, "cw-hint"], [1, "cw-count"], [1, "cw-chip", 3, "click", "disabled"], [1, "cw-empty"], [1, "empty-orb"], [1, "empty-title"], [1, "empty-sub"], [1, "quick-grid"], ["class", "quick-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-btn", 3, "click"], [1, "msg-row"], [1, "msg-avatar"], [1, "msg-content"], [1, "msg-bubble", 3, "innerHTML"], [1, "msg-meta"], [1, "msg-time"], ["class", "msg-tick", 4, "ngIf"], [1, "msg-tick"], [1, "msg-row", "bot"], [1, "typing-bubble"], [1, "t-dot"], [1, "btn-spinner"]], template: function ClientChatbotComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ClientChatbotComponent_div_0_Template, 12, 3, "div", 2);
        \u0275\u0275elementStart(1, "button", 3);
        \u0275\u0275listener("click", function ClientChatbotComponent_Template_button_click_1_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 5);
        \u0275\u0275element(4, "rect", 6)(5, "circle", 7)(6, "circle", 8)(7, "circle", 9)(8, "circle", 10)(9, "rect", 11)(10, "line", 12)(11, "circle", 13)(12, "rect", 14)(13, "rect", 15)(14, "rect", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, ClientChatbotComponent_span_15_Template, 2, 1, "span", 17);
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(16, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, ClientChatbotComponent_div_17_Template, 44, 16, "div", 19);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.badgeToast);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.isOpen);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --bg: #0d0f1c;\n  --s1: #13162b;\n  --s2: #1b1f38;\n  --s3: #222744;\n  --border: rgba(255,255,255,0.07);\n  --border2: rgba(255,255,255,0.12);\n  --accent: #6c63ff;\n  --accent2: #a78bfa;\n  --pink: #f472b6;\n  --green: #34d399;\n  --text: #eef0f8;\n  --muted: #7b82a8;\n  --muted2: #9ca3c4;\n  --shadow: 0 16px 60px rgba(0,0,0,0.6);\n  --glow: 0 0 50px rgba(108,99,255,0.2);\n  --r: 20px;\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2147483640;\n  font-family:\n    "DM Sans",\n    "Outfit",\n    system-ui,\n    sans-serif;\n}\n@keyframes _ngcontent-%COMP%_windowIn {\n  from {\n    opacity: 0;\n    transform: scale(0.92) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_msgIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_dot {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.35;\n  }\n  30% {\n    transform: translateY(-6px);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.35;\n  }\n  50% {\n    transform: scale(1.9);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-7px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fabRing {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.9);\n    opacity: 0;\n  }\n}\n.cw-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--pink));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  border: none;\n  box-shadow: 0 6px 28px rgba(108, 99, 255, 0.5);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;\n}\n.cw-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 10px 36px rgba(108, 99, 255, 0.65);\n}\n.fab-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.cw-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  background: var(--pink);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--bg);\n  animation: _ngcontent-%COMP%_msgIn 0.3s both;\n}\n.cw-window[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  width: 390px;\n  height: 600px;\n  background: var(--s1);\n  border: 1px solid var(--border2);\n  border-radius: var(--r);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: var(--shadow), var(--glow);\n  z-index: 2147483646;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.92) translateY(20px);\n  transform-origin: bottom right;\n  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.cw-window.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n  transform: scale(1) translateY(0);\n}\n@media (max-width: 480px) {\n  .cw-window[_ngcontent-%COMP%] {\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    height: 90vh;\n    border-radius: 24px 24px 0 0;\n  }\n}\n.cw-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.cw-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cw-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--pink));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 16px rgba(108, 99, 255, 0.35);\n}\n.cw-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: -0.2px;\n  color: var(--text);\n}\n.cw-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--green);\n  font-weight: 500;\n  margin-top: 2px;\n}\n.cw-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.cw-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: var(--s2);\n  border: 1px solid var(--border);\n  color: var(--muted2);\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.cw-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--s3);\n  color: var(--text);\n  transform: scale(1.05);\n}\n.cw-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  scrollbar-width: none;\n}\n.cw-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cw-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 50px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--muted2);\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cw-chip[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--s3);\n  border-color: rgba(108, 99, 255, 0.4);\n  color: var(--text);\n  transform: translateY(-1px);\n}\n.cw-chip[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  scroll-behavior: smooth;\n}\n.cw-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--s3);\n  border-radius: 3px;\n}\n.cw-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  padding: 16px 8px;\n  flex: 1;\n}\n.empty-orb[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(108, 99, 255, 0.2),\n      rgba(244, 114, 182, 0.2));\n  border: 1px solid rgba(108, 99, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 4px;\n  animation: _ngcontent-%COMP%_float 3.5s ease-in-out infinite;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  letter-spacing: -0.2px;\n  margin-bottom: 4px;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--muted);\n  line-height: 1.6;\n  max-width: 280px;\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  justify-content: center;\n  margin-top: 8px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 50px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--muted2);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: var(--s3);\n  border-color: rgba(108, 99, 255, 0.4);\n  color: var(--text);\n  transform: translateY(-2px);\n}\n.msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  animation: _ngcontent-%COMP%_msgIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.msg-row.user[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  align-self: flex-end;\n  max-width: 85%;\n}\n.msg-row.bot[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  max-width: 90%;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  margin-top: 3px;\n}\n.bot[_ngcontent-%COMP%]   .msg-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent2));\n}\n.user[_ngcontent-%COMP%]   .msg-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--pink),\n      #fb7185);\n}\n.msg-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  padding: 11px 15px;\n  font-size: 13.5px;\n  line-height: 1.65;\n  border-radius: 16px;\n}\n.bot[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  border-top-left-radius: 4px;\n  color: var(--text);\n}\n.user[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #8b5cf6);\n  border-top-right-radius: 4px;\n  color: white;\n  box-shadow: 0 4px 18px rgba(108, 99, 255, 0.3);\n}\n.msg-bubble[_ngcontent-%COMP%]     strong {\n  font-weight: 700;\n  color: var(--accent2);\n}\n.msg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--muted);\n  padding: 0 3px;\n}\n.user[_ngcontent-%COMP%]   .msg-meta[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.msg-tick[_ngcontent-%COMP%] {\n  color: var(--accent2);\n  font-size: 11px;\n}\n.typing-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 16px;\n  border-radius: 16px;\n  border-top-left-radius: 4px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n}\n.t-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--muted);\n  animation: _ngcontent-%COMP%_dot 1.4s ease-in-out infinite;\n}\n.t-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.t-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.cw-input-area[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.02);\n}\n.cw-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 9px;\n  background: var(--s2);\n  border: 1.5px solid var(--border2);\n  border-radius: 16px;\n  padding: 10px 12px;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.cw-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(108, 99, 255, 0.5);\n  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--text);\n  font-family: inherit;\n  font-size: 13.5px;\n  line-height: 1.5;\n  resize: none;\n  min-height: 21px;\n  max-height: 100px;\n}\n.cw-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--muted);\n}\n.cw-textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-send-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent2));\n  border: none;\n  color: white;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  box-shadow: 0 3px 14px rgba(108, 99, 255, 0.35);\n}\n.cw-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.08);\n  box-shadow: 0 5px 18px rgba(108, 99, 255, 0.5);\n}\n.cw-send-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.cw-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.cw-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding: 0 3px;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--muted);\n}\n.cw-count[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--muted);\n}\n.cw-count.warn[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-weight: 600;\n}\n.cw-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 2147483647;\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  padding: 0;\n}\n.robot-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.robot-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cw-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12) translateY(-4px);\n  box-shadow: 0 10px 35px rgba(99, 102, 241, 0.65);\n}\n.cw-fab[_ngcontent-%COMP%]:hover   .robot-icon[_ngcontent-%COMP%] {\n  transform: rotate(10deg) scale(1.05);\n}\n.fab-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: inherit;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_pulse-ring 2.5s ease-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.badge-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 110px;\n  right: 30px;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b,\n      #2d1b69);\n  border: 1.5px solid rgba(168, 85, 247, 0.5);\n  border-radius: 18px;\n  padding: 16px 20px;\n  min-width: 300px;\n  max-width: 360px;\n  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);\n  animation: _ngcontent-%COMP%_toastIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  cursor: pointer;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateX(80px) scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.badge-toast-icon[_ngcontent-%COMP%] {\n  font-size: 38px;\n  animation: _ngcontent-%COMP%_badgeBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_badgeBounce {\n  from {\n    transform: scale(0) rotate(-30deg);\n  }\n  to {\n    transform: scale(1) rotate(0deg);\n  }\n}\n.badge-toast-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.badge-toast-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #a78bfa;\n  margin-bottom: 3px;\n}\n.badge-toast-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 2px;\n}\n.badge-toast-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.badge-toast-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.badge-toast-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.cw-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n.cw-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=chatbot.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientChatbotComponent, { className: "ClientChatbotComponent", filePath: "app\\client\\chatbot\\chatbot.component.ts", lineNumber: 26 });
})();

// src/app/client/layout/cl-layout.component.ts
var ClLayoutComponent = class _ClLayoutComponent {
  static {
    this.\u0275fac = function ClLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClLayoutComponent, selectors: [["app-cl-layout"]], decls: 5, vars: 0, consts: [[1, "cl-layout"], [1, "cl-content"]], template: function ClLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-cl-sidebar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-client-chatbot");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, ClSidebarComponent, ClientChatbotComponent], styles: ["\n\n.cl-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--bo-bg-primary);\n  font-family: var(--font-body);\n}\n.cl-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 32px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=cl-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClLayoutComponent, { className: "ClLayoutComponent", filePath: "app\\client\\layout\\cl-layout.component.ts", lineNumber: 30 });
})();

// src/app/client/dashboard/dashboard.component.ts
function ClDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading your dashboard...");
    \u0275\u0275elementEnd()();
  }
}
function ClDashboardComponent_ng_container_18_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
}
function ClDashboardComponent_ng_container_18_div_57_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "\u2714 Earned");
    \u0275\u0275elementEnd();
  }
}
function ClDashboardComponent_ng_container_18_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 47)(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClDashboardComponent_ng_container_18_div_57_div_9_Template, 2, 0, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275classProp("badge-unlocked", !b_r1.locked)("badge-locked", b_r1.locked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r1.locked ? "\u{1F512}" : b_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.desc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !b_r1.locked);
  }
}
function ClDashboardComponent_ng_container_18_div_58_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function ClDashboardComponent_ng_container_18_div_58_div_11_Template_div_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openDelivery(p_r3));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "div", 62);
    \u0275\u0275text(3, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementStart(10, "span", 65);
    \u0275\u0275text(11, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 66)(14, "span", 67);
    \u0275\u0275text(15, "Delivered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 68);
    \u0275\u0275text(17, "Review \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 3, p_r3.budget), " TND ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", p_r3.category, " ");
  }
}
function ClDashboardComponent_ng_container_18_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54);
    \u0275\u0275element(3, "span", 55);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u{1F4E6} Deliveries waiting for your review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275text(9, "A freelancer submitted work \u2013 confirm or request a revision.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 58);
    \u0275\u0275template(11, ClDashboardComponent_ng_container_18_div_58_div_11_Template, 18, 5, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.deliveredProjects.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.deliveredProjects);
  }
}
function ClDashboardComponent_ng_container_18_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "\u{1F52D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No projects yet. ");
    \u0275\u0275elementStart(5, "a", 71);
    \u0275\u0275text(6, "Create one!");
    \u0275\u0275elementEnd()()();
  }
}
function ClDashboardComponent_ng_container_18_div_69_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r5.budget, " TND");
  }
}
function ClDashboardComponent_ng_container_18_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "div", 75);
    \u0275\u0275elementStart(2, "div", 76)(3, "span", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ClDashboardComponent_ng_container_18_div_69_div_1_span_5_Template, 2, 1, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.budget);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getStatusClass(p_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.status);
  }
}
function ClDashboardComponent_ng_container_18_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, ClDashboardComponent_ng_container_18_div_69_div_1_Template, 8, 5, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.projects);
  }
}
function ClDashboardComponent_ng_container_18_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "\u{1F515}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No new notifications");
    \u0275\u0275elementEnd()();
  }
}
function ClDashboardComponent_ng_container_18_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "div", 84);
    \u0275\u0275elementStart(2, "div", 85)(3, "span", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r6.read);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r6.message);
  }
}
function ClDashboardComponent_ng_container_18_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, ClDashboardComponent_ng_container_18_div_79_div_1_Template, 7, 4, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.notifications);
  }
}
function ClDashboardComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16);
    \u0275\u0275element(3, "div", 17);
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10, "Total Projects");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 22);
    \u0275\u0275element(12, "div", 17);
    \u0275\u0275elementStart(13, "div", 18);
    \u0275\u0275text(14, "\u{1F7E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19, "Open");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 23);
    \u0275\u0275element(21, "div", 17);
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275text(23, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "span", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 21);
    \u0275\u0275text(28, "In Progress");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275element(30, "div", 17);
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275text(32, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19)(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 21);
    \u0275\u0275text(37, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 25);
    \u0275\u0275element(39, "div", 17);
    \u0275\u0275elementStart(40, "div", 18);
    \u0275\u0275text(41, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19)(43, "span", 20);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 21);
    \u0275\u0275text(46, "Unread Notifs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, ClDashboardComponent_ng_container_18_div_47_Template, 1, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 27)(49, "div", 28)(50, "h3")(51, "span");
    \u0275\u0275text(52, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " My Achievements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 29);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 30);
    \u0275\u0275template(57, ClDashboardComponent_ng_container_18_div_57_Template, 10, 8, "div", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, ClDashboardComponent_ng_container_18_div_58_Template, 12, 2, "div", 32);
    \u0275\u0275elementStart(59, "div", 33)(60, "div", 34)(61, "div", 35)(62, "h3")(63, "span", 36);
    \u0275\u0275text(64, "\u{1F4C2}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "My Recent Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "a", 37);
    \u0275\u0275text(67, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, ClDashboardComponent_ng_container_18_div_68_Template, 7, 0, "div", 38)(69, ClDashboardComponent_ng_container_18_div_69_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 40)(71, "div", 35)(72, "h3")(73, "span", 36);
    \u0275\u0275text(74, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "a", 41);
    \u0275\u0275text(77, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(78, ClDashboardComponent_ng_container_18_div_78_Template, 5, 0, "div", 38)(79, ClDashboardComponent_ng_container_18_div_79_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.stats.total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.stats.open);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.stats.inProgress);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.stats.completed);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.stats.unreadNotifs);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.stats.unreadNotifs > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r3.earnedCount, " / ", ctx_r3.allBadges.length, " unlocked");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.mergedBadges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deliveredProjects.length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.projects.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.projects.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notifications.length > 0);
  }
}
function ClDashboardComponent_div_19_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "label", 104);
    \u0275\u0275text(2, "\u{1F517} Delivery Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 106);
    \u0275\u0275text(6, "\u2197");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r3.selectedDelivery.deliveryLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedDelivery.deliveryLink, "");
  }
}
function ClDashboardComponent_div_19_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "label", 104);
    \u0275\u0275text(2, "\u{1F4AC} Freelancer's Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedDelivery.deliveryMessage);
  }
}
function ClDashboardComponent_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span");
    \u0275\u0275text(2, "\u{1F50E}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No delivery link or message provided.");
    \u0275\u0275elementEnd()();
  }
}
function ClDashboardComponent_div_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 104);
    \u0275\u0275text(2, "\u270F\uFE0F Revision Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ClDashboardComponent_div_19_div_17_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.revisionMessage, $event) || (ctx_r3.revisionMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.revisionMessage);
  }
}
function ClDashboardComponent_div_19_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showRevisionInput = !ctx_r3.showRevisionInput);
    });
    \u0275\u0275text(1, " \u{1F4DD} Request Revision ");
    \u0275\u0275elementEnd();
  }
}
function ClDashboardComponent_div_19_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.requestRevision());
    });
    \u0275\u0275text(1, " Send Revision Request ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r3.revisionMessage.trim());
  }
}
function ClDashboardComponent_div_19_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.showRevisionInput = false;
      return \u0275\u0275resetView(ctx_r3.revisionMessage = "");
    });
    \u0275\u0275text(1, " Cancel ");
    \u0275\u0275elementEnd();
  }
}
function ClDashboardComponent_div_19_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openPaymentModal());
    });
    \u0275\u0275text(1, " \u{1F4B3} Confirm & Pay ");
    \u0275\u0275elementEnd();
  }
}
function ClDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeliveryModal());
    });
    \u0275\u0275elementStart(1, "div", 89);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 90)(3, "div", 91)(4, "span", 92);
    \u0275\u0275text(5, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Review Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 93);
    \u0275\u0275listener("click", function ClDashboardComponent_div_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeliveryModal());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94);
    \u0275\u0275template(14, ClDashboardComponent_div_19_div_14_Template, 7, 2, "div", 95)(15, ClDashboardComponent_div_19_div_15_Template, 5, 1, "div", 95)(16, ClDashboardComponent_div_19_div_16_Template, 5, 0, "div", 96)(17, ClDashboardComponent_div_19_div_17_Template, 4, 1, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 98);
    \u0275\u0275template(19, ClDashboardComponent_div_19_button_19_Template, 2, 0, "button", 99)(20, ClDashboardComponent_div_19_button_20_Template, 2, 1, "button", 100)(21, ClDashboardComponent_div_19_button_21_Template, 2, 0, "button", 101)(22, ClDashboardComponent_div_19_button_22_Template, 2, 0, "button", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.deliveryLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.deliveryMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.deliveryLink) && !(ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.deliveryMessage));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRevisionInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.showRevisionInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRevisionInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRevisionInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showRevisionInput);
  }
}
function ClDashboardComponent_div_20_ng_container_2_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "div", 155);
    \u0275\u0275text(3, "\u25FC\u25FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 156);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 157)(7, "div")(8, "div", 158);
    \u0275\u0275text(9, "Titulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 159);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "div", 158);
    \u0275\u0275text(14, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 159);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 160)(18, "label");
    \u0275\u0275text(19, "Num\xE9ro de carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 161);
    \u0275\u0275listener("input", function ClDashboardComponent_div_20_ng_container_2_div_98_Template_input_input_20_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.formatCardNumber($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 160)(22, "label");
    \u0275\u0275text(23, "Nom du titulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function ClDashboardComponent_div_20_ng_container_2_div_98_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.cardHolder, $event) || (ctx_r3.cardHolder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 163)(26, "div", 160)(27, "label");
    \u0275\u0275text(28, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 164);
    \u0275\u0275listener("input", function ClDashboardComponent_div_20_ng_container_2_div_98_Template_input_input_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.formatExpiry($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 160)(31, "label");
    \u0275\u0275text(32, "CVC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 165);
    \u0275\u0275twoWayListener("ngModelChange", function ClDashboardComponent_div_20_ng_container_2_div_98_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.cardCvc, $event) || (ctx_r3.cardCvc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.cardNumber || "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.cardHolder || "VOTRE NOM");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.cardExpiry || "MM/AA");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.cardNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.cardHolder);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r3.cardExpiry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.cardCvc);
  }
}
function ClDashboardComponent_div_20_ng_container_2_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "span", 167);
    \u0275\u0275text(2, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 168);
    \u0275\u0275text(5, "Payer via Flouci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 169);
    \u0275\u0275text(7, " Vous serez redirig\xE9 vers Flouci pour payer ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". Les fonds seront plac\xE9s en escrow jusqu'\xE0 confirmation. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 1, ctx_r3.getTotalAmount(), "1.2-2"), " TND");
  }
}
function ClDashboardComponent_div_20_ng_container_2_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "span", 167);
    \u0275\u0275text(2, "\u{1F3E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 168);
    \u0275\u0275text(5, "Virement bancaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 169);
    \u0275\u0275text(7, " RIB : ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "20 800 0123456789 12");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " B\xE9n\xE9ficiaire : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Matchy Platform");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, " R\xE9f\xE9rence : ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "br");
    \u0275\u0275text(19, " Montant : ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("PRJ-", ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 2, ctx_r3.getTotalAmount(), "1.2-2"), " TND");
  }
}
function ClDashboardComponent_div_20_ng_container_2_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r3.paymentError, "");
  }
}
function ClDashboardComponent_div_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 118)(3, "div", 119);
    \u0275\u0275text(4, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 120);
    \u0275\u0275text(7, "Paiement s\xE9curis\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 121);
    \u0275\u0275text(9, "Payer le freelancer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 122);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closePaymentModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 123)(13, "div", 124)(14, "div", 125);
    \u0275\u0275text(15, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 126);
    \u0275\u0275text(17, "Vous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 127);
    \u0275\u0275text(19, "Client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 128);
    \u0275\u0275element(21, "div", 129);
    \u0275\u0275elementStart(22, "div", 130);
    \u0275\u0275text(23, "paiement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 124)(25, "div", 131);
    \u0275\u0275text(26, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 126);
    \u0275\u0275text(28, "Matchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 127);
    \u0275\u0275text(30, "Escrow");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 128);
    \u0275\u0275element(32, "div", 132);
    \u0275\u0275elementStart(33, "div", 130);
    \u0275\u0275text(34, "lib\xE9ration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 124)(36, "div", 133);
    \u0275\u0275text(37, "\u{1F9D1}\u200D\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 126);
    \u0275\u0275text(39, "Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 127);
    \u0275\u0275text(41, "B\xE9n\xE9ficiaire");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 134)(43, "span");
    \u0275\u0275text(44, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Votre paiement est ");
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48, "s\xE9curis\xE9 par Matchy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, ". Les fonds sont lib\xE9r\xE9s au freelancer uniquement apr\xE8s votre confirmation.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 135)(51, "div", 136)(52, "div")(53, "div", 137);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 138)(56, "span", 139);
    \u0275\u0275text(57, "TND");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 140);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 141);
    \u0275\u0275text(62, "\u{1F9D1}\u200D\u{1F4BB} Freelancer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 142)(64, "div", 143)(65, "span");
    \u0275\u0275text(66, "Montant du projet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 143)(71, "span");
    \u0275\u0275text(72, "Frais de service (5%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 144)(77, "span");
    \u0275\u0275text(78, "Total \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 145)(83, "button", 146);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_2_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.paymentMethod = "card");
    });
    \u0275\u0275elementStart(84, "span", 147);
    \u0275\u0275text(85, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87, "Carte");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "button", 146);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_2_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.paymentMethod = "flouci");
    });
    \u0275\u0275elementStart(89, "span", 147);
    \u0275\u0275text(90, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "Flouci");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "button", 146);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_2_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.paymentMethod = "virement");
    });
    \u0275\u0275elementStart(94, "span", 147);
    \u0275\u0275text(95, "\u{1F3E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "Virement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(98, ClDashboardComponent_div_20_ng_container_2_div_98_Template, 34, 7, "div", 148)(99, ClDashboardComponent_div_20_ng_container_2_div_99_Template, 12, 4, "div", 149)(100, ClDashboardComponent_div_20_ng_container_2_div_100_Template, 23, 5, "div", 149)(101, ClDashboardComponent_div_20_ng_container_2_div_101_Template, 2, 1, "div", 150);
    \u0275\u0275elementStart(102, "button", 151);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_2_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.processPayment());
    });
    \u0275\u0275elementStart(103, "span");
    \u0275\u0275text(104, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 152)(108, "span");
    \u0275\u0275text(109, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " Les fonds sont lib\xE9r\xE9s au freelancer apr\xE8s confirmation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(54);
    \u0275\u0275textInterpolate(ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 16, ctx_r3.getTotalAmount(), "1.2-2"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(69, 19, ctx_r3.getFreelancerAmount(), "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(75, 22, ctx_r3.getServiceFee(), "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(81, 25, ctx_r3.getTotalAmount(), "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r3.paymentMethod === "card");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.paymentMethod === "flouci");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.paymentMethod === "virement");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.paymentMethod === "card");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paymentMethod === "flouci");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paymentMethod === "virement");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paymentError);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Confirmer et payer ", \u0275\u0275pipeBind2(106, 28, ctx_r3.getTotalAmount(), "1.2-2"), " TND ");
  }
}
function ClDashboardComponent_div_20_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 171)(2, "div", 172);
    \u0275\u0275element(3, "div", 173);
    \u0275\u0275elementStart(4, "div", 174);
    \u0275\u0275text(5, "\u{1F4B3}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 175);
    \u0275\u0275text(7, "Traitement en cours...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 176);
    \u0275\u0275text(9, "S\xE9curisation des fonds en escrow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 177);
    \u0275\u0275element(11, "span")(12, "span")(13, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ClDashboardComponent_div_20_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 178)(2, "div", 179);
    \u0275\u0275element(3, "div", 180);
    \u0275\u0275elementStart(4, "div", 181);
    \u0275\u0275text(5, "\u2705");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 182);
    \u0275\u0275text(7, "Paiement effectu\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 183)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " lib\xE9r\xE9s pour");
    \u0275\u0275element(13, "br");
    \u0275\u0275elementStart(14, "em");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 184)(17, "div", 185);
    \u0275\u0275text(18, "R\xE9capitulatif du transfert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 186)(20, "div", 187);
    \u0275\u0275text(21, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 188);
    \u0275\u0275text(23, "Vous (client)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 189);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "div", 190);
    \u0275\u0275elementStart(28, "div", 186)(29, "div", 191);
    \u0275\u0275text(30, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 188);
    \u0275\u0275text(32, "Matchy (frais 5%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 192);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "div", 190);
    \u0275\u0275elementStart(37, "div", 186)(38, "div", 193);
    \u0275\u0275text(39, "\u{1F9D1}\u200D\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 188);
    \u0275\u0275text(41, "Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 194);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 195);
    \u0275\u0275text(46, "\u2714 Projet marqu\xE9 comme Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 196);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_ng_container_4_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.finishPayment());
    });
    \u0275\u0275text(48, "Fermer \u{1F389}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 5, ctx_r3.getTotalAmount(), "1.2-2"), " TND");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedDelivery == null ? null : ctx_r3.selectedDelivery.title);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(26, 8, ctx_r3.getTotalAmount(), "1.2-2"), " TND");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(35, 11, ctx_r3.getServiceFee(), "1.2-2"), " TND");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(44, 14, ctx_r3.getFreelancerAmount(), "1.2-2"), " TND");
  }
}
function ClDashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closePaymentModal());
    });
    \u0275\u0275elementStart(1, "div", 116);
    \u0275\u0275listener("click", function ClDashboardComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ClDashboardComponent_div_20_ng_container_2_Template, 111, 31, "ng-container", 10)(3, ClDashboardComponent_div_20_ng_container_3_Template, 14, 0, "ng-container", 10)(4, ClDashboardComponent_div_20_ng_container_4_Template, 49, 17, "ng-container", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.paymentStep === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paymentStep === "processing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paymentStep === "success");
  }
}
var ClDashboardComponent = class _ClDashboardComponent {
  get mergedBadges() {
    const earnedKeys = this.badges.map((b) => b.badgeType ?? b.key ?? b.name);
    return this.allBadges.map((b) => {
      let earned = earnedKeys.includes(b.key);
      if (!earned) {
        if (b.key === "FIRST_PROJECT")
          earned = this.stats.total >= 1;
        if (b.key === "ACTIVE_CLIENT")
          earned = this.stats.total >= 3;
        if (b.key === "POWER_CLIENT")
          earned = this.stats.completed >= 5;
        if (b.key === "MEGA_CLIENT")
          earned = this.stats.completed >= 10;
        if (b.key === "LEGEND")
          earned = this.stats.completed >= 25;
      }
      return __spreadProps(__spreadValues({}, b), { locked: !earned });
    });
  }
  get earnedCount() {
    return this.mergedBadges.filter((b) => !b.locked).length;
  }
  constructor(authService, projectService, notifService) {
    this.authService = authService;
    this.projectService = projectService;
    this.notifService = notifService;
    this.isLoading = true;
    this.badges = [];
    this.allBadges = [
      { icon: "\u{1F680}", name: "First Project", desc: "Posted your first project", key: "FIRST_PROJECT" },
      { icon: "\u{1F4CB}", name: "Active Client", desc: "Actively posting projects", key: "ACTIVE_CLIENT" },
      { icon: "\u{1F4AA}", name: "Power Client", desc: "Completed 5+ projects", key: "POWER_CLIENT" },
      { icon: "\u{1F3C6}", name: "Mega Client", desc: "Completed 10+ projects", key: "MEGA_CLIENT" },
      { icon: "\u2B50", name: "Loyal Client", desc: "Active for 30+ days", key: "LOYAL_CLIENT" },
      { icon: "\u26A1", name: "Speed Poster", desc: "Post 3 projects in 1 day", key: "SPEED_POSTER" },
      { icon: "\u{1F48E}", name: "VIP Client", desc: "Spend 5000+ TND", key: "VIP_CLIENT" },
      { icon: "\u{1F31F}", name: "Top Reviewer", desc: "Leave 10+ reviews", key: "TOP_REVIEWER" },
      { icon: "\u{1F91D}", name: "Team Player", desc: "Hire 5 different freelancers", key: "TEAM_PLAYER" },
      { icon: "\u{1F451}", name: "Legend", desc: "Complete 25+ projects", key: "LEGEND" }
    ];
    this.stats = {
      total: 0,
      open: 0,
      inProgress: 0,
      completed: 0,
      unreadNotifs: 0,
      delivered: 0
    };
    this.projects = [];
    this.deliveredProjects = [];
    this.notifications = [];
    this.showDeliveryModal = false;
    this.selectedDelivery = null;
    this.revisionMessage = "";
    this.showRevisionInput = false;
    this.showPaymentModal = false;
    this.paymentStep = "form";
    this.paymentMethod = "card";
    this.paymentError = "";
    this.cardNumber = "";
    this.cardHolder = "";
    this.cardExpiry = "";
    this.cardCvc = "";
    this.SERVICE_FEE_RATE = 0.05;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    const userId = this.authService.currentUser?.id;
    this.projectService.getAll(void 0, userId).subscribe({
      next: (projects) => {
        this.projects = projects.slice(0, 5);
        this.stats.total = projects.length;
        this.stats.open = projects.filter((p) => p.status?.toLowerCase() === "open").length;
        this.stats.inProgress = projects.filter((p) => ["in_progress", "in progress"].includes(p.status?.toLowerCase())).length;
        this.stats.completed = projects.filter((p) => p.status?.toLowerCase() === "completed").length;
        this.deliveredProjects = projects.filter((p) => p.status?.toLowerCase() === "delivered");
        this.stats.delivered = this.deliveredProjects.length;
        this.isLoading = false;
        if (userId) {
          fetch("http://localhost:8081/api/badges/client/project-posted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ clientId: userId, totalProjects: this.stats.total })
          }).then(() => {
            fetch("http://localhost:8081/api/badges/user/" + userId).then((r) => r.json()).then((data) => {
              this.badges = data;
            }).catch(() => {
            });
          }).catch(() => {
            fetch("http://localhost:8081/api/badges/user/" + userId).then((r) => r.json()).then((data) => {
              this.badges = data;
            }).catch(() => {
            });
          });
        }
      },
      error: () => {
        this.isLoading = false;
        if (userId) {
          fetch("http://localhost:8081/api/badges/client/project-posted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ clientId: userId, totalProjects: this.stats.total })
          }).then(() => {
            fetch("http://localhost:8081/api/badges/user/" + userId).then((r) => r.json()).then((data) => {
              this.badges = data;
            }).catch(() => {
            });
          }).catch(() => {
            fetch("http://localhost:8081/api/badges/user/" + userId).then((r) => r.json()).then((data) => {
              this.badges = data;
            }).catch(() => {
            });
          });
        }
      }
    });
    if (userId) {
      this.notifService.getForUser(userId).subscribe({
        next: (notifs) => {
          this.notifications = notifs.slice(0, 5);
          this.stats.unreadNotifs = notifs.filter((n) => !n.read).length;
        },
        error: () => {
        }
      });
    }
  }
  openDelivery(project) {
    this.selectedDelivery = project;
    this.showDeliveryModal = true;
    this.showRevisionInput = false;
    this.revisionMessage = "";
  }
  closeDeliveryModal() {
    this.showDeliveryModal = false;
    this.selectedDelivery = null;
  }
  requestRevision() {
    if (!this.selectedDelivery || !this.revisionMessage.trim())
      return;
    this.projectService.requestRevision(this.selectedDelivery.id, this.revisionMessage, Number(this.authService.currentUser.id)).subscribe({
      next: () => {
        this.closeDeliveryModal();
        this.loadData();
      },
      error: (err) => console.error("Revision error", err)
    });
  }
  getFreelancerAmount() {
    return Number(this.selectedDelivery?.budget) || 0;
  }
  getServiceFee() {
    return +(this.getFreelancerAmount() * this.SERVICE_FEE_RATE).toFixed(2);
  }
  getTotalAmount() {
    return +(this.getFreelancerAmount() + this.getServiceFee()).toFixed(2);
  }
  openPaymentModal() {
    this.showDeliveryModal = false;
    this.showPaymentModal = true;
    this.paymentStep = "form";
    this.paymentMethod = "card";
    this.paymentError = "";
    this.cardNumber = "";
    this.cardHolder = "";
    this.cardExpiry = "";
    this.cardCvc = "";
  }
  closePaymentModal() {
    this.showPaymentModal = false;
    this.paymentStep = "form";
    this.paymentError = "";
  }
  processPayment() {
    if (this.paymentMethod === "card") {
      if (!this.cardNumber || this.cardNumber.replace(/s/g, "").length < 16 || !this.cardHolder.trim() || !this.cardExpiry || this.cardExpiry.length < 5 || !this.cardCvc || this.cardCvc.length < 3) {
        this.paymentError = "Veuillez remplir tous les champs correctement.";
        return;
      }
    }
    this.paymentError = "";
    this.paymentStep = "processing";
    const clientId = Number(this.authService.currentUser.id);
    this.projectService.completeProject(this.selectedDelivery.id, clientId, this.selectedDelivery.acceptedProposalId ?? 0).subscribe({
      next: () => {
        this.paymentStep = "success";
      },
      error: (err) => {
        console.error("Payment error", err);
        this.paymentStep = "form";
        this.paymentError = "Une erreur est survenue.";
      }
    });
  }
  finishPayment() {
    this.closePaymentModal();
    this.selectedDelivery = null;
    this.loadData();
  }
  formatCardNumber(event) {
    let val = event.target.value.replace(/D/g, "").substring(0, 16);
    this.cardNumber = val.replace(/(.{4})/g, "$1 ").trim();
  }
  formatExpiry(event) {
    let val = event.target.value.replace(/D/g, "").substring(0, 4);
    if (val.length >= 3)
      val = val.substring(0, 2) + "/" + val.substring(2);
    this.cardExpiry = val;
  }
  getStatusClass(status) {
    const s = status?.toLowerCase();
    if (s === "open")
      return "badge-open";
    if (s === "in_progress" || s === "in progress")
      return "badge-progress";
    if (s === "completed")
      return "badge-done";
    if (s === "cancelled")
      return "badge-cancelled";
    if (s === "delivered")
      return "badge-delivered";
    return "badge-open";
  }
  static {
    this.\u0275fac = function ClDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClDashboardComponent, selectors: [["app-cl-dashboard"]], decls: 21, vars: 5, consts: [[1, "dashboard"], [1, "page-header", "animate-slide-down"], [1, "header-left"], [1, "welcome-eyebrow"], [1, "page-title"], [1, "user-name"], [1, "wave"], [1, "page-sub"], ["routerLink", "/client/projects", 1, "btn-primary"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "pay-overlay", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "loader-ring"], [1, "stats-grid"], [1, "stat-card", "stat-purple", "animate-fade-up", 2, "animation-delay", "0.05s"], [1, "stat-glow"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "stat-green", "animate-fade-up", 2, "animation-delay", "0.1s"], [1, "stat-card", "stat-amber", "animate-fade-up", 2, "animation-delay", "0.15s"], [1, "stat-card", "stat-blue", "animate-fade-up", 2, "animation-delay", "0.2s"], [1, "stat-card", "stat-red", "animate-fade-up", 2, "animation-delay", "0.25s"], ["class", "pulse-ring", 4, "ngIf"], [1, "badges-section", "animate-fade-up", 2, "animation-delay", "0.28s"], [1, "badges-header"], [1, "badges-count"], [1, "badges-grid"], ["class", "badge-item", 3, "badge-unlocked", "badge-locked", 4, "ngFor", "ngForOf"], ["class", "delivered-banner animate-fade-up", "style", "animation-delay:0.28s", 4, "ngIf"], [1, "two-col"], [1, "card", "animate-fade-up", 2, "animation-delay", "0.35s"], [1, "card-header"], [1, "card-icon"], ["routerLink", "/client/projects", 1, "link-more"], ["class", "empty-state", 4, "ngIf"], ["class", "project-list", 4, "ngIf"], [1, "card", "animate-fade-up", 2, "animation-delay", "0.4s"], ["routerLink", "/client/notifications", 1, "link-more"], ["class", "notif-list", 4, "ngIf"], [1, "pulse-ring"], [1, "badge-item"], [1, "badge-icon-wrap"], [1, "badge-icon"], [1, "badge-info"], [1, "badge-title"], [1, "badge-desc"], ["class", "badge-earned-pill", 4, "ngIf"], [1, "badge-earned-pill"], [1, "delivered-banner", "animate-fade-up", 2, "animation-delay", "0.28s"], [1, "delivered-banner-header"], [1, "delivered-banner-title"], [1, "delivered-pulse"], [1, "delivered-count"], [1, "delivered-banner-sub"], [1, "delivered-list"], ["class", "delivered-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "delivered-item", 3, "click"], [1, "delivered-item-left"], [1, "delivered-item-icon"], [1, "delivered-item-title"], [1, "delivered-item-meta"], [1, "dot-sep"], [1, "delivered-item-right"], [1, "badge", "badge-delivered"], [1, "btn-review"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/client/projects"], [1, "project-list"], ["class", "project-item", 4, "ngFor", "ngForOf"], [1, "project-item"], [1, "project-dot"], [1, "project-info"], [1, "project-title"], ["class", "project-budget", 4, "ngIf"], [1, "badge"], [1, "project-budget"], [1, "notif-list"], ["class", "notif-item", 3, "unread", 4, "ngFor", "ngForOf"], [1, "notif-item"], [1, "notif-dot"], [1, "notif-content"], [1, "notif-title"], [1, "notif-msg"], [1, "modal-backdrop", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-icon"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "delivery-section", 4, "ngIf"], ["class", "delivery-empty", 4, "ngIf"], ["class", "revision-section", 4, "ngIf"], [1, "modal-footer"], ["class", "btn-revision-toggle", 3, "click", 4, "ngIf"], ["class", "btn-send-revision", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-cancel-revision", 3, "click", 4, "ngIf"], ["class", "btn-confirm", 3, "click", 4, "ngIf"], [1, "delivery-section"], [1, "delivery-label"], ["target", "_blank", 1, "delivery-link", 3, "href"], [1, "link-ext"], [1, "delivery-message"], [1, "delivery-empty"], [1, "revision-section"], ["placeholder", "Describe what needs to be changed or improved...", "rows", "3", 1, "revision-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-revision-toggle", 3, "click"], [1, "btn-send-revision", 3, "click", "disabled"], [1, "btn-cancel-revision", 3, "click"], [1, "btn-confirm", 3, "click"], [1, "pay-overlay", 3, "click"], [1, "pay-modal", 3, "click"], [1, "pay-header"], [1, "pay-header-left"], [1, "pay-lock-icon"], [1, "pay-eyebrow"], [1, "pay-title"], [1, "pay-close", 3, "click"], [1, "pay-flow-strip"], [1, "pay-flow-node"], [1, "pay-flow-avatar", "pay-flow-client"], [1, "pay-flow-name"], [1, "pay-flow-role"], [1, "pay-flow-arrow"], [1, "pay-flow-line"], [1, "pay-flow-tag"], [1, "pay-flow-avatar", "pay-flow-platform"], [1, "pay-flow-line", "pay-flow-line-green"], [1, "pay-flow-avatar", "pay-flow-freelancer"], [1, "pay-escrow-note"], [1, "pay-amount-box"], [1, "pay-amount-top"], [1, "pay-project-name"], [1, "pay-amount"], [1, "pay-currency"], [1, "pay-value"], [1, "pay-freelancer-tag"], [1, "pay-breakdown"], [1, "pay-breakdown-row"], [1, "pay-breakdown-row", "pay-breakdown-total"], [1, "pay-methods"], [1, "pay-method", 3, "click"], [1, "pay-method-icon"], ["class", "pay-form", 4, "ngIf"], ["class", "pay-info-box", 4, "ngIf"], ["class", "pay-error", 4, "ngIf"], [1, "pay-btn-submit", 3, "click"], [1, "pay-secure-note"], [1, "pay-form"], [1, "pay-card-preview"], [1, "pay-card-chip"], [1, "pay-card-number-display"], [1, "pay-card-bottom"], [1, "pay-card-label"], [1, "pay-card-val"], [1, "pay-field"], ["type", "text", "placeholder", "1234 5678 9012 3456", "maxlength", "19", 1, "pay-input", 3, "input", "value"], ["type", "text", "placeholder", "Mohamed Ali", 1, "pay-input", 3, "ngModelChange", "ngModel"], [1, "pay-row"], ["type", "text", "placeholder", "MM/AA", "maxlength", "5", 1, "pay-input", 3, "input", "value"], ["type", "text", "placeholder", "\u2022\u2022\u2022", "maxlength", "4", 1, "pay-input", 3, "ngModelChange", "ngModel"], [1, "pay-info-box"], [1, "pay-info-icon"], [1, "pay-info-title"], [1, "pay-info-sub"], [1, "pay-error"], [1, "pay-processing"], [1, "pay-spinner-wrap"], [1, "pay-spinner-ring"], [1, "pay-spinner-inner"], [1, "pay-processing-title"], [1, "pay-processing-sub"], [1, "pay-processing-dots"], [1, "pay-success"], [1, "pay-success-icon-wrap"], [1, "pay-success-ring"], [1, "pay-success-icon"], [1, "pay-success-title"], [1, "pay-success-sub"], [1, "pay-transfer-recap"], [1, "pay-transfer-title"], [1, "pay-transfer-row"], [1, "pay-t-icon", "pay-t-client"], [1, "pay-t-label"], [1, "pay-t-amount", "pay-t-debit"], [1, "pay-t-connector"], [1, "pay-t-icon", "pay-t-platform"], [1, "pay-t-amount", "pay-t-fee"], [1, "pay-t-icon", "pay-t-freelancer"], [1, "pay-t-amount", "pay-t-credit"], [1, "pay-success-badge"], [1, "pay-btn-done", 3, "click"]], template: function ClDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Client Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, " Welcome back, ");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "i", 6);
        \u0275\u0275text(10, "\u{1F44B}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "Here's what's happening with your projects today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "a", 8)(14, "span");
        \u0275\u0275text(15, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Post a Project ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, ClDashboardComponent_div_17_Template, 4, 0, "div", 9)(18, ClDashboardComponent_ng_container_18_Template, 80, 14, "ng-container", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ClDashboardComponent_div_19_Template, 23, 9, "div", 11)(20, ClDashboardComponent_div_20_Template, 5, 3, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((ctx.authService.currentUser == null ? null : ctx.authService.currentUser.firstName) || (ctx.authService.currentUser == null ? null : ctx.authService.currentUser.name));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeliveryModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPaymentModal);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DecimalPipe], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "DM Sans",\n    system-ui,\n    sans-serif;\n}\n.dashboard[_ngcontent-%COMP%] {\n  --bg: #f0f2fb;\n  --bg-card: #ffffff;\n  --bg-card-hover: #f7f8ff;\n  --text: #1a1d2e;\n  --text-muted: #6b7280;\n  --text-light: #9ca3af;\n  --border: rgba(0,0,0,0.07);\n  --shadow: 0 4px 24px rgba(99,102,241,0.08);\n  --shadow-hover: 0 12px 40px rgba(99,102,241,0.18);\n  --accent: #6366f1;\n  --accent-light: rgba(99,102,241,0.1);\n  --radius: 18px;\n  --radius-sm: 11px;\n  --purple: #a855f7;\n  --purple-bg: rgba(168,85,247,0.1);\n  --blue: #6366f1;\n  --blue-bg: rgba(99,102,241,0.1);\n  --green: #22c55e;\n  --green-bg: rgba(34,197,94,0.1);\n  --amber: #f59e0b;\n  --amber-bg: rgba(245,158,11,0.1);\n  --red: #ef4444;\n  --red-bg: rgba(239,68,68,0.1);\n}\nhtml[data-theme=dark][_nghost-%COMP%]   .dashboard[_ngcontent-%COMP%], html[data-theme=dark]   [_nghost-%COMP%]   .dashboard[_ngcontent-%COMP%] {\n  --bg: #080a14;\n  --bg-card: #0f1320;\n  --bg-card-hover: #141828;\n  --text: #e8eaf6;\n  --text-muted: #7986a3;\n  --text-light: #4a5568;\n  --border: rgba(255,255,255,0.07);\n  --shadow: 0 4px 24px rgba(0,0,0,0.4);\n  --shadow-hover: 0 12px 40px rgba(0,0,0,0.6);\n  --accent: #818cf8;\n  --accent-light: rgba(129,140,248,0.12);\n  --purple: #c084fc;\n  --purple-bg: rgba(192,132,252,0.12);\n  --blue: #818cf8;\n  --blue-bg: rgba(129,140,248,0.12);\n  --green: #4ade80;\n  --green-bg: rgba(74,222,128,0.12);\n  --amber: #fbbf24;\n  --amber-bg: rgba(251,191,36,0.12);\n  --red: #f87171;\n  --red-bg: rgba(248,113,113,0.12);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(22deg);\n  }\n  75% {\n    transform: rotate(-12deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow-pulse {\n  0%, 100% {\n    opacity: 0.5;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rowIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: -200% center;\n  }\n  to {\n    background-position: 200% center;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatOrb {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(20px, -15px) scale(1.05);\n  }\n  66% {\n    transform: translate(-10px, 10px) scale(0.97);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(2.5);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_fab-in {\n  from {\n    opacity: 0;\n    transform: scale(0.4) rotate(-180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n.animate-slide-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.animate-fade-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.dashboard[_ngcontent-%COMP%] {\n  background: var(--bg);\n  color: var(--text);\n  min-height: 100vh;\n  padding: 0 0 80px;\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease both;\n  transition: background 0.4s ease, color 0.4s ease;\n}\n.dashboard[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: -200px;\n  left: -200px;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.06) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_floatOrb 12s ease-in-out infinite;\n  pointer-events: none;\n}\n.dashboard[_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  bottom: -200px;\n  right: -200px;\n  width: 500px;\n  height: 500px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 85, 247, 0.05) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_floatOrb 15s ease-in-out infinite reverse;\n  pointer-events: none;\n}\n.theme-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 999;\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.5), 0 0 0 0 rgba(99, 102, 241, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fab-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.theme-fab[_ngcontent-%COMP%]   .fab-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: inherit;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_pulse-ring 2.5s ease-out infinite;\n}\n.theme-fab[_ngcontent-%COMP%]   .fab-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  z-index: 1;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.theme-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15) translateY(-4px);\n  box-shadow: 0 10px 35px rgba(99, 102, 241, 0.65);\n}\n.theme-fab[_ngcontent-%COMP%]:hover   .fab-icon[_ngcontent-%COMP%] {\n  transform: rotate(30deg) scale(1.1);\n}\n.theme-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.93);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 36px 36px 24px;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.welcome-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: var(--accent);\n  background: var(--accent-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 5px 14px;\n  border-radius: 100px;\n  width: fit-content;\n  animation: _ngcontent-%COMP%_scaleIn 0.5s ease both 0.1s;\n}\n.welcome-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--accent);\n  animation: _ngcontent-%COMP%_glow-pulse 2s ease infinite;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.8);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: clamp(26px, 3.5vw, 36px);\n  font-weight: 800;\n  line-height: 1.15;\n  margin: 0;\n  letter-spacing: -1px;\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease both 0.15s;\n}\n.page-title[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #818cf8,\n      #c084fc,\n      #818cf8);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_shimmer 3s linear infinite;\n}\n.page-title[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_wave 2.5s ease-in-out infinite;\n  transform-origin: 70% 70%;\n  margin-left: 6px;\n  -webkit-text-fill-color: initial;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  margin: 0;\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease both 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  color: #fff;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 13px 24px;\n  border-radius: 50px;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  white-space: nowrap;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_scaleIn 0.5s ease both 0.25s;\n  position: relative;\n  overflow: hidden;\n}\n.btn-primary[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.12),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 32px rgba(99, 102, 241, 0.55);\n}\n.btn-primary[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 100px 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loader-ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border);\n  border-top-color: var(--accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  padding: 0 36px;\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius);\n  padding: 22px 20px;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n  box-shadow: var(--shadow);\n  animation: _ngcontent-%COMP%_fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--stat-color, #6366f1),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: var(--stat-color, var(--accent));\n  opacity: 0.06;\n  transition: all 0.4s ease;\n  animation: _ngcontent-%COMP%_glow-pulse 4s ease-in-out infinite;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--stat-color, var(--accent));\n}\n.stat-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-glow[_ngcontent-%COMP%] {\n  opacity: 0.12;\n  transform: scale(1.3);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.12) rotate(-8deg);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-value[_ngcontent-%COMP%] {\n  color: var(--stat-color, var(--accent));\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 48px;\n  height: 48px;\n  background: var(--stat-bg, var(--accent-light));\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  position: relative;\n  z-index: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--text);\n  line-height: 1;\n  letter-spacing: -1.5px;\n  transition: color 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-card[_ngcontent-%COMP%]   .pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--red);\n  z-index: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .pulse-ring[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: var(--red);\n  animation: _ngcontent-%COMP%_pulse-ring 1.5s ease-out infinite;\n}\n.stat-card.stat-purple[_ngcontent-%COMP%] {\n  --stat-color: var(--purple);\n  --stat-bg: var(--purple-bg);\n}\n.stat-card.stat-green[_ngcontent-%COMP%] {\n  --stat-color: var(--green);\n  --stat-bg: var(--green-bg);\n}\n.stat-card.stat-amber[_ngcontent-%COMP%] {\n  --stat-color: var(--amber);\n  --stat-bg: var(--amber-bg);\n}\n.stat-card.stat-blue[_ngcontent-%COMP%] {\n  --stat-color: var(--blue);\n  --stat-bg: var(--blue-bg);\n}\n.stat-card.stat-red[_ngcontent-%COMP%] {\n  --stat-color: var(--red);\n  --stat-bg: var(--red-bg);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  padding: 0 36px;\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 860px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius);\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  transition:\n    box-shadow 0.35s ease,\n    border-color 0.35s ease,\n    background 0.35s ease,\n    transform 0.35s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 22px 26px 18px;\n  border-bottom: 1.5px solid var(--border);\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.link-more[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 13px;\n  border-radius: 20px;\n  background: var(--accent-light);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  transition: all 0.25s ease;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.link-more[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 48px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 600;\n  text-decoration: none;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.project-list[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.project-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 15px 26px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background 0.2s ease;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_rowIn 0.4s ease forwards;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 360ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 420ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 480ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 540ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 600ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 660ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 720ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 780ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 840ms;\n}\n.project-item[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 900ms;\n}\n.project-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.project-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n}\n.project-item[_ngcontent-%COMP%]:hover   .project-dot[_ngcontent-%COMP%] {\n  transform: scale(1.6);\n  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);\n}\n.project-item[_ngcontent-%COMP%]:hover   .project-title[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.project-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  flex-shrink: 0;\n  transition: all 0.25s ease;\n}\n.project-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.project-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s;\n}\n.project-budget[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--green);\n}\n.project-budget[_ngcontent-%COMP%]::before {\n  content: "";\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 50px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.badge.badge-open[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--blue);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.badge.badge-progress[_ngcontent-%COMP%] {\n  background: var(--amber-bg);\n  color: var(--amber);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n}\n.badge.badge-done[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.notif-list[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 15px 26px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background 0.2s ease;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_rowIn 0.4s ease forwards;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 415ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 480ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 545ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 610ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 675ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 740ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 805ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 870ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 935ms;\n}\n.notif-item[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 1000ms;\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-hover);\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.04);\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-dot[_ngcontent-%COMP%] {\n  background: var(--accent);\n  box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);\n  animation: _ngcontent-%COMP%_glow-pulse 2s ease infinite;\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-title[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-weight: 700;\n}\n.notif-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--text-light);\n  flex-shrink: 0;\n  margin-top: 4px;\n  transition: all 0.2s;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-muted);\n  transition: color 0.2s;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-light);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 24px 20px;\n    gap: 14px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .two-col[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.badges-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fefce8,\n      #fdf4ff);\n  border: 1px solid rgba(168, 85, 247, 0.2);\n  border-radius: 16px;\n  padding: 20px 24px;\n  margin-bottom: 24px;\n}\n.badges-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.badges-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1F2937;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n}\n.badges-header[_ngcontent-%COMP%]   .badges-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7C3AED;\n  font-weight: 600;\n  background: #F3E8FF;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.badges-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.badge-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid rgba(168, 85, 247, 0.15);\n  border-radius: 12px;\n  padding: 10px 16px;\n  transition: all 0.2s;\n}\n.badge-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.15);\n  border-color: rgba(168, 85, 247, 0.4);\n}\n.badge-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.badge-icon.grayscale[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n}\n.badge-item.locked[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  opacity: 0.6;\n  position: relative;\n}\n.badge-item.locked[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.lock-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 8px;\n  font-size: 10px;\n}\n.badge-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.badge-info[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1F2937;\n}\n.badge-info[_ngcontent-%COMP%]   .badge-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.badge-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition: transform 0.2s;\n}\n.badge-unlocked[_ngcontent-%COMP%] {\n  border-color: rgba(139, 92, 246, 0.45);\n  background: rgba(139, 92, 246, 0.08);\n}\n.badge-unlocked[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {\n  color: #c4b5fd;\n}\n.badge-locked[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  filter: grayscale(1);\n  cursor: not-allowed;\n}\n.badge-earned-pill[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(139, 92, 246, 0.2);\n  color: #a78bfa;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClDashboardComponent, { className: "ClDashboardComponent", filePath: "app\\client\\dashboard\\dashboard.component.ts", lineNumber: 11 });
})();

// src/app/core/services/cat.service.ts
var CategoryService = class _CategoryService {
  constructor(http) {
    this.http = http;
    this.api = "http://localhost:8080/api/categories";
  }
  getAll() {
    return this.http.get(this.api);
  }
  getActive() {
    return this.http.get(`${this.api}?active=true`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(category) {
    return this.http.post(this.api, category);
  }
  update(id, category) {
    return this.http.put(`${this.api}/${id}`, category);
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  toggleActive(id) {
    return this.http.patch(`${this.api}/${id}/toggle`, {});
  }
  getStats() {
    return this.http.get(`${this.api}/stats`);
  }
  static {
    this.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};

// src/app/payment-modal.component.ts
var _c02 = () => [0, 1, 2, 3];
var _c12 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
function PaymentModalComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5, "Secure Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7, "Review and confirm your payment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
    \u0275\u0275text(10, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "div", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15, "Delivery confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "span");
    \u0275\u0275text(22, "Project budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 14)(27, "span");
    \u0275\u0275text(28, "Platform fee (10%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "div", 15);
    \u0275\u0275elementStart(33, "div", 16)(34, "span");
    \u0275\u0275text(35, "Freelancer receives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 17)(40, "div", 18);
    \u0275\u0275text(41, "Simulated Payment Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19);
    \u0275\u0275element(43, "div", 20);
    \u0275\u0275elementStart(44, "div", 21);
    \u0275\u0275element(45, "div", 22)(46, "div", 22)(47, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 23);
    \u0275\u0275text(49, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 24)(51, "div")(52, "div", 25);
    \u0275\u0275text(53, "CARD HOLDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 26);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "div", 25);
    \u0275\u0275text(58, "EXPIRES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 26);
    \u0275\u0275text(60, "12/28");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 27);
    \u0275\u0275text(62, "VISA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 28)(64, "button", 29);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_2_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel.emit());
    });
    \u0275\u0275text(65, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 30);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_2_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPin());
    });
    \u0275\u0275elementStart(67, "span", 31);
    \u0275\u0275text(68, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.projectTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 7, ctx_r1.budget, "1.2-2"), " TND");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 10, ctx_r1.budget, "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind2(31, 13, ctx_r1.commission, "1.2-2"), " TND");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(38, 16, ctx_r1.montantNet, "1.2-2"), " TND");
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r1.cardHolder);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" Pay ", \u0275\u0275pipeBind2(70, 19, ctx_r1.budget, "1.2-2"), " TND ");
  }
}
function PaymentModalComponent_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", ctx_r1.pin.length > d_r4);
  }
}
function PaymentModalComponent_ng_container_3_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_3_button_11_Template_button_click_0_listener() {
      const k_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPin(k_r6.toString()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r6);
  }
}
function PaymentModalComponent_ng_container_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u274C Incorrect PIN. Try again.");
    \u0275\u0275elementEnd();
  }
}
function PaymentModalComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5, "Enter PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7, "Enter any 4-digit code to simulate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275template(9, PaymentModalComponent_ng_container_3_div_9_Template, 1, 2, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275template(11, PaymentModalComponent_ng_container_3_button_11_Template, 2, 1, "button", 35);
    \u0275\u0275element(12, "button", 36);
    \u0275\u0275elementStart(13, "button", 37);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPin("0"));
    });
    \u0275\u0275text(14, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 38);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delPin());
    });
    \u0275\u0275text(16, "\u232B");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, PaymentModalComponent_ng_container_3_div_17_Template, 2, 0, "div", 39);
    \u0275\u0275elementStart(18, "div", 28)(19, "button", 29);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.step = "summary";
      return \u0275\u0275resetView(ctx_r1.pin = "");
    });
    \u0275\u0275text(20, "Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c12));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.pinError);
  }
}
function PaymentModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275element(2, "div", 43);
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4, "Processing payment\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275text(6, "Please wait");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 48);
    \u0275\u0275element(4, "circle", 49)(5, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 51);
    \u0275\u0275text(7, "Payment Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 52);
    \u0275\u0275text(9, "The freelancer has been paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 53)(11, "div", 54)(12, "span");
    \u0275\u0275text(13, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 54)(17, "span");
    \u0275\u0275text(18, "Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 54)(23, "span");
    \u0275\u0275text(24, "Freelancer Receives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 55);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 54)(29, "span");
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 56);
    \u0275\u0275text(32, "\u2705 COMPLETED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 57);
    \u0275\u0275listener("click", function PaymentModalComponent_ng_container_5_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.done.emit());
    });
    \u0275\u0275text(34, "Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.projectTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 3, ctx_r1.budget, "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 6, ctx_r1.montantNet, "1.2-2"), " TND");
  }
}
var PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this.projectTitle = "";
    this.budget = 0;
    this.cardHolder = "CLIENT";
    this.cancel = new EventEmitter();
    this.done = new EventEmitter();
    this.confirm = new EventEmitter();
    this.step = "summary";
    this.pin = "";
    this.pinError = false;
  }
  get commission() {
    return Math.round(this.budget * 0.1 * 100) / 100;
  }
  get montantNet() {
    return Math.round((this.budget - this.commission) * 100) / 100;
  }
  onBackdropClick(e) {
    if (e.target.classList.contains("pm-backdrop")) {
      if (this.step !== "processing")
        this.cancel.emit();
    }
  }
  goToPin() {
    this.step = "pin";
    this.pin = "";
    this.pinError = false;
  }
  addPin(digit) {
    if (this.pin.length >= 4)
      return;
    this.pin += digit;
    this.pinError = false;
    if (this.pin.length === 4)
      this.processPayment();
  }
  delPin() {
    this.pin = this.pin.slice(0, -1);
    this.pinError = false;
  }
  processPayment() {
    this.step = "processing";
    setTimeout(() => {
      this.confirm.emit();
    }, 2e3);
  }
  showSuccess() {
    this.step = "success";
  }
  static {
    this.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["app-payment-modal"]], inputs: { projectTitle: "projectTitle", budget: "budget", cardHolder: "cardHolder" }, outputs: { cancel: "cancel", done: "done", confirm: "confirm" }, decls: 6, vars: 6, consts: [[1, "pm-backdrop", 3, "click"], [1, "pm-modal"], [4, "ngIf"], [1, "pm-header"], [1, "pm-logo"], [1, "pm-title"], [1, "pm-sub"], [1, "pm-project-banner"], [1, "pm-project-icon"], [1, "pm-project-name"], [1, "pm-project-meta"], [1, "pm-project-amount"], [1, "pm-breakdown"], [1, "pm-row"], [1, "pm-row", "pm-fee"], [1, "pm-divider"], [1, "pm-row", "pm-net"], [1, "pm-card-section"], [1, "pm-card-label"], [1, "pm-card"], [1, "pm-card-shine"], [1, "pm-card-chip"], [1, "chip-line"], [1, "pm-card-number"], [1, "pm-card-bottom"], [1, "pm-card-label-sm"], [1, "pm-card-name"], [1, "pm-card-brand"], [1, "pm-actions"], [1, "pm-btn-cancel", 3, "click"], [1, "pm-btn-pay", 3, "click"], [1, "pm-lock"], [1, "pm-pin-display"], ["class", "pm-pin-dot", 3, "filled", 4, "ngFor", "ngForOf"], [1, "pm-numpad"], ["class", "pm-key", 3, "click", 4, "ngFor", "ngForOf"], [1, "pm-key", "pm-key-empty"], [1, "pm-key", 3, "click"], [1, "pm-key", "pm-key-del", 3, "click"], ["class", "pm-pin-error", 4, "ngIf"], [1, "pm-pin-dot"], [1, "pm-pin-error"], [1, "pm-processing"], [1, "pm-spinner-ring"], [1, "pm-processing-text"], [1, "pm-processing-sub"], [1, "pm-success-content"], [1, "pm-checkmark"], ["viewBox", "0 0 52 52"], ["cx", "26", "cy", "26", "r", "25", "fill", "none", 1, "checkmark-circle"], ["fill", "none", "d", "M14 26 l9 9 l15-18", 1, "checkmark-check"], [1, "pm-success-title"], [1, "pm-success-sub"], [1, "pm-receipt"], [1, "pm-receipt-row"], [1, "pm-green"], [1, "pm-badge-done"], [1, "pm-btn-done", 3, "click"]], template: function PaymentModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function PaymentModalComponent_Template_div_click_0_listener($event) {
          return ctx.onBackdropClick($event);
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275template(2, PaymentModalComponent_ng_container_2_Template, 71, 22, "ng-container", 2)(3, PaymentModalComponent_ng_container_3_Template, 21, 5, "ng-container", 2)(4, PaymentModalComponent_ng_container_4_Template, 7, 0, "ng-container", 2)(5, PaymentModalComponent_ng_container_5_Template, 35, 9, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("pm-success", ctx.step === "success");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === "summary");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === "pin");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === "processing");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === "success");
      }
    }, dependencies: [NgForOf, NgIf, DecimalPipe], styles: ['\n\n.pm-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(6px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_pmFadeIn 0.25s ease both;\n}\n@keyframes _ngcontent-%COMP%_pmFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  width: 100%;\n  max-width: 420px;\n  padding: 32px 28px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_pmSlideUp 0.3s cubic-bezier(.22, .68, 0, 1.2) both;\n  position: relative;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_pmSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(40px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.pm-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.pm-logo[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 8px;\n}\n.pm-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  font-family: "Georgia", serif;\n}\n.pm-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin: 0;\n}\n.pm-project-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f3ff,\n      #ede9fe);\n  border: 1px solid rgba(139, 92, 246, 0.2);\n  border-radius: 14px;\n  padding: 14px 16px;\n  margin-bottom: 18px;\n}\n.pm-project-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pm-project-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.pm-project-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  margin-top: 2px;\n}\n.pm-project-amount[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px;\n  font-weight: 800;\n  color: #7c3aed;\n}\n.pm-breakdown[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.pm-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #555;\n  padding: 4px 0;\n}\n.pm-fee[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pm-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e5e7eb;\n  margin: 8px 0;\n}\n.pm-net[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.pm-card-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.pm-card-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 10px;\n}\n.pm-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 50%,\n      #0f3460 100%);\n  border-radius: 16px;\n  padding: 20px 22px;\n  color: white;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(26, 26, 46, 0.35);\n}\n.pm-card-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -30%;\n  width: 60%;\n  height: 200%;\n  background:\n    linear-gradient(\n      105deg,\n      transparent 40%,\n      rgba(255, 255, 255, 0.07) 50%,\n      transparent 60%);\n  transform: rotate(15deg);\n}\n.pm-card-chip[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af37,\n      #f0d060);\n  border-radius: 5px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n  padding: 5px;\n}\n.chip-line[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n.pm-card-number[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: monospace;\n  letter-spacing: 3px;\n  margin-bottom: 16px;\n  opacity: 0.9;\n}\n.pm-card-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 20px;\n}\n.pm-card-label-sm[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.6;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 2px;\n}\n.pm-card-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.pm-card-brand[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 20px;\n  font-weight: 900;\n  font-style: italic;\n  opacity: 0.9;\n}\n.pm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.pm-btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  color: #555;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all .2s;\n  &:hover {\n    background: #f5f5f5;\n    border-color: #ccc;\n  }\n}\n.pm-btn-pay[_ngcontent-%COMP%] {\n  flex: 2;\n  padding: 12px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .25s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.5);\n  }\n}\n.pm-lock[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-pin-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin: 20px 0 28px;\n}\n.pm-pin-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2.5px solid #7c3aed;\n  background: white;\n  transition: all .2s;\n  &.filled {\n    background: #7c3aed;\n    transform: scale(1.1);\n  }\n}\n.pm-numpad[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  max-width: 280px;\n  margin: 0 auto 20px;\n}\n.pm-key[_ngcontent-%COMP%] {\n  height: 60px;\n  border-radius: 14px;\n  border: 1.5px solid #e5e7eb;\n  background: white;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a2e;\n  cursor: pointer;\n  transition: all .15s;\n  &:hover {\n    background: #f5f3ff;\n    border-color: #7c3aed;\n    color: #7c3aed;\n  }\n  &:active {\n    transform: scale(0.93);\n  }\n}\n.pm-key-empty[_ngcontent-%COMP%] {\n  cursor: default;\n  border-color: transparent;\n  &:hover {\n    background: white;\n    border-color: transparent;\n  }\n}\n.pm-key-del[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pm-pin-error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.pm-processing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 0;\n}\n.pm-spinner-ring[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border: 4px solid rgba(124, 58, 237, 0.15);\n  border-top-color: #7c3aed;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-processing-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.pm-processing-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: 4px;\n}\n.pm-success-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.pm-checkmark[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 16px;\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n}\n.checkmark-circle[_ngcontent-%COMP%] {\n  stroke: #22c55e;\n  stroke-width: 2;\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  animation: _ngcontent-%COMP%_strokeCircle 0.6s ease forwards;\n}\n.checkmark-check[_ngcontent-%COMP%] {\n  stroke: #22c55e;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: _ngcontent-%COMP%_strokeCheck 0.4s ease 0.5s forwards;\n}\n@keyframes _ngcontent-%COMP%_strokeCircle {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_strokeCheck {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.pm-success-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0 0 6px;\n  font-family: "Georgia", serif;\n}\n.pm-success-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin: 0 0 24px;\n}\n.pm-receipt[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f9f9f9;\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.pm-receipt-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #555;\n  padding: 5px 0;\n  border-bottom: 1px solid #eee;\n  &:last-child {\n    border-bottom: none;\n  }\n}\n.pm-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.pm-badge-done[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.pm-btn-done[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .25s;\n  box-shadow: 0 4px 16px rgba(34, 197, 94, 0.3);\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);\n  }\n}\n/*# sourceMappingURL=payment-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "app\\payment-modal.component.ts", lineNumber: 348 });
})();

// src/app/client/projects/projects.component.ts
var _c03 = ["paymentModal"];
function ClProjectsComponent_div_9_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function ClProjectsComponent_div_9_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, "\u{1F4A1} Fill in the title and category first, then click Generate with AI");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r1.aiError, "");
  }
}
function ClProjectsComponent_div_9_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function ClProjectsComponent_div_9_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadPrediction());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isPredicting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isPredicting ? "Calculating..." : "Suggest Budget and Deadline", " ");
  }
}
function ClProjectsComponent_div_9_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r1.predictionError, "");
  }
}
function ClProjectsComponent_div_9_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "b");
    \u0275\u0275text(3, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "div", 43)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 44);
    \u0275\u0275listener("click", function ClProjectsComponent_div_9_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyBudget());
    });
    \u0275\u0275text(13, "Apply Budget");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "b");
    \u0275\u0275text(16, "Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "div", 43)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 44);
    \u0275\u0275listener("click", function ClProjectsComponent_div_9_div_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyDeadline());
    });
    \u0275\u0275text(26, "Apply Deadline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.budget.confidence, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Min: ", ctx_r1.prediction.budget.min, " TND");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Recommended: ", ctx_r1.prediction.budget.recommended, " TND");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Max: ", ctx_r1.prediction.budget.max, " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.deadline.confidence, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Min: ", ctx_r1.prediction.deadline.minDays, "d");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Recommended: ", ctx_r1.prediction.deadline.recommendedDays, "d");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Max: ", ctx_r1.prediction.deadline.maxDays, "d");
  }
}
function ClProjectsComponent_div_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function ClProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Post a New Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProject.title, $event) || (ctx_r1.newProject.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProject.category, $event) || (ctx_r1.newProject.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 18);
    \u0275\u0275text(7, "-- Category --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClProjectsComponent_div_9_option_8_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProject.budget, $event) || (ctx_r1.newProject.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProject.deadline, $event) || (ctx_r1.newProject.deadline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "label", 24);
    \u0275\u0275text(14, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 25);
    \u0275\u0275listener("click", function ClProjectsComponent_div_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateDescription());
    });
    \u0275\u0275elementStart(16, "span", 26);
    \u0275\u0275text(17, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProject.description, $event) || (ctx_r1.newProject.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ClProjectsComponent_div_9_div_20_Template, 2, 0, "div", 28)(21, ClProjectsComponent_div_9_div_21_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_9_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.skillsInput, $event) || (ctx_r1.skillsInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ClProjectsComponent_div_9_div_23_Template, 3, 2, "div", 31)(24, ClProjectsComponent_div_9_div_24_Template, 2, 1, "div", 29)(25, ClProjectsComponent_div_9_div_25_Template, 27, 8, "div", 32);
    \u0275\u0275elementStart(26, "div", 33)(27, "button", 34);
    \u0275\u0275listener("click", function ClProjectsComponent_div_9_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createProject());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ClProjectsComponent_div_9_div_29_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProject.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProject.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProject.budget);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProject.deadline);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("loading", ctx_r1.isGenerating);
    \u0275\u0275property("disabled", ctx_r1.isGenerating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isGenerating ? "Generating..." : "Generate with AI", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProject.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newProject.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.aiError);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.skillsInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newProject.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.predictionError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.prediction && ctx_r1.prediction.budget && ctx_r1.prediction.deadline && !ctx_r1.isPredicting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isCreating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCreating ? "Creating..." : "Post Project", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.createError);
  }
}
function ClProjectsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275element(2, "span", 48);
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "A freelancer submitted work. Confirm completion or request a revision.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function ClProjectsComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("DELIVERED"));
    });
    \u0275\u0275text(11, "View Deliveries");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.deliveredProjects.length, " project(s) delivered \u2014 waiting for your review!");
  }
}
function ClProjectsComponent_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.deliveredProjects.length, " ");
  }
}
function ClProjectsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ClProjectsComponent_button_12_Template_button_click_0_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter(s_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ClProjectsComponent_button_12_span_2_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeFilter === s_r8)("filter-delivered", s_r8 === "DELIVERED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r8, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r8 === "DELIVERED" && ctx_r1.deliveredProjects.length > 0);
  }
}
function ClProjectsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function ClProjectsComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, "No projects found.");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_14_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4B0} ", p_r10.budget, " TND");
  }
}
function ClProjectsComponent_div_14_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(2, 1, p_r10.deadline, "dd/MM/yyyy"), "");
  }
}
function ClProjectsComponent_div_14_div_2_div_15_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 80);
    \u0275\u0275text(1, " \u{1F517} View Delivery Link \u2197 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", p_r10.deliveryLink, \u0275\u0275sanitizeUrl);
  }
}
function ClProjectsComponent_div_14_div_2_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', p_r10.deliveryMessage, '" ');
  }
}
function ClProjectsComponent_div_14_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275text(2, "\u{1F4E6} Freelancer submitted a delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ClProjectsComponent_div_14_div_2_div_15_a_3_Template, 2, 1, "a", 78)(4, ClProjectsComponent_div_14_div_2_div_15_div_4_Template, 2, 1, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r10.deliveryLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.deliveryMessage);
  }
}
function ClProjectsComponent_div_14_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4, "Secure your payment with Matchy Escrow");
    \u0275\u0275elementEnd()();
  }
}
function ClProjectsComponent_div_14_div_2_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ClProjectsComponent_div_14_div_2_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(p_r10));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_14_div_2_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ClProjectsComponent_div_14_div_2_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToEscrowPayment(p_r10.id));
    });
    \u0275\u0275text(1, " \u{1F512} Pay via Escrow ");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_14_div_2_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function ClProjectsComponent_div_14_div_2_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeliveryModal(p_r10));
    });
    \u0275\u0275text(1, " \u2705 Review Delivery ");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_14_div_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function ClProjectsComponent_div_14_div_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProject(p_r10.id));
    });
    \u0275\u0275text(1, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function ClProjectsComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 66);
    \u0275\u0275template(11, ClProjectsComponent_div_14_div_2_span_11_Template, 2, 1, "span", 67)(12, ClProjectsComponent_div_14_div_2_span_12_Template, 3, 4, "span", 67);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ClProjectsComponent_div_14_div_2_div_15_Template, 5, 2, "div", 68)(16, ClProjectsComponent_div_14_div_2_div_16_Template, 5, 0, "div", 69);
    \u0275\u0275elementStart(17, "div", 70)(18, "button", 71);
    \u0275\u0275listener("click", function ClProjectsComponent_div_14_div_2_Template_button_click_18_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewProposals(p_r10.id));
    });
    \u0275\u0275text(19, "View Proposals");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ClProjectsComponent_div_14_div_2_button_20_Template, 2, 0, "button", 72)(21, ClProjectsComponent_div_14_div_2_button_21_Template, 2, 0, "button", 73)(22, ClProjectsComponent_div_14_div_2_button_22_Template, 2, 0, "button", 74)(23, ClProjectsComponent_div_14_div_2_button_23_Template, 2, 0, "button", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("card-delivered", p_r10.status === "DELIVERED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.category);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(p_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r10.budget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.deadline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DD} ", p_r10.proposalsCount || 0, " proposals");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.status === "DELIVERED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.status === "IN_PROGRESS");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", p_r10.status === "OPEN" || p_r10.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.status === "IN_PROGRESS" || p_r10.status === "DELIVERED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.status === "DELIVERED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.status === "OPEN" || p_r10.status === "DRAFT");
  }
}
function ClProjectsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ClProjectsComponent_div_14_div_1_Template, 2, 0, "div", 57)(2, ClProjectsComponent_div_14_div_2_Template, 24, 17, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
function ClProjectsComponent_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "label", 100);
    \u0275\u0275text(2, "\u{1F517} Delivery Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u2197");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.selectedProject.deliveryLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedProject.deliveryLink, " ");
  }
}
function ClProjectsComponent_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "label", 100);
    \u0275\u0275text(2, "\u{1F4AC} Freelancer's Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedProject.deliveryMessage);
  }
}
function ClProjectsComponent_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "p");
    \u0275\u0275text(2, "\u{1F4CE} No delivery link or message provided.");
    \u0275\u0275elementEnd()();
  }
}
function ClProjectsComponent_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "label", 100);
    \u0275\u0275text(2, "\u270F\uFE0F Revision Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 105);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_15_div_17_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.revisionMessage, $event) || (ctx_r1.revisionMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.revisionMessage);
  }
}
function ClProjectsComponent_div_15_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 106);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_ng_container_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showRevisionInput = true);
    });
    \u0275\u0275text(2, " \u{1F501} Request Revision ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 107);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_ng_container_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelivery());
    });
    \u0275\u0275text(4, " \u2705 Confirm & Complete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ClProjectsComponent_div_15_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 108);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_ng_container_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showRevisionInput = false;
      return \u0275\u0275resetView(ctx_r1.revisionMessage = "");
    });
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 109);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_ng_container_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestRevision());
    });
    \u0275\u0275text(4, " Send Revision Request ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.revisionMessage.trim());
  }
}
function ClProjectsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 89);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 90)(3, "div", 91)(4, "span", 92);
    \u0275\u0275text(5, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Review Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 93);
    \u0275\u0275listener("click", function ClProjectsComponent_div_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94);
    \u0275\u0275template(14, ClProjectsComponent_div_15_div_14_Template, 7, 2, "div", 95)(15, ClProjectsComponent_div_15_div_15_Template, 5, 1, "div", 95)(16, ClProjectsComponent_div_15_div_16_Template, 3, 0, "div", 96)(17, ClProjectsComponent_div_15_div_17_Template, 4, 1, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 98);
    \u0275\u0275template(19, ClProjectsComponent_div_15_ng_container_19_Template, 5, 0, "ng-container", 67)(20, ClProjectsComponent_div_15_ng_container_20_Template, 5, 1, "ng-container", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.deliveryLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.deliveryMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.deliveryLink) && !(ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.deliveryMessage));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRevisionInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showRevisionInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRevisionInput);
  }
}
function ClProjectsComponent_app_payment_modal_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payment-modal", 110, 0);
    \u0275\u0275listener("cancel", function ClProjectsComponent_app_payment_modal_16_Template_app_payment_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentDone());
    })("confirm", function ClProjectsComponent_app_payment_modal_16_Template_app_payment_modal_confirm_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentConfirm());
    })("done", function ClProjectsComponent_app_payment_modal_16_Template_app_payment_modal_done_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentDone());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("projectTitle", (tmp_2_0 = ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.title) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "")("budget", (tmp_3_0 = ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.budget) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0)("cardHolder", (tmp_4_0 = ctx_r1.authService.currentUser == null ? null : ctx_r1.authService.currentUser.firstName) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "CLIENT");
  }
}
function ClProjectsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function ClProjectsComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 89);
    \u0275\u0275listener("click", function ClProjectsComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 90)(3, "div", 91)(4, "span", 92);
    \u0275\u0275text(5, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Edit Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 93);
    \u0275\u0275listener("click", function ClProjectsComponent_div_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94)(14, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_17_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editProject.title, $event) || (ctx_r1.editProject.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_17_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editProject.budget, $event) || (ctx_r1.editProject.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_17_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editProject.deadline, $event) || (ctx_r1.editProject.deadline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 111);
    \u0275\u0275twoWayListener("ngModelChange", function ClProjectsComponent_div_17_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editProject.description, $event) || (ctx_r1.editProject.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 98)(19, "button", 108);
    \u0275\u0275listener("click", function ClProjectsComponent_div_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 112);
    \u0275\u0275listener("click", function ClProjectsComponent_div_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProjectEdit());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.editingProject == null ? null : ctx_r1.editingProject.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProject.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProject.budget);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProject.deadline);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProject.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSavingEdit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingEdit ? "Saving..." : "Save Changes", " ");
  }
}
var ClProjectsComponent = class _ClProjectsComponent {
  get deliveredProjects() {
    return this.projects.filter((p) => p.status === "DELIVERED");
  }
  constructor(authService, projectService, categoryService, http, router) {
    this.authService = authService;
    this.projectService = projectService;
    this.categoryService = categoryService;
    this.http = http;
    this.router = router;
    this.projects = [];
    this.filtered = [];
    this.categories = [];
    this.isLoading = true;
    this.showForm = false;
    this.isCreating = false;
    this.isGenerating = false;
    this.createError = "";
    this.aiError = "";
    this.activeFilter = "ALL";
    this.skillsInput = "";
    this.statuses = ["ALL", "OPEN", "IN_PROGRESS", "DELIVERED", "COMPLETED", "CANCELLED"];
    this.newProject = { title: "", description: "", category: void 0, status: "OPEN" };
    this.showDeliveryModal = false;
    this.showPaymentModal = false;
    this.showPaymentSuccess = false;
    this.paymentResult = null;
    this.isConfirming = false;
    this.selectedProject = null;
    this.showRevisionInput = false;
    this.revisionMessage = "";
    this.showEditModal = false;
    this.isSavingEdit = false;
    this.editingProject = null;
    this.editProject = {};
    this.api = environment.apiUrl;
    this.prediction = null;
    this.isPredicting = false;
    this.predictionError = "";
  }
  ngOnInit() {
    this.load();
    this.loadCategories();
  }
  load() {
    const userId = this.authService.currentUser?.id;
    this.projectService.getAll(void 0, userId).subscribe({
      next: (p) => {
        this.projects = p;
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  loadCategories() {
    this.categoryService.getActive().subscribe({
      next: (cats) => {
        this.categories = cats;
        if (cats.length > 0 && !this.newProject.category)
          this.newProject.category = cats[0].name;
      },
      error: () => {
      }
    });
  }
  generateDescription() {
    if (!this.newProject.title?.trim()) {
      this.aiError = "Please enter a project title first.";
      return;
    }
    this.isGenerating = true;
    this.aiError = "";
    this.http.post(`${this.api}/ai/generate-description`, {
      title: this.newProject.title,
      category: this.newProject.category || ""
    }).subscribe({
      next: (res) => {
        const text = String(res?.description ?? "");
        const aiFailed = /erreur|unexpected|inattendue/i.test(text) || !text.trim();
        this.newProject.description = aiFailed ? "" : text;
        this.aiError = aiFailed ? "Groq could not generate a description right now. Please retry." : "";
        this.isGenerating = false;
      },
      error: (_err) => {
        this.newProject.description = "";
        this.aiError = "Groq service unavailable. Please retry.";
        this.isGenerating = false;
      }
    });
  }
  setFilter(s) {
    this.activeFilter = s;
    this.applyFilter();
  }
  applyFilter() {
    this.filtered = this.activeFilter === "ALL" ? this.projects : this.projects.filter((p) => p.status === this.activeFilter);
  }
  buildLocalPrediction(category, skills) {
    const byCategory = {
      "web development": { budget: 900, days: 18 },
      "mobile development": { budget: 1200, days: 24 },
      "design": { budget: 500, days: 10 },
      "marketing": { budget: 450, days: 12 },
      "writing": { budget: 280, days: 7 },
      "data": { budget: 800, days: 16 },
      "ai": { budget: 1400, days: 26 }
    };
    const key = String(category || "").toLowerCase().trim();
    const base = byCategory[key] ?? { budget: 700, days: 14 };
    const skillFactor = Math.max(0, Math.min(6, skills.length)) * 0.08;
    const knownCategory = !!byCategory[key];
    const confidence = knownCategory && skills.length >= 3 ? "HIGH" : knownCategory || skills.length >= 1 ? "MEDIUM" : "LOW";
    const factors = confidence === "HIGH" ? { budgetMin: 0.9, budgetMax: 1.12, daysMin: 0.88, daysMax: 1.18 } : confidence === "LOW" ? { budgetMin: 0.75, budgetMax: 1.35, daysMin: 0.7, daysMax: 1.45 } : { budgetMin: 0.85, budgetMax: 1.2, daysMin: 0.8, daysMax: 1.3 };
    const recBudget = Math.round(base.budget * (1 + skillFactor));
    const minBudget = Math.max(100, Math.round(recBudget * factors.budgetMin));
    const maxBudget = Math.round(recBudget * factors.budgetMax);
    const recDays = Math.max(3, Math.round(base.days * (1 + skillFactor * 0.7)));
    const minDays = Math.max(2, Math.round(recDays * factors.daysMin));
    const maxDays = Math.round(recDays * factors.daysMax);
    return {
      budget: {
        min: minBudget,
        max: maxBudget,
        average: recBudget,
        median: recBudget,
        recommended: recBudget,
        confidence,
        basedOn: 0,
        message: "Estimated from category and required skills."
      },
      deadline: {
        minDays,
        maxDays,
        medianDays: recDays,
        recommendedDays: recDays,
        onTimeRate: 0.8,
        confidence,
        basedOn: 0,
        message: "Estimated from category and required skills."
      }
    };
  }
  loadPrediction() {
    this.isPredicting = true;
    this.prediction = null;
    this.predictionError = "";
    const skills = this.skillsInput ? this.skillsInput.split(",").map((s) => s.trim()) : [];
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
    this.http.get(`${this.api}/predictions/all?category=${encodeURIComponent(String(this.newProject.category ?? ""))}&skills=${encodeURIComponent(skills.join(","))}`, { headers }).subscribe({
      next: (data) => {
        if (!data?.budget || !data?.deadline) {
          this.prediction = this.buildLocalPrediction(String(this.newProject.category ?? ""), skills);
          this.predictionError = "Prediction service unavailable. Showing smart local estimate.";
        } else {
          this.prediction = data;
          this.applyBudget();
          this.applyDeadline();
        }
        this.isPredicting = false;
      },
      error: () => {
        this.prediction = this.buildLocalPrediction(String(this.newProject.category ?? ""), skills);
        this.predictionError = "Prediction service unavailable. Showing smart local estimate.";
        this.isPredicting = false;
      }
    });
  }
  applyBudget() {
    if (this.prediction)
      this.newProject.budget = this.prediction.budget.recommended;
  }
  applyDeadline() {
    if (this.prediction) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() + this.prediction.deadline.recommendedDays);
      this.newProject.deadline = d.toISOString().split("T")[0];
    }
  }
  createProject() {
    if (!this.newProject.title?.trim()) {
      this.createError = "Title is required";
      return;
    }
    if (!this.newProject.description?.trim()) {
      this.createError = "Description is required";
      return;
    }
    if (!this.newProject.category) {
      this.createError = "Please select a category";
      return;
    }
    this.isCreating = true;
    this.createError = "";
    const payload = {
      title: this.newProject.title.trim(),
      description: this.newProject.description.trim(),
      category: this.newProject.category,
      status: "OPEN",
      clientId: this.authService.currentUser?.id,
      clientEmail: this.authService.currentUser?.email,
      requiredSkills: this.skillsInput ? this.skillsInput.split(",").map((s) => s.trim()).filter((s) => s) : []
    };
    if (this.newProject.budget)
      payload["budget"] = this.newProject.budget;
    if (this.newProject.deadline)
      payload["deadline"] = this.newProject.deadline;
    this.projectService.create(payload).subscribe({
      next: () => {
        this.showForm = false;
        this.newProject = { title: "", description: "", category: this.categories[0]?.name, status: "OPEN" };
        this.skillsInput = "";
        this.isCreating = false;
        this.createError = "";
        this.load();
      },
      error: (err) => {
        this.createError = err?.error?.message || err?.error?.error || "Error creating project";
        this.isCreating = false;
      }
    });
  }
  deleteProject(id) {
    if (!confirm("Delete this project?"))
      return;
    this.projectService.delete(id).subscribe(() => this.load());
  }
  viewProposals(projectId) {
    window.location.href = `/client/proposals?projectId=${projectId}`;
  }
  // ── Navigate to Escrow Payment page ──────────────
  goToEscrowPayment(projectId) {
    this.router.navigate(["/client/projects/payment", projectId]);
  }
  // ── Delivery modal ────────────────────────────────
  openDeliveryModal(project) {
    this.selectedProject = project;
    this.showDeliveryModal = true;
    this.showRevisionInput = false;
    this.revisionMessage = "";
  }
  closeModal() {
    this.showDeliveryModal = false;
    this.selectedProject = null;
  }
  confirmDelivery() {
    this.showDeliveryModal = false;
    this.showPaymentModal = true;
  }
  onPaymentConfirm() {
    if (!this.selectedProject)
      return;
    this.projectService.completeProject(this.selectedProject.id, Number(this.authService.currentUser.id), this.selectedProject.acceptedProposalId ?? 0).subscribe({
      next: (_res) => {
        if (this.paymentModalRef)
          this.paymentModalRef.showSuccess();
        this.load();
      },
      error: (err) => {
        console.error("Payment error", err);
        this.showPaymentModal = false;
      }
    });
  }
  onPaymentDone() {
    this.showPaymentModal = false;
    this.selectedProject = null;
  }
  requestRevision() {
    if (!this.selectedProject || !this.revisionMessage.trim())
      return;
    this.projectService.requestRevision(this.selectedProject.id, this.revisionMessage, Number(this.authService.currentUser.id)).subscribe({
      next: () => {
        this.closeModal();
        this.load();
      },
      error: (err) => console.error("Revision error", err)
    });
  }
  getStatusClass(s) {
    const m = {
      OPEN: "status-open",
      IN_PROGRESS: "status-progress",
      DELIVERED: "status-delivered",
      COMPLETED: "status-done",
      CANCELLED: "status-cancel",
      DRAFT: "status-draft"
    };
    return m[s] || "";
  }
  openEditModal(project) {
    this.editingProject = project;
    this.editProject = {
      title: project.title,
      description: project.description,
      budget: project.budget,
      deadline: project.deadline,
      category: project.category,
      budgetType: project.budgetType,
      requiredSkills: project.requiredSkills,
      duration: project.duration,
      experienceLevel: project.experienceLevel
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.editingProject = null;
    this.editProject = {};
  }
  saveProjectEdit() {
    if (!this.editingProject?.id)
      return;
    this.isSavingEdit = true;
    this.projectService.update(this.editingProject.id, this.editProject).subscribe({
      next: () => {
        this.isSavingEdit = false;
        this.closeEditModal();
        this.load();
      },
      error: () => {
        this.isSavingEdit = false;
      }
    });
  }
  static {
    this.\u0275fac = function ClProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClProjectsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClProjectsComponent, selectors: [["app-cl-projects"]], viewQuery: function ClProjectsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paymentModalRef = _t.first);
      }
    }, decls: 18, vars: 9, consts: [["paymentModal", ""], [1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-primary", 3, "click"], ["class", "form-card", 4, "ngIf"], ["class", "delivered-alert", 4, "ngIf"], [1, "filters"], ["class", "filter-btn", 3, "active", "filter-delivered", "click", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "project-grid", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [3, "projectTitle", "budget", "cardHolder", "cancel", "confirm", "done", 4, "ngIf"], [1, "form-card"], [1, "form-grid"], ["placeholder", "Project title *", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "Budget (TND)", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "desc-wrap"], [1, "desc-header"], [1, "desc-label"], [1, "btn-ai", 3, "click", "disabled"], [1, "ai-icon"], ["placeholder", "Describe your project...", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "ai-hint", 4, "ngIf"], ["class", "ai-error", 4, "ngIf"], ["placeholder", "Required skills (comma separated)", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "prediction-trigger", 4, "ngIf"], ["class", "prediction-card", 4, "ngIf"], [1, "form-actions"], [1, "btn-primary", 3, "click", "disabled"], ["class", "error", 4, "ngIf"], [3, "value"], [1, "ai-hint"], [1, "ai-error"], [1, "prediction-trigger"], [1, "btn-predict", 3, "click", "disabled"], [1, "prediction-card"], [1, "prediction-section"], [1, "prediction-stats"], [1, "btn-apply", 3, "click"], [1, "error"], [1, "delivered-alert"], [1, "delivered-alert-left"], [1, "delivered-pulse"], [1, "delivered-alert-icon"], [1, "filter-btn", "active", 3, "click"], [1, "filter-btn", 3, "click"], ["class", "filter-badge", 4, "ngIf"], [1, "filter-badge"], [1, "loading-state"], [1, "spinner"], [1, "project-grid"], ["class", "empty", 4, "ngIf"], ["class", "project-card", 3, "card-delivered", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "project-card"], [1, "card-top"], [1, "category-tag"], [1, "badge"], [1, "card-title"], [1, "card-desc"], [1, "card-meta"], [4, "ngIf"], ["class", "delivery-info", 4, "ngIf"], ["class", "escrow-banner", 4, "ngIf"], [1, "card-actions"], [1, "btn-sm", 3, "click"], ["class", "btn-sm", 3, "click", 4, "ngIf"], ["class", "btn-sm btn-pay-escrow", 3, "click", 4, "ngIf"], ["class", "btn-sm btn-confirm", 3, "click", 4, "ngIf"], ["class", "btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "delivery-info"], [1, "delivery-info-header"], ["target", "_blank", "class", "delivery-link-btn", 3, "href", 4, "ngIf"], ["class", "delivery-msg-preview", 4, "ngIf"], ["target", "_blank", 1, "delivery-link-btn", 3, "href"], [1, "delivery-msg-preview"], [1, "escrow-banner"], [1, "escrow-banner-icon"], [1, "escrow-banner-text"], [1, "btn-sm", "btn-pay-escrow", 3, "click"], [1, "btn-sm", "btn-confirm", 3, "click"], [1, "btn-sm", "btn-danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-icon"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "delivery-section", 4, "ngIf"], ["class", "delivery-empty", 4, "ngIf"], ["class", "revision-section", 4, "ngIf"], [1, "modal-footer"], [1, "delivery-section"], [1, "delivery-label"], ["target", "_blank", 1, "delivery-link", 3, "href"], [1, "delivery-message"], [1, "delivery-empty"], [1, "revision-section"], ["placeholder", "Describe what needs to be changed...", "rows", "3", 1, "revision-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-revision-toggle", 3, "click"], [1, "btn-confirm-modal", 3, "click"], [1, "btn-cancel-revision", 3, "click"], [1, "btn-send-revision", 3, "click", "disabled"], [3, "cancel", "confirm", "done", "projectTitle", "budget", "cardHolder"], ["placeholder", "Description", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-confirm-modal", 3, "click", "disabled"]], template: function ClProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Manage your posted projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function ClProjectsComponent_Template_button_click_7_listener() {
          return ctx.showForm = !ctx.showForm;
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ClProjectsComponent_div_9_Template, 30, 19, "div", 6)(10, ClProjectsComponent_div_10_Template, 12, 1, "div", 7);
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, ClProjectsComponent_button_12_Template, 3, 6, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, ClProjectsComponent_div_13_Template, 4, 0, "div", 10)(14, ClProjectsComponent_div_14_Template, 3, 2, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ClProjectsComponent_div_15_Template, 21, 7, "div", 12)(16, ClProjectsComponent_app_payment_modal_16_Template, 2, 3, "app-payment-modal", 13)(17, ClProjectsComponent_div_17_Template, 23, 7, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.showForm ? "Cancel" : "+ New Project");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.deliveredProjects.length > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeliveryModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPaymentModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PaymentModalComponent, DatePipe], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.page[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  color: #1a1a2e;\n  letter-spacing: -0.5px;\n  transition: color 0.3s ease;\n}\nhtml[data-theme=dark][_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], html[data-theme=dark]   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  color: #6b7280;\n  font-style: italic;\n  margin-top: 3px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563EB;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 22px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  cursor: pointer;\n  letter-spacing: 0.01em;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.45);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 1.75rem;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  border: 1.5px solid #d1d5db;\n  background: #fff;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563EB;\n  color: #2563EB;\n  background: #eff6ff;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #2563EB;\n  color: #fff;\n  border-color: #2563EB;\n  box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);\n}\n.filter-btn.filter-delivered.active[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  border-color: #f59e0b;\n  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.3);\n}\n.filter-btn[_ngcontent-%COMP%]   .filter-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.3);\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  font-size: 11px;\n  margin-left: 5px;\n}\n.delivered-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-radius: 12px;\n  background: #fffbeb;\n  border: 1.5px solid #fbbf24;\n  margin-bottom: 1.5rem;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.delivered-alert[_ngcontent-%COMP%]   .delivered-alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.delivered-alert[_ngcontent-%COMP%]   .delivered-pulse[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #f59e0b;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_pulse 1.6s infinite;\n}\n.delivered-alert[_ngcontent-%COMP%]   .delivered-alert-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.delivered-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #92400e;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.delivered-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b45309;\n  margin-top: 2px;\n  font-family: "DM Sans", sans-serif;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 3rem;\n  justify-content: center;\n  color: #6b7280;\n  font-size: 14px;\n  font-family: "DM Sans", sans-serif;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #2563EB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n.empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 3rem;\n  color: #9ca3af;\n  font-size: 14px;\n  font-family: "DM Sans", sans-serif;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #2563EB;\n  border-radius: 14px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.15s;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: #1d4ed8;\n  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.18);\n  transform: translateY(-2px);\n}\n.project-card.card-delivered[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.project-card.card-delivered[_ngcontent-%COMP%]:hover {\n  border-color: #d97706;\n  box-shadow: 0 6px 24px rgba(245, 158, 11, 0.18);\n}\n.project-card.card-expanded[_ngcontent-%COMP%] {\n  transform: none;\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.22);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.category-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 50px;\n  background: #eff6ff;\n  color: #2563EB;\n  letter-spacing: 0.02em;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.02em;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.status-open[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.status-progress[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.status-delivered[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.status-done[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-cancel[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.4;\n  letter-spacing: -0.1px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.delivery-info[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 12px;\n  font-family: "DM Sans", sans-serif;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-info-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #92400e;\n  margin-bottom: 6px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-link-btn[_ngcontent-%COMP%] {\n  color: #2563EB;\n  text-decoration: none;\n  font-weight: 500;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-link-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-msg-preview[_ngcontent-%COMP%] {\n  color: #78716c;\n  margin-top: 4px;\n  font-style: italic;\n}\n.escrow-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #1e40af;\n  font-weight: 500;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.escrow-banner[_ngcontent-%COMP%]   .escrow-banner-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_matchSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_matchCardIn {\n  from {\n    opacity: 0;\n    transform: translateX(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.matching-panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #f0f5ff 0%,\n      #fafbff 100%);\n  border: 1.5px solid #c7d7fd;\n  border-radius: 14px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_matchSlideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.matching-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f2560 0%,\n      #1a3fa8 60%,\n      #2563EB 100%);\n}\n.matching-header[_ngcontent-%COMP%]   .matching-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.matching-header[_ngcontent-%COMP%]   .matching-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.matching-header[_ngcontent-%COMP%]   .matching-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.2px;\n}\n.matching-header[_ngcontent-%COMP%]   .matching-sub[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.65);\n  margin-top: 1px;\n}\n.matching-header[_ngcontent-%COMP%]   .matching-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 11px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n.matching-header[_ngcontent-%COMP%]   .matching-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.matching-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 22px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: #6b7280;\n}\n.match-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #2563EB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.matching-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 22px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.matching-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.matching-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.match-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 0;\n}\n.match-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 11px 12px;\n  border-radius: 12px;\n  background: #fff;\n  border: 1.5px solid #e8eef8;\n  margin-bottom: 8px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  animation: _ngcontent-%COMP%_matchCardIn 0.38s ease both;\n}\n.match-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 3px 0 0 3px;\n  background: #e5e7eb;\n}\n.match-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 70ms;\n}\n.match-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 140ms;\n}\n.match-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 210ms;\n}\n.match-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 280ms;\n}\n.match-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 350ms;\n}\n.match-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.match-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);\n  transform: translateX(2px);\n}\n.match-card.match-gold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf0,\n      #fff);\n  border-color: #fbbf24;\n}\n.match-card.match-gold[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      #fbbf24,\n      #f59e0b);\n}\n.match-card.match-silver[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #fff);\n  border-color: #94a3b8;\n}\n.match-card.match-silver[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      #94a3b8,\n      #64748b);\n}\n.match-card.match-bronze[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0,\n      #fff);\n  border-color: #d97706;\n}\n.match-card.match-bronze[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      #d97706,\n      #b45309);\n}\n.match-rank[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 22px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.match-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n}\n.match-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e5e7eb;\n}\n.match-avatar[_ngcontent-%COMP%]   .match-avatar-initial[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.match-avatar[_ngcontent-%COMP%]   .match-verified[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 14px;\n  height: 14px;\n  background: #22c55e;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  font-weight: 700;\n}\n.match-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.match-info[_ngcontent-%COMP%]   .match-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.match-info[_ngcontent-%COMP%]   .match-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  font-family: "DM Sans", sans-serif;\n  font-size: 10px;\n  color: #9ca3af;\n}\n.match-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 4px;\n}\n.match-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 8.5px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  width: 42px;\n  flex-shrink: 0;\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3.5px;\n  background: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill.fill-skills[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #60a5fa,\n      #2563EB);\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill.fill-budget[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #a78bfa,\n      #7c3aed);\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill.fill-exp[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #34d399,\n      #059669);\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill.fill-activity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f472b6,\n      #db2777);\n}\n.match-bar-row[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 8.5px;\n  color: #6b7280;\n  width: 28px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.match-level-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border-radius: 50px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 8.5px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  margin-top: 3px;\n  align-self: flex-start;\n}\n.match-level-badge.level-high[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.match-level-badge.level-med[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.match-level-badge.level-low[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.match-score-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  flex-shrink: 0;\n  width: 52px;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 48px;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.5px;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-number.score-high[_ngcontent-%COMP%] {\n  color: #2563EB;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-number.score-med[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-number.score-low[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .circular-score[_ngcontent-%COMP%]   .score-pct[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 8px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.match-score-wrap[_ngcontent-%COMP%]   .match-label[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 8.5px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-top: 4px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  border: 1.5px solid #d1d5db;\n  background: #f9fafb;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n  letter-spacing: 0.01em;\n}\n.btn-sm[_ngcontent-%COMP%]:hover {\n  border-color: #2563EB;\n  color: #2563EB;\n  background: #eff6ff;\n}\n.btn-match[_ngcontent-%COMP%] {\n  border-color: #a5b4fc;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #f5f3ff);\n  color: #4f46e5;\n  font-weight: 700;\n}\n.btn-match[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #4338ca;\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff,\n      #ede9fe);\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.25);\n}\n.btn-match.btn-match-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  border-color: #4f46e5;\n  box-shadow: 0 3px 12px rgba(79, 70, 229, 0.35);\n}\n.btn-match.btn-match-active[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #4338ca,\n      #6d28d9);\n  color: #fff;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n  background: #fff1f2;\n  color: #b91c1c;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  background: #f0fdf4;\n  color: #15803d;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  border-color: #22c55e;\n  background: #dcfce7;\n  color: #166534;\n}\n.btn-pay-escrow[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.btn-pay-escrow[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  border-color: #2563EB;\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  backdrop-filter: blur(2px);\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #2563EB 100%);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  margin: 3px 0 0;\n  font-style: italic;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 13px;\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 22px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.delivery-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.delivery-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.delivery-link[_ngcontent-%COMP%] {\n  color: #2563EB;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  word-break: break-all;\n}\n.delivery-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.delivery-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.delivery-message[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.5;\n}\n.delivery-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 14px;\n  padding: 16px 0;\n  font-family: "DM Sans", sans-serif;\n}\n.revision-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.revision-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-family: "DM Sans", sans-serif;\n  color: #374151;\n  resize: vertical;\n  outline: none;\n  background: #f9fafb;\n  transition: border-color 0.15s, background 0.15s;\n}\n.revision-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 28px 22px;\n  border-top: 1px solid #f3f4f6;\n}\n.btn-revision-toggle[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  border: 1.5px solid #d1d5db;\n  background: #fff;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-revision-toggle[_ngcontent-%COMP%]:hover {\n  border-color: #f59e0b;\n  color: #b45309;\n  background: #fffbeb;\n}\n.btn-confirm-modal[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  background: #2563EB;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);\n  transition: background 0.15s;\n}\n.btn-confirm-modal[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-cancel-revision[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  border: 1.5px solid #d1d5db;\n  background: #fff;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-cancel-revision[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.btn-send-revision[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  background: #2563EB;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn-send-revision[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-send-revision[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #1d4ed8;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #2563EB;\n  border-radius: 14px;\n  padding: 1.5rem;\n  margin-bottom: 1.75rem;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 1rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 13px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  color: #374151;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s, background 0.15s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 100px;\n  resize: vertical;\n  font-family: "DM Sans", sans-serif;\n}\n.desc-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.desc-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.btn-ai[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 8px;\n  background: #eff6ff;\n  color: #2563EB;\n  border: 1.5px solid #bfdbfe;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-ai[_ngcontent-%COMP%]   .ai-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-ai[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  border-color: #93c5fd;\n}\n.btn-ai.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-ai[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ai-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 5px;\n  font-family: "DM Sans", sans-serif;\n}\n.ai-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b91c1c;\n  margin-top: 5px;\n  background: #fee2e2;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-family: "DM Sans", sans-serif;\n}\n.prediction-trigger[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-predict[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1D4ED8,\n      #7C3AED);\n  color: #fff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);\n}\n.btn-predict[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.predict-hint[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 12px;\n  font-style: italic;\n}\n.prediction-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f8faff);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 16px;\n  margin: 12px 0;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(99, 102, 241, 0.08);\n}\n.prediction-section[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.prediction-section[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6366F1;\n  margin-right: 8px;\n}\n.prediction-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 12px 0 16px;\n}\n.prediction-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1F2937;\n  transition: all 0.2s;\n}\n.prediction-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);\n}\n.prediction-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  border-color: #6366F1;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #F5F3FF);\n  color: #4F46E5;\n  font-size: 14px;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #4F46E5;\n  border: 1.5px solid #4F46E5;\n  padding: 8px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: #4F46E5;\n  color: #fff;\n  transform: translateX(2px);\n}\n.prediction-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(99, 102, 241, 0.2),\n      transparent);\n  margin: 0 24px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-predict[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #1D4ED8 0%,\n      #4F46E5 50%,\n      #7C3AED 100%);\n  color: #fff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.btn-predict[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);\n}\n.btn-predict[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.predict-hint[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 12px;\n  font-style: italic;\n}\n.prediction-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f8faff);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 16px;\n  padding: 0;\n  margin: 12px 0;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(99, 102, 241, 0.08);\n}\n.prediction-section[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  position: relative;\n}\n.prediction-section[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6366F1;\n  margin-right: 8px;\n}\n.prediction-section[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid rgba(99, 102, 241, 0.1);\n}\n.prediction-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.confidence-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  background: #FEF9C3;\n  color: #CA8A04;\n}\n.confidence-badge.HIGH[_ngcontent-%COMP%], \n.confidence-badge[class*=HIGH][_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.confidence-badge.LOW[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.prediction-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 12px 0 16px;\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-box.recommended[_ngcontent-%COMP%] {\n  border-color: #6366F1;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #F5F3FF);\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #9CA3AF;\n  margin-bottom: 6px;\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1F2937;\n}\n.prediction-stats[_ngcontent-%COMP%]   .stat-value.highlight[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  font-size: 16px;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  color: #4F46E5;\n  border: 1.5px solid #4F46E5;\n  padding: 8px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: #4F46E5;\n  color: #fff;\n  transform: translateX(2px);\n}\n.prediction-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(99, 102, 241, 0.2),\n      transparent);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-predict[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563EB,\n      #7C3AED);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  transition: opacity 0.2s;\n}\n.btn-predict[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.predict-hint[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-size: 13px;\n}\n.prediction-card[_ngcontent-%COMP%] {\n  background: #F8FAFF;\n  border: 1px solid #DBEAFE;\n  border-radius: 12px;\n  padding: 20px;\n  margin: 12px 0;\n}\n.prediction-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.prediction-section[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1E40AF;\n  font-size: 15px;\n  margin-right: 8px;\n}\n.prediction-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin: 12px 0;\n}\n.prediction-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #DBEAFE;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  color: #374151;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: #2563EB;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: #1D4ED8;\n}\n.prediction-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #DBEAFE;\n  margin: 12px 0;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.error[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #b91c1c;\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n  font-family: "DM Sans", sans-serif;\n}\n/*# sourceMappingURL=projects.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClProjectsComponent, { className: "ClProjectsComponent", filePath: "app\\client\\projects\\projects.component.ts", lineNumber: 268 });
})();

// src/app/client/proposals/proposals.component.ts
function ClProposalsComponent_div_7_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.title);
  }
}
function ClProposalsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Filter by project:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ClProposalsComponent_div_7_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedProjectId, $event) || (ctx_r1.selectedProjectId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClProposalsComponent_div_7_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByProject());
    });
    \u0275\u0275elementStart(4, "option", 9);
    \u0275\u0275text(5, "All projects");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClProposalsComponent_div_7_option_6_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedProjectId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.projects);
  }
}
function ClProposalsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading proposals...");
    \u0275\u0275elementEnd()();
  }
}
function ClProposalsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No proposals yet on your projects.");
    \u0275\u0275elementEnd();
  }
}
function ClProposalsComponent_div_9_div_2_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.coverLetter);
  }
}
function ClProposalsComponent_div_9_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4B0} ", p_r4.proposedBudget, " TND");
  }
}
function ClProposalsComponent_div_9_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u23F1 ", p_r4.deliveryTime, "");
  }
}
function ClProposalsComponent_div_9_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ClProposalsComponent_div_9_div_2_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStatus(p_r4.id, "ACCEPTED"));
    });
    \u0275\u0275text(2, "\u2705 Accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ClProposalsComponent_div_9_div_2_div_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStatus(p_r4.id, "REJECTED"));
    });
    \u0275\u0275text(4, "\u274C Reject");
    \u0275\u0275elementEnd()();
  }
}
function ClProposalsComponent_div_9_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "strong");
    \u0275\u0275text(2, "Feedback:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r4.clientFeedback, " ");
  }
}
function ClProposalsComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ClProposalsComponent_div_9_div_2_p_12_Template, 2, 1, "p", 24);
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275template(14, ClProposalsComponent_div_9_div_2_span_14_Template, 2, 1, "span", 26)(15, ClProposalsComponent_div_9_div_2_span_15_Template, 2, 1, "span", 26);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ClProposalsComponent_div_9_div_2_div_19_Template, 5, 0, "div", 27)(20, ClProposalsComponent_div_9_div_2_div_20_Template, 4, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(p_r4.freelancerName || "?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.freelancerName || p_r4.freelancerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Project: ", p_r4.projectTitle, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(p_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.coverLetter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.proposedBudget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.deliveryTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(18, 12, p_r4.createdAt, "dd/MM/yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.clientFeedback);
  }
}
function ClProposalsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ClProposalsComponent_div_9_div_1_Template, 2, 0, "div", 14)(2, ClProposalsComponent_div_9_div_2_Template, 21, 15, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
var ClProposalsComponent = class _ClProposalsComponent {
  constructor(authService, proposalService, projectService, route) {
    this.authService = authService;
    this.proposalService = proposalService;
    this.projectService = projectService;
    this.route = route;
    this.proposals = [];
    this.filtered = [];
    this.projects = [];
    this.selectedProjectId = null;
    this.isLoading = true;
  }
  ngOnInit() {
    const qpId = this.route.snapshot.queryParamMap.get("projectId");
    if (qpId)
      this.selectedProjectId = +qpId;
    const userId = this.authService.currentUser?.id;
    this.projectService.getAll(void 0, userId).subscribe((projects) => {
      this.projects = projects;
      this.loadProposals();
    });
  }
  loadProposals() {
    const projectId = this.selectedProjectId || void 0;
    this.proposalService.getAll(projectId).subscribe({
      next: (p) => {
        this.proposals = p;
        this.filterByProject();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  filterByProject() {
    this.filtered = this.selectedProjectId ? this.proposals.filter((p) => p.projectId === this.selectedProjectId) : this.proposals;
  }
  updateStatus(id, status) {
    const feedback = status === "REJECTED" ? prompt("Feedback (optional):") || "" : "";
    this.proposalService.updateStatus(id, status, feedback).subscribe(() => this.loadProposals());
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  getStatusClass(s) {
    const m = { PENDING: "status-pending", ACCEPTED: "status-accept", REJECTED: "status-reject", WITHDRAWN: "status-cancel" };
    return m[s] || "";
  }
  static {
    this.\u0275fac = function ClProposalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClProposalsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProposalService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClProposalsComponent, selectors: [["app-cl-proposals"]], decls: 10, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "project-filter", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "proposals-list", 4, "ngIf"], [1, "project-filter"], [1, "form-input", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "loading-state"], [1, "spinner"], [1, "proposals-list"], ["class", "empty", 4, "ngIf"], ["class", "proposal-card", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "proposal-card"], [1, "proposal-header"], [1, "freelancer-info"], [1, "avatar"], [1, "freelancer-name"], [1, "project-ref"], [1, "badge"], ["class", "cover-letter", 4, "ngIf"], [1, "proposal-meta"], [4, "ngIf"], ["class", "proposal-actions", 4, "ngIf"], ["class", "feedback", 4, "ngIf"], [1, "cover-letter"], [1, "proposal-actions"], [1, "btn-accept", 3, "click"], [1, "btn-reject", 3, "click"], [1, "feedback"]], template: function ClProposalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Proposals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Review freelancer applications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, ClProposalsComponent_div_7_Template, 7, 3, "div", 4)(8, ClProposalsComponent_div_8_Template, 4, 0, "div", 5)(9, ClProposalsComponent_div_9_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.projects.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 4px;\n}\n.project-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.project-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--bo-text-secondary);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--bo-border);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bo-bg-secondary);\n  color: var(--bo-text-primary);\n  outline: none;\n  min-width: 200px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--bo-border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.proposals-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--bo-text-secondary);\n  padding: 40px;\n  background: var(--bo-bg-secondary);\n  border-radius: var(--radius-md);\n}\n.proposal-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  box-shadow: var(--shadow-card);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.proposal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.freelancer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.freelancer-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--bo-text-primary);\n}\n.project-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.cover-letter[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--bo-text-secondary);\n  line-height: 1.6;\n  background: var(--bo-bg-primary);\n  padding: 12px;\n  border-radius: 8px;\n}\n.proposal-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n}\n.proposal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-accept[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #22c55e;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: opacity 0.2s;\n}\n.btn-accept[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.btn-reject[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: var(--danger);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: opacity 0.2s;\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.feedback[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  padding: 8px 12px;\n  background: rgba(245, 158, 11, 0.08);\n  border-radius: 6px;\n  border-left: 3px solid #f59e0b;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.status-accept[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22c55e;\n}\n.status-reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n.status-cancel[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n}\n/*# sourceMappingURL=proposals.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClProposalsComponent, { className: "ClProposalsComponent", filePath: "app\\client\\proposals\\proposals.component.ts", lineNumber: 60 });
})();

// src/app/client/notifications/notifications.component.ts
function NotificationsPageComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.unreadCount, " unread");
  }
}
function NotificationsPageComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function NotificationsPageComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, " \u2713 Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading notifications\u2026");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsPageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, "No notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, "You're all caught up!");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsPageComponent_div_20_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
}
function NotificationsPageComponent_div_20_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function NotificationsPageComponent_div_20_div_1_button_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const n_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.markRead(n_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function NotificationsPageComponent_div_20_div_1_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markRead(n_r4));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, NotificationsPageComponent_div_20_div_1_div_5_Template, 1, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "div", 29)(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34);
    \u0275\u0275template(17, NotificationsPageComponent_div_20_div_1_button_17_Template, 2, 0, "button", 35);
    \u0275\u0275elementStart(18, "button", 36);
    \u0275\u0275listener("click", function NotificationsPageComponent_div_20_div_1_Template_button_click_18_listener($event) {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteNotif($event, n_r4.id));
    });
    \u0275\u0275text(19, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !n_r4.read);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeClass(n_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getIcon(n_r4.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r4.read);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getTypeClass(n_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(n_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.timeAgo(n_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !n_r4.read);
  }
}
function NotificationsPageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, NotificationsPageComponent_div_20_div_1_Template, 20, 11, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filtered);
  }
}
var NotificationsPageComponent = class _NotificationsPageComponent {
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  constructor(authService, notifService, wsService) {
    this.authService = authService;
    this.notifService = notifService;
    this.wsService = wsService;
    this.notifications = [];
    this.filtered = [];
    this.isLoading = true;
    this.activeFilter = "all";
  }
  ngOnInit() {
    this.authService.checkAuth();
    this.load();
    const userId = String(this.authService.currentUser?.id || "");
    if (userId) {
      this.wsService.connect(userId);
      this.wsSub = this.wsService.onNotification().subscribe((notif) => {
        this.notifications.unshift(notif);
        this.applyFilter();
      });
    }
  }
  ngOnDestroy() {
    this.wsSub?.unsubscribe();
  }
  load() {
    const userId = this.authService.currentUser?.id;
    if (!userId) {
      this.isLoading = false;
      return;
    }
    this.notifService.getForUser(userId).subscribe({
      next: (n) => {
        this.notifications = n.sort((a, b) => (b.createdAt || "") > (a.createdAt || "") ? 1 : -1);
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  setFilter(f) {
    this.activeFilter = f;
    this.applyFilter();
  }
  applyFilter() {
    if (this.activeFilter === "unread")
      this.filtered = this.notifications.filter((n) => !n.read);
    else if (this.activeFilter === "read")
      this.filtered = this.notifications.filter((n) => n.read);
    else
      this.filtered = [...this.notifications];
  }
  markRead(n) {
    if (!n.read && n.id) {
      this.notifService.markAsRead(n.id).subscribe(() => {
        n.read = true;
        this.applyFilter();
      });
    }
  }
  markAllRead() {
    const userId = this.authService.currentUser?.id;
    if (!userId)
      return;
    this.notifService.markAllAsRead(userId).subscribe(() => {
      this.notifications.forEach((n) => n.read = true);
      this.applyFilter();
    });
  }
  deleteNotif(e, id) {
    e.stopPropagation();
    this.notifService.delete(id).subscribe(() => {
      this.notifications = this.notifications.filter((n) => n.id !== id);
      this.applyFilter();
    });
  }
  getIcon(type) {
    const m = {
      PROJECT_CREATED: "\u{1F680}",
      PROPOSAL_RECEIVED: "\u{1F4DD}",
      PROPOSAL_ACCEPTED: "\u{1F389}",
      PROPOSAL_REJECTED: "\u274C",
      DEADLINE_REMINDER: "\u23F0",
      NEW_MESSAGE: "\u{1F4AC}",
      SYSTEM: "\u2699\uFE0F"
    };
    return m[type] || "\u{1F514}";
  }
  getTypeClass(type) {
    const m = {
      PROJECT_CREATED: "type-info",
      PROPOSAL_RECEIVED: "type-info",
      PROPOSAL_ACCEPTED: "type-success",
      PROPOSAL_REJECTED: "type-error",
      DEADLINE_REMINDER: "type-warning",
      NEW_MESSAGE: "type-info",
      SYSTEM: "type-warning"
    };
    return m[type] || "type-info";
  }
  getTypeLabel(type) {
    const m = {
      PROJECT_CREATED: "New Project",
      PROPOSAL_RECEIVED: "New Proposal",
      PROPOSAL_ACCEPTED: "Accepted",
      PROPOSAL_REJECTED: "Rejected",
      DEADLINE_REMINDER: "Deadline",
      NEW_MESSAGE: "Message",
      SYSTEM: "System"
    };
    return m[type] || "Notification";
  }
  timeAgo(dateStr) {
    if (!dateStr)
      return "";
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 6e4);
    if (m < 1)
      return "Just now";
    if (m < 60)
      return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24)
      return `${h}h ago`;
    const d = Math.floor(h / 24);
    return `${d}d ago`;
  }
  static {
    this.\u0275fac = function NotificationsPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationsPageComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(WebSocketService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsPageComponent, selectors: [["app-notifications-page"]], decls: 21, vars: 13, consts: [[1, "notif-page"], [1, "notif-header"], [1, "header-left"], [1, "notif-title"], ["class", "unread-badge", 4, "ngIf"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], [1, "filter-bar"], [1, "filter-btn", 3, "click"], [1, "filter-count"], [1, "filter-count", "unread-count"], ["class", "loading-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "unread-badge"], [1, "btn-mark-all", 3, "click"], [1, "loading-wrap"], [1, "loader"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "notif-list"], ["class", "notif-card", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-card", 3, "click"], [1, "card-left"], [1, "notif-icon-wrap", 3, "ngClass"], [1, "notif-icon"], ["class", "unread-dot", 4, "ngIf"], [1, "card-body"], [1, "card-top"], [1, "type-tag", 3, "ngClass"], [1, "notif-time"], [1, "notif-title-text"], [1, "notif-msg"], [1, "card-actions"], ["class", "btn-read", "title", "Mark as read", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn-del", 3, "click"], [1, "unread-dot"], ["title", "Mark as read", 1, "btn-read", 3, "click"]], template: function NotificationsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, NotificationsPageComponent_span_5_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, NotificationsPageComponent_button_6_Template, 2, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_8_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(9, " All ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_12_listener() {
          return ctx.setFilter("unread");
        });
        \u0275\u0275text(13, " Unread ");
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_16_listener() {
          return ctx.setFilter("read");
        });
        \u0275\u0275text(17, " Read ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, NotificationsPageComponent_div_18_Template, 4, 0, "div", 10)(19, NotificationsPageComponent_div_19_Template, 7, 0, "div", 11)(20, NotificationsPageComponent_div_20_Template, 2, 1, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeFilter === "all");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.notifications.length);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeFilter === "unread");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.unreadCount);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeFilter === "read");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filtered.length > 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf], styles: ['\n\n.notif-page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family:\n    "Plus Jakarta Sans",\n    "DM Sans",\n    system-ui,\n    sans-serif;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--bo-text-primary, #111827);\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.03em;\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border: 1.5px solid #6366f1;\n  color: #6366f1;\n  background: transparent;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  color: #6b7280;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.18s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);\n}\n.filter-count[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  padding: 1px 7px;\n  border-radius: 50px;\n  font-size: 11px;\n}\n.active[_ngcontent-%COMP%]   .filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.unread-count[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 14px;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid rgba(99, 102, 241, 0.2);\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  background: white;\n  border-radius: 20px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.4;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 6px;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n  margin: 0;\n}\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.notif-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 18px 20px;\n  background: white;\n  border-radius: 16px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.notif-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: transparent;\n  transition: background 0.2s;\n}\n.notif-card.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.03);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.notif-card.unread[_ngcontent-%COMP%]::before {\n  background: #6366f1;\n}\n.notif-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.card-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.notif-icon-wrap.type-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.notif-icon-wrap.type-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n}\n.notif-icon-wrap.type-info[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n}\n.notif-icon-wrap.type-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6366f1;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.5);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 6px rgba(99, 102, 241, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 14px rgba(99, 102, 241, 0.8);\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.type-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 3px 9px;\n  border-radius: 50px;\n}\n.type-tag.type-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.type-tag.type-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.type-tag.type-info[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n}\n.type-tag.type-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-left: auto;\n  white-space: nowrap;\n}\n.notif-title-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n  line-height: 1.4;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.btn-read[_ngcontent-%COMP%], \n.btn-del[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n}\n.btn-read[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.btn-read[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.2);\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #dc2626;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n/*# sourceMappingURL=notifications.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsPageComponent, { className: "NotificationsPageComponent", filePath: "app\\client\\notifications\\notifications.component.ts", lineNumber: 13 });
})();

// src/app/client/profile/profile.component.ts
function ClProfileComponent_div_4_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2705 Saved!");
    \u0275\u0275elementEnd();
  }
}
function ClProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "label");
    \u0275\u0275text(12, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ClProfileComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.firstName, $event) || (ctx_r1.user.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "label");
    \u0275\u0275text(16, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ClProfileComponent_div_4_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.lastName, $event) || (ctx_r1.user.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "label");
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ClProfileComponent_div_4_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.email, $event) || (ctx_r1.user.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "label");
    \u0275\u0275text(24, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ClProfileComponent_div_4_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.location, $event) || (ctx_r1.user.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "label");
    \u0275\u0275text(28, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ClProfileComponent_div_4_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user.bio, $event) || (ctx_r1.user.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
    \u0275\u0275listener("click", function ClProfileComponent_div_4_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, ClProfileComponent_div_4_span_33_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.user.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user.role);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user.bio);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isSaving ? "Saving..." : "Save Changes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
function ClProfileComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const badge_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(badge_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, badge_r3.earnedAt, "mediumDate"));
  }
}
function ClProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 25);
    \u0275\u0275text(5, "My Achievements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275template(9, ClProfileComponent_div_5_div_9_Template, 11, 7, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.badges.length, " badge", ctx_r1.badges.length > 1 ? "s" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.badges);
  }
}
function ClProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 25);
    \u0275\u0275text(5, "My Achievements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "span");
    \u0275\u0275text(8, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Complete projects to earn your first badge!");
    \u0275\u0275elementEnd()()();
  }
}
function ClProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span");
    \u0275\u0275text(2, "\u{1F3C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.toastMessage);
  }
}
var ClProfileComponent = class _ClProfileComponent {
  constructor(authService, userService, http) {
    this.authService = authService;
    this.userService = userService;
    this.http = http;
    this.user = null;
    this.isSaving = false;
    this.saved = false;
    this.badges = [];
    this.loadingBadges = true;
    this.toastMessage = "";
    this.prevBadgeIds = [];
    this.fallbackBadgeDefs = [
      { key: "FIRST_PROJECT", icon: "\u{1F680}", title: "First Project", description: "Posted your first project", minTotal: 1, minCompleted: 0 },
      { key: "ACTIVE_CLIENT", icon: "\u{1F4CB}", title: "Active Client", description: "Actively posting projects", minTotal: 3, minCompleted: 0 },
      { key: "POWER_CLIENT", icon: "\u{1F4AA}", title: "Power Client", description: "Completed 5+ projects", minTotal: 0, minCompleted: 5 },
      { key: "MEGA_CLIENT", icon: "\u{1F3C6}", title: "Mega Client", description: "Completed 10+ projects", minTotal: 0, minCompleted: 10 },
      { key: "LEGEND", icon: "\u{1F451}", title: "Legend", description: "Complete 25+ projects", minTotal: 0, minCompleted: 25 }
    ];
  }
  ngOnInit() {
    this.user = this.authService.currentUser ? __spreadValues({}, this.authService.currentUser) : null;
    if (this.user?.id)
      this.loadBadges(this.user.id);
  }
  normalizeBadge(badge) {
    const defs = {
      FIRST_PROJECT: { icon: "\u{1F680}", title: "First Project", description: "Posted your first project" },
      ACTIVE_CLIENT: { icon: "\u{1F4CB}", title: "Active Client", description: "Actively posting projects" },
      POWER_CLIENT: { icon: "\u{1F4AA}", title: "Power Client", description: "Completed 5+ projects" },
      MEGA_CLIENT: { icon: "\u{1F3C6}", title: "Mega Client", description: "Completed 10+ projects" },
      LOYAL_CLIENT: { icon: "\u2B50", title: "Loyal Client", description: "Active for 30+ days" },
      SPEED_POSTER: { icon: "\u26A1", title: "Speed Poster", description: "Post 3 projects in 1 day" },
      VIP_CLIENT: { icon: "\u{1F48E}", title: "VIP Client", description: "Spend 5000+ TND" },
      TOP_REVIEWER: { icon: "\u{1F31F}", title: "Top Reviewer", description: "Leave 10+ reviews" },
      TEAM_PLAYER: { icon: "\u{1F91D}", title: "Team Player", description: "Hire 5 different freelancers" },
      LEGEND: { icon: "\u{1F451}", title: "Legend", description: "Complete 25+ projects" }
    };
    const key = badge?.badgeType ?? badge?.key ?? badge?.name ?? "";
    const def = defs[key] ?? { icon: "\u{1F3C5}", title: key || "Badge", description: "Achievement unlocked" };
    return __spreadProps(__spreadValues({}, badge), {
      icon: badge?.icon ?? def.icon,
      title: badge?.title ?? badge?.name ?? def.title,
      description: badge?.description ?? badge?.desc ?? def.description,
      earnedAt: badge?.earnedAt ?? badge?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  loadBadges(userId) {
    this.loadingBadges = true;
    this.http.get(`${environment.apiUrl}/badges/user/${userId}`).subscribe({
      next: (data) => {
        const normalized = (data ?? []).map((b) => this.normalizeBadge(b));
        const newBadges = normalized.filter((b) => b?.id && !this.prevBadgeIds.includes(b.id));
        if (newBadges.length > 0 && this.prevBadgeIds.length > 0) {
          newBadges.forEach((b) => this.sendBadgeNotification(userId, b));
        }
        this.prevBadgeIds = normalized.filter((b) => b?.id).map((b) => b.id);
        this.badges = normalized;
        if (this.badges.length === 0) {
          this.loadFallbackBadges(userId);
          return;
        }
        this.loadingBadges = false;
      },
      error: () => this.loadFallbackBadges(userId)
    });
  }
  loadFallbackBadges(userId) {
    fetch(`${environment.apiUrl}/projects?clientId=${userId}`).then((r) => r.json()).then((projects) => {
      const total = (projects ?? []).length;
      const completed = (projects ?? []).filter((p) => String(p?.status ?? "").toLowerCase() === "completed").length;
      const earned = this.fallbackBadgeDefs.filter((b) => b.minTotal > 0 && total >= b.minTotal || b.minCompleted > 0 && completed >= b.minCompleted).map((b) => ({
        key: b.key,
        icon: b.icon,
        title: b.title,
        description: b.description,
        earnedAt: (/* @__PURE__ */ new Date()).toISOString()
      }));
      this.badges = earned;
      this.loadingBadges = false;
    }).catch(() => {
      this.loadingBadges = false;
    });
  }
  sendBadgeNotification(userId, badge) {
    const body = { userId, message: `\u{1F3C5} You earned the badge: ${badge.title} - ${badge.description}`, type: "BADGE", read: false };
    fetch(`${environment.apiUrl}/notifications`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(() => {
      this.toastMessage = `New badge unlocked: ${badge.title} ${badge.icon}`;
      setTimeout(() => this.toastMessage = "", 4e3);
    });
  }
  save() {
    if (!this.user?.id)
      return;
    this.isSaving = true;
    this.user.name = `${this.user.firstName} ${this.user.lastName}`;
    this.userService.update(this.user.id, this.user).subscribe({
      next: () => {
        this.isSaving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 3e3);
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function ClProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClProfileComponent, selectors: [["app-cl-profile"]], decls: 8, vars: 4, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], ["class", "profile-card", 4, "ngIf"], ["class", "badges-card", 4, "ngIf"], ["class", "badges-card empty-badges", 4, "ngIf"], ["class", "toast", 4, "ngIf"], [1, "profile-card"], [1, "avatar-section"], [1, "big-avatar"], [1, "user-name"], [1, "role-tag"], [1, "form-grid"], [1, "form-group"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["disabled", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "full"], [1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-primary", 3, "click", "disabled"], ["class", "success", 4, "ngIf"], [1, "success"], [1, "badges-card"], [1, "badges-header"], [1, "badges-icon"], [1, "badges-title"], [1, "badges-count"], [1, "badges-grid"], ["class", "badge-item", 4, "ngFor", "ngForOf"], [1, "badge-item"], [1, "badge-icon"], [1, "badge-info"], [1, "badge-title"], [1, "badge-desc"], [1, "badge-date"], [1, "badges-card", "empty-badges"], [1, "empty-state"], [1, "toast"]], template: function ClProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "My Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ClProfileComponent_div_4_Template, 34, 11, "div", 3)(5, ClProfileComponent_div_5_Template, 10, 3, "div", 4)(6, ClProfileComponent_div_6_Template, 11, 0, "div", 5)(7, ClProfileComponent_div_7_Template, 5, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.badges.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.badges.length === 0 && !ctx.loadingBadges);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toastMessage);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border-radius: var(--radius-md);\n  padding: 28px;\n  box-shadow: var(--shadow-card);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.big-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--info);\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.role-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: rgba(6, 182, 212, 0.1);\n  color: var(--info);\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.full[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  font-weight: 500;\n}\n.full[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--bo-border);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bo-bg-primary);\n  color: var(--bo-text-primary);\n  outline: none;\n  font-family: var(--font-body);\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 80px;\n  resize: vertical;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.success[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 14px;\n}\n.badges-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border-radius: var(--radius-md);\n  padding: 24px;\n  box-shadow: var(--shadow-card);\n}\n.badges-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.badges-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.badges-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n  flex: 1;\n}\n.badges-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: rgba(139, 92, 246, 0.12);\n  color: var(--primary);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.badges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 14px;\n}\n.badge-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--bo-bg-primary);\n  border-radius: 12px;\n  padding: 14px 16px;\n  border: 1px solid var(--bo-border);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.badge-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.12);\n  border-color: var(--primary);\n}\n.badge-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n}\n.badge-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.badge-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.badge-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.badge-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  opacity: 0.7;\n  margin-top: 2px;\n}\n.empty-badges[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n}\n.empty-badges[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #a855f7);\n  color: white;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClProfileComponent, { className: "ClProfileComponent", filePath: "app\\client\\profile\\profile.component.ts", lineNumber: 101 });
})();

// src/app/client/projects/escrow-payment/escrow-payment.service.ts
var EscrowPaymentService = class _EscrowPaymentService {
  constructor(http) {
    this.http = http;
    this.COMMISSION_RATE = 0.1;
    this.API = environment.apiUrl;
  }
  getProjectById(projectId) {
    return this.http.get(`${this.API}/projects/${projectId}`);
  }
  calculateSummary(budget) {
    const commission = Math.round(budget * this.COMMISSION_RATE * 100) / 100;
    const netAmount = Math.round((budget - commission) * 100) / 100;
    return {
      grossAmount: budget,
      commission,
      netAmount,
      commissionRate: this.COMMISSION_RATE * 100
    };
  }
  processEscrow(payload) {
    return this.http.post(`${this.API}/payments/escrow`, payload);
  }
  static {
    this.\u0275fac = function EscrowPaymentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EscrowPaymentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EscrowPaymentService, factory: _EscrowPaymentService.\u0275fac, providedIn: "root" });
  }
};

// src/app/client/projects/escrow-payment/escrow-payment.component.ts
function EscrowPaymentComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading project\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EscrowPaymentComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function EscrowPaymentComponent_ng_container_3_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function EscrowPaymentComponent_ng_container_3_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r3 + 1);
  }
}
function EscrowPaymentComponent_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275template(2, EscrowPaymentComponent_ng_container_3_div_12_span_2_Template, 2, 0, "span", 4)(3, EscrowPaymentComponent_ng_container_3_div_12_span_3_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.getStepState(i_r3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getStepState(i_r3) === "done");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getStepState(i_r3) !== "done");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.label);
  }
}
function EscrowPaymentComponent_ng_container_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 9);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function EscrowPaymentComponent_ng_container_3_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275text(4, "Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(ctx_r0.project.freelancer.firstName, ctx_r0.project.freelancer.lastName), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.project.freelancer.firstName, " ", ctx_r0.project.freelancer.lastName, " ");
  }
}
function EscrowPaymentComponent_ng_container_3_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275text(3, "Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 74);
    \u0275\u0275text(5, "Not assigned");
    \u0275\u0275elementEnd();
  }
}
function EscrowPaymentComponent_ng_container_3_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "div", 76);
    \u0275\u0275elementStart(2, "div", 77);
    \u0275\u0275text(3, "Processing payment\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EscrowPaymentComponent_ng_container_3_div_107_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 86);
  }
}
function EscrowPaymentComponent_ng_container_3_div_107_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6.badge);
  }
}
function EscrowPaymentComponent_ng_container_3_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function EscrowPaymentComponent_ng_container_3_div_107_Template_div_click_0_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectMethod(m_r6.key));
    });
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275template(2, EscrowPaymentComponent_ng_container_3_div_107_div_2_Template, 1, 0, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 82)(6, "div", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, EscrowPaymentComponent_ng_container_3_div_107_span_10_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.selectedMethod === m_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedMethod === m_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.desc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r6.badge);
  }
}
function EscrowPaymentComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4, "\u{1F517}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6, "Matchy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h1", 14);
    \u0275\u0275text(8, "Secure Escrow Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10, "Your payment is protected until delivery is confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275template(12, EscrowPaymentComponent_ng_container_3_div_12_Template, 6, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EscrowPaymentComponent_ng_container_3_div_13_Template, 5, 1, "div", 18);
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "div", 21)(17, "div", 22);
    \u0275\u0275text(18, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275text(20, "Project Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "div", 25)(23, "div", 26);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 28)(28, "span", 29);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 30);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 31);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 32)(35, "div", 33)(36, "div", 34);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 35);
    \u0275\u0275text(39, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 37);
    \u0275\u0275text(43, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 33);
    \u0275\u0275template(45, EscrowPaymentComponent_ng_container_3_ng_container_45_Template, 7, 3, "ng-container", 38)(46, EscrowPaymentComponent_ng_container_3_ng_template_46_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 39)(49, "div", 40);
    \u0275\u0275text(50, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 41);
    \u0275\u0275text(52, " By confirming the payment, your budget will be ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "held in escrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " by Matchy. Funds will only be released to the freelancer after your ");
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "delivery confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, ". In case of dispute, our team will arbitrate. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 20)(60, "div", 21)(61, "div", 42);
    \u0275\u0275text(62, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 23);
    \u0275\u0275text(64, "Payment Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 43);
    \u0275\u0275template(66, EscrowPaymentComponent_ng_container_3_div_66_Template, 4, 0, "div", 44);
    \u0275\u0275elementStart(67, "div", 45)(68, "div", 46);
    \u0275\u0275text(69, "Total amount to hold in escrow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 47);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementStart(73, "span", 48);
    \u0275\u0275text(74, "TND");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 49)(76, "div", 50)(77, "span", 51);
    \u0275\u0275element(78, "span", 52);
    \u0275\u0275text(79, " Project budget ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 53);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 50)(84, "span", 51);
    \u0275\u0275element(85, "span", 54);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 55);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(90, "div", 56);
    \u0275\u0275elementStart(91, "div", 50)(92, "span", 57);
    \u0275\u0275element(93, "span", 58);
    \u0275\u0275text(94, " Freelancer receives ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 59);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 60)(99, "div", 61);
    \u0275\u0275text(100, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 62)(102, "strong");
    \u0275\u0275text(103, "Protected by Matchy Escrow");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "br");
    \u0275\u0275text(105, " Funds held until you confirm delivery ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 63);
    \u0275\u0275template(107, EscrowPaymentComponent_ng_container_3_div_107_Template, 11, 7, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "button", 65);
    \u0275\u0275listener("click", function EscrowPaymentComponent_ng_container_3_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.processPayment());
    });
    \u0275\u0275element(109, "span", 66);
    \u0275\u0275text(110, " \u{1F512} Hold funds in escrow ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 67);
    \u0275\u0275text(112, "\u{1F6E1}\uFE0F 100% Secure \u2014 SSL Encrypted");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noFreelancer_r7 = \u0275\u0275reference(47);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.steps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.project.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.project.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx_r0.formatDate(ctx_r0.project.createdAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#PRJ-", ctx_r0.project.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(ctx_r0.project.client.firstName, ctx_r0.project.client.lastName), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.project.client.firstName, " ", ctx_r0.project.client.lastName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.project.freelancer)("ngIfElse", noFreelancer_r7);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r0.loadingPayment);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(72, 20, ctx_r0.summary.grossAmount, "1.0-2"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(82, 23, ctx_r0.summary.grossAmount, "1.0-2"), " TND ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Matchy fee (", ctx_r0.summary.commissionRate, "%) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2212 ", \u0275\u0275pipeBind2(89, 26, ctx_r0.summary.commission, "1.0-2"), " TND ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(97, 29, ctx_r0.summary.netAmount, "1.0-2"), " TND ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loadingPayment || !ctx_r0.project.freelancer);
  }
}
function EscrowPaymentComponent_div_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Transaction #", ctx_r0.transactionId, " ");
  }
}
function EscrowPaymentComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 90);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 91);
    \u0275\u0275text(5, "Funds Held!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92);
    \u0275\u0275text(7, " Your payment of ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " is now securely held in escrow.");
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13, " The project can start. Confirm delivery to release the funds. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 93)(15, "div", 94);
    \u0275\u0275text(16, "\u{1F504} Escrow Flow Activated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 95)(18, "span", 96);
    \u0275\u0275text(19, "Client pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 97);
    \u0275\u0275text(21, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 98);
    \u0275\u0275text(23, "\u{1F512} Escrow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 97);
    \u0275\u0275text(25, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 99);
    \u0275\u0275text(27, "Freelancer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, EscrowPaymentComponent_div_4_div_28_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(29, "button", 101);
    \u0275\u0275listener("click", function EscrowPaymentComponent_div_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(30, " \u2713 Go to My Projects ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 2, ctx_r0.summary == null ? null : ctx_r0.summary.grossAmount, "1.0-2"), " TND");
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r0.transactionId);
  }
}
var EscrowPaymentComponent = class _EscrowPaymentComponent {
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.project = null;
    this.summary = null;
    this.loadingProject = true;
    this.loadingPayment = false;
    this.errorMessage = "";
    this.paymentSuccess = false;
    this.transactionId = null;
    this.selectedMethod = "BANK_TRANSFER";
    this.currentStep = 3;
    this.steps = [
      { label: "Project Created" },
      { label: "Freelancer Assigned" },
      { label: "Escrow Payment" },
      { label: "In Progress" },
      { label: "Delivery" },
      { label: "Funds Released" }
    ];
    this.paymentMethods = [
      { key: "BANK_TRANSFER", icon: "\u{1F3E6}", name: "Bank Transfer", desc: "STB, BNA, Attijari\u2026", badge: "Recommended" },
      { key: "CARD", icon: "\u{1F4B3}", name: "Credit Card", desc: "Visa, Mastercard" },
      { key: "D17", icon: "\u{1F4F1}", name: "D17 / Flouci", desc: "Mobile payment" }
    ];
  }
  ngOnInit() {
    const projectId = Number(this.route.snapshot.paramMap.get("projectId"));
    if (!projectId) {
      this.errorMessage = "Project ID is missing.";
      this.loadingProject = false;
      return;
    }
    this.loadProject(projectId);
  }
  loadProject(projectId) {
    this.loadingProject = true;
    this.errorMessage = "";
    this.service.getProjectById(projectId).subscribe({
      next: (project) => {
        this.project = project;
        this.summary = this.service.calculateSummary(project.budget);
        this.loadingProject = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Unable to load project.";
        this.loadingProject = false;
      }
    });
  }
  processPayment() {
    if (!this.project || this.loadingPayment)
      return;
    if (!this.project.freelancer) {
      this.errorMessage = "No freelancer assigned to this project.";
      return;
    }
    this.loadingPayment = true;
    this.errorMessage = "";
    const payload = {
      projectId: this.project.id,
      clientId: this.project.client.id,
      freelancerId: this.project.freelancer.id,
      paymentMethod: this.selectedMethod
    };
    this.service.processEscrow(payload).subscribe({
      next: (res) => {
        this.transactionId = res.transactionId;
        this.paymentSuccess = true;
        this.currentStep = 4;
        this.loadingPayment = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Payment failed. Please try again.";
        this.loadingPayment = false;
      }
    });
  }
  selectMethod(method) {
    this.selectedMethod = method;
  }
  goToDashboard() {
    this.router.navigate(["/client/projects"]);
  }
  getStepState(index) {
    const step = index + 1;
    if (step < this.currentStep)
      return "done";
    if (step === this.currentStep)
      return "active";
    return "pending";
  }
  getInitials(firstName, lastName) {
    return `${firstName?.charAt(0) ?? ""}${lastName?.charAt(0) ?? ""}`.toUpperCase();
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  static {
    this.\u0275fac = function EscrowPaymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EscrowPaymentComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EscrowPaymentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EscrowPaymentComponent, selectors: [["app-escrow-payment"]], decls: 5, vars: 4, consts: [["noFreelancer", ""], [1, "escrow-page"], ["class", "loading-state", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], [4, "ngIf"], ["class", "success-overlay", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-banner"], [1, "error-icon"], [1, "page-header"], [1, "logo"], [1, "logo-icon"], [1, "logo-name"], [1, "page-title"], [1, "page-sub"], [1, "steps-bar"], ["class", "step", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "error-banner inline", 4, "ngIf"], [1, "main-grid"], [1, "card"], [1, "card-header"], [1, "card-header-icon", "icon-purple"], [1, "card-header-title"], [1, "card-body"], [1, "project-banner"], [1, "project-banner-title"], [1, "project-banner-desc"], [1, "project-meta"], [1, "meta-tag", "cat"], [1, "meta-tag", "date"], [1, "meta-tag", "id"], [1, "parties-row"], [1, "party-card"], [1, "party-avatar", "client"], [1, "party-role"], [1, "party-name"], [1, "arrow-icon"], [4, "ngIf", "ngIfElse"], [1, "escrow-explain"], [1, "escrow-explain-icon"], [1, "escrow-explain-text"], [1, "card-header-icon", "icon-green"], [1, "card-body", 2, "position", "relative"], ["class", "processing-overlay", 4, "ngIf"], [1, "amount-display"], [1, "amount-label"], [1, "amount-value"], [1, "amount-devise"], [1, "breakdown"], [1, "breakdown-row"], [1, "breakdown-label"], [1, "dot", "purple"], [1, "breakdown-value", "gross"], [1, "dot", "yellow"], [1, "breakdown-value", "comm"], [1, "breakdown-divider"], [1, "breakdown-label", "bold"], [1, "dot", "green"], [1, "breakdown-value", "net"], [1, "escrow-lock"], [1, "escrow-lock-icon"], [1, "escrow-lock-text"], [1, "payment-methods"], ["class", "pay-method", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "btn-pay", 3, "click", "disabled"], [1, "btn-shimmer"], [1, "secure-note"], [1, "step", 3, "ngClass"], [1, "step-circle"], [1, "step-label"], [1, "error-banner", "inline"], [1, "party-avatar", "freelancer"], [1, "party-avatar", "empty"], [1, "party-name", "no-assign"], [1, "processing-overlay"], [1, "spinner-lg"], [1, "processing-text"], [1, "pay-method", 3, "click"], [1, "pay-method-radio"], ["class", "radio-dot", 4, "ngIf"], [1, "pay-method-icon"], [1, "pay-method-info"], [1, "pay-method-name"], [1, "pay-method-desc"], ["class", "pay-method-badge", 4, "ngIf"], [1, "radio-dot"], [1, "pay-method-badge"], [1, "success-overlay"], [1, "success-modal"], [1, "success-check"], [1, "success-title"], [1, "success-sub"], [1, "escrow-status-box"], [1, "escrow-status-title"], [1, "escrow-flow"], [1, "ef-badge", "client-b"], [1, "ef-arrow"], [1, "ef-badge", "escrow-b"], [1, "ef-badge", "free-b"], ["class", "tx-info", 4, "ngIf"], [1, "btn-close-success", 3, "click"], [1, "tx-info"]], template: function EscrowPaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, EscrowPaymentComponent_div_1_Template, 4, 0, "div", 2)(2, EscrowPaymentComponent_div_2_Template, 5, 1, "div", 3)(3, EscrowPaymentComponent_ng_container_3_Template, 113, 32, "ng-container", 4)(4, EscrowPaymentComponent_div_4_Template, 31, 5, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadingProject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingProject && ctx.errorMessage && !ctx.project);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingProject && ctx.project && ctx.summary);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paymentSuccess);
      }
    }, styles: ['\n\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.93);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_lineGrow {\n  from {\n    width: 0;\n    opacity: 0;\n  }\n  to {\n    width: 100%;\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -80%;\n  }\n  100% {\n    left: 150%;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatY {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_checkPop {\n  0% {\n    transform: scale(0) rotate(-10deg);\n    opacity: 0;\n  }\n  70% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_dotBlink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.06);\n  }\n}\n.escrow-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 40px 20px 80px;\n  min-height: 100vh;\n  background: var(--bo-bg);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s ease both 0.05s;\n}\n.escrow-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  background:\n    radial-gradient(\n      ellipse 80% 50% at 15% 10%,\n      rgba(99, 102, 241, 0.07) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 60% 40% at 85% 85%,\n      rgba(236, 72, 153, 0.05) 0%,\n      transparent 60%);\n  pointer-events: none;\n}\n.escrow-page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 1000px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 80px 20px;\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: 2.5px solid var(--bo-border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: var(--radius-md);\n  color: #fca5a5;\n  font-size: 13px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s ease both 0.08s;\n}\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7,\n      #ec4899);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);\n  animation: _ngcontent-%COMP%_pulse 3s ease-in-out infinite;\n}\n.logo-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      130deg,\n      #6366f1,\n      #a855f7,\n      #ec4899);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: -1.2px;\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  background:\n    linear-gradient(\n      130deg,\n      #14163a 10%,\n      #6366f1 55%,\n      #a855f7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n[data-theme=dark][_nghost-%COMP%]   .page-title[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      130deg,\n      #fff 20%,\n      #c4b5fd 60%,\n      #f9a8d4 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.page-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  height: 3px;\n  border-radius: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #a855f7,\n      #ec4899);\n  animation: _ngcontent-%COMP%_lineGrow 0.9s cubic-bezier(0.22, 0.68, 0, 1.2) both 0.5s;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 14px;\n}\n.steps-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  background: var(--bo-card);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-lg);\n  padding: 18px 24px;\n  box-shadow: var(--bo-shadow-sm);\n  animation: _ngcontent-%COMP%_fadeUp 0.5s ease both 0.14s;\n  overflow-x: auto;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 80px;\n  position: relative;\n  cursor: default;\n}\n.step[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 16px;\n  left: calc(50% + 22px);\n  right: calc(-50% + 22px);\n  height: 2px;\n  background: var(--bo-border2);\n  z-index: 0;\n  transition: background 0.5s;\n}\n.step.done[_ngcontent-%COMP%]:not(:last-child)::after {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #a855f7);\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: 2px solid var(--bo-border2);\n  background: var(--bo-card2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--bo-text-tertiary);\n  position: relative;\n  z-index: 1;\n  transition: all 0.4s;\n}\n.step.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-2);\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.14);\n}\n.step.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  background: rgba(16, 185, 129, 0.14);\n  color: var(--success-2);\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--bo-text-tertiary);\n  text-align: center;\n  transition: color 0.4s;\n}\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--primary-2);\n}\n.step.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--success-2);\n}\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.5s ease both 0.2s;\n}\n@media (max-width: 860px) {\n  .main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bo-card);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--bo-shadow-sm);\n  overflow: hidden;\n  transition: background 0.45s, border-color 0.45s;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 18px 22px 16px;\n  border-bottom: 1px solid var(--bo-border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bo-thead);\n}\n.card-header-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.card-header-icon.icon-purple[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n}\n.card-header-icon.icon-green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n}\n.card-header-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 22px;\n  position: relative;\n}\n.project-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.08),\n      rgba(168, 85, 247, 0.06),\n      rgba(236, 72, 153, 0.04));\n  border: 1px solid rgba(99, 102, 241, 0.16);\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  margin-bottom: 18px;\n  position: relative;\n  overflow: hidden;\n}\n.project-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #a855f7,\n      #ec4899);\n}\n.project-banner-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  margin-bottom: 6px;\n}\n.project-banner-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 12px;\n}\n.project-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.meta-tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.meta-tag.cat[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.13);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.24);\n}\n.meta-tag.date[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #6ee7b7;\n  border: 1px solid rgba(16, 185, 129, 0.22);\n}\n.meta-tag.id[_ngcontent-%COMP%] {\n  background: var(--bo-card2);\n  color: var(--bo-text-secondary);\n  border: 1px solid var(--bo-border2);\n  font-family: monospace;\n}\n.parties-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.party-card[_ngcontent-%COMP%] {\n  background: var(--bo-card2);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  padding: 14px 12px;\n  text-align: center;\n}\n.party-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 auto 8px;\n  border: 2px solid rgba(255, 255, 255, 0.14);\n  transition: transform 0.25s, box-shadow 0.25s;\n}\n.party-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12) rotate(-4deg);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);\n}\n.party-avatar.client[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #06b6d4);\n}\n.party-avatar.freelancer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9333ea,\n      #a855f7);\n}\n.party-avatar.empty[_ngcontent-%COMP%] {\n  background: var(--bo-border2);\n  color: var(--bo-text-tertiary);\n}\n.party-role[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--bo-text-tertiary);\n  margin-bottom: 2px;\n}\n.party-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.party-name.no-assign[_ngcontent-%COMP%] {\n  color: var(--bo-text-tertiary);\n  font-style: italic;\n  font-weight: 400;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--bo-text-tertiary);\n  text-align: center;\n  animation: _ngcontent-%COMP%_floatY 2.5s ease-in-out infinite;\n}\n.escrow-explain[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.16);\n  border-radius: var(--radius-md);\n  padding: 14px 16px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.escrow-explain-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.escrow-explain-text[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--bo-text-secondary);\n  line-height: 1.6;\n}\n.escrow-explain-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-2);\n}\n.amount-display[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0 18px;\n  border-bottom: 1px solid var(--bo-border);\n  margin-bottom: 18px;\n}\n.amount-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--bo-text-tertiary);\n  margin-bottom: 6px;\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 40px;\n  font-weight: 800;\n  letter-spacing: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.amount-devise[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  opacity: 0.7;\n}\n.breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.breakdown-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.breakdown-label[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.breakdown-label.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_dotBlink 2s ease-in-out infinite;\n}\n.dot.purple[_ngcontent-%COMP%] {\n  background: #818cf8;\n  box-shadow: 0 0 5px #818cf8;\n}\n.dot.yellow[_ngcontent-%COMP%] {\n  background: #fcd34d;\n  box-shadow: 0 0 5px #fcd34d;\n}\n.dot.green[_ngcontent-%COMP%] {\n  background: #34d399;\n  box-shadow: 0 0 5px #34d399;\n}\n.breakdown-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.breakdown-value.gross[_ngcontent-%COMP%] {\n  color: var(--bo-text-primary);\n}\n.breakdown-value.comm[_ngcontent-%COMP%] {\n  color: #fcd34d;\n}\n.breakdown-value.net[_ngcontent-%COMP%] {\n  color: #34d399;\n  font-size: 15px;\n}\n.breakdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--bo-border);\n  margin: 2px 0;\n}\n.escrow-lock[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.08),\n      rgba(168, 85, 247, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.18);\n  border-radius: var(--radius-md);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  animation: _ngcontent-%COMP%_floatY 3s ease-in-out infinite;\n}\n.escrow-lock-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.escrow-lock-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  line-height: 1.5;\n}\n.escrow-lock-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-2);\n  font-size: 13px;\n  display: block;\n  margin-bottom: 2px;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.pay-method[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  border-radius: var(--radius-md);\n  border: 2px solid var(--bo-border2);\n  cursor: pointer;\n  background: var(--bo-card2);\n  transition: all 0.22s;\n}\n.pay-method[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.pay-method.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: rgba(99, 102, 241, 0.08);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.pay-method-radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid var(--bo-border2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.pay-method.selected[_ngcontent-%COMP%]   .pay-method-radio[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary);\n}\n.radio-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.pay-method-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pay-method-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pay-method-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.pay-method-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.pay-method-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n  border: 1px solid rgba(16, 185, 129, 0.24);\n}\n.btn-pay[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 20px;\n  border: none;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7,\n      #ec4899);\n  background-size: 200% 200%;\n  background-position: 0% 50%;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  letter-spacing: 0.3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.45);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s;\n}\n.btn-pay[_ngcontent-%COMP%]   .btn-shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -80%;\n  width: 55%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 2.5s ease-in-out infinite;\n}\n.btn-pay[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 36px rgba(99, 102, 241, 0.6);\n  background-position: 100% 50%;\n}\n.btn-pay[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.btn-pay[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.secure-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  color: var(--bo-text-tertiary);\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.processing-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--bo-card);\n  border-radius: var(--radius-lg);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--bo-border2);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.processing-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--bo-text-secondary);\n}\n.success-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeUp 0.3s ease both;\n}\n.success-modal[_ngcontent-%COMP%] {\n  background: var(--bo-card);\n  border: 1px solid var(--bo-border);\n  border-radius: 24px;\n  padding: 44px 38px;\n  text-align: center;\n  max-width: 440px;\n  width: 90%;\n  box-shadow: var(--bo-shadow-xl);\n  animation: _ngcontent-%COMP%_scaleIn 0.4s cubic-bezier(0.22, 0.68, 0, 1.2);\n  position: relative;\n  overflow: hidden;\n}\n.success-modal[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399,\n      #06b6d4);\n}\n.success-check[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(16, 185, 129, 0.14);\n  border: 2px solid rgba(16, 185, 129, 0.28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  margin: 0 auto 18px;\n  animation: _ngcontent-%COMP%_checkPop 0.5s cubic-bezier(0.22, 0.68, 0, 1.2) both 0.15s;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  margin-bottom: 8px;\n}\n.success-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--bo-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 22px;\n}\n.success-sub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--bo-text-primary);\n}\n.escrow-status-box[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.07);\n  border: 1px solid rgba(16, 185, 129, 0.18);\n  border-radius: var(--radius-md);\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.escrow-status-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #34d399;\n  margin-bottom: 10px;\n}\n.escrow-flow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ef-badge[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.ef-badge.client-b[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.14);\n  color: #67e8f9;\n  border: 1px solid rgba(6, 182, 212, 0.28);\n}\n.ef-badge.escrow-b[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.14);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.28);\n}\n.ef-badge.free-b[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.14);\n  color: #d8b4fe;\n  border: 1px solid rgba(168, 85, 247, 0.28);\n}\n.ef-arrow[_ngcontent-%COMP%] {\n  color: var(--bo-text-tertiary);\n  font-size: 16px;\n}\n.tx-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-tertiary);\n  font-family: monospace;\n  margin-bottom: 16px;\n}\n.btn-close-success[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: none;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: var(--font-body);\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.38);\n  transition: all 0.25s;\n}\n.btn-close-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(16, 185, 129, 0.5);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(99, 102, 241, 0.6);\n}\n/*# sourceMappingURL=escrow-payment.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EscrowPaymentComponent, { className: "EscrowPaymentComponent", filePath: "app\\client\\projects\\escrow-payment\\escrow-payment.component.ts", lineNumber: 20 });
})();

// src/app/client/client-routing.module.ts
var routes = [
  {
    path: "",
    component: ClLayoutComponent,
    canActivate: [ClientGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: ClDashboardComponent },
      { path: "projects", component: ClProjectsComponent },
      { path: "proposals", component: ClProposalsComponent },
      { path: "notifications", component: NotificationsPageComponent },
      { path: "profile", component: ClProfileComponent },
      { path: "projects/payment/:projectId", component: EscrowPaymentComponent }
      // ← ADD THIS
    ]
  }
];
var ClientRoutingModule = class _ClientRoutingModule {
  static {
    this.\u0275fac = function ClientRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/client/layout/cl-header/cl-header.component.ts
function ClHeaderComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Hello, ", (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.firstName) || (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name), " ");
  }
}
var ClHeaderComponent = class _ClHeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function ClHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClHeaderComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClHeaderComponent, selectors: [["app-cl-header"]], decls: 8, vars: 1, consts: [[1, "cl-header"], [1, "header-left"], [1, "page-context"], [1, "header-right"], [1, "btn-outline", 3, "click"], ["class", "user-greeting", 4, "ngIf"], [1, "user-greeting"]], template: function ClHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Client Portal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function ClHeaderComponent_Template_button_click_5_listener() {
          return ctx.goHome();
        });
        \u0275\u0275text(6, "\u2190 Home");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ClHeaderComponent_span_7_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.authService.currentUser);
      }
    }, dependencies: [NgIf], styles: ["\n\n.cl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  background: var(--bo-bg-secondary);\n  border-bottom: 1px solid var(--bo-border);\n}\n.page-context[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--bo-text-primary);\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.user-greeting[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--bo-text-secondary);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 13px;\n  border: 1px solid var(--bo-border);\n  border-radius: 6px;\n  background: transparent;\n  color: var(--bo-text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n/*# sourceMappingURL=cl-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClHeaderComponent, { className: "ClHeaderComponent", filePath: "app\\client\\layout\\cl-header\\cl-header.component.ts", lineNumber: 29 });
})();

// src/app/client/client.module.ts
var ClientModule = class _ClientModule {
  static {
    this.\u0275fac = function ClientModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      ClientRoutingModule
    ] });
  }
};
export {
  ClientModule
};
//# sourceMappingURL=chunk-ZRPIF5HY.js.map
