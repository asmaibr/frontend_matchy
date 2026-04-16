import {
  ChatbotService,
  NotificationService,
  ProposalService,
  WebSocketService
} from "./chunk-QQ7LITVV.js";
import {
  FreelancerGuard,
  ProjectService,
  UserService
} from "./chunk-WIHVAV43.js";
import {
  AuthService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  MaxLengthValidator,
  MinValidator,
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
  SlicePipe,
  environment,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
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
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/freelancer/layout/fl-sidebar/fl-sidebar.component.ts
function FlNavbarComponent_a_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function FlNavbarComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FlNavbarComponent_a_9_span_5_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.badge && ctx_r0.unreadCount > 0);
  }
}
function FlNavbarComponent_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function FlNavbarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 14);
    \u0275\u0275text(2, " \u{1F514} ");
    \u0275\u0275template(3, FlNavbarComponent_div_10_span_3_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11, "Freelancer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 21);
    \u0275\u0275listener("click", function FlNavbarComponent_div_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u23FB");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.firstName) || (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name));
  }
}
var FlNavbarComponent = class _FlNavbarComponent {
  constructor(authService, router, notifService, wsService) {
    this.authService = authService;
    this.router = router;
    this.notifService = notifService;
    this.wsService = wsService;
    this.unreadCount = 0;
    this.navItems = [
      { label: "Dashboard", icon: "\u{1F4CA}", route: "/freelancer/dashboard", badge: false },
      { label: "Browse Projects", icon: "\u{1F50D}", route: "/freelancer/projects", badge: false },
      { label: "My Proposals", icon: "\u{1F4DD}", route: "/freelancer/proposals", badge: false },
      { label: "My Badges", icon: "\u{1F3C6}", route: "/freelancer/badges", badge: false },
      { label: "Profile", icon: "\u2699\uFE0F", route: "/freelancer/profile", badge: false }
    ];
  }
  ngOnInit() {
    const userId = this.authService.currentUser?.id;
    if (userId) {
      this.notifService.countUnread(userId).subscribe({
        next: (r) => this.unreadCount = r.count,
        error: () => this.unreadCount = 0
      });
      this.wsService.connect(String(userId));
      this.wsSub = this.wsService.onNotification().subscribe(() => {
        this.unreadCount++;
      });
    }
  }
  ngOnDestroy() {
    this.wsSub?.unsubscribe();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  getInitials() {
    const u = this.authService.currentUser;
    if (!u)
      return "?";
    const name = u.name || ((u.firstName || "") + " " + (u.lastName || "")).trim();
    return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  }
  static {
    this.\u0275fac = function FlNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(WebSocketService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlNavbarComponent, selectors: [["app-fl-navbar"]], decls: 11, vars: 2, consts: [[1, "fl-navbar"], ["routerLink", "/freelancer/dashboard", 1, "navbar-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "accent"], [1, "navbar-links"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "navbar-right", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-icon"], [1, "nav-label"], ["class", "notif-dot", 4, "ngIf"], [1, "notif-dot"], [1, "navbar-right"], ["routerLink", "/freelancer/notifications", "title", "Notifications", 1, "notif-btn"], ["class", "notif-bubble", 4, "ngIf"], [1, "user-chip"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "Logout", 1, "logout-btn", 3, "click"], [1, "notif-bubble"]], template: function FlNavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1)(2, "div", 2);
        \u0275\u0275text(3, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Match");
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "y");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275template(9, FlNavbarComponent_a_9_Template, 6, 4, "a", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, FlNavbarComponent_div_10_Template, 15, 3, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.authService.currentUser);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n.fl-navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 64px;\n  background: var(--bo-bg-sidebar);\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  flex-shrink: 0;\n}\n.navbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  flex-shrink: 0;\n  .logo-icon {\n    width: 32px;\n    height: 32px;\n    background: var(--primary);\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-weight: 700;\n    font-size: 16px;\n  }\n  .logo-text {\n    color: white;\n    font-weight: 700;\n    font-size: 18px;\n    font-family: var(--font-display);\n  }\n  .accent {\n    color: #a855f7;\n  }\n}\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n  position: relative;\n  white-space: nowrap;\n  &:hover {\n    background: rgba(168, 85, 247, 0.15);\n    color: white;\n  }\n  &.active {\n    background: rgba(168, 85, 247, 0.2);\n    color: #c084fc;\n  }\n  .nav-icon {\n    font-size: 15px;\n  }\n  .notif-dot {\n    background: #ef4444;\n    color: white;\n    font-size: 10px;\n    font-weight: 700;\n    padding: 1px 5px;\n    border-radius: 10px;\n    margin-left: 2px;\n  }\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  transition: background 0.2s;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  .notif-bubble {\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    background: #ef4444;\n    color: white;\n    font-size: 9px;\n    font-weight: 700;\n    min-width: 16px;\n    height: 16px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 3px;\n  }\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 6px 12px;\n  .user-avatar {\n    width: 28px;\n    height: 28px;\n    background: #a855f7;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-weight: 700;\n    font-size: 11px;\n    flex-shrink: 0;\n  }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n    .user-name {\n      color: white;\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.2;\n    }\n    .user-role {\n      color: rgba(255, 255, 255, 0.45);\n      font-size: 10px;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n  }\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.2s;\n  &:hover {\n    background: rgba(239, 68, 68, 0.2);\n    color: #ef4444;\n  }\n}\n@media (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fl-navbar[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=fl-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlNavbarComponent, { className: "FlNavbarComponent", filePath: "app\\freelancer\\layout\\fl-sidebar\\fl-sidebar.component.ts", lineNumber: 131 });
})();

// src/app/freelancer/chatbot/chatbot.component.ts
var _c0 = ["messagesRef"];
var _c1 = ["inputRef"];
function ChatbotComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function ChatbotComponent_div_7_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ChatbotComponent_div_7_button_18_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendSuggestion(s_r4.text));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.text, " ");
  }
}
function ChatbotComponent_div_7_div_21_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ChatbotComponent_div_7_div_21_button_8_Template_button_click_0_listener() {
      const q_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendSuggestion(q_r6.text));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", q_r6.icon, " ", q_r6.text, " ");
  }
}
function ChatbotComponent_div_7_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4, "Hello, I'm your Matchy assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6, "I can help you with your proposals, profile, and everything related to the platform.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275template(8, ChatbotComponent_div_7_div_21_button_8_Template, 2, 2, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.quickStarts);
  }
}
function ChatbotComponent_div_7_div_22_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2713\u2713");
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_div_7_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "div", 47);
    \u0275\u0275elementStart(5, "div", 48)(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatbotComponent_div_7_div_22_span_8_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("user", m_r7.role === "user")("bot", m_r7.role === "bot");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r7.role === "bot" ? "\u{1F916}" : "\u{1F464}");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.formatContent(m_r7.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r7.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r7.role === "user");
  }
}
function ChatbotComponent_div_7_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 45);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 53);
    \u0275\u0275element(5, "span", 54)(6, "span", 54)(7, "span", 54);
    \u0275\u0275elementEnd()()();
  }
}
function ChatbotComponent_div_7_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u27A4");
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_div_7_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function ChatbotComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8, "Matchy AI Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275element(10, "span", 17);
    \u0275\u0275text(11, " Online \xB7 Responds instantly ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 18)(13, "button", 19);
    \u0275\u0275listener("click", function ChatbotComponent_div_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clear());
    });
    \u0275\u0275text(14, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function ChatbotComponent_div_7_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(16, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 21);
    \u0275\u0275template(18, ChatbotComponent_div_7_button_18_Template, 4, 3, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23, 0);
    \u0275\u0275template(21, ChatbotComponent_div_7_div_21_Template, 9, 1, "div", 24)(22, ChatbotComponent_div_7_div_22_Template, 9, 8, "div", 25)(23, ChatbotComponent_div_7_div_23_Template, 8, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 27)(25, "div", 28)(26, "textarea", 29, 1);
    \u0275\u0275twoWayListener("ngModelChange", function ChatbotComponent_div_7_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userInput, $event) || (ctx_r0.userInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ChatbotComponent_div_7_Template_textarea_input_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInput());
    })("keydown", function ChatbotComponent_div_7_Template_textarea_keydown_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 30);
    \u0275\u0275listener("click", function ChatbotComponent_div_7_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.send());
    });
    \u0275\u0275template(29, ChatbotComponent_div_7_span_29_Template, 2, 0, "span", 31)(30, ChatbotComponent_div_7_span_30_Template, 1, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 33)(32, "span", 34);
    \u0275\u0275text(33, "Enter \u21B5 to send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 35);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.suggestions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.messages.length === 0 && !ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("focused", ctx_r0.userInput.length > 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userInput);
    \u0275\u0275property("disabled", ctx_r0.isLoading)("maxlength", ctx_r0.MAX_CHARS);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading || !ctx_r0.userInput.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("warn", ctx_r0.charCount > 450);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.charCount, "/", ctx_r0.MAX_CHARS, "");
  }
}
var ChatbotComponent = class _ChatbotComponent {
  constructor(chatbotService) {
    this.chatbotService = chatbotService;
    this.isOpen = false;
    this.isLoading = false;
    this.userInput = "";
    this.charCount = 0;
    this.unreadCount = 0;
    this.hasOpened = false;
    this.messages = [];
    this.history = [];
    this.shouldScroll = false;
    this.MAX_CHARS = 500;
    this.suggestions = [
      { icon: "\u{1F4CB}", text: "How to submit a proposal?" },
      { icon: "\u{1F4B0}", text: "How to set my rate?" },
      { icon: "\u2B50", text: "How to improve my rating?" },
      { icon: "\u{1F514}", text: "Why was my proposal rejected?" },
      { icon: "\u{1F4C8}", text: "Tips to attract more clients" },
      { icon: "\u{1F512}", text: "How to secure my account?" }
    ];
    this.quickStarts = [
      { icon: "\u{1F680}", text: "Getting started on Matchy" },
      { icon: "\u{1F4A1}", text: "Optimize my profile" },
      { icon: "\u{1F4CA}", text: "Understand my statistics" },
      { icon: "\u{1F91D}", text: "Negotiate with a client" }
    ];
  }
  ngOnInit() {
  }
  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollBottom();
      this.shouldScroll = false;
    }
  }
  ngOnDestroy() {
  }
  // ── Toggle chat window
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.unreadCount = 0;
      if (!this.hasOpened) {
        this.hasOpened = true;
        setTimeout(() => this.sendWelcome(), 400);
      }
      setTimeout(() => this.inputRef?.nativeElement.focus(), 100);
    }
  }
  close() {
    this.isOpen = false;
  }
  // ── Welcome message (no API call)
  sendWelcome() {
    this.pushBot(`\u{1F44B} Hello and welcome to **Matchy**!

I'm your AI assistant. I can help you with:
- **Submitting and optimizing** your proposals
- **Improving your profile** to attract more clients
- **Understanding the features** of the platform
- **Tips** to succeed as a freelancer

What can I do for you today? \u{1F680}`);
  }
  // ── Send message
  send(text) {
    const msg = (text ?? this.userInput).trim();
    if (!msg || this.isLoading || msg.length > this.MAX_CHARS)
      return;
    this.messages.push({ role: "user", content: msg, time: this.now() });
    this.shouldScroll = true;
    this.history.push({ role: "user", content: msg });
    this.userInput = "";
    this.charCount = 0;
    this.isLoading = true;
    this.chatbotService.sendMessage(this.history).subscribe({
      next: (res) => {
        const reply = res.content?.[0]?.text ?? "Sorry, I could not respond.";
        this.history.push({ role: "assistant", content: reply });
        this.pushBot(reply);
        this.isLoading = false;
      },
      error: () => {
        this.pushBot("\u{1F50C} Connection error. Please try again in a few moments.");
        this.isLoading = false;
      }
    });
  }
  sendSuggestion(text) {
    this.send(text);
  }
  // ── Clear conversation
  clear() {
    this.messages = [];
    this.history = [];
    setTimeout(() => this.sendWelcome(), 200);
  }
  // ── Keyboard handler
  onKeydown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.send();
    }
  }
  onInput() {
    this.charCount = this.userInput.length;
  }
  // ── Close on Escape
  onEscape() {
    if (this.isOpen)
      this.close();
  }
  // ── Helpers
  pushBot(content) {
    this.messages.push({ role: "bot", content, time: this.now() });
    this.shouldScroll = true;
    if (!this.isOpen)
      this.unreadCount++;
  }
  scrollBottom() {
    const el = this.messagesRef?.nativeElement;
    if (el)
      el.scrollTop = el.scrollHeight;
  }
  now() {
    return (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  formatContent(raw) {
    return raw.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n- /g, "<br>\u2022 ").replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
  }
  static {
    this.\u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatbotComponent)(\u0275\u0275directiveInject(ChatbotService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
      }
    }, hostBindings: function ChatbotComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ChatbotComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 8, vars: 5, consts: [["messagesRef", ""], ["inputRef", ""], [1, "chat-fab", 3, "click"], [1, "fab-icon-open"], [1, "fab-icon-close"], ["class", "fab-badge", 4, "ngIf"], [1, "fab-ring"], ["class", "chat-window visible", "role", "dialog", "aria-label", "Matchy AI Support", 4, "ngIf"], [1, "fab-badge"], ["role", "dialog", "aria-label", "Matchy AI Support", 1, "chat-window", "visible"], [1, "cw-header"], [1, "cw-avatar-wrap"], [1, "cw-avatar"], [1, "cw-status-dot"], [1, "cw-info"], [1, "cw-name"], [1, "cw-online"], [1, "online-dot"], [1, "cw-actions"], ["title", "New conversation", 1, "cw-action-btn", 3, "click"], ["title", "Close", 1, "cw-action-btn", 3, "click"], [1, "cw-suggestions"], ["class", "cw-chip", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "cw-messages"], ["class", "cw-empty", 4, "ngIf"], ["class", "msg-row", 3, "user", "bot", 4, "ngFor", "ngForOf"], ["class", "msg-row bot", 4, "ngIf"], [1, "cw-input-area"], [1, "cw-input-wrap"], ["placeholder", "Ask your question\u2026", "rows", "1", 1, "cw-textarea", 3, "ngModelChange", "input", "keydown", "ngModel", "disabled", "maxlength"], ["title", "Send", 1, "cw-send-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "btn-spinner", 4, "ngIf"], [1, "cw-footer"], [1, "cw-hint"], [1, "cw-count"], [1, "cw-chip", 3, "click", "disabled"], [1, "cw-empty"], [1, "empty-orb"], [1, "empty-title"], [1, "empty-sub"], [1, "quick-grid"], ["class", "quick-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-btn", 3, "click"], [1, "msg-row"], [1, "msg-avatar"], [1, "msg-content"], [1, "msg-bubble", 3, "innerHTML"], [1, "msg-meta"], [1, "msg-time"], ["class", "msg-tick", 4, "ngIf"], [1, "msg-tick"], [1, "msg-row", "bot"], [1, "typing-bubble"], [1, "t-dot"], [1, "btn-spinner"]], template: function ChatbotComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function ChatbotComponent_Template_div_click_0_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(1, "span", 3);
        \u0275\u0275text(2, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 4);
        \u0275\u0275text(4, "\u2715");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ChatbotComponent_span_5_Template, 2, 1, "span", 5);
        \u0275\u0275element(6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ChatbotComponent_div_7_Template, 36, 16, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275classProp("open", ctx.isOpen);
        \u0275\u0275attribute("aria-label", ctx.isOpen ? "Close chat" : "Open support");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0 && !ctx.isOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  --bg: #0d0f1c;\n  --s1: #13162b;\n  --s2: #1b1f38;\n  --s3: #222744;\n  --border: rgba(255,255,255,0.07);\n  --border2: rgba(255,255,255,0.12);\n  --accent: #6c63ff;\n  --accent2: #a78bfa;\n  --pink: #f472b6;\n  --green: #34d399;\n  --text: #eef0f8;\n  --muted: #7b82a8;\n  --muted2: #9ca3c4;\n  --shadow: 0 16px 60px rgba(0,0,0,0.6);\n  --glow: 0 0 50px rgba(108,99,255,0.2);\n  --r: 20px;\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2147483640;\n  font-family:\n    "DM Sans",\n    "Outfit",\n    system-ui,\n    sans-serif;\n}\n@keyframes _ngcontent-%COMP%_windowIn {\n  from {\n    opacity: 0;\n    transform: scale(0.92) translateY(20px);\n    transform-origin: bottom right;\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_msgIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_dot {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.35;\n  }\n  30% {\n    transform: translateY(-6px);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.35;\n  }\n  50% {\n    transform: scale(1.9);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-7px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fabRing {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.9);\n    opacity: 0;\n  }\n}\n.chat-fab[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--pink));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  box-shadow: 0 6px 28px rgba(108, 99, 255, 0.5);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;\n  z-index: 2147483647;\n}\n.chat-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 10px 36px rgba(108, 99, 255, 0.65);\n}\n.chat-fab.open[_ngcontent-%COMP%]   .fab-icon-open[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.5) rotate(90deg);\n}\n.chat-fab.open[_ngcontent-%COMP%]   .fab-icon-close[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1) rotate(0deg);\n}\n.fab-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: rgba(108, 99, 255, 0.4);\n  animation: _ngcontent-%COMP%_fabRing 2.4s ease-out infinite;\n}\n.fab-icon-open[_ngcontent-%COMP%], \n.fab-icon-close[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 24px;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.fab-icon-close[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  opacity: 0;\n  transform: scale(0.5) rotate(-90deg);\n  color: white;\n}\n.fab-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  background: var(--pink);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--bg);\n  animation: _ngcontent-%COMP%_msgIn 0.3s both;\n}\n.chat-window[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 72px;\n  right: 0;\n  width: 390px;\n  height: 600px;\n  background: var(--s1);\n  border: 1px solid var(--border2);\n  border-radius: var(--r);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: var(--shadow), var(--glow);\n  z-index: 2147483646;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.92) translateY(20px);\n  transform-origin: bottom right;\n  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.chat-window.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n  transform: scale(1) translateY(0);\n}\n@media (max-width: 480px) {\n  .chat-window[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    height: 90vh;\n    border-radius: 24px 24px 0 0;\n  }\n}\n.cw-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.cw-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.cw-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--pink));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 0 4px 16px rgba(108, 99, 255, 0.35);\n}\n.cw-status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: var(--green);\n  border: 2px solid var(--s1);\n}\n.cw-status-dot[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: var(--green);\n  animation: _ngcontent-%COMP%_pulse 2.5s ease-out infinite;\n}\n.cw-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: -0.2px;\n  margin-bottom: 2px;\n}\n.cw-online[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--green);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.cw-online[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--green);\n}\n.cw-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.cw-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: var(--s2);\n  border: 1px solid var(--border);\n  color: var(--muted2);\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.cw-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--s3);\n  color: var(--text);\n  transform: scale(1.05);\n}\n.cw-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  scrollbar-width: none;\n}\n.cw-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cw-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 50px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--muted2);\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cw-chip[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--s3);\n  border-color: rgba(108, 99, 255, 0.4);\n  color: var(--text);\n  transform: translateY(-1px);\n}\n.cw-chip[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  scroll-behavior: smooth;\n}\n.cw-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--s3);\n  border-radius: 3px;\n}\n.cw-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  padding: 16px 8px;\n  flex: 1;\n}\n.empty-orb[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(108, 99, 255, 0.2),\n      rgba(244, 114, 182, 0.2));\n  border: 1px solid rgba(108, 99, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 4px;\n  animation: _ngcontent-%COMP%_float 3.5s ease-in-out infinite;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  letter-spacing: -0.2px;\n  margin-bottom: 4px;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--muted);\n  line-height: 1.6;\n  max-width: 280px;\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  justify-content: center;\n  margin-top: 8px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 50px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--muted2);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: var(--s3);\n  border-color: rgba(108, 99, 255, 0.4);\n  color: var(--text);\n  transform: translateY(-2px);\n}\n.msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  animation: _ngcontent-%COMP%_msgIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.msg-row.user[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  align-self: flex-end;\n  max-width: 85%;\n}\n.msg-row.bot[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  max-width: 90%;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  margin-top: 3px;\n}\n.bot[_ngcontent-%COMP%]   .msg-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent2));\n  box-shadow: 0 3px 10px rgba(108, 99, 255, 0.3);\n}\n.user[_ngcontent-%COMP%]   .msg-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--pink),\n      #fb7185);\n  box-shadow: 0 3px 10px rgba(244, 114, 182, 0.3);\n}\n.msg-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  padding: 11px 15px;\n  font-size: 13.5px;\n  line-height: 1.65;\n  border-radius: 16px;\n}\n.msg-bubble[_ngcontent-%COMP%]     strong {\n  font-weight: 700;\n}\n.bot[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: var(--s2);\n  border: 1px solid var(--border2);\n  border-top-left-radius: 4px;\n  color: var(--text);\n}\n.bot[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%]     strong {\n  color: var(--accent2);\n}\n.user[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #8b5cf6);\n  border-top-right-radius: 4px;\n  color: white;\n  box-shadow: 0 4px 18px rgba(108, 99, 255, 0.3);\n}\n.msg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--muted);\n  padding: 0 3px;\n}\n.user[_ngcontent-%COMP%]   .msg-meta[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.msg-tick[_ngcontent-%COMP%] {\n  color: var(--accent2);\n  font-size: 11px;\n}\n.typing-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 16px;\n  border-radius: 16px;\n  border-top-left-radius: 4px;\n  background: var(--s2);\n  border: 1px solid var(--border2);\n}\n.t-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--muted);\n  animation: _ngcontent-%COMP%_dot 1.4s ease-in-out infinite;\n}\n.t-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.t-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.cw-input-area[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.02);\n}\n.cw-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 9px;\n  background: var(--s2);\n  border: 1.5px solid var(--border2);\n  border-radius: 16px;\n  padding: 10px 12px;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.cw-input-wrap.focused[_ngcontent-%COMP%], \n.cw-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(108, 99, 255, 0.5);\n  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--text);\n  font-family: inherit;\n  font-size: 13.5px;\n  line-height: 1.5;\n  resize: none;\n  min-height: 21px;\n  max-height: 100px;\n}\n.cw-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--muted);\n}\n.cw-textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-send-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--accent2));\n  border: none;\n  color: white;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  box-shadow: 0 3px 14px rgba(108, 99, 255, 0.35);\n}\n.cw-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.08);\n  box-shadow: 0 5px 18px rgba(108, 99, 255, 0.5);\n}\n.cw-send-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.cw-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.cw-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6px;\n  padding: 0 3px;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--muted);\n}\n.cw-count[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--muted);\n}\n.cw-count.warn[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-weight: 600;\n}\n/*# sourceMappingURL=chatbot.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "app\\freelancer\\chatbot\\chatbot.component.ts", lineNumber: 19 });
})();

// src/app/freelancer/layout/fl-layout.component.ts
var FlLayoutComponent = class _FlLayoutComponent {
  static {
    this.\u0275fac = function FlLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlLayoutComponent, selectors: [["app-fl-layout"]], decls: 5, vars: 0, consts: [[1, "fl-layout"], [1, "fl-content"]], template: function FlLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-fl-navbar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-chatbot");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, FlNavbarComponent, ChatbotComponent], styles: ["\n\n.fl-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--bo-bg-primary);\n  font-family: var(--font-body);\n}\n.fl-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 32px;\n  overflow-y: auto;\n  max-width: 1400px;\n  width: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .fl-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=fl-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlLayoutComponent, { className: "FlLayoutComponent", filePath: "app\\freelancer\\layout\\fl-layout.component.ts", lineNumber: 36 });
})();

// src/app/core/services/freelancer-stats.service.ts
var FreelancerStatsService = class _FreelancerStatsService {
  constructor(http) {
    this.http = http;
    this.api = environment.apiUrl;
  }
  getCompleteness(userId) {
    return this.http.get(`${this.api}/profiles/${userId}/completeness`);
  }
  getReactivity(userId) {
    return this.http.get(`${this.api}/freelancers/${userId}/reactivity`);
  }
  getOverload(userId) {
    return this.http.get(`${this.api}/freelancers/${userId}/overload`);
  }
  getAvailability(userId) {
    return this.http.get(`${this.api}/availability/${userId}`);
  }
  getMarketHeatmap() {
    return this.http.get(`${this.api}/market/heatmap`);
  }
  static {
    this.\u0275fac = function FreelancerStatsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FreelancerStatsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FreelancerStatsService, factory: _FreelancerStatsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/freelancer/dashboard/dashboard.component.ts
var _c02 = () => [1, 2, 3, 4, 5];
var _c12 = () => ["#7F77DD", "#1D9E75", "#D85A30", "#BA7517", "#D4537E"];
function FlDashboardComponent_div_16_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Missing: ", ctx_r0.completeness.missing.join(", "), " ");
  }
}
function FlDashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FlDashboardComponent_div_16_span_4_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275element(6, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profile ", ctx_r0.completeness.score, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.completeness.missing.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.completeness.score, "%");
    \u0275\u0275classProp("fill-low", ctx_r0.completeness.score < 40)("fill-mid", ctx_r0.completeness.score >= 40 && ctx_r0.completeness.score < 80)("fill-high", ctx_r0.completeness.score >= 80);
  }
}
function FlDashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Loading your dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FlDashboardComponent_div_25_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275text(3, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.reactivity.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Reactivity \xB7 ", ctx_r0.reactivity.label, "");
  }
}
function FlDashboardComponent_div_25_div_53_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", s_r2 <= ((ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.rating) || 0));
  }
}
function FlDashboardComponent_div_25_div_53_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.skills);
  }
}
function FlDashboardComponent_div_25_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275template(2, FlDashboardComponent_div_25_div_53_span_2_Template, 2, 2, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 81);
    \u0275\u0275text(7, "/ 5.0 \xB7 Your Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FlDashboardComponent_div_25_div_53_div_8_Template, 3, 1, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.rating, "1.1-1"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.skills);
  }
}
function FlDashboardComponent_div_25_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Maximum workload reached");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r0.overload.activeProjects, " active projects out of ", ctx_r0.overload.threshold, " max. You cannot accept new proposals at this time. ");
  }
}
function FlDashboardComponent_div_25_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275element(4, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 94);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r3.acceptanceRate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 4, c_r3.acceptanceRate, "1.0-1"), "%");
  }
}
function FlDashboardComponent_div_25_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, FlDashboardComponent_div_25_div_79_div_1_Template, 8, 7, "div", 89);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 1, ctx_r0.proposalAnalytics.acceptanceByCategory, 0, 4));
  }
}
function FlDashboardComponent_div_25_div_80_div_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4B0} ", p_r4.proposedBudget, " TND");
  }
}
function FlDashboardComponent_div_25_div_80_div_14_span_10_Template(rf, ctx) {
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
function FlDashboardComponent_div_25_div_80_div_14_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} ", p_r4.clientEmail, "");
  }
}
function FlDashboardComponent_div_25_div_80_div_14_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function FlDashboardComponent_div_25_div_80_div_14_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDeliveryModal(p_r4));
    });
    \u0275\u0275text(1, " \u{1F4E6} Submit Delivery ");
    \u0275\u0275elementEnd();
  }
}
function FlDashboardComponent_div_25_div_80_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " \u23F3 Awaiting client ");
    \u0275\u0275elementEnd();
  }
}
function FlDashboardComponent_div_25_div_80_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100);
    \u0275\u0275element(2, "div", 101);
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4, "\u{1F680}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 103)(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 105);
    \u0275\u0275template(9, FlDashboardComponent_div_25_div_80_div_14_span_9_Template, 2, 1, "span", 106)(10, FlDashboardComponent_div_25_div_80_div_14_span_10_Template, 2, 1, "span", 107)(11, FlDashboardComponent_div_25_div_80_div_14_span_11_Template, 2, 1, "span", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, FlDashboardComponent_div_25_div_80_div_14_button_12_Template, 2, 0, "button", 108)(13, FlDashboardComponent_div_25_div_80_div_14_div_13_Template, 2, 0, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275styleProp("--i", i_r6);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dot-delivered", p_r4.status === "DELIVERED");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r4.projectTitle || "Project #" + p_r4.projectId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.proposedBudget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.deliveryTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.clientEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "ACCEPTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "DELIVERED");
  }
}
function FlDashboardComponent_div_25_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 45)(2, "div", 46)(3, "span", 47);
    \u0275\u0275text(4, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Projects in Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 74);
    \u0275\u0275text(10, "View all ");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 97);
    \u0275\u0275template(14, FlDashboardComponent_div_25_div_80_div_14_Template, 14, 10, "div", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.inProgressProposals.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.inProgressProposals);
  }
}
function FlDashboardComponent_div_25_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 113);
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("slot-used", i_r7 < ctx_r0.availability.occupiedSlots);
  }
}
function FlDashboardComponent_div_25_div_114_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "div", 117);
    \u0275\u0275elementStart(2, "span", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 119);
    \u0275\u0275element(5, "div", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", \u0275\u0275pureFunction0(8, _c12)[i_r9 % 5]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getMarketBarWidth(m_r8.projectCount), "%")("background", \u0275\u0275pureFunction0(9, _c12)[i_r9 % 5]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.projectCount);
  }
}
function FlDashboardComponent_div_25_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, FlDashboardComponent_div_25_div_114_div_1_Template, 8, 10, "div", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.marketStats);
  }
}
function FlDashboardComponent_div_25_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No market data available");
    \u0275\u0275elementEnd()();
  }
}
function FlDashboardComponent_div_25_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "\u{1F310}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No open projects right now");
    \u0275\u0275elementEnd()();
  }
}
function FlDashboardComponent_div_25_div_129_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4B0} ", p_r10.budget, " TND");
  }
}
function FlDashboardComponent_div_25_div_129_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementStart(2, "div", 103)(3, "div", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 129);
    \u0275\u0275template(6, FlDashboardComponent_div_25_div_129_div_1_span_6_Template, 2, 1, "span", 130);
    \u0275\u0275elementStart(7, "span", 131);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 132);
    \u0275\u0275text(10, "Apply");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    \u0275\u0275styleProp("--i", i_r11);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r10.budget);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.category);
  }
}
function FlDashboardComponent_div_25_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, FlDashboardComponent_div_25_div_129_div_1_Template, 11, 5, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.openProjects);
  }
}
function FlDashboardComponent_div_25_div_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No proposals sent yet");
    \u0275\u0275elementEnd()();
  }
}
function FlDashboardComponent_div_25_div_142_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "span");
    \u0275\u0275text(2, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r12.proposedBudget, " TND ");
  }
}
function FlDashboardComponent_div_25_div_142_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 103)(4, "div", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FlDashboardComponent_div_25_div_142_div_1_div_6_Template, 4, 1, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--i", i_r13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.projectTitle == null ? null : p_r12.projectTitle.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.projectTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.proposedBudget);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getProposalStatusClass(p_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r12.status);
  }
}
function FlDashboardComponent_div_25_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, FlDashboardComponent_div_25_div_142_div_1_Template, 9, 7, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.myProposals);
  }
}
function FlDashboardComponent_div_25_div_143_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275element(1, "span", 145);
    \u0275\u0275elementStart(2, "div", 146)(3, "div", 147);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 149);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275styleProp("--i", i_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r14.message);
  }
}
function FlDashboardComponent_div_25_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 45)(2, "div", 46)(3, "span", 47);
    \u0275\u0275text(4, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 140);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 141);
    \u0275\u0275text(10, "View all ");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 142);
    \u0275\u0275template(14, FlDashboardComponent_div_25_div_143_div_14_Template, 9, 4, "div", 143);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.notifications.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function FlDashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "div", 31);
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10, "Open Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37);
    \u0275\u0275element(13, "div", 31);
    \u0275\u0275elementStart(14, "div", 32);
    \u0275\u0275text(15, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 33)(17, "span", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 35);
    \u0275\u0275text(20, "My Proposals");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 38);
    \u0275\u0275element(23, "div", 31);
    \u0275\u0275elementStart(24, "div", 32);
    \u0275\u0275text(25, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 33)(27, "span", 34);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 35);
    \u0275\u0275text(30, "Accepted");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 39);
    \u0275\u0275element(33, "div", 31);
    \u0275\u0275elementStart(34, "div", 32);
    \u0275\u0275text(35, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 33)(37, "span", 34);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 35);
    \u0275\u0275text(40, "In Progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 40);
    \u0275\u0275element(43, "div", 31);
    \u0275\u0275elementStart(44, "div", 32);
    \u0275\u0275text(45, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 33)(47, "span", 34);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 35);
    \u0275\u0275text(50, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, FlDashboardComponent_div_25_div_52_Template, 10, 2, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, FlDashboardComponent_div_25_div_53_Template, 9, 7, "div", 42)(54, FlDashboardComponent_div_25_div_54_Template, 8, 2, "div", 43);
    \u0275\u0275elementStart(55, "div", 44)(56, "div", 45)(57, "div", 46)(58, "span", 47);
    \u0275\u0275text(59, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h3");
    \u0275\u0275text(61, "Proposal Performance Analytics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 48)(63, "div", 49)(64, "span", 50);
    \u0275\u0275text(65, "Global acceptance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 49)(70, "span", 50);
    \u0275\u0275text(71, "Avg client response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "strong");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 49)(75, "span", 50);
    \u0275\u0275text(76, "Best submit window");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "strong");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(79, FlDashboardComponent_div_25_div_79_Template, 3, 5, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, FlDashboardComponent_div_25_div_80_Template, 15, 2, "div", 52);
    \u0275\u0275elementStart(81, "div", 53)(82, "div", 54)(83, "div", 45)(84, "div", 46)(85, "span", 47);
    \u0275\u0275text(86, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "h3");
    \u0275\u0275text(88, "My Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 55);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 56)(92, "div", 57)(93, "div", 58)(94, "span", 59);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 60);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 61)(99, "div", 62);
    \u0275\u0275text(100, "Slots used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 63);
    \u0275\u0275template(102, FlDashboardComponent_div_25_div_102_Template, 1, 2, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p", 65);
    \u0275\u0275text(104, "Available from: ");
    \u0275\u0275elementStart(105, "strong");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(107, "div", 66)(108, "div", 45)(109, "div", 46)(110, "span", 47);
    \u0275\u0275text(111, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "h3");
    \u0275\u0275text(113, "Market right now");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(114, FlDashboardComponent_div_25_div_114_Template, 2, 1, "div", 67)(115, FlDashboardComponent_div_25_div_115_Template, 5, 0, "div", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 69)(117, "div", 70)(118, "div", 45)(119, "div", 46)(120, "span", 47);
    \u0275\u0275text(121, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "h3");
    \u0275\u0275text(123, "New Opportunities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "a", 71);
    \u0275\u0275text(125, "Browse all ");
    \u0275\u0275elementStart(126, "span");
    \u0275\u0275text(127, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(128, FlDashboardComponent_div_25_div_128_Template, 5, 0, "div", 68)(129, FlDashboardComponent_div_25_div_129_Template, 2, 1, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 73)(131, "div", 45)(132, "div", 46)(133, "span", 47);
    \u0275\u0275text(134, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "h3");
    \u0275\u0275text(136, "My Recent Proposals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "a", 74);
    \u0275\u0275text(138, "View all ");
    \u0275\u0275elementStart(139, "span");
    \u0275\u0275text(140, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(141, FlDashboardComponent_div_25_div_141_Template, 5, 0, "div", 68)(142, FlDashboardComponent_div_25_div_142_Template, 2, 1, "div", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(143, FlDashboardComponent_div_25_div_143_Template, 15, 2, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.openProjects);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.myProposals);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.accepted);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.inProgress);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.pending);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.reactivity.score > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.rating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.overload.overloaded);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(68, 27, ctx_r0.proposalAnalytics.globalAcceptanceRate, "1.0-1"), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getAvgClientResponseLabel());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.proposalAnalytics.bestSubmitWindow.day, " \xB7 ", ctx_r0.getBestSubmitHourRange(), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.proposalAnalytics.acceptanceByCategory.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.inProgressProposals.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r0.getAvailabilityClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAvailabilityLabel(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.availability.occupiedSlots);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r0.availability.maxSlots, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.range(ctx_r0.availability.maxSlots));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.availability.availableFrom);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.marketStats.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.marketStats.length === 0);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.openProjects.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.openProjects.length > 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.myProposals.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.myProposals.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
  }
}
function FlDashboardComponent_div_26_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prop_r18 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Client: ", prop_r18.clientEmail, "");
  }
}
function FlDashboardComponent_div_26_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.deliveryError, "");
  }
}
function FlDashboardComponent_div_26_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6} Submit Delivery");
    \u0275\u0275elementEnd();
  }
}
function FlDashboardComponent_div_26_div_1_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 177);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function FlDashboardComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275listener("click", function FlDashboardComponent_div_26_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 153)(2, "div")(3, "div", 154);
    \u0275\u0275text(4, "Submit your work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 155);
    \u0275\u0275text(6, "\u{1F4E6} Submit Delivery");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 156);
    \u0275\u0275listener("click", function FlDashboardComponent_div_26_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeDeliveryModal());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 157)(10, "div", 158)(11, "span", 159);
    \u0275\u0275text(12, "\u{1F680}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 160);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FlDashboardComponent_div_26_div_1_div_16_Template, 2, 1, "div", 161);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 162)(18, "label", 163);
    \u0275\u0275text(19, "Delivery link / URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function FlDashboardComponent_div_26_div_1_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.deliveryForm.link, $event) || (ctx_r0.deliveryForm.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 162)(22, "label", 163);
    \u0275\u0275text(23, " Delivery message ");
    \u0275\u0275elementStart(24, "span", 165);
    \u0275\u0275text(25, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "textarea", 166);
    \u0275\u0275twoWayListener("ngModelChange", function FlDashboardComponent_div_26_div_1_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.deliveryForm.message, $event) || (ctx_r0.deliveryForm.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 167);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, FlDashboardComponent_div_26_div_1_div_29_Template, 2, 1, "div", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 169)(31, "div", 170);
    \u0275\u0275text(32, "\u{1F4E7} Client will be notified by email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 171)(34, "button", 172);
    \u0275\u0275listener("click", function FlDashboardComponent_div_26_div_1_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeDeliveryModal());
    });
    \u0275\u0275text(35, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 173);
    \u0275\u0275listener("click", function FlDashboardComponent_div_26_div_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitDelivery());
    });
    \u0275\u0275template(37, FlDashboardComponent_div_26_div_1_span_37_Template, 2, 0, "span", 107)(38, FlDashboardComponent_div_26_div_1_span_38_Template, 4, 0, "span", 174);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prop_r18 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(prop_r18.projectTitle || "Project #" + prop_r18.projectId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", prop_r18.clientEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.deliveryForm.link);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.deliveryForm.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.deliveryForm.message.length, " / 500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deliveryError);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
  }
}
function FlDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function FlDashboardComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeliveryModal());
    });
    \u0275\u0275template(1, FlDashboardComponent_div_26_div_1_Template, 39, 9, "div", 151);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedProposal);
  }
}
var FlDashboardComponent = class _FlDashboardComponent {
  constructor(authService, projectService, proposalService, notifService, http, statsService) {
    this.authService = authService;
    this.projectService = projectService;
    this.proposalService = proposalService;
    this.notifService = notifService;
    this.http = http;
    this.statsService = statsService;
    this.openProjects = [];
    this.myProposals = [];
    this.inProgressProposals = [];
    this.notifications = [];
    this.isLoading = true;
    this.isSubmitting = false;
    this.isDark = false;
    this.stats = {
      openProjects: 0,
      myProposals: 0,
      accepted: 0,
      inProgress: 0,
      pending: 0,
      unreadNotifs: 0
    };
    this.reactivity = { score: 0, label: "" };
    this.overload = { overloaded: false, activeProjects: 0, threshold: 5 };
    this.completeness = {
      score: 0,
      missing: []
    };
    this.availability = {
      status: "AVAILABLE",
      occupiedSlots: 0,
      maxSlots: 5,
      availableFrom: ""
    };
    this.marketStats = [];
    this.proposalAnalytics = {
      totalProposals: 0,
      acceptedProposals: 0,
      globalAcceptanceRate: 0,
      acceptanceByCategory: [],
      averageClientResponseHours: 0,
      bestSubmitWindow: {
        day: "MONDAY",
        hour: 10,
        sampleSize: 0,
        basedOnAcceptedOnly: false
      }
    };
    this.deliveryModal = false;
    this.selectedProposal = null;
    this.deliveryError = "";
    this.deliveryForm = { link: "", message: "" };
    this.api = environment.apiUrl;
  }
  ngOnInit() {
    this.isDark = localStorage.getItem("theme") === "dark" || document.body.classList.contains("dark");
    this.authService.checkAuth();
    this.loadAll();
    this.computeCompleteness();
    const observer = new MutationObserver(() => {
      this.isDark = document.body.classList.contains("dark");
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }
  computeCompleteness() {
    const user = this.authService.currentUser;
    if (!user)
      return;
    const fields = [
      { key: "firstName", label: "First name" },
      { key: "email", label: "Email" }
    ];
    const missing = [];
    let filled = 0;
    for (const f of fields) {
      if (user[f.key]) {
        filled++;
      } else {
        missing.push(f.label);
      }
    }
    this.completeness = {
      score: Math.round(filled / fields.length * 100),
      missing
    };
  }
  getGreeting() {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12)
      return "morning";
    if (h < 18)
      return "afternoon";
    return "evening";
  }
  loadAll() {
    const userId = this.authService.currentUser?.id ? String(this.authService.currentUser.id) : null;
    this.projectService.getOpen().subscribe((projects) => {
      this.openProjects = projects.slice(0, 5);
      this.stats.openProjects = projects.length;
    });
    if (userId) {
      this.proposalService.getAll(void 0, userId).subscribe({
        next: (proposals) => {
          this.inProgressProposals = proposals.filter((p) => p.status === "ACCEPTED" || p.status === "DELIVERED");
          this.myProposals = proposals.slice(0, 5);
          this.stats.myProposals = proposals.length;
          this.stats.accepted = proposals.filter((p) => p.status === "ACCEPTED").length;
          this.stats.inProgress = this.inProgressProposals.length;
          this.stats.pending = proposals.filter((p) => p.status === "PENDING").length;
          this.isLoading = false;
          const accepted = this.stats.accepted;
          const total = proposals.length;
          fetch("http://localhost:8080/api/badges/freelancer/proposal-submitted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ freelancerId: Number(userId), totalSubmitted: total })
          }).catch(() => {
          });
          if (accepted > 0) {
            fetch("http://localhost:8080/api/badges/freelancer/proposal-accepted", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ freelancerId: Number(userId), accepted, total })
            }).catch(() => {
            });
          }
        },
        error: () => {
          this.isLoading = false;
        }
      });
      this.statsService.getAvailability(userId).subscribe({
        next: (a) => {
          this.availability = a;
        },
        error: () => {
        }
      });
      this.statsService.getMarketHeatmap().subscribe({
        next: (m) => {
          this.marketStats = m;
        },
        error: () => {
        }
      });
      this.http.get(`${this.api}/proposals/analytics/${userId}`).subscribe({
        next: (data) => {
          this.proposalAnalytics = data;
        },
        error: () => {
        }
      });
      this.notifService.getUnread(userId).subscribe({
        next: (n) => {
          this.notifications = n.slice(0, 5);
          this.stats.unreadNotifs = n.length;
        },
        error: () => {
        }
      });
    } else {
      this.isLoading = false;
    }
  }
  getProposalStatusClass(s) {
    const m = {
      PENDING: "status-pending",
      ACCEPTED: "status-accept",
      DELIVERED: "status-deliver",
      COMPLETED: "status-complete",
      REJECTED: "status-reject",
      WITHDRAWN: "status-cancel"
    };
    return m[s] ?? "";
  }
  getAvailabilityClass() {
    return "status-active";
  }
  getAvailabilityLabel() {
    return "Available";
  }
  getMarketBarWidth(count) {
    const max = Math.max(...this.marketStats.map((m) => m.projectCount), 1);
    return Math.round(count / max * 100);
  }
  range(n) {
    return Array.from({ length: n }, (_, i) => i);
  }
  getBestSubmitHourRange() {
    const h = this.proposalAnalytics.bestSubmitWindow?.hour ?? 10;
    const next = (h + 1) % 24;
    return `${String(h).padStart(2, "0")}:00 - ${String(next).padStart(2, "0")}:00`;
  }
  getAvgClientResponseLabel() {
    const hours = this.proposalAnalytics.averageClientResponseHours ?? 0;
    if (hours <= 0)
      return "0 min";
    if (hours < 1) {
      const minutes = Math.max(1, Math.round(hours * 60));
      return `${minutes} min`;
    }
    return `${hours.toFixed(1)}h`;
  }
  openDeliveryModal(p) {
    this.selectedProposal = p;
    this.deliveryForm = { link: "", message: "" };
    this.deliveryError = "";
    this.deliveryModal = true;
  }
  closeDeliveryModal() {
    this.deliveryModal = false;
    this.selectedProposal = null;
    this.deliveryError = "";
  }
  submitDelivery() {
    if (!this.deliveryForm.link.trim()) {
      this.deliveryError = "Please provide a delivery link.";
      return;
    }
    if (!this.selectedProposal?.projectId)
      return;
    this.isSubmitting = true;
    this.deliveryError = "";
    this.http.patch(`${this.api}/projects/${this.selectedProposal.projectId}/deliver`, {
      deliveryLink: this.deliveryForm.link,
      deliveryMessage: this.deliveryForm.message,
      freelancerId: String(this.authService.currentUser?.id),
      proposalId: this.selectedProposal.id
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.closeDeliveryModal();
        this.loadAll();
      },
      error: (err) => {
        this.deliveryError = err?.error?.error || "Failed to submit.";
        this.isSubmitting = false;
      }
    });
  }
  static {
    this.\u0275fac = function FlDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(ProposalService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FreelancerStatsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlDashboardComponent, selectors: [["app-fl-dashboard"]], decls: 27, vars: 8, consts: [[1, "dash"], [1, "hero"], [1, "hero-orb", "hero-orb-1"], [1, "hero-orb", "hero-orb-2"], [1, "hero-orb", "hero-orb-3"], [1, "hero-content"], [1, "hero-text"], [1, "hero-greeting"], [1, "greeting-dot"], [1, "hero-name"], [1, "wave-emoji"], [1, "hero-sub"], ["class", "profile-completeness", 4, "ngIf"], ["routerLink", "/freelancer/projects", 1, "btn-hero"], [1, "btn-hero-icon"], [1, "btn-hero-arrow"], ["class", "loading-wrap", 4, "ngIf"], ["class", "content-wrap", 4, "ngIf"], ["class", "delivery-overlay", 3, "click", 4, "ngIf"], [1, "profile-completeness"], [1, "completeness-header"], [1, "completeness-label"], ["class", "completeness-tip", 4, "ngIf"], [1, "completeness-bar"], [1, "completeness-fill"], [1, "completeness-tip"], [1, "loading-wrap"], [1, "loader-ring"], [1, "content-wrap"], [1, "stats-row"], [1, "stat-card", "card-purple", 2, "--delay", "0s"], [1, "card-bg-glow"], [1, "card-icon-wrap"], [1, "card-body"], [1, "card-val"], [1, "card-lbl"], [1, "card-bar"], [1, "stat-card", "card-blue", 2, "--delay", "0.07s"], [1, "stat-card", "card-green", 2, "--delay", "0.14s"], [1, "stat-card", "card-teal", 2, "--delay", "0.21s"], [1, "stat-card", "card-amber", 2, "--delay", "0.28s"], ["class", "stat-card card-pink", "style", "--delay:0.35s", 4, "ngIf"], ["class", "rating-strip", 4, "ngIf"], ["class", "overload-alert", 4, "ngIf"], [1, "panel", "panel-analytics"], [1, "panel-head"], [1, "panel-title"], [1, "panel-icon-wrap"], [1, "analytics-top"], [1, "analytics-chip"], [1, "chip-label"], ["class", "analytics-cats", 4, "ngIf"], ["class", "panel-inprogress", 4, "ngIf"], [1, "advanced-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "20px"], [1, "panel", "panel-availability"], [1, "status-badge", 3, "ngClass"], [1, "availability-body"], [1, "avail-big"], [1, "avail-circle"], [1, "avail-num"], [1, "avail-of"], [1, "avail-desc"], [1, "avail-label"], [1, "avail-slots"], ["class", "slot", 3, "slot-used", 4, "ngFor", "ngForOf"], [1, "avail-from"], [1, "panel", "panel-market"], ["class", "market-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "main-grid"], [1, "panel", "panel-projects"], ["routerLink", "/freelancer/projects", 1, "see-all"], ["class", "item-feed", 4, "ngIf"], [1, "panel", "panel-proposals"], ["routerLink", "/freelancer/proposals", 1, "see-all"], ["class", "panel notif-panel", 4, "ngIf"], [1, "stat-card", "card-pink", 2, "--delay", "0.35s"], [1, "rating-strip"], [1, "rating-stars"], ["class", "star", 3, "on", 4, "ngFor", "ngForOf"], [1, "rating-num"], [1, "rating-label"], ["class", "skill-chips", 4, "ngIf"], [1, "star"], [1, "skill-chips"], [1, "skill-chip"], [1, "overload-alert"], [1, "overload-icon"], [1, "analytics-cats"], ["class", "analytics-cat", 4, "ngFor", "ngForOf"], [1, "analytics-cat"], [1, "cat-name"], [1, "cat-bar"], [1, "cat-bar-fill"], [1, "cat-rate"], [1, "panel-inprogress"], [1, "count-pill"], [1, "inprogress-list"], ["class", "inprogress-item", 3, "--i", 4, "ngFor", "ngForOf"], [1, "inprogress-item"], [1, "item-left"], [1, "item-color-dot"], [1, "item-emoji"], [1, "item-info"], [1, "item-title"], [1, "item-meta"], ["class", "meta-budget", 4, "ngIf"], [4, "ngIf"], ["class", "btn-deliver", 3, "click", 4, "ngIf"], ["class", "delivered-badge", 4, "ngIf"], [1, "meta-budget"], [1, "btn-deliver", 3, "click"], [1, "delivered-badge"], [1, "slot"], [1, "market-list"], ["class", "market-item", 4, "ngFor", "ngForOf"], [1, "market-item"], [1, "market-dot"], [1, "market-cat"], [1, "market-bar-wrap"], [1, "market-bar-fill"], [1, "market-count"], [1, "empty-state"], [1, "empty-icon"], [1, "item-feed"], ["class", "project-item", 3, "--i", 4, "ngFor", "ngForOf"], [1, "project-item"], [1, "item-dot"], [1, "item-name"], [1, "item-tags"], ["class", "tag tag-budget", 4, "ngIf"], [1, "tag", "tag-cat"], ["routerLink", "/freelancer/projects", 1, "btn-apply"], [1, "tag", "tag-budget"], ["class", "proposal-item", 3, "--i", 4, "ngFor", "ngForOf"], [1, "proposal-item"], [1, "proposal-avatar"], ["class", "proposal-amount", 4, "ngIf"], [1, "proposal-amount"], [1, "panel", "notif-panel"], [1, "count-badge"], ["routerLink", "/freelancer/notifications", 1, "see-all"], [1, "notif-grid"], ["class", "notif-item", 3, "--i", 4, "ngFor", "ngForOf"], [1, "notif-item"], [1, "notif-pulse-dot"], [1, "notif-body"], [1, "notif-title"], [1, "notif-msg"], [1, "notif-arrow"], [1, "delivery-overlay", 3, "click"], ["class", "delivery-modal", 3, "click", 4, "ngIf"], [1, "delivery-modal", 3, "click"], [1, "dm-header"], [1, "dm-eyebrow"], [1, "dm-title"], [1, "dm-close", 3, "click"], [1, "dm-body"], [1, "dm-project-box"], [1, "dm-proj-icon"], [1, "dm-proj-name"], ["class", "dm-proj-client", 4, "ngIf"], [1, "dm-field"], [1, "dm-label"], ["type", "url", "placeholder", "https://github.com/yourrepo or https://drive.google.com/...", 1, "dm-input", 3, "ngModelChange", "ngModel"], [1, "dm-optional"], ["placeholder", "Describe what you've delivered, how to test it, any notes for the client...", "maxlength", "500", 1, "dm-input", "dm-textarea", 3, "ngModelChange", "ngModel"], [1, "dm-charcount"], ["class", "dm-error", 4, "ngIf"], [1, "dm-footer"], [1, "dm-hint"], [1, "dm-btns"], [1, "dm-btn-cancel", 3, "click"], [1, "dm-btn-submit", 3, "click", "disabled"], ["class", "dm-dots", 4, "ngIf"], [1, "dm-proj-client"], [1, "dm-error"], [1, "dm-dots"]], template: function FlDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "p", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementStart(12, "span", 10);
        \u0275\u0275text(13, "\u{1F44B}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 11);
        \u0275\u0275text(15, "Track your proposals, discover projects and grow your freelance career.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, FlDashboardComponent_div_16_Template, 7, 10, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 13)(18, "span", 14);
        \u0275\u0275text(19, "\u{1F680}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "Browse Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23, "\u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(24, FlDashboardComponent_div_24_Template, 8, 0, "div", 16)(25, FlDashboardComponent_div_25_Template, 144, 30, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, FlDashboardComponent_div_26_Template, 2, 1, "div", 18);
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark", ctx.isDark);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" Good ", ctx.getGreeting(), ", ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (ctx.authService.currentUser == null ? null : ctx.authService.currentUser.firstName) || (ctx.authService.currentUser == null ? null : ctx.authService.currentUser.name), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.completeness.score < 100);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.deliveryModal);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink, SlicePipe, DecimalPipe], styles: ['\n\n.dash[_ngcontent-%COMP%] {\n  --bg: #f0f2fa;\n  --surface: #ffffff;\n  --surface2: #f7f8ff;\n  --border: rgba(99,102,241,0.1);\n  --text: #111827;\n  --text-muted: #6b7280;\n  --text-light: #9ca3af;\n  --shadow-sm: 0 2px 12px rgba(99,102,241,0.08);\n  --shadow-md: 0 8px 32px rgba(99,102,241,0.14);\n  --shadow-lg: 0 16px 48px rgba(99,102,241,0.2);\n  --accent: #6366f1;\n  --purple: #a855f7;\n  --green: #22c55e;\n  --amber: #f59e0b;\n  --rose: #f43f5e;\n  --blue: #3b82f6;\n  --teal: #14b8a6;\n  background: var(--bg);\n  color: var(--text);\n  min-height: 100vh;\n  font-family:\n    "Plus Jakarta Sans",\n    "DM Sans",\n    system-ui,\n    sans-serif;\n  transition: background 0.35s, color 0.35s;\n}\n.dash.dark[_ngcontent-%COMP%] {\n  --bg: #0c0e1a;\n  --surface: #13162a;\n  --surface2: #1a1d35;\n  --border: rgba(255,255,255,0.07);\n  --text: #e8eaf6;\n  --text-muted: #8892b0;\n  --text-light: #4a5280;\n  --shadow-sm: 0 2px 16px rgba(0,0,0,0.45);\n  --shadow-md: 0 8px 36px rgba(0,0,0,0.55);\n  --shadow-lg: 0 16px 60px rgba(0,0,0,0.65);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(20deg);\n  }\n  75% {\n    transform: rotate(-12deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_orbFloat {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(18px, -14px) scale(1.06);\n  }\n  66% {\n    transform: translate(-12px, 10px) scale(0.96);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulseRing {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(2.4);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_glowPulse {\n  0%, 100% {\n    opacity: 0.15;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n@keyframes _ngcontent-%COMP%_itemIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_barGrow {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInCard {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fab-theme[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 26px;\n  right: 26px;\n  z-index: 999;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.45);\n  transition: transform 0.25s, box-shadow 0.25s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fab-theme[_ngcontent-%COMP%]   .fab-icon[_ngcontent-%COMP%] {\n  transition: transform 0.35s;\n  display: block;\n}\n.fab-theme[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12) translateY(-2px);\n  box-shadow: 0 10px 32px rgba(99, 102, 241, 0.6);\n}\n.fab-theme[_ngcontent-%COMP%]:hover   .fab-icon[_ngcontent-%COMP%] {\n  transform: rotate(20deg);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 52px 44px 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #7c3aed 45%,\n      #db2777 100%);\n  animation: _ngcontent-%COMP%_slideDown 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #581c87 45%,\n      #9d174d 100%);\n}\n.hero-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-orb-1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  top: -120px;\n  right: -60px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.14) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_orbFloat 7s ease-in-out infinite;\n}\n.hero-orb-2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: -80px;\n  left: 15%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_orbFloat 9s ease-in-out infinite reverse;\n}\n.hero-orb-3[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 20px;\n  left: 40%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_orbFloat 11s ease-in-out infinite;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.hero-greeting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase;\n  margin: 0 0 10px;\n}\n.greeting-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #a3e635;\n  box-shadow: 0 0 8px #a3e635;\n  animation: _ngcontent-%COMP%_pulseRing 2s ease-out infinite;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 42px);\n  font-weight: 900;\n  color: #fff;\n  margin: 0 0 10px;\n  letter-spacing: -1.5px;\n  line-height: 1.05;\n}\n.hero-name[_ngcontent-%COMP%]   .wave-emoji[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 10px;\n  animation: _ngcontent-%COMP%_wave 2.8s ease-in-out infinite;\n  transform-origin: 70% 70%;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.62);\n  margin: 0;\n  max-width: 400px;\n  line-height: 1.6;\n}\n.btn-hero[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.96);\n  backdrop-filter: blur(8px);\n  color: var(--accent);\n  font-size: 14px;\n  font-weight: 800;\n  padding: 13px 26px;\n  border-radius: 50px;\n  text-decoration: none;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);\n  transition: all 0.25s;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.btn-hero[_ngcontent-%COMP%]   .btn-hero-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.25s;\n}\n.btn-hero[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.03);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);\n}\n.btn-hero[_ngcontent-%COMP%]:hover   .btn-hero-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.content-wrap[_ngcontent-%COMP%] {\n  padding: 28px 44px 72px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1100px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: var(--surface);\n  border-radius: 18px;\n  border: 1.5px solid var(--border);\n  padding: 22px 20px 18px;\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: default;\n  animation: _ngcontent-%COMP%_fadeUp 0.55s calc(var(--delay, 0s)) both;\n  transition: transform 0.28s, box-shadow 0.28s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.015);\n  box-shadow: var(--shadow-md);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .card-bar[_ngcontent-%COMP%] {\n  transform-origin: left;\n  animation: _ngcontent-%COMP%_barGrow 0.4s ease both;\n}\n.stat-card[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  right: -30px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_glowPulse 4s ease-in-out infinite;\n}\n.stat-card[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  position: relative;\n  z-index: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .card-lbl[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.stat-card[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  border-radius: 0 0 18px 18px;\n  transform-origin: left;\n  transform: scaleX(0);\n  transition: transform 0.4s;\n}\n.stat-card.card-purple[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--purple);\n}\n.stat-card.card-purple[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.12);\n}\n.stat-card.card-purple[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--purple);\n}\n.stat-card.card-purple[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--purple);\n}\n.stat-card.card-blue[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n.stat-card.card-blue[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n}\n.stat-card.card-blue[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.stat-card.card-blue[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n.stat-card.card-green[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.stat-card.card-green[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.stat-card.card-green[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.stat-card.card-green[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.stat-card.card-teal[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--teal);\n}\n.stat-card.card-teal[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.12);\n}\n.stat-card.card-teal[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--teal);\n}\n.stat-card.card-teal[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--teal);\n}\n.stat-card.card-amber[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--amber);\n}\n.stat-card.card-amber[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.stat-card.card-amber[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.stat-card.card-amber[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--amber);\n}\n.stat-card.card-rose[_ngcontent-%COMP%]   .card-bg-glow[_ngcontent-%COMP%] {\n  background: var(--rose);\n}\n.stat-card.card-rose[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n}\n.stat-card.card-rose[_ngcontent-%COMP%]   .card-val[_ngcontent-%COMP%] {\n  color: var(--rose);\n}\n.stat-card.card-rose[_ngcontent-%COMP%]   .card-bar[_ngcontent-%COMP%] {\n  background: var(--rose);\n}\n.rating-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.07),\n      rgba(168, 85, 247, 0.07));\n  border: 1.5px solid rgba(99, 102, 241, 0.18);\n  border-radius: 16px;\n  padding: 16px 22px;\n  margin-bottom: 22px;\n  animation: _ngcontent-%COMP%_fadeUp 0.55s 0.35s both;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.rating-strip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.35);\n  box-shadow: var(--shadow-sm);\n}\n.rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--border);\n}\n.star.on[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.rating-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--accent);\n  letter-spacing: -0.5px;\n}\n.rating-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.skill-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-left: auto;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--accent);\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 14px;\n  border-radius: 50px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.panel-inprogress[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1.5px solid rgba(245, 158, 11, 0.2);\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.55s 0.2s both;\n  transition: box-shadow 0.28s, border-color 0.28s;\n}\n.panel-inprogress[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.panel-inprogress[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.panel-inprogress[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.panel-inprogress[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   .panel-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.panel-inprogress[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.2px;\n}\n.panel-inprogress[_ngcontent-%COMP%]   .count-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 3px 10px;\n  border-radius: 50px;\n  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.35);\n}\n.inprogress-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inprogress-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--surface2);\n  border: 1.5px solid var(--border);\n  border-radius: 14px;\n  padding: 14px 16px;\n  transition:\n    transform 0.22s,\n    box-shadow 0.22s,\n    border-color 0.22s;\n  animation: _ngcontent-%COMP%_slideInCard 0.4s calc(var(--i, 0) * 0.07s + 0.1s) both;\n}\n.inprogress-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  box-shadow: var(--shadow-sm);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-color-dot.dot-delivered[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #14b8a6,\n      #06b6d4);\n  box-shadow: 0 0 8px rgba(20, 184, 166, 0.5);\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-emoji[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 5px;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.inprogress-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .meta-budget[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #16a34a;\n  background: rgba(34, 197, 94, 0.08);\n  padding: 2px 9px;\n  border-radius: 6px;\n  border: 1px solid rgba(34, 197, 94, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .inprogress-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .meta-budget[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.btn-deliver[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  font-family: inherit;\n  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);\n  transition: all 0.22s;\n  white-space: nowrap;\n}\n.btn-deliver[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04) translateY(-1px);\n  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);\n}\n.btn-deliver[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.delivered-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px 14px;\n  border-radius: 10px;\n  background: rgba(20, 184, 166, 0.1);\n  border: 1.5px solid rgba(20, 184, 166, 0.25);\n  color: #0d9488;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.dark[_ngcontent-%COMP%]   .delivered-badge[_ngcontent-%COMP%] {\n  color: #2dd4bf;\n}\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.55s 0.25s both;\n}\n@media (max-width: 860px) {\n  .main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1.5px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: var(--shadow-sm);\n  transition: box-shadow 0.28s;\n}\n.panel[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.panel-analytics[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.analytics-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.analytics-chip[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.analytics-chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.analytics-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text);\n}\n.analytics-cats[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.analytics-cat[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr 56px;\n  gap: 10px;\n  align-items: center;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.cat-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 6px;\n  background: var(--border);\n  overflow: hidden;\n}\n.cat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n}\n.cat-rate[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent);\n}\n.notif-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.55s 0.35s both;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.panel-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.2px;\n}\n.panel-icon-wrap[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--rose);\n  color: white;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 2px 9px;\n  border-radius: 50px;\n}\n.see-all[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.see-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.see-all[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.item-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.project-item[_ngcontent-%COMP%], \n.proposal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 10px;\n  border-radius: 12px;\n  transition: background 0.2s, transform 0.2s;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_itemIn 0.4s calc(var(--i, 0) * 0.06s + 0.1s) both;\n}\n.project-item[_ngcontent-%COMP%]:hover, \n.proposal-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface2);\n}\n.project-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.item-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.45);\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 4px;\n}\n.item-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 6px;\n  letter-spacing: 0.02em;\n}\n.tag-budget[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.tag-cat[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-apply[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 7px 18px;\n  border-radius: 10px;\n  border: 1.5px solid var(--accent);\n  color: var(--accent);\n  font-size: 12px;\n  font-weight: 800;\n  text-decoration: none;\n  transition: all 0.22s;\n  background: transparent;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n  color: white;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transform: scale(1.04);\n}\n.proposal-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 800;\n  color: white;\n  text-transform: uppercase;\n}\n.proposal-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-top: 3px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 800;\n  padding: 4px 11px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  flex-shrink: 0;\n}\n.status-accept[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.22);\n}\n.status-reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.22);\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n  border: 1px solid rgba(245, 158, 11, 0.22);\n}\n.status-cancel[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.1);\n  color: #6b7280;\n  border: 1px solid rgba(107, 114, 128, 0.2);\n}\n.notif-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 10px;\n  border-radius: 12px;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_itemIn 0.4s calc(var(--i, 0) * 0.06s + 0.1s) both;\n  transition: background 0.2s;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface2);\n}\n.notif-item[_ngcontent-%COMP%]:hover   .notif-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.notif-pulse-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--accent);\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);\n  position: relative;\n}\n.notif-pulse-dot[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: inherit;\n  animation: _ngcontent-%COMP%_pulseRing 2.2s ease-out infinite;\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 3px;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.notif-arrow[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 22px;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 32px 0;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  opacity: 0.45;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 90px 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loader-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 40px;\n}\n.loader-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  margin: 4px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: var(--accent);\n  animation: _ngcontent-%COMP%_spin 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n}\n.loader-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.3s;\n}\n.loader-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.2s;\n  border-top-color: var(--purple);\n}\n.loader-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.1s;\n  border-top-color: var(--rose);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: 20px;\n  width: 90%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--border);\n  position: relative;\n  z-index: 10000;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 22px 24px 16px;\n  border-bottom: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.07),\n      rgba(249, 115, 22, 0.07));\n}\n.modal-header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.modal-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--text);\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.project-info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 12px 14px;\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-client[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.optional-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-light);\n  text-transform: none;\n  letter-spacing: 0;\n  font-weight: 500;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  font-size: 14px;\n  background: var(--surface2);\n  color: var(--text);\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--amber);\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.12);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-light);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 90px;\n  resize: vertical;\n}\n.char-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-light);\n  text-align: right;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--rose);\n  background: rgba(244, 63, 94, 0.07);\n  border: 1px solid rgba(244, 63, 94, 0.2);\n  border-radius: 8px;\n  padding: 9px 12px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.footer-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  background: transparent;\n  color: var(--text-muted);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--text-muted);\n  color: var(--text);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border: none;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 22px rgba(245, 158, 11, 0.5);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: white;\n  animation: _ngcontent-%COMP%_pulseRing 0.8s ease-in-out infinite;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 36px 20px 30px;\n  }\n  .content-wrap[_ngcontent-%COMP%] {\n    padding: 18px 16px 72px;\n  }\n  .inprogress-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .btn-deliver[_ngcontent-%COMP%], \n   .delivered-badge[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n  }\n  .analytics-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .analytics-cat[_ngcontent-%COMP%] {\n    grid-template-columns: 90px 1fr 52px;\n  }\n}\n@keyframes _ngcontent-%COMP%_dmIn {\n  from {\n    opacity: 0;\n    transform: scale(0.94) translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.delivery-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 20px;\n}\n.delivery-modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_dmIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.dark[_ngcontent-%COMP%]   .delivery-modal[_ngcontent-%COMP%] {\n  background: #13162a;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.07);\n}\n.dm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 22px 24px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.08),\n      rgba(249, 115, 22, 0.06));\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n}\n.dark[_ngcontent-%COMP%]   .dm-header[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.dm-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #f59e0b;\n  margin-bottom: 4px;\n}\n.dm-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  letter-spacing: -0.3px;\n}\n.dark[_ngcontent-%COMP%]   .dm-title[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n}\n.dm-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.06);\n  color: #6b7280;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.dark[_ngcontent-%COMP%]   .dm-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #8892b0;\n}\n.dm-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.dm-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.dm-project-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f7f8ff;\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: 12px;\n  padding: 12px 14px;\n}\n.dark[_ngcontent-%COMP%]   .dm-project-box[_ngcontent-%COMP%] {\n  background: #1a1d35;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.dm-project-box[_ngcontent-%COMP%]   .dm-proj-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.dm-project-box[_ngcontent-%COMP%]   .dm-proj-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n}\n.dark[_ngcontent-%COMP%]   .dm-project-box[_ngcontent-%COMP%]   .dm-proj-name[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n}\n.dm-project-box[_ngcontent-%COMP%]   .dm-proj-client[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.dm-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.dm-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dm-optional[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: none;\n  letter-spacing: 0;\n  font-weight: 500;\n}\n.dm-input[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-size: 14px;\n  background: #f7f8ff;\n  color: #111827;\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.dark[_ngcontent-%COMP%]   .dm-input[_ngcontent-%COMP%] {\n  background: #1a1d35;\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #e8eaf6;\n}\n.dm-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.dm-input[_ngcontent-%COMP%]:focus {\n  border-color: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);\n}\n.dm-textarea[_ngcontent-%COMP%] {\n  min-height: 96px;\n  resize: vertical;\n  line-height: 1.6;\n}\n.dm-charcount[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  text-align: right;\n}\n.dm-error[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #dc2626;\n  background: rgba(239, 68, 68, 0.07);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 8px;\n  padding: 10px 13px;\n}\n.dm-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n}\n.dark[_ngcontent-%COMP%]   .dm-footer[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.07);\n}\n.dm-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.dm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.dm-btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  background: transparent;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.dark[_ngcontent-%COMP%]   .dm-btn-cancel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #8892b0;\n}\n.dm-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: #111827;\n}\n.dark[_ngcontent-%COMP%]   .dm-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #e8eaf6;\n}\n.dm-btn-submit[_ngcontent-%COMP%] {\n  padding: 11px 24px;\n  border: none;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.dm-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.5);\n}\n.dm-btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.97);\n}\n.dm-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.dm-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.dm-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: white;\n  animation: _ngcontent-%COMP%_pulseRing 0.9s ease-in-out infinite;\n}\n.dm-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.dm-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.36s;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  margin-bottom: 6px;\n  opacity: 0.85;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-header[_ngcontent-%COMP%]   .completeness-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-header[_ngcontent-%COMP%]   .completeness-tip[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 11px;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-fill.fill-low[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-fill.fill-mid[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.dm-dots[_ngcontent-%COMP%]   .profile-completeness[_ngcontent-%COMP%]   .completeness-fill.fill-high[_ngcontent-%COMP%] {\n  background: #63a522;\n}\n.dm-dots[_ngcontent-%COMP%]   .overload-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: rgba(226, 75, 74, 0.08);\n  border: 1px solid rgba(226, 75, 74, 0.3);\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 1.25rem;\n}\n.dm-dots[_ngcontent-%COMP%]   .overload-alert[_ngcontent-%COMP%]   .overload-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.dm-dots[_ngcontent-%COMP%]   .overload-alert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 2px;\n  color: #A32D2D;\n}\n.dm-dots[_ngcontent-%COMP%]   .overload-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.8;\n  line-height: 1.4;\n}\n.dm-dots[_ngcontent-%COMP%]   .advanced-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 768px) {\n  .dm-dots[_ngcontent-%COMP%]   .advanced-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .availability-body[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-slots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 12px 0 8px;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-slots[_ngcontent-%COMP%]   .slot[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  border-radius: 5px;\n  background: rgba(128, 128, 128, 0.2);\n  transition: background 0.4s ease;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-slots[_ngcontent-%COMP%]   .slot.slot-used[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.7;\n  margin: 0 0 4px;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-from[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-availability[_ngcontent-%COMP%]   .avail-from[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-list[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 0;\n  font-size: 13px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.08);\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]   .market-cat[_ngcontent-%COMP%] {\n  width: 110px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]   .market-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: rgba(128, 128, 128, 0.15);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]   .market-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: #378ADD;\n  transition: width 0.7s ease;\n  min-width: 4px;\n}\n.dm-dots[_ngcontent-%COMP%]   .panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]   .market-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.6;\n  white-space: nowrap;\n  min-width: 20px;\n  text-align: right;\n}\n.avail-big[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 4px;\n}\n.avail-circle[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  border: 3px solid var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.avail-num[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--blue);\n  line-height: 1;\n}\n.avail-of[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.avail-desc[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.avail-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n}\n.avail-slots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.slot[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n  background: var(--border);\n}\n.slot.slot-used[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.avail-from[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.avail-from[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3B6D11;\n  font-weight: 700;\n}\n.panel-market[_ngcontent-%COMP%]   .market-list[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n.panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 0;\n  border-bottom: 1px solid var(--border);\n}\n.panel-market[_ngcontent-%COMP%]   .market-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.panel-market[_ngcontent-%COMP%]   .market-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.panel-market[_ngcontent-%COMP%]   .market-cat[_ngcontent-%COMP%] {\n  width: 100px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n  text-transform: capitalize;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.panel-market[_ngcontent-%COMP%]   .market-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: var(--border);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.panel-market[_ngcontent-%COMP%]   .market-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  min-width: 4px;\n}\n.panel-market[_ngcontent-%COMP%]   .market-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  min-width: 20px;\n  text-align: right;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlDashboardComponent, { className: "FlDashboardComponent", filePath: "app\\freelancer\\dashboard\\dashboard.component.ts", lineNumber: 17 });
})();

// src/app/freelancer/projects/projects.component.ts
function FlProjectsComponent_div_7_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "\u2713 Your skills match:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r2.matchedSkills);
  }
}
function FlProjectsComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FlProjectsComponent_div_7_div_7_div_8_Template, 5, 1, "div", 45);
    \u0275\u0275elementStart(9, "div", 46)(10, "div", 47)(11, "span", 48);
    \u0275\u0275text(12, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 49);
    \u0275\u0275element(14, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 51);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 47)(18, "span", 48);
    \u0275\u0275text(19, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49);
    \u0275\u0275element(21, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 51);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 47)(25, "span", 48);
    \u0275\u0275text(26, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49);
    \u0275\u0275element(28, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 47)(32, "span", 48);
    \u0275\u0275text(33, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 49);
    \u0275\u0275element(35, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 51);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 55)(39, "span", 56);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 57);
    \u0275\u0275listener("click", function FlProjectsComponent_div_7_div_7_Template_button_click_41_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openProposalModalById(m_r2.freelancerId));
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r2.freelancerSkills);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getScoreClass(m_r2.totalScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", m_r2.totalScore, "% match");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.freelancerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.matchedSkills);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", m_r2.skillsScore / 40 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r2.skillsScore, "/40");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", m_r2.budgetScore / 25 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r2.budgetScore, "/25");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", m_r2.experienceScore / 20 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r2.experienceScore, "/20");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", m_r2.activityScore / 15 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r2.activityScore, "/15");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getRecoClass(m_r2.recommendation));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.recommendation);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.alreadyApplied(m_r2.freelancerId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.alreadyApplied(m_r2.freelancerId) ? "Applied" : "Apply Now", " ");
  }
}
function FlProjectsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h2", 36);
    \u0275\u0275text(3, "Recommended for You");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5, "Based on your skills and experience");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275template(7, FlProjectsComponent_div_7_div_7_Template, 43, 23, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.recommendations);
  }
}
function FlProjectsComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function FlProjectsComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function FlProjectsComponent_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(1, " \u2715 Reset filters ");
    \u0275\u0275elementEnd();
  }
}
function FlProjectsComponent_div_56_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function FlProjectsComponent_div_56_span_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.categoryFilter = "";
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.categoryFilter, " ");
  }
}
function FlProjectsComponent_div_56_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function FlProjectsComponent_div_56_span_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.budgetMin = null;
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Min ", ctx_r2.budgetMin, " TND ");
  }
}
function FlProjectsComponent_div_56_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function FlProjectsComponent_div_56_span_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.budgetMax = null;
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Max ", ctx_r2.budgetMax, " TND ");
  }
}
function FlProjectsComponent_div_56_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function FlProjectsComponent_div_56_span_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.experienceFilter = "";
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.experienceFilter, " ");
  }
}
function FlProjectsComponent_div_56_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function FlProjectsComponent_div_56_span_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.budgetTypeFilter = "";
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.budgetTypeFilter, " ");
  }
}
function FlProjectsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FlProjectsComponent_div_56_span_3_Template, 4, 1, "span", 64)(4, FlProjectsComponent_div_56_span_4_Template, 4, 1, "span", 64)(5, FlProjectsComponent_div_56_span_5_Template, 4, 1, "span", 64)(6, FlProjectsComponent_div_56_span_6_Template, 4, 1, "span", 64)(7, FlProjectsComponent_div_56_span_7_Template, 4, 1, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.filtered.length, " project", ctx_r2.filtered.length !== 1 ? "s" : "", " found");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.categoryFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.budgetMin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.budgetMax);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.experienceFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.budgetTypeFilter);
  }
}
function FlProjectsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading projects...");
    \u0275\u0275elementEnd()();
  }
}
function FlProjectsComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "No projects found matching your criteria.");
    \u0275\u0275elementEnd();
  }
}
function FlProjectsComponent_div_58_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r12.budget, " TND");
  }
}
function FlProjectsComponent_div_58_div_2_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r13);
  }
}
function FlProjectsComponent_div_58_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, FlProjectsComponent_div_58_div_2_div_9_span_1_Template, 2, 1, "span", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r12.requiredSkills);
  }
}
function FlProjectsComponent_div_58_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Deadline: ", \u0275\u0275pipeBind2(2, 1, p_r12.deadline, "dd/MM/yyyy"), "");
  }
}
function FlProjectsComponent_div_58_div_2_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105);
    \u0275\u0275element(4, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r14.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r14.value + "%")("background", bar_r14.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r14.value, "%");
  }
}
function FlProjectsComponent_div_58_div_2_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span", 109);
    \u0275\u0275text(2, "\uF4A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translateAdvice(ctx_r2.predictions.get(p_r12.id).advice));
  }
}
function FlProjectsComponent_div_58_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 92);
    \u0275\u0275element(4, "circle", 93)(5, "circle", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 95)(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "span", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 99);
    \u0275\u0275text(13, "Success Prediction");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 100);
    \u0275\u0275template(15, FlProjectsComponent_div_58_div_2_div_16_div_15_Template, 7, 6, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FlProjectsComponent_div_58_div_2_div_16_div_16_Template, 5, 1, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r2.getPredictionColor(p_r12.id))("stroke-dashoffset", 150.8 - ctx_r2.predictions.get(p_r12.id).finalScore / 100 * 150.8);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.getPredictionColor(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.predictions.get(p_r12.id).finalScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getPredLevelClass(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPredictionLevelEn(ctx_r2.predictions.get(p_r12.id).predictionLevel), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.getPredBars(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.predictions.get(p_r12.id).advice);
  }
}
function FlProjectsComponent_div_58_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FlProjectsComponent_div_58_div_2_span_4_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 78);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FlProjectsComponent_div_58_div_2_div_9_Template, 2, 1, "div", 79);
    \u0275\u0275elementStart(10, "div", 80);
    \u0275\u0275template(11, FlProjectsComponent_div_58_div_2_span_11_Template, 3, 4, "span", 81);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 82);
    \u0275\u0275listener("click", function FlProjectsComponent_div_58_div_2_Template_button_click_14_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.predictSuccess(p_r12));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FlProjectsComponent_div_58_div_2_div_16_Template, 17, 9, "div", 83);
    \u0275\u0275elementStart(17, "button", 84);
    \u0275\u0275listener("click", function FlProjectsComponent_div_58_div_2_Template_button_click_17_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openProposalModal(p_r12));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.budget);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.requiredSkills && p_r12.requiredSkills.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r12.deadline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r12.proposalsCount || 0, " proposals");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loadingPrediction.has(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingPrediction.has(p_r12.id) ? "Analyzing..." : "Predict My Chances", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.predictions.has(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.alreadyApplied(p_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.alreadyApplied(p_r12.id) ? "Applied" : "Apply Now", " ");
  }
}
function FlProjectsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, FlProjectsComponent_div_58_div_1_Template, 2, 0, "div", 70)(2, FlProjectsComponent_div_58_div_2_Template, 19, 12, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filtered);
  }
}
function FlProjectsComponent_div_59_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiError);
  }
}
function FlProjectsComponent_div_59_div_1_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105);
    \u0275\u0275element(4, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r17.value, "%")("background", item_r17.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r17.value);
  }
}
function FlProjectsComponent_div_59_div_1_div_30_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span", 109);
    \u0275\u0275text(2, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tip_r18 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(tip_r18);
  }
}
function FlProjectsComponent_div_59_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 97)(3, "span", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 99);
    \u0275\u0275text(6, "Proposal Quality Score");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 100);
    \u0275\u0275template(8, FlProjectsComponent_div_59_div_1_div_30_div_8_Template, 7, 6, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FlProjectsComponent_div_59_div_1_div_30_div_9_Template, 5, 1, "div", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.proposalOptimizer.totalScore >= 80 ? "level-high" : ctx_r2.proposalOptimizer.totalScore >= 60 ? "level-medium" : "level-low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.proposalOptimizer.totalScore, " / 100 ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.optimizerBars());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proposalOptimizer.suggestions);
  }
}
function FlProjectsComponent_div_59_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.submitError);
  }
}
function FlProjectsComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 113)(2, "div", 114)(3, "div")(4, "p", 115);
    \u0275\u0275text(5, "Submit your proposal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 117);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 118);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_div_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 119)(13, "div", 120)(14, "div", 121)(15, "label");
    \u0275\u0275text(16, "Cover Letter *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 122);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.generateCoverLetter());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "textarea", 123);
    \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_div_59_div_1_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proposal.coverLetter, $event) || (ctx_r2.proposal.coverLetter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function FlProjectsComponent_div_59_div_1_Template_textarea_input_19_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onProposalFieldChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FlProjectsComponent_div_59_div_1_div_20_Template, 2, 1, "div", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 125)(22, "div", 120)(23, "label");
    \u0275\u0275text(24, "Your Budget (TND)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_div_59_div_1_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proposal.proposedBudget, $event) || (ctx_r2.proposal.proposedBudget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function FlProjectsComponent_div_59_div_1_Template_input_input_25_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onProposalFieldChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 120)(27, "label");
    \u0275\u0275text(28, "Delivery Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_div_59_div_1_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proposal.deliveryTime, $event) || (ctx_r2.proposal.deliveryTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, FlProjectsComponent_div_59_div_1_div_30_Template, 10, 5, "div", 83)(31, FlProjectsComponent_div_59_div_1_div_31_Template, 2, 1, "div", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 129)(33, "span", 130);
    \u0275\u0275text(34, "Client will be notified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 131)(36, "button", 132);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_div_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 133);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitProposal());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const proj_r19 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(proj_r19.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r19.category);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("loading", ctx_r2.isGenerating);
    \u0275\u0275property("disabled", ctx_r2.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2728 ", ctx_r2.isGenerating ? "Generating..." : "Generate with AI", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proposal.coverLetter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aiError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proposal.proposedBudget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proposal.deliveryTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proposalOptimizer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitError);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSubmitting ? "Sending..." : "Submit Proposal", " ");
  }
}
function FlProjectsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function FlProjectsComponent_div_59_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275template(1, FlProjectsComponent_div_59_div_1_Template, 40, 14, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedProject);
  }
}
var FlProjectsComponent = class _FlProjectsComponent {
  constructor(authService, projectService, proposalService, http) {
    this.authService = authService;
    this.projectService = projectService;
    this.proposalService = proposalService;
    this.http = http;
    this.projects = [];
    this.filtered = [];
    this.recommendations = [];
    this.appliedProjectIds = /* @__PURE__ */ new Set();
    this.isLoading = true;
    this.searchTerm = "";
    this.categoryFilter = "";
    this.sortBy = "newest";
    this.budgetMin = null;
    this.budgetMax = null;
    this.experienceFilter = "";
    this.budgetTypeFilter = "";
    this.sliderMax = 1e4;
    this.categories = [];
    this.selectedProject = null;
    this.isSubmitting = false;
    this.isGenerating = false;
    this.submitError = "";
    this.aiError = "";
    this.predictions = /* @__PURE__ */ new Map();
    this.loadingPrediction = /* @__PURE__ */ new Set();
    this.proposal = { coverLetter: "", proposedBudget: 0, deliveryTime: "" };
    this.proposalOptimizer = null;
    this.optimizeTimer = null;
    this.api = environment.apiUrl;
  }
  ngOnInit() {
    this.authService.checkAuth();
    this.projectService.getOpen().subscribe({
      next: (p) => {
        this.projects = p;
        this.categories = [...new Set(p.map((proj) => proj.category).filter((c) => c))].sort();
        this.sliderMax = 0;
        this.budgetMax = null;
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
    const userId = this.authService.currentUser?.id;
    if (userId) {
      this.proposalService.getAll(void 0, userId).subscribe((proposals) => {
        proposals.forEach((p) => {
          if (p.projectId)
            this.appliedProjectIds.add(p.projectId);
        });
      });
      this.loadRecommendations(userId);
    }
  }
  loadRecommendations(userId) {
    this.http.get(`${this.api}/matching/freelancer/${userId}`).subscribe({ next: (d) => {
      this.recommendations = d.slice(0, 3);
    }, error: () => {
      this.recommendations = [];
    } });
  }
  openProposalModalById(projectId) {
    const project = this.projects.find((p) => p.id === projectId);
    if (project)
      this.openProposalModal(project);
  }
  applyFilter() {
    let list = [...this.projects];
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(term) || (p.description || "").toLowerCase().includes(term) || (p.requiredSkills || []).some((s) => s.toLowerCase().includes(term)));
    }
    if (this.categoryFilter)
      list = list.filter((p) => p.category === this.categoryFilter);
    if (this.budgetMin != null && this.budgetMin > 0)
      list = list.filter((p) => p.budget != null && p.budget >= this.budgetMin);
    if (this.budgetMax != null && this.budgetMax > 0)
      list = list.filter((p) => p.budget != null && p.budget <= this.budgetMax);
    if (this.experienceFilter)
      list = list.filter((p) => p.experienceLevel === this.experienceFilter);
    if (this.budgetTypeFilter)
      list = list.filter((p) => p.budgetType === this.budgetTypeFilter);
    switch (this.sortBy) {
      case "budget-high":
        list.sort((a, b) => (b.budget || 0) - (a.budget || 0));
        break;
      case "budget-low":
        list.sort((a, b) => (a.budget || 0) - (b.budget || 0));
        break;
      case "proposals":
        list.sort((a, b) => (a.proposalsCount || 0) - (b.proposalsCount || 0));
        break;
      default:
        list.sort((a, b) => (b.createdAt || "") > (a.createdAt || "") ? 1 : -1);
    }
    this.filtered = list;
  }
  hasActiveFilters() {
    return !!(this.searchTerm || this.categoryFilter || this.budgetMin || this.budgetMax || this.experienceFilter || this.budgetTypeFilter);
  }
  resetFilters() {
    this.searchTerm = "";
    this.categoryFilter = "";
    this.budgetMin = null;
    this.budgetMax = null;
    this.experienceFilter = "";
    this.budgetTypeFilter = "";
    this.sortBy = "newest";
    this.sliderMax = 0;
    this.applyFilter();
  }
  alreadyApplied(id) {
    return this.appliedProjectIds.has(id);
  }
  openProposalModal(p) {
    this.selectedProject = p;
    this.proposal = { coverLetter: "", proposedBudget: p.budget || 0, deliveryTime: "" };
    this.submitError = "";
    this.aiError = "";
    this.proposalOptimizer = null;
    this.runProposalOptimizer();
  }
  closeModal() {
    this.selectedProject = null;
    this.proposalOptimizer = null;
    if (this.optimizeTimer) {
      clearTimeout(this.optimizeTimer);
      this.optimizeTimer = null;
    }
  }
  generateCoverLetter() {
    if (!this.selectedProject)
      return;
    this.isGenerating = true;
    this.aiError = "";
    const user = this.authService.currentUser;
    const prompt = `Write a professional freelance cover letter for this project:
Title: ${this.selectedProject.title}
Category: ${this.selectedProject.category}
Description: ${this.selectedProject.description || ""}
${this.selectedProject.requiredSkills?.length ? "Required skills: " + this.selectedProject.requiredSkills.join(", ") : ""}
${this.selectedProject.budget ? "Budget: " + this.selectedProject.budget + " TND" : ""}
Freelancer: ${user?.firstName || user?.name || "the freelancer"}
Skills: ${user?.skills || "various skills"}
Requirements: 3-4 sentences, professional, mention relevant experience, write in English only.`;
    this.http.post(`${this.api}/ai/generate-description`, {
      title: prompt,
      category: this.selectedProject.category
    }).subscribe({
      next: (res) => {
        const text = String(res?.description ?? "");
        const aiFailed = /erreur|unexpected|inattendue/i.test(text) || !text.trim();
        this.proposal.coverLetter = aiFailed ? "" : text;
        this.aiError = aiFailed ? "Groq could not generate a cover letter right now. Please retry." : "";
        if (!aiFailed)
          this.onProposalFieldChange();
        this.isGenerating = false;
      },
      error: (_err) => {
        this.proposal.coverLetter = "";
        this.aiError = "Groq service unavailable. Please retry.";
        this.isGenerating = false;
      }
    });
  }
  onProposalFieldChange() {
    if (this.optimizeTimer)
      clearTimeout(this.optimizeTimer);
    this.optimizeTimer = setTimeout(() => this.runProposalOptimizer(), 350);
  }
  runProposalOptimizer() {
    if (!this.selectedProject)
      return;
    const hasContent = !!(this.proposal.coverLetter?.trim() || this.proposal.proposedBudget);
    if (!hasContent) {
      this.proposalOptimizer = null;
      return;
    }
    this.http.post(`${this.api}/proposals/optimizer`, {
      projectId: this.selectedProject.id,
      projectTitle: this.selectedProject.title,
      projectDescription: this.selectedProject.description,
      projectBudget: this.selectedProject.budget,
      coverLetter: this.proposal.coverLetter,
      proposedBudget: this.proposal.proposedBudget
    }).subscribe({
      next: (result) => {
        this.proposalOptimizer = result;
      },
      error: () => {
      }
    });
  }
  optimizerBars() {
    if (!this.proposalOptimizer)
      return [];
    return [
      { label: "Clarity", value: this.proposalOptimizer.breakdown.clarity, color: "#6366f1" },
      { label: "Personalization", value: this.proposalOptimizer.breakdown.personalization, color: "#22c55e" },
      { label: "Budget", value: this.proposalOptimizer.breakdown.budgetCoherence, color: "#f59e0b" },
      { label: "CTA", value: this.proposalOptimizer.breakdown.cta, color: "#06b6d4" }
    ];
  }
  submitProposal() {
    if (!this.proposal.coverLetter) {
      this.submitError = "Please write a cover letter";
      return;
    }
    this.isSubmitting = true;
    this.submitError = "";
    const user = this.authService.currentUser;
    const payload = {
      projectId: this.selectedProject.id,
      projectTitle: this.selectedProject.title,
      freelancerId: user?.id,
      freelancerName: user?.name,
      freelancerEmail: user?.email,
      clientId: this.selectedProject.clientId,
      clientEmail: this.selectedProject.clientEmail,
      coverLetter: this.proposal.coverLetter,
      proposedBudget: this.proposal.proposedBudget,
      deliveryTime: this.proposal.deliveryTime,
      status: "PENDING"
    };
    this.proposalService.create(payload).subscribe({
      next: () => {
        this.appliedProjectIds.add(this.selectedProject.id);
        this.isSubmitting = false;
        this.closeModal();
      },
      error: (err) => {
        this.submitError = err?.error?.message || err?.error?.error || (err?.status === 403 ? "Maximum 5 active projects reached." : "Error submitting proposal");
        this.isSubmitting = false;
      }
    });
  }
  onSliderChange() {
    const max = this.getSliderMax();
    const inverted = max - this.sliderMax;
    this.budgetMax = inverted >= max ? null : inverted;
    this.applyFilter();
  }
  getSliderMax() {
    return this.projects.length > 0 ? Math.max(...this.projects.map((p) => p.budget || 0)) : 1e4;
  }
  getScoreClass(score) {
    if (score >= 75)
      return "score-excellent";
    if (score >= 50)
      return "score-good";
    if (score >= 25)
      return "score-fair";
    return "score-low";
  }
  getRecoClass(reco) {
    if (reco === "Excellent Match")
      return "reco-excellent";
    if (reco === "Good Match")
      return "reco-good";
    if (reco === "Fair Match")
      return "reco-fair";
    return "reco-low";
  }
  predictSuccess(project) {
    const userId = this.authService.currentUser?.id;
    if (!userId || !project.id)
      return;
    this.loadingPrediction.add(project.id);
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
    this.http.post(`${this.api}/predictions/${userId}/${project.id}`, {}, { headers }).subscribe({
      next: (data) => {
        this.predictions.set(project.id, data);
        this.loadingPrediction.delete(project.id);
      },
      error: () => {
        this.loadingPrediction.delete(project.id);
      }
    });
  }
  getPredictionColor(projectId) {
    const p = this.predictions.get(projectId);
    if (!p)
      return "#667eea";
    const lvl = (p.predictionLevel || "").toUpperCase();
    if (lvl.includes("LEV") || lvl === "ELEVE")
      return "#22c55e";
    if (lvl === "MOYEN")
      return "#f59e0b";
    return "#ef4444";
  }
  getPredLevelClass(projectId) {
    const p = this.predictions.get(projectId);
    if (!p)
      return "";
    const lvl = (p.predictionLevel || "").toUpperCase();
    if (lvl.includes("LEV") || lvl === "ELEVE")
      return "level-high";
    if (lvl === "MOYEN")
      return "level-medium";
    return "level-low";
  }
  getPredictionLevelEn(level) {
    if (!level)
      return "";
    const lvl = level.toUpperCase();
    if (lvl.includes("LEV") || lvl === "ELEVE")
      return "HIGH";
    if (lvl === "MOYEN")
      return "MEDIUM";
    return "LOW";
  }
  getPredBars(projectId) {
    const p = this.predictions.get(projectId);
    if (!p)
      return [];
    return [
      { label: "Skills", value: Math.round(p.skillsScore ?? 0), color: "#6366f1" },
      { label: "Experience", value: Math.round(p.experienceScore ?? 0), color: "#f59e0b" },
      { label: "Reputation", value: Math.round(p.reputationScore ?? 0), color: "#22c55e" },
      { label: "Success Rate", value: Math.round(p.successRateScore ?? 0), color: "#06b6d4" }
    ];
  }
  translateAdvice(advice) {
    if (!advice)
      return "";
    return advice.replace(/Ameliorez vos competences/g, "Improve your skills").replace(/Completez plus de projets/g, "Complete more projects").replace(/Travaillez sur votre reputation/g, "Work on your reputation").replace(/Excellent profil/g, "Excellent profile").replace(/Bon profil/g, "Good profile").replace(/Continuez a ameliorer/g, "Keep improving your profile").replace(/ \| /g, " \xB7 ");
  }
  static {
    this.\u0275fac = function FlProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlProjectsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(ProposalService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlProjectsComponent, selectors: [["app-fl-projects"]], decls: 60, vars: 15, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "matching-section", 4, "ngIf"], [1, "filter-section"], [1, "filter-row"], [1, "search-wrap"], [1, "search-icon", 2, "font-size", "13px", "opacity", "0.5"], ["placeholder", "Search by title, description, skills...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [4, "ngFor", "ngForOf"], ["value", "newest"], ["value", "budget-high"], ["value", "budget-low"], ["value", "proposals"], [1, "filter-row", "filter-row-2"], [1, "budget-slider-wrap"], [1, "budget-slider-label"], [1, "budget-slider-values"], [1, "slider-max-val"], ["type", "range", "min", "0", "step", "100", 3, "input", "max", "value"], ["value", "JUNIOR"], ["value", "INTERMEDIATE"], ["value", "SENIOR"], ["value", "EXPERT"], ["value", "FIXED"], ["value", "HOURLY"], ["class", "btn-reset", 3, "click", 4, "ngIf"], ["class", "filter-summary", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "project-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "matching-section"], [1, "matching-header"], [1, "matching-title"], [1, "matching-sub"], [1, "matching-grid"], ["class", "match-card", 4, "ngFor", "ngForOf"], [1, "match-card"], [1, "match-top"], [1, "match-category"], [1, "match-score"], [1, "match-title"], ["class", "match-skills", 4, "ngIf"], [1, "match-breakdown"], [1, "breakdown-item"], [1, "breakdown-label"], [1, "breakdown-bar"], [1, "breakdown-fill", "skills"], [1, "breakdown-val"], [1, "breakdown-fill", "budget"], [1, "breakdown-fill", "experience"], [1, "breakdown-fill", "activity"], [1, "match-footer"], [1, "recommendation-badge"], [1, "btn-apply-match", 3, "click", "disabled"], [1, "match-skills"], [1, "match-skills-label"], [1, "match-skills-tags"], [1, "btn-reset", 3, "click"], [1, "filter-summary"], [1, "filter-count"], ["class", "filter-tag", 4, "ngIf"], [1, "filter-tag"], [3, "click"], [1, "loading-state"], [1, "spinner"], [1, "project-grid"], ["class", "empty", 4, "ngIf"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "project-card"], [1, "card-top"], [1, "category-tag"], ["class", "budget-tag", 4, "ngIf"], [1, "card-title"], [1, "card-desc"], ["class", "skills-row", 4, "ngIf"], [1, "card-meta"], [4, "ngIf"], [1, "btn-predict", 3, "click", "disabled"], ["class", "prediction-result", 4, "ngIf"], [1, "btn-apply", 3, "click", "disabled"], [1, "budget-tag"], [1, "skills-row"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"], [1, "prediction-result"], [1, "pred-header"], [1, "pred-score-wrap"], ["viewBox", "0 0 56 56", "xmlns", "http://www.w3.org/2000/svg", 1, "pred-ring"], ["cx", "28", "cy", "28", "r", "24", "fill", "none", "stroke", "#e9ecef", "stroke-width", "5"], ["cx", "28", "cy", "28", "r", "24", "fill", "none", "stroke-width", "5", "stroke-linecap", "round", "stroke-dasharray", "150.8", "transform", "rotate(-90 28 28)"], [1, "pred-score-text"], [1, "pred-pct"], [1, "pred-level-wrap"], [1, "pred-level-badge", 3, "ngClass"], [1, "pred-label"], [1, "pred-bars"], ["class", "pred-bar-item", 4, "ngFor", "ngForOf"], ["class", "pred-advice", 4, "ngIf"], [1, "pred-bar-item"], [1, "pred-bar-label"], [1, "pred-bar-track"], [1, "pred-bar-fill"], [1, "pred-bar-val"], [1, "pred-advice"], [1, "pred-advice-icon"], [1, "modal-overlay", 3, "click"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-header-inner"], [1, "modal-eyebrow"], [1, "modal-title"], [1, "modal-category"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "field-header"], [1, "btn-ai", 3, "click", "disabled"], ["placeholder", "Why are you the best fit for this project?", 1, "form-input", "form-textarea", 3, "ngModelChange", "input", "ngModel"], ["class", "ai-error", 4, "ngIf"], [1, "form-row"], ["type", "number", "placeholder", "Proposed budget", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["placeholder", "e.g. 2 weeks", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error", 4, "ngIf"], [1, "modal-footer"], [1, "footer-hint"], [1, "footer-btns"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "ai-error"], [1, "pred-level-badge"], ["class", "pred-advice", 4, "ngFor", "ngForOf"], [1, "error"]], template: function FlProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Browse Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Find your next opportunity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, FlProjectsComponent_div_7_Template, 8, 1, "div", 4);
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "span", 8);
        \u0275\u0275text(12, "\u26B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function FlProjectsComponent_Template_input_input_13_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_Template_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.categoryFilter, $event) || (ctx.categoryFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function FlProjectsComponent_Template_select_change_14_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(15, "option", 11);
        \u0275\u0275text(16, "All categories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, FlProjectsComponent_option_17_Template, 2, 1, "option", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_Template_select_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("change", function FlProjectsComponent_Template_select_change_18_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(19, "option", 13);
        \u0275\u0275text(20, "Newest first");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 14);
        \u0275\u0275text(22, "Budget: High to Low");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 15);
        \u0275\u0275text(24, "Budget: Low to High");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 16);
        \u0275\u0275text(26, "Fewest proposals");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "span", 19);
        \u0275\u0275text(30, "Budget max (TND)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 20)(32, "span");
        \u0275\u0275text(33, "0 TND");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 21);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "input", 22);
        \u0275\u0275listener("input", function FlProjectsComponent_Template_input_input_36_listener($event) {
          ctx.sliderMax = +$event.target.value;
          return ctx.onSliderChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_Template_select_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.experienceFilter, $event) || (ctx.experienceFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function FlProjectsComponent_Template_select_change_37_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(38, "option", 11);
        \u0275\u0275text(39, "Any experience level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 23);
        \u0275\u0275text(41, "Junior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 24);
        \u0275\u0275text(43, "Intermediate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 25);
        \u0275\u0275text(45, "Senior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 26);
        \u0275\u0275text(47, "Expert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function FlProjectsComponent_Template_select_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.budgetTypeFilter, $event) || (ctx.budgetTypeFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function FlProjectsComponent_Template_select_change_48_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(49, "option", 11);
        \u0275\u0275text(50, "Any budget type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "option", 27);
        \u0275\u0275text(52, "Fixed price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "option", 28);
        \u0275\u0275text(54, "Hourly rate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(55, FlProjectsComponent_button_55_Template, 2, 0, "button", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, FlProjectsComponent_div_56_Template, 8, 7, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275template(57, FlProjectsComponent_div_57_Template, 4, 0, "div", 31)(58, FlProjectsComponent_div_58_Template, 3, 2, "div", 32)(59, FlProjectsComponent_div_59_Template, 2, 1, "div", 33);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.recommendations.length > 0);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.categoryFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.budgetMax ? ctx.budgetMax + " TND max" : "No limit");
        \u0275\u0275advance();
        \u0275\u0275property("max", ctx.getSliderMax())("value", ctx.budgetMax ? ctx.getSliderMax() - ctx.budgetMax : 0);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.experienceFilter);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.budgetTypeFilter);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.hasActiveFilters());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasActiveFilters());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedProject);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --accent: #6366f1;\n  --purple: #a855f7;\n  --green: #22c55e;\n  --red: #ef4444;\n  --a-light: rgba(99,102,241,0.1);\n  --p-light: rgba(168,85,247,0.1);\n  --g-light: rgba(34,197,94,0.1);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(28px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_aiBlink {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.7);\n  }\n}\n@keyframes _ngcontent-%COMP%_closeSpin {\n  to {\n    transform: rotate(90deg);\n  }\n}\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 28px 32px;\n  min-height: 100%;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  padding: 10px 14px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 10px;\n  font-size: 14px;\n  background: var(--bo-bg-secondary);\n  color: var(--bo-text-primary);\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary);\n  opacity: 0.6;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px var(--a-light);\n}\n.form-select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 12px;\n  font-size: 14px;\n  background: var(--bo-bg-secondary);\n  color: var(--bo-text-primary);\n  outline: none;\n  min-width: 160px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px var(--a-light);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--bo-text-secondary);\n  padding: 24px 0;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: 2.5px solid var(--bo-border);\n  border-top-color: var(--accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n  flex-shrink: 0;\n}\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--bo-text-secondary);\n  grid-column: 1/-1;\n  font-size: 14px;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1.5px solid var(--bo-border);\n  border-radius: 16px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 2px 12px rgba(99, 102, 241, 0.06);\n  transition:\n    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n  position: relative;\n  overflow: hidden;\n}\n.project-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--purple));\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.14);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.project-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.category-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: var(--p-light);\n  color: var(--purple);\n  padding: 3px 10px;\n  border-radius: 50px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.budget-tag[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--green);\n  font-weight: 700;\n  background: var(--g-light);\n  padding: 3px 10px;\n  border-radius: 50px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n  line-height: 1.35;\n  margin: 0;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  line-height: 1.6;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.skills-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: var(--bo-bg-primary);\n  border: 1.5px solid var(--bo-border);\n  color: var(--bo-text-secondary);\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-weight: 500;\n  transition: border-color 0.2s, color 0.2s;\n}\n.project-card[_ngcontent-%COMP%]:hover   .skill-tag[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.3);\n  color: var(--bo-text-primary);\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  flex-wrap: wrap;\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  padding: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    opacity 0.2s,\n    transform 0.2s,\n    box-shadow 0.2s;\n  margin-top: auto;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);\n  letter-spacing: 0.02em;\n}\n.btn-apply[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\n}\n.btn-apply[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-apply[_ngcontent-%COMP%]:disabled {\n  background: var(--g-light);\n  color: var(--green);\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 5, 30, 0.52);\n  backdrop-filter: blur(14px) saturate(1.6);\n  -webkit-backdrop-filter: blur(14px) saturate(1.6);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.2s ease both;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border-radius: 28px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(99, 102, 241, 0.1),\n    0 8px 16px rgba(10, 5, 30, 0.06),\n    0 32px 80px rgba(10, 5, 30, 0.22);\n  animation: _ngcontent-%COMP%_modalIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 26px 28px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      var(--purple) 100%);\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%]::before, \n.modal-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.modal-header[_ngcontent-%COMP%]::before {\n  width: 200px;\n  height: 200px;\n  top: -70px;\n  right: -50px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.modal-header[_ngcontent-%COMP%]::after {\n  width: 110px;\n  height: 110px;\n  bottom: -40px;\n  left: 30px;\n  background: rgba(255, 255, 255, 0.05);\n}\n.modal-header-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 5px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.35px;\n  line-height: 1.25;\n  margin: 0;\n}\n.modal-category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 10px;\n  padding: 4px 11px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fff;\n  letter-spacing: 0.02em;\n  backdrop-filter: blur(4px);\n}\n.modal-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, transform 0.25s ease;\n  backdrop-filter: blur(4px);\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 22px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\nlabel[_ngcontent-%COMP%], \n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.btn-ai[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 13px;\n  border-radius: 50px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  letter-spacing: 0.02em;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);\n  transition:\n    box-shadow 0.2s,\n    transform 0.15s,\n    opacity 0.2s;\n  white-space: nowrap;\n}\n.btn-ai[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.75);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_aiBlink 1.4s ease infinite;\n}\n.btn-ai[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-ai[_ngcontent-%COMP%]:disabled, \n.btn-ai.loading[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 14px;\n  font-size: 14px;\n  font-family: inherit;\n  background: var(--bo-bg-primary);\n  color: var(--bo-text-primary);\n  outline: none;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary);\n  opacity: 0.55;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 4px var(--a-light);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 108px;\n  resize: vertical;\n  line-height: 1.65;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 15px;\n  pointer-events: none;\n  line-height: 1;\n}\n.input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-left: 38px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-size: 12px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 9px 13px;\n  background: rgba(239, 68, 68, 0.06);\n  border: 1px solid rgba(239, 68, 68, 0.18);\n  border-radius: 10px;\n}\n.error[_ngcontent-%COMP%]::before {\n  content: "\\e2\\161\\a0\\ef\\b8\\8f";\n  font-size: 13px;\n}\n.ai-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--red);\n  padding: 8px 12px;\n  background: rgba(239, 68, 68, 0.06);\n  border: 1px solid rgba(239, 68, 68, 0.18);\n  border-radius: 10px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 16px 28px 24px;\n  border-top: 1.5px solid var(--bo-border);\n}\n.footer-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 11px 20px;\n  border: 1.5px solid var(--bo-border);\n  background: transparent;\n  color: var(--bo-text-secondary);\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  transition:\n    border-color 0.2s,\n    color 0.2s,\n    background 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--bo-text-secondary);\n  background: var(--bo-bg-primary);\n  color: var(--bo-text-primary);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 11px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent) 0%,\n      var(--purple) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  letter-spacing: 0.02em;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.38);\n  transition:\n    box-shadow 0.2s,\n    transform 0.15s,\n    opacity 0.2s;\n  overflow: hidden;\n}\n.btn-submit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.14) 0%,\n      transparent 60%);\n  border-radius: inherit;\n  pointer-events: none;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.52);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n@media (max-width: 600px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal[_ngcontent-%COMP%] {\n    border-radius: 22px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 22px 20px 18px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 18px 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 14px 20px 20px;\n    gap: 8px;\n  }\n  .footer-hint[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .footer-btns[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .field-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .btn-ai[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.matching-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.matching-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.matching-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0;\n}\n.matching-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.matching-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.match-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-top: 3px solid #6366f1;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.match-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.12);\n  transform: translateY(-2px);\n}\n.match-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.match-category[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.match-score[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.score-excellent[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.score-good[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.score-fair[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.score-low[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.match-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.match-skills-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 600;\n}\n.match-skills-tags[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #10b981;\n  font-weight: 600;\n}\n.match-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.breakdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breakdown-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  width: 65px;\n  flex-shrink: 0;\n}\n.breakdown-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.breakdown-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.8s ease;\n}\n.breakdown-fill.skills[_ngcontent-%COMP%] {\n  background: #6366f1;\n}\n.breakdown-fill.budget[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.breakdown-fill.experience[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.breakdown-fill.activity[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.breakdown-val[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  width: 30px;\n  text-align: right;\n}\n.match-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n}\n.recommendation-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.reco-excellent[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.reco-good[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.reco-fair[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.reco-low[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn-apply-match[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-apply-match[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-apply-match[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-predict[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  margin: 8px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.btn-predict[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-predict[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  transition:\n    opacity 0.2s,\n    transform 0.15s,\n    box-shadow 0.2s;\n  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.32);\n}\n.btn-predict[_ngcontent-%COMP%]   .btn-predict-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-predict[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.48);\n}\n.btn-predict[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.prediction-result[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(168, 85, 247, 0.04));\n  border: 1.5px solid rgba(99, 102, 241, 0.16);\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeUp 0.35s ease both;\n}\n.pred-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.pred-score-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 58px;\n  height: 58px;\n  flex-shrink: 0;\n}\n.pred-ring[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n}\n.pred-ring[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-child {\n  transition: stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pred-score-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pred-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  line-height: 1;\n}\n.pred-level-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.pred-level-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  width: fit-content;\n  letter-spacing: 0.02em;\n}\n.pred-level-badge.level-high[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.pred-level-badge.level-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.pred-level-badge.level-low[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.pred-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  font-weight: 500;\n  opacity: 0.7;\n}\n.pred-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pred-bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pred-bar-label[_ngcontent-%COMP%] {\n  width: 115px;\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.pred-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.pred-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.75s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 4px;\n}\n.pred-bar-val[_ngcontent-%COMP%] {\n  width: 34px;\n  font-weight: 700;\n  font-size: 11px;\n  text-align: right;\n  color: var(--bo-text-primary);\n  flex-shrink: 0;\n}\n.pred-advice[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: flex-start;\n  background: rgba(245, 158, 11, 0.07);\n  border: 1px solid rgba(245, 158, 11, 0.18);\n  border-radius: 10px;\n  padding: 10px 13px;\n  font-size: 12px;\n  color: #92400e;\n  line-height: 1.55;\n}\n.pred-advice[_ngcontent-%COMP%]   .pred-advice-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 14px;\n  margin-top: 1px;\n}\n.filter-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid rgba(59, 130, 246, 0.15);\n  border-radius: 20px;\n  padding: 22px 26px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: 0 4px 32px rgba(59, 130, 246, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.filter-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #6366f1,\n      #a855f7);\n  border-radius: 20px 20px 0 0;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.filter-row-2[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px solid var(--bo-border, rgba(0, 0, 0, 0.06));\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 16px 11px 42px;\n  border: 1.5px solid var(--bo-border, rgba(0, 0, 0, 0.1));\n  border-radius: 10px;\n  font-size: 13.5px;\n  font-family: inherit;\n  background: var(--bo-bg-primary, #f4f6fb);\n  color: var(--bo-text-primary, #111827);\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #fff;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0b8c9;\n}\n.form-select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid var(--bo-border, rgba(0, 0, 0, 0.1));\n  border-radius: 12px;\n  font-size: 13px;\n  font-family: inherit;\n  background: var(--bo-bg-primary, #f4f6fb);\n  color: var(--bo-text-primary, #111827);\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  min-width: 150px;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n.budget-slider-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .budget-slider-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .budget-slider-values[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 700;\n  color: #3b82f6;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .slider-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  margin: 4px 0;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .slider-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #6366f1);\n  border-radius: 10px;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 6px;\n  background: transparent;\n  cursor: pointer;\n  margin: 4px 0;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #3b82f6;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 6px rgba(59, 130, 246, 0.4);\n  cursor: pointer;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  height: 6px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #6366f1);\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .range-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 7px 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 12px;\n  font-family: inherit;\n  background: #f8faff;\n  color: #111827;\n  outline: none;\n  transition: border-color 0.2s;\n  text-align: center;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0b8c9;\n}\n.budget-slider-wrap[_ngcontent-%COMP%]   .range-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  border-radius: 10px;\n  background: rgba(239, 68, 68, 0.06);\n  color: #dc2626;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.filter-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid var(--bo-border, rgba(0, 0, 0, 0.06));\n}\n.filter-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 10px;\n  border-radius: 50px;\n}\n.filter-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 3px 10px;\n  border-radius: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n.filter-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 11px;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.filter-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\nbody.dark[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n  background: #13162a;\n  border-color: rgba(255, 255, 255, 0.08);\n}\nbody.dark[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%], \nbody.dark[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \nbody.dark[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%] {\n  background: #1a1d35;\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #e8eaf6;\n}\nbody.dark[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=projects.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlProjectsComponent, { className: "FlProjectsComponent", filePath: "app\\freelancer\\projects\\projects.component.ts", lineNumber: 266 });
})();

// src/app/freelancer/proposals/proposals.component.ts
function FlProposalsComponent_button_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getCount(s_r2));
  }
}
function FlProposalsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function FlProposalsComponent_button_8_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, FlProposalsComponent_button_8_span_2_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeFilter === s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getCount(s_r2) > 0);
  }
}
function FlProposalsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function FlProposalsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No proposals in this category.");
    \u0275\u0275elementEnd()();
  }
}
function FlProposalsComponent_div_10_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Client: ", p_r4.clientEmail, "");
  }
}
function FlProposalsComponent_div_10_div_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.coverLetter);
  }
}
function FlProposalsComponent_div_10_div_2_span_10_Template(rf, ctx) {
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
function FlProposalsComponent_div_10_div_2_span_11_Template(rf, ctx) {
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
function FlProposalsComponent_div_10_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "strong");
    \u0275\u0275text(2, "\u{1F4EC} Client feedback:");
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
function FlProposalsComponent_div_10_div_2_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "span", 40);
    \u0275\u0275text(3, " Project in progress \u2014 ready to submit? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function FlProposalsComponent_div_10_div_2_div_16_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDeliveryModal(p_r4));
    });
    \u0275\u0275text(5, " \u{1F4E6} Submit Delivery ");
    \u0275\u0275elementEnd()();
  }
}
function FlProposalsComponent_div_10_div_2_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "strong");
    \u0275\u0275text(5, "Delivery submitted \u2014 awaiting client confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "The client will confirm or request a revision");
    \u0275\u0275elementEnd()()();
  }
}
function FlProposalsComponent_div_10_div_2_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 43);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "strong");
    \u0275\u0275text(5, "Project completed & confirmed by client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Payment has been released");
    \u0275\u0275elementEnd()()();
  }
}
function FlProposalsComponent_div_10_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, FlProposalsComponent_div_10_div_2_div_16_div_1_Template, 6, 0, "div", 35)(2, FlProposalsComponent_div_10_div_2_div_16_div_2_Template, 8, 0, "div", 36)(3, FlProposalsComponent_div_10_div_2_div_16_div_3_Template, 8, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "ACCEPTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "DELIVERED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "COMPLETED");
  }
}
function FlProposalsComponent_div_10_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47);
    \u0275\u0275listener("click", function FlProposalsComponent_div_10_div_2_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.withdraw(p_r4.id));
    });
    \u0275\u0275text(2, "Withdraw");
    \u0275\u0275elementEnd()();
  }
}
function FlProposalsComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "h3", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FlProposalsComponent_div_10_div_2_span_5_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FlProposalsComponent_div_10_div_2_p_8_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275template(10, FlProposalsComponent_div_10_div_2_span_10_Template, 2, 1, "span", 27)(11, FlProposalsComponent_div_10_div_2_span_11_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, FlProposalsComponent_div_10_div_2_div_15_Template, 4, 1, "div", 28)(16, FlProposalsComponent_div_10_div_2_div_16_Template, 4, 3, "div", 29)(17, FlProposalsComponent_div_10_div_2_div_17_Template, 3, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r7 * 0.05 + "s");
    \u0275\u0275classProp("card-accepted", p_r4.status === "ACCEPTED")("card-delivered", p_r4.status === "DELIVERED")("card-completed", p_r4.status === "COMPLETED");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r4.projectTitle || "Project #" + p_r4.projectId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.clientEmail);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(p_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.coverLetter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.proposedBudget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.deliveryTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(14, 20, p_r4.createdAt, "dd/MM/yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.clientFeedback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "ACCEPTED" || p_r4.status === "DELIVERED" || p_r4.status === "COMPLETED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status === "PENDING");
  }
}
function FlProposalsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, FlProposalsComponent_div_10_div_1_Template, 5, 0, "div", 15)(2, FlProposalsComponent_div_10_div_2_Template, 18, 23, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filtered.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filtered);
  }
}
function FlProposalsComponent_div_11_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prop_r10 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Client: ", prop_r10.clientEmail, "");
  }
}
function FlProposalsComponent_div_11_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r2.deliveryError, "");
  }
}
function FlProposalsComponent_div_11_div_1_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6} Submit Delivery");
    \u0275\u0275elementEnd();
  }
}
function FlProposalsComponent_div_11_div_1_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function FlProposalsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function FlProposalsComponent_div_11_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "div")(4, "div", 53);
    \u0275\u0275text(5, "Submit your work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275text(7, "\u{1F4E6} Submit Delivery");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 55);
    \u0275\u0275listener("click", function FlProposalsComponent_div_11_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDeliveryModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 56)(11, "div", 57)(12, "span", 58);
    \u0275\u0275text(13, "\u{1F680}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "div", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, FlProposalsComponent_div_11_div_1_div_17_Template, 2, 1, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 61)(19, "label", 62);
    \u0275\u0275text(20, "Delivery link / URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function FlProposalsComponent_div_11_div_1_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.deliveryForm.link, $event) || (ctx_r2.deliveryForm.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 61)(23, "label", 62);
    \u0275\u0275text(24, " Delivery message ");
    \u0275\u0275elementStart(25, "span", 64);
    \u0275\u0275text(26, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function FlProposalsComponent_div_11_div_1_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.deliveryForm.message, $event) || (ctx_r2.deliveryForm.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function FlProposalsComponent_div_11_div_1_Template_textarea_input_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMessageInput());
    });
    \u0275\u0275text(28, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, FlProposalsComponent_div_11_div_1_div_31_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 68)(33, "div", 69);
    \u0275\u0275text(34, "\u{1F4E7} Client will be notified by email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 70)(36, "button", 71);
    \u0275\u0275listener("click", function FlProposalsComponent_div_11_div_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDeliveryModal());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 72);
    \u0275\u0275listener("click", function FlProposalsComponent_div_11_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitDelivery());
    });
    \u0275\u0275template(39, FlProposalsComponent_div_11_div_1_span_39_Template, 2, 0, "span", 27)(40, FlProposalsComponent_div_11_div_1_span_40_Template, 4, 0, "span", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prop_r10 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(prop_r10.projectTitle || "Project #" + prop_r10.projectId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", prop_r10.clientEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.deliveryForm.link);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.deliveryForm.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.deliveryForm.message.length, " / 500");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.deliveryError);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSubmitting);
  }
}
function FlProposalsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function FlProposalsComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeliveryModal());
    });
    \u0275\u0275template(1, FlProposalsComponent_div_11_div_1_Template, 41, 9, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedProposal);
  }
}
var FlProposalsComponent = class _FlProposalsComponent {
  constructor(authService, proposalService, http) {
    this.authService = authService;
    this.proposalService = proposalService;
    this.http = http;
    this.proposals = [];
    this.filtered = [];
    this.activeFilter = "ALL";
    this.isLoading = true;
    this.isSubmitting = false;
    this.statuses = ["ALL", "PENDING", "ACCEPTED", "DELIVERED", "COMPLETED", "REJECTED", "WITHDRAWN"];
    this.deliveryModal = false;
    this.selectedProposal = null;
    this.deliveryError = "";
    this.deliveryForm = { link: "", message: "" };
    this.api = environment.apiUrl;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading = true;
    const userId = this.authService.currentUser?.id;
    this.proposalService.getAll(void 0, userId).subscribe({
      next: (p) => {
        this.proposals = p;
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  setFilter(s) {
    this.activeFilter = s;
    this.applyFilter();
  }
  applyFilter() {
    this.filtered = this.activeFilter === "ALL" ? this.proposals : this.proposals.filter((p) => p.status === this.activeFilter);
  }
  getCount(status) {
    if (status === "ALL")
      return 0;
    return this.proposals.filter((p) => p.status === status).length;
  }
  getStatusClass(s) {
    const m = {
      PENDING: "status-pending",
      ACCEPTED: "status-accept",
      DELIVERED: "status-deliver",
      COMPLETED: "status-complete",
      REJECTED: "status-reject",
      WITHDRAWN: "status-cancel"
    };
    return m[s] ?? "";
  }
  withdraw(id) {
    if (!confirm("Withdraw this proposal?"))
      return;
    this.proposalService.updateStatus(id, "WITHDRAWN").subscribe(() => this.load());
  }
  // ── Delivery modal ─────────────────────────────────────────
  openDeliveryModal(p) {
    this.selectedProposal = p;
    this.deliveryForm = { link: "", message: "" };
    this.deliveryError = "";
    this.deliveryModal = true;
  }
  closeDeliveryModal() {
    this.deliveryModal = false;
    this.selectedProposal = null;
    this.deliveryError = "";
  }
  onMessageInput() {
  }
  submitDelivery() {
    if (!this.deliveryForm.link.trim()) {
      this.deliveryError = "Please provide a delivery link.";
      return;
    }
    if (!this.selectedProposal?.projectId)
      return;
    this.isSubmitting = true;
    this.deliveryError = "";
    this.http.patch(`${this.api}/projects/${this.selectedProposal.projectId}/deliver`, {
      deliveryLink: this.deliveryForm.link,
      deliveryMessage: this.deliveryForm.message,
      freelancerId: this.authService.currentUser?.id,
      proposalId: this.selectedProposal.id
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.closeDeliveryModal();
        this.load();
      },
      error: (err) => {
        this.deliveryError = err?.error?.error || "Failed to submit delivery. Please try again.";
        this.isSubmitting = false;
      }
    });
  }
  static {
    this.\u0275fac = function FlProposalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlProposalsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProposalService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlProposalsComponent, selectors: [["app-fl-proposals"]], decls: 12, vars: 4, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "filters"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "proposals-list", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "filter-btn", 3, "click"], ["class", "filter-count", 4, "ngIf"], [1, "filter-count"], [1, "loading-state"], [1, "spinner"], [1, "proposals-list"], ["class", "empty", 4, "ngIf"], ["class", "proposal-card", 3, "card-accepted", "card-delivered", "card-completed", "animation-delay", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "empty-icon"], [1, "proposal-card"], [1, "proposal-header"], [1, "header-left"], [1, "project-title"], ["class", "client-info", 4, "ngIf"], [1, "badge"], ["class", "cover-letter", 4, "ngIf"], [1, "proposal-meta"], [4, "ngIf"], ["class", "feedback-box", 4, "ngIf"], ["class", "delivery-section", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "client-info"], [1, "cover-letter"], [1, "feedback-box"], [1, "delivery-section"], ["class", "delivery-cta", 4, "ngIf"], ["class", "waiting-state", 4, "ngIf"], ["class", "completed-state", 4, "ngIf"], [1, "delivery-cta"], [1, "delivery-cta-text"], [1, "live-dot"], [1, "btn-deliver", 3, "click"], [1, "waiting-state"], [1, "state-icon"], [1, "state-text"], [1, "completed-state"], [1, "card-actions"], [1, "btn-withdraw", 3, "click"], [1, "modal-overlay", 3, "click"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-header-inner"], [1, "modal-eyebrow"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "project-info-box"], [1, "proj-icon"], [1, "proj-name"], ["class", "proj-client", 4, "ngIf"], [1, "form-group"], [1, "field-label"], ["type", "url", "placeholder", "https://github.com/yourrepo or https://drive.google.com/...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "optional-hint"], ["placeholder", "Describe what you've delivered, how to test it, any notes for the client...", "maxlength", "500", 1, "form-input", "form-textarea", 3, "ngModelChange", "input", "ngModel"], [1, "char-count"], ["class", "form-error", 4, "ngIf"], [1, "modal-footer"], [1, "footer-hint"], [1, "footer-btns"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], ["class", "btn-dots", 4, "ngIf"], [1, "proj-client"], [1, "form-error"], [1, "btn-dots"]], template: function FlProposalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Proposals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Track your job applications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, FlProposalsComponent_button_8_Template, 3, 4, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, FlProposalsComponent_div_9_Template, 4, 0, "div", 6)(10, FlProposalsComponent_div_10_Template, 3, 2, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, FlProposalsComponent_div_11_Template, 2, 1, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.deliveryModal);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  --accent: #6366f1;\n  --purple: #a855f7;\n  --green: #22c55e;\n  --amber: #f59e0b;\n  --red: #ef4444;\n  --a-light: rgba(99,102,241,0.1);\n  --g-light: rgba(34,197,94,0.1);\n  --am-light: rgba(245,158,11,0.1);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.75);\n  }\n}\n@keyframes _ngcontent-%COMP%_dotBounce {\n  to {\n    transform: translateY(-5px);\n    opacity: 0.4;\n  }\n}\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  padding: 28px 32px;\n  min-height: 100%;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.4px;\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  margin: 0;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 15px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  background: transparent;\n  color: var(--bo-text-secondary);\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.3);\n  color: var(--bo-text-primary);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.35);\n}\n.filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n  border-radius: 50px;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 1px 6px;\n  min-width: 18px;\n  text-align: center;\n}\n.filter-btn[_ngcontent-%COMP%]:not(.active)   .filter-count[_ngcontent-%COMP%] {\n  background: var(--a-light);\n  color: var(--accent);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--bo-text-secondary);\n  padding: 24px 0;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: 2.5px solid var(--bo-border);\n  border-top-color: var(--accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n  flex-shrink: 0;\n}\n.proposals-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 60px 20px;\n  color: var(--bo-text-secondary);\n  font-size: 14px;\n}\n.empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 38px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.proposal-card[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1.5px solid var(--bo-border);\n  border-radius: 18px;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeUp 0.35s ease both;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.proposal-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 3px 0 0 3px;\n  background: var(--bo-border);\n  transition: background 0.3s;\n}\n.proposal-card.card-accepted[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent),\n      var(--purple));\n}\n.proposal-card.card-delivered[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      var(--amber),\n      #ef4444);\n}\n.proposal-card.card-completed[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      var(--green),\n      #16a34a);\n}\n.proposal-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.2);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.07);\n}\n.proposal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.project-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n  margin: 0 0 3px;\n  line-height: 1.3;\n}\n.client-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.25);\n}\n.status-accept[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.status-deliver[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-complete[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.status-reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.status-cancel[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #94a3b8;\n  border: 1px solid rgba(100, 116, 139, 0.2);\n}\n.cover-letter[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  line-height: 1.65;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.proposal-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: var(--bo-text-secondary);\n}\n.proposal-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.feedback-box[_ngcontent-%COMP%] {\n  background: var(--a-light);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n  line-height: 1.55;\n}\n.delivery-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--bo-border);\n  padding-top: 13px;\n}\n.delivery-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.delivery-cta-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--bo-text-secondary);\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--accent);\n  box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);\n  animation: _ngcontent-%COMP%_pulse 1.8s ease infinite;\n  flex-shrink: 0;\n}\n.btn-deliver[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.35);\n  transition: box-shadow 0.2s, transform 0.15s;\n  white-space: nowrap;\n}\n.btn-deliver[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 20px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-deliver[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.waiting-state[_ngcontent-%COMP%], \n.completed-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 15px;\n  border-radius: 12px;\n}\n.waiting-state[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.07);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.completed-state[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.07);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.state-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.state-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.state-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n.waiting-state[_ngcontent-%COMP%]   .state-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.completed-state[_ngcontent-%COMP%]   .state-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.state-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n.btn-withdraw[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background: rgba(239, 68, 68, 0.07);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-withdraw[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.14);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(5, 3, 18, 0.62);\n  backdrop-filter: blur(16px) saturate(1.4);\n  -webkit-backdrop-filter: blur(16px) saturate(1.4);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.2s ease both;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bo-bg-secondary);\n  border: 1.5px solid var(--bo-border);\n  border-radius: 26px;\n  width: 100%;\n  max-width: 480px;\n  overflow: hidden;\n  box-shadow:\n    0 0 0 1px rgba(99, 102, 241, 0.08),\n    0 8px 20px rgba(5, 3, 18, 0.1),\n    0 40px 90px rgba(5, 3, 18, 0.35);\n  animation: _ngcontent-%COMP%_modalIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 24px 26px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n}\n.modal-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  top: -70px;\n  right: -50px;\n  pointer-events: none;\n}\n.modal-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  bottom: -30px;\n  left: 30px;\n  pointer-events: none;\n}\n.modal-header-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.modal-eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.55);\n  margin-bottom: 4px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, transform 0.25s ease;\n  flex-shrink: 0;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 22px 26px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.project-info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: var(--a-light);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: 12px;\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--bo-text-primary);\n}\n.project-info-box[_ngcontent-%COMP%]   .proj-client[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  margin-top: 2px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--bo-text-secondary);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.optional-hint[_ngcontent-%COMP%] {\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--bo-text-secondary);\n  opacity: 0.5;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 13px;\n  font-size: 14px;\n  font-family: inherit;\n  background: var(--bo-bg-primary);\n  color: var(--bo-text-primary);\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--bo-text-secondary);\n  opacity: 0.4;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px var(--a-light);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 90px;\n  resize: vertical;\n  line-height: 1.65;\n}\n.char-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  opacity: 0.5;\n  text-align: right;\n  margin-top: 3px;\n}\n.form-error[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  background: rgba(239, 68, 68, 0.07);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #f87171;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 14px 26px 24px;\n  border-top: 1px solid var(--bo-border);\n  margin-top: 10px;\n}\n.footer-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--bo-text-secondary);\n  opacity: 0.5;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: 1.5px solid var(--bo-border);\n  background: transparent;\n  color: var(--bo-text-secondary);\n  border-radius: 11px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--bo-text-secondary);\n  color: var(--bo-text-primary);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 10px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  color: #fff;\n  border: none;\n  border-radius: 11px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  min-width: 152px;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.38);\n  transition:\n    box-shadow 0.2s,\n    transform 0.15s,\n    opacity 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.13),\n      transparent 60%);\n  border-radius: inherit;\n  pointer-events: none;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.52);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  background: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_dotBounce 0.6s infinite alternate;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.btn-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@media (max-width: 600px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .delivery-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .btn-deliver[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .modal[_ngcontent-%COMP%] {\n    border-radius: 22px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 20px 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 18px 20px 8px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 12px 20px 20px;\n    gap: 8px;\n  }\n  .footer-hint[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .footer-btns[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=proposals.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlProposalsComponent, { className: "FlProposalsComponent", filePath: "app\\freelancer\\proposals\\proposals.component.ts", lineNumber: 191 });
})();

// src/app/freelancer/notifications/notifications.component.ts
function FlNotificationsComponent_span_5_Template(rf, ctx) {
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
function FlNotificationsComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function FlNotificationsComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, " \u2713 Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function FlNotificationsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading notifications\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FlNotificationsComponent_div_19_Template(rf, ctx) {
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
function FlNotificationsComponent_div_20_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
}
function FlNotificationsComponent_div_20_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function FlNotificationsComponent_div_20_div_1_button_17_Template_button_click_0_listener($event) {
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
function FlNotificationsComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function FlNotificationsComponent_div_20_div_1_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markRead(n_r4));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, FlNotificationsComponent_div_20_div_1_div_5_Template, 1, 0, "div", 27);
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
    \u0275\u0275template(17, FlNotificationsComponent_div_20_div_1_button_17_Template, 2, 0, "button", 35);
    \u0275\u0275elementStart(18, "button", 36);
    \u0275\u0275listener("click", function FlNotificationsComponent_div_20_div_1_Template_button_click_18_listener($event) {
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
function FlNotificationsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, FlNotificationsComponent_div_20_div_1_Template, 20, 11, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filtered);
  }
}
var FlNotificationsComponent = class _FlNotificationsComponent {
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  constructor(authService, notifService) {
    this.authService = authService;
    this.notifService = notifService;
    this.notifications = [];
    this.filtered = [];
    this.isLoading = true;
    this.activeFilter = "all";
  }
  ngOnInit() {
    this.authService.checkAuth();
    this.load();
    this.pollTimer = setInterval(() => this.load(false), 15e3);
  }
  ngOnDestroy() {
    if (this.pollTimer)
      clearInterval(this.pollTimer);
  }
  load(showSpinner = true) {
    const userId = this.authService.currentUser?.id;
    if (!userId) {
      this.isLoading = false;
      return;
    }
    if (showSpinner)
      this.isLoading = true;
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
      PROPOSAL_RECEIVED: "Proposal",
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
    this.\u0275fac = function FlNotificationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlNotificationsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlNotificationsComponent, selectors: [["app-fl-notifications"]], decls: 21, vars: 13, consts: [[1, "notif-page"], [1, "notif-header"], [1, "header-left"], [1, "notif-title"], ["class", "unread-badge", 4, "ngIf"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], [1, "filter-bar"], [1, "filter-btn", 3, "click"], [1, "filter-count"], [1, "filter-count", "unread-count"], ["class", "loading-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "unread-badge"], [1, "btn-mark-all", 3, "click"], [1, "loading-wrap"], [1, "loader"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "notif-list"], ["class", "notif-card", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-card", 3, "click"], [1, "card-left"], [1, "notif-icon-wrap", 3, "ngClass"], [1, "notif-icon"], ["class", "unread-dot", 4, "ngIf"], [1, "card-body"], [1, "card-top"], [1, "type-tag", 3, "ngClass"], [1, "notif-time"], [1, "notif-title-text"], [1, "notif-msg"], [1, "card-actions"], ["class", "btn-read", "title", "Mark as read", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn-del", 3, "click"], [1, "unread-dot"], ["title", "Mark as read", 1, "btn-read", 3, "click"]], template: function FlNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, FlNotificationsComponent_span_5_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, FlNotificationsComponent_button_6_Template, 2, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function FlNotificationsComponent_Template_button_click_8_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(9, " All ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function FlNotificationsComponent_Template_button_click_12_listener() {
          return ctx.setFilter("unread");
        });
        \u0275\u0275text(13, " Unread ");
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function FlNotificationsComponent_Template_button_click_16_listener() {
          return ctx.setFilter("read");
        });
        \u0275\u0275text(17, " Read ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, FlNotificationsComponent_div_18_Template, 4, 0, "div", 10)(19, FlNotificationsComponent_div_19_Template, 7, 0, "div", 11)(20, FlNotificationsComponent_div_20_Template, 2, 1, "div", 12);
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
    }, dependencies: [NgClass, NgForOf, NgIf], styles: ['\n\n.notif-page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 24px 80px;\n  font-family:\n    "Plus Jakarta Sans",\n    "DM Sans",\n    system-ui,\n    sans-serif;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--bo-text-primary, #111827);\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #a855f7);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.03em;\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border: 1.5px solid #6366f1;\n  color: #6366f1;\n  background: transparent;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  color: #6b7280;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.18s;\n}\nbody.dark[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  background: #13162a;\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #8892b0;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: white;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);\n}\n.filter-count[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  padding: 1px 7px;\n  border-radius: 50px;\n  font-size: 11px;\n}\n.active[_ngcontent-%COMP%]   .filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.unread-count[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 14px;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid rgba(99, 102, 241, 0.2);\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  background: white;\n  border-radius: 20px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n}\nbody.dark[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background: #13162a;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.4;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 6px;\n}\nbody.dark[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n  margin: 0;\n}\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.notif-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 18px 20px;\n  background: white;\n  border-radius: 16px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  overflow: hidden;\n}\nbody.dark[_ngcontent-%COMP%]   .notif-card[_ngcontent-%COMP%] {\n  background: #13162a;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.notif-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: transparent;\n  transition: background 0.2s;\n}\n.notif-card.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.03);\n  border-color: rgba(99, 102, 241, 0.2);\n}\nbody.dark[_ngcontent-%COMP%]   .notif-card.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.notif-card.unread[_ngcontent-%COMP%]::before {\n  background: #6366f1;\n}\n.notif-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.card-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.notif-icon-wrap.type-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.notif-icon-wrap.type-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n}\n.notif-icon-wrap.type-info[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n}\n.notif-icon-wrap.type-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6366f1;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.5);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 6px rgba(99, 102, 241, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 14px rgba(99, 102, 241, 0.8);\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.type-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 3px 9px;\n  border-radius: 50px;\n}\n.type-tag.type-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.type-tag.type-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.type-tag.type-info[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n}\n.type-tag.type-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-left: auto;\n  white-space: nowrap;\n}\n.notif-title-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n  line-height: 1.4;\n}\nbody.dark[_ngcontent-%COMP%]   .notif-title-text[_ngcontent-%COMP%] {\n  color: #e8eaf6;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\nbody.dark[_ngcontent-%COMP%]   .notif-msg[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.btn-read[_ngcontent-%COMP%], \n.btn-del[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n}\n.btn-read[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.btn-read[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.2);\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #dc2626;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n/*# sourceMappingURL=notifications.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlNotificationsComponent, { className: "FlNotificationsComponent", filePath: "app\\freelancer\\notifications\\notifications.component.ts", lineNumber: 11 });
})();

// src/app/freelancer/profile/profile.component.ts
var _c03 = ["skillInput"];
var _c13 = ["fileInput"];
var _c2 = () => [1, 2, 3];
function FlProfileComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 67);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.avatarPreview, \u0275\u0275sanitizeUrl);
  }
}
function FlProfileComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials((ctx_r1.user == null ? null : ctx_r1.user.firstName) + " " + (ctx_r1.user == null ? null : ctx_r1.user.lastName)));
  }
}
function FlProfileComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function FlProfileComponent_button_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removePhoto());
    });
    \u0275\u0275text(1, "?");
    \u0275\u0275elementEnd();
  }
}
function FlProfileComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.badges.length, " badge", ctx_r1.badges.length > 1 ? "s" : "", " earned ");
  }
}
function FlProfileComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save changes");
    \u0275\u0275elementEnd();
  }
}
function FlProfileComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function FlProfileComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "? Saved!");
    \u0275\u0275elementEnd();
  }
}
function FlProfileComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 74);
    \u0275\u0275listener("click", function FlProfileComponent_span_80_Template_button_click_2_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removeSkill(i_r5));
    });
    \u0275\u0275text(3, "\uFFFD");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.getTagColor(tag_r6))("background", ctx_r1.getTagBg(tag_r6))("border-color", ctx_r1.getTagBorder(tag_r6));
    \u0275\u0275classProp("fp-tag--removing", ctx_r1.removingIndex === i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r6, " ");
  }
}
function FlProfileComponent_div_83_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("mousedown", function FlProfileComponent_div_83_div_1_Template_div_mousedown_0_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.addSuggestion(s_r8.skill));
    });
    \u0275\u0275element(1, "span", 79);
    \u0275\u0275elementStart(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.skill);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r8.color)("background", s_r8.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.category);
  }
}
function FlProfileComponent_div_83_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("mousedown", function FlProfileComponent_div_83_div_2_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.addTag(ctx_r1.skillInputValue));
    });
    \u0275\u0275elementStart(1, "span", 83);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(' Add "', ctx_r1.skillInputValue.trim(), '" ');
  }
}
function FlProfileComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, FlProfileComponent_div_83_div_1_Template, 6, 8, "div", 76)(2, FlProfileComponent_div_83_div_2_Template, 4, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredSuggestions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canAddCustom);
  }
}
function FlProfileComponent_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function FlProfileComponent_button_85_Template_button_click_0_listener() {
      const cat_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategory(cat_r11.label));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--cat-color", cat_r11.color);
    \u0275\u0275classProp("fp-cat-tab--active", ctx_r1.activeCategory === cat_r11.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r11.label);
  }
}
function FlProfileComponent_span_87_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "? ");
    \u0275\u0275elementEnd();
  }
}
function FlProfileComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275listener("click", function FlProfileComponent_span_87_Template_span_click_0_listener() {
      const skill_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.skillTags.includes(skill_r13) && ctx_r1.addSuggestion(skill_r13));
    });
    \u0275\u0275template(1, FlProfileComponent_span_87_span_1_Template, 2, 0, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.activeCategoryColor)("background", ctx_r1.activeCategoryBg)("border-color", ctx_r1.activeCategoryColor + "55");
    \u0275\u0275classProp("fp-cat-skill--added", ctx_r1.skillTags.includes(skill_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.skillTags.includes(skill_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", skill_r13, " ");
  }
}
function FlProfileComponent_span_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.badges.length);
  }
}
function FlProfileComponent_div_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 89);
  }
}
function FlProfileComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, FlProfileComponent_div_95_div_1_Template, 1, 0, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function FlProfileComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275text(2, "??");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 92);
    \u0275\u0275text(4, "No badges yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 93);
    \u0275\u0275text(6, "Complete projects and get reviews to earn your first badge.");
    \u0275\u0275elementEnd()();
  }
}
function FlProfileComponent_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "span", 98);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 100)(6, "div", 101);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 102);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 104);
    \u0275\u0275element(12, "rect", 105)(13, "line", 106)(14, "line", 107)(15, "line", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const badge_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--bc", ctx_r1.getBadgeStyle(badge_r14.type).color)("--bb", ctx_r1.getBadgeStyle(badge_r14.type).bg)("--bbd", ctx_r1.getBadgeStyle(badge_r14.type).border)("--bg", ctx_r1.getBadgeStyle(badge_r14.type).glow);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(badge_r14.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(badge_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r14.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(badge_r14.earnedAt), " ");
  }
}
function FlProfileComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, FlProfileComponent_div_97_div_1_Template, 17, 12, "div", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.badges);
  }
}
var SKILL_CATEGORIES = [
  { label: "Frontend", color: "#818cf8", bg: "rgba(99,102,241,0.13)", border: "rgba(99,102,241,0.3)", skills: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS", "HTML/CSS", "Svelte", "Nuxt.js"] },
  { label: "Backend", color: "#34d399", bg: "rgba(16,185,129,0.13)", border: "rgba(16,185,129,0.3)", skills: ["Node.js", "Python", "Java", "Spring Boot", "Django", "Flask", "PHP", "Laravel", "Express.js", "NestJS", "C#", ".NET", "Go", "Rust"] },
  { label: "Database", color: "#67e8f9", bg: "rgba(6,182,212,0.13)", border: "rgba(6,182,212,0.3)", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "GraphQL", "REST API", "Elasticsearch", "SQLite"] },
  { label: "DevOps", color: "#fde68a", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "Git", "Linux", "Terraform", "Nginx", "Jenkins"] },
  { label: "Mobile", color: "#f9a8d4", bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.3)", skills: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Expo", "Capacitor"] },
  { label: "Design", color: "#c4b5fd", bg: "rgba(139,92,246,0.13)", border: "rgba(139,92,246,0.3)", skills: ["Figma", "UI/UX", "Adobe XD", "Photoshop", "Illustrator", "Wireframing", "Prototyping", "Webflow"] },
  { label: "AI / Data", color: "#6ee7b7", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)", skills: ["Machine Learning", "Data Science", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Pandas", "NumPy", "Scikit-learn"] }
];
var BADGE_STYLES = {
  FIRST_PROPOSAL: { color: "#22c55e", bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", glow: "rgba(34,197,94,0.25)" },
  PROLIFIC: { color: "#6366f1", bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)", glow: "rgba(99,102,241,0.25)" },
  FAST_STARTER: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", glow: "rgba(245,158,11,0.25)" },
  RISING_TALENT: { color: "#f97316", bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)", glow: "rgba(249,115,22,0.25)" },
  EXPERIENCED: { color: "#a855f7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.3)", glow: "rgba(168,85,247,0.25)" },
  EXPERT: { color: "#eab308", bg: "rgba(234,179,8,0.12)", border: "rgba(234,179,8,0.3)", glow: "rgba(234,179,8,0.25)" },
  ELITE: { color: "#06b6d4", bg: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.3)", glow: "rgba(6,182,212,0.3)" },
  HIGH_ACCEPTANCE: { color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)", glow: "rgba(16,185,129,0.25)" },
  TOP_RATED: { color: "#f43f5e", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.3)", glow: "rgba(244,63,94,0.25)" },
  VERIFIED_PRO: { color: "#3b82f6", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", glow: "rgba(59,130,246,0.25)" }
};
var FlProfileComponent = class _FlProfileComponent {
  get activeCategorySkills() {
    return this.categories.find((c) => c.label === this.activeCategory)?.skills ?? [];
  }
  get activeCategoryColor() {
    return this.categories.find((c) => c.label === this.activeCategory)?.color ?? "#a855f7";
  }
  get activeCategoryBg() {
    return this.categories.find((c) => c.label === this.activeCategory)?.bg ?? "rgba(168,85,247,0.12)";
  }
  get filteredSuggestions() {
    const q = this.skillInputValue.trim().toLowerCase();
    if (!q)
      return [];
    const res = [];
    for (const cat of this.categories)
      for (const skill of cat.skills)
        if (skill.toLowerCase().includes(q) && !this.skillTags.includes(skill))
          res.push({ skill, category: cat.label, color: cat.color, bg: cat.bg });
    return res.slice(0, 8);
  }
  get profileCompletion() {
    if (!this.user)
      return 0;
    const fields = [
      this.user.firstName,
      this.user.lastName,
      this.user.email,
      this.user.phone,
      this.user.bio,
      this.user.avatar,
      this.user.hourlyRate,
      this.user.experienceYears,
      this.user.portfolioUrl,
      this.skillTags.length > 0 ? "ok" : ""
    ];
    const filled = fields.filter((f) => f !== null && f !== void 0 && f !== "" && f !== 0).length;
    return Math.round(filled / fields.length * 100);
  }
  get canAddCustom() {
    const q = this.skillInputValue.trim();
    return q.length > 0 && !this.categories.some((c) => c.skills.some((s) => s.toLowerCase() === q.toLowerCase())) && !this.skillTags.some((t) => t.toLowerCase() === q.toLowerCase());
  }
  constructor(authService, userService, http) {
    this.authService = authService;
    this.userService = userService;
    this.http = http;
    this.user = null;
    this.isSaving = false;
    this.saved = false;
    this.avatarPreview = null;
    this.selectedPhotoFile = null;
    this.badges = [];
    this.badgesLoading = false;
    this.skillTags = [];
    this.skillInputValue = "";
    this.inputFocused = false;
    this.showDropdown = false;
    this.removingIndex = -1;
    this.activeCategory = "Frontend";
    this.categories = SKILL_CATEGORIES;
  }
  ngOnInit() {
    this.authService.checkAuth();
    this.user = this.authService.currentUser ? __spreadValues({}, this.authService.currentUser) : null;
    if (this.user?.id) {
      this.userService.getById(this.user.id).subscribe({
        next: (fullUser) => {
          this.user = __spreadValues(__spreadValues({}, this.user), fullUser);
          const raw = Array.isArray(this.user?.skills) ? this.user?.skills : this.user?.skills ? String(this.user.skills).split(",") : [];
          this.skillTags = raw.map((s) => s.trim()).filter((s) => s.length > 0);
          this.avatarPreview = this.user?.avatar ?? null;
        },
        error: () => {
          if (this.user?.skills) {
            const raw = Array.isArray(this.user.skills) ? this.user.skills : this.user.skills.split(",");
            this.skillTags = raw.map((s) => s.trim()).filter((s) => s.length > 0);
          }
          if (this.user?.avatar) {
            this.avatarPreview = this.user.avatar;
          }
        }
      });
      this.loadBadges(this.user.id);
    }
    this.applyTheme();
  }
  applyTheme() {
    const isDark = localStorage.getItem("theme") === "dark" || document.body.classList.contains("dark");
    const page = document.querySelector(".fp-page");
    if (page)
      page.classList.toggle("fp-light", !isDark);
  }
  removePhoto() {
    this.avatarPreview = null;
    this.selectedPhotoFile = null;
    if (this.user)
      this.user.avatar = void 0;
  }
  triggerFileInput() {
    this.fileInputRef?.nativeElement.click();
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    if (!file.type.startsWith("image/"))
      return;
    this.selectedPhotoFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarPreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
  loadBadges(userId) {
    this.badgesLoading = true;
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
    const badgeUrls = [
      `${environment.apiUrl}/badges/user/${userId}`,
      `http://localhost:8082/api/badges/user/${userId}`,
      `http://localhost:8081/api/badges/user/${userId}`
    ];
    const tryLoad = (index) => {
      if (index >= badgeUrls.length) {
        this.loadFallbackFreelancerBadges(userId);
        return;
      }
      this.http.get(badgeUrls[index], { headers }).subscribe({
        next: (res) => {
          const rawBadges = this.extractBadgesArray(res);
          const normalized = rawBadges.map((raw) => this.normalizeBadge(raw));
          if (normalized.length > 0) {
            this.badges = normalized;
            this.badgesLoading = false;
            return;
          }
          tryLoad(index + 1);
        },
        error: () => tryLoad(index + 1)
      });
    };
    tryLoad(0);
  }
  extractBadgesArray(payload) {
    if (Array.isArray(payload))
      return payload;
    if (Array.isArray(payload?.data))
      return payload.data;
    if (Array.isArray(payload?.content))
      return payload.content;
    return [];
  }
  normalizeBadge(raw) {
    const type = String(raw?.type ?? raw?.badgeType ?? raw?.name ?? "FIRST_PROPOSAL");
    const icon = raw?.icon || this.defaultIcon(type);
    return {
      id: Number(raw?.id ?? 0),
      type,
      title: raw?.title ?? type.replace(/_/g, " "),
      description: raw?.description ?? "Achievement unlocked",
      icon,
      earnedAt: raw?.earnedAt ?? raw?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  defaultIcon(type) {
    const map = {
      FIRST_PROPOSAL: "??",
      PROLIFIC: "??",
      FAST_STARTER: "?",
      RISING_TALENT: "??",
      EXPERIENCED: "??",
      EXPERT: "??",
      ELITE: "??",
      HIGH_ACCEPTANCE: "??",
      TOP_RATED: "?",
      VERIFIED_PRO: "?"
    };
    return map[type] ?? "??";
  }
  loadFallbackFreelancerBadges(userId) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
    this.http.get(`${environment.apiUrl}/proposals?freelancerId=${userId}`, { headers }).subscribe({
      next: (proposals) => {
        const total = proposals?.length ?? 0;
        const accepted = (proposals ?? []).filter((p) => String(p?.status ?? "").toUpperCase() === "ACCEPTED").length;
        const fallback = [];
        if (total >= 1)
          fallback.push({ id: 1, type: "FIRST_PROPOSAL", title: "First Step", description: "Submitted your first proposal", icon: "??", earnedAt: (/* @__PURE__ */ new Date()).toISOString() });
        if (total >= 20)
          fallback.push({ id: 2, type: "PROLIFIC", title: "Prolific", description: "Submitted 20+ proposals", icon: "??", earnedAt: (/* @__PURE__ */ new Date()).toISOString() });
        if (accepted >= 1)
          fallback.push({ id: 3, type: "RISING_TALENT", title: "Rising Talent", description: "Got your first proposal accepted", icon: "??", earnedAt: (/* @__PURE__ */ new Date()).toISOString() });
        if (accepted >= 5)
          fallback.push({ id: 4, type: "EXPERIENCED", title: "Experienced", description: "Got 5 proposals accepted", icon: "??", earnedAt: (/* @__PURE__ */ new Date()).toISOString() });
        this.badges = fallback;
        this.badgesLoading = false;
      },
      error: () => {
        this.badges = [];
        this.badgesLoading = false;
      }
    });
  }
  getBadgeStyle(type) {
    return BADGE_STYLES[type] ?? BADGE_STYLES["FIRST_PROPOSAL"];
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  focusInput() {
    this.skillInputRef?.nativeElement.focus();
  }
  onInputFocus() {
    this.inputFocused = true;
    this.showDropdown = true;
  }
  onSkillInput() {
    this.showDropdown = true;
  }
  onSkillKeydown(event) {
    const val = this.skillInputValue.trim();
    if ((event.key === "Enter" || event.key === ",") && val) {
      event.preventDefault();
      this.addTag(val.replace(/,/g, ""));
      return;
    }
    if (event.key === "Backspace" && !this.skillInputValue && this.skillTags.length > 0) {
      this.removeSkill(this.skillTags.length - 1);
      return;
    }
    if (event.key === "Escape")
      this.showDropdown = false;
  }
  addTag(value) {
    const clean = value.trim().replace(/,/g, "");
    if (!clean || this.skillTags.includes(clean) || this.skillTags.length >= 20)
      return;
    this.skillTags = [...this.skillTags, clean];
    this.skillInputValue = "";
    this.showDropdown = false;
    this.syncSkills();
  }
  addSuggestion(skill) {
    if (this.skillTags.includes(skill))
      return;
    this.addTag(skill);
    setTimeout(() => this.focusInput(), 0);
  }
  removeSkill(index) {
    this.removingIndex = index;
    setTimeout(() => {
      this.skillTags = this.skillTags.filter((_, i) => i !== index);
      this.removingIndex = -1;
      this.syncSkills();
    }, 180);
  }
  onInputBlur() {
    if (this.skillInputValue.trim())
      this.addTag(this.skillInputValue);
    setTimeout(() => {
      this.inputFocused = false;
      this.showDropdown = false;
    }, 160);
  }
  setCategory(label) {
    this.activeCategory = label;
  }
  getCat(skill) {
    return this.categories.find((c) => c.skills.some((s) => s.toLowerCase() === skill.toLowerCase()));
  }
  getTagColor(skill) {
    return this.getCat(skill)?.color ?? "#a855f7";
  }
  getTagBg(skill) {
    return this.getCat(skill)?.bg ?? "rgba(168,85,247,0.13)";
  }
  getTagBorder(skill) {
    return this.getCat(skill)?.border ?? "rgba(168,85,247,0.3)";
  }
  syncSkills() {
    if (this.user)
      this.user.skills = this.skillTags.join(", ");
  }
  save() {
    if (!this.user?.id)
      return;
    this.syncSkills();
    this.isSaving = true;
    this.user.name = `${this.user.firstName} ${this.user.lastName}`;
    if (this.selectedPhotoFile) {
      const formData = new FormData();
      formData.append("photo", this.selectedPhotoFile);
      const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken()}` });
      this.http.post(`${environment.apiUrl}/users/${this.user.id}/photo`, formData, { headers }).subscribe({
        next: (res) => {
          if (this.user)
            this.user.avatar = res.photoUrl;
          this.selectedPhotoFile = null;
          this.saveProfile();
        },
        error: () => this.saveProfile()
      });
    } else {
      this.saveProfile();
    }
  }
  saveProfile() {
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
    return name?.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "??";
  }
  static {
    this.\u0275fac = function FlProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlProfileComponent, selectors: [["app-fl-profile"]], viewQuery: function FlProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.skillInputRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInputRef = _t.first);
      }
    }, decls: 116, vars: 39, consts: [["fileInput", ""], ["skillInput", ""], [1, "fp-page"], [1, "fp-header"], ["title", "Change profile photo", 1, "fp-avatar-wrap", 3, "click"], [1, "fp-avatar"], ["class", "fp-avatar-img", "alt", "Profile photo", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "fp-avatar-ring"], [1, "fp-avatar-overlay"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"], ["cx", "12", "cy", "13", "r", "4"], ["class", "fp-avatar-delete", "title", "Supprimer", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "fp-header-info"], [1, "fp-name"], [1, "fp-email"], ["class", "fp-badges-count", 4, "ngIf"], [1, "fp-progress-wrap"], [1, "fp-progress-header"], [1, "fp-progress-label"], [1, "fp-progress-pct"], [1, "fp-progress-bar"], [1, "fp-progress-fill"], [1, "fp-save-btn", 3, "click", "disabled"], ["class", "fp-spinner", 4, "ngIf"], ["class", "fp-saved-ok", 4, "ngIf"], [1, "fp-body"], [1, "fp-col", "fp-col--left"], [1, "fp-card"], [1, "fp-card-title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "fp-grid2"], [1, "fp-field"], [1, "fp-label"], ["placeholder", "First name", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Last name", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Email address", "type", "email", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "+216 XX XXX XXX", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Tell clients about yourself?", "rows", "4", 1, "fp-input", "fp-textarea", 3, "ngModelChange", "ngModel"], ["placeholder", "0", "type", "number", "min", "0", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], [1, "fp-skill-count"], [1, "fp-skill-box", 3, "click"], [1, "fp-tag-list"], ["class", "fp-tag", 3, "fp-tag--removing", "color", "background", "border-color", 4, "ngFor", "ngForOf"], [1, "fp-skill-input", 3, "ngModelChange", "focus", "blur", "input", "keydown", "ngModel", "placeholder"], ["class", "fp-dropdown", 4, "ngIf"], [1, "fp-cat-tabs"], ["class", "fp-cat-tab", 3, "fp-cat-tab--active", "--cat-color", "click", 4, "ngFor", "ngForOf"], [1, "fp-cat-skills"], ["class", "fp-cat-skill", 3, "fp-cat-skill--added", "color", "background", "border-color", "click", 4, "ngFor", "ngForOf"], [1, "fp-col", "fp-col--right"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["class", "fp-badge-count-pill", 4, "ngIf"], ["class", "fp-badge-loading", 4, "ngIf"], ["class", "fp-badge-empty", 4, "ngIf"], ["class", "fp-badge-grid", 4, "ngIf"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["placeholder", "https://yourportfolio.com", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "https://linkedin.com/in/...", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "https://github.com/...", 1, "fp-input", 3, "ngModelChange", "ngModel"], ["alt", "Profile photo", 1, "fp-avatar-img", 3, "src"], ["title", "Supprimer", 1, "fp-avatar-delete", 3, "click"], [1, "fp-badges-count"], [1, "fp-badges-count-dot"], [1, "fp-spinner"], [1, "fp-saved-ok"], [1, "fp-tag"], [1, "fp-tag-x", 3, "click"], [1, "fp-dropdown"], ["class", "fp-dropdown-item", 3, "mousedown", 4, "ngFor", "ngForOf"], ["class", "fp-dropdown-item fp-dropdown-item--custom", 3, "mousedown", 4, "ngIf"], [1, "fp-dropdown-item", 3, "mousedown"], [1, "fp-dropdown-dot"], [1, "fp-dropdown-skill"], [1, "fp-dropdown-cat"], [1, "fp-dropdown-item", "fp-dropdown-item--custom", 3, "mousedown"], [1, "fp-dropdown-plus"], [1, "fp-cat-tab", 3, "click"], [1, "fp-cat-skill", 3, "click"], [1, "fp-badge-count-pill"], [1, "fp-badge-loading"], ["class", "fp-badge-skeleton", 4, "ngFor", "ngForOf"], [1, "fp-badge-skeleton"], [1, "fp-badge-empty"], [1, "fp-badge-empty-icon"], [1, "fp-badge-empty-title"], [1, "fp-badge-empty-sub"], [1, "fp-badge-grid"], ["class", "fp-badge-card", 3, "--bc", "--bb", "--bbd", "--bg", 4, "ngFor", "ngForOf"], [1, "fp-badge-card"], [1, "fp-badge-icon-wrap"], [1, "fp-badge-icon"], [1, "fp-badge-icon-ring"], [1, "fp-badge-info"], [1, "fp-badge-title"], [1, "fp-badge-desc"], [1, "fp-badge-date"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"]], template: function FlProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
        \u0275\u0275listener("click", function FlProfileComponent_Template_div_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.triggerFileInput());
        });
        \u0275\u0275elementStart(3, "div", 5);
        \u0275\u0275template(4, FlProfileComponent_img_4_Template, 1, 1, "img", 6)(5, FlProfileComponent_span_5_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 8);
        \u0275\u0275elementStart(7, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 10);
        \u0275\u0275element(9, "path", 11)(10, "circle", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, FlProfileComponent_button_11_Template, 2, 0, "button", 13);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "input", 14, 0);
        \u0275\u0275listener("change", function FlProfileComponent_Template_input_change_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 15)(15, "h1", 16);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 17);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, FlProfileComponent_div_19_Template, 3, 2, "div", 18);
        \u0275\u0275elementStart(20, "div", 19)(21, "div", 20)(22, "span", 21);
        \u0275\u0275text(23, "Profile completion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 22);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 23);
        \u0275\u0275element(27, "div", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 25);
        \u0275\u0275listener("click", function FlProfileComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275template(29, FlProfileComponent_span_29_Template, 2, 0, "span", 7)(30, FlProfileComponent_span_30_Template, 1, 0, "span", 26)(31, FlProfileComponent_span_31_Template, 2, 0, "span", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 28)(33, "div", 29)(34, "div", 30)(35, "div", 31);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 32);
        \u0275\u0275element(37, "path", 33)(38, "circle", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " Personal Information ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "div", 35)(41, "div", 36)(42, "label", 37);
        \u0275\u0275text(43, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 38);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.firstName, $event) || (ctx.user.firstName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 36)(46, "label", 37);
        \u0275\u0275text(47, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 39);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.lastName, $event) || (ctx.user.lastName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 36)(50, "label", 37);
        \u0275\u0275text(51, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "input", 40);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.email, $event) || (ctx.user.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 36)(54, "label", 37);
        \u0275\u0275text(55, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.phone, $event) || (ctx.user.phone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 36)(58, "label", 37);
        \u0275\u0275text(59, "Bio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "textarea", 42);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_textarea_ngModelChange_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.bio, $event) || (ctx.user.bio = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 35)(62, "div", 36)(63, "label", 37);
        \u0275\u0275text(64, "Hourly Rate (TND)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.hourlyRate, $event) || (ctx.user.hourlyRate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 36)(67, "label", 37);
        \u0275\u0275text(68, "Experience (years)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_69_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.experienceYears, $event) || (ctx.user.experienceYears = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "div", 30)(71, "div", 31);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(72, "svg", 32);
        \u0275\u0275element(73, "polyline", 44)(74, "polyline", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " Skills ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(76, "span", 46);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 47);
        \u0275\u0275listener("click", function FlProfileComponent_Template_div_click_78_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.focusInput());
        });
        \u0275\u0275elementStart(79, "div", 48);
        \u0275\u0275template(80, FlProfileComponent_span_80_Template, 4, 9, "span", 49);
        \u0275\u0275elementStart(81, "input", 50, 1);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_81_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.skillInputValue, $event) || (ctx.skillInputValue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("focus", function FlProfileComponent_Template_input_focus_81_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus());
        })("blur", function FlProfileComponent_Template_input_blur_81_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur());
        })("input", function FlProfileComponent_Template_input_input_81_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSkillInput());
        })("keydown", function FlProfileComponent_Template_input_keydown_81_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSkillKeydown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(83, FlProfileComponent_div_83_Template, 3, 2, "div", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 52);
        \u0275\u0275template(85, FlProfileComponent_button_85_Template, 2, 5, "button", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 54);
        \u0275\u0275template(87, FlProfileComponent_span_87_Template, 3, 10, "span", 55);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 56)(89, "div", 30)(90, "div", 31);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(91, "svg", 32);
        \u0275\u0275element(92, "path", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " Badges & Achievements ");
        \u0275\u0275template(94, FlProfileComponent_span_94_Template, 2, 1, "span", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275template(95, FlProfileComponent_div_95_Template, 2, 2, "div", 59)(96, FlProfileComponent_div_96_Template, 7, 0, "div", 60)(97, FlProfileComponent_div_97_Template, 2, 1, "div", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(98, "div", 30)(99, "div", 31);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(100, "svg", 32);
        \u0275\u0275element(101, "path", 62)(102, "path", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, " Links & Portfolio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(104, "div", 36)(105, "label", 37);
        \u0275\u0275text(106, "Portfolio URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "input", 64);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_107_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.portfolioUrl, $event) || (ctx.user.portfolioUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 36)(109, "label", 37);
        \u0275\u0275text(110, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "input", 65);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_111_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.linkedinUrl, $event) || (ctx.user.linkedinUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 36)(113, "label", 37);
        \u0275\u0275text(114, "GitHub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "input", 66);
        \u0275\u0275twoWayListener("ngModelChange", function FlProfileComponent_Template_input_ngModelChange_115_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user.githubUrl, $event) || (ctx.user.githubUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.avatarPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.avatarPreview);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.avatarPreview);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.email);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.badges.length > 0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.profileCompletion, "%");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.profileCompletion + "%");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSaving && !ctx.saved);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saved);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.firstName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.lastName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.phone);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.bio);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.hourlyRate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.experienceYears);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.skillTags.length, "/20");
        \u0275\u0275advance();
        \u0275\u0275classProp("fp-skill-box--focused", ctx.inputFocused);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.skillTags);
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.skillInputValue.length * 9 + 90 + "px");
        \u0275\u0275propertyInterpolate("placeholder", ctx.skillTags.length === 0 ? "Type a skill and press Enter?" : "");
        \u0275\u0275twoWayProperty("ngModel", ctx.skillInputValue);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showDropdown && (ctx.filteredSuggestions.length > 0 || ctx.canAddCustom));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.activeCategorySkills);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.badges.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.badgesLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.badgesLoading && ctx.badges.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.badgesLoading && ctx.badges.length > 0);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.portfolioUrl);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.linkedinUrl);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.user.githubUrl);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  --p: #3D8EFF;\n  --pl: #6AACFF;\n  --bg: #07091C;\n  --bg2: #0B0E22;\n  --card: rgba(13,17,38,0.85);\n  --bdr: rgba(255,255,255,0.07);\n  --txt: #EEF0FF;\n  --muted:rgba(160,180,255,0.45);\n  --soft: rgba(160,180,255,0.65);\n  --r: 14px;\n  --rs: 10px;\n  --font:\n    "Plus Jakarta Sans","Outfit",sans-serif;\n}\n.fp-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg);\n  padding: 32px;\n  font-family: var(--font);\n  color: var(--txt);\n}\n.fp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 32px;\n  padding: 24px 28px;\n  background: var(--card);\n  border: 1px solid var(--bdr);\n  border-radius: 20px;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.06) inset;\n}\n.fp-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fp-avatar[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--p),\n      #8B5CF6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 8px 24px rgba(61, 142, 255, 0.4);\n  overflow: hidden;\n}\n.fp-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.fp-avatar-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.fp-avatar-wrap[_ngcontent-%COMP%]:hover   .fp-avatar-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.fp-avatar-delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ef4444;\n  border: 2px solid #07091C;\n  color: white;\n  font-size: 13px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 3;\n  padding: 0;\n  transition: background 0.2s;\n}\n.fp-avatar-delete[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.fp-avatar-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      from 0deg,\n      var(--p),\n      #8B5CF6,\n      #00E5FF,\n      var(--p));\n  z-index: 0;\n  animation: _ngcontent-%COMP%_ringRotate 4s linear infinite;\n  mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 3px),\n      black calc(100% - 3px));\n  -webkit-mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 3px),\n      black calc(100% - 3px));\n}\n.fp-header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.fp-progress-wrap[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.fp-progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.fp-progress-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.fp-progress-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--pl);\n}\n.fp-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 100px;\n  overflow: hidden;\n  width: 220px;\n}\n.fp-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 100px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--p),\n      #8B5CF6);\n  transition: width 0.5s ease;\n}\n.fp-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.5px;\n  margin: 0 0 3px;\n}\n.fp-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin: 0 0 8px;\n}\n.fp-badges-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6AACFF;\n  background: rgba(61, 142, 255, 0.1);\n  border: 1px solid rgba(61, 142, 255, 0.22);\n  border-radius: 100px;\n  padding: 3px 10px;\n}\n.fp-badges-count-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #00E5FF;\n  box-shadow: 0 0 8px #00E5FF;\n  animation: _ngcontent-%COMP%_dotPulse 2.5s ease-in-out infinite;\n}\n.fp-save-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--p),\n      #1A5FEE);\n  border: none;\n  border-radius: var(--rs);\n  color: white;\n  font-family: var(--font);\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.28s;\n  position: relative;\n  overflow: hidden;\n  min-width: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 24px rgba(61, 142, 255, 0.38), 0 1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.fp-save-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      100deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.2) 50%,\n      transparent 70%);\n  transform: translateX(-120%);\n  transition: transform 0.55s;\n}\n.fp-save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 36px rgba(61, 142, 255, 0.52);\n}\n.fp-save-btn[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(120%);\n}\n.fp-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.fp-saved-ok[_ngcontent-%COMP%] {\n  color: #34D399;\n}\n.fp-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.fp-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 24px;\n  align-items: start;\n}\n.fp-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fp-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--bdr);\n  border-radius: 18px;\n  padding: 24px;\n  backdrop-filter: blur(20px);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.05) inset;\n}\n.fp-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--txt);\n  letter-spacing: -0.1px;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--bdr);\n}\n.fp-card-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--pl);\n}\n.fp-grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.fp-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.fp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--muted);\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n}\n.fp-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--bdr);\n  border-radius: var(--rs);\n  color: var(--txt);\n  font-size: 14px;\n  font-weight: 400;\n  font-family: var(--font);\n  outline: none;\n  transition: all 0.24s;\n  caret-color: var(--p);\n}\n.fp-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.2);\n}\n.fp-input[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.13);\n}\n.fp-input[_ngcontent-%COMP%]:focus {\n  background: rgba(61, 142, 255, 0.07);\n  border-color: var(--p);\n  box-shadow: 0 0 0 4px rgba(61, 142, 255, 0.12);\n}\n.fp-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 90px;\n}\n.fp-skill-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--muted);\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--bdr);\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n.fp-skill-box[_ngcontent-%COMP%] {\n  min-height: 52px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--bdr);\n  border-radius: var(--rs);\n  padding: 8px 12px;\n  cursor: text;\n  position: relative;\n  transition: all 0.24s;\n  margin-bottom: 16px;\n}\n.fp-skill-box--focused[_ngcontent-%COMP%] {\n  border-color: var(--p);\n  box-shadow: 0 0 0 4px rgba(61, 142, 255, 0.12);\n  background: rgba(61, 142, 255, 0.04);\n}\n.fp-tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: center;\n}\n.fp-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 100px;\n  border: 1px solid;\n  font-size: 12.5px;\n  font-weight: 600;\n  transition: all 0.18s;\n}\n.fp-tag--removing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.8);\n}\n.fp-tag-x[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: inherit;\n  opacity: 0.55;\n  cursor: pointer;\n  font-size: 15px;\n  line-height: 1;\n  padding: 0;\n  transition: opacity 0.15s;\n}\n.fp-tag-x[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.fp-skill-input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--txt);\n  font-size: 13.5px;\n  font-family: var(--font);\n  min-width: 80px;\n  max-width: 100%;\n  caret-color: var(--p);\n}\n.fp-skill-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.22);\n}\n.fp-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: #0E1228;\n  border: 1px solid rgba(61, 142, 255, 0.22);\n  border-radius: 12px;\n  z-index: 100;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_dropIn 0.18s ease;\n}\n.fp-dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  font-size: 13.5px;\n}\n.fp-dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(61, 142, 255, 0.08);\n}\n.fp-dropdown-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.fp-dropdown-skill[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: var(--txt);\n}\n.fp-dropdown-cat[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 100px;\n  letter-spacing: 0.3px;\n}\n.fp-dropdown-item--custom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--bdr);\n  color: var(--pl);\n  font-weight: 600;\n}\n.fp-dropdown-plus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--pl);\n  width: 20px;\n  text-align: center;\n}\n.fp-cat-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.fp-cat-tab[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--bdr);\n  border-radius: 100px;\n  color: var(--muted);\n  font-family: var(--font);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fp-cat-tab--active[_ngcontent-%COMP%] {\n  background: rgba(var(--cat-color, 168,85,247), 0.12);\n  border-color: var(--cat-color, #a855f7);\n  color: var(--cat-color, #a855f7);\n}\n.fp-cat-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.fp-cat-skill[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 100px;\n  border: 1px solid;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  opacity: 0.75;\n}\n.fp-cat-skill[_ngcontent-%COMP%]:hover:not(.fp-cat-skill--added) {\n  opacity: 1;\n  transform: translateY(-1px);\n}\n.fp-cat-skill--added[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n.fp-badge-count-pill[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--p),\n      #8B5CF6);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 100px;\n  min-width: 22px;\n  text-align: center;\n}\n.fp-badge-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.fp-badge-skeleton[_ngcontent-%COMP%] {\n  height: 72px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      rgba(255, 255, 255, 0.08) 50%,\n      rgba(255, 255, 255, 0.04) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.fp-badge-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 16px;\n}\n.fp-badge-empty-icon[_ngcontent-%COMP%] {\n  font-size: 44px;\n  margin-bottom: 12px;\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.fp-badge-empty-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--txt);\n  margin-bottom: 6px;\n}\n.fp-badge-empty-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  line-height: 1.6;\n  max-width: 260px;\n  margin: 0 auto;\n}\n.fp-badge-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.fp-badge-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 16px;\n  background: var(--bb);\n  border: 1px solid var(--bbd);\n  border-radius: 13px;\n  transition: all 0.25s;\n  animation: _ngcontent-%COMP%_badgeIn 0.4s both;\n}\n.fp-badge-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  box-shadow: 0 4px 20px var(--bg);\n  border-color: var(--bc);\n}\n.fp-badge-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fp-badge-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 2px 8px var(--bg));\n}\n.fp-badge-icon-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: var(--bb);\n  border: 1.5px solid var(--bbd);\n  box-shadow: 0 0 12px var(--bg);\n}\n.fp-badge-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.fp-badge-title[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--bc);\n  margin-bottom: 3px;\n}\n.fp-badge-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--soft);\n  line-height: 1.5;\n  margin-bottom: 6px;\n}\n.fp-badge-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_ringRotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_dotPulse {\n  0%, 100% {\n    box-shadow: 0 0 6px #00E5FF;\n  }\n  50% {\n    box-shadow: 0 0 14px #00E5FF, 0 0 28px rgba(0, 229, 255, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_badgeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@media (max-width: 1024px) {\n  .fp-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fp-page[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.fp-page.fp-light[_ngcontent-%COMP%] {\n  --bg: #f0f2fa;\n  --bg2: #ffffff;\n  --card: rgba(255,255,255,0.95);\n  --bdr: rgba(0,0,0,0.08);\n  --txt: #111827;\n  --muted:rgba(0,0,0,0.45);\n  --soft: rgba(0,0,0,0.65);\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.03);\n  color: #111827;\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-skill-input[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-skill-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-dropdown[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.fp-page.fp-light[_ngcontent-%COMP%]   .fp-dropdown-skill[_ngcontent-%COMP%] {\n  color: #111827;\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlProfileComponent, { className: "FlProfileComponent", filePath: "app\\freelancer\\profile\\profile.component.ts", lineNumber: 712 });
})();

// src/app/freelancer/gamification/gamification.component.ts
function GamificationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading badges...");
    \u0275\u0275elementEnd()();
  }
}
function GamificationComponent_div_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u2705 Earned Badges");
    \u0275\u0275elementEnd();
  }
}
function GamificationComponent_div_8_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badge_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, badge_r1.earnedAt, "dd/MM/yyyy"));
  }
}
function GamificationComponent_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, GamificationComponent_div_8_div_22_div_1_Template, 10, 7, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.badges);
  }
}
function GamificationComponent_div_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8, "Not yet earned");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badge_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r3.description);
  }
}
function GamificationComponent_div_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2, "\u{1F331}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4, "No badges yet - start submitting proposals!");
    \u0275\u0275elementEnd()();
  }
}
function GamificationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8, "Badges Earned");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275text(13, "Badges Remaining");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "div", 14);
    \u0275\u0275text(16, "Overall Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275element(18, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, GamificationComponent_div_8_div_21_Template, 2, 0, "div", 18)(22, GamificationComponent_div_8_div_22_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(23, "div", 20);
    \u0275\u0275text(24, "\u{1F512} Badges to Unlock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275template(26, GamificationComponent_div_8_div_26_Template, 9, 3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, GamificationComponent_div_8_div_27_Template, 5, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.badges.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.allBadges.length - ctx_r1.badges.length);
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r1.getProgress() + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getProgress(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.badges.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.badges.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getLockedBadges());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.badges.length === 0);
  }
}
var GamificationComponent = class _GamificationComponent {
  constructor(authService, http) {
    this.authService = authService;
    this.http = http;
    this.badges = [];
    this.isLoading = true;
    this.allBadges = [
      { type: "FAST_STARTER", title: "First Step", description: "Submit your first proposal", icon: "\u{1F331}" },
      { type: "RISING_TALENT", title: "Rising Talent", description: "Get your first proposal accepted", icon: "\u{1F949}" },
      { type: "EXPERIENCED", title: "Experienced", description: "5 proposals accepted", icon: "\u{1F948}" },
      { type: "EXPERT", title: "Expert", description: "10 proposals accepted", icon: "\u{1F947}" },
      { type: "ELITE", title: "Elite", description: "20 proposals accepted", icon: "\u{1F48E}" },
      { type: "PROLIFIC", title: "Prolific", description: "Submit 20+ proposals", icon: "\u{1F4DD}" },
      { type: "HIGH_ACCEPTANCE", title: "High Acceptance", description: "Acceptance rate >= 50%", icon: "\u{1F3AF}" },
      { type: "VERIFIED_PRO", title: "Verified Pro", description: "Account verified by Matchy", icon: "\u2705" }
    ];
  }
  ngOnInit() {
    const id = this.authService.currentUser?.id;
    if (id)
      this.loadBadges(id);
  }
  loadBadges(userId) {
    this.isLoading = true;
    this.http.get(`http://localhost:8081/api/badges/user/${userId}`).subscribe({
      next: (data) => {
        this.badges = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  getLockedBadges() {
    const earnedTypes = this.badges.map((b) => b.type);
    return this.allBadges.filter((b) => !earnedTypes.includes(b.type));
  }
  getProgress() {
    return Math.round(this.badges.length / this.allBadges.length * 100);
  }
  static {
    this.\u0275fac = function GamificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GamificationComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamificationComponent, selectors: [["app-gamification"]], decls: 9, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "summary-card"], [1, "summary-icon"], [1, "summary-info"], [1, "summary-count"], [1, "summary-label"], [1, "progress-bar-wrapper"], [1, "progress-label"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-pct"], ["class", "section-title", 4, "ngIf"], ["class", "badges-grid", 4, "ngIf"], [1, "section-title"], [1, "badges-grid"], ["class", "badge-card locked", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], ["class", "badge-card earned", 4, "ngFor", "ngForOf"], [1, "badge-card", "earned"], [1, "badge-icon"], [1, "badge-title"], [1, "badge-desc"], [1, "badge-date"], [1, "badge-card", "locked"], [1, "badge-icon", "locked-icon"], [1, "empty"], [1, "empty-icon"], [1, "empty-text"]], template: function GamificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Badges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your achievements on Matchy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, GamificationComponent_div_7_Template, 4, 0, "div", 4)(8, GamificationComponent_div_8_Template, 28, 9, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, DatePipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 14px;\n  margin-top: 4px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 40px;\n  justify-content: center;\n  color: #888;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.summary-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-radius: 16px;\n  padding: 28px 32px;\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  margin-bottom: 32px;\n  color: white;\n  flex-wrap: wrap;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.summary-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.summary-count[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n  margin-top: 2px;\n}\n.progress-bar-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n  margin-bottom: 8px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  height: 10px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: white;\n  border-radius: 20px;\n  transition: width 0.6s ease;\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n  margin-top: 6px;\n  text-align: right;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 24px 0 16px;\n}\n.badges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.badge-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px 16px;\n  text-align: center;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  border: 2px solid transparent;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.badge-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.badge-card.earned[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff,\n      #fff);\n}\n.badge-card.locked[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.badge-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n.locked-icon[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n}\n.badge-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n}\n.badge-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  line-height: 1.4;\n  margin-bottom: 10px;\n}\n.badge-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.badge-card.earned[_ngcontent-%COMP%]   .badge-date[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-text[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 16px;\n}\n/*# sourceMappingURL=gamification.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamificationComponent, { className: "GamificationComponent", filePath: "app\\freelancer\\gamification\\gamification.component.ts", lineNumber: 115 });
})();

// src/app/freelancer/freelancer-routing.module.ts
var routes = [
  {
    path: "",
    component: FlLayoutComponent,
    canActivate: [FreelancerGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: FlDashboardComponent },
      { path: "projects", component: FlProjectsComponent },
      { path: "proposals", component: FlProposalsComponent },
      { path: "notifications", component: FlNotificationsComponent },
      { path: "profile", component: FlProfileComponent },
      { path: "badges", component: GamificationComponent }
    ]
  }
];
var FreelancerRoutingModule = class _FreelancerRoutingModule {
  static {
    this.\u0275fac = function FreelancerRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FreelancerRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FreelancerRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/freelancer/layout/fl-header/fl-header.component.ts
function FlHeaderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.firstName) || (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name) || "U")[0].toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.firstName) || (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name), " ");
  }
}
var FlHeaderComponent = class _FlHeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.isDark = false;
    this.authService.checkAuth();
    this.isDark = localStorage.getItem("theme") === "dark" || document.body.classList.contains("dark");
    this.applyTheme();
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem("theme", this.isDark ? "dark" : "light");
    this.applyTheme();
  }
  applyTheme() {
    document.body.classList.toggle("dark", this.isDark);
    const html = document.documentElement;
    if (this.isDark) {
      html.classList.add("bo-dark");
      html.classList.remove("bo-light");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.add("bo-light");
      html.classList.remove("bo-dark");
      html.setAttribute("data-theme", "light");
    }
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function FlHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlHeaderComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlHeaderComponent, selectors: [["app-fl-header"]], decls: 22, vars: 4, consts: [[1, "fl-header"], [1, "header-brand"], [1, "brand-logo"], [1, "brand-name"], [1, "brand-divider"], [1, "brand-badge"], [1, "header-right"], [1, "btn-theme", 3, "click", "title"], [1, "theme-lbl"], [1, "btn-home", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M10 12L6 8l4-4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "header-sep"], ["class", "user-pill", 4, "ngIf"], [1, "user-pill"], [1, "user-avatar"], [1, "user-name"]], template: function FlHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Matchy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Freelancer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function FlHeaderComponent_Template_button_click_11_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function FlHeaderComponent_Template_button_click_16_listener() {
          return ctx.goHome();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 10);
        \u0275\u0275element(18, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Home ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(20, "div", 12);
        \u0275\u0275template(21, FlHeaderComponent_div_21_Template, 5, 2, "div", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("title", ctx.isDark ? "Switch to Light" : "Switch to Dark");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDark ? "\u2600\uFE0F" : "\u{1F319}");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isDark ? "Light" : "Dark");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.authService.currentUser);
      }
    }, dependencies: [NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  --accent: #6366f1;\n  --purple: #a855f7;\n  --a-light: rgba(99,102,241,0.1);\n}\n.fl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  height: 60px;\n  background: var(--bo-bg-secondary);\n  border-bottom: 1.5px solid var(--bo-border);\n  box-shadow: 0 1px 12px rgba(99, 102, 241, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  gap: 16px;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 900;\n  color: #fff;\n  flex-shrink: 0;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--bo-text-primary);\n  letter-spacing: -0.3px;\n}\n.brand-divider[_ngcontent-%COMP%] {\n  color: var(--bo-text-secondary);\n  font-size: 16px;\n  opacity: 0.4;\n}\n.brand-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--accent);\n  background: var(--a-light);\n  padding: 3px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.03em;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.btn-theme[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(124, 106, 247, 0.3);\n  background: rgba(124, 106, 247, 0.08);\n  color: #9d8ff9;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.btn-theme[_ngcontent-%COMP%]   .theme-lbl[_ngcontent-%COMP%] {\n  letter-spacing: 0.02em;\n}\n.btn-theme[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 106, 247, 0.16);\n  border-color: rgba(124, 106, 247, 0.5);\n}\n.btn-home[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--bo-text-secondary);\n  background: transparent;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.btn-home[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.btn-home[_ngcontent-%COMP%]:hover {\n  background: var(--a-light);\n  color: var(--accent);\n}\n.btn-home[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n.header-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 22px;\n  background: var(--bo-border);\n  flex-shrink: 0;\n}\n.user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 12px 4px 4px;\n  border: 1.5px solid var(--bo-border);\n  border-radius: 50px;\n  cursor: default;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.user-pill[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px var(--a-light);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      var(--purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--bo-text-primary);\n  max-width: 140px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=fl-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlHeaderComponent, { className: "FlHeaderComponent", filePath: "app\\freelancer\\layout\\fl-header\\fl-header.component.ts", lineNumber: 209 });
})();

// src/app/freelancer/freelancer.module.ts
var FreelancerModule = class _FreelancerModule {
  static {
    this.\u0275fac = function FreelancerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FreelancerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FreelancerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
      FreelancerRoutingModule
    ] });
  }
};
export {
  FreelancerModule
};
//# sourceMappingURL=chunk-6UT7BSPY.js.map
