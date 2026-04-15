import {
  FrontofficeModule
} from "./chunk-FSFHYK2Z.js";
import {
  AuthService,
  CheckboxControlValueAccessor,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  EventEmitter,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HttpClient,
  HttpClientModule,
  MaxLengthValidator,
  MinValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  PromoCodeService,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  SlicePipe,
  SubscriptionService,
  TitleCasePipe,
  Validators,
  of,
  ribValidator,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ESJV5RXI.js";
import "./chunk-GTTZTSHQ.js";
import "./chunk-7YWLATDR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/backoffice/layout/bo-sidebar/bo-sidebar.component.ts
function BoSidebarComponent_a_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function BoSidebarComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BoSidebarComponent_a_13_span_5_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isActive(item_r1.route));
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActive(item_r1.route));
  }
}
function BoSidebarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function BoSidebarComponent_div_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(9, " \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.authService.currentUser.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.authService.currentUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.authService.currentUser.role);
  }
}
var BoSidebarComponent = class _BoSidebarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.navItems = [
      { label: "Dashboard", icon: "\u{1F4CA}", route: "/backoffice/dashboard" },
      { label: "Users", icon: "\u{1F465}", route: "/backoffice/users" },
      { label: "Projects", icon: "\u{1F4C1}", route: "/backoffice/projects" },
      { label: "Courses & Resources", icon: "\u{1F4DA}", route: "/backoffice/courses-resources" },
      { label: "Events", icon: "\u{1F4C5}", route: "/backoffice/events" },
      { label: "Profile Settings", icon: "\u2699\uFE0F", route: "/backoffice/profile-settings" },
      { label: "Milestones", icon: "\u{1F3AF}", route: "/backoffice/projects-milestones" },
      { label: "Subscriptions", icon: "\u{1F4B3}", route: "/backoffice/subscription-management" },
      { label: "User Management", icon: "\u{1F6E1}\uFE0F", route: "/backoffice/user-management" }
    ];
  }
  isActive(route) {
    return this.router.url === route;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function BoSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoSidebarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoSidebarComponent, selectors: [["app-bo-sidebar"]], decls: 15, vars: 2, consts: [[1, "bo-sidebar"], [1, "sidebar-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "accent"], [1, "admin-badge"], [1, "material-icons", 2, "font-size", "14px"], [1, "sidebar-nav"], ["class", "nav-item", "routerLinkActive", "active", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["class", "sidebar-footer", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "nav-icon"], [1, "nav-label"], ["class", "nav-indicator", 4, "ngIf"], [1, "nav-indicator"], [1, "sidebar-footer"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "Logout", 1, "logout-btn", 3, "click"]], template: function BoSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Match");
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "y");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "span", 6);
        \u0275\u0275text(10, "admin_panel_settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " ADMIN ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "nav", 7);
        \u0275\u0275template(13, BoSidebarComponent_a_13_Template, 6, 6, "a", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, BoSidebarComponent_div_14_Template, 10, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.currentUser);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n.bo-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: var(--bo-bg-sidebar);\n  display: flex;\n  flex-direction: column;\n  padding: 24px 16px;\n  flex-shrink: 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 8px;\n  margin-bottom: 20px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n  font-family: var(--font-display);\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.admin-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 8px 28px;\n  padding: 6px 12px;\n  background: rgba(79, 110, 247, 0.2);\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: 6px;\n  color: var(--primary-light);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  width: fit-content;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n  transition: all 0.2s;\n  font-size: 14px;\n  font-weight: 500;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.85);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: white;\n  border: 1px solid rgba(79, 110, 247, 0.25);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-indicator[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--primary-light);\n  border-radius: 50%;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  margin-top: 16px;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: capitalize;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=bo-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoSidebarComponent, { className: "BoSidebarComponent", filePath: "src\\app\\backoffice\\layout\\bo-sidebar\\bo-sidebar.component.ts", lineNumber: 16 });
})();

// src/app/backoffice/layout/bo-header/bo-header.component.ts
var BoHeaderComponent = class _BoHeaderComponent {
  constructor(router) {
    this.router = router;
  }
  isSubscriptionSection() {
    return this.router.url.includes("/backoffice/subscription");
  }
  goToFront() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function BoHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoHeaderComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoHeaderComponent, selectors: [["app-bo-header"]], decls: 5, vars: 0, consts: [[1, "bo-header"], [1, "header-left"], [1, "header-right"], [1, "btn-back", 3, "click"]], template: function BoHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function BoHeaderComponent_Template_button_click_3_listener() {
          return ctx.goToFront();
        });
        \u0275\u0275text(4, "\u2190 Front Office");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.bo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  background: var(--bo-bg-secondary);\n  border-bottom: 1px solid var(--bo-border);\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid var(--bo-border);\n  border-radius: 6px;\n  background: transparent;\n  color: var(--bo-text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: var(--font-body);\n  &:hover {\n    border-color: var(--primary);\n    color: var(--primary);\n  }\n}\n/*# sourceMappingURL=bo-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoHeaderComponent, { className: "BoHeaderComponent", filePath: "src\\app\\backoffice\\layout\\bo-header\\bo-header.component.ts", lineNumber: 33 });
})();

// src/app/backoffice/layout/bo-layout.component.ts
var BoLayoutComponent = class _BoLayoutComponent {
  static {
    this.\u0275fac = function BoLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoLayoutComponent, selectors: [["app-bo-layout"]], decls: 6, vars: 0, consts: [[1, "bo-layout"], [1, "bo-main"], [1, "bo-content"]], template: function BoLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-bo-sidebar");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "app-bo-header");
        \u0275\u0275elementStart(4, "main", 2);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [RouterOutlet, BoSidebarComponent, BoHeaderComponent], styles: ["\n\n.bo-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bo-bg-primary);\n  font-family: var(--font-body);\n}\n.bo-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.bo-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 28px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=bo-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoLayoutComponent, { className: "BoLayoutComponent", filePath: "src\\app\\backoffice\\layout\\bo-layout.component.ts", lineNumber: 37 });
})();

// src/app/frontoffice/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  getStats() {
    return of({
      totalUsers: 0,
      totalClients: 0,
      totalFreelancers: 0,
      verifiedFreelancers: 0,
      openProjects: 3,
      completedProjects: 0,
      totalProjects: 5,
      verificationRate: 0
    });
  }
  getKpiData() {
    return of([
      { label: "Users", value: 0 },
      { label: "Clients", value: 0 },
      { label: "Freelancers", value: 0 },
      { label: "Verified", value: 0 },
      { label: "Clients", value: 0 },
      { label: "Terminal", value: 0 }
    ]);
  }
  getRecentUsers() {
    return of([]);
  }
  getTopFreelancers() {
    return of([]);
  }
  static {
    this.\u0275fac = function DashboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/backoffice/shared/stat-card/stat-card.component.ts
function StatCardComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.suffix);
  }
}
function StatCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subLabel);
  }
}
var StatCardComponent = class _StatCardComponent {
  constructor() {
    this.icon = "";
    this.iconBg = "#4f6ef7";
    this.label = "";
    this.subLabel = "";
    this.value = 0;
    this.suffix = "";
    this.borderColor = "";
  }
  static {
    this.\u0275fac = function StatCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatCardComponent, selectors: [["app-stat-card"]], inputs: { icon: "icon", iconBg: "iconBg", label: "label", subLabel: "subLabel", value: "value", suffix: "suffix", borderColor: "borderColor" }, decls: 10, vars: 11, consts: [[1, "stat-card"], [1, "stat-icon"], [1, "stat-body"], [1, "stat-value"], ["class", "stat-suffix", 4, "ngIf"], [1, "stat-label"], ["class", "stat-sublabel", 4, "ngIf"], [1, "stat-suffix"], [1, "stat-sublabel"]], template: function StatCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275template(6, StatCardComponent_span_6_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, StatCardComponent_div_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("border-top-color", ctx.borderColor || ctx.iconBg);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.iconBg + "20")("color", ctx.iconBg);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.icon, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.suffix);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subLabel);
      }
    }, dependencies: [NgIf], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--bo-border);\n  border-top: 3px solid;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-elevated);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.stat-body[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.stat-body[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]   .stat-suffix[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.stat-body[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--bo-text-primary);\n  margin-bottom: 2px;\n}\n.stat-body[_ngcontent-%COMP%]   .stat-sublabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n/*# sourceMappingURL=stat-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatCardComponent, { className: "StatCardComponent", filePath: "src\\app\\backoffice\\shared\\stat-card\\stat-card.component.ts", lineNumber: 8 });
})();

// src/app/backoffice/dashboard/dashboard.component.ts
var _c0 = () => ["Users", "Clients", "Freelancers", "Verified", "Clients", "Terminal"];
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading dashboard...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_8_app_stat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-card", 37);
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275property("icon", stat_r2.icon)("iconBg", stat_r2.iconBg)("borderColor", stat_r2.borderColor)("label", stat_r2.label)("subLabel", stat_r2.subLabel)("value", stat_r2.value)("suffix", stat_r2.suffix || "");
  }
}
function DashboardComponent_ng_container_8_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r3);
  }
}
function DashboardComponent_ng_container_8_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2, "No users registered yet");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_8_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.name[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r5.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.rating || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.projects || 0);
  }
}
function DashboardComponent_ng_container_8_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2, "No freelancers yet");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_8_tr_118_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r6.badge);
  }
}
function DashboardComponent_ng_container_8_tr_118_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_container_8_tr_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, DashboardComponent_ng_container_8_tr_118_span_13_Template, 2, 1, "span", 48)(14, DashboardComponent_ng_container_8_tr_118_span_14_Template, 2, 0, "span", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r6.name[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.city || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", f_r6.rating || "\u2014", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.projects || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r6.badge);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r6.badge);
  }
}
function DashboardComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275template(2, DashboardComponent_ng_container_8_app_stat_card_2_Template, 1, 7, "app-stat-card", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "span", 13);
    \u0275\u0275text(7, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "User Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14)(11, "a", 15);
    \u0275\u0275text(12, "Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " vs ");
    \u0275\u0275elementStart(14, "a", 16);
    \u0275\u0275text(15, "Freelancers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "p", 18);
    \u0275\u0275text(18, "No data available yet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3");
    \u0275\u0275text(24, "Project Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 14)(26, "a", 15);
    \u0275\u0275text(27, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " vs ");
    \u0275\u0275elementStart(29, "a", 16);
    \u0275\u0275text(30, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 17)(32, "p", 18);
    \u0275\u0275text(33, "No data available yet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 19)(35, "div", 12)(36, "span", 13);
    \u0275\u0275text(37, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h3");
    \u0275\u0275text(39, "Global KPI Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 20);
    \u0275\u0275text(41, "All key indicators");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21);
    \u0275\u0275template(43, DashboardComponent_ng_container_8_div_43_Template, 5, 3, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 23)(45, "div", 24)(46, "div", 25)(47, "div", 26)(48, "span");
    \u0275\u0275text(49, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h3");
    \u0275\u0275text(51, "Recent Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 27);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 28)(55, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_ng_container_8_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.userSearch, $event) || (ctx_r3.userSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 30);
    \u0275\u0275text(57, "\u{1F4C4} CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 30);
    \u0275\u0275text(59, "\u{1F4CA} Excel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 31);
    \u0275\u0275text(61, " Sort by: ");
    \u0275\u0275elementStart(62, "button", 32);
    \u0275\u0275text(63, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 33);
    \u0275\u0275text(65, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 33);
    \u0275\u0275text(67, "Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 34)(69, "table", 35)(70, "thead")(71, "tr")(72, "th");
    \u0275\u0275text(73, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "Projects");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "tbody");
    \u0275\u0275template(85, DashboardComponent_ng_container_8_tr_85_Template, 3, 0, "tr", 5)(86, DashboardComponent_ng_container_8_tr_86_Template, 18, 9, "tr", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "div", 24)(88, "div", 25)(89, "div", 26)(90, "span");
    \u0275\u0275text(91, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "h3");
    \u0275\u0275text(93, "Top Freelancers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 27);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 28)(97, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_ng_container_8_Template_input_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.freelancerSearch, $event) || (ctx_r3.freelancerSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 30);
    \u0275\u0275text(99, "\u{1F4C4} CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 30);
    \u0275\u0275text(101, "\u{1F4CA} Excel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 34)(103, "table", 35)(104, "thead")(105, "tr")(106, "th");
    \u0275\u0275text(107, "Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "th");
    \u0275\u0275text(109, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "th");
    \u0275\u0275text(111, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "th");
    \u0275\u0275text(113, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "th");
    \u0275\u0275text(115, "Badge");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "tbody");
    \u0275\u0275template(117, DashboardComponent_ng_container_8_tr_117_Template, 3, 0, "tr", 5)(118, DashboardComponent_ng_container_8_tr_118_Template, 15, 7, "tr", 36);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.stats);
    \u0275\u0275advance(41);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r3.recentUsers.length, " results");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.userSearch);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngIf", ctx_r3.recentUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.recentUsers);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r3.topFreelancers.length, " freelancers");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.freelancerSearch);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r3.topFreelancers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.topFreelancers);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.stats = [];
    this.recentUsers = [];
    this.topFreelancers = [];
    this.isLoading = true;
    this.userSearch = "";
    this.freelancerSearch = "";
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.dashboardService.getStats().subscribe((data) => {
      this.buildStats(data);
      this.isLoading = false;
    });
    this.dashboardService.getRecentUsers().subscribe((u) => this.recentUsers = u);
    this.dashboardService.getTopFreelancers().subscribe((f) => this.topFreelancers = f);
  }
  buildStats(s) {
    this.stats = [
      { icon: "\u{1F465}", iconBg: "#4f6ef7", borderColor: "#4f6ef7", label: "Total Users", subLabel: "registered accounts", value: s.totalUsers },
      { icon: "\u{1F9D1}\u200D\u{1F4BC}", iconBg: "#06b6d4", borderColor: "#06b6d4", label: "Clients", subLabel: "project owners", value: s.totalClients },
      { icon: "\u{1F3A8}", iconBg: "#a855f7", borderColor: "#a855f7", label: "Freelancers", subLabel: "active providers", value: s.totalFreelancers },
      { icon: "\u2705", iconBg: "#22c55e", borderColor: "#22c55e", label: "Verified", subLabel: "trusted badge", value: s.verifiedFreelancers },
      { icon: "\u{1F4C2}", iconBg: "#f59e0b", borderColor: "#f59e0b", label: "Open Projects", subLabel: "seeking freelancers", value: s.openProjects },
      { icon: "\u{1F532}", iconBg: "#64748b", borderColor: "#64748b", label: "Completed Projects", subLabel: "successfully delivered", value: s.completedProjects },
      { icon: "\u{1F4CA}", iconBg: "#ef4444", borderColor: "#ef4444", label: "Total Projects", subLabel: "on the platform", value: s.totalProjects },
      { icon: "\u2B50", iconBg: "#eab308", borderColor: "#eab308", label: "Verification Rate", subLabel: "platform quality", value: s.verificationRate, suffix: "%" }
    ];
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 9, vars: 2, consts: [[1, "dashboard"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "stats-grid"], [3, "icon", "iconBg", "borderColor", "label", "subLabel", "value", "suffix", 4, "ngFor", "ngForOf"], [1, "charts-row"], [1, "chart-card"], [1, "chart-header"], [1, "chart-icon"], [1, "chart-toggle"], ["href", "#"], ["href", "#", 1, "active"], [1, "chart-placeholder"], [1, "empty-chart"], [1, "chart-card", "chart-wide"], [1, "chart-badge"], [1, "kpi-bars"], ["class", "kpi-bar", 4, "ngFor", "ngForOf"], [1, "tables-row"], [1, "table-card"], [1, "table-header"], [1, "table-title"], [1, "count-badge"], [1, "table-actions"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "btn-export"], [1, "sort-row"], [1, "sort-btn", "active"], [1, "sort-btn"], [1, "table-wrap"], [1, "data-table"], [4, "ngFor", "ngForOf"], [3, "icon", "iconBg", "borderColor", "label", "subLabel", "value", "suffix"], [1, "kpi-bar"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-label"], ["colspan", "6", 1, "empty-row"], [1, "user-cell"], [1, "avatar"], [1, "badge", "badge-primary"], [1, "status-dot"], ["colspan", "5", 1, "empty-row"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-warning"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Global overview of the Matchy platform");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, DashboardComponent_div_7_Template, 4, 0, "div", 4)(8, DashboardComponent_ng_container_8_Template, 119, 11, "ng-container", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, StatCardComponent], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 4px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 40px;\n  justify-content: center;\n  color: var(--bo-text-secondary);\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--bo-border);\n  border-top-color: var(--primary);\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr;\n  gap: 16px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n  flex: 1;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  text-decoration: none;\n  margin: 0 2px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  background: var(--bo-bg-primary);\n  padding: 3px 8px;\n  border-radius: 10px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chart-card[_ngcontent-%COMP%]   .empty-chart[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 13px;\n  border: 1px dashed var(--bo-border);\n  padding: 16px 24px;\n  border-radius: 8px;\n}\n.kpi-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 20px;\n  height: 120px;\n  padding-top: 12px;\n}\n.kpi-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n}\n.kpi-bar[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 80px;\n  background: var(--bo-bg-primary);\n  border-radius: 4px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.kpi-bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      to top,\n      var(--primary),\n      var(--accent));\n  border-radius: 4px;\n  min-height: 2px;\n  transition: height 0.6s ease;\n}\n.kpi-bar[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--bo-text-secondary);\n  white-space: nowrap;\n}\n.tables-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  gap: 12px;\n  flex-wrap: wrap;\n  border-bottom: 1px solid var(--bo-border);\n}\n.table-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.table-title[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  background: var(--bo-bg-primary);\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.table-actions[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 12px;\n  border: 1px solid var(--bo-border);\n  border-radius: 6px;\n  outline: none;\n  font-family: var(--font-body);\n  background: var(--bo-bg-primary);\n  color: var(--bo-text-primary);\n}\n.table-actions[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.table-actions[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary);\n}\n.table-actions[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 12px;\n  border-radius: 6px;\n  border: 1px solid var(--bo-border);\n  cursor: pointer;\n  font-family: var(--font-body);\n  background: white;\n  color: var(--bo-text-secondary);\n  transition: all 0.2s;\n}\n.table-actions[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.sort-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  border-bottom: 1px solid var(--bo-border);\n}\n.sort-row[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family: var(--font-body);\n  background: transparent;\n  color: var(--bo-text-secondary);\n  transition: all 0.2s;\n}\n.sort-row[_ngcontent-%COMP%]   .sort-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.sort-row[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]:not(.active):hover {\n  border-color: var(--bo-border);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--bo-border);\n  background: var(--bo-bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: var(--bo-text-primary);\n  border-bottom: 1px solid var(--bo-border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.03);\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 8px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.status-dot.inactive[_ngcontent-%COMP%] {\n  background: var(--bo-text-secondary);\n}\n.status-dot.banned[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--bo-text-secondary);\n  font-size: 13px;\n  padding: 32px !important;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tables-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\backoffice\\dashboard\\dashboard.component.ts", lineNumber: 20 });
})();

// src/app/backoffice/users/users.component.ts
function UsersComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No users registered yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "Users will appear here once they sign up");
    \u0275\u0275elementEnd()()()();
  }
}
function UsersComponent_tr_56_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r1.city);
  }
}
function UsersComponent_tr_56_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_tr_56_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UsersComponent_tr_56_span_7_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 30);
    \u0275\u0275element(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, UsersComponent_tr_56_span_19_Template, 2, 0, "span", 32)(20, UsersComponent_tr_56_span_20_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 34)(27, "button", 35);
    \u0275\u0275text(28, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 36);
    \u0275\u0275text(30, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 37);
    \u0275\u0275text(32, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(user_r1.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r1.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 12, user_r1.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r1.verified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r1.verified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.rating ? "\u2B50 " + user_r1.rating : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 14, user_r1.createdAt, "MMM d, y"));
  }
}
var UsersComponent = class _UsersComponent {
  constructor() {
    this.users = [];
    this.filteredUsers = [];
    this.searchTerm = "";
    this.selectedRole = "all";
    this.selectedStatus = "all";
  }
  ngOnInit() {
    this.filteredUsers = [...this.users];
  }
  onSearch() {
    this.filteredUsers = this.users.filter((u) => {
      const matchSearch = !this.searchTerm || u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = this.selectedRole === "all" || u.role === this.selectedRole;
      const matchStatus = this.selectedStatus === "all" || u.status === this.selectedStatus;
      return matchSearch && matchRole && matchStatus;
    });
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 57, vars: 5, consts: [[1, "users-page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-add"], [1, "filters-bar", "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search users...", 1, "filter-input", "bo-filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-select", "bo-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "admin"], ["value", "client"], ["value", "freelancer"], ["value", "active"], ["value", "inactive"], ["value", "banned"], [1, "filter-spacer", "bo-filter-spacer"], [1, "btn-export"], [1, "table-card"], [1, "data-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "8", 1, "empty-row"], [1, "empty-state"], [1, "empty-icon"], [1, "user-cell"], [1, "avatar"], [1, "user-info"], [1, "user-name"], ["class", "user-city", 4, "ngIf"], [1, "badge", "badge-primary"], [1, "status-chip"], [1, "dot"], ["class", "verified-icon", 4, "ngIf"], ["class", "verified-icon unverified", 4, "ngIf"], [1, "actions-cell"], ["title", "View", 1, "btn-action", "view"], ["title", "Edit", 1, "btn-action", "edit"], ["title", "Delete", 1, "btn-action", "delete"], [1, "user-city"], [1, "verified-icon"], [1, "verified-icon", "unverified"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Users Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Manage all registered users on Matchy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Add User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function UsersComponent_Template_input_input_10_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
          return $event;
        });
        \u0275\u0275listener("change", function UsersComponent_Template_select_change_11_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementStart(12, "option", 8);
        \u0275\u0275text(13, "All Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 9);
        \u0275\u0275text(15, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 11);
        \u0275\u0275text(19, "Freelancer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function UsersComponent_Template_select_change_20_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementStart(21, "option", 8);
        \u0275\u0275text(22, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 12);
        \u0275\u0275text(24, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 13);
        \u0275\u0275text(26, "Inactive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 14);
        \u0275\u0275text(28, "Banned");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 15);
        \u0275\u0275elementStart(30, "button", 16);
        \u0275\u0275text(31, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275text(33, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 17)(35, "table", 18)(36, "thead")(37, "tr")(38, "th");
        \u0275\u0275text(39, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th");
        \u0275\u0275text(51, "Joined");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "tbody");
        \u0275\u0275template(55, UsersComponent_tr_55_Template, 9, 0, "tr", 19)(56, UsersComponent_tr_56_Template, 33, 17, "tr", 20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(35);
        \u0275\u0275property("ngIf", ctx.filteredUsers.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredUsers);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe, DatePipe], styles: ["\n\n.users-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 4px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.filter-input[_ngcontent-%COMP%], \n.filter-select[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--bo-bg-secondary);\n  color: var(--bo-text-primary);\n  outline: none;\n  transition: border 0.2s;\n}\n.filter-input[_ngcontent-%COMP%]:focus, \n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.filter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.filter-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-export[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  background: white;\n  color: var(--bo-text-secondary);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--bo-border);\n  background: var(--bo-bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 13px;\n  color: var(--bo-text-primary);\n  border-bottom: 1px solid var(--bo-border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.03);\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 10px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-cell[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%]   .user-city[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.status-chip.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n}\n.status-chip.inactive[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.status-chip.banned[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.status-chip.banned[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.verified-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.unverified[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  gap: 4px;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--bo-border);\n  cursor: pointer;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  transition: all 0.2s;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: var(--warning);\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: var(--danger);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 15px;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 12px;\n  opacity: 0.7;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n}\n.bo-filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.bo-filter-input[_ngcontent-%COMP%], \n.filter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.bo-filter-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\backoffice\\users\\users.component.ts", lineNumber: 9 });
})();

// src/app/backoffice/projects/projects.component.ts
function ProjectsComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20)(2, "div", 21)(3, "span", 22);
    \u0275\u0275text(4, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No projects yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "Projects will appear here once clients post them");
    \u0275\u0275elementEnd()()()();
  }
}
function ProjectsComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 29)(25, "button", 30);
    \u0275\u0275text(26, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 31);
    \u0275\u0275text(28, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 32);
    \u0275\u0275text(30, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(6, 11, project_r1.description, 0, 50), "...");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 15, project_r1.budget), " ", project_r1.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r1.getStatusClass(project_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, project_r1.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r1.applications);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.rating ? "\u2B50 " + project_r1.rating : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 19, project_r1.createdAt, "MMM d, y"));
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor() {
    this.projects = [];
    this.filteredProjects = [];
    this.searchTerm = "";
    this.selectedStatus = "all";
  }
  ngOnInit() {
    this.filteredProjects = [...this.projects];
  }
  onSearch() {
    this.filteredProjects = this.projects.filter((p) => {
      const matchSearch = !this.searchTerm || p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = this.selectedStatus === "all" || p.status === this.selectedStatus;
      return matchSearch && matchStatus;
    });
  }
  getStatusClass(status) {
    const map = {
      open: "success",
      in_progress: "primary",
      delivered: "warning",
      completed: "success",
      cancelled: "danger"
    };
    return map[status] || "primary";
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], decls: 52, vars: 4, consts: [[1, "projects-page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-add"], [1, "filters-bar", "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search projects...", 1, "filter-input", "bo-filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-select", "bo-filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "open"], ["value", "in_progress"], ["value", "delivered"], ["value", "completed"], ["value", "cancelled"], [1, "filter-spacer", "bo-filter-spacer"], [1, "btn-export"], [1, "table-card"], [1, "data-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "8", 1, "empty-row"], [1, "empty-state"], [1, "empty-icon"], [1, "project-cell"], [1, "project-title"], [1, "project-desc"], [1, "category-tag"], [1, "budget-cell"], [1, "badge"], [1, "actions-cell"], ["title", "View", 1, "btn-action", "view"], ["title", "Edit", 1, "btn-action", "edit"], ["title", "Delete", 1, "btn-action", "delete"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Projects Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Overview of all projects on the Matchy platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ New Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function ProjectsComponent_Template_input_input_10_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ProjectsComponent_Template_select_change_11_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementStart(12, "option", 8);
        \u0275\u0275text(13, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 9);
        \u0275\u0275text(15, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "In Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 11);
        \u0275\u0275text(19, "Delivered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 12);
        \u0275\u0275text(21, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 13);
        \u0275\u0275text(23, "Cancelled");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "div", 14);
        \u0275\u0275elementStart(25, "button", 15);
        \u0275\u0275text(26, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 15);
        \u0275\u0275text(28, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 16)(30, "table", 17)(31, "thead")(32, "tr")(33, "th");
        \u0275\u0275text(34, "Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "tbody");
        \u0275\u0275template(50, ProjectsComponent_tr_50_Template, 9, 0, "tr", 18)(51, ProjectsComponent_tr_51_Template, 31, 22, "tr", 19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(39);
        \u0275\u0275property("ngIf", ctx.filteredProjects.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredProjects);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n\n.projects-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 4px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.filter-input[_ngcontent-%COMP%], \n.filter-select[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-family: var(--font-body);\n  background: var(--bo-bg-secondary);\n  color: var(--bo-text-primary);\n  outline: none;\n  transition: border 0.2s;\n}\n.filter-input[_ngcontent-%COMP%]:focus, \n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.filter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.filter-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-export[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  background: white;\n  color: var(--bo-text-secondary);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.btn-export[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--bo-border);\n  background: var(--bo-bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 13px;\n  color: var(--bo-text-primary);\n  border-bottom: 1px solid var(--bo-border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.03);\n}\n.project-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column;\n  gap: 2px;\n  max-width: 220px;\n}\n.project-cell[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.project-cell[_ngcontent-%COMP%]   .project-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.category-tag[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary);\n}\n.budget-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex !important;\n  gap: 4px;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--bo-border);\n  cursor: pointer;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  transition: all 0.2s;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.1);\n  border-color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: var(--warning);\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: var(--danger);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 15px;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 12px;\n  opacity: 0.7;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n}\n.bo-filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.bo-filter-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\backoffice\\projects\\projects.component.ts", lineNumber: 9 });
})();

// src/app/backoffice/layout/bo-login/bo-login.component.ts
function BoLoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error, "");
  }
}
function BoLoginComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In \u2192");
    \u0275\u0275elementEnd();
  }
}
function BoLoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
var BoLoginComponent = class _BoLoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.isLoading = false;
    this.error = "";
    this.loginForm = this.fb.group({
      email: ["admin@matchy.tn", [Validators.required, Validators.email]],
      password: ["password", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.isLoading = true;
    this.error = "";
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(["/backoffice/dashboard"]);
        } else {
          this.error = "Invalid credentials";
          this.isLoading = false;
        }
      },
      error: () => {
        this.error = "Login failed. Please try again.";
        this.isLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function BoLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoLoginComponent, selectors: [["app-bo-login"]], decls: 31, vars: 9, consts: [[1, "login-page"], [1, "login-bg"], [1, "bg-glow", "g1"], [1, "bg-glow", "g2"], [1, "login-card"], [1, "login-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "accent"], [1, "login-title"], [1, "login-sub"], ["class", "login-error", 4, "ngIf"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "admin@matchy.tn", 1, "form-input"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input"], ["type", "submit", 1, "btn-login", 3, "disabled"], [4, "ngIf"], ["routerLink", "/", 1, "back-link"], [1, "login-error"]], template: function BoLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "Match");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "y");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "h1", 9);
        \u0275\u0275text(13, "Admin Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15, "Access the Matchy backoffice dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, BoLoginComponent_div_16_Template, 3, 1, "div", 11);
        \u0275\u0275elementStart(17, "form", 12);
        \u0275\u0275listener("ngSubmit", function BoLoginComponent_Template_form_ngSubmit_17_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(18, "div", 13)(19, "label");
        \u0275\u0275text(20, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 13)(23, "label");
        \u0275\u0275text(24, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275template(27, BoLoginComponent_span_27_Template, 2, 0, "span", 17)(28, BoLoginComponent_span_28_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "a", 18);
        \u0275\u0275text(30, "\u2190 Back to Matchy");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("invalid", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("invalid", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  padding: 24px;\n}\n.login-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.login-bg[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n}\n.login-bg[_ngcontent-%COMP%]   .bg-glow.g1[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: var(--primary);\n  top: -100px;\n  right: -100px;\n}\n.login-bg[_ngcontent-%COMP%]   .bg-glow.g2[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: var(--accent-secondary);\n  bottom: -50px;\n  left: -50px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-xl);\n  padding: 48px 40px;\n  width: 100%;\n  max-width: 420px;\n  position: relative;\n  z-index: 1;\n  backdrop-filter: blur(20px);\n}\n.login-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 28px;\n}\n.login-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 18px;\n  font-family: var(--font-display);\n}\n.login-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n}\n.login-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.login-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 8px;\n  letter-spacing: -0.5px;\n}\n.login-sub[_ngcontent-%COMP%] {\n  color: var(--fo-text-muted);\n  font-size: 14px;\n  margin-bottom: 32px;\n}\n.login-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: var(--radius-sm);\n  padding: 12px 14px;\n  color: #fca5a5;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-secondary);\n  letter-spacing: 0.3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  color: white;\n  font-size: 15px;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--fo-text-muted);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n}\n.form-input.invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n.btn-login[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 14px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.4);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 24px;\n  color: var(--fo-text-muted);\n  font-size: 13px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-light);\n}\n/*# sourceMappingURL=bo-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoLoginComponent, { className: "BoLoginComponent", filePath: "src\\app\\backoffice\\layout\\bo-login\\bo-login.component.ts", lineNumber: 11 });
})();

// src/app/backoffice/courses-resources/courses-resources.component.ts
var _c02 = (a0, a1, a2) => ({ "badge-success": a0, "badge-primary": a1, "badge-danger": a2 });
function BoCoursesResourcesComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, cat_r1));
  }
}
function BoCoursesResourcesComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "button", 21);
    \u0275\u0275listener("click", function BoCoursesResourcesComponent_tr_62_Template_button_click_26_listener() {
      const course_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleStatus(course_r3));
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 22)(30, "button", 23);
    \u0275\u0275text(31, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 24);
    \u0275\u0275text(33, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 25);
    \u0275\u0275text(35, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, course_r3.createdAt, "MMM d, y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, course_r3.category));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(24, _c02, course_r3.level === "beginner", course_r3.level === "intermediate", course_r3.level === "advanced"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, course_r3.level), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} ", \u0275\u0275pipeBind1(19, 20, course_r3.students), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", course_r3.lessons, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", course_r3.isFree ? "badge-success" : "badge-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r3.isFree ? "Free" : "Paid", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("published", course_r3.status === "published");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, course_r3.status), " ");
  }
}
function BoCoursesResourcesComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "No courses found");
    \u0275\u0275elementEnd()();
  }
}
var BoCoursesResourcesComponent = class _BoCoursesResourcesComponent {
  constructor() {
    this.searchTerm = "";
    this.selectedCategory = "all";
    this.categories = ["all", "design", "development", "marketing", "business"];
    this.courses = [
      { id: 1, title: "UI/UX Design Fundamentals", category: "design", level: "beginner", students: 1240, lessons: 24, status: "published", author: "Sara B.", createdAt: "2025-01-10", isFree: true },
      { id: 2, title: "React & Angular Development", category: "development", level: "intermediate", students: 2310, lessons: 48, status: "published", author: "Karim M.", createdAt: "2025-01-15", isFree: false },
      { id: 3, title: "Freelance Business Mastery", category: "business", level: "beginner", students: 870, lessons: 16, status: "draft", author: "Admin", createdAt: "2025-02-01", isFree: true },
      { id: 4, title: "Digital Marketing Essentials", category: "marketing", level: "beginner", students: 1050, lessons: 20, status: "published", author: "Yasmine K.", createdAt: "2025-02-10", isFree: false }
    ];
  }
  get filteredCourses() {
    return this.courses.filter((c) => {
      const matchCat = this.selectedCategory === "all" || c.category === this.selectedCategory;
      const matchSearch = !this.searchTerm || c.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }
  ngOnInit() {
  }
  getTotalStudents() {
    return this.courses.reduce((sum, c) => sum + c.students, 0);
  }
  toggleStatus(course) {
    course.status = course.status === "published" ? "draft" : "published";
  }
  static {
    this.\u0275fac = function BoCoursesResourcesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoCoursesResourcesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoCoursesResourcesComponent, selectors: [["app-bo-courses-resources"]], decls: 64, vars: 8, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "btn-primary"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-val"], [1, "ms-label"], [1, "bo-filters-bar", "filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search courses...", 1, "bo-filter-input", "filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", "filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bo-filter-spacer", "filter-spacer"], [1, "btn-export"], [1, "bo-table-card", "table-card"], [1, "bo-data-table", "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "course-title-cell"], [1, "category-tag"], [1, "badge", 3, "ngClass"], [1, "status-toggle", 3, "click"], [1, "bo-actions-cell", "actions-cell"], [1, "btn-action", "view"], [1, "btn-action", "edit"], [1, "btn-action", "delete"], ["colspan", "9", 1, "bo-empty-row", "empty-row"]], template: function BoCoursesResourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Courses & Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage all educational content on the platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275text(8, "+ Add Course");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "Total Courses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "span", 5);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19, "Total Students");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 4)(21, "span", 5);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 6);
        \u0275\u0275text(24, "Published");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 4)(26, "span", 5);
        \u0275\u0275text(27, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 6);
        \u0275\u0275text(29, "Free Courses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 7)(31, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BoCoursesResourcesComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BoCoursesResourcesComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275template(33, BoCoursesResourcesComponent_option_33_Template, 3, 4, "option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "div", 11);
        \u0275\u0275elementStart(35, "button", 12);
        \u0275\u0275text(36, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 12);
        \u0275\u0275text(38, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 13)(40, "table", 14)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Course");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Author");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Students");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Lessons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275template(62, BoCoursesResourcesComponent_tr_62_Template, 36, 28, "tr", 15)(63, BoCoursesResourcesComponent_tr_63_Template, 3, 0, "tr", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.courses.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.getTotalStudents());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.courses.length);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.filteredCourses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredCourses.length === 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n\n.course-title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.course-title-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.course-title-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.category-tag[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary);\n}\n.status-toggle[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  border: 1px solid;\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n  border-color: rgba(100, 116, 139, 0.2509803922);\n  transition: all 0.2s;\n}\n.status-toggle.published[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  border-color: rgba(34, 197, 94, 0.3);\n}\n/*# sourceMappingURL=courses-resources.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoCoursesResourcesComponent, { className: "BoCoursesResourcesComponent", filePath: "src\\app\\backoffice\\courses-resources\\courses-resources.component.ts", lineNumber: 8 });
})();

// src/app/backoffice/events/events.component.ts
function BoEventsComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, t_r1));
  }
}
function BoEventsComponent_tr_58_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u{1F310} Online");
    \u0275\u0275elementEnd();
  }
}
function BoEventsComponent_tr_58_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", event_r2.location, "");
  }
}
function BoEventsComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, BoEventsComponent_tr_58_span_12_Template, 2, 0, "span", 19)(13, BoEventsComponent_tr_58_span_13_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 20)(16, "div", 21);
    \u0275\u0275element(17, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 24)(25, "button", 25);
    \u0275\u0275text(26, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 26);
    \u0275\u0275text(28, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275text(30, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, event_r2.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, event_r2.date, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r2.isOnline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r2.isOnline);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.getAttendancePercent(event_r2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r2.attendees, "/", event_r2.maxAttendees, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 15, event_r2.status));
  }
}
function BoEventsComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, "No events found");
    \u0275\u0275elementEnd()();
  }
}
var BoEventsComponent = class _BoEventsComponent {
  constructor() {
    this.searchTerm = "";
    this.selectedType = "all";
    this.types = ["all", "webinar", "workshop", "meetup", "conference"];
    this.events = [
      { id: 1, title: "Freelance Tunisia Summit 2025", type: "conference", date: "2025-03-15", location: "Tunis, TN", attendees: 380, maxAttendees: 500, status: "upcoming", isOnline: false },
      { id: 2, title: "UX Design Masterclass", type: "workshop", date: "2025-03-20", location: "Online", attendees: 72, maxAttendees: 100, status: "upcoming", isOnline: true },
      { id: 3, title: "Freelancers Meetup Sfax", type: "meetup", date: "2025-03-25", location: "Sfax, TN", attendees: 34, maxAttendees: 50, status: "upcoming", isOnline: false },
      { id: 4, title: "Client Acquisition Webinar", type: "webinar", date: "2025-04-02", location: "Online", attendees: 210, maxAttendees: 500, status: "upcoming", isOnline: true }
    ];
  }
  get filteredEvents() {
    return this.events.filter((e) => {
      const matchType = this.selectedType === "all" || e.type === this.selectedType;
      const matchSearch = !this.searchTerm || e.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchType && matchSearch;
    });
  }
  ngOnInit() {
  }
  getAttendancePercent(e) {
    return Math.round(e.attendees / e.maxAttendees * 100);
  }
  static {
    this.\u0275fac = function BoEventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoEventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoEventsComponent, selectors: [["app-bo-events"]], decls: 60, vars: 6, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "btn-primary"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-val"], [1, "ms-label"], [1, "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search events...", 1, "bo-filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bo-filter-spacer"], [1, "btn-export"], [1, "bo-table-card"], [1, "bo-data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "badge", "badge-primary"], ["class", "online-tag", 4, "ngIf"], [1, "attendance-info"], [1, "bar-track"], [1, "bar-fill"], [1, "badge", "badge-success"], [1, "bo-actions-cell"], [1, "btn-action", "view"], [1, "btn-action", "edit"], [1, "btn-action", "delete"], [1, "online-tag"], ["colspan", "7", 1, "bo-empty-row"]], template: function BoEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Events Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Create and manage platform events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275text(8, "+ Create Event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "Total Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "span", 5);
        \u0275\u0275text(17, "696");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19, "Total Registered");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 4)(21, "span", 5);
        \u0275\u0275text(22, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 6);
        \u0275\u0275text(24, "Online");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 4)(26, "span", 5);
        \u0275\u0275text(27, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 6);
        \u0275\u0275text(29, "In-Person");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 7)(31, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BoEventsComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BoEventsComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
          return $event;
        });
        \u0275\u0275template(33, BoEventsComponent_option_33_Template, 3, 4, "option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "div", 11);
        \u0275\u0275elementStart(35, "button", 12);
        \u0275\u0275text(36, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 12);
        \u0275\u0275text(38, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 13)(40, "table", 14)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Attendance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "tbody");
        \u0275\u0275template(58, BoEventsComponent_tr_58_Template, 31, 17, "tr", 15)(59, BoEventsComponent_tr_59_Template, 3, 0, "tr", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.events.length);
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.types);
        \u0275\u0275advance(25);
        \u0275\u0275property("ngForOf", ctx.filteredEvents);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredEvents.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe, DatePipe], styles: ["\n\n.online-tag[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--primary);\n}\n.attendance-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.attendance-info[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 5px;\n  background: var(--bo-bg-primary);\n  border-radius: 3px;\n}\n.attendance-info[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary);\n  border-radius: 3px;\n  transition: width 0.5s;\n}\n.attendance-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  white-space: nowrap;\n}\n/*# sourceMappingURL=events.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoEventsComponent, { className: "BoEventsComponent", filePath: "src\\app\\backoffice\\events\\events.component.ts", lineNumber: 8 });
})();

// src/app/backoffice/profile-settings/profile-settings.component.ts
function BoProfileSettingsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "\u2705 Settings saved successfully!");
    \u0275\u0275elementEnd();
  }
}
var BoProfileSettingsComponent = class _BoProfileSettingsComponent {
  constructor(fb) {
    this.fb = fb;
    this.saved = false;
    this.settings = { maintenance: false, registration: true, emails: true, verification: true };
    this.form = this.fb.group({
      name: ["Admin Matchy", Validators.required],
      email: ["admin@matchy.tn", [Validators.required, Validators.email]],
      phone: ["+216 55 000 000"],
      role: ["Super Admin"]
    });
  }
  save() {
    this.saved = true;
    setTimeout(() => this.saved = false, 3e3);
  }
  static {
    this.\u0275fac = function BoProfileSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoProfileSettingsComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoProfileSettingsComponent, selectors: [["app-bo-profile-settings"]], decls: 70, vars: 7, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "btn-primary", 3, "click"], [1, "ps-grid"], [1, "ps-card"], [3, "formGroup"], [1, "ps-form-group"], ["type", "text", "formControlName", "name", "placeholder", "Full Name", 1, "ps-input"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "ps-input"], ["type", "text", "formControlName", "phone", "placeholder", "Phone", 1, "ps-input"], ["type", "text", "formControlName", "role", 1, "ps-input"], [1, "ps-setting-row"], [1, "ps-toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ps-slider"], ["class", "ps-success", 4, "ngIf"], [1, "ps-success"]], template: function BoProfileSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Profile Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage admin account and platform settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function BoProfileSettingsComponent_Template_button_click_7_listener() {
          return ctx.save();
        });
        \u0275\u0275text(8, "Save Changes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "h3");
        \u0275\u0275text(12, "Admin Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "form", 5)(14, "div", 6)(15, "label");
        \u0275\u0275text(16, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6)(19, "label");
        \u0275\u0275text(20, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 6)(23, "label");
        \u0275\u0275text(24, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 6)(27, "label");
        \u0275\u0275text(28, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 4)(31, "h3");
        \u0275\u0275text(32, "Platform Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11)(34, "div")(35, "strong");
        \u0275\u0275text(36, "Maintenance Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "Temporarily disable public access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "label", 12)(40, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function BoProfileSettingsComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.maintenance, $event) || (ctx.settings.maintenance = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 11)(43, "div")(44, "strong");
        \u0275\u0275text(45, "User Registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Allow new users to sign up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "label", 12)(49, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function BoProfileSettingsComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.registration, $event) || (ctx.settings.registration = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 11)(52, "div")(53, "strong");
        \u0275\u0275text(54, "Email Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, "Send automated emails to users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "label", 12)(58, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function BoProfileSettingsComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.emails, $event) || (ctx.settings.emails = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 11)(61, "div")(62, "strong");
        \u0275\u0275text(63, "Manual Verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, "Manually verify freelancer profiles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "label", 12)(67, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function BoProfileSettingsComponent_Template_input_ngModelChange_67_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings.verification, $event) || (ctx.settings.verification = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "span", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(69, BoProfileSettingsComponent_div_69_Template, 2, 0, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(16);
        \u0275\u0275attribute("readonly", true);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.maintenance);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.registration);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.emails);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings.verification);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.saved);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName], styles: ['\n\n.ps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.ps-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-md);\n  padding: 24px;\n}\n.ps-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: var(--bo-text-primary);\n}\n.ps-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.ps-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--bo-text-secondary);\n}\n.ps-input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--bo-border);\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: var(--font-body);\n  color: var(--bo-text-primary);\n  background: var(--bo-bg-primary);\n  outline: none;\n  transition: border 0.2s;\n}\n.ps-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.ps-input[readonly][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ps-setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--bo-border);\n}\n.ps-setting-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ps-setting-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: var(--bo-text-primary);\n  margin-bottom: 2px;\n}\n.ps-setting-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.ps-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ps-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ps-toggle[_ngcontent-%COMP%]   .ps-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--bo-border);\n  border-radius: 11px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.ps-toggle[_ngcontent-%COMP%]   .ps-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background: white;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n  transition: 0.3s;\n}\n.ps-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ps-slider[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.ps-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ps-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n.ps-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  border-radius: 8px;\n  padding: 12px 20px;\n  color: #16a34a;\n  font-size: 14px;\n  font-weight: 600;\n  width: fit-content;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n}\n@media (max-width: 768px) {\n  .ps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile-settings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoProfileSettingsComponent, { className: "BoProfileSettingsComponent", filePath: "src\\app\\backoffice\\profile-settings\\profile-settings.component.ts", lineNumber: 9 });
})();

// src/app/backoffice/projects-milestones/projects-milestones.component.ts
function BoProjectsMilestonesComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, s_r1));
  }
}
function BoProjectsMilestonesComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 19)(13, "div", 20);
    \u0275\u0275element(14, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "span", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 23);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 24)(28, "button", 25);
    \u0275\u0275text(29, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275text(31, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 27);
    \u0275\u0275text(33, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.freelancer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 14, p_r2.budget), " ", p_r2.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", p_r2.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r2.progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r2.completedMilestones, "/", p_r2.milestones, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 16, p_r2.dueDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r2.getStatusClass(p_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 19, p_r2.status));
  }
}
function BoProjectsMilestonesComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "No projects found");
    \u0275\u0275elementEnd()();
  }
}
var BoProjectsMilestonesComponent = class _BoProjectsMilestonesComponent {
  constructor() {
    this.searchTerm = "";
    this.selectedStatus = "all";
    this.statuses = ["all", "active", "completed", "paused", "cancelled"];
    this.projects = [
      { id: 1, title: "E-Commerce Mobile App", client: "TechStart TN", freelancer: "Karim M.", budget: 4500, currency: "TND", progress: 65, status: "active", milestones: 4, completedMilestones: 1, dueDate: "2025-04-01" },
      { id: 2, title: "Restaurant Website", client: "Chez Habib", freelancer: "Sara B.", budget: 1800, currency: "TND", progress: 100, status: "completed", milestones: 3, completedMilestones: 3, dueDate: "2025-01-28" },
      { id: 3, title: "Brand Identity Package", client: "Startup TN", freelancer: "Yasmine K.", budget: 2200, currency: "TND", progress: 30, status: "active", milestones: 3, completedMilestones: 1, dueDate: "2025-03-30" },
      { id: 4, title: "SEO Campaign Q1", client: "Boutique TN", freelancer: "Ahmed R.", budget: 800, currency: "TND", progress: 0, status: "paused", milestones: 2, completedMilestones: 0, dueDate: "2025-05-01" }
    ];
  }
  get filteredProjects() {
    return this.projects.filter((p) => {
      const matchStatus = this.selectedStatus === "all" || p.status === this.selectedStatus;
      const matchSearch = !this.searchTerm || p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.client.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchStatus && matchSearch;
    });
  }
  ngOnInit() {
  }
  getStatusClass(status) {
    return { active: "primary", completed: "success", paused: "warning", cancelled: "danger" }[status] || "primary";
  }
  static {
    this.\u0275fac = function BoProjectsMilestonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoProjectsMilestonesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoProjectsMilestonesComponent, selectors: [["app-bo-projects-milestones"]], decls: 64, vars: 6, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "btn-primary"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-val"], [1, "ms-label"], [1, "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search projects...", 1, "bo-filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bo-filter-spacer"], [1, "btn-export"], [1, "bo-table-card"], [1, "bo-data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "budget-cell"], [1, "progress-cell"], [1, "prog-bar"], [1, "prog-fill"], [1, "milestone-chip"], [1, "badge"], [1, "bo-actions-cell"], [1, "btn-action", "view"], [1, "btn-action", "edit"], [1, "btn-action", "delete"], ["colspan", "9", 1, "bo-empty-row"]], template: function BoProjectsMilestonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Projects & Milestones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Monitor all projects and their milestone progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275text(8, "+ New Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "Total Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "span", 5);
        \u0275\u0275text(17, "9300 TND");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19, "Total Budget");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 4)(21, "span", 5);
        \u0275\u0275text(22, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 6);
        \u0275\u0275text(24, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 4)(26, "span", 5);
        \u0275\u0275text(27, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 6);
        \u0275\u0275text(29, "Completed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 7)(31, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BoProjectsMilestonesComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BoProjectsMilestonesComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275template(33, BoProjectsMilestonesComponent_option_33_Template, 3, 4, "option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "div", 11);
        \u0275\u0275elementStart(35, "button", 12);
        \u0275\u0275text(36, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 12);
        \u0275\u0275text(38, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 13)(40, "table", 14)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Freelancer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Milestones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275template(62, BoProjectsMilestonesComponent_tr_62_Template, 34, 21, "tr", 15)(63, BoProjectsMilestonesComponent_tr_63_Template, 3, 0, "tr", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.projects.length);
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.filteredProjects);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredProjects.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n\n.budget-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success);\n}\n.progress-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.progress-cell[_ngcontent-%COMP%]   .prog-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 80px;\n  height: 5px;\n  background: var(--bo-bg-primary);\n  border-radius: 3px;\n}\n.progress-cell[_ngcontent-%COMP%]   .prog-bar[_ngcontent-%COMP%]   .prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary);\n  border-radius: 3px;\n  transition: width 0.5s;\n}\n.progress-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  white-space: nowrap;\n}\n.milestone-chip[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary);\n}\n/*# sourceMappingURL=projects-milestones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoProjectsMilestonesComponent, { className: "BoProjectsMilestonesComponent", filePath: "src\\app\\backoffice\\projects-milestones\\projects-milestones.component.ts", lineNumber: 8 });
})();

// src/app/shared/components/secure-payment/secure-payment.component.ts
function SecurePaymentComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function SecurePaymentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function SecurePaymentComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Appliquer");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "V\xE9rification...");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SecurePaymentComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearPromoCode());
    });
    \u0275\u0275text(1, " \u2715 Annuler ");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27)(6, "span");
    \u0275\u0275text(7, "Montant original:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 29)(16, "span");
    \u0275\u0275text(17, "Montant final:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2705 ", ctx_r0.promoValidationResult == null ? null : ctx_r0.promoValidationResult.message, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.amount.toFixed(2), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("R\xE9duction (", ctx_r0.promoValidationResult == null ? null : ctx_r0.promoValidationResult.discountValue, "%):");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", ctx_r0.discountAmountTnd.toFixed(2), " TND");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.discountedAmount.toFixed(2), " TND");
  }
}
function SecurePaymentComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function SecurePaymentComponent_div_24_Template_div_click_0_listener() {
      const method_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectPaymentMethod(method_r4.value));
    });
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.selectedMethod === method_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r4.label);
  }
}
function SecurePaymentComponent_div_26_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("cardholderName"), " ");
  }
}
function SecurePaymentComponent_div_26_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("cardNumber"), " ");
  }
}
function SecurePaymentComponent_div_26_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("cardExpiry"), " ");
  }
}
function SecurePaymentComponent_div_26_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("cardCvv"), " ");
  }
}
function SecurePaymentComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h4");
    \u0275\u0275text(2, "D\xE9tails de la carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "label");
    \u0275\u0275text(5, "Titulaire de la carte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 36);
    \u0275\u0275template(7, SecurePaymentComponent_div_26_div_7_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35)(9, "label");
    \u0275\u0275text(10, "Num\xE9ro de carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275listener("input", function SecurePaymentComponent_div_26_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatCardNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SecurePaymentComponent_div_26_div_12_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39)(14, "div", 40)(15, "label");
    \u0275\u0275text(16, "Expiration (MM/YY)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 41);
    \u0275\u0275template(18, SecurePaymentComponent_div_26_div_18_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 40)(20, "label");
    \u0275\u0275text(21, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 42);
    \u0275\u0275listener("input", function SecurePaymentComponent_div_26_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatCVV($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SecurePaymentComponent_div_26_div_23_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("cardholderName"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("cardNumber"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("cardExpiry"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("cardCvv"));
  }
}
function SecurePaymentComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("paypalEmail"), " ");
  }
}
function SecurePaymentComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h4");
    \u0275\u0275text(2, "Identifiant PayPal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "label");
    \u0275\u0275text(5, "Adresse e-mail PayPal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 44);
    \u0275\u0275template(7, SecurePaymentComponent_div_27_div_7_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9, "Vous serez redirig\xE9 vers PayPal pour compl\xE9ter votre paiement.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("paypalEmail"));
  }
}
function SecurePaymentComponent_div_28_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const provider_r6 = ctx.$implicit;
    \u0275\u0275property("value", provider_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(provider_r6);
  }
}
function SecurePaymentComponent_div_28_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("mobileProvider"), " ");
  }
}
function SecurePaymentComponent_div_28_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("mobileNumber"), " ");
  }
}
function SecurePaymentComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h4");
    \u0275\u0275text(2, "Paiement Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "label");
    \u0275\u0275text(5, "Op\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 46)(7, "option", 47);
    \u0275\u0275text(8, "Choisir un op\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SecurePaymentComponent_div_28_option_9_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SecurePaymentComponent_div_28_div_10_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 35)(12, "label");
    \u0275\u0275text(13, "Num\xE9ro mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 49);
    \u0275\u0275template(15, SecurePaymentComponent_div_28_div_15_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.mobileProviders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("mobileProvider"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("mobileNumber"));
  }
}
function SecurePaymentComponent_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("bankName"), " ");
  }
}
function SecurePaymentComponent_div_29_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Le RIB/IBAN est requis");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_div_29_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Le RIB doit contenir exactement 20 chiffres");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_div_29_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Maximum 20 chiffres");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_div_29_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, SecurePaymentComponent_div_29_div_16_span_1_Template, 2, 0, "span", 8)(2, SecurePaymentComponent_div_29_div_16_span_2_Template, 2, 0, "span", 8)(3, SecurePaymentComponent_div_29_div_16_span_3_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.paymentForm.get("rib")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.paymentForm.get("rib")) == null ? null : tmp_3_0.hasError("rib"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.paymentForm.get("rib")) == null ? null : tmp_4_0.hasError("maxlength"));
  }
}
function SecurePaymentComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h4");
    \u0275\u0275text(2, "Virement Bancaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "label");
    \u0275\u0275text(5, "Banque");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 51);
    \u0275\u0275template(7, SecurePaymentComponent_div_29_div_7_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35)(9, "label");
    \u0275\u0275text(10, "RIB / IBAN ");
    \u0275\u0275elementStart(11, "span", 52);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 53);
    \u0275\u0275elementStart(14, "small", 54);
    \u0275\u0275text(15, "Format: 20 chiffres uniquement");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SecurePaymentComponent_div_29_div_16_Template, 4, 3, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 45);
    \u0275\u0275text(18, "Vous recevrez les d\xE9tails du virement apr\xE8s soumission.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("bankName"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.getFieldError("rib"));
  }
}
function SecurePaymentComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Confirmer le paiement");
    \u0275\u0275elementEnd();
  }
}
function SecurePaymentComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Traitement en cours...");
    \u0275\u0275elementEnd();
  }
}
var SecurePaymentComponent = class _SecurePaymentComponent {
  constructor(fb, subscriptionService, promoCodeService) {
    this.fb = fb;
    this.subscriptionService = subscriptionService;
    this.promoCodeService = promoCodeService;
    this.subscriptionId = 0;
    this.userId = 0;
    this.amount = 0;
    this.currency = "TND";
    this.paymentSubmitted = new EventEmitter();
    this.paymentCancelled = new EventEmitter();
    this.selectedMethod = "CARD";
    this.isProcessing = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.promoCode = "";
    this.promoValidationResult = null;
    this.isValidatingPromo = false;
    this.discountedAmount = 0;
    this.discountAmountTnd = 0;
    this.showPromoSuccess = false;
    this.paymentMethods = [
      { label: "Carte Bancaire", value: "CARD", icon: "\u{1F4B3}" },
      { label: "PayPal", value: "PAYPAL", icon: "\u{1F17F}\uFE0F" },
      { label: "Paiement Mobile", value: "MOBILE", icon: "\u{1F4F1}" },
      { label: "Virement Bancaire", value: "BANK_TRANSFER", icon: "\u{1F3E6}" }
    ];
    this.mobileProviders = ["Ooredoo", "Tunisie T\xE9l\xE9com", "Orange"];
    this.paymentForm = this.createForm();
  }
  ngOnInit() {
    this.updateFormValidators();
  }
  createForm() {
    return this.fb.group({
      // Common fields
      subscriptionId: [this.subscriptionId],
      userId: [this.userId],
      amount: [this.amount, [Validators.required, Validators.min(0.01)]],
      currency: [this.currency],
      method: [this.selectedMethod, Validators.required],
      // Card fields
      cardholderName: ["", Validators.required],
      cardNumber: ["", [Validators.required, Validators.pattern(/^\d{13,19}$/)]],
      cardExpiry: ["", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cardCvv: ["", [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      // PayPal
      paypalEmail: ["", [Validators.email]],
      // Mobile
      mobileProvider: [""],
      mobileNumber: ["", Validators.pattern(/^5\d{7}$/)],
      // Bank Transfer
      bankName: [""],
      rib: [""]
    });
  }
  selectPaymentMethod(method) {
    this.selectedMethod = method;
    this.paymentForm.patchValue({ method });
    this.updateFormValidators();
  }
  updateFormValidators() {
    const form = this.paymentForm;
    form.get("cardholderName")?.clearAsyncValidators();
    form.get("cardNumber")?.clearAsyncValidators();
    form.get("cardExpiry")?.clearAsyncValidators();
    form.get("cardCvv")?.clearAsyncValidators();
    form.get("paypalEmail")?.clearAsyncValidators();
    form.get("mobileProvider")?.clearAsyncValidators();
    form.get("mobileNumber")?.clearAsyncValidators();
    form.get("bankName")?.clearAsyncValidators();
    form.get("rib")?.clearAsyncValidators();
    if (this.selectedMethod === "CARD") {
      form.get("cardholderName")?.setValidators([Validators.required]);
      form.get("cardNumber")?.setValidators([Validators.required, Validators.pattern(/^\d{13,19}$/)]);
      form.get("cardExpiry")?.setValidators([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]);
      form.get("cardCvv")?.setValidators([Validators.required, Validators.pattern(/^\d{3,4}$/)]);
    } else if (this.selectedMethod === "PAYPAL") {
      form.get("paypalEmail")?.setValidators([Validators.required, Validators.email]);
    } else if (this.selectedMethod === "MOBILE") {
      form.get("mobileProvider")?.setValidators([Validators.required]);
      form.get("mobileNumber")?.setValidators([Validators.required, Validators.pattern(/^5\d{7}$/)]);
    } else if (this.selectedMethod === "BANK_TRANSFER") {
      form.get("bankName")?.setValidators([Validators.required]);
      form.get("rib")?.setValidators([Validators.required, ribValidator(), Validators.maxLength(20)]);
    }
    form.get("cardholderName")?.updateValueAndValidity();
    form.get("cardNumber")?.updateValueAndValidity();
    form.get("cardExpiry")?.updateValueAndValidity();
    form.get("cardCvv")?.updateValueAndValidity();
    form.get("paypalEmail")?.updateValueAndValidity();
    form.get("mobileProvider")?.updateValueAndValidity();
    form.get("mobileNumber")?.updateValueAndValidity();
    form.get("bankName")?.updateValueAndValidity();
    form.get("rib")?.updateValueAndValidity();
  }
  submitPayment() {
    if (this.paymentForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs requis correctement";
      return;
    }
    this.isProcessing = true;
    this.errorMessage = "";
    const formData = this.paymentForm.value;
    const payment = {
      id: 0,
      subscription: { id: formData.subscriptionId },
      user: { id: formData.userId },
      amount: this.discountedAmount > 0 ? this.discountedAmount : formData.amount,
      currency: formData.currency,
      method: formData.method,
      status: "PENDING",
      transactionDate: /* @__PURE__ */ new Date(),
      transactionRef: this.generateTransactionRef(),
      lastFourDigits: this.getLastFourDigits(),
      cardholderName: formData.cardholderName || "",
      submittedAt: /* @__PURE__ */ new Date(),
      approvedAt: null,
      approvedBy: null,
      adminNotes: "",
      promoCode: this.promoValidationResult?.valid ? this.promoCode : void 0,
      discountAmountTnd: this.discountAmountTnd > 0 ? this.discountAmountTnd : void 0
    };
    if (formData.method === "CARD") {
      payment.lastFourDigits = formData.cardNumber?.slice(-4);
      payment.cardholderName = formData.cardholderName;
    } else if (formData.method === "PAYPAL") {
      payment.cardholderName = formData.paypalEmail;
    } else if (formData.method === "MOBILE") {
      payment.lastFourDigits = formData.mobileNumber?.slice(-4);
      payment.cardholderName = formData.mobileProvider;
    } else if (formData.method === "BANK_TRANSFER") {
      payment.cardholderName = formData.bankName;
    }
    this.subscriptionService.createPayment(payment).subscribe((response) => {
      this.isProcessing = false;
      this.successMessage = "Paiement soumis avec succ\xE8s ! V\xE9rification en cours...";
      setTimeout(() => {
        this.paymentSubmitted.emit(response);
      }, 2e3);
    }, (error) => {
      this.isProcessing = false;
      this.errorMessage = error.error?.message || "Erreur lors de la soumission du paiement";
    });
  }
  // ── Promo Code Methods ─────────────────────────────────────────────────────
  validatePromoCode() {
    if (!this.promoCode.trim()) {
      this.promoValidationResult = null;
      this.discountedAmount = 0;
      this.discountAmountTnd = 0;
      this.showPromoSuccess = false;
      return;
    }
    this.isValidatingPromo = true;
    this.promoCodeService.validate(this.promoCode, "", this.amount).subscribe((result) => {
      this.isValidatingPromo = false;
      this.promoValidationResult = result;
      if (result.valid) {
        this.discountAmountTnd = this.amount - this.promoCodeService.applyDiscount(this.amount, result);
        this.discountedAmount = this.promoCodeService.applyDiscount(this.amount, result);
        this.showPromoSuccess = true;
        this.errorMessage = "";
        this.showPromoSuccessPopup();
      } else {
        this.discountedAmount = 0;
        this.discountAmountTnd = 0;
        this.showPromoSuccess = false;
        this.errorMessage = result.message;
      }
    }, (error) => {
      this.isValidatingPromo = false;
      this.errorMessage = "Erreur lors de la validation du code promo";
      this.promoValidationResult = null;
      this.discountedAmount = 0;
      this.discountAmountTnd = 0;
      this.showPromoSuccess = false;
    });
  }
  showPromoSuccessPopup() {
    const discountPercent = this.promoValidationResult?.discountValue || 10;
    const message = `\u2705 Code promo appliqu\xE9!

Montant original: ${this.amount.toFixed(2)} TND
R\xE9duction (${discountPercent}%): -${this.discountAmountTnd.toFixed(2)} TND
Montant final: ${this.discountedAmount.toFixed(2)} TND`;
    alert(message);
  }
  clearPromoCode() {
    this.promoCode = "";
    this.promoValidationResult = null;
    this.discountedAmount = 0;
    this.discountAmountTnd = 0;
    this.showPromoSuccess = false;
    this.errorMessage = "";
  }
  cancel() {
    this.paymentCancelled.emit();
  }
  generateTransactionRef() {
    return "TXN-" + Date.now() + "-" + Math.floor(Math.random() * 1e4);
  }
  getLastFourDigits() {
    if (this.selectedMethod === "CARD") {
      return this.paymentForm.get("cardNumber")?.value?.slice(-4) || "";
    } else if (this.selectedMethod === "MOBILE") {
      return this.paymentForm.get("mobileNumber")?.value?.slice(-4) || "";
    }
    return "";
  }
  getFieldError(fieldName) {
    const field = this.paymentForm.get(fieldName);
    if (field?.hasError("required")) {
      return "Ce champ est requis";
    }
    if (fieldName === "cardNumber" && field?.hasError("pattern")) {
      return "Num\xE9ro de carte invalide (13-19 chiffres)";
    }
    if (fieldName === "cardExpiry" && field?.hasError("pattern")) {
      return "Format invalide (MM/YY)";
    }
    if (fieldName === "cardCvv" && field?.hasError("pattern")) {
      return "CVV invalide (3-4 chiffres)";
    }
    if (fieldName === "paypalEmail" && field?.hasError("email")) {
      return "Email invalide";
    }
    if (fieldName === "mobileNumber" && field?.hasError("pattern")) {
      return "Num\xE9ro invalide (format: 5XXXXXXXX)";
    }
    return "";
  }
  getVisibleFields() {
    const commonFields = ["amount", "currency", "method"];
    const methodFields = {
      CARD: ["cardholderName", "cardNumber", "cardExpiry", "cardCvv"],
      PAYPAL: ["paypalEmail"],
      MOBILE: ["mobileProvider", "mobileNumber"],
      BANK_TRANSFER: ["bankName", "rib"]
    };
    return [...commonFields, ...methodFields[this.selectedMethod] || []];
  }
  formatCardNumber(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, "");
  }
  formatCVV(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, "");
  }
  static {
    this.\u0275fac = function SecurePaymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SecurePaymentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(PromoCodeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurePaymentComponent, selectors: [["app-secure-payment"]], inputs: { subscriptionId: "subscriptionId", userId: "userId", amount: "amount", currency: "currency" }, outputs: { paymentSubmitted: "paymentSubmitted", paymentCancelled: "paymentCancelled" }, decls: 39, vars: 21, consts: [[1, "secure-payment-container"], [1, "payment-header"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "promo-code-section"], [1, "promo-input-group"], ["type", "text", "placeholder", "Entrez votre code promo (ex: MATCHY-ABC12345)", 1, "form-control", "promo-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [4, "ngIf"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["class", "promo-success-box", 4, "ngIf"], [1, "payment-methods"], [1, "methods-grid"], ["class", "method-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "payment-form", 3, "ngSubmit", "formGroup"], ["class", "method-form", 4, "ngIf"], [1, "security-info"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "promo-success-box"], [1, "promo-details"], [1, "promo-message"], [1, "discount-breakdown"], [1, "discount-row"], [1, "discount-row", "discount-amount"], [1, "discount-row", "total"], [1, "final-amount"], [1, "method-card", 3, "click"], [1, "method-icon"], [1, "method-label"], [1, "method-form"], [1, "form-group"], ["type", "text", "formControlName", "cardholderName", "placeholder", "Nom complet sur la carte", 1, "form-control"], ["class", "error-text", 4, "ngIf"], ["type", "text", "formControlName", "cardNumber", "placeholder", "1234 5678 9012 3456", "maxlength", "19", 1, "form-control", 3, "input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "cardExpiry", "placeholder", "MM/YY", "maxlength", "5", 1, "form-control"], ["type", "text", "formControlName", "cardCvv", "placeholder", "123", "maxlength", "4", 1, "form-control", 3, "input"], [1, "error-text"], ["type", "email", "formControlName", "paypalEmail", "placeholder", "votre@paypal.com", 1, "form-control"], [1, "info-text"], ["formControlName", "mobileProvider", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "mobileNumber", "placeholder", "5XXXXXXXX", "maxlength", "8", 1, "form-control"], [3, "value"], ["type", "text", "formControlName", "bankName", "placeholder", "Nom de votre banque", 1, "form-control"], [1, "required"], ["type", "text", "formControlName", "rib", "placeholder", "20 chiffres (ex: 12345678901234567890)", "maxlength", "20", 1, "form-control"], [1, "form-text"]], template: function SecurePaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "\u{1F512} Paiement S\xE9curis\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Montant \xE0 payer: ");
        \u0275\u0275elementStart(6, "strong");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, SecurePaymentComponent_div_8_Template, 2, 1, "div", 2)(9, SecurePaymentComponent_div_9_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(10, "div", 4)(11, "h3");
        \u0275\u0275text(12, "\u{1F381} Code Promo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5)(14, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function SecurePaymentComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.promoCode, $event) || (ctx.promoCode = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function SecurePaymentComponent_Template_button_click_15_listener() {
          return ctx.validatePromoCode();
        });
        \u0275\u0275template(16, SecurePaymentComponent_span_16_Template, 2, 0, "span", 8)(17, SecurePaymentComponent_span_17_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, SecurePaymentComponent_button_18_Template, 2, 0, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, SecurePaymentComponent_div_19_Template, 20, 5, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11)(21, "h3");
        \u0275\u0275text(22, "M\xE9thode de paiement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275template(24, SecurePaymentComponent_div_24_Template, 5, 4, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "form", 14);
        \u0275\u0275listener("ngSubmit", function SecurePaymentComponent_Template_form_ngSubmit_25_listener() {
          return ctx.submitPayment();
        });
        \u0275\u0275template(26, SecurePaymentComponent_div_26_Template, 24, 4, "div", 15)(27, SecurePaymentComponent_div_27_Template, 10, 1, "div", 15)(28, SecurePaymentComponent_div_28_Template, 16, 3, "div", 15)(29, SecurePaymentComponent_div_29_Template, 19, 2, "div", 15);
        \u0275\u0275elementStart(30, "div", 16)(31, "p");
        \u0275\u0275text(32, "\u{1F510} Votre paiement est s\xE9curis\xE9. Aucune information sensible n'est stock\xE9e.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 17)(34, "button", 18);
        \u0275\u0275listener("click", function SecurePaymentComponent_Template_button_click_34_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(35, " Annuler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 19);
        \u0275\u0275template(37, SecurePaymentComponent_span_37_Template, 2, 0, "span", 8)(38, SecurePaymentComponent_span_38_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", ctx.amount, " ", ctx.currency, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.promoCode);
        \u0275\u0275property("disabled", ctx.isValidatingPromo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.promoCode.trim() || ctx.isValidatingPromo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isValidatingPromo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isValidatingPromo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPromoSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPromoSuccess);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.paymentMethods);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.paymentForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMethod === "CARD");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMethod === "PAYPAL");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMethod === "MOBILE");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMethod === "BANK_TRANSFER");
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.isProcessing);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.paymentForm.invalid || ctx.isProcessing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isProcessing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isProcessing);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, FormGroupDirective, FormControlName], styles: ["\n\n.secure-payment-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1f2e 0%,\n      #16192b 100%);\n  border-radius: 12px;\n  border: 1px solid #2d3348;\n  color: #e5e7eb;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 8px 0;\n  color: #fff;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n  margin: 0;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: rgba(248, 113, 113, 0.1);\n  border: 1px solid #ef4444;\n  color: #fca5a5;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.1);\n  border: 1px solid #22c55e;\n  color: #86efac;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.05);\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 12px 0;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .promo-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px;\n  background: #0f1117;\n  border: 1px solid #2d3348;\n  border-radius: 6px;\n  color: #e5e7eb;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .promo-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .promo-input[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .promo-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #4f6ef7;\n  background: transparent;\n  color: #4f6ef7;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(79, 110, 247, 0.1);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6b7280;\n  color: #6b7280;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-input-group[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(107, 114, 128, 0.1);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.5);\n  border-radius: 6px;\n  padding: 12px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .promo-message[_ngcontent-%COMP%] {\n  color: #86efac;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 0 12px 0;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  padding: 6px 0;\n  color: #d1d5db;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n  font-weight: 600;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row.discount-amount[_ngcontent-%COMP%] {\n  color: #86efac;\n  border-top: 1px solid rgba(34, 197, 94, 0.3);\n  border-bottom: 1px solid rgba(34, 197, 94, 0.3);\n  padding: 8px 0;\n  margin: 4px 0;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row.discount-amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row.total[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: 600;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .promo-code-section[_ngcontent-%COMP%]   .promo-success-box[_ngcontent-%COMP%]   .promo-details[_ngcontent-%COMP%]   .discount-breakdown[_ngcontent-%COMP%]   .discount-row.total[_ngcontent-%COMP%]   .final-amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #22c55e;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 0 16px 0;\n  color: #fff;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 12px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #2d3348;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: #0f1117;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  background: #1a1f2e;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card.active[_ngcontent-%COMP%] {\n  border-color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.1);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 28px;\n  margin-bottom: 8px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]   .method-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #d1d5db;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .method-form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .method-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 16px 0;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 6px;\n  color: #d1d5db;\n  font-weight: 500;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  background: #0f1117;\n  border: 1px solid #2d3348;\n  border-radius: 6px;\n  color: #e5e7eb;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f6ef7;\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: rgba(79, 110, 247, 0.05);\n  border-radius: 4px;\n  border-left: 3px solid #4f6ef7;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.5);\n  border-radius: 8px;\n  padding: 12px;\n  margin: 24px 0;\n  font-size: 13px;\n  color: #86efac;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 32px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7 0%,\n      #3d5dce 100%);\n  color: #fff;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 8px 16px rgba(79, 110, 247, 0.4);\n  transform: translateY(-2px);\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #2d3348;\n  color: #d1d5db;\n  border: 1px solid #3d4556;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3d4556;\n}\n.secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .secure-payment-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .secure-payment-container[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .secure-payment-container[_ngcontent-%COMP%]   .payment-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .secure-payment-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=secure-payment.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurePaymentComponent, { className: "SecurePaymentComponent", filePath: "src\\app\\shared\\components\\secure-payment\\secure-payment.component.ts", lineNumber: 30 });
})();

// src/app/backoffice/subscription-management/subscription-management.component.ts
function BoSubscriptionManagementComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, p_r1));
  }
}
function BoSubscriptionManagementComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 29);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 30)(24, "button", 31);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_tr_67_Template_button_click_24_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewSub(sub_r3));
    });
    \u0275\u0275text(25, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_tr_67_Template_button_click_26_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditSubscription(sub_r3));
    });
    \u0275\u0275text(27, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 33);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_tr_67_Template_button_click_28_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openUpgradePayment(sub_r3));
    });
    \u0275\u0275text(29, "\u2B06\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 34);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_tr_67_Template_button_click_30_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete(sub_r3));
    });
    \u0275\u0275text(31, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sub_r3.user[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r3.user, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sub_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r3.getPlanClass(sub_r3.plan));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, sub_r3.plan));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sub_r3.amount > 0 ? sub_r3.amount + " " + sub_r3.currency : "Free");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, sub_r3.startDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sub_r3.nextBilling === "-" ? "\u2014" : \u0275\u0275pipeBind2(18, 16, sub_r3.nextBilling, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", sub_r3.status === "active" ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, sub_r3.status), " ");
  }
}
function BoSubscriptionManagementComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No subscriptions found");
    \u0275\u0275elementEnd()();
  }
}
function BoSubscriptionManagementComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_69_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "form", 41);
    \u0275\u0275listener("ngSubmit", function BoSubscriptionManagementComponent_div_69_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSubscription());
    });
    \u0275\u0275elementStart(9, "div", 42)(10, "label");
    \u0275\u0275text(11, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.user, $event) || (ctx_r3.subForm.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "label");
    \u0275\u0275text(15, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.email, $event) || (ctx_r3.subForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 45)(18, "label");
    \u0275\u0275text(19, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.plan, $event) || (ctx_r3.subForm.plan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function BoSubscriptionManagementComponent_div_69_Template_select_change_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPlanChange());
    });
    \u0275\u0275elementStart(21, "option", 47);
    \u0275\u0275text(22, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 48);
    \u0275\u0275text(24, "Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 49);
    \u0275\u0275text(26, "Elite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 45)(28, "label");
    \u0275\u0275text(29, "Amount (TND)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.amount, $event) || (ctx_r3.subForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 45)(32, "label");
    \u0275\u0275text(33, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.startDate, $event) || (ctx_r3.subForm.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 45)(36, "label");
    \u0275\u0275text(37, "Next Billing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.nextBilling, $event) || (ctx_r3.subForm.nextBilling = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 42)(40, "label");
    \u0275\u0275text(41, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_div_69_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.subForm.status, $event) || (ctx_r3.subForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 54);
    \u0275\u0275text(44, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 55);
    \u0275\u0275text(46, "Cancelled");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 56)(48, "button", 57);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_69_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 58);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_69_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSubscription());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.isEditing ? "\u270F\uFE0F Edit Subscription" : "\u2795 Add Subscription");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.user);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.plan);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.amount);
    \u0275\u0275property("disabled", ctx_r3.subForm.plan === "free");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.nextBilling);
    \u0275\u0275property("disabled", ctx_r3.subForm.plan === "free");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.subForm.status);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.isEditing ? "Update" : "Save");
  }
}
function BoSubscriptionManagementComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_70_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "h2");
    \u0275\u0275text(4, "\u{1F441} Subscription Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_70_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "div", 59)(9, "div", 60)(10, "span", 61);
    \u0275\u0275text(11, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 62);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 60)(15, "span", 61);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 62);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 63)(20, "span", 61);
    \u0275\u0275text(21, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 62);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 63)(26, "span", 61);
    \u0275\u0275text(27, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 63)(31, "span", 61);
    \u0275\u0275text(32, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 62);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 63)(37, "span", 61);
    \u0275\u0275text(38, "Next Billing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 62);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 60)(43, "span", 61);
    \u0275\u0275text(44, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 29);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "titlecase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 56)(49, "button", 6);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_70_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(50, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r3.selectedSub.user);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedSub.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 9, ctx_r3.selectedSub.plan));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedSub.amount, " ", ctx_r3.selectedSub.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 11, ctx_r3.selectedSub.startDate, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selectedSub.nextBilling === "-" ? "\u2014" : \u0275\u0275pipeBind2(41, 14, ctx_r3.selectedSub.nextBilling, "MMM d, y"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r3.selectedSub.status === "active" ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 17, ctx_r3.selectedSub.status));
  }
}
function BoSubscriptionManagementComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_71_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_71_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "h2");
    \u0275\u0275text(4, "\u26A0\uFE0F Delete Subscriber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_71_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "p", 67);
    \u0275\u0275text(9, " Remove ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " plan? ");
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "span", 68);
    \u0275\u0275text(19, "This action cannot be undone.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 56)(21, "button", 57);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_71_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 69);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_71_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteSub());
    });
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.subToDelete.user);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r3.subToDelete.email, ") from the ");
    \u0275\u0275advance();
    \u0275\u0275classMap("text-" + ctx_r3.getPlanClass(ctx_r3.subToDelete.plan));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r3.subToDelete.plan));
  }
}
function BoSubscriptionManagementComponent_div_72_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_72_div_12_Template_div_click_0_listener() {
      const plan_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.upgradeToNewPlan = plan_r10.id);
    });
    \u0275\u0275elementStart(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 78);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 79);
    \u0275\u0275text(8, "/mois");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r3.upgradeToNewPlan === plan_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r10.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", plan_r10.price, " ", plan_r10.currency, "");
  }
}
function BoSubscriptionManagementComponent_div_72_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "h4");
    \u0275\u0275text(2, "D\xE9tails du paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-secure-payment", 81);
    \u0275\u0275listener("paymentSubmitted", function BoSubscriptionManagementComponent_div_72_div_13_Template_app_secure_payment_paymentSubmitted_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPaymentSubmitted($event));
    })("paymentCancelled", function BoSubscriptionManagementComponent_div_72_div_13_Template_app_secure_payment_paymentCancelled_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPaymentCancelled());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("subscriptionId", ctx_r3.subForUpgrade.id)("userId", ctx_r3.subForUpgrade.id)("amount", ctx_r3.planPrices[ctx_r3.upgradeToNewPlan] || 0)("currency", "TND");
  }
}
function BoSubscriptionManagementComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_72_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_72_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function BoSubscriptionManagementComponent_div_72_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "div", 71)(9, "h4");
    \u0275\u0275text(10, "Choisir un nouveau plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 72);
    \u0275\u0275template(12, BoSubscriptionManagementComponent_div_72_div_12_Template, 9, 6, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BoSubscriptionManagementComponent_div_72_div_13_Template, 4, 4, "div", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4B3} Upgrade Plan - ", ctx_r3.subForUpgrade.user, "");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.plans_data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.upgradeToNewPlan);
  }
}
var BoSubscriptionManagementComponent = class _BoSubscriptionManagementComponent {
  constructor(http, subscriptionService) {
    this.http = http;
    this.subscriptionService = subscriptionService;
    this.API_URL = "http://localhost:8081";
    this.knownIds = /* @__PURE__ */ new Set();
    this.searchTerm = "";
    this.selectedPlanFilter = "all";
    this.selectedStatusFilter = "all";
    this.plans = ["all", "free", "pro", "premium"];
    this.statuses = ["all", "active", "pending", "cancelled", "expired"];
    this.planPrices = { free: 0, pro: 29, premium: 69 };
    this.subscriptions = [];
    this.isLoading = false;
    this.toastMessage = "";
    this.showViewModal = false;
    this.showDeleteModal = false;
    this.showAddEditModal = false;
    this.showPaymentModal = false;
    this.selectedSub = null;
    this.subToDelete = null;
    this.subForUpgrade = null;
    this.isEditing = false;
    this.subForm = this.emptyForm();
    this.upgradeToNewPlan = null;
    this.plans_data = [];
  }
  ngOnInit() {
    this.plans_data = this.subscriptionService.getPlans("monthly");
    this.loadFromBackend();
    this.pollInterval = setInterval(() => this.loadFromBackend(false), 2e4);
    window.addEventListener("paymentApproved", (event) => {
      console.log("\u{1F514} Payment approved event received - refreshing subscriptions");
      this.loadFromBackend(false);
    });
  }
  ngOnDestroy() {
    if (this.pollInterval)
      clearInterval(this.pollInterval);
  }
  loadFromBackend(showLoader = true) {
    if (showLoader)
      this.isLoading = true;
    this.http.get(`${this.API_URL}/subscriptions`).subscribe({
      next: (data) => {
        const mapped = data.map((s) => {
          let nextBilling = "-";
          if (s.startDate) {
            const startDate = new Date(s.startDate);
            startDate.setMonth(startDate.getMonth() + 1);
            nextBilling = startDate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
          }
          let planName = "Pro";
          if (s.plan?.name) {
            planName = s.plan.name;
            planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
          } else if (s.planName) {
            planName = s.planName;
          } else if (s.priceAtPurchase === 69) {
            planName = "Premium";
          } else if (s.priceAtPurchase === 0) {
            planName = "Free";
          }
          let userName = "Unknown";
          let userEmail = "";
          if (s.user) {
            userName = `${s.user.firstName || ""} ${s.user.lastName || ""}`.trim() || s.user.email || "Unknown";
            userEmail = s.user.email || "";
          } else if (s.userId) {
            userName = `User #${s.userId}`;
            userEmail = `user-${s.userId}@matchy.tn`;
          }
          return {
            id: s.id,
            user: userName,
            email: userEmail,
            plan: planName.toLowerCase(),
            // Display in html uses titlecase
            amount: s.priceAtPurchase || 0,
            currency: s.plan?.currency || "TND",
            startDate: s.startDate ? new Date(s.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "",
            endDate: s.endDate ? new Date(s.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "",
            nextBilling,
            status: (s.status || "pending").toLowerCase(),
            isNew: !this.knownIds.has(s.id)
          };
        });
        const newOnes = mapped.filter((s) => s.isNew);
        if (newOnes.length > 0 && this.knownIds.size > 0) {
          this.showToast(`\u{1F514} ${newOnes.length} new subscription(s) received`);
        }
        mapped.forEach((s) => this.knownIds.add(s.id));
        this.subscriptions = mapped;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  get filteredSubscriptions() {
    return this.subscriptions.filter((s) => {
      const matchPlan = this.selectedPlanFilter === "all" || s.plan === this.selectedPlanFilter;
      const matchStatus = this.selectedStatusFilter === "all" || s.status === this.selectedStatusFilter;
      const matchSearch = !this.searchTerm || s.user.toLowerCase().includes(this.searchTerm.toLowerCase()) || s.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchPlan && matchStatus && matchSearch;
    });
  }
  get totalMRR() {
    return this.subscriptions.filter((s) => s.status === "active").reduce((sum, s) => sum + s.amount, 0);
  }
  get activeCount() {
    return this.subscriptions.filter((s) => s.status === "active").length;
  }
  get pendingCount() {
    return this.subscriptions.filter((s) => s.status === "pending").length;
  }
  get cancelledCount() {
    return this.subscriptions.filter((s) => s.status === "cancelled").length;
  }
  getPlanClass(plan) {
    return { free: "muted", pro: "primary", premium: "warning", elite: "warning" }[plan] || "primary";
  }
  getStatusClass(status) {
    return { active: "badge-success", pending: "badge-warning", cancelled: "badge-danger", expired: "badge-muted" }[status] || "badge-muted";
  }
  emptyForm() {
    return { id: 0, user: "", email: "", plan: "pro", amount: 29, currency: "TND", startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], endDate: "", status: "active", nextBilling: "-" };
  }
  viewSub(sub) {
    this.selectedSub = sub;
    this.showViewModal = true;
  }
  openAddSubscription() {
    this.isEditing = false;
    this.subForm = this.emptyForm();
    this.showAddEditModal = true;
  }
  openEditSubscription(sub) {
    this.isEditing = true;
    this.subForm = __spreadValues({}, sub);
    this.showAddEditModal = true;
  }
  openUpgradeModal(sub) {
    this.subForUpgrade = sub;
    this.upgradeToNewPlan = null;
    this.showPaymentModal = true;
  }
  openUpgradePayment(sub) {
    this.openUpgradeModal(sub);
  }
  onPlanChange() {
    this.subForm.amount = this.planPrices[this.subForm.plan] || 0;
  }
  saveSubscription() {
    if (this.isEditing) {
      const idx = this.subscriptions.findIndex((s) => s.id === this.subForm.id);
      if (idx !== -1)
        this.subscriptions[idx] = __spreadValues({}, this.subForm);
    } else {
      this.subForm.id = Date.now();
      this.subscriptions.unshift(__spreadValues({}, this.subForm));
    }
    this.closeModal();
  }
  confirmUpgrade() {
    if (!this.subForUpgrade || !this.upgradeToNewPlan)
      return;
    const newPlan = this.plans_data.find((p) => p.id === this.upgradeToNewPlan);
    if (!newPlan)
      return;
    const idx = this.subscriptions.findIndex((s) => s.id === this.subForUpgrade.id);
    if (idx !== -1) {
      this.subscriptions[idx] = __spreadProps(__spreadValues({}, this.subscriptions[idx]), {
        plan: newPlan.name.toLowerCase(),
        amount: newPlan.price,
        status: "pending"
      });
    }
    this.showToast("Plan upgraded \u2014 status set to Pending");
    this.closeModal();
  }
  confirmDelete(sub) {
    this.subToDelete = sub;
    this.showDeleteModal = true;
  }
  deleteSub() {
    if (this.subToDelete) {
      this.subscriptions = this.subscriptions.filter((s) => s.id !== this.subToDelete.id);
      this.showDeleteModal = false;
      this.subToDelete = null;
    }
  }
  closeModal() {
    this.showViewModal = false;
    this.showDeleteModal = false;
    this.showAddEditModal = false;
    this.showPaymentModal = false;
    this.selectedSub = null;
    this.subToDelete = null;
    this.subForUpgrade = null;
    this.upgradeToNewPlan = null;
  }
  // ── Exports ──────────────────────────────────────────────
  exportCSV() {
    const headers = ["ID", "User", "Email", "Plan", "Amount", "Currency", "Start Date", "End Date", "Status"];
    const rows = this.filteredSubscriptions.map((s) => [s.id, s.user, s.email, s.plan, s.amount, s.currency, s.startDate, s.endDate, s.status].join(","));
    this.downloadFile([headers.join(","), ...rows].join("\n"), "subscriptions.csv", "text/csv");
  }
  exportExcel() {
    const headers = ["ID", "User", "Email", "Plan", "Amount", "Currency", "Start Date", "End Date", "Status"];
    let xml = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?>';
    xml += '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    xml += '<Worksheet ss:Name="Subscriptions"><Table>';
    xml += "<Row>" + headers.map((h) => `<Cell><Data ss:Type="String">${h}</Data></Cell>`).join("") + "</Row>";
    this.filteredSubscriptions.forEach((s) => {
      xml += `<Row>
        <Cell><Data ss:Type="Number">${s.id}</Data></Cell>
        <Cell><Data ss:Type="String">${s.user}</Data></Cell>
        <Cell><Data ss:Type="String">${s.email}</Data></Cell>
        <Cell><Data ss:Type="String">${s.plan}</Data></Cell>
        <Cell><Data ss:Type="Number">${s.amount}</Data></Cell>
        <Cell><Data ss:Type="String">${s.currency}</Data></Cell>
        <Cell><Data ss:Type="String">${s.startDate}</Data></Cell>
        <Cell><Data ss:Type="String">${s.endDate}</Data></Cell>
        <Cell><Data ss:Type="String">${s.status}</Data></Cell>
      </Row>`;
    });
    xml += "</Table></Worksheet></Workbook>";
    this.downloadFile(xml, "subscriptions.xls", "application/vnd.ms-excel");
  }
  exportPDF() {
    const rows = this.filteredSubscriptions.map((s) => `<tr>
        <td>${s.id}</td><td>${s.user}</td><td>${s.email}</td>
        <td>${s.plan}</td><td>${s.amount} ${s.currency}</td>
        <td>${s.startDate}</td><td>${s.endDate}</td>
        <td>${s.status}</td>
      </tr>`).join("");
    const html = `<!DOCTYPE html><html><head><title>Subscriptions</title>
      <style>body{font-family:sans-serif;padding:20px}h2{color:#4f6ef7}
      table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;font-size:12px}
      th{background:#4f6ef7;color:#fff}tr:nth-child(even){background:#f9f9f9}</style></head>
      <body><h2>Subscriptions Report</h2>
      <p>Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p>
      <table><thead><tr><th>ID</th><th>User</th><th>Email</th><th>Plan</th><th>Amount</th><th>Start</th><th>End</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody></table></body></html>`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
      win.print();
    }
  }
  downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  onPaymentSubmitted(payment) {
    this.showToast("Payment submitted successfully");
    this.closeModal();
    this.loadFromBackend();
  }
  onPaymentCancelled() {
    this.closeModal();
  }
  showToast(msg) {
    this.toastMessage = msg;
    setTimeout(() => this.toastMessage = "", 3e3);
  }
  static {
    this.\u0275fac = function BoSubscriptionManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoSubscriptionManagementComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(SubscriptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoSubscriptionManagementComponent, selectors: [["app-bo-subscription-management"]], decls: 73, vars: 13, consts: [[1, "bo-page"], [1, "bo-tabs"], ["routerLink", "/backoffice/subscription-management", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-plan", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-pay", "routerLinkActive", "active", 1, "toggle-view"], [1, "bo-page-header"], [1, "btn-primary", 3, "click"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-val"], [1, "ms-label"], [1, "ms-val", "active-val"], [1, "ms-val", "cancelled-val"], [1, "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search subscribers...", 1, "bo-filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bo-filter-spacer"], [1, "btn-export", 3, "click"], [1, "bo-table-card"], [1, "bo-data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "user-cell"], [1, "avatar"], [1, "badge"], [1, "amount-cell"], [1, "badge", 3, "ngClass"], [1, "bo-actions-cell"], ["title", "View Details", 1, "btn-action", "view", 3, "click"], ["title", "Edit", 1, "btn-action", "edit", 3, "click"], ["title", "Upgrade Plan", 1, "btn-action", "upgrade", 3, "click"], ["title", "Delete", 1, "btn-action", "delete", 3, "click"], ["colspan", "8", 1, "bo-empty-row"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-grid", 3, "ngSubmit"], [1, "form-group", "full"], ["type", "text", "name", "user", "placeholder", "e.g. Karim Mansouri", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "e.g. karim@gmail.com", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["name", "plan", 3, "ngModelChange", "change", "ngModel"], ["value", "free"], ["value", "pro"], ["value", "elite"], ["type", "number", "name", "amount", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", "name", "startDate", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "nextBilling", 3, "ngModelChange", "ngModel", "disabled"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", "active"], ["value", "cancelled"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click"], [1, "detail-grid"], [1, "detail-item", "full"], [1, "detail-label"], [1, "detail-value"], [1, "detail-item"], [1, "detail-value", "amount-val"], [1, "modal-content", "modal-sm", 3, "click"], [1, "modal-header", "danger-header"], [1, "delete-msg"], [1, "delete-sub"], [1, "btn-danger", 3, "click"], [1, "modal-content", "modal-lg", 3, "click"], [1, "upgrade-section"], [1, "plan-selection"], ["class", "plan-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "payment-section", 4, "ngIf"], [1, "plan-card", 3, "click"], [1, "plan-icon"], [1, "plan-name"], [1, "plan-price"], [1, "plan-period"], [1, "payment-section"], [3, "paymentSubmitted", "paymentCancelled", "subscriptionId", "userId", "amount", "currency"]], template: function BoSubscriptionManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u{1F4CB} Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275text(5, "\u{1F4E6} Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275text(7, "\u{1F4B0} Payment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div")(10, "h1");
        \u0275\u0275text(11, "Subscription Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Monitor all user subscriptions and revenue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function BoSubscriptionManagementComponent_Template_button_click_14_listener() {
          return ctx.openAddSubscription();
        });
        \u0275\u0275text(15, "\u2795 Add Subscription");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "span", 9);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 10);
        \u0275\u0275text(21, "Total Subscribers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 8)(23, "span", 9);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275text(26, "Monthly Revenue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "span", 11);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 10);
        \u0275\u0275text(31, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 8)(33, "span", 12);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 10);
        \u0275\u0275text(36, "Cancelled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 13)(38, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionManagementComponent_Template_select_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPlanFilter, $event) || (ctx.selectedPlanFilter = $event);
          return $event;
        });
        \u0275\u0275template(40, BoSubscriptionManagementComponent_option_40_Template, 3, 4, "option", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "div", 17);
        \u0275\u0275elementStart(42, "button", 18);
        \u0275\u0275listener("click", function BoSubscriptionManagementComponent_Template_button_click_42_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(43, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 18);
        \u0275\u0275listener("click", function BoSubscriptionManagementComponent_Template_button_click_44_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275text(45, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 19)(47, "table", 20)(48, "thead")(49, "tr")(50, "th");
        \u0275\u0275text(51, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th");
        \u0275\u0275text(57, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Next Billing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "tbody");
        \u0275\u0275template(67, BoSubscriptionManagementComponent_tr_67_Template, 32, 21, "tr", 21)(68, BoSubscriptionManagementComponent_tr_68_Template, 3, 0, "tr", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(69, BoSubscriptionManagementComponent_div_69_Template, 52, 11, "div", 23)(70, BoSubscriptionManagementComponent_div_70_Template, 51, 19, "div", 23)(71, BoSubscriptionManagementComponent_div_71_Template, 25, 7, "div", 23)(72, BoSubscriptionManagementComponent_div_72_Template, 14, 3, "div", 23);
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.subscriptions.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.totalMRR, " TND");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.cancelledCount);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPlanFilter);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance(27);
        \u0275\u0275property("ngForOf", ctx.filteredSubscriptions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredSubscriptions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showViewModal && ctx.selectedSub);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteModal && ctx.subToDelete);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPaymentModal && ctx.subForUpgrade);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, SecurePaymentComponent, TitleCasePipe, DatePipe], styles: ["\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success);\n}\n.active-val[_ngcontent-%COMP%] {\n  color: var(--success, #10b981) !important;\n}\n.cancelled-val[_ngcontent-%COMP%] {\n  color: var(--danger, #ef4444) !important;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-lg);\n  width: 90%;\n  max-width: 540px;\n  max-height: 85vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n  box-shadow: var(--shadow-elevated);\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 14px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.1);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.danger-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  color: var(--text-secondary, #94a3b8);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid rgba(148, 163, 184, 0.1);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-item.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--bo-text-primary);\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .amount-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--success, #10b981);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary, #94a3b8);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: var(--bo-bg-primary);\n  border: 1px solid var(--bo-border);\n  border-radius: 10px;\n  color: var(--bo-text-primary);\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary);\n  opacity: 0.5;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: auto;\n}\n.form-group[_ngcontent-%COMP%]   .disabled-input[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 10px;\n  color: var(--text-secondary, #94a3b8);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.1);\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: #e8e8e7;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: #ef4444;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.delete-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #94a3b8);\n  line-height: 1.7;\n  margin: 0;\n}\n.delete-msg[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary, #e2e8f0);\n}\n.delete-msg[_ngcontent-%COMP%]   .delete-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary, #6366f1) !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #f59e0b !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #9ca3af !important;\n}\n.payment-method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-top: 10px;\n}\n.payment-method-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-primary);\n  border: 2px solid var(--bo-border);\n  border-radius: 12px;\n  padding: 24px 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n}\n.payment-method-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  background: rgba(99, 102, 241, 0.1);\n  transform: translateY(-2px);\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 4px;\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary, #94a3b8);\n}\n.success-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 24px;\n}\n.success-modal[_ngcontent-%COMP%]   .success-icon-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  font-size: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  animation: _ngcontent-%COMP%_scaleIn 0.4s ease;\n}\n.success-modal[_ngcontent-%COMP%]   .success-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-primary, #e2e8f0);\n  margin: 0 0 8px;\n}\n.success-modal[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #94a3b8);\n  margin: 0 0 16px;\n}\n.success-modal[_ngcontent-%COMP%]   .success-details[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary, #94a3b8);\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.success-modal[_ngcontent-%COMP%]   .success-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary, #e2e8f0);\n  font-weight: 700;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.btn-download-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 16px;\n}\n.btn-download-invoice[_ngcontent-%COMP%]   .pdf-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-download-invoice[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #d97706,\n      #b45309);\n}\n.bo-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--bo-border, #e5e7eb);\n  padding-bottom: 12px;\n}\n.toggle-view[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid var(--bo-border, #e5e7eb);\n  background: transparent;\n  color: var(--bo-text-secondary, #6b7280);\n  transition: all 0.2s;\n  font-family: var(--font-body, inherit);\n  text-decoration: none;\n}\n.toggle-view.active[_ngcontent-%COMP%] {\n  background: var(--primary, #3b82f6);\n  color: white;\n  border-color: var(--primary, #3b82f6);\n}\n.toggle-view[_ngcontent-%COMP%]:not(.active):hover {\n  border-color: var(--primary, #3b82f6);\n  color: var(--primary, #3b82f6);\n}\n.btn-action.upgrade[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.btn-action.upgrade[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n}\n.upgrade-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.upgrade-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 0 16px 0;\n  color: var(--bo-text-primary);\n  font-weight: 600;\n}\n.plan-selection[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 12px;\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: var(--bo-bg-primary);\n  border: 2px solid var(--bo-border);\n  border-radius: 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  background: rgba(99, 102, 241, 0.05);\n  transform: translateY(-2px);\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card.selected[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: var(--primary, #6366f1);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 8px;\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--bo-text-primary);\n  margin-bottom: 4px;\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--primary, #6366f1);\n  margin-bottom: 2px;\n}\n.plan-selection[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.payment-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 20px;\n  background: rgba(99, 102, 241, 0.05);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 12px;\n}\n.payment-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 0 16px 0;\n  color: var(--bo-text-primary);\n  font-weight: 600;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 700px;\n  max-height: 90vh;\n}\n.upgrade-plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 10px;\n  margin-top: 4px;\n}\n.upgrade-plan-card[_ngcontent-%COMP%] {\n  border: 2px solid #2d3348;\n  border-radius: 12px;\n  padding: 14px 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #1a1f2e;\n  position: relative;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]:hover:not(.current) {\n  border-color: var(--primary, #4f6ef7);\n  background: #1e2540;\n}\n.upgrade-plan-card.selected[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: rgba(34, 197, 94, 0.08);\n}\n.upgrade-plan-card.current[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]   .upc-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 4px;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]   .upc-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #e5e7eb;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]   .upc-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]   .upc-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #6b7280;\n  color: #fff;\n  font-size: 0.65rem;\n  padding: 2px 7px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.upgrade-plan-card[_ngcontent-%COMP%]   .selected-tag[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.row-new[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n  background: rgba(245, 158, 11, 0.04);\n}\n.new-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  background: #f59e0b;\n  color: #000;\n  font-size: 0.6rem;\n  font-weight: 800;\n  padding: 1px 5px;\n  border-radius: 4px;\n  vertical-align: middle;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=subscription-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoSubscriptionManagementComponent, { className: "BoSubscriptionManagementComponent", filePath: "src\\app\\backoffice\\subscription-management\\subscription-management.component.ts", lineNumber: 25 });
})();

// src/app/backoffice/user-management/user-management.component.ts
function UserManagementComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UserManagementComponent_button_10_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r2.id);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.count);
  }
}
function UserManagementComponent_tr_61_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2705 Verified");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_tr_61_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function UserManagementComponent_tr_61_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verifyUser(user_r6));
    });
    \u0275\u0275text(1, "Verify \u2192");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 30);
    \u0275\u0275element(21, "span", 31);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275template(25, UserManagementComponent_tr_61_span_25_Template, 2, 0, "span", 32)(26, UserManagementComponent_tr_61_button_26_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 34)(35, "button", 35);
    \u0275\u0275text(36, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 36);
    \u0275\u0275text(38, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 37);
    \u0275\u0275listener("click", function UserManagementComponent_tr_61_Template_button_click_39_listener() {
      const user_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBanModal(user_r6));
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("avatar-" + user_r6.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getInitials(user_r6.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", user_r6.city, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r2.getRoleClass(user_r6.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 22, user_r6.role));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r2.getPlanClass(user_r6.plan));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 24, user_r6.plan));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(user_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 26, user_r6.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r6.verified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r6.verified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.rating ? "\u2B50 " + user_r6.rating : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.projects);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 28, user_r6.joined, "MMM y"));
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate("title", user_r6.status === "banned" ? "Unban" : "Ban");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.status === "banned" ? "\u{1F513}" : "\u{1F6AB}", " ");
  }
}
function UserManagementComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No users found for this filter");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function UserManagementComponent_div_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBanModal = false);
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function UserManagementComponent_div_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Are you sure you want to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 44)(14, "button", 45);
    \u0275\u0275listener("click", function UserManagementComponent_div_63_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBanModal = false);
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 46);
    \u0275\u0275listener("click", function UserManagementComponent_div_63_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmBan());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.status) === "banned" ? "\u{1F513}" : "\u{1F6AB}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.status) === "banned" ? "Unban User" : "Ban User");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.status) === "banned" ? "unban" : "ban");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.name);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger", (ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.status) !== "banned");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Confirm ", (ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.status) === "banned" ? "Unban" : "Ban", " ");
  }
}
var UserManagementComponent = class _UserManagementComponent {
  constructor() {
    this.activeTab = "all";
    this.searchTerm = "";
    this.selectedRole = "all";
    this.selectedStatus = "all";
    this.showBanModal = false;
    this.selectedUser = null;
    this.tabs = [
      { id: "all", label: "All Users", count: 6 },
      { id: "freelancers", label: "Freelancers", count: 3 },
      { id: "clients", label: "Clients", count: 2 },
      { id: "admins", label: "Admins", count: 1 }
    ];
    this.users = [
      { id: 1, name: "Karim Mansouri", email: "karim@gmail.com", role: "freelancer", city: "Tunis", status: "active", verified: true, rating: 4.9, projects: 12, joined: "2024-10-01", plan: "pro" },
      { id: 2, name: "Sara Belhaj", email: "sara@gmail.com", role: "freelancer", city: "Sfax", status: "active", verified: true, rating: 4.7, projects: 8, joined: "2024-11-15", plan: "elite" },
      { id: 3, name: "Ahmed Riahi", email: "ahmed@gmail.com", role: "client", city: "Tunis", status: "active", verified: false, rating: null, projects: 3, joined: "2025-01-10", plan: "free" },
      { id: 4, name: "Yasmine Karoui", email: "yasmine@gmail.com", role: "freelancer", city: "Sousse", status: "banned", verified: true, rating: 4.2, projects: 5, joined: "2024-09-01", plan: "pro" },
      { id: 5, name: "Mohamed Ben Ali", email: "mba@gmail.com", role: "client", city: "Bizerte", status: "inactive", verified: false, rating: null, projects: 1, joined: "2025-02-01", plan: "free" },
      { id: 6, name: "Admin Matchy", email: "admin@matchy.tn", role: "admin", city: "Tunis", status: "active", verified: true, rating: null, projects: 0, joined: "2024-01-01", plan: "elite" }
    ];
  }
  get filteredUsers() {
    return this.users.filter((u) => {
      const matchTab = this.activeTab === "all" || this.activeTab === "freelancers" && u.role === "freelancer" || this.activeTab === "clients" && u.role === "client" || this.activeTab === "admins" && u.role === "admin";
      const matchSearch = !this.searchTerm || u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = this.selectedRole === "all" || u.role === this.selectedRole;
      const matchStatus = this.selectedStatus === "all" || u.status === this.selectedStatus;
      return matchTab && matchSearch && matchRole && matchStatus;
    });
  }
  ngOnInit() {
  }
  openBanModal(user) {
    this.selectedUser = user;
    this.showBanModal = true;
  }
  confirmBan() {
    if (this.selectedUser) {
      this.selectedUser.status = this.selectedUser.status === "banned" ? "active" : "banned";
    }
    this.showBanModal = false;
    this.selectedUser = null;
  }
  verifyUser(user) {
    user.verified = true;
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  getRoleClass(role) {
    return { admin: "danger", client: "primary", freelancer: "success" }[role] || "primary";
  }
  getPlanClass(plan) {
    return { free: "muted", pro: "primary", elite: "warning" }[plan] || "primary";
  }
  static {
    this.\u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserManagementComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 64, vars: 7, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "btn-primary"], [1, "tab-bar"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search users...", 1, "bo-filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "admin"], ["value", "client"], ["value", "freelancer"], ["value", "active"], ["value", "inactive"], ["value", "banned"], [1, "bo-filter-spacer"], [1, "btn-export"], [1, "bo-table-card"], [1, "bo-data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "user-cell"], [1, "avatar-circle"], [1, "user-detail"], [1, "user-name"], [1, "user-city"], [1, "badge"], [1, "status-chip"], [1, "dot"], ["class", "verified-badge", 4, "ngIf"], ["class", "btn-verify", 3, "click", 4, "ngIf"], [1, "bo-actions-cell"], ["title", "View profile", 1, "btn-action", "view"], ["title", "Edit user", 1, "btn-action", "edit"], [1, "btn-action", "delete", 3, "click", "title"], [1, "verified-badge"], [1, "btn-verify", 3, "click"], ["colspan", "10", 1, "bo-empty-row"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-icon"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"]], template: function UserManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "User Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Full control over all registered users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275text(8, "+ Add User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275template(10, UserManagementComponent_button_10_Template, 4, 4, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
          return $event;
        });
        \u0275\u0275elementStart(14, "option", 8);
        \u0275\u0275text(15, "All Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Freelancer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(23, "option", 8);
        \u0275\u0275text(24, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Inactive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 14);
        \u0275\u0275text(30, "Banned");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "div", 15);
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275text(33, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 16);
        \u0275\u0275text(35, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "table", 18)(38, "thead")(39, "tr")(40, "th");
        \u0275\u0275text(41, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th");
        \u0275\u0275text(51, "Verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th");
        \u0275\u0275text(57, "Joined");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "tbody");
        \u0275\u0275template(61, UserManagementComponent_tr_61_Template, 41, 31, "tr", 19)(62, UserManagementComponent_tr_62_Template, 3, 0, "tr", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(63, UserManagementComponent_div_63_Template, 18, 7, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(39);
        \u0275\u0275property("ngForOf", ctx.filteredUsers);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredUsers.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBanModal);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe, DatePipe], styles: ["\n\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: 10px;\n  padding: 4px;\n  width: fit-content;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 7px;\n  border: none;\n  background: transparent;\n  color: var(--bo-text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.tab-btn[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 18px;\n  padding: 0 5px;\n  background: rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar-circle.avatar-freelancer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7,\n      #6366f1);\n}\n.user-cell[_ngcontent-%COMP%]   .avatar-circle.avatar-client[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #4f6ef7);\n}\n.user-cell[_ngcontent-%COMP%]   .avatar-circle.avatar-admin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n}\n.user-cell[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-cell[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .user-city[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.status-chip.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n}\n.status-chip.inactive[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.status-chip.banned[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.status-chip.banned[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.verified-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #16a34a;\n  font-weight: 600;\n}\n.btn-verify[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: 6px;\n  background: rgba(79, 110, 247, 0.08);\n  color: var(--primary);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-verify[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.15);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  backdrop-filter: blur(4px);\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: 40px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-card[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.modal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  margin-bottom: 10px;\n}\n.modal-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  line-height: 1.6;\n}\n.modal-card[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 24px;\n}\n.modal-card[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: 1px solid var(--bo-border);\n  border-radius: 10px;\n  background: transparent;\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n}\n.modal-card[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  border-radius: 10px;\n  background: var(--success);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n}\n.modal-card[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-confirm.danger[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src\\app\\backoffice\\user-management\\user-management.component.ts", lineNumber: 8 });
})();

// src/app/backoffice/subscription-plan/subscription-plan.component.ts
function BoSubscriptionPlanComponent_div_29_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", plan_r2.currency, "/", ctx_r2.billingCycle === "monthly" ? "mo" : "yr", " ");
  }
}
function BoSubscriptionPlanComponent_div_29_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2248 ", \u0275\u0275pipeBind2(2, 2, plan_r2.price / 12, "1.0-0"), " ", plan_r2.currency, "/mo ");
  }
}
function BoSubscriptionPlanComponent_div_29_li_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 47);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const plan_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", plan_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r4, " ");
  }
}
function BoSubscriptionPlanComponent_div_29_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "\u2B50 Popular");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPlanComponent_div_29_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u2713 Current");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPlanComponent_div_29_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Free Tier");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPlanComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "button", 31);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_29_Template_button_click_5_listener() {
      const plan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(plan_r2));
    });
    \u0275\u0275text(6, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_29_Template_button_click_7_listener() {
      const plan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(plan_r2));
    });
    \u0275\u0275text(8, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "h3", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 35)(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, BoSubscriptionPlanComponent_div_29_span_16_Template, 2, 2, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, BoSubscriptionPlanComponent_div_29_div_17_Template, 3, 5, "div", 38);
    \u0275\u0275elementStart(18, "ul", 39);
    \u0275\u0275template(19, BoSubscriptionPlanComponent_div_29_li_19_Template, 4, 3, "li", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 41);
    \u0275\u0275template(21, BoSubscriptionPlanComponent_div_29_span_21_Template, 2, 0, "span", 42)(22, BoSubscriptionPlanComponent_div_29_span_22_Template, 2, 0, "span", 43)(23, BoSubscriptionPlanComponent_div_29_span_23_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-top-color", plan_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", plan_r2.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r2.icon);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", plan_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", plan_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r2.price === 0 ? "Free" : plan_r2.price, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r2.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.billingCycle === "yearly" && plan_r2.price > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", plan_r2.features);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r2.isPopular);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r2.isCurrent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r2.price === 0);
  }
}
function BoSubscriptionPlanComponent_div_30_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_button_39_Template_button_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.icon = i_r7);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.form.icon === i_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7);
  }
}
function BoSubscriptionPlanComponent_div_30_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_button_44_Template_button_click_0_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.color = c_r9);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", c_r9);
    \u0275\u0275classProp("active", ctx_r2.form.color === c_r9);
  }
}
function BoSubscriptionPlanComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "span", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 59)(17, "div", 60)(18, "label");
    \u0275\u0275text(19, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_div_30_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 60)(22, "label");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_div_30_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.price, $event) || (ctx_r2.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 63)(26, "label");
    \u0275\u0275text(27, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_div_30_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 63)(30, "label");
    \u0275\u0275text(31, "Features ");
    \u0275\u0275elementStart(32, "span", 65);
    \u0275\u0275text(33, "(one per line)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_div_30_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.features, $event) || (ctx_r2.form.features = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 60)(36, "label");
    \u0275\u0275text(37, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 67);
    \u0275\u0275template(39, BoSubscriptionPlanComponent_div_30_button_39_Template, 2, 3, "button", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 60)(41, "label");
    \u0275\u0275text(42, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 67);
    \u0275\u0275template(44, BoSubscriptionPlanComponent_div_30_button_44_Template, 1, 4, "button", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 60)(46, "label", 70)(47, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_div_30_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isPopular, $event) || (ctx_r2.form.isPopular = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Mark as Popular ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 72)(50, "button", 73);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 74);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_30_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "\u270F\uFE0F Edit Plan" : "\u2795 Create Plan");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("border-left-color", ctx_r2.form.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.form.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.form.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.form.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.form.name || "Plan Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.form.price === 0 ? "Free" : ctx_r2.form.price + " " + ctx_r2.form.currency + "/mo");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Price (", ctx_r2.form.currency, ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.features);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.icons);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.colors);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isPopular);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.form.color);
    \u0275\u0275property("disabled", !ctx_r2.form.name.trim() || !ctx_r2.form.description.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Save Changes" : "Create Plan", " ");
  }
}
function BoSubscriptionPlanComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 77);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 78)(3, "h2");
    \u0275\u0275text(4, "\u26A0\uFE0F Delete Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "p", 79);
    \u0275\u0275text(9, "Delete ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " plan? This cannot be undone.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 72)(14, "button", 73);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_31_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 80);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_31_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePlan());
    });
    \u0275\u0275text(17, "Delete Plan");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275styleProp("color", ctx_r2.planToDelete == null ? null : ctx_r2.planToDelete.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.planToDelete == null ? null : ctx_r2.planToDelete.name);
  }
}
function BoSubscriptionPlanComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.promoToast);
  }
}
function BoSubscriptionPlanComponent_p_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.promoInputError);
  }
}
function BoSubscriptionPlanComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1, " No promo codes yet. Add one above. ");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPlanComponent_div_51_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 87)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 90);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 91);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 92)(15, "button", 93);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_51_tr_17_Template_button_click_15_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyCode(p_r12.code));
    });
    \u0275\u0275text(16, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 94);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_51_tr_17_Template_button_click_17_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.togglePromoCode(p_r12));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 95);
    \u0275\u0275listener("click", function BoSubscriptionPlanComponent_div_51_tr_17_Template_button_click_19_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePromoCode(p_r12));
    });
    \u0275\u0275text(20, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275classProp("row-inactive", !p_r12.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r12.discountPercent, "% OFF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r12.usageCount, " use", p_r12.usageCount !== 1 ? "s" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(p_r12.active ? "badge-success" : "badge-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", p_r12.active ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.active ? "\u{1F534}" : "\u{1F7E2}", " ");
  }
}
function BoSubscriptionPlanComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "table", 85)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, BoSubscriptionPlanComponent_div_51_tr_17_Template, 21, 12, "tr", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.promoCodes);
  }
}
var BoSubscriptionPlanComponent = class _BoSubscriptionPlanComponent {
  constructor(subscriptionService, router, promoService) {
    this.subscriptionService = subscriptionService;
    this.router = router;
    this.promoService = promoService;
    this.plans = [];
    this.billingCycle = "monthly";
    this.showComparison = false;
    this.showModal = false;
    this.showDeleteModal = false;
    this.isEditing = false;
    this.editingPlan = null;
    this.planToDelete = null;
    this.form = this.getEmptyForm();
    this.icons = ["\u{1F331}", "\u26A1", "\u{1F451}", "\u{1F680}", "\u{1F48E}", "\u{1F525}", "\u2B50", "\u{1F3AF}", "\u{1F4BC}", "\u{1F3C6}"];
    this.colors = ["#6b7280", "#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#06b6d4"];
    this.promoCodes = [];
    this.promoToast = "";
    this.newPromoCodeInput = "";
    this.promoInputError = "";
  }
  ngOnInit() {
    this.loadPlans();
    this.loadPromoCodes();
  }
  loadPlans() {
    this.plans = this.subscriptionService.getPlans(this.billingCycle);
  }
  toggleBilling(cycle) {
    this.billingCycle = cycle;
    this.loadPlans();
  }
  toggleComparison() {
    this.router.navigate(["/backoffice/subscription-plan-comparison"]);
  }
  getEmptyForm() {
    return {
      id: "",
      name: "",
      price: 0,
      currency: "TND",
      description: "",
      features: "",
      isPopular: false,
      color: "#10b981",
      icon: "\u{1F331}"
    };
  }
  openAdd() {
    this.isEditing = false;
    this.form = this.getEmptyForm();
    this.showModal = true;
  }
  openEdit(plan) {
    this.isEditing = true;
    this.editingPlan = plan;
    this.form = {
      id: plan.id || "",
      name: plan.name,
      price: plan.price,
      currency: plan.currency,
      description: plan.description,
      features: (plan.features || []).join("\n"),
      isPopular: plan.isPopular || false,
      color: plan.color || "#10b981",
      icon: plan.icon || "\u{1F331}"
    };
    this.showModal = true;
  }
  save() {
    if (!this.form.name.trim() || !this.form.description.trim())
      return;
    const plan = {
      id: this.isEditing ? this.form.id : this.form.name.toLowerCase().replace(/\s+/g, "-"),
      name: this.form.name,
      price: this.form.price,
      currency: this.form.currency,
      billingCycle: "monthly",
      description: this.form.description,
      features: this.form.features.split("\n").map((f) => f.trim()).filter((f) => f),
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
  confirmDelete(plan) {
    this.planToDelete = plan;
    this.showDeleteModal = true;
  }
  deletePlan() {
    if (this.planToDelete && this.planToDelete.id !== void 0) {
      this.subscriptionService.deletePlan(this.planToDelete.id.toString());
      this.loadPlans();
      this.showDeleteModal = false;
      this.planToDelete = null;
    }
  }
  closeModal() {
    this.showModal = false;
    this.showDeleteModal = false;
  }
  loadPromoCodes() {
    this.promoService.getCodesObservable().subscribe((codes) => {
      this.promoCodes = codes;
    }, (error) => {
      console.error("Error loading promo codes:", error);
      this.promoCodes = this.promoService.getCodes();
    });
  }
  generatePromoCode() {
    this.promoService.generateCodeObservable().subscribe((code) => {
      this.loadPromoCodes();
      this.showPromoToast(`\u2705 Code generated: ${code.code}`);
    }, (error) => {
      console.error("Error generating code:", error);
      this.showPromoToast("\u274C Failed to generate code");
    });
  }
  addManualPromoCode() {
    const raw = this.newPromoCodeInput.trim().toUpperCase();
    if (!raw)
      return;
    if (!/^[A-Z0-9\-]{3,20}$/.test(raw)) {
      this.promoInputError = "Code must be 3\u201320 characters (letters, numbers, hyphens only).";
      return;
    }
    if (this.promoService.getCodes().some((c) => c.code === raw)) {
      this.promoInputError = "This code already exists.";
      return;
    }
    this.promoInputError = "";
    this.promoService.createCodeObservable(raw, 10).subscribe((createdCode) => {
      this.newPromoCodeInput = "";
      this.loadPromoCodes();
      this.showPromoToast(`\u2705 Code "${raw}" added to database`);
    }, (error) => {
      console.error("Error creating promo code:", error);
      this.promoInputError = error.error?.message || "Failed to create code";
    });
  }
  togglePromoCode(code) {
    if (!code.id) {
      console.error("Code ID is missing");
      return;
    }
    if (code.active) {
      this.promoService.deactivateCode(code.id).subscribe(() => {
        this.loadPromoCodes();
        this.showPromoToast(`\u{1F512} Code deactivated`);
      }, (error) => {
        console.error("Error deactivating code:", error);
        this.showPromoToast("\u274C Failed to deactivate code");
      });
    } else {
      this.promoService.reactivateCode(code.id).subscribe(() => {
        this.loadPromoCodes();
        this.showPromoToast(`\u2705 Code reactivated`);
      }, (error) => {
        console.error("Error reactivating code:", error);
        this.showPromoToast("\u274C Failed to reactivate code");
      });
    }
  }
  deletePromoCode(code) {
    if (!code.id) {
      console.error("Code ID is missing");
      return;
    }
    if (confirm(`Delete code "${code.code}"?`)) {
      this.promoService.deleteCodeObservable(code.id).subscribe(() => {
        this.loadPromoCodes();
        this.showPromoToast("\u{1F5D1} Code deleted");
      }, (error) => {
        console.error("Error deleting code:", error);
        this.showPromoToast("\u274C Failed to delete code");
      });
    }
  }
  copyCode(code) {
    navigator.clipboard.writeText(code).then(() => this.showPromoToast("\u{1F4CB} Copied to clipboard"));
  }
  showPromoToast(msg) {
    this.promoToast = msg;
    setTimeout(() => this.promoToast = "", 3e3);
  }
  getAllFeatures() {
    const all = /* @__PURE__ */ new Set();
    this.plans.forEach((p) => (p.features || []).forEach((f) => all.add(f)));
    return Array.from(all);
  }
  planHasFeature(plan, feature) {
    return (plan.features || []).includes(feature);
  }
  getYearlyPrice(price) {
    return Math.round(price * 12 * 0.8);
  }
  static {
    this.\u0275fac = function BoSubscriptionPlanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoSubscriptionPlanComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PromoCodeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoSubscriptionPlanComponent, selectors: [["app-bo-subscription-plan"]], decls: 52, vars: 13, consts: [[1, "bo-page"], [1, "bo-tabs"], ["routerLink", "/backoffice/subscription-management", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-plan", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-pay", "routerLinkActive", "active", 1, "toggle-view"], [1, "bo-page-header"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "btn-comparison-toggle", 3, "click"], [1, "billing-toggle-container"], [1, "billing-toggle"], [3, "click"], [1, "discount-tag"], [1, "plans-section"], [1, "plans-grid"], ["class", "plan-card", 3, "border-top-color", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "promo-section"], [1, "promo-header"], ["class", "bo-toast", "role", "status", 4, "ngIf"], [1, "promo-create-row"], ["type", "text", "placeholder", "Enter custom code (e.g. SUMMER10)", "maxlength", "20", 1, "promo-input-field", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-secondary", 3, "click"], ["class", "promo-input-error", 4, "ngIf"], ["class", "promo-empty", 4, "ngIf"], ["class", "promo-table-wrap", 4, "ngIf"], [1, "plan-card"], [1, "plan-card-top"], [1, "plan-icon"], [1, "plan-actions-top"], ["title", "Edit", 1, "action-btn", 3, "click"], ["title", "Delete", 1, "action-btn", "danger", 3, "click"], [1, "plan-name"], [1, "plan-description"], [1, "plan-pricing"], [1, "price-main"], ["class", "price-detail", 4, "ngIf"], ["class", "plan-monthly-equiv", 4, "ngIf"], [1, "feature-list"], [4, "ngFor", "ngForOf"], [1, "plan-tags"], ["class", "tag tag-popular", 4, "ngIf"], ["class", "tag tag-current", 4, "ngIf"], ["class", "tag tag-free", 4, "ngIf"], [1, "price-detail"], [1, "plan-monthly-equiv"], [1, "check-icon"], [1, "tag", "tag-popular"], [1, "tag", "tag-current"], [1, "tag", "tag-free"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "preview-bar"], [1, "preview-icon"], [1, "preview-price"], [1, "form-grid"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Starter, Pro...", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], [1, "form-group", "full"], ["type", "text", "placeholder", "Short plan description...", 3, "ngModelChange", "ngModel"], [1, "hint"], ["rows", "5", "placeholder", "Feature 1\nFeature 2\nFeature 3", 3, "ngModelChange", "ngModel"], [1, "picker"], ["class", "pick-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "pick-btn color-btn", 3, "active", "background", "click", 4, "ngFor", "ngForOf"], [1, "check-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click", "disabled"], [1, "pick-btn", 3, "click"], [1, "pick-btn", "color-btn", 3, "click"], [1, "modal-content", "modal-sm", 3, "click"], [1, "modal-header", "danger-header"], [1, "delete-msg"], [1, "btn-danger", 3, "click"], ["role", "status", 1, "bo-toast"], [1, "promo-input-error"], [1, "promo-empty"], [1, "promo-table-wrap"], [1, "bo-data-table"], [3, "row-inactive", 4, "ngFor", "ngForOf"], [1, "id-cell", "promo-code-cell"], [1, "badge", "badge-success"], [1, "promo-date"], [1, "promo-usage"], [1, "badge"], [1, "bo-actions-cell"], ["title", "Copy code", 1, "btn-action", "view", 3, "click"], [1, "btn-action", "edit", 3, "click", "title"], ["title", "Delete", 1, "btn-action", "delete", 3, "click"]], template: function BoSubscriptionPlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u{1F4CB} Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275text(5, "\u{1F4E6} Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275text(7, "\u{1F4B0} Payment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div")(10, "h1");
        \u0275\u0275text(11, "\u{1F4CB} Subscription Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Manage your subscription plans, pricing, and features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "button", 7);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_15_listener() {
          return ctx.openAdd();
        });
        \u0275\u0275text(16, "\u2795 Add Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_17_listener() {
          return ctx.toggleComparison();
        });
        \u0275\u0275text(18, " \u{1F4CA} View Plan Comparison Details ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "button", 11);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_21_listener() {
          return ctx.toggleBilling("monthly");
        });
        \u0275\u0275text(22, "Monthly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_23_listener() {
          return ctx.toggleBilling("yearly");
        });
        \u0275\u0275text(24, " Yearly ");
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26, "-20%");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 13)(28, "div", 14);
        \u0275\u0275template(29, BoSubscriptionPlanComponent_div_29_Template, 24, 18, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, BoSubscriptionPlanComponent_div_30_Template, 54, 22, "div", 16)(31, BoSubscriptionPlanComponent_div_31_Template, 18, 3, "div", 16);
        \u0275\u0275elementStart(32, "div", 17)(33, "div", 18)(34, "div")(35, "h2");
        \u0275\u0275text(36, "\u{1F39F}\uFE0F Promo Codes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "Create discount codes for users \u2014 each code gives ");
        \u0275\u0275elementStart(39, "strong");
        \u0275\u0275text(40, "10% off");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " any paid plan.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, BoSubscriptionPlanComponent_div_42_Template, 2, 1, "div", 19);
        \u0275\u0275elementStart(43, "div", 20)(44, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPlanComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newPromoCodeInput, $event) || (ctx.newPromoCodeInput = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function BoSubscriptionPlanComponent_Template_input_keyup_enter_44_listener() {
          return ctx.addManualPromoCode();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 22);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_45_listener() {
          return ctx.addManualPromoCode();
        });
        \u0275\u0275text(46, " \u2795 Add Code ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 23);
        \u0275\u0275listener("click", function BoSubscriptionPlanComponent_Template_button_click_47_listener() {
          return ctx.generatePromoCode();
        });
        \u0275\u0275text(48, " \u{1F3B2} Auto-Generate ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, BoSubscriptionPlanComponent_p_49_Template, 2, 1, "p", 24)(50, BoSubscriptionPlanComponent_div_50_Template, 2, 0, "div", 25)(51, BoSubscriptionPlanComponent_div_51_Template, 18, 1, "div", 26);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275classProp("active", ctx.billingCycle === "monthly");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.billingCycle === "yearly");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteModal);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.promoToast);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.newPromoCodeInput);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.newPromoCodeInput.trim());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.promoInputError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.promoCodes.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.promoCodes.length > 0);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel, DecimalPipe], styles: ["\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: stretch;\n  min-width: 200px;\n}\n.plans-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 5px;\n}\n.billing-toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 10px 0 20px;\n}\n.billing-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: #f8fafc;\n  padding: 6px;\n  border-radius: 12px;\n  width: fit-content;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.billing-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  color: #64748b;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.billing-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #6366f1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.billing-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(148, 163, 184, 0.1);\n  color: #475569;\n}\n.discount-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  background: rgba(34, 197, 94, 0.2);\n  color: #22c55e;\n  border-radius: 4px;\n  font-size: 10px;\n  margin-left: 4px;\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 20px;\n  width: 100%;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  border-top: 4px solid;\n  border-radius: 18px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.plan-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.plan-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.plan-actions-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.12);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.plan-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary, #94a3b8);\n  margin: 0 0 14px;\n  line-height: 1.4;\n}\n.plan-pricing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.plan-pricing[_ngcontent-%COMP%]   .price-main[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  font-family: var(--font-display, inherit);\n}\n.plan-pricing[_ngcontent-%COMP%]   .price-detail[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary, #94a3b8);\n}\n.plan-monthly-equiv[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary, #94a3b8);\n  margin-bottom: 14px;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 14px 0;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary, #94a3b8);\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.feature-list[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n}\n.plan-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n.plan-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-weight: 600;\n}\n.plan-tags[_ngcontent-%COMP%]   .tag-popular[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.plan-tags[_ngcontent-%COMP%]   .tag-current[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.plan-tags[_ngcontent-%COMP%]   .tag-free[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.15);\n  color: #9ca3af;\n}\n.comparison-section[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.comparison-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary, #e2e8f0);\n  margin-bottom: 14px;\n}\n.comparison-table[_ngcontent-%COMP%]   .has-feature[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n.comparison-table[_ngcontent-%COMP%]   .no-feature[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #64748b);\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--card-bg, #1e293b);\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  border-radius: 16px;\n  width: 90%;\n  max-width: 560px;\n  max-height: 85vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 14px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.1);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: var(--text-primary, #e2e8f0);\n}\n.danger-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  color: var(--text-secondary, #94a3b8);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid rgba(148, 163, 184, 0.1);\n}\n.preview-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: rgba(15, 23, 42, 0.5);\n  border-radius: 10px;\n  border-left: 3px solid;\n  margin-bottom: 18px;\n}\n.preview-bar[_ngcontent-%COMP%]   .preview-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.preview-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n}\n.preview-bar[_ngcontent-%COMP%]   .preview-price[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary, #94a3b8);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary, #94a3b8);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-weight: 400;\n  opacity: 0.7;\n  letter-spacing: 0;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  border-radius: 10px;\n  color: var(--text-primary, #e2e8f0);\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(148, 163, 184, 0.4);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\n.picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.pick-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 2px solid rgba(148, 163, 184, 0.1);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  background: rgba(15, 23, 42, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.pick-btn.active[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.7);\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);\n  transform: scale(1.1);\n}\n.pick-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.3);\n}\n.color-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n}\n.color-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.check-label[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  text-transform: none !important;\n  letter-spacing: 0 !important;\n  font-size: 13px !important;\n  color: var(--text-primary, #e2e8f0) !important;\n}\n.check-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #f59e0b;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 10px;\n  color: var(--text-secondary, #94a3b8);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.1);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-comparison-toggle[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-comparison-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);\n}\n.delete-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #94a3b8);\n  line-height: 1.6;\n  margin: 0;\n}\n.bo-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--bo-border, #e5e7eb);\n  padding-bottom: 12px;\n}\n.toggle-view[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid var(--bo-border, #e5e7eb);\n  background: transparent;\n  color: var(--bo-text-secondary, #6b7280);\n  transition: all 0.2s;\n  font-family: var(--font-body, inherit);\n  text-decoration: none;\n}\n.toggle-view.active[_ngcontent-%COMP%] {\n  background: var(--primary, #3b82f6);\n  color: white;\n  border-color: var(--primary, #3b82f6);\n}\n.toggle-view[_ngcontent-%COMP%]:not(.active):hover {\n  border-color: var(--primary, #3b82f6);\n  color: var(--primary, #3b82f6);\n}\n.promo-section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 24px;\n  background: #1a1f2e;\n  border-radius: 16px;\n  border: 1px solid #2d3348;\n}\n.promo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.promo-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #ffffff;\n  margin: 0 0 4px;\n}\n.promo-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #d1d5db;\n  margin: 0;\n}\n.promo-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.promo-create-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.promo-input-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 9px 14px;\n  background: #0f1117;\n  border: 1px solid #2d3348;\n  border-radius: 8px;\n  color: #ffffff;\n  font-size: 0.9rem;\n  font-family: monospace;\n  letter-spacing: 0.05em;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.promo-input-field[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.promo-input-field[_ngcontent-%COMP%]:focus {\n  border-color: #4f6ef7;\n}\n.promo-input-error[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-size: 0.8rem;\n  margin: 0 0 12px;\n}\n.promo-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 0.9rem;\n  border: 1px dashed #2d3348;\n  border-radius: 10px;\n  margin-top: 16px;\n}\n.promo-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 16px;\n}\n.promo-code-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: monospace;\n  font-size: 0.95rem;\n  letter-spacing: 0.05em;\n}\n.promo-date[_ngcontent-%COMP%], \n.promo-usage[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n/*# sourceMappingURL=subscription-plan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoSubscriptionPlanComponent, { className: "BoSubscriptionPlanComponent", filePath: "src\\app\\backoffice\\subscription-plan\\subscription-plan.component.ts", lineNumber: 12 });
})();

// src/app/backoffice/subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component.ts
function SubscriptionPlanComparisonComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    \u0275\u0275styleProp("color", plan_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r1.name, " ");
  }
}
function SubscriptionPlanComparisonComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", plan_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r2.price === 0 ? "Free" : plan_r2.price + " " + plan_r2.currency, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r2.billingCycle === "monthly" ? "mo" : "yr", "");
  }
}
function SubscriptionPlanComparisonComponent_tr_22_td_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", plan_r4.color);
  }
}
function SubscriptionPlanComparisonComponent_tr_22_td_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComparisonComponent_tr_22_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, SubscriptionPlanComparisonComponent_tr_22_td_3_span_1_Template, 2, 2, "span", 13)(2, SubscriptionPlanComparisonComponent_tr_22_td_3_span_2_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    const feature_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.planHasFeature(plan_r4, feature_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.planHasFeature(plan_r4, feature_r5));
  }
}
function SubscriptionPlanComparisonComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionPlanComparisonComponent_tr_22_td_3_Template, 3, 2, "td", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.plans);
  }
}
var SubscriptionPlanComparisonComponent = class _SubscriptionPlanComparisonComponent {
  constructor(subscriptionService, router) {
    this.subscriptionService = subscriptionService;
    this.router = router;
    this.plans = [];
    this.billingCycle = "monthly";
  }
  ngOnInit() {
    this.loadPlans();
  }
  loadPlans() {
    this.plans = this.subscriptionService.getPlans(this.billingCycle);
  }
  getAllFeatures() {
    const all = /* @__PURE__ */ new Set();
    this.plans.forEach((p) => (p.features || []).forEach((f) => all.add(f)));
    return Array.from(all);
  }
  planHasFeature(plan, feature) {
    return (plan.features || []).includes(feature);
  }
  goBack() {
    this.router.navigate(["/backoffice/subscription-plan"]);
  }
  static {
    this.\u0275fac = function SubscriptionPlanComparisonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionPlanComparisonComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlanComparisonComponent, selectors: [["app-subscription-plan-comparison"]], decls: 23, vars: 3, consts: [[1, "bo-page"], [1, "bo-page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-primary", 3, "click"], [1, "bo-table-card"], [1, "bo-data-table", "comparison-table"], ["class", "plan-header", 3, "color", 4, "ngFor", "ngForOf"], [1, "price-row"], [4, "ngFor", "ngForOf"], [1, "plan-header"], [1, "plan-icon"], [1, "sub-price"], ["class", "has-feature", 3, "color", 4, "ngIf"], ["class", "no-feature", 4, "ngIf"], [1, "has-feature"], [1, "no-feature"]], template: function SubscriptionPlanComparisonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F4CA} Plan Comparison Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Deep dive into feature availability across all tiers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function SubscriptionPlanComparisonComponent_Template_button_click_7_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(8, "\u2B05 Back to Plans");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "table", 6)(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14, "Feature");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, SubscriptionPlanComparisonComponent_th_15_Template, 4, 4, "th", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "tbody")(17, "tr", 8)(18, "td")(19, "strong");
        \u0275\u0275text(20, "Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, SubscriptionPlanComparisonComponent_td_21_Template, 5, 4, "td", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, SubscriptionPlanComparisonComponent_tr_22_Template, 4, 2, "tr", 9);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.getAllFeatures());
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n}\n.comparison-table[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.comparison-table[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n}\n.comparison-table[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.02);\n}\n.comparison-table[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n}\n.comparison-table[_ngcontent-%COMP%]   .price-row[_ngcontent-%COMP%]   .sub-price[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.6;\n  font-weight: 400;\n}\n.comparison-table[_ngcontent-%COMP%]   .has-feature[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.comparison-table[_ngcontent-%COMP%]   .no-feature[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=subscription-plan-comparison.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlanComparisonComponent, { className: "SubscriptionPlanComparisonComponent", filePath: "src\\app\\backoffice\\subscription-plan\\subscription-plan-comparison\\subscription-plan-comparison.component.ts", lineNumber: 11 });
})();

// src/app/backoffice/subscription-pay/subscription-pay.component.ts
function BoSubscriptionPayComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.toastMessage);
  }
}
function BoSubscriptionPayComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2 === "all" ? "All Status" : \u0275\u0275pipeBind1(2, 2, s_r2));
  }
}
function BoSubscriptionPayComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("value", m_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3 === "all" ? "All Methods" : \u0275\u0275pipeBind1(2, 2, m_r3));
  }
}
function BoSubscriptionPayComponent_tr_74_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "NEW");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_tr_74_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openApprove(p_r6));
    });
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_tr_74_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openReject(p_r6));
    });
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_tr_74_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openRefund(p_r6));
    });
    \u0275\u0275text(1, "\u21A9\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29)(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 37);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, BoSubscriptionPayComponent_tr_74_span_27_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 39);
    \u0275\u0275template(29, BoSubscriptionPayComponent_tr_74_button_29_Template, 2, 0, "button", 40)(30, BoSubscriptionPayComponent_tr_74_button_30_Template, 2, 0, "button", 41);
    \u0275\u0275elementStart(31, "button", 42);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_Template_button_click_31_listener() {
      const p_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetail(p_r6));
    });
    \u0275\u0275text(32, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 43);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_Template_button_click_33_listener() {
      const p_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEdit(p_r6));
    });
    \u0275\u0275text(34, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 44);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_tr_74_Template_button_click_35_listener() {
      const p_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deletePayment(p_r6));
    });
    \u0275\u0275text(36, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, BoSubscriptionPayComponent_tr_74_button_37_Template, 2, 0, "button", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row-failed", p_r6.status === "failed")("row-refunded", p_r6.status === "refunded")("row-new", p_r6.isNew && p_r6.status === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r6.user[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r6.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pro", p_r6.plan === "Pro")("elite", p_r6.plan === "Premium");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r6.amount, " ", p_r6.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.getMethodIcon(p_r6.method), " ", \u0275\u0275pipeBind1(19, 27, p_r6.method), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 29, p_r6.date, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStatusClass(p_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 32, p_r6.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r6.isNew && p_r6.status === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r6.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6.status === "pending");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", p_r6.status === "completed" || p_r6.status === "approved");
  }
}
function BoSubscriptionPayComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2, "No payments found");
    \u0275\u0275elementEnd()();
  }
}
function BoSubscriptionPayComponent_div_76_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 58);
    \u0275\u0275text(2, "Rejection Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.rejectionReason);
  }
}
function BoSubscriptionPayComponent_div_76_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_76_button_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRefund(ctx_r0.selectedPayment));
    });
    \u0275\u0275text(1, "\u21A9\uFE0F Refund");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_76_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_76_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "h2");
    \u0275\u0275text(4, "\u{1F9FE} Payment Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "div", 57)(10, "span", 58);
    \u0275\u0275text(11, "Payment ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 59);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57)(15, "span", 58);
    \u0275\u0275text(16, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57)(20, "span", 58);
    \u0275\u0275text(21, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 60);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 57)(25, "span", 58);
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 60);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 57)(30, "span", 58);
    \u0275\u0275text(31, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 60);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 57)(35, "span", 58);
    \u0275\u0275text(36, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 61);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 57)(40, "span", 58);
    \u0275\u0275text(41, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 60);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 57)(46, "span", 58);
    \u0275\u0275text(47, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 60);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 62)(52, "span", 58);
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 37);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, BoSubscriptionPayComponent_div_76_div_57_Template, 5, 1, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 64)(59, "button", 65);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_76_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(60, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, BoSubscriptionPayComponent_div_76_button_61_Template, 2, 0, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.transactionId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.user);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedPayment.plan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedPayment.amount, " ", ctx_r0.selectedPayment.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.getMethodIcon(ctx_r0.selectedPayment.method), " ", \u0275\u0275pipeBind1(44, 15, ctx_r0.selectedPayment.method), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 17, ctx_r0.selectedPayment.date, "MMMM d, y"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.getStatusClass(ctx_r0.selectedPayment.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 20, ctx_r0.selectedPayment.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedPayment.rejectionReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.selectedPayment.status === "completed");
  }
}
function BoSubscriptionPayComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_77_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_77_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "h2");
    \u0275\u0275text(4, "\u21A9\uFE0F Confirm Refund");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "p", 71);
    \u0275\u0275text(9, " Refund ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " to ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "?");
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "span", 72);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 64)(20, "button", 65);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_77_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 68);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_77_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmRefund());
    });
    \u0275\u0275text(23, "Confirm Refund");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r0.paymentToRefund.amount, " ", ctx_r0.paymentToRefund.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentToRefund.user);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Payment ", ctx_r0.paymentToRefund.id, " - ", ctx_r0.paymentToRefund.plan, " plan");
  }
}
function BoSubscriptionPayComponent_div_78_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 Confirm Approval");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_78_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Processing...");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_78_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_78_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 73)(3, "h2");
    \u0275\u0275text(4, "\u2705 Approve Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "div", 57)(10, "span", 58);
    \u0275\u0275text(11, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57)(15, "span", 58);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57)(20, "span", 58);
    \u0275\u0275text(21, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 60)(23, "span", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 57)(26, "span", 58);
    \u0275\u0275text(27, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 61);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 57)(31, "span", 58);
    \u0275\u0275text(32, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 60);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 57)(37, "span", 58);
    \u0275\u0275text(38, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 59);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 62)(42, "span", 58);
    \u0275\u0275text(43, "Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 75);
    \u0275\u0275text(45, "PENDING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 76);
    \u0275\u0275text(47, "\u2192 will change to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 77);
    \u0275\u0275text(49, "COMPLETED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "p", 78);
    \u0275\u0275text(51, " By approving, the subscription will be ");
    \u0275\u0275elementStart(52, "strong");
    \u0275\u0275text(53, "activated");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " and the user will receive a ");
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56, "confirmation email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 64)(59, "button", 79);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_78_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(60, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 80);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_78_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmApprove());
    });
    \u0275\u0275template(62, BoSubscriptionPayComponent_div_78_span_62_Template, 2, 0, "span", 24)(63, BoSubscriptionPayComponent_div_78_span_63_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.paymentToApprove.user);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentToApprove.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.paymentToApprove.plan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.paymentToApprove.amount, " ", ctx_r0.paymentToApprove.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.getMethodIcon(ctx_r0.paymentToApprove.method), " ", \u0275\u0275pipeBind1(35, 12, ctx_r0.paymentToApprove.method), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.paymentToApprove.transactionId);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProcessing);
  }
}
function BoSubscriptionPayComponent_div_79_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275text(1, " \u26A0\uFE0F A rejection reason is required. ");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_79_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C Confirm Rejection");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_79_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Processing...");
    \u0275\u0275elementEnd();
  }
}
function BoSubscriptionPayComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_79_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_79_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "h2");
    \u0275\u0275text(4, "\u274C Reject Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_79_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "div", 57)(10, "span", 58);
    \u0275\u0275text(11, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57)(15, "span", 58);
    \u0275\u0275text(16, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 61);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57)(20, "span", 58);
    \u0275\u0275text(21, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 60);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 57)(25, "span", 58);
    \u0275\u0275text(26, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 60);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 62)(31, "span", 58);
    \u0275\u0275text(32, "Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 75);
    \u0275\u0275text(34, "PENDING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 76);
    \u0275\u0275text(36, "\u2192 will change to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 81);
    \u0275\u0275text(38, "FAILED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 82)(40, "label", 83);
    \u0275\u0275text(41, " Rejection Reason ");
    \u0275\u0275elementStart(42, "span", 84);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 85);
    \u0275\u0275text(45, " (sent to the user by email)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "textarea", 86);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_79_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectReason, $event) || (ctx_r0.rejectReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, BoSubscriptionPayComponent_div_79_p_47_Template, 2, 0, "p", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 64)(49, "button", 79);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_79_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(50, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 88);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_79_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmReject());
    });
    \u0275\u0275template(52, BoSubscriptionPayComponent_div_79_span_52_Template, 2, 0, "span", 24)(53, BoSubscriptionPayComponent_div_79_span_53_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.paymentToReject.user);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.paymentToReject.amount, " ", ctx_r0.paymentToReject.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentToReject.plan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.getMethodIcon(ctx_r0.paymentToReject.method), " ", \u0275\u0275pipeBind1(29, 12, ctx_r0.paymentToReject.method), "");
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.rejectReasonError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProcessing);
  }
}
function BoSubscriptionPayComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "form", 90);
    \u0275\u0275listener("ngSubmit", function BoSubscriptionPayComponent_div_80_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePayment());
    });
    \u0275\u0275elementStart(9, "div", 91)(10, "label");
    \u0275\u0275text(11, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.user, $event) || (ctx_r0.newPayment.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 91)(14, "label");
    \u0275\u0275text(15, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.email, $event) || (ctx_r0.newPayment.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 94)(18, "label");
    \u0275\u0275text(19, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.plan, $event) || (ctx_r0.newPayment.plan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 96);
    \u0275\u0275text(22, "Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 97);
    \u0275\u0275text(24, "Premium");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 94)(26, "label");
    \u0275\u0275text(27, "Amount (TND)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.amount, $event) || (ctx_r0.newPayment.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 94)(30, "label");
    \u0275\u0275text(31, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 99);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.method, $event) || (ctx_r0.newPayment.method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 100);
    \u0275\u0275text(34, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 101);
    \u0275\u0275text(36, "PayPal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 102);
    \u0275\u0275text(38, "Bank Transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 103);
    \u0275\u0275text(40, "Mobile");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 94)(42, "label");
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 104);
    \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_div_80_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPayment.status, $event) || (ctx_r0.newPayment.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(45, "option", 105);
    \u0275\u0275text(46, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 106);
    \u0275\u0275text(48, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 107);
    \u0275\u0275text(50, "Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 108);
    \u0275\u0275text(52, "Refunded");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 64)(54, "button", 65);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_80_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 109);
    \u0275\u0275listener("click", function BoSubscriptionPayComponent_div_80_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePayment());
    });
    \u0275\u0275text(57, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2795 ", ctx_r0.isEditMode ? "Edit Payment" : "Add Payment", "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.user);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.plan);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.method);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPayment.status);
  }
}
var BoSubscriptionPayComponent = class _BoSubscriptionPayComponent {
  constructor(http) {
    this.http = http;
    this.API_URL = "http://localhost:8081";
    this.searchTerm = "";
    this.selectedStatus = "all";
    this.selectedMethod = "all";
    this.statuses = ["all", "completed", "pending", "failed", "refunded", "approved"];
    this.methods = ["all", "card", "paypal", "bank_transfer", "mobile"];
    this.toastMessage = "";
    this.isLoadingPayments = false;
    this.payments = [];
    this.showDetail = false;
    this.selectedPayment = null;
    this.showRefundModal = false;
    this.paymentToRefund = null;
    this.showRejectModal = false;
    this.paymentToReject = null;
    this.rejectReason = "";
    this.rejectReasonError = false;
    this.showApproveModal = false;
    this.paymentToApprove = null;
    this.approveNotes = "";
    this.isProcessing = false;
    this.showAddModal = false;
    this.newPayment = this.initNewPayment();
    this.isEditMode = false;
    this.editingId = null;
  }
  ngOnInit() {
    this.loadPaymentsFromBackend();
  }
  loadPaymentsFromBackend() {
    this.isLoadingPayments = true;
    this.http.get(`${this.API_URL}/payment`).subscribe((data) => {
      this.payments = data.map((p) => {
        let planName = "Unknown";
        if (p.subscription?.plan?.name) {
          planName = p.subscription.plan.name;
          planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
        } else if (p.amount !== void 0 && p.amount !== null) {
          if (p.amount === 0) {
            planName = "Free";
          } else if (p.amount >= 20 && p.amount <= 40) {
            planName = "Pro";
          } else if (p.amount >= 50 && p.amount <= 100) {
            planName = "Premium";
          } else if (p.amount > 100) {
            planName = "Elite";
          } else {
            planName = "Pro";
          }
        } else if (p.subscription?.planName) {
          planName = p.subscription.planName;
          planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
        }
        return {
          id: p.id || `PAY-${p.id}`,
          userId: p.user?.id,
          user: p.user ? `${p.user.firstName || ""} ${p.user.lastName || ""}`.trim() || p.user.email || p.cardholderName || "Unknown" : p.cardholderName || "Unknown",
          email: p.user?.email || "",
          plan: planName,
          amount: p.amount || 0,
          currency: p.currency || "TND",
          method: (p.method || "card").toLowerCase(),
          status: (p.status || "pending").toLowerCase(),
          date: p.transactionDate ? new Date(p.transactionDate).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          transactionId: p.transactionRef || `TXN-${p.id}`,
          rejectionReason: p.adminNotes,
          submittedAt: p.submittedAt ? new Date(p.submittedAt).toISOString().split("T")[0] : void 0,
          approvedAt: p.approvedAt ? new Date(p.approvedAt).toISOString().split("T")[0] : void 0
        };
      });
      this.isLoadingPayments = false;
      console.log(`\u2705 Loaded ${this.payments.length} payments from backend`);
      const unknownPlans = this.payments.filter((p) => p.plan === "Unknown").length;
      if (unknownPlans > 0) {
        console.warn(`\u26A0\uFE0F ${unknownPlans} payment(s) have Unknown plan - check database`);
      }
    }, (error) => {
      console.error("Error loading payments:", error);
      this.isLoadingPayments = false;
      this.loadMockPayments();
    });
  }
  loadMockPayments() {
    this.payments = [
      {
        id: "PAY-001",
        user: "Karim Mansouri",
        email: "karim@gmail.com",
        plan: "Pro",
        amount: 29,
        currency: "TND",
        method: "card",
        status: "completed",
        date: "2025-03-01",
        transactionId: "TXN-A7B3C9D2E",
        approvedAt: "2025-03-01"
      },
      {
        id: "PAY-002",
        user: "Sara Belhaj",
        email: "sara@gmail.com",
        plan: "Premium",
        amount: 69,
        currency: "TND",
        method: "card",
        status: "completed",
        date: "2025-02-28",
        transactionId: "TXN-F1G4H8J5K",
        approvedAt: "2025-02-28"
      },
      {
        id: "PAY-003",
        user: "Ahmed Riahi",
        email: "ahmed@gmail.com",
        plan: "Pro",
        amount: 29,
        currency: "TND",
        method: "bank_transfer",
        status: "pending",
        date: "2025-02-27",
        transactionId: "TXN-L2M6N9P3Q",
        submittedAt: "2025-02-27"
      },
      {
        id: "PAY-004",
        user: "Yasmine Karoui",
        email: "yasmine@gmail.com",
        plan: "Pro",
        amount: 29,
        currency: "TND",
        method: "card",
        status: "failed",
        date: "2025-02-25",
        transactionId: "TXN-R4S7T1U5V",
        rejectionReason: "Insufficient funds"
      },
      {
        id: "PAY-005",
        user: "Mehdi Trabelsi",
        email: "mehdi@gmail.com",
        plan: "Premium",
        amount: 69,
        currency: "TND",
        method: "mobile",
        status: "completed",
        date: "2025-02-20",
        transactionId: "TXN-W8X2Y6Z0A",
        approvedAt: "2025-02-20"
      },
      {
        id: "PAY-006",
        user: "Nour Hamdi",
        email: "nour@gmail.com",
        plan: "Pro",
        amount: 29,
        currency: "TND",
        method: "card",
        status: "refunded",
        date: "2025-02-18",
        transactionId: "TXN-B3C7D1E5F"
      },
      {
        id: "PAY-007",
        user: "Omar Jaziri",
        email: "omar@gmail.com",
        plan: "Premium",
        amount: 69,
        currency: "TND",
        method: "card",
        status: "completed",
        date: "2025-02-15",
        transactionId: "TXN-G9H2J4K8L",
        approvedAt: "2025-02-15"
      },
      {
        id: "PAY-008",
        user: "Leila Ben Ali",
        email: "leila@gmail.com",
        plan: "Pro",
        amount: 29,
        currency: "TND",
        method: "paypal",
        status: "pending",
        date: "2025-03-05",
        transactionId: "TXN-M3N7O1P4Q",
        submittedAt: "2025-03-05"
      }
    ];
  }
  initNewPayment() {
    return {
      user: "",
      email: "",
      plan: "Pro",
      amount: 29,
      currency: "TND",
      method: "card",
      status: "completed"
    };
  }
  get filteredPayments() {
    return this.payments.filter((p) => {
      const matchStatus = this.selectedStatus === "all" || p.status === this.selectedStatus;
      const matchMethod = this.selectedMethod === "all" || p.method === this.selectedMethod;
      const matchSearch = !this.searchTerm || p.user.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.id.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.transactionId.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchStatus && matchMethod && matchSearch;
    });
  }
  get totalRevenue() {
    return this.payments.filter((p) => p.status === "completed" || p.status === "approved").reduce((s, p) => s + p.amount, 0);
  }
  get completedCount() {
    return this.payments.filter((p) => p.status === "completed" || p.status === "approved").length;
  }
  get pendingCount() {
    return this.payments.filter((p) => p.status === "pending").length;
  }
  get failedCount() {
    return this.payments.filter((p) => p.status === "failed").length;
  }
  getStatusClass(status) {
    return {
      completed: "badge-success",
      approved: "badge-success",
      pending: "badge-warning",
      failed: "badge-danger",
      refunded: "badge-muted"
    }[status] || "badge-muted";
  }
  getMethodIcon(method) {
    const m = {
      card: "\u{1F4B3}",
      paypal: "\u{1F17F}\uFE0F",
      bank_transfer: "\u{1F3E6}",
      mobile: "\u{1F4F1}"
    };
    return m[method] || "\u{1F4B0}";
  }
  viewDetail(payment) {
    this.selectedPayment = payment;
    this.showDetail = true;
  }
  openRefund(payment) {
    this.paymentToRefund = payment;
    this.showRefundModal = true;
  }
  confirmRefund() {
    if (this.paymentToRefund) {
      const idx = this.payments.findIndex((p) => p.id === this.paymentToRefund.id);
      if (idx >= 0) {
        this.payments[idx] = __spreadProps(__spreadValues({}, this.payments[idx]), { status: "refunded" });
      }
      this.showRefundModal = false;
      this.paymentToRefund = null;
      this.showToast("Paiement rembours\xE9 avec succ\xE8s");
    }
  }
  openApprove(payment) {
    this.paymentToApprove = payment;
    this.approveNotes = "";
    this.showApproveModal = true;
  }
  confirmApprove() {
    if (this.paymentToApprove) {
      this.isProcessing = true;
      const cleanId = this.paymentToApprove.id.toString().replace("PAY-", "");
      const url = `${this.API_URL}/payment/${cleanId}/approve?adminNotes=${encodeURIComponent(this.approveNotes)}`;
      this.http.post(url, {}).subscribe((response) => {
        this.isProcessing = false;
        this.showApproveModal = false;
        this.paymentToApprove = null;
        this.approveNotes = "";
        this.showToast("\u2705 Paiement approuv\xE9 avec succ\xE8s - Subscription activ\xE9e");
        this.loadPaymentsFromBackend();
        window.dispatchEvent(new CustomEvent("paymentApproved", { detail: { message: "Payment approved, subscription activated" } }));
      }, (error) => {
        console.error("Error approving payment:", error);
        this.isProcessing = false;
        this.showApproveModal = false;
        this.paymentToApprove = null;
        this.approveNotes = "";
        this.showToast("\u274C Erreur: " + (error?.error || error?.message || "V\xE9rifiez le backend"));
      });
    }
  }
  openReject(payment) {
    this.paymentToReject = payment;
    this.rejectReason = "";
    this.showRejectModal = true;
  }
  confirmReject() {
    if (this.paymentToReject && this.rejectReason.trim()) {
      this.isProcessing = true;
      const cleanId = this.paymentToReject.id.toString().replace("PAY-", "");
      const url = `${this.API_URL}/payment/${cleanId}/reject?reason=${encodeURIComponent(this.rejectReason)}`;
      this.http.post(url, {}).subscribe((response) => {
        this.isProcessing = false;
        this.showRejectModal = false;
        this.paymentToReject = null;
        this.rejectReason = "";
        this.rejectReasonError = false;
        this.showToast("\u274C Paiement rejet\xE9 - Email envoy\xE9 \xE0 l'utilisateur");
        this.loadPaymentsFromBackend();
      }, (error) => {
        console.error("Error rejecting payment:", error);
        this.isProcessing = false;
        this.showRejectModal = false;
        this.paymentToReject = null;
        this.rejectReason = "";
        this.rejectReasonError = false;
        this.showToast("\u274C Erreur: " + (error?.error || error?.message || "V\xE9rifiez le backend"));
      });
    } else {
      this.rejectReasonError = true;
    }
  }
  closeModal() {
    this.showDetail = false;
    this.showRefundModal = false;
    this.showAddModal = false;
    this.showRejectModal = false;
    this.showApproveModal = false;
    this.selectedPayment = null;
    this.paymentToRefund = null;
    this.paymentToReject = null;
    this.paymentToApprove = null;
  }
  openAddModal() {
    this.isEditMode = false;
    this.editingId = null;
    this.newPayment = this.initNewPayment();
    this.showAddModal = true;
  }
  openEdit(payment) {
    this.isEditMode = true;
    this.editingId = payment.id;
    this.newPayment = __spreadValues({}, payment);
    this.showAddModal = true;
  }
  deletePayment(payment) {
    if (confirm("Are you sure you want to delete this payment?")) {
      const cleanId = payment.id.toString().replace("PAY-", "");
      this.http.delete(`${this.API_URL}/payment/${cleanId}`).subscribe(() => {
        this.payments = this.payments.filter((p) => p.id !== payment.id);
        this.showToast("Payment deleted successfully");
      }, (error) => {
        console.error("Error deleting payment:", error);
        this.payments = this.payments.filter((p) => p.id !== payment.id);
        this.showToast("Payment deleted (local mock)");
      });
    }
  }
  savePayment() {
    if (this.isEditMode && this.editingId) {
      const cleanId = this.editingId.toString().replace("PAY-", "");
      const updatePayload = {
        amount: this.newPayment.amount,
        currency: this.newPayment.currency,
        method: this.newPayment.method?.toUpperCase(),
        status: this.newPayment.status?.toUpperCase(),
        cardholderName: this.newPayment.user
      };
      this.http.put(`${this.API_URL}/payment/${cleanId}`, updatePayload).subscribe((response) => {
        let planName = "Unknown";
        if (response.subscription?.plan?.name) {
          planName = response.subscription.plan.name;
          planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
        }
        const idx = this.payments.findIndex((p) => p.id === this.editingId);
        if (idx >= 0) {
          this.payments[idx] = __spreadProps(__spreadValues({}, this.payments[idx]), {
            user: response.user ? `${response.user.firstName || ""} ${response.user.lastName || ""}`.trim() : this.payments[idx].user,
            email: response.user?.email || this.payments[idx].email,
            plan: planName,
            amount: response.amount || this.payments[idx].amount,
            currency: response.currency || this.payments[idx].currency,
            method: (response.method || this.payments[idx].method).toLowerCase(),
            status: (response.status || this.payments[idx].status).toLowerCase()
          });
        }
        this.closeModal();
        this.showToast("\u2705 Payment updated - Subscription synchronized");
        setTimeout(() => this.loadPaymentsFromBackend(), 500);
      }, (error) => {
        console.error("Error updating payment:", error);
        const idx = this.payments.findIndex((p) => p.id === this.editingId);
        if (idx >= 0) {
          this.payments[idx] = __spreadValues(__spreadValues({}, this.payments[idx]), this.newPayment);
        }
        this.closeModal();
        this.showToast("Payment updated (local mock)");
      });
    } else {
      this.http.post(`${this.API_URL}/payment`, this.newPayment).subscribe((response) => {
        let planName = "Pro";
        if (response.subscription?.plan?.name) {
          planName = response.subscription.plan.name;
          planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
        }
        const newRecord = {
          id: response.id ? `PAY-${response.id}` : `PAY-${Math.random().toString().substring(2, 8)}`,
          user: response.user?.firstName ? `${response.user.firstName} ${response.user.lastName}` : this.newPayment.user || "Unknown",
          email: response.user?.email || this.newPayment.email || "",
          plan: planName,
          amount: response.amount || this.newPayment.amount || 0,
          currency: response.currency || this.newPayment.currency || "TND",
          method: (response.method || this.newPayment.method || "card").toLowerCase(),
          status: (response.status || this.newPayment.status || "completed").toLowerCase(),
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          transactionId: response.transactionRef || `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
        };
        this.payments.unshift(newRecord);
        this.closeModal();
        this.showToast("Payment added successfully");
      }, (error) => {
        console.error("Error creating payment:", error);
        const p = {
          id: `PAY-${String(this.payments.length + 1).padStart(3, "0")}`,
          user: this.newPayment.user || "Unknown User",
          email: this.newPayment.email || "unknown@example.com",
          plan: this.newPayment.plan || "Pro",
          amount: this.newPayment.amount || 0,
          currency: this.newPayment.currency || "TND",
          method: this.newPayment.method || "card",
          status: this.newPayment.status || "completed",
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
        };
        this.payments.unshift(p);
        this.closeModal();
        this.showToast("Payment added (local mock)");
      });
    }
  }
  exportCSV() {
    const headers = ["ID", "User", "Email", "Plan", "Amount", "Currency", "Method", "Status", "Date", "Transaction ID"];
    const rows = this.filteredPayments.map((p) => [
      p.id,
      p.user,
      p.email,
      p.plan,
      p.amount,
      p.currency,
      p.method,
      p.status,
      p.date,
      p.transactionId
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "payments.csv";
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("CSV exported successfully");
  }
  exportExcel() {
    const headers = ["ID", "User", "Email", "Plan", "Amount", "Currency", "Method", "Status", "Date", "Transaction ID"];
    const rows = this.filteredPayments.map((p) => [
      p.id,
      p.user,
      p.email,
      p.plan,
      p.amount,
      p.currency,
      p.method,
      p.status,
      p.date,
      p.transactionId
    ]);
    const csv = [headers.join("	"), ...rows.map((r) => r.join("	"))].join("\n");
    const blob = new Blob([csv], { type: "application/vnd.ms-excel" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "payments.xls";
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("Excel exported successfully");
  }
  exportPDF() {
    import("./chunk-ZGYEDOAE.js").then(({ jsPDF }) => {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Payment Report", 14, 20);
      doc.setFontSize(10);
      let y = 35;
      this.filteredPayments.forEach((p, i) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        doc.text(`${p.id} | ${p.user} | ${p.plan} | ${p.amount} ${p.currency} | ${p.status} | ${p.date}`, 14, y);
        y += 7;
      });
      doc.save("payments.pdf");
      this.showToast("PDF exported successfully");
    });
  }
  showToast(message) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = "";
    }, 3e3);
  }
  static {
    this.\u0275fac = function BoSubscriptionPayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoSubscriptionPayComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoSubscriptionPayComponent, selectors: [["app-bo-subscription-pay"]], decls: 81, vars: 17, consts: [[1, "bo-page"], [1, "bo-tabs"], ["routerLink", "/backoffice/subscription-management", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-plan", "routerLinkActive", "active", 1, "toggle-view"], ["routerLink", "/backoffice/subscription-pay", "routerLinkActive", "active", 1, "toggle-view"], [1, "bo-page-header"], [1, "btn-primary", 3, "click"], ["class", "bo-toast", "role", "status", 4, "ngIf"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-val", "revenue"], [1, "ms-label"], [1, "ms-val", "completed"], [1, "ms-val", "pending"], [1, "ms-val", "failed"], [1, "bo-filters-bar"], ["type", "text", "placeholder", "\u{1F50D} Search payments, users, transactions...", 1, "bo-filter-input", 3, "ngModelChange", "ngModel"], [1, "bo-filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bo-filter-spacer"], [1, "btn-export", 3, "click"], [1, "bo-table-card"], [1, "bo-data-table"], [3, "row-failed", "row-refunded", "row-new", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["role", "status", 1, "bo-toast"], [3, "value"], [1, "id-cell"], [1, "user-cell"], [1, "avatar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "plan-badge"], [1, "amount-cell"], [1, "method-badge"], [1, "badge"], ["class", "new-badge", 4, "ngIf"], [1, "bo-actions-cell"], ["type", "button", "class", "btn-action approve", "title", "Approve", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn-action reject", "title", "Reject", 3, "click", 4, "ngIf"], ["type", "button", "title", "View Details", 1, "btn-action", "view", 3, "click"], ["type", "button", "title", "Edit", 1, "btn-action", "edit", 3, "click"], ["type", "button", "title", "Delete", 1, "btn-action", "delete", 3, "click"], ["type", "button", "class", "btn-action refund", "title", "Refund", 3, "click", 4, "ngIf"], [1, "new-badge"], ["type", "button", "title", "Approve", 1, "btn-action", "approve", 3, "click"], ["type", "button", "title", "Reject", 1, "btn-action", "reject", 3, "click"], ["type", "button", "title", "Refund", 1, "btn-action", "refund", 3, "click"], ["colspan", "8", 1, "bo-empty-row"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "id-val"], [1, "detail-value"], [1, "detail-value", "amount-val"], [1, "detail-item", "full"], ["class", "detail-item full", 4, "ngIf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], ["class", "btn-refund", 3, "click", 4, "ngIf"], [1, "detail-value", 2, "color", "#ef4444"], [1, "btn-refund", 3, "click"], [1, "modal-content", "modal-sm", 3, "click"], [1, "modal-header", "warn-header"], [1, "refund-msg"], [1, "refund-sub"], [1, "modal-header", "success-header"], ["type", "button", 1, "modal-close", 3, "click"], [1, "badge", "badge-warning"], [2, "margin-left", "8px", "font-size", "0.85rem", "color", "#9ca3af"], [1, "badge", "badge-success", 2, "margin-left", "8px"], [1, "info-text", 2, "margin-top", "12px"], ["type", "button", 1, "btn-cancel", 3, "click", "disabled"], ["type", "button", 1, "btn-save", 3, "click", "disabled"], [1, "badge", "badge-danger", 2, "margin-left", "8px"], [2, "margin-top", "14px"], [1, "reject-label"], [2, "color", "#ef4444"], [2, "font-size", "0.75rem", "color", "#9ca3af"], ["rows", "3", "placeholder", "e.g. Missing proof of payment, incorrect amount, unidentified transfer...", 1, "reject-textarea", 3, "ngModelChange", "ngModel"], ["style", "color:#ef4444;font-size:0.8rem;margin-top:4px;", 4, "ngIf"], ["type", "button", 1, "btn-refund", 3, "click", "disabled"], [2, "color", "#ef4444", "font-size", "0.8rem", "margin-top", "4px"], [1, "form-grid", 3, "ngSubmit"], [1, "form-group", "full"], ["type", "text", "name", "user", "placeholder", "e.g. John Doe", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "e.g. john@example.com", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["name", "plan", 3, "ngModelChange", "ngModel"], ["value", "Pro"], ["value", "Premium"], ["type", "number", "name", "amount", 3, "ngModelChange", "ngModel"], ["name", "method", 3, "ngModelChange", "ngModel"], ["value", "card"], ["value", "paypal"], ["value", "bank_transfer"], ["value", "mobile"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", "completed"], ["value", "pending"], ["value", "failed"], ["value", "refunded"], [1, "btn-save", 3, "click"]], template: function BoSubscriptionPayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275text(3, "\u{1F4CB} Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275text(5, "\u{1F4E6} Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275text(7, "\u{1F4B0} Payment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div")(10, "h1");
        \u0275\u0275text(11, "\u{1F4B0} Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Track and manage all subscription payments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function BoSubscriptionPayComponent_Template_button_click_14_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275text(15, "\u2795 Add Payment");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, BoSubscriptionPayComponent_div_16_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "span", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22, "Total Revenue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 9)(24, "span", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 11);
        \u0275\u0275text(27, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "span", 13);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 11);
        \u0275\u0275text(32, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 9)(34, "span", 14);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 11);
        \u0275\u0275text(37, "Failed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 15)(39, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_Template_select_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275template(41, BoSubscriptionPayComponent_option_41_Template, 3, 4, "option", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function BoSubscriptionPayComponent_Template_select_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedMethod, $event) || (ctx.selectedMethod = $event);
          return $event;
        });
        \u0275\u0275template(43, BoSubscriptionPayComponent_option_43_Template, 3, 4, "option", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "div", 19);
        \u0275\u0275elementStart(45, "button", 20);
        \u0275\u0275listener("click", function BoSubscriptionPayComponent_Template_button_click_45_listener() {
          return ctx.loadPaymentsFromBackend();
        });
        \u0275\u0275text(46, "\u{1F504} Refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 20);
        \u0275\u0275listener("click", function BoSubscriptionPayComponent_Template_button_click_47_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(48, "\u{1F4C4} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 20);
        \u0275\u0275listener("click", function BoSubscriptionPayComponent_Template_button_click_49_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275text(50, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 20);
        \u0275\u0275listener("click", function BoSubscriptionPayComponent_Template_button_click_51_listener() {
          return ctx.exportPDF();
        });
        \u0275\u0275text(52, "\u{1F5A8}\uFE0F PDF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 21)(54, "table", 22)(55, "thead")(56, "tr")(57, "th");
        \u0275\u0275text(58, "Payment ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th");
        \u0275\u0275text(62, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th");
        \u0275\u0275text(64, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th");
        \u0275\u0275text(66, "Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th");
        \u0275\u0275text(68, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th");
        \u0275\u0275text(70, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th");
        \u0275\u0275text(72, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "tbody");
        \u0275\u0275template(74, BoSubscriptionPayComponent_tr_74_Template, 38, 34, "tr", 23)(75, BoSubscriptionPayComponent_tr_75_Template, 3, 0, "tr", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(76, BoSubscriptionPayComponent_div_76_Template, 62, 22, "div", 25)(77, BoSubscriptionPayComponent_div_77_Template, 24, 5, "div", 25)(78, BoSubscriptionPayComponent_div_78_Template, 64, 14, "div", 25)(79, BoSubscriptionPayComponent_div_79_Template, 54, 14, "div", 25)(80, BoSubscriptionPayComponent_div_80_Template, 58, 7, "div", 25);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.toastMessage);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.totalRevenue, " TND");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.completedCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.failedCount);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedMethod);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.methods);
        \u0275\u0275advance(31);
        \u0275\u0275property("ngForOf", ctx.filteredPayments);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredPayments.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.selectedPayment);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRefundModal && ctx.paymentToRefund);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showApproveModal && ctx.paymentToApprove);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRejectModal && ctx.paymentToReject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddModal);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TitleCasePipe, DatePipe], styles: ["\n\n.revenue[_ngcontent-%COMP%] {\n  color: var(--success, #10b981) !important;\n}\n.completed[_ngcontent-%COMP%] {\n  color: var(--success, #10b981) !important;\n}\n.pending[_ngcontent-%COMP%] {\n  color: var(--warning, #f59e0b) !important;\n}\n.failed[_ngcontent-%COMP%] {\n  color: var(--danger, #ef4444) !important;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary, #6366f1),\n      var(--accent-secondary, #8b5cf6));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-cell[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--bo-text-primary);\n}\n.user-cell[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.id-cell[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  opacity: 0.8;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--success, #10b981) !important;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(107, 114, 128, 0.15);\n  color: #9ca3af;\n}\n.plan-badge.pro[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.plan-badge.elite[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n.method-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary, #94a3b8);\n}\n.row-failed[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.row-refunded[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-muted[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.15);\n  color: #292b2e;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1px solid var(--bo-border);\n  border-radius: var(--radius-lg);\n  width: 90%;\n  max-width: 520px;\n  max-height: 85vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n  box-shadow: var(--shadow-elevated);\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 14px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.1);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n}\n.warn-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  color: var(--text-secondary, #94a3b8);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid rgba(148, 163, 184, 0.1);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-item.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--bo-text-primary);\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .id-val[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--primary, #6366f1);\n}\n.detail-item[_ngcontent-%COMP%]   .amount-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--success, #10b981);\n  font-size: 18px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 10px;\n  color: var(--text-secondary, #94a3b8);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(148, 163, 184, 0.1);\n}\n.btn-refund[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: #f59e0b;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-refund[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n  transform: translateY(-1px);\n}\n.refund-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #94a3b8);\n  line-height: 1.7;\n  margin: 0;\n}\n.refund-msg[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary, #e2e8f0);\n}\n.refund-msg[_ngcontent-%COMP%]   .refund-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary, #94a3b8);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: var(--bo-bg-primary);\n  border: 1px solid var(--bo-border);\n  border-radius: 10px;\n  color: var(--bo-text-primary);\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary, #6366f1);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary, #94a3b8);\n  opacity: 0.5;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: auto;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  background: var(--primary, #6366f1);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n}\n.bo-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--bo-border, #e5e7eb);\n  padding-bottom: 12px;\n}\n.toggle-view[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid var(--bo-border, #e5e7eb);\n  background: transparent;\n  color: var(--bo-text-secondary, #6b7280);\n  transition: all 0.2s;\n  font-family: var(--font-body, inherit);\n  text-decoration: none;\n}\n.toggle-view.active[_ngcontent-%COMP%] {\n  background: var(--primary, #3b82f6);\n  color: white;\n  border-color: var(--primary, #3b82f6);\n}\n.toggle-view[_ngcontent-%COMP%]:not(.active):hover {\n  border-color: var(--primary, #3b82f6);\n  color: var(--primary, #3b82f6);\n}\n.bo-toast[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  color: #047857;\n  font-size: 14px;\n  font-weight: 600;\n}\n.reject-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n  color: var(--bo-text, #111827);\n}\n.reject-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid var(--bo-border, #e5e7eb);\n  font-family: inherit;\n  font-size: 14px;\n  resize: vertical;\n}\n.btn-action.approve[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.btn-action.reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: rgba(239, 68, 68, 0.35);\n}\n.row-new[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n  background: rgba(245, 158, 11, 0.04);\n}\n.new-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  background: #f59e0b;\n  color: #000;\n  font-size: 0.6rem;\n  font-weight: 800;\n  padding: 1px 5px;\n  border-radius: 4px;\n  vertical-align: middle;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=subscription-pay.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoSubscriptionPayComponent, { className: "BoSubscriptionPayComponent", filePath: "src\\app\\backoffice\\subscription-pay\\subscription-pay.component.ts", lineNumber: 28 });
})();

// src/app/backoffice/subscription-dashboard/subscription-dashboard.component.ts
function BoSubscriptionDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    \u0275\u0275classMap("tone-" + k_r1.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.sub);
  }
}
function BoSubscriptionDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    \u0275\u0275styleProp("height", v_r2 * 6, "%");
    \u0275\u0275property("title", v_r2 + "k");
  }
}
var BoSubscriptionDashboardComponent = class _BoSubscriptionDashboardComponent {
  constructor() {
    this.kpis = [
      { label: "MRR", value: "12\u202F450 TND", sub: "+8% ce mois", tone: "v" },
      { label: "Actifs", value: "234", sub: "abonn\xE9s", tone: "g" },
      { label: "En attente", value: "18", sub: "paiements", tone: "a" },
      { label: "Churn", value: "3,2%", sub: "ce mois", tone: "r" }
    ];
    this.mrrSeries = [8, 9, 10, 9.5, 11, 12, 11.2, 12.1, 12.4, 12.45, 12.5, 12.45];
  }
  static {
    this.\u0275fac = function BoSubscriptionDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BoSubscriptionDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoSubscriptionDashboardComponent, selectors: [["app-bo-subscription-dashboard"]], decls: 31, vars: 2, consts: [[1, "bo-sub-dash"], [1, "dash-head"], [1, "kpi-grid"], ["class", "kpi", 3, "class", 4, "ngFor", "ngForOf"], [1, "charts-row"], [1, "chart-card"], [1, "line-chart"], ["class", "line-bar", 3, "height", "title", 4, "ngFor", "ngForOf"], [1, "pie-mock"], [1, "slice", "free"], [1, "slice", "pro"], [1, "slice", "prem"], [1, "legend"], [1, "dot", "free"], [1, "dot", "pro"], [1, "dot", "prem"], [1, "kpi"], [1, "kpi-label"], [1, "kpi-val"], [1, "kpi-sub"], [1, "line-bar", 3, "title"]], template: function BoSubscriptionDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "\u{1F4C8} Abonnements \u2014 Tableau de bord");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "KPIs et tendances (donn\xE9es de d\xE9monstration).");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275template(7, BoSubscriptionDashboardComponent_div_7_Template, 7, 5, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "h3");
        \u0275\u0275text(11, "MRR (12 mois)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275template(13, BoSubscriptionDashboardComponent_div_13_Template, 1, 3, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "h3");
        \u0275\u0275text(16, "R\xE9partition plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275element(18, "div", 9)(19, "div", 10)(20, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ul", 12)(22, "li");
        \u0275\u0275element(23, "span", 13);
        \u0275\u0275text(24, " Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275element(26, "span", 14);
        \u0275\u0275text(27, " Pro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275element(29, "span", 15);
        \u0275\u0275text(30, " Premium");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.kpis);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.mrrSeries);
      }
    }, dependencies: [NgForOf], styles: ["\n\n.bo-sub-dash[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n}\n.dash-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 26px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin: 24px 0;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 18px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #6b7280;\n  letter-spacing: 0.04em;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 800;\n  margin: 6px 0;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.tone-v[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.tone-g[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.tone-a[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.tone-r[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px;\n  border: 1px solid #e5e7eb;\n}\n.chart-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 15px;\n}\n.line-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  height: 140px;\n  padding-top: 8px;\n}\n.line-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      #6366f1,\n      #a5b4fc);\n  border-radius: 4px 4px 0 0;\n  min-height: 8px;\n}\n.pie-mock[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      #9ca3af 0 30%,\n      #10b981 30% 70%,\n      #3b82f6 70% 100%);\n  margin: 0 auto 12px;\n}\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  font-size: 13px;\n}\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.legend[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n.legend[_ngcontent-%COMP%]   .dot.free[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.legend[_ngcontent-%COMP%]   .dot.pro[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.legend[_ngcontent-%COMP%]   .dot.prem[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n@media (max-width: 900px) {\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=subscription-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoSubscriptionDashboardComponent, { className: "BoSubscriptionDashboardComponent", filePath: "src\\app\\backoffice\\subscription-dashboard\\subscription-dashboard.component.ts", lineNumber: 8 });
})();

// src/app/backoffice/backoffice-routing.module.ts
var routes = [
  {
    path: "login",
    component: BoLoginComponent
  },
  {
    path: "",
    component: BoLayoutComponent,
    // canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "users", component: UsersComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "courses-resources", component: BoCoursesResourcesComponent },
      { path: "events", component: BoEventsComponent },
      { path: "profile-settings", component: BoProfileSettingsComponent },
      { path: "projects-milestones", component: BoProjectsMilestonesComponent },
      { path: "subscription-management", component: BoSubscriptionManagementComponent },
      { path: "user-management", component: UserManagementComponent },
      { path: "subscription-plan", component: BoSubscriptionPlanComponent },
      { path: "subscription-plan-comparison", component: SubscriptionPlanComparisonComponent },
      { path: "subscription-pay", component: BoSubscriptionPayComponent },
      { path: "subscriptions/dashboard", component: BoSubscriptionDashboardComponent }
    ]
  }
];
var BackofficeRoutingModule = class _BackofficeRoutingModule {
  static {
    this.\u0275fac = function BackofficeRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BackofficeRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BackofficeRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/shared/components/payment-confirmation/payment-confirmation.component.ts
function PaymentConfirmationComponent_div_0_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPendingMessage());
  }
}
function PaymentConfirmationComponent_div_0_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getApprovedMessage());
  }
}
function PaymentConfirmationComponent_div_0_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getRejectedMessage());
  }
}
function PaymentConfirmationComponent_div_0_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4B3} Carte bancaire");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_div_0_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F17F}\uFE0F PayPal");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_div_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4F1} Paiement mobile");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F3E6} Virement bancaire");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_div_0_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.payment.lastFourDigits, ")");
  }
}
function PaymentConfirmationComponent_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Titulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.payment.cardholderName);
  }
}
function PaymentConfirmationComponent_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h4");
    \u0275\u0275text(2, "\u23F3 Que se passe-t-il ensuite ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul")(4, "li");
    \u0275\u0275text(5, "Nous v\xE9rifions votre paiement (typically 24 heures)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "Vous recevrez un email de confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "Votre abonnement sera activ\xE9 automatiquement");
    \u0275\u0275elementEnd()()();
  }
}
function PaymentConfirmationComponent_div_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h4");
    \u0275\u0275text(2, "\u2705 F\xE9licitations !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Votre abonnement est maintenant actif. Vous pouvez acc\xE9der \xE0 tous les services inclus dans votre plan.");
    \u0275\u0275elementEnd()();
  }
}
function PaymentConfirmationComponent_div_0_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSubscription());
    });
    \u0275\u0275text(1, " Voir mon abonnement ");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
    \u0275\u0275template(11, PaymentConfirmationComponent_div_0_p_11_Template, 2, 1, "p", 8)(12, PaymentConfirmationComponent_div_0_p_12_Template, 2, 1, "p", 8)(13, PaymentConfirmationComponent_div_0_p_13_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9)(15, "h3");
    \u0275\u0275text(16, "D\xE9tails du paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "span", 12);
    \u0275\u0275text(20, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
    \u0275\u0275text(25, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 14);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "span", 12);
    \u0275\u0275text(30, "M\xE9thode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 13);
    \u0275\u0275template(32, PaymentConfirmationComponent_div_0_span_32_Template, 2, 0, "span", 8)(33, PaymentConfirmationComponent_div_0_span_33_Template, 2, 0, "span", 8)(34, PaymentConfirmationComponent_div_0_span_34_Template, 2, 0, "span", 8)(35, PaymentConfirmationComponent_div_0_span_35_Template, 2, 0, "span", 8)(36, PaymentConfirmationComponent_div_0_span_36_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 11)(38, "span", 12);
    \u0275\u0275text(39, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 13);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, PaymentConfirmationComponent_div_0_div_42_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 16)(44, "span", 17);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 18);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, PaymentConfirmationComponent_div_0_div_48_Template, 10, 0, "div", 19)(49, PaymentConfirmationComponent_div_0_div_49_Template, 5, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 21)(51, "button", 22);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReceipt());
    });
    \u0275\u0275text(52, "\u{1F4E5} T\xE9l\xE9charger le re\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "div", 23);
    \u0275\u0275elementStart(54, "button", 24);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_div_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(55, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, PaymentConfirmationComponent_div_0_button_56_Template, 2, 0, "button", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + ctx_r1.getStatusColor());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusText());
    \u0275\u0275advance(4);
    \u0275\u0275classMap("alert-" + ctx_r1.getStatusColor());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "rejected");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.payment.transactionRef || ctx_r1.payment.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.payment.amount, " ", ctx_r1.payment.currency, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.payment.method === "CARD");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payment.method === "PAYPAL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payment.method === "MOBILE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payment.method === "BANK_TRANSFER");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payment.lastFourDigits);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formattedDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payment.cardholderName);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + ctx_r1.getStatusColor());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusText());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "approved");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.paymentStatus === "approved");
  }
}
var PaymentConfirmationComponent = class _PaymentConfirmationComponent {
  constructor() {
    this.payment = null;
    this.showModal = false;
    this.closeModal = new EventEmitter();
    this.paymentStatus = "pending";
    this.formattedDate = "";
  }
  ngOnInit() {
    if (this.payment) {
      this.updatePaymentStatus();
      this.formatDate();
    }
  }
  ngOnChanges() {
    if (this.payment) {
      this.updatePaymentStatus();
      this.formatDate();
    }
  }
  updatePaymentStatus() {
    if (!this.payment)
      return;
    if (this.payment.status === "PENDING") {
      this.paymentStatus = "pending";
    } else if (this.payment.status === "COMPLETED") {
      this.paymentStatus = "approved";
    } else if (this.payment.status === "FAILED") {
      this.paymentStatus = "rejected";
    }
  }
  formatDate() {
    if (!this.payment || !this.payment.transactionDate)
      return;
    const date = new Date(this.payment.transactionDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    this.formattedDate = date.toLocaleDateString("fr-FR", options);
  }
  getStatusIcon() {
    switch (this.paymentStatus) {
      case "pending":
        return "\u23F3";
      case "approved":
        return "\u2705";
      case "rejected":
        return "\u274C";
      default:
        return "\u2753";
    }
  }
  getStatusText() {
    switch (this.paymentStatus) {
      case "pending":
        return "Paiement en attente de v\xE9rification";
      case "approved":
        return "Paiement approuv\xE9 avec succ\xE8s";
      case "rejected":
        return "Paiement rejet\xE9";
      default:
        return "Statut inconnu";
    }
  }
  getStatusColor() {
    switch (this.paymentStatus) {
      case "pending":
        return "warning";
      case "approved":
        return "success";
      case "rejected":
        return "danger";
      default:
        return "info";
    }
  }
  getPendingMessage() {
    return "Votre paiement a \xE9t\xE9 re\xE7u et est actuellement examin\xE9 par notre \xE9quipe. V\xE9rification typique : 24 heures.";
  }
  getApprovedMessage() {
    return "Merci ! Votre paiement a \xE9t\xE9 approuv\xE9. Votre abonnement est maintenant actif et vous pouvez acc\xE9der \xE0 vos services.";
  }
  getRejectedMessage() {
    return "Votre paiement a \xE9t\xE9 rejet\xE9. Veuillez v\xE9rifier vos informations et r\xE9essayer, ou contactez notre support.";
  }
  close() {
    this.closeModal.emit();
  }
  downloadReceipt() {
    if (!this.payment)
      return;
    const content = `
RE\xC7U DE PAIEMENT
================
R\xE9f\xE9rence: ${this.payment.transactionRef || this.payment.id}
Montant: ${this.payment.amount} ${this.payment.currency}
Date: ${this.formattedDate}
Statut: ${this.getStatusText()}
M\xE9thode: ${this.getPaymentMethodText()}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${this.payment.transactionRef || this.payment.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
  getPaymentMethodText() {
    const methods = {
      "CARD": "Carte bancaire",
      "PAYPAL": "PayPal",
      "MOBILE": "Paiement mobile",
      "BANK_TRANSFER": "Virement bancaire"
    };
    return methods[this.payment?.method || "CARD"] || this.payment?.method || "Inconnu";
  }
  goToSubscription() {
    window.location.href = "/subscription-management";
  }
  static {
    this.\u0275fac = function PaymentConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentConfirmationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentConfirmationComponent, selectors: [["app-payment-confirmation"]], inputs: { payment: "payment", showModal: "showModal" }, outputs: { closeModal: "closeModal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "confirmation-modal", 3, "click"], [1, "confirmation-header"], [1, "status-icon"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "status-message"], [4, "ngIf"], [1, "payment-details"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "amount"], ["class", "detail-row", 4, "ngIf"], [1, "status-badge"], [1, "badge-icon"], [1, "badge-text"], ["class", "info-box pending-info", 4, "ngIf"], ["class", "info-box success-info", 4, "ngIf"], [1, "modal-footer", "confirmation-footer"], [1, "btn-secondary", 3, "click"], [1, "footer-spacer"], [1, "btn-cancel", 3, "click"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "info-box", "pending-info"], [1, "info-box", "success-info"], [1, "btn-primary", 3, "click"]], template: function PaymentConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaymentConfirmationComponent_div_0_Template, 57, 26, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.showModal && ctx.payment);
      }
    }, dependencies: [NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-content.confirmation-modal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1f2e 0%,\n      #16192b 100%);\n  border: 1px solid #2d3348;\n  border-radius: 16px;\n  width: 90%;\n  max-width: 600px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.confirmation-header[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n  position: relative;\n  border-bottom: 1px solid #2d3348;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.confirmation-header.status-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.1),\n      rgba(16, 185, 129, 0.05));\n  border-bottom-color: rgba(34, 197, 94, 0.3);\n}\n.confirmation-header.status-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.1),\n      rgba(217, 119, 6, 0.05));\n  border-bottom-color: rgba(245, 158, 11, 0.3);\n}\n.confirmation-header.status-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.1),\n      rgba(220, 38, 38, 0.05));\n  border-bottom-color: rgba(239, 68, 68, 0.3);\n}\n.confirmation-header[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  line-height: 1;\n  animation: _ngcontent-%COMP%_scaleIn 0.4s ease;\n}\n.confirmation-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: #e5e7eb;\n}\n.confirmation-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  font-size: 24px;\n  cursor: pointer;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.confirmation-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: #e5e7eb;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.modal-body[_ngcontent-%COMP%]   .status-message.alert-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  color: #86efac;\n}\n.modal-body[_ngcontent-%COMP%]   .status-message.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  color: #fcd34d;\n}\n.modal-body[_ngcontent-%COMP%]   .status-message.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.modal-body[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0 0 12px 0;\n  color: #e5e7eb;\n  font-weight: 600;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(45, 51, 72, 0.5);\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e5e7eb;\n  font-weight: 600;\n}\n.modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.amount[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  font-weight: 600;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  color: #86efac;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  color: #fcd34d;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   .badge-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  border-left: 4px solid;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  font-size: 13px;\n  line-height: 1.8;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box.pending-info[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border-left-color: #f59e0b;\n  color: #fcd34d;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box.pending-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .info-box.pending-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .info-box.pending-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #fcd34d;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box.success-info[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border-left-color: #22c55e;\n  color: #86efac;\n}\n.modal-body[_ngcontent-%COMP%]   .info-box.success-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .info-box.success-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-top: 1px solid #2d3348;\n  background: rgba(0, 0, 0, 0.1);\n  flex-wrap: wrap;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   .footer-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #2d3348;\n  color: #d1d5db;\n  border: 1px solid #3d4556;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #3d4556;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #2d3348;\n  color: #9ca3af;\n}\n.modal-footer.confirmation-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #2d3348;\n  color: #e5e7eb;\n}\n@media (max-width: 600px) {\n  .modal-content.confirmation-modal[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .modal-footer.confirmation-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-footer.confirmation-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .modal-footer.confirmation-footer[_ngcontent-%COMP%]   .footer-spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .confirmation-header[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .confirmation-header[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .confirmation-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-body[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=payment-confirmation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentConfirmationComponent, { className: "PaymentConfirmationComponent", filePath: "src\\app\\shared\\components\\payment-confirmation\\payment-confirmation.component.ts", lineNumber: 9 });
})();

// src/app/backoffice/backoffice.module.ts
var BackofficeModule = class _BackofficeModule {
  static {
    this.\u0275fac = function BackofficeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BackofficeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BackofficeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BackofficeRoutingModule,
      FrontofficeModule
    ] });
  }
};
export {
  BackofficeModule
};
//# sourceMappingURL=chunk-7RO4WHXU.js.map
