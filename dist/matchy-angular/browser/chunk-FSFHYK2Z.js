import {
  ActivatedRoute,
  AuthService,
  CheckboxControlValueAccessor,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  EventEmitter,
  FlouciService,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HttpClient,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  SubscriptionAbonnementComponent,
  SubscriptionManagementComponent,
  SubscriptionPaymentComponent,
  SubscriptionService,
  TitleCasePipe,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ESJV5RXI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/frontoffice/layout/fo-navbar/fo-navbar.component.ts
function FoNavbarComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 20);
    \u0275\u0275text(2, "My Projects");
    \u0275\u0275elementEnd()();
  }
}
function FoNavbarComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2, "Plans");
    \u0275\u0275elementEnd()();
  }
}
function FoNavbarComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 22);
    \u0275\u0275text(2, "My Subscription");
    \u0275\u0275elementEnd()();
  }
}
function FoNavbarComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hello, ", ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name, "");
  }
}
function FoNavbarComponent_a_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1, " \u2699\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FoNavbarComponent_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(1, " My Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FoNavbarComponent_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(1, " Logout ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, " Get Started ");
    \u0275\u0275elementEnd();
  }
}
var FoNavbarComponent = class _FoNavbarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.isScrolled = false;
    this.isMenuOpen = false;
  }
  onScroll() {
    this.isScrolled = window.scrollY > 30;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  goToDashboard() {
    this.router.navigate(["/backoffice/dashboard"]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function FoNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FoNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoNavbarComponent, selectors: [["app-fo-navbar"]], hostBindings: function FoNavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function FoNavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 36, vars: 15, consts: [[1, "fo-navbar"], [1, "nav-container"], ["routerLink", "/", 1, "nav-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "logo-accent"], [1, "nav-links"], ["href", "#how-it-works", 1, "nav-link"], ["href", "#who-we-are", 1, "nav-link"], ["routerLink", "/events", 1, "nav-link"], ["routerLink", "/courses-resources", 1, "nav-link"], [4, "ngIf"], ["class", "nav-user", 4, "ngIf"], [1, "nav-actions"], ["routerLink", "/profile-settings", "class", "btn-profile", "title", "Profile Settings", 4, "ngIf"], ["class", "btn-dashboard", 3, "click", 4, "ngIf"], ["class", "btn-logout", 3, "click", 4, "ngIf"], ["routerLink", "/backoffice/login", "class", "btn-login", 4, "ngIf"], ["routerLink", "/backoffice/login", "class", "btn-dashboard", 4, "ngIf"], [1, "hamburger", 3, "click"], ["routerLink", "/projects-milestones", 1, "nav-link"], ["routerLink", "/subscription-management", 1, "nav-link"], ["routerLink", "/my-subscription", 1, "nav-link"], [1, "nav-user"], [1, "user-greeting"], [1, "user-dot"], ["routerLink", "/profile-settings", "title", "Profile Settings", 1, "btn-profile"], [1, "btn-dashboard", 3, "click"], [1, "btn-logout", 3, "click"], ["routerLink", "/backoffice/login", 1, "btn-login"], ["routerLink", "/backoffice/login", 1, "btn-dashboard"]], template: function FoNavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
        \u0275\u0275text(4, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Match");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "y");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "ul", 6)(10, "li")(11, "a", 7);
        \u0275\u0275text(12, "How it works");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li")(14, "a", 8);
        \u0275\u0275text(15, "Who we are");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li")(17, "a", 9);
        \u0275\u0275text(18, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li")(20, "a", 10);
        \u0275\u0275text(21, "Courses");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, FoNavbarComponent_li_22_Template, 3, 0, "li", 11)(23, FoNavbarComponent_li_23_Template, 3, 0, "li", 11)(24, FoNavbarComponent_li_24_Template, 3, 0, "li", 11)(25, FoNavbarComponent_li_25_Template, 4, 1, "li", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275template(27, FoNavbarComponent_a_27_Template, 2, 0, "a", 14)(28, FoNavbarComponent_button_28_Template, 2, 0, "button", 15)(29, FoNavbarComponent_button_29_Template, 2, 0, "button", 16)(30, FoNavbarComponent_a_30_Template, 2, 0, "a", 17)(31, FoNavbarComponent_a_31_Template, 2, 0, "a", 18);
        \u0275\u0275elementStart(32, "button", 19);
        \u0275\u0275listener("click", function FoNavbarComponent_Template_button_click_32_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(33, "span")(34, "span")(35, "span");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("open", ctx.isMenuOpen);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.authService.isAuthenticated);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.isMenuOpen);
      }
    }, dependencies: [NgIf, RouterLink], styles: ["\n\n.fo-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 16px 0;\n  transition: all 0.3s ease;\n}\n.fo-navbar.scrolled[_ngcontent-%COMP%] {\n  background: rgba(10, 14, 39, 0.95);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--fo-border);\n  padding: 12px 0;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);\n}\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 18px;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  letter-spacing: -0.5px;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  gap: 32px;\n  flex: 1;\n  justify-content: center;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--fo-text-primary);\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-greeting[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--success);\n  border-radius: 50%;\n  box-shadow: 0 0 6px var(--success);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--fo-border);\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.15);\n  border-color: var(--primary);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.4);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: 1px solid var(--fo-border);\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover {\n  color: var(--fo-text-primary);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 18px;\n  background: transparent;\n  color: #ef4444;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  transition: all 0.2s;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #ef4444;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--fo-text-primary);\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-links.open[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: var(--fo-bg-secondary);\n    padding: 20px;\n    border-bottom: 1px solid var(--fo-border);\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=fo-navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoNavbarComponent, { className: "FoNavbarComponent", filePath: "src\\app\\frontoffice\\layout\\fo-navbar\\fo-navbar.component.ts", lineNumber: 10 });
})();

// src/app/frontoffice/layout/fo-footer/fo-footer.component.ts
var FoFooterComponent = class _FoFooterComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.\u0275fac = function FoFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FoFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoFooterComponent, selectors: [["app-fo-footer"]], decls: 13, vars: 1, consts: [[1, "fo-footer"], [1, "footer-container"], [1, "footer-brand"], [1, "logo-icon"], [1, "logo-text"], [1, "accent"], [1, "footer-tagline"], [1, "footer-copy"]], template: function FoFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Match");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "y");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "#1 Tunisian Freelance Platform");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Matchy. All rights reserved.");
      }
    }, styles: ["\n\n.fo-footer[_ngcontent-%COMP%] {\n  background: var(--fo-bg-secondary);\n  border-top: 1px solid var(--fo-border);\n  padding: 40px 32px;\n  text-align: center;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n  .logo-icon {\n    width: 30px;\n    height: 30px;\n    background:\n      linear-gradient(\n        135deg,\n        var(--primary),\n        var(--accent));\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-weight: 800;\n    font-size: 16px;\n    font-family: var(--font-display);\n  }\n  .logo-text {\n    font-family: var(--font-display);\n    font-size: 18px;\n    font-weight: 700;\n    color: var(--fo-text-primary);\n    .accent {\n      color: var(--accent);\n    }\n  }\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  color: var(--fo-text-muted);\n  font-size: 13px;\n  margin-bottom: 6px;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  color: var(--fo-text-muted);\n  font-size: 12px;\n}\n/*# sourceMappingURL=fo-footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoFooterComponent, { className: "FoFooterComponent", filePath: "src\\app\\frontoffice\\layout\\fo-footer\\fo-footer.component.ts", lineNumber: 43 });
})();

// src/app/frontoffice/layout/fo-layout.component.ts
var FoLayoutComponent = class _FoLayoutComponent {
  static {
    this.\u0275fac = function FoLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FoLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoLayoutComponent, selectors: [["app-fo-layout"]], decls: 5, vars: 0, consts: [[1, "fo-layout"], [1, "fo-main"]], template: function FoLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-fo-navbar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-fo-footer");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, FoNavbarComponent, FoFooterComponent], styles: ["\n\n.fo-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--fo-bg-primary);\n}\n.fo-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=fo-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoLayoutComponent, { className: "FoLayoutComponent", filePath: "src\\app\\frontoffice\\layout\\fo-layout.component.ts", lineNumber: 26 });
})();

// src/app/frontoffice/home/home.component.ts
function HomeComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function HomeComponent_div_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r2.title);
  }
}
function HomeComponent_div_29_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, HomeComponent_div_29_div_8_span_1_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getStarsArray(card_r2.stars));
  }
}
function HomeComponent_div_29_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r2.sub);
  }
}
function HomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32)(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_div_29_span_7_Template, 2, 1, "span", 34)(8, HomeComponent_div_29_div_8_Template, 2, 1, "div", 35)(9, HomeComponent_div_29_span_9_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r4 * 0.15 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", card_r2.iconBg + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("filter", "drop-shadow(0 0 6px " + card_r2.iconBg + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r2.stars);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r2.sub);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.stats = [
      { value: "500+", label: "Freelancers" },
      { value: "1200+", label: "Projects" },
      { value: "98%", label: "Satisfaction" }
    ];
    this.projectCards = [
      {
        icon: "\u{1F4E6}",
        iconBg: "#f59e0b",
        label: "New project",
        title: "E-commerce mobile app",
        sub: "Budget: 2500 TND"
      },
      {
        icon: "\u2705",
        iconBg: "#22c55e",
        label: "Project delivered!",
        title: "Restaurant website",
        sub: "",
        stars: 5
      },
      {
        icon: "\u{1F680}",
        iconBg: "#a855f7",
        label: "12 applications",
        title: "",
        sub: "Awaiting your review"
      }
    ];
  }
  ngOnInit() {
  }
  getStarted() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(["/subscription-management"]);
    } else {
      this.router.navigate(["/backoffice/login"]);
    }
  }
  goToLogin() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(["/backoffice/dashboard"]);
    } else {
      this.router.navigate(["/backoffice/login"]);
    }
  }
  getStarsArray(n) {
    return Array(n).fill(0);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 60, vars: 2, consts: [[1, "hero"], [1, "hero-bg"], [1, "bg-glow", "bg-glow-1"], [1, "bg-glow", "bg-glow-2"], [1, "bg-grid"], [1, "hero-container"], [1, "hero-content"], [1, "hero-badge"], [1, "badge-dot"], [1, "hero-title"], [1, "title-accent"], [1, "hero-description"], [1, "hero-actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "hero-stats"], ["class", "stat", 4, "ngFor", "ngForOf"], [1, "hero-cards"], ["class", "project-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["id", "how-it-works", 1, "features"], [1, "features-container"], [1, "section-title"], [1, "text-gradient"], [1, "section-sub"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "project-card"], [1, "card-icon"], [1, "card-content"], [1, "card-label"], ["class", "card-title", 4, "ngIf"], ["class", "card-stars", 4, "ngIf"], ["class", "card-sub", 4, "ngIf"], [1, "card-title"], [1, "card-stars"], [4, "ngFor", "ngForOf"], [1, "card-sub"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275text(9, " #1 Tunisian Freelance Platform ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275text(11, " Connect your");
        \u0275\u0275element(12, "br");
        \u0275\u0275text(13, " projects");
        \u0275\u0275element(14, "br");
        \u0275\u0275text(15, " with the best");
        \u0275\u0275element(16, "br");
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18, "freelancers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "p", 11);
        \u0275\u0275text(20, " Matchy connects Tunisian clients and freelancers for efficient, transparent, and secure collaborations. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_22_listener() {
          return ctx.getStarted();
        });
        \u0275\u0275text(23, " Get started for free \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_24_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(25, " I already have an account ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 15);
        \u0275\u0275template(27, HomeComponent_div_27_Template, 5, 2, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 17);
        \u0275\u0275template(29, HomeComponent_div_29_Template, 10, 11, "div", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "section", 19)(31, "div", 20)(32, "h2", 21);
        \u0275\u0275text(33, "How it ");
        \u0275\u0275elementStart(34, "span", 22);
        \u0275\u0275text(35, "works");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "p", 23);
        \u0275\u0275text(37, "Simple, fast, and secure in 3 steps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 24)(39, "div", 25)(40, "div", 26);
        \u0275\u0275text(41, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h3");
        \u0275\u0275text(43, "Post your project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, "Describe your project, set a budget and timeline, and publish it on the platform.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 25)(47, "div", 26);
        \u0275\u0275text(48, "\u{1F3AF}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3");
        \u0275\u0275text(50, "Receive applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Qualified freelancers apply. Review profiles, ratings, and portfolios easily.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 25)(54, "div", 26);
        \u0275\u0275text(55, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h3");
        \u0275\u0275text(57, "Collaborate securely");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "Work with your chosen freelancer with payment protection and milestone tracking.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.projectCards);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  display: flex;\n  align-items: center;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--primary);\n  top: -100px;\n  right: -100px;\n  animation: _ngcontent-%COMP%_pulse 6s ease-in-out infinite;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: var(--accent-secondary);\n  bottom: -50px;\n  left: -50px;\n  animation: _ngcontent-%COMP%_pulse 8s ease-in-out infinite reverse;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image:\n    linear-gradient(rgba(79, 110, 247, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(79, 110, 247, 0.05) 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.15;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.22;\n  }\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 80px 32px;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 80px;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  position: relative;\n  z-index: 2;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  width: fit-content;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--accent);\n  border-radius: 50%;\n  box-shadow: 0 0 8px var(--accent);\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 68px);\n  font-weight: 800;\n  line-height: 1.05;\n  color: var(--fo-text-primary);\n  letter-spacing: -2px;\n}\n.hero-title[_ngcontent-%COMP%]   .title-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #00e5ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-description[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 420px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.4);\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 500;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  padding-top: 8px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n  margin-top: 2px;\n}\n.hero-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_slideInRight 0.5s ease both;\n  transition: all 0.25s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateX(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.project-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-stars[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.features[_ngcontent-%COMP%] {\n  background: var(--fo-bg-secondary);\n  padding: 100px 32px;\n  border-top: 1px solid var(--fo-border);\n}\n.features-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  text-align: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 48px);\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  margin-bottom: 12px;\n  letter-spacing: -1px;\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  margin-bottom: 60px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  padding: 36px 28px;\n  text-align: left;\n  transition: all 0.3s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 20px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin-bottom: 10px;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n  line-height: 1.6;\n}\n@media (max-width: 900px) {\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n    padding: 60px 20px;\n  }\n  .hero-cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\frontoffice\\home\\home.component.ts", lineNumber: 25 });
})();

// src/app/frontoffice/courses-resources/courses-resources.component.ts
function CoursesResourcesComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CoursesResourcesComponent_button_16_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeCategory = cat_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory === cat_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, cat_r2), " ");
  }
}
function CoursesResourcesComponent_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "FREE");
    \u0275\u0275elementEnd();
  }
}
function CoursesResourcesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CoursesResourcesComponent_div_18_span_4_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h3", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "div", 25)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 26);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", course_r4.color + "15");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", course_r4.color + "25");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r4.isFree);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r2.getLevelClass(course_r4.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, course_r4.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F1 ", course_r4.duration, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", course_r4.lessons, " lessons");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} ", \u0275\u0275pipeBind1(22, 19, course_r4.students), "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", course_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r4.isFree ? "Start Free" : "Enroll Now", " ");
  }
}
function CoursesResourcesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('No courses found for "', ctx_r2.searchTerm, '"');
  }
}
var CoursesResourcesComponent = class _CoursesResourcesComponent {
  constructor() {
    this.activeCategory = "all";
    this.searchTerm = "";
    this.categories = ["all", "design", "development", "marketing", "business"];
    this.courses = [
      { id: 1, title: "UI/UX Design Fundamentals", description: "Master the principles of user interface and experience design.", category: "design", level: "beginner", duration: "6h 30m", icon: "\u{1F3A8}", color: "#a855f7", lessons: 24, students: 1240, isFree: true },
      { id: 2, title: "React & Angular Development", description: "Build modern web applications with popular JavaScript frameworks.", category: "development", level: "intermediate", duration: "12h 00m", icon: "\u269B\uFE0F", color: "#4f6ef7", lessons: 48, students: 2310, isFree: false },
      { id: 3, title: "Freelance Business Mastery", description: "Grow your freelance career with proven strategies and tools.", category: "business", level: "beginner", duration: "4h 00m", icon: "\u{1F4BC}", color: "#22c55e", lessons: 16, students: 870, isFree: true },
      { id: 4, title: "Digital Marketing Essentials", description: "Learn SEO, social media and content marketing from scratch.", category: "marketing", level: "beginner", duration: "5h 15m", icon: "\u{1F4E3}", color: "#f59e0b", lessons: 20, students: 1050, isFree: false },
      { id: 5, title: "Advanced Node.js & APIs", description: "Create scalable backend services and RESTful APIs with Node.", category: "development", level: "advanced", duration: "9h 45m", icon: "\u{1F7E2}", color: "#06b6d4", lessons: 36, students: 680, isFree: false },
      { id: 6, title: "Brand Identity Design", description: "Create memorable brand identities for clients and companies.", category: "design", level: "intermediate", duration: "7h 00m", icon: "\u2728", color: "#ec4899", lessons: 28, students: 940, isFree: true }
    ];
  }
  get filteredCourses() {
    return this.courses.filter((c) => {
      const matchCat = this.activeCategory === "all" || c.category === this.activeCategory;
      const matchSearch = !this.searchTerm || c.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }
  ngOnInit() {
  }
  getLevelClass(level) {
    return { beginner: "success", intermediate: "primary", advanced: "danger" }[level] || "primary";
  }
  static {
    this.\u0275fac = function CoursesResourcesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CoursesResourcesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesResourcesComponent, selectors: [["app-courses-resources"]], decls: 20, vars: 4, consts: [[1, "courses-page"], [1, "page-hero"], [1, "hero-content"], [1, "hero-badge"], [1, "text-gradient"], [1, "search-bar"], [1, "search-icon"], ["type", "text", "placeholder", "Search courses...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filters"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "courses-grid"], ["class", "course-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "filter-btn", 3, "click"], [1, "course-card"], [1, "card-top"], [1, "course-icon"], ["class", "free-badge", 4, "ngIf"], [1, "card-body"], [1, "card-meta"], [1, "badge"], [1, "duration"], [1, "course-title"], [1, "course-desc"], [1, "card-footer"], [1, "course-stats"], [1, "btn-enroll"], [1, "free-badge"], [1, "empty-state"]], template: function CoursesResourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F4DA} Matchy Academy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Courses & ");
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8, "Resources");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Boost your skills and grow your freelance career with expert-led content.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5)(12, "span", 6);
        \u0275\u0275text(13, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CoursesResourcesComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275template(16, CoursesResourcesComponent_button_16_Template, 3, 5, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275template(18, CoursesResourcesComponent_div_18_Template, 25, 21, "div", 11)(19, CoursesResourcesComponent_div_19_Template, 5, 1, "div", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredCourses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredCourses.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, TitleCasePipe], styles: ["\n\n.courses-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.page-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 32px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n.page-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(168, 85, 247, 0.12);\n  border: 1px solid rgba(168, 85, 247, 0.25);\n  border-radius: 20px;\n  color: #c084fc;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.page-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -1.5px;\n  margin-bottom: 12px;\n}\n.page-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  max-width: 400px;\n}\n.page-hero[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  padding: 12px 18px;\n  min-width: 280px;\n  align-self: center;\n}\n.page-hero[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n}\n.page-hero[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.page-hero[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 14px;\n  font-family: var(--font-body);\n  width: 100%;\n}\n.page-hero[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--fo-text-muted);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 20px;\n  border: 1px solid var(--fo-border);\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: var(--font-body);\n}\n.filter-btn.active[_ngcontent-%COMP%], \n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.course-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(79, 110, 247, 0.35);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n}\n.course-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.course-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .course-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.course-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .free-badge[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #22c55e;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  border-radius: 8px;\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 24px 16px;\n  flex: 1;\n}\n.course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n.course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .course-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  line-height: 1.6;\n}\n.course-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--fo-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.course-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .course-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.course-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .course-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.course-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn-enroll[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.course-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn-enroll[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n}\n/*# sourceMappingURL=courses-resources.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesResourcesComponent, { className: "CoursesResourcesComponent", filePath: "src\\app\\frontoffice\\courses-resources\\courses-resources.component.ts", lineNumber: 22 });
})();

// src/app/frontoffice/events/events.component.ts
function EventsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "span", 14);
    \u0275\u0275text(5, "\u2B50 Featured Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 18);
    \u0275\u0275element(20, "circle", 19)(21, "circle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 21);
    \u0275\u0275text(25, "Register Now \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.featuredEvent.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.featuredEvent.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.featuredEvent.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F4C5} ", ctx_r0.formatDate(ctx_r0.featuredEvent.date), " \xB7 ", ctx_r0.featuredEvent.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.featuredEvent.location, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F465} ", ctx_r0.featuredEvent.attendees, "/", ctx_r0.featuredEvent.maxAttendees, " registered");
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r0.featuredEvent.color)("stroke-dasharray", "163.4")("stroke-dashoffset", 163.4 - 163.4 * ctx_r0.getAttendancePercent(ctx_r0.featuredEvent) / 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getAttendancePercent(ctx_r0.featuredEvent), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.featuredEvent.color);
  }
}
function EventsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function EventsComponent_button_13_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeFilter = f_r3);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeFilter === f_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, f_r3));
  }
}
function EventsComponent_div_17_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u{1F310} Online");
    \u0275\u0275elementEnd();
  }
}
function EventsComponent_div_17_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", event_r4.location, "");
  }
}
function EventsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 29)(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EventsComponent_div_17_span_15_Template, 2, 0, "span", 31)(16, EventsComponent_div_17_span_16_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 33)(22, "span", 34);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 35);
    \u0275\u0275element(25, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 37);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 38)(29, "button", 21);
    \u0275\u0275text(30, " Join ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", event_r4.color + "20")("border-color", event_r4.color + "40");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 29, event_r4.date, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 32, event_r4.date, "MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", event_r4.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", event_r4.color + "20")("color", event_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 35, event_r4.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r4.isOnline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r4.isOnline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F0 ", event_r4.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getAttendancePercent(event_r4), "%")("background", event_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r4.attendees, "/", event_r4.maxAttendees, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", event_r4.color)("color", event_r4.color);
  }
}
var EventsComponent = class _EventsComponent {
  constructor() {
    this.activeFilter = "all";
    this.filters = ["all", "webinar", "workshop", "meetup", "conference"];
    this.events = [
      { id: 1, title: "Freelance Tunisia Summit 2025", description: "The biggest freelance event in Tunisia. Network, learn and grow with 500+ professionals.", date: "2025-03-15", time: "09:00", location: "Tunis, TN", type: "conference", icon: "\u{1F3C6}", color: "#f59e0b", attendees: 380, maxAttendees: 500, isFeatured: true, isOnline: false },
      { id: 2, title: "UX Design Masterclass", description: "Live workshop with industry experts covering the latest UX research methods.", date: "2025-03-20", time: "14:00", location: "Online", type: "workshop", icon: "\u{1F3A8}", color: "#a855f7", attendees: 72, maxAttendees: 100, isFeatured: false, isOnline: true },
      { id: 3, title: "Freelancers Meetup Sfax", description: "Monthly informal gathering of freelancers in Sfax. Share experiences and connections.", date: "2025-03-25", time: "18:00", location: "Sfax, TN", type: "meetup", icon: "\u2615", color: "#22c55e", attendees: 34, maxAttendees: 50, isFeatured: false, isOnline: false },
      { id: 4, title: "Client Acquisition Webinar", description: "Learn proven strategies to find and retain high-paying clients as a freelancer.", date: "2025-04-02", time: "11:00", location: "Online", type: "webinar", icon: "\u{1F4E1}", color: "#4f6ef7", attendees: 210, maxAttendees: 500, isFeatured: true, isOnline: true },
      { id: 5, title: "No-Code Tools Workshop", description: "Master tools like Webflow, Bubble and Make to accelerate your freelance workflow.", date: "2025-04-10", time: "15:00", location: "Online", type: "workshop", icon: "\u26A1", color: "#06b6d4", attendees: 45, maxAttendees: 80, isFeatured: false, isOnline: true }
    ];
  }
  get filteredEvents() {
    return this.events.filter((e) => this.activeFilter === "all" || e.type === this.activeFilter);
  }
  get featuredEvent() {
    return this.events.find((e) => e.isFeatured);
  }
  ngOnInit() {
  }
  getAttendancePercent(event) {
    return Math.round(event.attendees / event.maxAttendees * 100);
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }
  static {
    this.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], decls: 18, vars: 4, consts: [[1, "events-page"], [1, "page-hero"], [1, "hero-badge"], [1, "text-gradient"], ["class", "featured-event", 4, "ngIf"], [1, "filters-row"], [1, "filters"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "results-count"], [1, "events-list"], ["class", "event-card", 4, "ngFor", "ngForOf"], [1, "featured-event"], [1, "featured-icon"], [1, "featured-content"], [1, "featured-label"], [1, "featured-meta"], [1, "featured-action"], [1, "attendance-ring"], ["viewBox", "0 0 60 60"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke", "rgba(255,255,255,0.1)", "stroke-width", "5"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke-width", "5", "stroke-linecap", "round", "transform", "rotate(-90 30 30)"], [1, "btn-register"], [1, "filter-btn", 3, "click"], [1, "event-card"], [1, "event-date-block"], [1, "day"], [1, "month"], [1, "event-icon"], [1, "event-content"], [1, "event-tags"], [1, "type-tag"], ["class", "online-tag", 4, "ngIf"], ["class", "location-tag", 4, "ngIf"], [1, "event-bottom"], [1, "event-time"], [1, "attendance-bar"], [1, "bar-fill"], [1, "attendance-text"], [1, "event-action"], [1, "online-tag"], [1, "location-tag"]], template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "\u{1F4C5} Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Upcoming ");
        \u0275\u0275elementStart(6, "span", 3);
        \u0275\u0275text(7, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Join webinars, workshops and meetups to level up your freelance game.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, EventsComponent_div_10_Template, 26, 14, "div", 4);
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
        \u0275\u0275template(13, EventsComponent_button_13_Template, 3, 5, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275template(17, EventsComponent_div_17_Template, 31, 37, "div", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.featuredEvent);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filters);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.filteredEvents.length, " events");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredEvents);
      }
    }, dependencies: [NgForOf, NgIf, TitleCasePipe, DatePipe], styles: ['\n\n.events-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.page-hero[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -1.5px;\n  margin-bottom: 12px;\n}\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  max-width: 500px;\n}\n.featured-event[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.12),\n      rgba(0, 229, 255, 0.06));\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: var(--radius-xl);\n  padding: 36px 40px;\n  margin-bottom: 40px;\n  position: relative;\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n.featured-event[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 250px;\n  height: 250px;\n  background: rgba(79, 110, 247, 0.08);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  flex-shrink: 0;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #fbbf24;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 8px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  margin-bottom: 14px;\n  max-width: 480px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.filters-row[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 20px;\n  border: 1px solid var(--fo-border);\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: var(--font-body);\n}\n.filter-btn.active[_ngcontent-%COMP%], \n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 20px 24px;\n  transition: all 0.25s;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.35);\n  transform: translateX(4px);\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  border: 1px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 800;\n  color: white;\n  line-height: 1;\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.event-card[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .online-tag[_ngcontent-%COMP%], \n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .location-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 4px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  margin-bottom: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n  white-space: nowrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 2px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  white-space: nowrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.event-card[_ngcontent-%COMP%]   .event-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=events.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src\\app\\frontoffice\\events\\events.component.ts", lineNumber: 24 });
})();

// src/app/frontoffice/data/job-categories.data.ts
var JOB_CATEGORIES = [
  {
    id: "tech",
    name: "Technologie & D\xE9veloppement",
    icon: "\u{1F4BB}",
    jobs: [
      { id: "frontend-dev", name: "D\xE9veloppeur Frontend", tags: ["React", "Vue", "HTML/CSS"] },
      { id: "backend-dev", name: "D\xE9veloppeur Backend", tags: ["Node.js", "Python", "Java"] },
      { id: "fullstack-dev", name: "D\xE9veloppeur Fullstack", tags: ["MERN", "LAMP"] },
      { id: "mobile-dev", name: "D\xE9veloppeur Mobile", tags: ["React Native", "Flutter", "iOS", "Android"] },
      { id: "devops", name: "Ing\xE9nieur DevOps", tags: ["Docker", "Kubernetes", "CI/CD"] },
      { id: "data-scientist", name: "Data Scientist", tags: ["Python", "ML", "TensorFlow"] },
      { id: "data-analyst", name: "Data Analyst", tags: ["SQL", "Power BI", "Tableau"] },
      { id: "ai-engineer", name: "Ing\xE9nieur IA / LLM", tags: ["GPT", "RAG", "LangChain"] },
      { id: "blockchain-dev", name: "D\xE9veloppeur Blockchain", tags: ["Solidity", "Web3"] },
      { id: "cybersecurity", name: "Expert Cybers\xE9curit\xE9", tags: ["Pentesting", "SIEM"] },
      { id: "qa-engineer", name: "Ing\xE9nieur QA / Test", tags: ["Selenium", "Jest", "Cypress"] },
      { id: "cloud-architect", name: "Architecte Cloud", tags: ["AWS", "GCP", "Azure"] },
      { id: "embedded-dev", name: "D\xE9veloppeur Embarqu\xE9", tags: ["C", "Arduino", "RTOS"] },
      { id: "sysadmin", name: "Administrateur Syst\xE8me", tags: ["Linux", "Windows Server"] }
    ]
  },
  {
    id: "design",
    name: "Design & Cr\xE9ativit\xE9",
    icon: "\u{1F3A8}",
    jobs: [
      { id: "ui-designer", name: "Designer UI", tags: ["Figma", "XD", "Sketch"] },
      { id: "ux-designer", name: "Designer UX", tags: ["Recherche", "Wireframing", "Tests utilisateurs"] },
      { id: "graphic-designer", name: "Graphiste", tags: ["Illustrator", "Photoshop"] },
      { id: "motion-designer", name: "Motion Designer", tags: ["After Effects", "Premiere"] },
      { id: "brand-designer", name: "Designer de Marque", tags: ["Logo", "Identit\xE9 visuelle"] },
      { id: "3d-artist", name: "Artiste 3D", tags: ["Blender", "Cinema 4D", "3ds Max"] },
      { id: "video-editor", name: "Monteur Vid\xE9o", tags: ["Premiere Pro", "DaVinci"] },
      { id: "photographer", name: "Photographe", tags: ["Studio", "Produit", "Portrait"] },
      { id: "illustrator", name: "Illustrateur", tags: ["Digital", "Vectoriel"] },
      { id: "web-designer", name: "Web Designer", tags: ["Webflow", "WordPress"] }
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Communication",
    icon: "\u{1F4E2}",
    jobs: [
      { id: "digital-marketer", name: "Marketeur Digital", tags: ["SEO", "SEM", "Analytics"] },
      { id: "seo-specialist", name: "Expert SEO", tags: ["On-page", "Backlinks", "Technical SEO"] },
      { id: "social-media", name: "Manager R\xE9seaux Sociaux", tags: ["Instagram", "LinkedIn", "TikTok"] },
      { id: "copywriter", name: "Copywriter", tags: ["R\xE9daction web", "UX writing"] },
      { id: "content-creator", name: "Cr\xE9ateur de Contenu", tags: ["Blog", "YouTube", "Podcast"] },
      { id: "email-marketer", name: "Expert Email Marketing", tags: ["Mailchimp", "Klaviyo"] },
      { id: "ads-specialist", name: "Expert Publicit\xE9 Payante", tags: ["Google Ads", "Meta Ads"] },
      { id: "growth-hacker", name: "Growth Hacker", tags: ["Acquisition", "R\xE9tention"] },
      { id: "pr-specialist", name: "Sp\xE9cialiste Relations Presse", tags: ["M\xE9dias", "Communiqu\xE9s"] },
      { id: "influencer-manager", name: "Manager Influenceurs", tags: ["Campagnes", "KPIs"] }
    ]
  },
  {
    id: "business",
    name: "Business & Consulting",
    icon: "\u{1F4CA}",
    jobs: [
      { id: "business-analyst", name: "Analyste Business", tags: ["SWOT", "KPI", "Roadmap"] },
      { id: "project-manager", name: "Chef de Projet", tags: ["Agile", "Scrum", "PMP"] },
      { id: "product-manager", name: "Product Manager", tags: ["Backlog", "Roadmap", "OKR"] },
      { id: "financial-advisor", name: "Conseiller Financier", tags: ["Budgets", "Pr\xE9visions"] },
      { id: "accountant", name: "Comptable", tags: ["Bilan", "TVA", "Paie"] },
      { id: "legal-consultant", name: "Consultant Juridique", tags: ["Contrats", "RGPD"] },
      { id: "hr-consultant", name: "Consultant RH", tags: ["Recrutement", "Formation"] },
      { id: "startup-coach", name: "Coach Startup", tags: ["Lean", "MVP", "Pitch"] },
      { id: "supply-chain", name: "Expert Supply Chain", tags: ["Logistique", "Stock"] },
      { id: "sales-consultant", name: "Consultant Commercial", tags: ["CRM", "Prospection"] }
    ]
  },
  {
    id: "writing",
    name: "R\xE9daction & Traduction",
    icon: "\u270D\uFE0F",
    jobs: [
      { id: "technical-writer", name: "R\xE9dacteur Technique", tags: ["Documentation", "API Docs"] },
      { id: "translator-en-fr", name: "Traducteur EN/FR", tags: ["Technique", "Juridique"] },
      { id: "translator-ar-fr", name: "Traducteur AR/FR", tags: ["Officiel", "Marketing"] },
      { id: "proofreader", name: "Correcteur / Relecteur", tags: ["Orthographe", "Style"] },
      { id: "ghostwriter", name: "Ghost Writer", tags: ["Livres", "Articles", "Speeches"] },
      { id: "journalist", name: "Journaliste", tags: ["Presse", "Enqu\xEAte", "Reportage"] },
      { id: "scriptwriter", name: "Sc\xE9nariste", tags: ["Vid\xE9o", "Podcast", "Pub"] }
    ]
  },
  {
    id: "education",
    name: "\xC9ducation & Formation",
    icon: "\u{1F393}",
    jobs: [
      { id: "online-tutor", name: "Tuteur en Ligne", tags: ["Maths", "Sciences", "Langues"] },
      { id: "trainer", name: "Formateur Professionnel", tags: ["Soft skills", "Management"] },
      { id: "elearning-creator", name: "Cr\xE9ateur e-Learning", tags: ["Articulate", "Moodle"] },
      { id: "language-teacher", name: "Professeur de Langue", tags: ["Anglais", "Fran\xE7ais", "Arabe"] },
      { id: "life-coach", name: "Life Coach", tags: ["D\xE9veloppement personnel"] }
    ]
  },
  {
    id: "engineering",
    name: "Ing\xE9nierie & Sciences",
    icon: "\u2699\uFE0F",
    jobs: [
      { id: "civil-engineer", name: "Ing\xE9nieur Civil", tags: ["BTP", "Infrastructure"] },
      { id: "mechanical-engineer", name: "Ing\xE9nieur M\xE9canique", tags: ["CAO", "SolidWorks"] },
      { id: "electrical-engineer", name: "Ing\xE9nieur \xC9lectrique", tags: ["Automatisme", "PLC"] },
      { id: "architect", name: "Architecte", tags: ["AutoCAD", "BIM", "Revit"] },
      { id: "interior-designer", name: "Designer Int\xE9rieur", tags: ["3D", "Plans", "D\xE9co"] },
      { id: "environmental-consultant", name: "Consultant Environnement", tags: ["RSE", "Audit"] }
    ]
  }
];

// src/app/frontoffice/components/job-selector/job-selector.component.ts
function JobSelectorComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.icon, " ", c_r1.name, "");
  }
}
function JobSelectorComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" S\xE9lectionnez jusqu\u2019\xE0 ", ctx_r1.maxSelected, " m\xE9tiers (", ctx_r1.selectedIds.length, " / ", ctx_r1.maxSelected, "). ");
  }
}
function JobSelectorComponent_div_8_button_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5);
  }
}
function JobSelectorComponent_div_8_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function JobSelectorComponent_div_8_button_6_Template_button_click_0_listener() {
      const job_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(job_r4));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275template(4, JobSelectorComponent_div_8_button_6_span_4_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isSelected(job_r4.id));
    \u0275\u0275property("disabled", ctx_r1.multiple && !ctx_r1.isSelected(job_r4.id) && ctx_r1.selectedIds.length >= ctx_r1.maxSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", job_r4.tags.slice(0, 4));
  }
}
function JobSelectorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h3", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275template(6, JobSelectorComponent_div_8_button_6_Template, 5, 5, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r6.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cat_r6.jobs);
  }
}
function JobSelectorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Aucun m\xE9tier ne correspond \xE0 votre recherche. ");
    \u0275\u0275elementEnd();
  }
}
var JobSelectorComponent = class _JobSelectorComponent {
  constructor() {
    this.multiple = true;
    this.maxSelected = 5;
    this.selectedIds = [];
    this.selectedIdsChange = new EventEmitter();
    this.categories = JOB_CATEGORIES;
    this.search = "";
    this.filterCategoryId = "all";
  }
  ngOnInit() {
    if (!this.selectedIds) {
      this.selectedIds = [];
    }
  }
  get filteredCategories() {
    const q = this.search.trim().toLowerCase();
    const catFilter = this.filterCategoryId;
    return this.categories.filter((c) => catFilter === "all" || c.id === catFilter).map((c) => __spreadProps(__spreadValues({}, c), {
      jobs: c.jobs.filter((j) => this.jobMatches(j, q))
    })).filter((c) => c.jobs.length > 0);
  }
  jobMatches(job, q) {
    if (!q) {
      return true;
    }
    const pool = [job.name, job.nameFr, job.nameAr, ...job.tags].filter(Boolean).join(" ").toLowerCase();
    return pool.includes(q) || pool.split(/\s+/).some((w) => w.startsWith(q));
  }
  isSelected(id) {
    return this.selectedIds.includes(id);
  }
  toggle(job) {
    if (this.isSelected(job.id)) {
      this.selectedIds = this.selectedIds.filter((x) => x !== job.id);
    } else {
      if (!this.multiple) {
        this.selectedIds = [job.id];
      } else if (this.selectedIds.length < this.maxSelected) {
        this.selectedIds = [...this.selectedIds, job.id];
      }
    }
    this.selectedIdsChange.emit(this.selectedIds);
  }
  jobById(id) {
    for (const c of this.categories) {
      const j = c.jobs.find((x) => x.id === id);
      if (j) {
        return j;
      }
    }
    return void 0;
  }
  static {
    this.\u0275fac = function JobSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobSelectorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobSelectorComponent, selectors: [["app-job-selector"]], inputs: { multiple: "multiple", maxSelected: "maxSelected", selectedIds: "selectedIds" }, outputs: { selectedIdsChange: "selectedIdsChange" }, decls: 10, vars: 6, consts: [[1, "job-selector"], [1, "toolbar"], ["type", "search", "placeholder", "Rechercher un m\xE9tier, une techno\u2026", "aria-label", "Recherche m\xE9tiers", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "cat-filter", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "hint", 4, "ngIf"], ["class", "cat-section", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [3, "value"], [1, "hint"], [1, "cat-section"], [1, "cat-title"], [1, "cat-ico"], [1, "jobs-grid"], ["type", "button", "class", "job-card", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "job-card", 3, "click", "disabled"], [1, "job-name"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "empty"]], template: function JobSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
        \u0275\u0275twoWayListener("ngModelChange", function JobSelectorComponent_Template_input_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function JobSelectorComponent_Template_select_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterCategoryId, $event) || (ctx.filterCategoryId = $event);
          return $event;
        });
        \u0275\u0275elementStart(4, "option", 4);
        \u0275\u0275text(5, "Toutes les cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, JobSelectorComponent_option_6_Template, 2, 3, "option", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, JobSelectorComponent_p_7_Template, 2, 3, "p", 6)(8, JobSelectorComponent_div_8_Template, 7, 3, "div", 7)(9, JobSelectorComponent_div_9_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterCategoryId);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.multiple);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredCategories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredCategories.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.job-selector[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--fo-border, #2d3348);\n  background: var(--fo-bg-card, #141824);\n  color: #fff;\n  font-size: 14px;\n}\n.cat-filter[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--fo-border, #2d3348);\n  background: var(--fo-bg-card, #141824);\n  color: #e5e7eb;\n  font-size: 14px;\n  min-width: 220px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted, #9ca3af);\n  margin-bottom: 16px;\n}\n.cat-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.cat-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cat-ico[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.job-card[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 14px;\n  border-radius: 14px;\n  border: 2px solid var(--fo-border, #2d3348);\n  background: var(--fo-bg-card, #141824);\n  color: #e5e7eb;\n  cursor: pointer;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.15s;\n}\n.job-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(79, 110, 247, 0.5);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.job-card.selected[_ngcontent-%COMP%] {\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 1px rgba(79, 110, 247, 0.35);\n}\n.job-card[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.job-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: rgba(79, 110, 247, 0.15);\n  color: #a5b4fc;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: var(--fo-text-muted, #9ca3af);\n  font-size: 14px;\n}\n/*# sourceMappingURL=job-selector.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobSelectorComponent, { className: "JobSelectorComponent", filePath: "src\\app\\frontoffice\\components\\job-selector\\job-selector.component.ts", lineNumber: 10 });
})();

// src/app/frontoffice/profile-settings/profile-settings.component.ts
function ProfileSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " \u2705 Profile saved successfully! ");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ProfileSettingsComponent_button_15_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r2.id);
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function ProfileSettingsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 15);
    \u0275\u0275text(2, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 16);
    \u0275\u0275listener("ngSubmit", function ProfileSettingsComponent_div_17_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProfile());
    });
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18)(6, "label");
    \u0275\u0275text(7, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "label");
    \u0275\u0275text(11, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 18)(15, "label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "label");
    \u0275\u0275text(20, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "label");
    \u0275\u0275text(25, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18)(28, "label");
    \u0275\u0275text(29, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 25)(32, "label");
    \u0275\u0275text(33, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275text(36, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.profileForm);
    \u0275\u0275advance(32);
    \u0275\u0275property("disabled", ctx_r2.profileForm.invalid);
  }
}
function ProfileSettingsComponent_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function ProfileSettingsComponent_div_18_span_9_Template_button_click_2_listener() {
      const skill_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSkill(skill_r7));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r7, " ");
  }
}
function ProfileSettingsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 15);
    \u0275\u0275text(2, "M\xE9tiers & comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Choisissez votre ou vos m\xE9tiers (recherche et filtres par cat\xE9gorie).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-job-selector", 29);
    \u0275\u0275twoWayListener("selectedIdsChange", function ProfileSettingsComponent_div_18_Template_app_job_selector_selectedIdsChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedJobIds, $event) || (ctx_r2.selectedJobIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 30);
    \u0275\u0275text(7, "Comp\xE9tences libres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275template(9, ProfileSettingsComponent_div_18_span_9_Template, 4, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33)(11, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileSettingsComponent_div_18_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSkill, $event) || (ctx_r2.newSkill = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ProfileSettingsComponent_div_18_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSkill());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 35);
    \u0275\u0275listener("click", function ProfileSettingsComponent_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSkill());
    });
    \u0275\u0275text(13, "Add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("multiple", true)("maxSelected", 5);
    \u0275\u0275twoWayProperty("selectedIds", ctx_r2.selectedJobIds);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.skills);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSkill);
  }
}
function ProfileSettingsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 15);
    \u0275\u0275text(2, "Password & Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 38)(4, "div", 25)(5, "label");
    \u0275\u0275text(6, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "div", 18)(10, "label");
    \u0275\u0275text(11, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "label");
    \u0275\u0275text(15, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 42);
    \u0275\u0275text(18, "Update Password");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.securityForm);
  }
}
function ProfileSettingsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 15);
    \u0275\u0275text(2, "Notification Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "h3");
    \u0275\u0275text(5, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "div")(8, "strong");
    \u0275\u0275text(9, "New Project Matches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Get notified when a project matches your skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 45)(13, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileSettingsComponent_div_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notifications.emailProjects, $event) || (ctx_r2.notifications.emailProjects = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 44)(16, "div")(17, "strong");
    \u0275\u0275text(18, "Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "New messages from clients or freelancers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 45)(22, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileSettingsComponent_div_20_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notifications.emailMessages, $event) || (ctx_r2.notifications.emailMessages = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 44)(25, "div")(26, "strong");
    \u0275\u0275text(27, "Payment Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Invoice and payment status notifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 45)(31, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileSettingsComponent_div_20_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notifications.emailPayments, $event) || (ctx_r2.notifications.emailPayments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "span", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notifications.emailProjects);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notifications.emailMessages);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notifications.emailPayments);
  }
}
var ProfileSettingsComponent = class _ProfileSettingsComponent {
  constructor(fb) {
    this.fb = fb;
    this.activeTab = "profile";
    this.tabs = [
      { id: "profile", label: "Profile", icon: "\u{1F464}" },
      { id: "skills", label: "Skills", icon: "\u{1F3AF}" },
      { id: "security", label: "Security", icon: "\u{1F512}" },
      { id: "notifications", label: "Notifications", icon: "\u{1F514}" }
    ];
    this.saveSuccess = false;
    this.skills = ["Angular", "React", "UI/UX Design", "Node.js"];
    this.newSkill = "";
    this.selectedJobIds = ["frontend-dev"];
    this.notifications = {
      emailProjects: true,
      emailMessages: true,
      emailPayments: true,
      pushProjects: false,
      pushMessages: true,
      pushPayments: false
    };
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ["Admin", Validators.required],
      lastName: ["Matchy", Validators.required],
      email: ["admin@matchy.tn", [Validators.required, Validators.email]],
      phone: ["+216 55 000 000"],
      city: ["Tunis"],
      bio: ["Freelance platform administrator & passionate about connecting Tunisian talent."],
      website: ["https://matchy.tn"]
    });
    this.securityForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    });
  }
  saveProfile() {
    if (this.profileForm.valid) {
      this.saveSuccess = true;
      setTimeout(() => this.saveSuccess = false, 3e3);
    }
  }
  addSkill() {
    const skill = this.newSkill.trim();
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
      this.newSkill = "";
    }
  }
  removeSkill(skill) {
    this.skills = this.skills.filter((s) => s !== skill);
  }
  getInitials() {
    const f = this.profileForm.get("firstName")?.value || "";
    const l = this.profileForm.get("lastName")?.value || "";
    return (f[0] || "") + (l[0] || "");
  }
  static {
    this.\u0275fac = function ProfileSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileSettingsComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileSettingsComponent, selectors: [["app-profile-settings"]], decls: 21, vars: 10, consts: [[1, "profile-page"], [1, "page-header"], [1, "user-card"], [1, "avatar-large"], [1, "user-info"], [1, "role-badge"], ["class", "success-toast", 4, "ngIf"], [1, "settings-layout"], [1, "tabs-nav"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], [4, "ngIf"], [1, "success-toast"], [1, "tab-btn", 3, "click"], [1, "tab-icon"], [1, "section-title"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "firstName", "placeholder", "First name", 1, "form-input"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name", 1, "form-input"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-input"], ["type", "text", "formControlName", "phone", "placeholder", "+216 ...", 1, "form-input"], ["type", "text", "formControlName", "city", "placeholder", "City", 1, "form-input"], ["type", "url", "formControlName", "website", "placeholder", "https://...", 1, "form-input"], [1, "form-group", "full"], ["formControlName", "bio", "rows", "4", "placeholder", "Tell us about yourself...", 1, "form-textarea"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "section-sub"], [3, "selectedIdsChange", "multiple", "maxSelected", "selectedIds"], [1, "subsection-title"], [1, "skills-grid"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "add-skill"], ["type", "text", "placeholder", "Add a skill (press Enter)...", 1, "form-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-add-skill", 3, "click"], [1, "skill-tag"], [1, "skill-remove", 3, "click"], [1, "security-form", 3, "formGroup"], ["type", "password", "formControlName", "currentPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input"], ["type", "password", "formControlName", "newPassword", "placeholder", "Min. 8 characters", 1, "form-input"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Repeat password", 1, "form-input"], ["type", "submit", 1, "btn-save", "danger"], [1, "notif-section"], [1, "toggle-row"], [1, "toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "slider"]], template: function ProfileSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11, "Admin \xB7 Matchy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, ProfileSettingsComponent_div_12_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7)(14, "nav", 8);
        \u0275\u0275template(15, ProfileSettingsComponent_button_15_Template, 4, 4, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275template(17, ProfileSettingsComponent_div_17_Template, 37, 2, "div", 11)(18, ProfileSettingsComponent_div_18_Template, 14, 5, "div", 11)(19, ProfileSettingsComponent_div_19_Template, 19, 1, "div", 11)(20, ProfileSettingsComponent_div_20_Template, 33, 3, "div", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.getInitials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", (tmp_1_0 = ctx.profileForm.get("firstName")) == null ? null : tmp_1_0.value, " ", (tmp_1_0 = ctx.profileForm.get("lastName")) == null ? null : tmp_1_0.value, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.profileForm.get("email")) == null ? null : tmp_2_0.value);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.saveSuccess);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === "profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "skills");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "security");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "notifications");
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, JobSelectorComponent], styles: ['\n\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: var(--font-display);\n  border: 3px solid rgba(79, 110, 247, 0.4);\n}\n.page-header[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 800;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  margin: 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: 10px;\n  color: var(--primary-light);\n  font-size: 12px;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .success-toast[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  border-radius: 10px;\n  padding: 12px 20px;\n  color: #86efac;\n  font-size: 14px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.settings-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 28px;\n}\n.tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 12px;\n  height: fit-content;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s;\n  font-family: var(--font-body);\n}\n.tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: white;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n}\n.tab-btn[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--fo-text-primary);\n}\n.tab-content[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 32px;\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  margin: -8px 0 20px;\n}\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin: 32px 0 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 28px;\n  letter-spacing: -0.5px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-secondary);\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-family: var(--font-body);\n  outline: none;\n  transition: all 0.2s;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--fo-text-muted);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-family: var(--font-body);\n  outline: none;\n  resize: vertical;\n  transition: border 0.2s;\n}\n.form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--fo-text-muted);\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-save[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-save.danger[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.btn-save.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc2626;\n}\n.skills-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 14px;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n}\n.skill-tag[_ngcontent-%COMP%]   .skill-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(107, 132, 255, 0.6);\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  padding: 0;\n  transition: color 0.2s;\n}\n.skill-tag[_ngcontent-%COMP%]   .skill-remove[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n}\n.add-skill[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-add-skill[_ngcontent-%COMP%] {\n  padding: 11px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.btn-add-skill[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n}\n.notif-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--fo-border);\n}\n.toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.toggle-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: white;\n  margin-bottom: 4px;\n}\n.toggle-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.toggle[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n  transition: 0.3s;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n@media (max-width: 768px) {\n  .settings-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tabs-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile-settings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileSettingsComponent, { className: "ProfileSettingsComponent", filePath: "src\\app\\frontoffice\\profile-settings\\profile-settings.component.ts", lineNumber: 9 });
})();

// src/app/frontoffice/projects-milestones/projects-milestones.component.ts
function ProjectsMilestonesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ProjectsMilestonesComponent_div_15_Template_div_click_0_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProject(project_r2));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.id) === project_r2.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", project_r2.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.client);
    \u0275\u0275advance();
    \u0275\u0275classMap(project_r2.status);
  }
}
function ProjectsMilestonesComponent_div_16_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function ProjectsMilestonesComponent_div_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, ProjectsMilestonesComponent_div_16_div_30_div_1_Template, 1, 0, "div", 32);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r5);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getMilestoneClass(m_r4.status));
    \u0275\u0275styleProp("border-color", ctx_r2.selectedProject.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMilestoneStatusIcon(m_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + m_r4.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 15, m_r4.amount), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(14, 17, m_r4.dueDate, "MMM d"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.description);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + ctx_r2.getMilestoneClass(m_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 20, m_r4.status), " ");
  }
}
function ProjectsMilestonesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Client: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 19)(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 22)(19, "div", 23)(20, "span");
    \u0275\u0275text(21, "Overall Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 24);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25);
    \u0275\u0275element(25, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 27)(27, "h3", 28);
    \u0275\u0275text(28, "Milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 29);
    \u0275\u0275template(30, ProjectsMilestonesComponent_div_16_div_30_Template, 20, 22, "div", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r2.selectedProject.color + "40");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.selectedProject.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedProject.icon, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.client);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(14, 19, ctx_r2.getPaidAmount(ctx_r2.selectedProject)), " ", ctx_r2.selectedProject.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("/ ", \u0275\u0275pipeBind1(17, 21, ctx_r2.selectedProject.totalBudget), " ", ctx_r2.selectedProject.currency, "");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", ctx_r2.selectedProject.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.selectedProject.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.selectedProject.progress, "%")("background", ctx_r2.selectedProject.color);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.selectedProject.milestones);
  }
}
var ProjectsMilestonesComponent = class _ProjectsMilestonesComponent {
  constructor() {
    this.selectedProject = null;
    this.projects = [
      {
        id: 1,
        title: "E-Commerce Mobile App",
        client: "TechStart TN",
        totalBudget: 4500,
        currency: "TND",
        progress: 65,
        status: "active",
        color: "#4f6ef7",
        icon: "\u{1F4F1}",
        milestones: [
          { id: 1, title: "UI/UX Mockups", amount: 800, dueDate: "2025-02-10", status: "completed", description: "Design all app screens and prototype." },
          { id: 2, title: "Frontend Development", amount: 1500, dueDate: "2025-03-01", status: "in_progress", description: "Build React Native app with navigation." },
          { id: 3, title: "Backend & API", amount: 1200, dueDate: "2025-03-20", status: "pending", description: "REST API, database and auth integration." },
          { id: 4, title: "Testing & Launch", amount: 1e3, dueDate: "2025-04-01", status: "pending", description: "QA testing, bug fixes, app store submission." }
        ]
      },
      {
        id: 2,
        title: "Restaurant Website",
        client: "Chez Habib",
        totalBudget: 1800,
        currency: "TND",
        progress: 100,
        status: "completed",
        color: "#22c55e",
        icon: "\u{1F37D}\uFE0F",
        milestones: [
          { id: 1, title: "Design & Wireframes", amount: 400, dueDate: "2025-01-10", status: "completed", description: "Site design and responsive mockups." },
          { id: 2, title: "Development", amount: 900, dueDate: "2025-01-20", status: "completed", description: "Full website development with CMS." },
          { id: 3, title: "Launch & SEO", amount: 500, dueDate: "2025-01-28", status: "completed", description: "Live deployment and basic SEO setup." }
        ]
      }
    ];
  }
  ngOnInit() {
    this.selectedProject = this.projects[0];
  }
  selectProject(p) {
    this.selectedProject = p;
  }
  getPaidAmount(project) {
    return project.milestones.filter((m) => m.status === "completed").reduce((sum, m) => sum + m.amount, 0);
  }
  getMilestoneStatusIcon(status) {
    return { completed: "\u2705", in_progress: "\u{1F504}", pending: "\u23F3", overdue: "\u274C" }[status] || "\u23F3";
  }
  getMilestoneClass(status) {
    return { completed: "success", in_progress: "primary", pending: "muted", overdue: "danger" }[status] || "muted";
  }
  static {
    this.\u0275fac = function ProjectsMilestonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsMilestonesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsMilestonesComponent, selectors: [["app-projects-milestones"]], decls: 17, vars: 2, consts: [[1, "milestones-page"], [1, "page-header"], [1, "hero-badge"], [1, "text-gradient"], [1, "content-layout"], [1, "projects-sidebar"], [1, "sidebar-title"], ["class", "project-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "project-detail", 4, "ngIf"], [1, "project-item", 3, "click"], [1, "proj-icon"], [1, "proj-info"], [1, "proj-title"], [1, "proj-client"], [1, "proj-status-dot"], [1, "project-detail"], [1, "detail-header"], [1, "detail-icon"], [1, "detail-info"], [1, "detail-budget"], [1, "budget-paid"], [1, "budget-total"], [1, "progress-section"], [1, "progress-header"], [1, "progress-value"], [1, "progress-track"], [1, "progress-fill"], [1, "milestones-section"], [1, "section-label"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], ["class", "timeline-connector", 4, "ngIf"], [1, "timeline-dot"], [1, "timeline-content"], [1, "milestone-header"], [1, "milestone-right"], [1, "milestone-amount"], [1, "milestone-date"], [1, "milestone-status-badge", "badge"], [1, "timeline-connector"]], template: function ProjectsMilestonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275text(4, "\u{1F4C1} My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Projects & ");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "Milestones");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Track progress, deliverables and payments for all your projects.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "h3", 6);
        \u0275\u0275text(14, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ProjectsMilestonesComponent_div_15_Template, 9, 9, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ProjectsMilestonesComponent_div_16_Template, 31, 23, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.projects);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedProject);
      }
    }, dependencies: [NgForOf, NgIf, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n\n.milestones-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-header[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(28px, 4vw, 48px);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -1.5px;\n  margin-bottom: 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 24px;\n}\n.projects-sidebar[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  height: fit-content;\n}\n.projects-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--fo-text-secondary);\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.project-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid transparent;\n  margin-bottom: 4px;\n}\n.project-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.project-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: rgba(79, 110, 247, 0.25);\n}\n.project-item[_ngcontent-%COMP%]   .proj-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.project-item[_ngcontent-%COMP%]   .proj-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.project-item[_ngcontent-%COMP%]   .proj-info[_ngcontent-%COMP%]   .proj-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-item[_ngcontent-%COMP%]   .proj-info[_ngcontent-%COMP%]   .proj-client[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-item[_ngcontent-%COMP%]   .proj-status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.project-item[_ngcontent-%COMP%]   .proj-status-dot.active[_ngcontent-%COMP%] {\n  background: var(--success);\n  box-shadow: 0 0 6px var(--success);\n}\n.project-item[_ngcontent-%COMP%]   .proj-status-dot.completed[_ngcontent-%COMP%] {\n  background: #a855f7;\n}\n.project-item[_ngcontent-%COMP%]   .proj-status-dot.paused[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.project-detail[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 28px;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid;\n  flex-wrap: wrap;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 800;\n  color: white;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fo-text-muted);\n  margin-top: 4px;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-budget[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.detail-header[_ngcontent-%COMP%]   .detail-budget[_ngcontent-%COMP%]   .budget-paid[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--success);\n}\n.detail-header[_ngcontent-%COMP%]   .detail-budget[_ngcontent-%COMP%]   .budget-total[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.progress-section[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: var(--font-display);\n}\n.progress-section[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-section[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.8s ease;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 20px;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  position: relative;\n  margin-bottom: 4px;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 18px;\n  top: 36px;\n  width: 2px;\n  height: calc(100% + 20px);\n  background: var(--fo-border);\n  z-index: 0;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-dot.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-dot.primary[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-dot.muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-dot.danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: var(--danger) !important;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--fo-border);\n  border-radius: 10px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  transition: all 0.2s;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content.status-in_progress[_ngcontent-%COMP%] {\n  border-color: rgba(79, 110, 247, 0.3);\n  background: rgba(79, 110, 247, 0.05);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content.status-completed[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.2);\n  background: rgba(34, 197, 94, 0.03);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-header[_ngcontent-%COMP%]   .milestone-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 3px;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-header[_ngcontent-%COMP%]   .milestone-right[_ngcontent-%COMP%]   .milestone-amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--success);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-header[_ngcontent-%COMP%]   .milestone-right[_ngcontent-%COMP%]   .milestone-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  margin-bottom: 10px;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .milestone-status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n@media (max-width: 768px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=projects-milestones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsMilestonesComponent, { className: "ProjectsMilestonesComponent", filePath: "src\\app\\frontoffice\\projects-milestones\\projects-milestones.component.ts", lineNumber: 30 });
})();

// src/app/frontoffice/my-subscription/my-subscription.component.ts
function MySubscriptionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your subscription...");
    \u0275\u0275elementEnd()();
  }
}
function MySubscriptionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Active Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, " You don't have an active subscription yet.");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " Unlock more opportunities and grow your freelance career with a paid plan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "span");
    \u0275\u0275text(12, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Unlimited bids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "span");
    \u0275\u0275text(16, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Featured profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11)(19, "span");
    \u0275\u0275text(20, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Analytics dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 11)(23, "span");
    \u0275\u0275text(24, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Priority in search results");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 12);
    \u0275\u0275listener("click", function MySubscriptionComponent_div_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPlans());
    });
    \u0275\u0275text(27, " \u{1F680} Explore Plans ");
    \u0275\u0275elementEnd()();
  }
}
function MySubscriptionComponent_ng_container_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "h3");
    \u0275\u0275text(5, "Your free trial has ended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275listener("click", function MySubscriptionComponent_ng_container_3_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.upgradeNow());
    });
    \u0275\u0275text(9, " \u{1F680} Upgrade Now ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Upgrade now to keep access to all ", ctx_r1.plan.name, " features.");
  }
}
function MySubscriptionComponent_ng_container_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " Your free trial expires in ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u2014 upgrade to keep access. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function MySubscriptionComponent_ng_container_3_div_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.upgradeNow());
    });
    \u0275\u0275text(9, "Upgrade");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.trialDaysRemaining, " day", ctx_r1.trialDaysRemaining !== 1 ? "s" : "", "");
  }
}
function MySubscriptionComponent_ng_container_3_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, " \u{1F381} 7-Day Free Trial ");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Valid until ", \u0275\u0275pipeBind2(2, 1, ctx_r1.renewDate, "longDate"), " ");
  }
}
function MySubscriptionComponent_ng_container_3_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1, " \u23F3 Awaiting admin confirmation \u2014 you'll receive an email once activated. ");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F381} Free trial active \u2014 ends ", \u0275\u0275pipeBind2(2, 1, ctx_r1.trialEndDate, "mediumDate"), " ");
  }
}
function MySubscriptionComponent_ng_container_3_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, " \u274C Your trial has ended. Upgrade to continue. ");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function MySubscriptionComponent_ng_container_3_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePlan());
    });
    \u0275\u0275text(1, "Change Plan");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function MySubscriptionComponent_ng_container_3_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.renew());
    });
    \u0275\u0275text(1, "Renew");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MySubscriptionComponent_ng_container_3_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.upgradeNow());
    });
    \u0275\u0275text(1, "\u{1F680} Upgrade Now");
    \u0275\u0275elementEnd();
  }
}
function MySubscriptionComponent_ng_container_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3, "Free Trial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275element(7, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 53)(9, "span");
    \u0275\u0275text(10, "Started today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("urgent", ctx_r1.trialDaysRemaining <= 1)("warning", ctx_r1.trialDaysRemaining === 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.trialDaysRemaining, " day", ctx_r1.trialDaysRemaining !== 1 ? "s" : "", " remaining ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.trialProgressPercent, "%")("background", ctx_r1.trialBarColor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ends ", \u0275\u0275pipeBind2(13, 11, ctx_r1.trialEndDate, "mediumDate"), "");
  }
}
function MySubscriptionComponent_ng_container_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275element(2, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progress * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 3, ctx_r1.progress * 100, "1.0-0"), "% of the period used");
  }
}
function MySubscriptionComponent_ng_container_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2, "Payment method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel());
  }
}
function MySubscriptionComponent_ng_container_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "label", 61)(2, "input", 62);
    \u0275\u0275listener("change", function MySubscriptionComponent_ng_container_3_div_31_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAutoRenew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Auto-renewal");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.autoRenew);
  }
}
function MySubscriptionComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, "\u{1F4CB} My Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Your ");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Manage your subscription, renewal and invoices.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, MySubscriptionComponent_ng_container_3_div_10_Template, 10, 1, "div", 16)(11, MySubscriptionComponent_ng_container_3_div_11_Template, 10, 2, "div", 17);
    \u0275\u0275elementStart(12, "div", 18)(13, "div", 19)(14, "div")(15, "h2");
    \u0275\u0275text(16);
    \u0275\u0275template(17, MySubscriptionComponent_ng_container_3_span_17_Template, 2, 0, "span", 20);
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, MySubscriptionComponent_ng_container_3_p_20_Template, 3, 4, "p", 3)(21, MySubscriptionComponent_ng_container_3_p_21_Template, 2, 0, "p", 22)(22, MySubscriptionComponent_ng_container_3_p_22_Template, 3, 4, "p", 23)(23, MySubscriptionComponent_ng_container_3_p_23_Template, 2, 0, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25);
    \u0275\u0275template(25, MySubscriptionComponent_ng_container_3_button_25_Template, 2, 0, "button", 26)(26, MySubscriptionComponent_ng_container_3_button_26_Template, 2, 0, "button", 27)(27, MySubscriptionComponent_ng_container_3_button_27_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MySubscriptionComponent_ng_container_3_div_28_Template, 14, 14, "div", 29)(29, MySubscriptionComponent_ng_container_3_div_29_Template, 6, 6, "div", 30)(30, MySubscriptionComponent_ng_container_3_div_30_Template, 5, 1, "div", 31)(31, MySubscriptionComponent_ng_container_3_div_31_Template, 5, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.isTrialExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTrialExpiringSoon);
    \u0275\u0275advance();
    \u0275\u0275classProp("trial-card", ctx_r1.isTrial && !ctx_r1.isTrialExpired)("expired-card", ctx_r1.isTrialExpired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.plan.icon, " ", ctx_r1.plan.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTrial && !ctx_r1.isTrialExpired);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.subscriptionStatus === "ACTIVE")("pending", ctx_r1.subscriptionStatus === "PENDING")("trial", ctx_r1.subscriptionStatus === "TRIAL")("expired", ctx_r1.subscriptionStatus === "EXPIRED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25CF ", ctx_r1.subscriptionStatus === "TRIAL" ? "Trial" : ctx_r1.subscriptionStatus === "EXPIRED" ? "Expired" : ctx_r1.subscriptionStatus === "ACTIVE" ? "Active" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "TRIAL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "EXPIRED");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isTrialExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTrialExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTrial && !ctx_r1.isTrialExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "ACTIVE" && !ctx_r1.isTrial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionStatus === "ACTIVE");
  }
}
function MySubscriptionComponent_app_subscription_payment_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-subscription-payment", 63);
    \u0275\u0275listener("close", function MySubscriptionComponent_app_subscription_payment_4_Template_app_subscription_payment_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePayment());
    })("paymentSuccess", function MySubscriptionComponent_app_subscription_payment_4_Template_app_subscription_payment_paymentSuccess_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRenewSuccess($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plan", ctx_r1.plan)("subscription", ctx_r1.currentSubscription);
  }
}
var MySubscriptionComponent = class _MySubscriptionComponent {
  get isTrialExpiringSoon() {
    return this.isTrial && !this.isTrialExpired && this.trialDaysRemaining <= 2;
  }
  get trialProgressPercent() {
    return Math.max(0, Math.min(100, (7 - this.trialDaysRemaining) / 7 * 100));
  }
  get trialBarColor() {
    if (this.trialDaysRemaining <= 1)
      return "#ef4444";
    if (this.trialDaysRemaining <= 2)
      return "#f97316";
    return "#10b981";
  }
  constructor(subscriptionService, router, http, authService) {
    this.subscriptionService = subscriptionService;
    this.router = router;
    this.http = http;
    this.authService = authService;
    this.API_URL = "http://localhost:8081";
    this.hasSubscription = false;
    this.isLoading = true;
    this.renewDate = /* @__PURE__ */ new Date();
    this.progress = 0;
    this.autoRenew = false;
    this.showPayment = false;
    this.currentSubscription = null;
    this.paymentMethod = null;
    this.subscriptionStatus = "ACTIVE";
    this.isTrial = false;
    this.trialDaysRemaining = 0;
    this.trialEndDate = null;
    this.isTrialExpired = false;
  }
  ngOnInit() {
    this.loadUserSubscription();
  }
  loadUserSubscription() {
    this.isLoading = true;
    const userId = this.authService.currentUser?.id ?? 1;
    this.http.get(`${this.API_URL}/subscriptions`).subscribe({
      next: (subs) => {
        const priority = ["TRIAL", "ACTIVE", "PENDING", "EXPIRED"];
        const userSubs = subs.filter((s) => (s.userId === userId || s.userId == null) && (s.status === "ACTIVE" || s.status === "PENDING" || s.status === "TRIAL" || s.status === "EXPIRED" || s.isTrial === true || s.status == null));
        const userSub = userSubs.sort((a, b) => {
          if (a.isTrial && !b.isTrial)
            return -1;
          if (!a.isTrial && b.isTrial)
            return 1;
          const ai = priority.indexOf(a.status ?? "");
          const bi = priority.indexOf(b.status ?? "");
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        })[0];
        if (userSub) {
          this.hasSubscription = true;
          this.subscriptionStatus = userSub.status;
          this.isTrial = !!userSub.isTrial;
          this.isTrialExpired = userSub.status === "EXPIRED";
          if (userSub.trialEndDate) {
            this.trialEndDate = new Date(userSub.trialEndDate);
            const msRemaining = this.trialEndDate.getTime() - Date.now();
            this.trialDaysRemaining = Math.max(0, Math.ceil(msRemaining / (1e3 * 60 * 60 * 24)));
          }
          this.plan = {
            id: userSub.plan?.id,
            name: userSub.plan?.name || "Unknown",
            price: userSub.priceAtPurchase || 0,
            currency: userSub.plan?.currency || "TND",
            billingCycle: "monthly",
            description: "",
            color: this.getPlanColor(userSub.plan?.name),
            icon: this.getPlanIcon(userSub.plan?.name)
          };
          const end = userSub.endDate ? new Date(userSub.endDate) : /* @__PURE__ */ new Date();
          const start = userSub.startDate ? new Date(userSub.startDate) : /* @__PURE__ */ new Date();
          this.renewDate = end;
          const total = end.getTime() - start.getTime();
          const used = Date.now() - start.getTime();
          this.progress = total > 0 ? Math.min(1, Math.max(0, used / total)) : 0;
          this.loadLastPaymentMethod(userSub.id);
        } else {
          this.hasSubscription = false;
          this.plan = this.subscriptionService.getCurrentPlan();
        }
        this.isLoading = false;
      },
      error: () => {
        const localPayments = this.subscriptionService.getLocalPayments();
        if (localPayments.length > 0) {
          const last = localPayments[0];
          this.hasSubscription = true;
          this.subscriptionStatus = "PENDING";
          this.plan = {
            id: last.plan?.toLowerCase(),
            name: last.plan || "Unknown",
            price: last.amount || 0,
            currency: "TND",
            billingCycle: "monthly",
            description: "",
            color: this.getPlanColor(last.plan),
            icon: this.getPlanIcon(last.plan)
          };
          this.paymentMethod = last.method || null;
          this.renewDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3);
          this.progress = 0;
        } else {
          this.hasSubscription = false;
          this.plan = this.subscriptionService.getCurrentPlan();
        }
        this.isLoading = false;
      }
    });
  }
  loadLastPaymentMethod(subscriptionId) {
    this.http.get(`${this.API_URL}/payment`).subscribe({
      next: (payments) => {
        const match = payments.find((p) => p.subscription?.id === subscriptionId);
        if (match)
          this.paymentMethod = match.method?.toLowerCase() || null;
      },
      error: () => {
      }
    });
  }
  getPaymentMethodLabel() {
    const icons = {
      card: "\u{1F4B3} Card",
      paypal: "\u{1F17F}\uFE0F PayPal",
      mobile: "\u{1F4F1} Mobile",
      bank_transfer: "\u{1F3E6} Bank Transfer"
    };
    return this.paymentMethod ? icons[this.paymentMethod] || this.paymentMethod : "\u2014";
  }
  getPlanColor(name) {
    const map = { FREE: "#6b7280", PRO: "#10b981", PREMIUM: "#3b82f6" };
    return map[name?.toUpperCase()] || "#4f6ef7";
  }
  getPlanIcon(name) {
    const map = { FREE: "\u{1F331}", PRO: "\u26A1", PREMIUM: "\u{1F451}" };
    return map[name?.toUpperCase()] || "\u{1F4E6}";
  }
  toggleAutoRenew() {
    this.autoRenew = !this.autoRenew;
  }
  goToPlans() {
    this.router.navigate(["/subscription-management"]);
  }
  changePlan() {
    this.router.navigate(["/subscription-management"]);
  }
  upgradeNow() {
    this.router.navigate(["/subscription-payment"]);
  }
  renew() {
    this.currentSubscription = this.subscriptionService.buildSubscription(this.plan, "monthly");
    this.showPayment = true;
  }
  closePayment() {
    this.showPayment = false;
    this.currentSubscription = null;
  }
  onRenewSuccess(_response) {
    this.showPayment = false;
    this.renewDate = /* @__PURE__ */ new Date();
    this.renewDate.setMonth(this.renewDate.getMonth() + 1);
    this.progress = 0;
  }
  static {
    this.\u0275fac = function MySubscriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MySubscriptionComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MySubscriptionComponent, selectors: [["app-my-subscription"]], decls: 5, vars: 4, consts: [[1, "my-sub-page"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], [3, "plan", "subscription", "close", "paymentSuccess", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-desc"], [1, "empty-perks"], [1, "perk"], [1, "btn", "primary", "large", 3, "click"], [1, "page-header"], [1, "hero-badge"], [1, "grad"], ["class", "trial-expired-banner", 4, "ngIf"], ["class", "trial-warning-banner", 4, "ngIf"], [1, "status-card"], [1, "status-head"], ["class", "trial-badge", 4, "ngIf"], [1, "dot"], ["class", "pending-msg", 4, "ngIf"], ["class", "trial-msg", 4, "ngIf"], ["class", "expired-msg", 4, "ngIf"], [1, "actions"], ["type", "button", "class", "btn outline", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn upgrade-btn", 3, "click", 4, "ngIf"], ["class", "trial-progress-wrap", 4, "ngIf"], ["class", "progress-wrap", 4, "ngIf"], ["class", "method-row", 4, "ngIf"], ["class", "renew-row", 4, "ngIf"], [1, "trial-expired-banner"], [1, "expired-icon"], [1, "expired-content"], [1, "btn", "upgrade-btn", 3, "click"], [1, "trial-warning-banner"], [1, "warn-icon"], [1, "btn", "btn-sm", "outline-warn", 3, "click"], [1, "trial-badge"], [1, "pending-msg"], [1, "trial-msg"], [1, "expired-msg"], ["type", "button", 1, "btn", "outline", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click"], ["type", "button", 1, "btn", "upgrade-btn", 3, "click"], [1, "trial-progress-wrap"], [1, "trial-progress-header"], [1, "trial-label"], [1, "trial-days"], [1, "trial-bar-bg"], [1, "trial-bar-fill"], [1, "trial-dates"], [1, "progress-wrap"], [1, "progress-bar"], [1, "pct"], [1, "method-row"], [1, "method-label"], [1, "method-value"], [1, "renew-row"], [1, "toggle-line"], ["type", "checkbox", 3, "change", "checked"], [3, "close", "paymentSuccess", "plan", "subscription"]], template: function MySubscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, MySubscriptionComponent_div_1_Template, 4, 0, "div", 1)(2, MySubscriptionComponent_div_2_Template, 28, 0, "div", 2)(3, MySubscriptionComponent_ng_container_3_Template, 32, 29, "ng-container", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MySubscriptionComponent_app_subscription_payment_4_Template, 1, 2, "app-subscription-payment", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.hasSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.hasSubscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPayment && ctx.currentSubscription);
      }
    }, dependencies: [NgIf, SubscriptionPaymentComponent, DecimalPipe, DatePipe], styles: ["\n\n.my-sub-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 100px 24px 48px;\n  max-width: 900px;\n  margin: 0 auto;\n  color: #e5e7eb;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 4vw, 40px);\n  font-weight: 800;\n  margin: 8px 0;\n}\n.grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #22c55e);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  font-size: 13px;\n  font-weight: 600;\n  color: #93c5fd;\n}\n.status-card[_ngcontent-%COMP%] {\n  background: #141824;\n  border: 1px solid #2d3348;\n  border-radius: 20px;\n  padding: 24px;\n  margin-top: 28px;\n}\n.status-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: flex-start;\n}\n.status-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n}\n.dot[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #22c55e;\n  font-weight: 700;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 10px;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n}\n.btn.outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #3d4460;\n  color: #e5e7eb;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #2d3348;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f6ef7,\n      #22c55e);\n  border-radius: 999px;\n}\n.pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: inline-block;\n}\n.renew-row[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.toggle-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 14px;\n}\n.empty-box[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 24px;\n  border: 1px dashed #3d4460;\n  border-radius: 12px;\n  text-align: center;\n  color: #6b7280;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: #9ca3af;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #2d3348;\n  border-top-color: #4f6ef7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 80px 24px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e5e7eb;\n  margin: 0 0 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-desc[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 28px;\n}\n.empty-perks[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  width: 100%;\n  margin-bottom: 32px;\n}\n.empty-perks[_ngcontent-%COMP%]   .perk[_ngcontent-%COMP%] {\n  background: #141824;\n  border: 1px solid #2d3348;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.9rem;\n  color: #d1d5db;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.empty-perks[_ngcontent-%COMP%]   .perk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.btn.large[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 1rem;\n  border-radius: 12px;\n}\n.method-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #2d3348;\n}\n.method-row[_ngcontent-%COMP%]   .method-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.method-row[_ngcontent-%COMP%]   .method-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #e5e7eb;\n  font-weight: 600;\n}\n.dot.pending[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.pending-msg[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.trial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f6ef7);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  margin-left: 8px;\n  vertical-align: middle;\n  letter-spacing: 0.3px;\n}\n.dot.trial[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.dot.active[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.dot.expired[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.trial-msg[_ngcontent-%COMP%] {\n  color: #a78bfa;\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.expired-msg[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.trial-card[_ngcontent-%COMP%] {\n  border-color: #7c3aed !important;\n  box-shadow: 0 0 0 1px rgba(124, 58, 237, 0.2);\n}\n.expired-card[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n  box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.15);\n  opacity: 0.85;\n}\n.trial-progress-wrap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #2d3348;\n}\n.trial-progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.trial-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #a78bfa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.trial-days[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #10b981;\n}\n.trial-days.warning[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.trial-days.urgent[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.trial-bar-bg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #2d3348;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.trial-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.4s ease, background 0.4s ease;\n}\n.trial-dates[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 5px;\n}\n.trial-expired-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 14px;\n  padding: 18px 20px;\n  margin-bottom: 20px;\n}\n.trial-expired-banner[_ngcontent-%COMP%]   .expired-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.trial-expired-banner[_ngcontent-%COMP%]   .expired-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.trial-expired-banner[_ngcontent-%COMP%]   .expired-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n  color: #fca5a5;\n}\n.trial-expired-banner[_ngcontent-%COMP%]   .expired-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.trial-warning-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(249, 115, 22, 0.08);\n  border: 1px solid rgba(249, 115, 22, 0.3);\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n  color: #fdba74;\n}\n.trial-warning-banner[_ngcontent-%COMP%]   .warn-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.trial-warning-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fb923c;\n}\n.btn.upgrade-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f6ef7);\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.btn.outline-warn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #f97316;\n  color: #f97316;\n}\n/*# sourceMappingURL=my-subscription.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MySubscriptionComponent, { className: "MySubscriptionComponent", filePath: "src\\app\\frontoffice\\my-subscription\\my-subscription.component.ts", lineNumber: 13 });
})();

// src/app/frontoffice/payment-success/payment-success.component.ts
function PaymentSuccessComponent_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Reference: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.ref);
  }
}
function PaymentSuccessComponent_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Plan: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.planName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.amount, " TND");
  }
}
function PaymentSuccessComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Payment Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your Flouci payment has been confirmed.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PaymentSuccessComponent_div_1_p_7_Template, 4, 1, "p", 5)(8, PaymentSuccessComponent_div_1_p_8_Template, 5, 2, "p", 6);
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10, "Your subscription is now ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "pending admin activation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". You will receive a confirmation email shortly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 8);
    \u0275\u0275listener("click", function PaymentSuccessComponent_div_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275text(15, "Go to My Subscription");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.ref);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.planName);
  }
}
function PaymentSuccessComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Verifying your Flouci payment...");
    \u0275\u0275elementEnd()();
  }
}
function PaymentSuccessComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Verification Issue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We couldn't verify your payment automatically, but don't worry \u2014 our admin team will check it manually.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function PaymentSuccessComponent_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275text(8, "Go to My Subscription");
    \u0275\u0275elementEnd()();
  }
}
var PaymentSuccessComponent = class _PaymentSuccessComponent {
  constructor(route, router, flouciService) {
    this.route = route;
    this.router = router;
    this.flouciService = flouciService;
    this.ref = "";
    this.planName = "";
    this.amount = "";
    this.isVerifying = true;
    this.verificationFailed = false;
  }
  ngOnInit() {
    this.ref = this.route.snapshot.queryParamMap.get("ref") || "";
    const paymentId = sessionStorage.getItem("flouci_payment_id") || "";
    this.planName = sessionStorage.getItem("flouci_plan") || "";
    this.amount = sessionStorage.getItem("flouci_amount") || "";
    if (paymentId) {
      this.flouciService.verifyPayment(paymentId).subscribe({
        next: (res) => {
          this.isVerifying = false;
          if (res.success) {
            console.log("[Flouci] Payment verified successfully:", res);
          } else {
            console.warn("[Flouci] Payment status:", res.status);
          }
          sessionStorage.removeItem("flouci_payment_id");
          sessionStorage.removeItem("flouci_pending_ref");
          sessionStorage.removeItem("flouci_plan");
          sessionStorage.removeItem("flouci_amount");
        },
        error: (err) => {
          console.error("[Flouci] Verification error:", err);
          this.isVerifying = false;
          this.verificationFailed = true;
        }
      });
    } else {
      this.isVerifying = false;
    }
  }
  goHome() {
    this.router.navigate(["/my-subscription"]);
  }
  static {
    this.\u0275fac = function PaymentSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentSuccessComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FlouciService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSuccessComponent, selectors: [["app-payment-success"]], decls: 4, vars: 3, consts: [[1, "result-page"], ["class", "result-card", 4, "ngIf"], ["class", "result-card error", 4, "ngIf"], [1, "result-card"], [1, "icon"], ["class", "ref", 4, "ngIf"], ["class", "plan-info", 4, "ngIf"], [1, "info"], [1, "btn-primary", 3, "click"], [1, "ref"], [1, "plan-info"], [1, "spinner"], [1, "result-card", "error"]], template: function PaymentSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PaymentSuccessComponent_div_1_Template, 16, 2, "div", 1)(2, PaymentSuccessComponent_div_2_Template, 4, 0, "div", 1)(3, PaymentSuccessComponent_div_3_Template, 9, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isVerifying);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVerifying);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.verificationFailed);
      }
    }, dependencies: [NgIf], styles: ["\n\n.result-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #0f1117;\n}\n.result-card[_ngcontent-%COMP%] {\n  background: #1a1f2e;\n  border: 1px solid #22c55e;\n  border-radius: 20px;\n  padding: 40px;\n  text-align: center;\n  max-width: 480px;\n  color: #e5e7eb;\n}\n.result-card.error[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #22c55e;\n  margin: 0 0 12px;\n}\n.error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\np[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin: 8px 0;\n}\n.ref[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.plan-info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #d1d5db;\n}\n.info[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  padding: 12px;\n  border-radius: 8px;\n  color: #d1d5db;\n  margin: 16px 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #3d5bd9;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #2d3348;\n  border-top-color: #22c55e;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=payment-success.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSuccessComponent, { className: "PaymentSuccessComponent", filePath: "src\\app\\frontoffice\\payment-success\\payment-success.component.ts", lineNumber: 47 });
})();

// src/app/frontoffice/payment-fail/payment-fail.component.ts
var PaymentFailComponent = class _PaymentFailComponent {
  constructor(router) {
    this.router = router;
  }
  retry() {
    this.router.navigate(["/subscription-management"]);
  }
  static {
    this.\u0275fac = function PaymentFailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentFailComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentFailComponent, selectors: [["app-payment-fail"]], decls: 12, vars: 0, consts: [[1, "result-page"], [1, "result-card"], [1, "icon"], [1, "info"], [1, "btn-retry", 3, "click"]], template: function PaymentFailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "\u274C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Payment Failed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Your Flouci payment was not completed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 3);
        \u0275\u0275text(9, "No charges were made. You can try again or choose a different payment method.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function PaymentFailComponent_Template_button_click_10_listener() {
          return ctx.retry();
        });
        \u0275\u0275text(11, "Try Again");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.result-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #0f1117;\n}\n.result-card[_ngcontent-%COMP%] {\n  background: #1a1f2e;\n  border: 1px solid #ef4444;\n  border-radius: 20px;\n  padding: 40px;\n  text-align: center;\n  max-width: 480px;\n  color: #e5e7eb;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin: 0 0 12px;\n}\np[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin: 8px 0;\n}\n.info[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  padding: 12px;\n  border-radius: 8px;\n  color: #d1d5db;\n  margin: 16px 0;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=payment-fail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentFailComponent, { className: "PaymentFailComponent", filePath: "src\\app\\frontoffice\\payment-fail\\payment-fail.component.ts", lineNumber: 27 });
})();

// src/app/frontoffice/frontoffice-routing.module.ts
var routes = [
  {
    path: "",
    component: FoLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", redirectTo: "", pathMatch: "full" },
      { path: "courses-resources", component: CoursesResourcesComponent },
      { path: "events", component: EventsComponent },
      { path: "profile-settings", component: ProfileSettingsComponent },
      { path: "projects-milestones", component: ProjectsMilestonesComponent },
      { path: "subscription-management", component: SubscriptionManagementComponent },
      { path: "my-subscription", component: MySubscriptionComponent },
      { path: "subscription-abonnement/:planId/:planName", component: SubscriptionAbonnementComponent },
      { path: "subscription-payment/:subscriptionId", component: SubscriptionPaymentComponent },
      { path: "payment-success", component: PaymentSuccessComponent },
      { path: "payment-fail", component: PaymentFailComponent }
    ]
  }
];
var FrontofficeRoutingModule = class _FrontofficeRoutingModule {
  static {
    this.\u0275fac = function FrontofficeRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FrontofficeRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FrontofficeRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/frontoffice/frontoffice.module.ts
var FrontofficeModule = class _FrontofficeModule {
  static {
    this.\u0275fac = function FrontofficeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FrontofficeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FrontofficeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      FrontofficeRoutingModule
    ] });
  }
};

export {
  FrontofficeModule
};
//# sourceMappingURL=chunk-FSFHYK2Z.js.map
