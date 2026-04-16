import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-VGSYTNW5.js";
import {
  AssessmentService,
  CertificationService,
  CompanyProjectsService,
  ContentService,
  CurrencySelectorComponent,
  CurrencyService,
  EvenementService,
  JobSelectorComponent,
  MilestonesService,
  NotificationsService,
  RegistrationService,
  SharedModule,
  SubscriptionPaymentComponent,
  SubscriptionService,
  WorkspaceService,
  jspdf_es_min_default
} from "./chunk-WS5RSQHP.js";
import {
  ActivatedRoute,
  AuthService,
  BehaviorSubject,
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
  MinValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  Subject,
  TitleCasePipe,
  Validators,
  environment,
  of,
  takeUntil,
  ɵNgNoValidate,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/frontoffice/layout/fo-navbar/fo-navbar.component.ts
function FoNavbarComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hello, ", ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name, "");
  }
}
function FoNavbarComponent_div_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function FoNavbarComponent_div_36_div_4_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function FoNavbarComponent_div_36_div_4_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_div_36_div_4_div_5_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F389}");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_div_36_div_4_div_5_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4CB}");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_div_36_div_4_div_5_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4C5}");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_div_36_div_4_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function FoNavbarComponent_div_36_div_4_div_5_div_1_Template_div_click_0_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleNotificationClick(notification_r5));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275template(2, FoNavbarComponent_div_36_div_4_div_5_div_1_span_2_Template, 2, 0, "span", 42)(3, FoNavbarComponent_div_36_div_4_div_5_div_1_span_3_Template, 2, 0, "span", 42)(4, FoNavbarComponent_div_36_div_4_div_5_div_1_span_4_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 45);
    \u0275\u0275listener("click", function FoNavbarComponent_div_36_div_4_div_5_div_1_Template_button_click_12_listener($event) {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteNotification($event, notification_r5.id));
    });
    \u0275\u0275text(13, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("unread", !notification_r5.is_read);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", notification_r5.type === "application_accepted");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r5.type === "application_rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r5.type === "interview_scheduled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTimeAgo(notification_r5.created_at));
  }
}
function FoNavbarComponent_div_36_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, FoNavbarComponent_div_36_div_4_div_5_div_1_Template, 14, 8, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function FoNavbarComponent_div_36_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2, "No notifications yet");
    \u0275\u0275elementEnd()();
  }
}
function FoNavbarComponent_div_36_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FoNavbarComponent_div_36_div_4_button_4_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FoNavbarComponent_div_36_div_4_div_5_Template, 2, 1, "div", 35)(6, FoNavbarComponent_div_36_div_4_div_6_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
  }
}
function FoNavbarComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function FoNavbarComponent_div_36_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleNotifications());
    });
    \u0275\u0275text(2, " \u{1F514} ");
    \u0275\u0275template(3, FoNavbarComponent_div_36_span_3_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FoNavbarComponent_div_36_div_4_Template, 7, 3, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showNotifications);
  }
}
function FoNavbarComponent_a_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1, " \u2699\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FoNavbarComponent_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(1, " My Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function FoNavbarComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(1, " Logout ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_a_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
function FoNavbarComponent_a_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1, " Get Started ");
    \u0275\u0275elementEnd();
  }
}
var FoNavbarComponent = class _FoNavbarComponent {
  constructor(authService, router, notificationsService) {
    this.authService = authService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.isScrolled = false;
    this.isMenuOpen = false;
    this.showNotifications = false;
    this.notifications = [];
    this.unreadCount = 0;
    this.subscriptions = [];
  }
  ngOnInit() {
    if (this.authService.isAuthenticated && this.authService.currentUser?.id) {
      this.loadNotifications();
      this.notificationsService.startPolling(Number(this.authService.currentUser.id), "freelancer");
      const sub = this.notificationsService.unreadCount$.subscribe((count) => {
        this.unreadCount = count;
      });
      this.subscriptions.push(sub);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  onScroll() {
    this.isScrolled = window.scrollY > 30;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".notification-wrapper")) {
      this.showNotifications = false;
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.loadNotifications();
    }
  }
  loadNotifications() {
    if (this.authService.currentUser?.id) {
      this.notificationsService.getNotifications(Number(this.authService.currentUser.id), "freelancer").subscribe((notifications) => {
        this.notifications = notifications;
      });
    }
  }
  handleNotificationClick(notification) {
    if (!notification.is_read) {
      this.notificationsService.markAsRead(notification.id).subscribe(() => {
        notification.is_read = true;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
      });
    }
    if (notification.link) {
      this.router.navigate([notification.link]);
      this.showNotifications = false;
    }
  }
  markAllAsRead() {
    if (this.authService.currentUser?.id) {
      this.notificationsService.markAllAsRead(Number(this.authService.currentUser.id), "freelancer").subscribe(() => {
        this.notifications.forEach((n) => n.is_read = true);
        this.unreadCount = 0;
      });
    }
  }
  deleteNotification(event, notificationId) {
    event.stopPropagation();
    this.notificationsService.deleteNotification(notificationId).subscribe(() => {
      this.notifications = this.notifications.filter((n) => n.id !== notificationId);
      this.loadNotifications();
    });
  }
  getTimeAgo(date) {
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / 6e4);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0)
      return `${days}d ago`;
    if (hours > 0)
      return `${hours}h ago`;
    if (minutes > 0)
      return `${minutes}m ago`;
    return "Just now";
  }
  goToDashboard() {
    if (this.authService.isAdmin()) {
      this.router.navigate(["/backoffice/dashboard"]);
    } else if (this.authService.isClient()) {
      this.router.navigate(["/client/dashboard"]);
    } else if (this.authService.isFreelancer()) {
      this.router.navigate(["/freelancer/dashboard"]);
    } else {
      this.router.navigate(["/projects"]);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function FoNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FoNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoNavbarComponent, selectors: [["app-fo-navbar"]], hostBindings: function FoNavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function FoNavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow)("click", function FoNavbarComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 46, vars: 13, consts: [[1, "fo-navbar"], [1, "nav-container"], ["routerLink", "/", 1, "nav-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "logo-accent"], [1, "nav-links"], ["routerLink", "/projects", 1, "nav-link"], ["routerLink", "/events", 1, "nav-link"], ["routerLink", "/courses-resources", 1, "nav-link"], ["routerLink", "/content-list", 1, "nav-link"], ["routerLink", "/my-applications", 1, "nav-link"], ["routerLink", "/projects-milestones", 1, "nav-link"], ["routerLink", "/subscription-management", 1, "nav-link"], ["routerLink", "/my-subscription", 1, "nav-link"], ["class", "nav-user", 4, "ngIf"], [1, "nav-actions"], ["class", "notification-wrapper", 4, "ngIf"], ["routerLink", "/profile-settings", "class", "btn-profile", "title", "Profile Settings", 4, "ngIf"], ["class", "btn-dashboard", 3, "click", 4, "ngIf"], ["class", "btn-logout", 3, "click", 4, "ngIf"], ["routerLink", "/backoffice/login", "class", "btn-login", 4, "ngIf"], ["routerLink", "/register", "class", "btn-dashboard", 4, "ngIf"], [1, "hamburger", 3, "click"], [1, "nav-user"], [1, "user-greeting"], [1, "user-dot"], [1, "notification-wrapper"], ["title", "Notifications", 1, "btn-notification", 3, "click"], ["class", "notification-badge", 4, "ngIf"], ["class", "notifications-dropdown", 4, "ngIf"], [1, "notification-badge"], [1, "notifications-dropdown"], [1, "notifications-header"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], ["class", "notifications-list", 4, "ngIf"], ["class", "notifications-empty", 4, "ngIf"], [1, "btn-mark-all", 3, "click"], [1, "notifications-list"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notification-item", 3, "click"], [1, "notification-icon"], [4, "ngIf"], [1, "notification-content"], [1, "notification-time"], [1, "btn-delete-notification", 3, "click"], [1, "notifications-empty"], ["routerLink", "/profile-settings", "title", "Profile Settings", 1, "btn-profile"], [1, "btn-dashboard", 3, "click"], [1, "btn-logout", 3, "click"], ["routerLink", "/backoffice/login", 1, "btn-login"], ["routerLink", "/register", 1, "btn-dashboard"]], template: function FoNavbarComponent_Template(rf, ctx) {
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
        \u0275\u0275text(12, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li")(14, "a", 8);
        \u0275\u0275text(15, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li")(17, "a", 9);
        \u0275\u0275text(18, "Courses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li")(20, "a", 10);
        \u0275\u0275text(21, "\u{1F4DA} Contents");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li")(23, "a", 11);
        \u0275\u0275text(24, "My Applications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li")(26, "a", 12);
        \u0275\u0275text(27, "My Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li")(29, "a", 13);
        \u0275\u0275text(30, "Plans");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li")(32, "a", 14);
        \u0275\u0275text(33, "My Subscription");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, FoNavbarComponent_li_34_Template, 4, 1, "li", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 16);
        \u0275\u0275template(36, FoNavbarComponent_div_36_Template, 5, 2, "div", 17)(37, FoNavbarComponent_a_37_Template, 2, 0, "a", 18)(38, FoNavbarComponent_button_38_Template, 2, 0, "button", 19)(39, FoNavbarComponent_button_39_Template, 2, 0, "button", 20)(40, FoNavbarComponent_a_40_Template, 2, 0, "a", 21)(41, FoNavbarComponent_a_41_Template, 2, 0, "a", 22);
        \u0275\u0275elementStart(42, "button", 23);
        \u0275\u0275listener("click", function FoNavbarComponent_Template_button_click_42_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(43, "span")(44, "span")(45, "span");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("open", ctx.isMenuOpen);
        \u0275\u0275advance(25);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
        \u0275\u0275advance();
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
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ["\n\n.fo-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 16px 0;\n  transition: all 0.3s ease;\n}\n.fo-navbar.scrolled[_ngcontent-%COMP%] {\n  background: rgba(10, 14, 39, 0.95);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--fo-border);\n  padding: 12px 0;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);\n}\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: var(--font-display);\n  font-weight: 800;\n  font-size: 18px;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  letter-spacing: -0.5px;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  gap: 32px;\n  flex: 1;\n  justify-content: center;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--fo-text-primary);\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-greeting[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--success);\n  border-radius: 50%;\n  box-shadow: 0 0 6px var(--success);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--fo-border);\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.15);\n  border-color: var(--primary);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.4);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: 1px solid var(--fo-border);\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover {\n  color: var(--fo-text-primary);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 18px;\n  background: transparent;\n  color: #ef4444;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  transition: all 0.2s;\n}\n.nav-actions[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #ef4444;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--fo-text-primary);\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-links.open[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: var(--fo-bg-secondary);\n    padding: 20px;\n    border-bottom: 1px solid var(--fo-border);\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.notification-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-notification[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.btn-notification[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: var(--primary);\n}\n.btn-notification[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: var(--accent);\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.notifications-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 380px;\n  max-height: 500px;\n  background: var(--card-bg);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  z-index: 1001;\n}\n.notifications-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--fo-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notifications-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-mark-all[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.1);\n}\n.notifications-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--fo-border);\n  display: flex;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.05);\n  border-left: 3px solid var(--primary);\n}\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.4;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.notification-item[_ngcontent-%COMP%]   .btn-delete-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.notification-item[_ngcontent-%COMP%]   .btn-delete-notification[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.notification-item[_ngcontent-%COMP%]:hover   .btn-delete-notification[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.notifications-empty[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.notifications-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=fo-navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoNavbarComponent, { className: "FoNavbarComponent", filePath: "app\\frontoffice\\layout\\fo-navbar\\fo-navbar.component.ts", lineNumber: 13 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoFooterComponent, { className: "FoFooterComponent", filePath: "app\\frontoffice\\layout\\fo-footer\\fo-footer.component.ts", lineNumber: 43 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoLayoutComponent, { className: "FoLayoutComponent", filePath: "app\\frontoffice\\layout\\fo-layout.component.ts", lineNumber: 26 });
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
      this.router.navigate(["/register"]);
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
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  display: flex;\n  align-items: center;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--primary);\n  top: -100px;\n  right: -100px;\n  animation: _ngcontent-%COMP%_pulse 6s ease-in-out infinite;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: var(--accent-secondary);\n  bottom: -50px;\n  left: -50px;\n  animation: _ngcontent-%COMP%_pulse 8s ease-in-out infinite reverse;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image:\n    linear-gradient(rgba(79, 110, 247, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(79, 110, 247, 0.05) 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.15;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.22;\n  }\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 80px 32px;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 80px;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  position: relative;\n  z-index: 2;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  width: fit-content;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--accent);\n  border-radius: 50%;\n  box-shadow: 0 0 8px var(--accent);\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 68px);\n  font-weight: 800;\n  line-height: 1.05;\n  color: var(--fo-text-primary);\n  letter-spacing: -2px;\n}\n.hero-title[_ngcontent-%COMP%]   .title-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #00e5ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-description[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 420px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.4);\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 500;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  padding-top: 8px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n  margin-top: 2px;\n}\n.hero-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_slideInRight 0.5s ease both;\n  transition: all 0.25s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateX(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.project-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-stars[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.features[_ngcontent-%COMP%] {\n  background: var(--fo-bg-secondary);\n  padding: 100px 32px;\n  border-top: 1px solid var(--fo-border);\n}\n.features-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  text-align: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 48px);\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  margin-bottom: 12px;\n  letter-spacing: -1px;\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #00e5ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  margin-bottom: 60px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  padding: 36px 28px;\n  text-align: left;\n  transition: all 0.3s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 20px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin-bottom: 10px;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n  line-height: 1.6;\n}\n@media (max-width: 900px) {\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n    padding: 60px 20px;\n  }\n  .hero-cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app\\frontoffice\\home\\home.component.ts", lineNumber: 25 });
})();

// src/app/frontoffice/register/register.component.ts
var _c0 = ["canvasEl"];
var _c1 = () => [1, 2, 3, 4, 5];
function RegisterComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "circle", 14)(2, "line", 15)(3, "line", 16)(4, "line", 17)(5, "line", 18)(6, "line", 19)(7, "line", 20)(8, "line", 21)(9, "line", 22);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5, "Match");
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7, "y");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275element(9, "div", 30)(10, "div", 31)(11, "div", 31);
    \u0275\u0275elementStart(12, "span", 32);
    \u0275\u0275text(13, "Choose your role");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h1", 33);
    \u0275\u0275text(15, "Join ");
    \u0275\u0275elementStart(16, "span", 34);
    \u0275\u0275text(17, "Matchy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 35);
    \u0275\u0275text(19, "How do you want to use Matchy?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 36)(21, "div", 37);
    \u0275\u0275listener("click", function RegisterComponent_div_13_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRole("CLIENT"));
    });
    \u0275\u0275element(22, "div", 38);
    \u0275\u0275elementStart(23, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 40);
    \u0275\u0275element(25, "rect", 41)(26, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "I'm a Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Post projects and hire talented freelancers for your business needs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 43)(32, "li");
    \u0275\u0275element(33, "span", 44);
    \u0275\u0275text(34, "Post unlimited projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275element(36, "span", 44);
    \u0275\u0275text(37, "Review proposals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275element(39, "span", 44);
    \u0275\u0275text(40, "Hire top freelancers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275element(42, "span", 44);
    \u0275\u0275text(43, "Track milestones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 45);
    \u0275\u0275text(45, " Get started as Client ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 46);
    \u0275\u0275element(47, "path", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 48);
    \u0275\u0275listener("click", function RegisterComponent_div_13_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRole("FREELANCER"));
    });
    \u0275\u0275element(49, "div", 38);
    \u0275\u0275elementStart(50, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 40);
    \u0275\u0275element(52, "path", 50)(53, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "h3");
    \u0275\u0275text(55, "I'm a Freelancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, "Find exciting projects and work with clients across Tunisia.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ul", 43)(59, "li");
    \u0275\u0275element(60, "span", 52);
    \u0275\u0275text(61, "Browse open projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "li");
    \u0275\u0275element(63, "span", 52);
    \u0275\u0275text(64, "Submit proposals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275element(66, "span", 52);
    \u0275\u0275text(67, "Build your portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275element(69, "span", 52);
    \u0275\u0275text(70, "Get paid securely");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "button", 53);
    \u0275\u0275text(72, " Get started as Freelancer ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 46);
    \u0275\u0275element(74, "path", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "p", 54);
    \u0275\u0275text(76, " Already have an account? ");
    \u0275\u0275elementStart(77, "a", 55);
    \u0275\u0275text(78, "Sign in");
    \u0275\u0275elementEnd()()();
  }
}
function RegisterComponent_div_14__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 58);
    \u0275\u0275element(1, "rect", 41)(2, "path", 42);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 58);
    \u0275\u0275element(1, "path", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 85);
    \u0275\u0275element(2, "circle", 86)(3, "line", 87)(4, "line", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function RegisterComponent_div_14_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Required (min 2 chars)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Required (min 2 chars)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Valid email required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14__svg_svg_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "path", 91)(2, "circle", 92);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14__svg_svg_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 90);
    \u0275\u0275element(1, "path", 93)(2, "path", 94)(3, "line", 95);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Min 6 characters required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 100);
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", i_r5 <= ctx_r2.passwordStrength.score ? ctx_r2.passwordStrength.color : "rgba(255,255,255,0.08)");
  }
}
function RegisterComponent_div_14_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275template(2, RegisterComponent_div_14_div_54_div_2_Template, 1, 2, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.passwordStrength.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.passwordStrength.label, " ");
  }
}
function RegisterComponent_div_14_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "label");
    \u0275\u0275text(2, "Your Skills ");
    \u0275\u0275elementStart(3, "span", 77);
    \u0275\u0275text(4, "(comma separated)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 101);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1, " Create my account ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 103);
    \u0275\u0275element(3, "path", 47);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_14_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275element(1, "span", 105);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 57);
    \u0275\u0275listener("click", function RegisterComponent_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBackToRole());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Change role ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 26);
    \u0275\u0275text(7, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9, "Match");
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11, "y");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 29);
    \u0275\u0275element(13, "div", 30)(14, "div", 30)(15, "div", 31);
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17, "Create account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 59);
    \u0275\u0275template(19, RegisterComponent_div_14__svg_svg_19_Template, 3, 0, "svg", 60)(20, RegisterComponent_div_14__svg_svg_20_Template, 3, 0, "svg", 60);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h1", 33);
    \u0275\u0275text(23, "Create your ");
    \u0275\u0275elementStart(24, "span", 34);
    \u0275\u0275text(25, "account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 61);
    \u0275\u0275template(27, RegisterComponent_div_14_div_27_Template, 7, 1, "div", 62);
    \u0275\u0275elementStart(28, "form", 63);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_div_14_Template_form_ngSubmit_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(29, "div", 64)(30, "div", 65)(31, "label");
    \u0275\u0275text(32, "First Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 66);
    \u0275\u0275template(34, RegisterComponent_div_14_span_34_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 65)(36, "label");
    \u0275\u0275text(37, "Last Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 68);
    \u0275\u0275template(39, RegisterComponent_div_14_span_39_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 65)(41, "label");
    \u0275\u0275text(42, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 69);
    \u0275\u0275template(44, RegisterComponent_div_14_span_44_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 65)(46, "label");
    \u0275\u0275text(47, "Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 70);
    \u0275\u0275element(49, "input", 71);
    \u0275\u0275elementStart(50, "button", 72);
    \u0275\u0275listener("click", function RegisterComponent_div_14_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePassword());
    });
    \u0275\u0275template(51, RegisterComponent_div_14__svg_svg_51_Template, 3, 0, "svg", 73)(52, RegisterComponent_div_14__svg_svg_52_Template, 4, 0, "svg", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, RegisterComponent_div_14_span_53_Template, 2, 0, "span", 67)(54, RegisterComponent_div_14_div_54_Template, 5, 5, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 65)(56, "label");
    \u0275\u0275text(57, "City / Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, RegisterComponent_div_14_div_59_Template, 6, 0, "div", 76);
    \u0275\u0275elementStart(60, "div", 65)(61, "label");
    \u0275\u0275text(62, "Bio ");
    \u0275\u0275elementStart(63, "span", 77);
    \u0275\u0275text(64, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(65, "textarea", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 79);
    \u0275\u0275element(67, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 81);
    \u0275\u0275template(69, RegisterComponent_div_14_span_69_Template, 4, 0, "span", 82)(70, RegisterComponent_div_14_span_70_Template, 2, 0, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 54);
    \u0275\u0275text(72, " Already have an account? ");
    \u0275\u0275elementStart(73, "a", 55);
    \u0275\u0275text(74, "Sign in");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_20_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275classProp("client", ctx_r2.selectedRole === "CLIENT")("freelancer", ctx_r2.selectedRole === "FREELANCER");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRole === "CLIENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRole === "FREELANCER");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRole === "CLIENT" ? "Client Account" : "Freelancer Account", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r2.isInvalid("firstName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInvalid("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r2.isInvalid("lastName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInvalid("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r2.isInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInvalid("email"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r2.isInvalid("password"));
    \u0275\u0275property("type", ctx_r2.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInvalid("password"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_20_0 = ctx_r2.form.get("password")) == null ? null : tmp_20_0.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.selectedRole === "FREELANCER");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("client-btn", ctx_r2.selectedRole === "CLIENT")("freelancer-btn", ctx_r2.selectedRole === "FREELANCER");
    \u0275\u0275property("disabled", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, router, authService, http) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.step = "role";
    this.selectedRole = null;
    this.isLoading = false;
    this.isDark = true;
    this.error = "";
    this.showPassword = false;
    this.captchaToken = "";
    this.captchaWidgetId = null;
    this.W = 0;
    this.H = 0;
    this.dpr = 1;
    this.nodes = [];
    this.hexes = [];
    this.waves = [];
    this.tags = [];
    this.stars = [];
    this.frame = 0;
    this.MAX_DIST = 160;
    this.TAGS = ["UI Design", "React", "Branding", "Figma", "Node.js", "Motion", "Copy", "SEO", "3D", "Vue", "Strategy", "Spring", "Outfit"];
    this.loop = () => {
      this.animId = requestAnimationFrame(this.loop);
      const { ctx } = this;
      ctx.fillStyle = this.isDark ? "#06081A" : "#C8D0F0";
      ctx.fillRect(0, 0, this.W, this.H);
      this.drawAtmo();
      this.waves.forEach((w) => {
        w.phase += w.speed;
        this.drawWave(w);
      });
      this.hexes.forEach((h) => {
        h.phase += h.speed;
        this.drawHex(h);
      });
      this.tags.forEach((t) => {
        if (t.timer < t.delay) {
          t.timer++;
          return;
        }
        t.x += t.vx;
        t.y += t.vy;
        if (!t.fading)
          t.opacity = Math.min(t.opacity + 4e-3, t.targetOp);
        if (t.x > this.W * 0.9 || t.fading) {
          t.opacity -= 3e-3;
          if (t.opacity <= 0)
            Object.assign(t, this.makeTag(false));
        }
        this.drawTag(t);
      });
      this.drawConnections();
      this.nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += n.speed;
        if (n.x < -20 || n.x > this.W + 20 || n.y < -20 || n.y > this.H + 20) {
          Object.assign(n, this.makeNode(false));
        }
        this.drawNode(n);
      });
      if (this.frame % 220 === 0 && Math.random() < 0.7)
        this.stars.push(this.makeStar());
      this.stars = this.stars.filter((s) => s.life > 0);
      this.stars.forEach((s) => {
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= s.decay;
        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const gr = ctx.createLinearGradient(tx, ty, s.x, s.y);
        gr.addColorStop(0, this.col(200, 220, 255, 0));
        gr.addColorStop(1, this.col(200, 220, 255, s.life * 0.9));
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gr;
        ctx.lineWidth = s.w * s.life;
        ctx.stroke();
      });
      this.frame++;
    };
    this.authService.checkAuth();
    if (this.authService.isAuthenticated) {
      this.redirectByRole();
    }
    this.form = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      location: [""],
      skills: [""],
      bio: [""]
    });
  }
  ngAfterViewInit() {
    this.initCanvas();
    this.initRecaptcha();
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener("resize", this.resizeHandler);
  }
  // ── Original methods (100% preserved) ───────────────
  selectRole(role) {
    this.selectedRole = role;
    this.step = "form";
    setTimeout(() => this.renderRecaptcha(), 0);
  }
  goBackToRole() {
    this.step = "role";
    this.error = "";
    this.resetCaptcha();
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.captchaToken) {
      this.error = "Please complete captcha verification.";
      return;
    }
    this.isLoading = true;
    this.error = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), {
      role: this.selectedRole,
      status: "ACTIVE",
      captchaToken: this.captchaToken
    });
    this.http.post(`${environment.apiUrl}/auth/register`, payload).subscribe({
      next: () => {
        const { email, password } = this.form.value;
        this.authService.login(email, password).subscribe({
          next: (ok) => {
            if (ok)
              this.redirectByRole();
            else
              this.router.navigate(["/login"]);
          },
          error: () => this.router.navigate(["/login"])
        });
      },
      error: (err) => {
        this.error = err?.error?.error || "Registration failed. Email may already be in use.";
        this.resetCaptcha();
        this.isLoading = false;
      }
    });
  }
  initRecaptcha() {
    this.loadRecaptchaScript().then(() => this.renderRecaptcha());
  }
  loadRecaptchaScript() {
    return new Promise((resolve) => {
      const w = window;
      if (w.grecaptcha) {
        resolve();
        return;
      }
      const existing = document.querySelector('script[src*="google.com/recaptcha/api.js"]');
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  renderRecaptcha() {
    const w = window;
    const el = document.getElementById("register-recaptcha");
    if (!w.grecaptcha || !el || this.captchaWidgetId !== null)
      return;
    this.captchaWidgetId = w.grecaptcha.render("register-recaptcha", {
      sitekey: environment.recaptchaSiteKey,
      callback: (token) => {
        this.captchaToken = token;
        this.error = "";
      },
      "expired-callback": () => {
        this.captchaToken = "";
      },
      "error-callback": () => {
        this.captchaToken = "";
        this.error = "Captcha could not be loaded. Please retry.";
      }
    });
  }
  resetCaptcha() {
    const w = window;
    if (w.grecaptcha && this.captchaWidgetId !== null) {
      w.grecaptcha.reset(this.captchaWidgetId);
    }
    this.captchaToken = "";
  }
  redirectByRole() {
    const redirectUrl = this.authService.getRedirectUrl();
    if (redirectUrl) {
      this.authService.clearRedirectUrl();
      this.router.navigateByUrl(redirectUrl);
      return;
    }
    if (this.authService.currentUser) {
      const role = this.authService.currentUser.role;
      if (role === "ADMIN") {
        this.router.navigate(["/backoffice/dashboard"]);
      } else if (role === "CLIENT") {
        this.router.navigate(["/client/dashboard"]);
      } else if (role === "FREELANCER") {
        this.router.navigate(["/freelancer/dashboard"]);
      } else {
        this.router.navigate(["/"]);
      }
    } else {
      this.router.navigate(["/"]);
    }
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute("data-theme", this.isDark ? "dark" : "light");
  }
  get passwordStrength() {
    const pw = this.form.get("password")?.value || "";
    let score = 0;
    if (pw.length >= 6)
      score++;
    if (pw.length >= 10)
      score++;
    if (/[A-Z]/.test(pw))
      score++;
    if (/[0-9]/.test(pw))
      score++;
    if (/[^A-Za-z0-9]/.test(pw))
      score++;
    if (score <= 1)
      return { score, label: "Weak", color: "#EF4444" };
    if (score <= 2)
      return { score, label: "Fair", color: "#F97316" };
    if (score <= 3)
      return { score, label: "Good", color: "#EAB308" };
    if (score <= 4)
      return { score, label: "Strong", color: "#22C55E" };
    return { score, label: "Very strong", color: "#10B981" };
  }
  isInvalid(field) {
    const c = this.form.get(field);
    return !!(c && c.invalid && c.touched);
  }
  // ── Canvas setup ─────────────────────────────────────
  initCanvas() {
    const canvas = this.canvasEl.nativeElement;
    this.ctx = canvas.getContext("2d");
    this.resizeHandler = () => this.resize();
    window.addEventListener("resize", this.resizeHandler);
    this.resize();
    this.loop();
  }
  resize() {
    const canvas = this.canvasEl.nativeElement;
    this.dpr = window.devicePixelRatio || 1;
    this.W = canvas.offsetWidth;
    this.H = canvas.offsetHeight;
    canvas.width = this.W * this.dpr;
    canvas.height = this.H * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
    this.buildScene();
  }
  col(r, g, b, a) {
    return `rgba(${r},${g},${b},${a})`;
  }
  buildScene() {
    this.nodes = Array.from({ length: 55 }, () => this.makeNode(true));
    this.hexes = [];
    const S = 46, rows = 12, cols = 12;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        this.hexes.push({
          cx: c * S * Math.sqrt(3) + (r % 2 ? S * Math.sqrt(3) / 2 : 0) - 30,
          cy: r * S * 1.5 - 40,
          s: S,
          phase: Math.random() * Math.PI * 2,
          speed: 3e-3 + Math.random() * 6e-3,
          base: 0.03 + Math.random() * 0.1
        });
      }
    }
    this.waves = [0, 1, 2].map((i) => ({
      i,
      phase: i * 1.8,
      speed: 4e-3 + i * 2e-3,
      amp: 80 + i * 30,
      y: this.H * (0.3 + i * 0.18),
      opacity: 0.025 - i * 5e-3
    }));
    this.tags = Array.from({ length: 10 }, () => this.makeTag(true));
  }
  makeNode(init) {
    const kind = Math.random() < 0.12 ? "hi" : Math.random() < 0.25 ? "mid" : "lo";
    return {
      x: init ? Math.random() * this.W : Math.random() < 0.5 ? -5 : this.W + 5,
      y: Math.random() * this.H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.2 + 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: 8e-3 + Math.random() * 0.012,
      kind,
      pulseAmp: 0.4 + Math.random() * 0.6
    };
  }
  makeTag(init) {
    return {
      text: this.TAGS[Math.floor(Math.random() * this.TAGS.length)],
      x: init ? Math.random() * this.W : -200,
      y: 50 + Math.random() * (this.H - 200),
      vx: 0.15 + Math.random() * 0.25,
      vy: (Math.random() - 0.5) * 0.08,
      opacity: 0,
      targetOp: 0.12 + Math.random() * 0.12,
      fading: false,
      delay: init ? Math.random() * 300 : 0,
      timer: 0,
      fontSize: 11 + Math.floor(Math.random() * 4)
    };
  }
  makeStar() {
    return {
      x: Math.random() * this.W * 0.6 + this.W * 0.2,
      y: Math.random() * this.H * 0.4,
      len: 60 + Math.random() * 80,
      speed: 6 + Math.random() * 8,
      angle: Math.PI / 5 + Math.random() * 0.4,
      life: 1,
      decay: 0.025 + Math.random() * 0.02,
      w: 1.5 + Math.random()
    };
  }
  nodePulse(n) {
    return 0.5 + Math.sin(n.phase) * n.pulseAmp * 0.5;
  }
  drawNode(n) {
    const { ctx } = this;
    let r = 123, g = 159, b = 255;
    if (n.kind === "hi") {
      r = 196;
      g = 160;
      b = 255;
    } else if (n.kind === "mid") {
      r = 98;
      g = 216;
      b = 204;
    }
    if (!this.isDark) {
      r = Math.max(r - 80, 20);
      g = Math.max(g - 80, 20);
      b = Math.max(b - 40, 60);
    }
    const p = this.nodePulse(n);
    const alpha = this.isDark ? 0.18 : 0.55;
    const alphaCore = this.isDark ? 0.5 + p * 0.5 : 0.85 + p * 0.15;
    const rad = n.r * (0.8 + p * 0.2);
    const gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad * 4);
    gr.addColorStop(0, this.col(r, g, b, alpha));
    gr.addColorStop(1, this.col(r, g, b, 0));
    ctx.beginPath();
    ctx.arc(n.x, n.y, rad * 4, 0, Math.PI * 2);
    ctx.fillStyle = gr;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
    ctx.fillStyle = this.col(r, g, b, alphaCore);
    ctx.fill();
  }
  drawHex(h) {
    const { ctx } = this;
    const a = h.base * (0.5 + Math.sin(h.phase) * 0.5);
    ctx.beginPath();
    for (let k = 0; k < 6; k++) {
      const ang = Math.PI / 3 * k - Math.PI / 6;
      k === 0 ? ctx.moveTo(h.cx + h.s * Math.cos(ang), h.cy + h.s * Math.sin(ang)) : ctx.lineTo(h.cx + h.s * Math.cos(ang), h.cy + h.s * Math.sin(ang));
    }
    ctx.closePath();
    const hexA = this.isDark ? a : a * 7;
    ctx.strokeStyle = this.isDark ? this.col(160, 188, 255, hexA) : this.col(40, 70, 190, hexA);
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
  drawWave(w) {
    const { ctx } = this;
    const colors = [[123, 159, 255], [196, 160, 255], [98, 216, 204]];
    const [r, g, b] = colors[w.i % 3];
    ctx.beginPath();
    ctx.moveTo(0, w.y);
    for (let x = 0; x <= this.W; x += 8) {
      const yOff = Math.sin(x * 8e-3 + w.phase) * w.amp + Math.sin(x * 0.015 + w.phase * 1.3) * (w.amp * 0.4);
      ctx.lineTo(x, w.y + yOff);
    }
    ctx.lineTo(this.W, this.H);
    ctx.lineTo(0, this.H);
    ctx.closePath();
    const gr = ctx.createLinearGradient(0, w.y - w.amp, 0, w.y + w.amp * 2);
    const wOp = this.isDark ? 1 : 7;
    gr.addColorStop(0, this.col(r, g, b, w.opacity * 1.5 * wOp));
    gr.addColorStop(0.5, this.col(r, g, b, w.opacity * wOp));
    gr.addColorStop(1, this.col(r, g, b, 0));
    ctx.fillStyle = gr;
    ctx.fill();
  }
  drawTag(t) {
    const { ctx } = this;
    if (t.opacity <= 0 || t.timer < t.delay)
      return;
    const padding = 8, h = t.fontSize + 12;
    ctx.font = `500 ${t.fontSize}px 'Outfit',sans-serif`;
    const bw = ctx.measureText(t.text).width + padding * 2;
    ctx.beginPath();
    this.roundRect(t.x, t.y - h / 2, bw, h, h / 2);
    const tr = this.isDark ? 160 : 50;
    const tg2 = this.isDark ? 188 : 80;
    const tb = this.isDark ? 255 : 200;
    ctx.fillStyle = this.col(tr, tg2, tb, t.opacity * (this.isDark ? 0.35 : 0.6));
    ctx.fill();
    ctx.strokeStyle = this.col(tr, tg2, tb, t.opacity * (this.isDark ? 0.7 : 1.2));
    ctx.lineWidth = 0.6;
    ctx.stroke();
    ctx.fillStyle = this.col(tr, tg2, tb, t.opacity * (this.isDark ? 2.2 : 4));
    ctx.textBaseline = "middle";
    ctx.fillText(t.text, t.x + padding, t.y);
  }
  roundRect(x, y, w, h, r) {
    const ctx = this.ctx;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
  drawConnections() {
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i], b = this.nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < this.MAX_DIST) {
          const op = (1 - d / this.MAX_DIST) * 0.22;
          const mid = (this.nodePulse(a) + this.nodePulse(b)) / 2;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = this.isDark ? this.col(123, 159, 255, op * mid) : this.col(40, 60, 180, op * mid * 5);
          this.ctx.lineWidth = 0.7;
          this.ctx.stroke();
        }
      }
    }
  }
  drawAtmo() {
    const blobs = [
      { x: this.W * 0.15, y: this.H * 0.25, r: this.W * 0.4, c: [123, 159, 255], op: 0.09 },
      { x: this.W * 0.9, y: this.H * 0.8, r: this.W * 0.35, c: [98, 216, 204], op: 0.07 },
      { x: this.W * 0.65, y: this.H * 0.1, r: this.W * 0.3, c: [196, 160, 255], op: 0.08 }
    ];
    blobs.forEach((b) => {
      const gr = this.ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      const blobOp = this.isDark ? b.op : b.op * 4;
      gr.addColorStop(0, this.col(b.c[0], b.c[1], b.c[2], blobOp));
      gr.addColorStop(1, this.col(b.c[0], b.c[1], b.c[2], 0));
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      this.ctx.fillStyle = gr;
      this.ctx.fill();
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasEl = _t.first);
      }
    }, decls: 15, vars: 5, consts: [["canvasEl", ""], [1, "theme-toggle", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "register-page"], [1, "register-canvas"], [1, "bg-glow", "g1"], [1, "bg-glow", "g2"], [1, "bg-glow", "g3"], ["routerLink", "/", 1, "back-link"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19 12H5M12 19l-7-7 7-7"], ["class", "register-container", 4, "ngIf"], ["class", "register-container form-step", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "register-container"], [1, "brand"], [1, "logo-icon"], [1, "logo-text"], [1, "accent"], [1, "steps"], [1, "step", "on"], [1, "step"], [1, "step-label"], [1, "title"], [1, "title-gradient"], [1, "subtitle"], [1, "role-cards"], [1, "role-card", "client-card", 3, "click"], [1, "role-card-shine"], [1, "role-icon", "client-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"], [1, "role-perks"], [1, "perk-dot", "client-dot"], [1, "btn-role", "btn-client"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "role-card", "freelancer-card", 3, "click"], [1, "role-icon", "freelancer-icon"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], [1, "perk-dot", "freelancer-dot"], [1, "btn-role", "btn-freelancer"], [1, "login-hint"], ["routerLink", "/backoffice/login", 1, "login-link"], [1, "register-container", "form-step"], [1, "back-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "role-badge"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "form-card"], ["class", "login-error", 4, "ngIf"], ["novalidate", "", 1, "reg-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["formControlName", "firstName", "placeholder", "Sara", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["formControlName", "lastName", "placeholder", "Ben Ali", 1, "form-input"], ["formControlName", "email", "type", "email", "placeholder", "sara@example.com", 1, "form-input"], [1, "password-wrapper"], ["formControlName", "password", "placeholder", "Min. 6 characters", 1, "form-input", 2, "padding-right", "48px", 3, "type"], ["type", "button", "tabindex", "-1", 1, "eye-btn", 3, "click"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["class", "pw-strength", 4, "ngIf"], ["formControlName", "location", "placeholder", "Tunis, Sfax, Sousse...", 1, "form-input"], ["class", "form-group", 4, "ngIf"], [1, "hint"], ["formControlName", "bio", "placeholder", "Tell us a bit about yourself...", 1, "form-input", "form-textarea"], [1, "captcha-box"], ["id", "register-recaptcha"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-inner", 4, "ngIf"], ["class", "btn-spinner", 4, "ngIf"], [1, "login-error"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "field-error"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"], ["d", "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "pw-strength"], [1, "pw-bars"], ["class", "pw-bar", 3, "background", 4, "ngFor", "ngForOf"], [1, "pw-label"], [1, "pw-bar"], ["formControlName", "skills", "placeholder", "React, Node.js, Figma, Spring Boot...", 1, "form-input"], [1, "btn-inner"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "btn-spinner"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleTheme());
        });
        \u0275\u0275template(1, RegisterComponent__svg_svg_1_Template, 10, 0, "svg", 2)(2, RegisterComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "canvas", 4, 0)(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementStart(9, "a", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 9);
        \u0275\u0275element(11, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Back to home ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, RegisterComponent_div_13_Template, 79, 0, "div", 11)(14, RegisterComponent_div_14_Template, 75, 33, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.isDark ? "Switch to light mode" : "Switch to dark mode");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDark);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.step === "role");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.step === "form");
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --p: #7B9FFF;\n  --pl: #A0BCFF;\n  --v: #C4A0FF;\n  --teal: #62D8CC;\n  --client: #62D8CC;\n  --free: #C4A0FF;\n  --bg: #06081A;\n  --bg-card: rgba(9, 11, 28, 0.84);\n  --bdr: rgba(255, 255, 255, 0.08);\n  --bdr-h: rgba(255, 255, 255, 0.20);\n  --sfc: rgba(255, 255, 255, 0.04);\n  --inp-focus: rgba(123, 159, 255, 0.07);\n  --txt: #ffffff;\n  --muted: rgba(255, 255, 255, 0.32);\n  --soft: rgba(255, 255, 255, 0.60);\n  --danger: #EF4444;\n  --font-d: "Outfit", sans-serif;\n  --font-s: "Outfit", sans-serif;\n  --r: 14px;\n  --rs: 10px;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 100;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--sfc);\n  border: 1px solid var(--bdr);\n  color: var(--soft);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  backdrop-filter: blur(16px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  border-color: var(--p);\n  color: var(--p);\n  transform: scale(1.1) rotate(20deg);\n  box-shadow: 0 0 16px rgba(123, 159, 255, 0.25);\n}\n.theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: opacity 0.25s, transform 0.25s;\n}\n[data-theme=light][_nghost-%COMP%], [data-theme=light]   [_nghost-%COMP%] {\n  --bg: #C8D0F0;\n  --bg-card: rgba(200, 210, 245, 0.88);\n  --bdr: rgba(0, 0, 0, 0.10);\n  --bdr-h: rgba(80, 120, 255, 0.4);\n  --sfc: rgba(0, 0, 0, 0.04);\n  --inp-focus: rgba(80, 120, 255, 0.06);\n  --txt: #0D0F24;\n  --muted: rgba(0, 0, 0, 0.38);\n  --soft: rgba(0, 0, 0, 0.58);\n  --client: #0E9E95;\n  --free: #9360D8;\n}\n.register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  position: relative;\n  overflow: hidden;\n  font-family: var(--font-s);\n}\n.register-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.bg-glow.g1[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(123, 159, 255, 0.18),\n      transparent 70%);\n  top: -200px;\n  right: -200px;\n  filter: blur(110px);\n  animation: _ngcontent-%COMP%_glowFloat1 14s ease-in-out infinite;\n}\n.bg-glow.g2[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 440px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(196, 160, 255, 0.14),\n      transparent 70%);\n  bottom: -120px;\n  left: -120px;\n  filter: blur(90px);\n  animation: _ngcontent-%COMP%_glowFloat2 18s ease-in-out infinite;\n}\n.bg-glow.g3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(98, 216, 204, 0.1),\n      transparent 70%);\n  top: 40%;\n  left: 40%;\n  filter: blur(80px);\n  animation: _ngcontent-%COMP%_glowFloat2 22s ease-in-out infinite reverse;\n}\n.back-link[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  left: 24px;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--muted);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.22s;\n  padding: 8px 14px;\n  background: var(--sfc);\n  border: 1px solid var(--bdr);\n  border-radius: 100px;\n  backdrop-filter: blur(12px);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--pl);\n  border-color: var(--bdr-h);\n}\n.register-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 860px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.register-container.form-step[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.brand[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--p),\n      var(--v));\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-d);\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  box-shadow: 0 6px 20px rgba(123, 159, 255, 0.45), 0 1px 0 rgba(255, 255, 255, 0.2) inset;\n  position: relative;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 62%;\n  height: 52%;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 0 0 70% 0;\n}\n.brand[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-s);\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--txt);\n  letter-spacing: -0.4px;\n}\n.brand[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--p);\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 3px;\n  background: var(--bdr);\n  transition: all 0.3s;\n}\n.steps[_ngcontent-%COMP%]   .step.on[_ngcontent-%COMP%] {\n  width: 28px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--p),\n      var(--v));\n  box-shadow: 0 0 8px rgba(123, 159, 255, 0.5);\n}\n.steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:not(.on) {\n  width: 5px;\n}\n.steps[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 10.5px;\n  font-weight: 600;\n  color: var(--muted);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: clamp(36px, 5vw, 56px);\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -2px;\n  line-height: 1;\n  text-align: center;\n  animation: _ngcontent-%COMP%_slideUp 0.65s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.title-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--p),\n      #00CFFF);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-s);\n  font-size: 15px;\n  font-weight: 300;\n  color: var(--muted);\n  line-height: 1.65;\n  text-align: center;\n  margin-top: -8px;\n  animation: _ngcontent-%COMP%_slideUp 0.65s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 16px;\n  border-radius: 100px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  animation: _ngcontent-%COMP%_slideUp 0.65s 0.18s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.role-badge.client[_ngcontent-%COMP%] {\n  background: rgba(98, 216, 204, 0.1);\n  border: 1px solid rgba(98, 216, 204, 0.3);\n  color: var(--client);\n}\n.role-badge.freelancer[_ngcontent-%COMP%] {\n  background: rgba(196, 160, 255, 0.1);\n  border: 1px solid rgba(196, 160, 255, 0.3);\n  color: var(--free);\n}\n.role-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  width: 100%;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_slideUp 0.65s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--bdr);\n  border-radius: 20px;\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  backdrop-filter: blur(20px);\n}\n.role-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 20px;\n  padding: 1px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(123, 159, 255, 0.3) 0%,\n      transparent 50%,\n      rgba(196, 160, 255, 0.2) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n}\n.role-card.client-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(98, 216, 204, 0.35);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(98, 216, 204, 0.08);\n}\n.role-card.freelancer-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(196, 160, 255, 0.35);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(196, 160, 255, 0.08);\n}\n.role-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.8px;\n}\n.role-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: var(--soft);\n  line-height: 1.7;\n}\n.role-card-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  right: -60px;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.04;\n}\n.client-card[_ngcontent-%COMP%]   .role-card-shine[_ngcontent-%COMP%] {\n  background: var(--client);\n}\n.freelancer-card[_ngcontent-%COMP%]   .role-card-shine[_ngcontent-%COMP%] {\n  background: var(--free);\n}\n.role-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n}\n.role-icon.client-icon[_ngcontent-%COMP%] {\n  background: rgba(98, 216, 204, 0.12);\n  border: 1px solid rgba(98, 216, 204, 0.2);\n  color: var(--client);\n}\n.role-icon.freelancer-icon[_ngcontent-%COMP%] {\n  background: rgba(196, 160, 255, 0.12);\n  border: 1px solid rgba(196, 160, 255, 0.2);\n  color: var(--free);\n}\n.role-perks[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-perks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--soft);\n}\n.perk-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.perk-dot.client-dot[_ngcontent-%COMP%] {\n  background: var(--client);\n  box-shadow: 0 0 6px var(--client);\n}\n.perk-dot.freelancer-dot[_ngcontent-%COMP%] {\n  background: var(--free);\n  box-shadow: 0 0 6px var(--free);\n}\n.btn-role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: var(--rs);\n  font-family: var(--font-s);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: auto;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.btn-role[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      105deg,\n      transparent 35%,\n      rgba(255, 255, 255, 0.15) 50%,\n      transparent 65%);\n  transform: translateX(-110%);\n  transition: transform 0.5s;\n}\n.btn-role[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(110%);\n}\n.btn-role.btn-client[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--client),\n      #4ABDB5);\n  color: #06081A;\n  box-shadow: 0 6px 20px rgba(98, 216, 204, 0.3);\n}\n.btn-role.btn-client[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 28px rgba(98, 216, 204, 0.4);\n}\n.btn-role.btn-freelancer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--free),\n      #A879E0);\n  color: white;\n  box-shadow: 0 6px 20px rgba(196, 160, 255, 0.3);\n}\n.btn-role.btn-freelancer[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 28px rgba(196, 160, 255, 0.4);\n}\n.back-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--sfc);\n  border: 1px solid var(--bdr);\n  color: var(--muted);\n  font-family: var(--font-s);\n  font-size: 13px;\n  font-weight: 500;\n  padding: 7px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--bdr-h);\n  color: var(--txt);\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--bg-card);\n  border: 1px solid var(--bdr);\n  border-radius: 24px;\n  padding: 36px 36px;\n  backdrop-filter: blur(28px) saturate(1.6);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.055) inset,\n    0 1px 0 rgba(255, 255, 255, 0.08) inset,\n    0 32px 80px rgba(0, 0, 0, 0.5),\n    0 0 60px rgba(123, 159, 255, 0.07);\n  position: relative;\n  animation: _ngcontent-%COMP%_cardEnter 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 24px;\n  padding: 1px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(123, 159, 255, 0.4) 0%,\n      transparent 45%,\n      rgba(196, 160, 255, 0.25) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n}\n.login-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  border-left: 3px solid var(--danger);\n  border-radius: 0 var(--rs) var(--rs) 0;\n  padding: 11px 14px;\n  color: #fca5a5;\n  font-size: 13.5px;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.login-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--danger);\n}\n.reg-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--soft);\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n}\n.hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  opacity: 0.7;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  background: var(--sfc);\n  border: 1px solid var(--bdr);\n  border-radius: var(--rs);\n  color: var(--txt);\n  font-size: 14px;\n  font-weight: 400;\n  font-family: var(--font-s);\n  outline: none;\n  width: 100%;\n  transition: all 0.26s cubic-bezier(0.4, 0, 0.2, 1);\n  caret-color: var(--p);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--muted);\n}\n.form-input[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--bdr-h);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  background: var(--inp-focus);\n  border-color: var(--p);\n  box-shadow: 0 0 0 4px rgba(123, 159, 255, 0.14);\n}\n.form-input.invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 80px;\n  resize: vertical;\n  padding: 13px 16px;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  transition: color 0.2s;\n}\n.eye-btn[_ngcontent-%COMP%]:hover {\n  color: var(--soft);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ef4444;\n  margin-top: -2px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 15px 24px;\n  border: none;\n  border-radius: var(--r);\n  font-family: var(--font-s);\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 52px;\n  letter-spacing: 0.1px;\n}\n.btn-submit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      105deg,\n      transparent 35%,\n      rgba(255, 255, 255, 0.18) 50%,\n      transparent 65%);\n  transform: translateX(-110%);\n  transition: transform 0.55s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  transform: translateX(110%);\n}\n.btn-submit.client-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--client),\n      #4ABDB5);\n  color: #06081A;\n  box-shadow: 0 6px 28px rgba(98, 216, 204, 0.35);\n}\n.btn-submit.client-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 40px rgba(98, 216, 204, 0.5);\n}\n.btn-submit.freelancer-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--free),\n      #A879E0);\n  color: white;\n  box-shadow: 0 6px 28px rgba(196, 160, 255, 0.35);\n}\n.btn-submit.freelancer-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 40px rgba(196, 160, 255, 0.5);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: none;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  transition: gap 0.25s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover   .btn-inner[_ngcontent-%COMP%] {\n  gap: 14px;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.login-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: var(--muted);\n  margin-top: 8px;\n}\n.login-link[_ngcontent-%COMP%] {\n  color: var(--pl);\n  font-weight: 600;\n  margin-left: 4px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  color: var(--txt);\n  text-decoration: underline;\n}\n.pw-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n.pw-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pw-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  flex: 1;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.08);\n  transition: background 0.3s ease;\n}\n.pw-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  transition: color 0.3s;\n  min-width: 68px;\n  text-align: right;\n}\n@keyframes _ngcontent-%COMP%_cardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(28px) scale(0.97);\n    filter: blur(4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n    filter: blur(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glowFloat1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  35% {\n    transform: translate(-28px, 18px) scale(1.07);\n  }\n  70% {\n    transform: translate(16px, -12px) scale(0.96);\n  }\n}\n@keyframes _ngcontent-%COMP%_glowFloat2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  40% {\n    transform: translate(22px, -20px) scale(1.06);\n  }\n  75% {\n    transform: translate(-10px, 14px) scale(0.97);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  18% {\n    transform: translateX(-7px);\n  }\n  36% {\n    transform: translateX(7px);\n  }\n  54% {\n    transform: translateX(-4px);\n  }\n  72% {\n    transform: translateX(4px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .role-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .register-page[_ngcontent-%COMP%] {\n    padding: 80px 16px 40px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.1ms !important;\n  }\n}\n.captcha-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 4px;\n  margin-bottom: 4px;\n}\n.captcha-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.captcha-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.captcha-label[_ngcontent-%COMP%]   .captcha-check[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s;\n  position: relative;\n}\n.captcha-label[_ngcontent-%COMP%]   .captcha-check[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  color: #22c55e;\n  font-size: 16px;\n  font-weight: 700;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.captcha-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .captcha-check[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: rgba(34, 197, 94, 0.1);\n}\n.captcha-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .captcha-check[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.captcha-label[_ngcontent-%COMP%]   .captcha-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.captcha-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.captcha-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.captcha-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 0.05em;\n}\n.captcha-brand[_ngcontent-%COMP%]   .captcha-sub[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.35);\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app\\frontoffice\\register\\register.component.ts", lineNumber: 13 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesResourcesComponent, { className: "CoursesResourcesComponent", filePath: "app\\frontoffice\\courses-resources\\courses-resources.component.ts", lineNumber: 22 });
})();

// src/app/frontoffice/services/auth.service.ts
var AuthService2 = class _AuthService {
  constructor() {
    this._isAuthenticated = false;
    this.currentUser = null;
  }
  checkAuth() {
    this._isAuthenticated = !!localStorage.getItem("token");
  }
  /**
   * Call with either login(email,password) or login({username,password})
   */
  login(emailOrCredentials, password) {
    let email;
    let pwd;
    if (typeof emailOrCredentials === "string") {
      email = emailOrCredentials;
      pwd = password || "";
    } else {
      email = emailOrCredentials.username;
      pwd = emailOrCredentials.password;
    }
    this._isAuthenticated = true;
    this.currentUser = { id: "1", name: email.split("@")[0], role: "admin" };
    localStorage.setItem("token", "dummy");
    return of(true);
  }
  logout() {
    this._isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem("token");
  }
  isAuthenticated() {
    return this._isAuthenticated;
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/events/registration-modal/registration-modal.component.ts
function RegistrationModalComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "First name is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "First name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, RegistrationModalComponent_div_18_span_1_Template, 2, 0, "span", 21)(2, RegistrationModalComponent_div_18_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["firstName"].errors == null ? null : ctx_r0.f["firstName"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["firstName"].errors == null ? null : ctx_r0.f["firstName"].errors["minlength"]);
  }
}
function RegistrationModalComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Last name is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Last name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, RegistrationModalComponent_div_23_span_1_Template, 2, 0, "span", 21)(2, RegistrationModalComponent_div_23_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["lastName"].errors == null ? null : ctx_r0.f["lastName"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["lastName"].errors == null ? null : ctx_r0.f["lastName"].errors["minlength"]);
  }
}
function RegistrationModalComponent_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegistrationModalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, RegistrationModalComponent_div_28_span_1_Template, 2, 0, "span", 21)(2, RegistrationModalComponent_div_28_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["email"]);
  }
}
function RegistrationModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegistrationModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
var RegistrationModalComponent = class _RegistrationModalComponent {
  constructor(fb, registrationService) {
    this.fb = fb;
    this.registrationService = registrationService;
    this.userId = 1;
    this.close = new EventEmitter();
    this.registered = new EventEmitter();
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.registrationForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const registrationData = __spreadProps(__spreadValues({}, this.registrationForm.value), {
      userId: this.userId,
      evenementId: this.evenementId
    });
    this.registrationService.createRegistration(registrationData).subscribe({
      next: (response) => {
        this.successMessage = "Registration submitted successfully! Waiting for admin approval.";
        this.isSubmitting = false;
        setTimeout(() => {
          this.registered.emit();
          this.onClose();
        }, 2e3);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Failed to submit registration. Please try again.";
        this.isSubmitting = false;
      }
    });
  }
  onClose() {
    this.close.emit();
  }
  get f() {
    return this.registrationForm.controls;
  }
  static {
    this.\u0275fac = function RegistrationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistrationModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RegistrationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationModalComponent, selectors: [["app-registration-modal"]], inputs: { evenementId: "evenementId", evenementTitle: "evenementTitle", userId: "userId" }, outputs: { close: "close", registered: "registered" }, decls: 36, vars: 16, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "event-info"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"], [4, "ngIf"], [1, "alert", "alert-error"], [1, "alert", "alert-success"]], template: function RegistrationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function RegistrationModalComponent_Template_div_click_0_listener() {
          return ctx.onClose();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function RegistrationModalComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Register for Event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function RegistrationModalComponent_Template_button_click_5_listener() {
          return ctx.onClose();
        });
        \u0275\u0275text(6, "\xD7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "h3");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Please fill in your details to register for this event.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "form", 6);
        \u0275\u0275listener("ngSubmit", function RegistrationModalComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
        \u0275\u0275text(16, "First Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 9);
        \u0275\u0275template(18, RegistrationModalComponent_div_18_Template, 3, 2, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 11);
        \u0275\u0275text(21, "Last Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 12);
        \u0275\u0275template(23, RegistrationModalComponent_div_23_Template, 3, 2, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7)(25, "label", 13);
        \u0275\u0275text(26, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 14);
        \u0275\u0275template(28, RegistrationModalComponent_div_28_Template, 3, 2, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, RegistrationModalComponent_div_29_Template, 2, 1, "div", 15)(30, RegistrationModalComponent_div_30_Template, 2, 1, "div", 16);
        \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
        \u0275\u0275listener("click", function RegistrationModalComponent_Template_button_click_32_listener() {
          return ctx.onClose();
        });
        \u0275\u0275text(33, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 19);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.evenementTitle);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.registrationForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["firstName"].invalid && ctx.f["firstName"].touched);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.f["firstName"].invalid && ctx.f["firstName"].touched);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["lastName"].invalid && ctx.f["lastName"].touched);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.f["lastName"].invalid && ctx.f["lastName"].touched);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["email"].invalid && ctx.f["email"].touched);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.f["email"].invalid && ctx.f["email"].touched);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSubmitting);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSubmitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Submitting..." : "Submit Registration", " ");
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(147, 112, 219, 0.15) 0%,\n      rgba(138, 43, 226, 0.15) 100%);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(75, 0, 130, 0.4) 0%,\n      rgba(72, 61, 139, 0.4) 100%);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      rgba(250, 248, 255, 0.98) 0%,\n      rgba(245, 240, 255, 0.98) 100%);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(147, 112, 219, 0.2);\n  border-radius: 24px;\n  width: 90%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow:\n    0 20px 60px rgba(147, 112, 219, 0.25),\n    0 8px 16px rgba(138, 43, 226, 0.15),\n    inset 0 1px 0 rgba(255, 255, 255, 0.8);\n  animation: _ngcontent-%COMP%_slideUpScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(147, 112, 219, 0.05);\n  border-radius: 10px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      180deg,\n      #9370db 0%,\n      #8a2be2 100%);\n  border-radius: 10px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #8a2be2 0%,\n      #7b1fa2 100%);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 20, 60, 0.98) 0%,\n      rgba(40, 25, 70, 0.98) 100%);\n  border: 1px solid rgba(147, 112, 219, 0.3);\n  box-shadow:\n    0 20px 60px rgba(75, 0, 130, 0.4),\n    0 8px 16px rgba(72, 61, 139, 0.3),\n    inset 0 1px 0 rgba(147, 112, 219, 0.2);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(147, 112, 219, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 28px 32px;\n  border-bottom: 1px solid rgba(147, 112, 219, 0.15);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.6) 0%,\n      rgba(250, 248, 255, 0.4) 100%);\n  border-radius: 24px 24px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #8a2be2 0%,\n      #9370db 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  animation: _ngcontent-%COMP%_slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(147, 112, 219, 0.1);\n  border: none;\n  font-size: 24px;\n  color: #8a2be2;\n  cursor: pointer;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(138, 43, 226, 0.15);\n  transform: rotate(90deg) scale(1.1);\n  box-shadow: 0 4px 12px rgba(138, 43, 226, 0.2);\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:active {\n  transform: rotate(90deg) scale(0.95);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(60, 40, 100, 0.4) 0%,\n      rgba(50, 30, 90, 0.3) 100%);\n  border-bottom: 1px solid rgba(147, 112, 219, 0.25);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b19cd9 0%,\n      #c8b3e6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(147, 112, 219, 0.2);\n  color: #c8b3e6;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(147, 112, 219, 0.3);\n  box-shadow: 0 4px 12px rgba(147, 112, 219, 0.3);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 32px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;\n}\n.event-info[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(147, 112, 219, 0.08) 0%,\n      rgba(138, 43, 226, 0.05) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(147, 112, 219, 0.15);\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;\n}\n.event-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8a2be2 0%,\n      #9370db 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 20px;\n  margin: 0 0 8px 0;\n  font-weight: 600;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.event-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b5b95;\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(147, 112, 219, 0.15) 0%,\n      rgba(138, 43, 226, 0.1) 100%);\n  border: 1px solid rgba(147, 112, 219, 0.25);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b19cd9 0%,\n      #c8b3e6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b19cd9;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.3s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.35s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #6b5b95;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  letter-spacing: 0.3px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 2px solid rgba(147, 112, 219, 0.2);\n  border-radius: 12px;\n  color: #4a4a4a;\n  font-size: 15px;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(147, 112, 219, 0.08);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(107, 91, 149, 0.5);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #9370db;\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 4px 16px rgba(147, 112, 219, 0.15), 0 0 0 4px rgba(147, 112, 219, 0.1);\n  transform: translateY(-2px);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: rgba(147, 112, 219, 0.35);\n}\n.form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  background: rgba(231, 76, 60, 0.05);\n  animation: _ngcontent-%COMP%_shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 12px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]::before {\n  content: "\\26a0";\n  font-size: 14px;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #c8b3e6;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(60, 40, 100, 0.3);\n  border: 2px solid rgba(147, 112, 219, 0.3);\n  color: #e8e0f5;\n  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.2);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(200, 179, 230, 0.4);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #b19cd9;\n  background: rgba(60, 40, 100, 0.5);\n  box-shadow: 0 4px 16px rgba(147, 112, 219, 0.25), 0 0 0 4px rgba(147, 112, 219, 0.15);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: rgba(147, 112, 219, 0.45);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #ff6b6b;\n  background: rgba(255, 107, 107, 0.1);\n}\nbody.dark-mode[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-radius: 14px;\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  animation: _ngcontent-%COMP%_slideInDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.alert[_ngcontent-%COMP%]::before {\n  font-size: 20px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(231, 76, 60, 0.12) 0%,\n      rgba(192, 57, 43, 0.08) 100%);\n  border: 1px solid rgba(231, 76, 60, 0.3);\n  color: #c0392b;\n}\n.alert.alert-error[_ngcontent-%COMP%]::before {\n  content: "\\274c";\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(46, 213, 115, 0.12) 0%,\n      rgba(39, 174, 96, 0.08) 100%);\n  border: 1px solid rgba(46, 213, 115, 0.3);\n  color: #27ae60;\n}\n.alert.alert-success[_ngcontent-%COMP%]::before {\n  content: "\\2705";\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  border-radius: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  letter-spacing: 0.3px;\n  position: relative;\n  overflow: hidden;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: translate(-50%, -50%);\n  transition: width 0.6s, height 0.6s;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active::before {\n  width: 300px;\n  height: 300px;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(147, 112, 219, 0.12);\n  color: #8a2be2;\n  border: 2px solid rgba(147, 112, 219, 0.25);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(147, 112, 219, 0.18);\n  border-color: rgba(147, 112, 219, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(147, 112, 219, 0.2);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9370db 0%,\n      #8a2be2 100%);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(147, 112, 219, 0.3);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #8a2be2 0%,\n      #7b1fa2 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(138, 43, 226, 0.4);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(138, 43, 226, 0.3);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUpScale {\n  from {\n    transform: translateY(40px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-5px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(5px);\n  }\n}\n@media (max-width: 600px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    border-radius: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=registration-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationModalComponent, { className: "RegistrationModalComponent", filePath: "app\\frontoffice\\events\\registration-modal\\registration-modal.component.ts", lineNumber: 12 });
})();

// src/app/frontoffice/events/events.component.ts
function EventsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Loading events...");
    \u0275\u0275elementEnd()();
  }
}
function EventsComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "span", 24);
    \u0275\u0275text(5, "\u2B50 Featured Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 26)(18, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 28);
    \u0275\u0275element(20, "circle", 29)(21, "circle", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 31);
    \u0275\u0275listener("click", function EventsComponent_div_2_div_20_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRegistrationModal(ctx_r1.featuredEvent));
    });
    \u0275\u0275text(25, "Register Now \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.featuredEvent.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.featuredEvent.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.featuredEvent.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F4C5} ", ctx_r1.formatDate(ctx_r1.featuredEvent.date), " \xB7 ", ctx_r1.featuredEvent.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.featuredEvent.location, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F465} ", ctx_r1.featuredEvent.attendees, "/", ctx_r1.featuredEvent.maxAttendees, " registered");
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r1.featuredEvent.color)("stroke-dasharray", "163.4")("stroke-dashoffset", 163.4 - 163.4 * ctx_r1.getAttendancePercent(ctx_r1.featuredEvent) / 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getAttendancePercent(ctx_r1.featuredEvent), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.featuredEvent.color);
  }
}
function EventsComponent_div_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function EventsComponent_div_2_button_23_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeFilter = f_r4);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeFilter === f_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, f_r4));
  }
}
function EventsComponent_div_2_div_27_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u{1F310} Online");
    \u0275\u0275elementEnd();
  }
}
function EventsComponent_div_2_div_27_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", event_r6.location, "");
  }
}
function EventsComponent_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 38)(11, "div", 39)(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EventsComponent_div_2_div_27_span_15_Template, 2, 0, "span", 41)(16, EventsComponent_div_2_div_27_span_16_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 43)(22, "span", 44);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 45);
    \u0275\u0275element(25, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 47);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 48)(29, "button", 31);
    \u0275\u0275listener("click", function EventsComponent_div_2_div_27_Template_button_click_29_listener() {
      const event_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRegistrationModal(event_r6));
    });
    \u0275\u0275text(30, " Join ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", event_r6.color + "20")("border-color", event_r6.color + "40");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 29, event_r6.date, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 32, event_r6.date, "MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", event_r6.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", event_r6.color + "20")("color", event_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 35, event_r6.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r6.isOnline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r6.isOnline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F0 ", event_r6.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getAttendancePercent(event_r6), "%")("background", event_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r6.attendees, "/", event_r6.maxAttendees, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", event_r6.color)("color", event_r6.color);
  }
}
function EventsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3, "\u{1F4C5} Community");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Upcoming ");
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Join webinars, workshops and meetups to level up your freelance game.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 10)(11, "span", 11);
    \u0275\u0275text(12, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 12)(14, "strong");
    \u0275\u0275text(15, "Ask AI Assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "Find events, get answers instantly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, EventsComponent_div_2_div_20_Template, 26, 14, "div", 14);
    \u0275\u0275elementStart(21, "div", 15)(22, "div", 16);
    \u0275\u0275template(23, EventsComponent_div_2_button_23_Template, 3, 5, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275template(27, EventsComponent_div_2_div_27_Template, 31, 37, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.featuredEvent);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filters);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredEvents.length, " events");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredEvents);
  }
}
function EventsComponent_app_registration_modal_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-registration-modal", 51);
    \u0275\u0275listener("close", function EventsComponent_app_registration_modal_3_Template_app_registration_modal_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRegistrationModal());
    })("registered", function EventsComponent_app_registration_modal_3_Template_app_registration_modal_registered_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegistrationSuccess());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("evenementId", ctx_r1.selectedEventId)("evenementTitle", ctx_r1.selectedEventTitle)("userId", ctx_r1.currentUserId);
  }
}
var EventsComponent = class _EventsComponent {
  constructor(evenementService, authService) {
    this.evenementService = evenementService;
    this.authService = authService;
    this.activeFilter = "all";
    this.filters = ["all", "certification", "workshop", "training", "networking", "freelance"];
    this.events = [];
    this.loading = true;
    this.showRegistrationModal = false;
    this.selectedEventId = 0;
    this.selectedEventTitle = "";
    this.currentUserId = this.authService.currentUser?.id || 1;
  }
  get filteredEvents() {
    return this.events.filter((e) => this.activeFilter === "all" || e.type === this.activeFilter);
  }
  get featuredEvent() {
    return this.events.find((e) => e.isFeatured);
  }
  ngOnInit() {
    this.loadEvents();
  }
  loadEvents() {
    this.loading = true;
    this.evenementService.getAllEvenements().subscribe({
      next: (data) => {
        this.events = data.map((e, index) => this.mapToEvent(e, index));
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading events:", error);
        this.loading = false;
      }
    });
  }
  mapToEvent(evenement, index) {
    const eventDate = new Date(evenement.date);
    const typeMap = {
      "CERTIFICATION": { type: "certification", icon: "\u{1F393}", color: "#f59e0b" },
      "WORKSHOP": { type: "workshop", icon: "\u{1F3A8}", color: "#a855f7" },
      "TRAINING": { type: "training", icon: "\u{1F4DA}", color: "#06b6d4" },
      "NETWORKING": { type: "networking", icon: "\u2615", color: "#22c55e" },
      "FREELANCE_OPPORTUNITY": { type: "freelance", icon: "\u{1F4BC}", color: "#4f6ef7" },
      "RECOMMENDATION": { type: "webinar", icon: "\u2B50", color: "#ec4899" }
    };
    const mapped = typeMap[evenement.type] || { type: "conference", icon: "\u{1F4C5}", color: "#6366f1" };
    return {
      id: evenement.id || 0,
      title: evenement.title,
      description: evenement.description || "",
      date: eventDate.toISOString().split("T")[0],
      time: eventDate.toTimeString().substring(0, 5),
      location: evenement.location || "Online",
      type: mapped.type,
      icon: mapped.icon,
      color: mapped.color,
      attendees: evenement.currentParticipants || 0,
      maxAttendees: evenement.maxParticipants || 100,
      isFeatured: index === 0,
      isOnline: evenement.location?.toLowerCase().includes("online") || false
    };
  }
  participateInEvent(eventId) {
    this.evenementService.participateInEvenement(eventId).subscribe({
      next: () => {
        this.loadEvents();
      },
      error: (error) => {
        console.error("Error participating in event:", error);
        alert("Failed to register for event");
      }
    });
  }
  openRegistrationModal(event) {
    this.selectedEventId = event.id;
    this.selectedEventTitle = event.title;
    this.showRegistrationModal = true;
  }
  closeRegistrationModal() {
    this.showRegistrationModal = false;
  }
  onRegistrationSuccess() {
    this.loadEvents();
  }
  getAttendancePercent(event) {
    return Math.round(event.attendees / event.maxAttendees * 100);
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }
  static {
    this.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsComponent)(\u0275\u0275directiveInject(EvenementService), \u0275\u0275directiveInject(AuthService2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], decls: 4, vars: 3, consts: [[1, "events-page"], ["style", "text-align: center; padding: 60px 0;", 4, "ngIf"], [4, "ngIf"], [3, "evenementId", "evenementTitle", "userId", "close", "registered", 4, "ngIf"], [2, "text-align", "center", "padding", "60px 0"], [2, "font-size", "48px", "margin-bottom", "16px"], [2, "color", "#64748b"], [1, "page-hero"], [1, "hero-badge"], [1, "text-gradient"], ["routerLink", "/chat-assistant", 1, "chat-assistant-btn"], [1, "chat-btn-icon"], [1, "chat-btn-text"], [1, "chat-btn-arrow"], ["class", "featured-event", 4, "ngIf"], [1, "filters-row"], [1, "filters"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "results-count"], [1, "events-list"], ["class", "event-card", 4, "ngFor", "ngForOf"], [1, "featured-event"], [1, "featured-icon"], [1, "featured-content"], [1, "featured-label"], [1, "featured-meta"], [1, "featured-action"], [1, "attendance-ring"], ["viewBox", "0 0 60 60"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke", "rgba(255,255,255,0.1)", "stroke-width", "5"], ["cx", "30", "cy", "30", "r", "26", "fill", "none", "stroke-width", "5", "stroke-linecap", "round", "transform", "rotate(-90 30 30)"], [1, "btn-register", 3, "click"], [1, "filter-btn", 3, "click"], [1, "event-card"], [1, "event-date-block"], [1, "day"], [1, "month"], [1, "event-icon"], [1, "event-content"], [1, "event-tags"], [1, "type-tag"], ["class", "online-tag", 4, "ngIf"], ["class", "location-tag", 4, "ngIf"], [1, "event-bottom"], [1, "event-time"], [1, "attendance-bar"], [1, "bar-fill"], [1, "attendance-text"], [1, "event-action"], [1, "online-tag"], [1, "location-tag"], [3, "close", "registered", "evenementId", "evenementTitle", "userId"]], template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, EventsComponent_div_1_Template, 5, 0, "div", 1)(2, EventsComponent_div_2_Template, 28, 4, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, EventsComponent_app_registration_modal_3_Template, 1, 3, "app-registration-modal", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRegistrationModal);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, RegistrationModalComponent, TitleCasePipe, DatePipe], styles: ['\n\n.events-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.page-hero[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -1.5px;\n  margin-bottom: 12px;\n}\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  max-width: 500px;\n}\n.featured-event[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 110, 247, 0.12),\n      rgba(0, 229, 255, 0.06));\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: var(--radius-xl);\n  padding: 36px 40px;\n  margin-bottom: 40px;\n  position: relative;\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n.featured-event[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 250px;\n  height: 250px;\n  background: rgba(79, 110, 247, 0.08);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  flex-shrink: 0;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #fbbf24;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 8px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  margin-bottom: 14px;\n  max-width: 480px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-content[_ngcontent-%COMP%]   .featured-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .attendance-ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.featured-event[_ngcontent-%COMP%]   .featured-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.filters-row[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 20px;\n  border: 1px solid var(--fo-border);\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: var(--font-body);\n}\n.filter-btn.active[_ngcontent-%COMP%], \n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 20px 24px;\n  transition: all 0.25s;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.35);\n  transform: translateX(4px);\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  border: 1px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 800;\n  color: white;\n  line-height: 1;\n}\n.event-card[_ngcontent-%COMP%]   .event-date-block[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.event-card[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .online-tag[_ngcontent-%COMP%], \n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .location-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 4px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  margin-bottom: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n  white-space: nowrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 2px;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s;\n}\n.event-card[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-bottom[_ngcontent-%COMP%]   .attendance-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  white-space: nowrap;\n}\n.event-card[_ngcontent-%COMP%]   .event-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.event-card[_ngcontent-%COMP%]   .event-action[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.chat-assistant-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 24px;\n  padding: 14px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.15),\n      rgba(79, 70, 229, 0.15));\n  border: 1px solid rgba(139, 92, 246, 0.35);\n  border-radius: 16px;\n  text-decoration: none;\n  color: #c4b5fd;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  max-width: 340px;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.3),\n      rgba(79, 70, 229, 0.3));\n  border-color: rgba(139, 92, 246, 0.6);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);\n  color: #e0d4ff;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]:hover   .chat-btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.chat-assistant-btn[_ngcontent-%COMP%]   .chat-btn-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]   .chat-btn-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]   .chat-btn-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #e0d4ff;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]   .chat-btn-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.chat-assistant-btn[_ngcontent-%COMP%]   .chat-btn-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: auto;\n  transition: transform 0.2s ease;\n  color: #a78bfa;\n}\n/*# sourceMappingURL=events.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "app\\frontoffice\\events\\events.component.ts", lineNumber: 27 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileSettingsComponent, { className: "ProfileSettingsComponent", filePath: "app\\frontoffice\\profile-settings\\profile-settings.component.ts", lineNumber: 9 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsMilestonesComponent, { className: "ProjectsMilestonesComponent", filePath: "app\\frontoffice\\projects-milestones\\projects-milestones.component.ts", lineNumber: 30 });
})();

// src/app/frontoffice/subscription-abonnement/subscription-abonnement.component.ts
var _c02 = () => [];
function SubscriptionAbonnementComponent_div_1_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", feature_r3, " ");
  }
}
function SubscriptionAbonnementComponent_div_1_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((ctx_r1.plan.features == null ? null : ctx_r1.plan.features.length) || 0) - 3, " more ");
  }
}
function SubscriptionAbonnementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Confirm Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "You're about to subscribe to the ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275listener("click", function SubscriptionAbonnementComponent_div_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "span", 9);
    \u0275\u0275text(17, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "span", 9);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 8)(26, "span", 9);
    \u0275\u0275text(27, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 10);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 8)(31, "span", 9);
    \u0275\u0275text(32, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 10);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 8)(36, "span", 9);
    \u0275\u0275text(37, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 10);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 12)(41, "span", 9);
    \u0275\u0275text(42, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 13);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 14)(46, "p", 15);
    \u0275\u0275text(47, "What's included:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 16);
    \u0275\u0275template(49, SubscriptionAbonnementComponent_div_1_span_49_Template, 2, 1, "span", 17)(50, SubscriptionAbonnementComponent_div_1_span_50_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 19)(52, "button", 20);
    \u0275\u0275listener("click", function SubscriptionAbonnementComponent_div_1_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(53, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 21);
    \u0275\u0275listener("click", function SubscriptionAbonnementComponent_div_1_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmSubscription());
    });
    \u0275\u0275text(55, "Confirm");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.plan.color + "22");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.plan.icon);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.plan.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.plan.name);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("color", ctx_r1.plan.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.subscription.plan == null ? null : ctx_r1.subscription.plan.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.subscription.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.subscription.duration, " month", (ctx_r1.subscription.duration || 1) > 1 ? "s" : "", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.subscription.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.subscription.endDate));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.plan.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.subscription.priceAtPurchase, " TND / ", ctx_r1.subscription.duration === 1 ? "month" : "year", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", (ctx_r1.plan.features || \u0275\u0275pureFunction0(20, _c02)).slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.plan.features == null ? null : ctx_r1.plan.features.length) || 0) > 3);
  }
}
function SubscriptionAbonnementComponent_app_subscription_payment_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-subscription-payment", 24);
    \u0275\u0275listener("close", function SubscriptionAbonnementComponent_app_subscription_payment_2_Template_app_subscription_payment_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClosePayment());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plan", ctx_r1.plan)("subscription", ctx_r1.subscription);
  }
}
var SubscriptionAbonnementComponent = class _SubscriptionAbonnementComponent {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
    this.billingCycle = "monthly";
    this.close = new EventEmitter();
    this.confirm = new EventEmitter();
    this.showPayment = false;
  }
  ngOnInit() {
    this.subscription = this.subscriptionService.buildSubscription(this.plan, this.billingCycle);
  }
  onConfirmSubscription() {
    this.confirm.emit();
  }
  onClosePayment() {
    this.showPayment = false;
    this.close.emit();
  }
  onBackdropClick(event) {
    if (event.target.classList.contains("modal-backdrop")) {
      this.close.emit();
    }
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  static {
    this.\u0275fac = function SubscriptionAbonnementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionAbonnementComponent)(\u0275\u0275directiveInject(SubscriptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionAbonnementComponent, selectors: [["app-subscription-abonnement"]], inputs: { plan: "plan", billingCycle: "billingCycle" }, outputs: { close: "close", confirm: "confirm" }, decls: 3, vars: 2, consts: [[1, "modal-backdrop", 3, "click"], ["class", "modal-box", 4, "ngIf"], [3, "plan", "subscription", "close", 4, "ngIf"], [1, "modal-box"], [1, "modal-header"], [1, "modal-icon"], [1, "close-btn", 3, "click"], [1, "plan-summary"], [1, "summary-row"], [1, "label"], [1, "value"], [1, "status-badge", "pending"], [1, "summary-row", "total"], [1, "value", "total-amount"], [1, "features-preview"], [1, "features-title"], [1, "features-tags"], ["class", "feature-tag", 4, "ngFor", "ngForOf"], ["class", "feature-tag more", 4, "ngIf"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"], [1, "feature-tag"], [1, "feature-tag", "more"], [3, "close", "plan", "subscription"]], template: function SubscriptionAbonnementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function SubscriptionAbonnementComponent_Template_div_click_0_listener($event) {
          return ctx.onBackdropClick($event);
        });
        \u0275\u0275template(1, SubscriptionAbonnementComponent_div_1_Template, 56, 21, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, SubscriptionAbonnementComponent_app_subscription_payment_2_Template, 1, 2, "app-subscription-payment", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showPayment);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPayment);
      }
    }, dependencies: [NgForOf, NgIf, SubscriptionPaymentComponent], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-bottom: 1px solid #e0e0e0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #666;\n  transition: color 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n  color: #666;\n  font-size: 0.95rem;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 8px;\n  font-size: 1.5rem;\n}\n.plan-summary[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.plan-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 0;\n  font-size: 0.95rem;\n}\n.plan-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.plan-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.plan-summary[_ngcontent-%COMP%]   .summary-row.total[_ngcontent-%COMP%] {\n  border-top: 2px solid #e0e0e0;\n  margin-top: 0.8rem;\n  padding-top: 1rem;\n  font-size: 1.1rem;\n}\n.plan-summary[_ngcontent-%COMP%]   .summary-row.total[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.3rem 0.8rem;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.features-preview[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  background: #fafbfc;\n  border-bottom: 1px solid #e0e0e0;\n}\n.features-preview[_ngcontent-%COMP%]   .features-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem 0;\n  color: #333;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.features-preview[_ngcontent-%COMP%]   .features-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.features-preview[_ngcontent-%COMP%]   .features-tags[_ngcontent-%COMP%]   .feature-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 0.8rem;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  color: #333;\n}\n.features-preview[_ngcontent-%COMP%]   .features-tags[_ngcontent-%COMP%]   .feature-tag.more[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #666;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-weight: 600;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #333;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.abonnement-page[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #d9534f;\n  font-size: 0.85rem;\n  margin-top: 0.25rem;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  background: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.subscription-info[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background: #f9f9f9;\n}\n.subscription-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.subscription-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.6rem 1.2rem;\n  background: #28a745;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=subscription-abonnement.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionAbonnementComponent, { className: "SubscriptionAbonnementComponent", filePath: "app\\frontoffice\\subscription-abonnement\\subscription-abonnement.component.ts", lineNumber: 10 });
})();

// src/app/frontoffice/subscription-management/subscription-management.component.ts
function SubscriptionManagementComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "\u2B50 Most Popular");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionManagementComponent_div_21_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPeriod());
  }
}
function SubscriptionManagementComponent_div_21_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Save 20%");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionManagementComponent_div_21_li_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 29);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    const plan_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", plan_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function SubscriptionManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, SubscriptionManagementComponent_div_21_div_1_Template, 2, 0, "div", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SubscriptionManagementComponent_div_21_span_12_Template, 2, 1, "span", 21)(13, SubscriptionManagementComponent_div_21_span_13_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ul", 23);
    \u0275\u0275template(15, SubscriptionManagementComponent_div_21_li_15_Template, 4, 3, "li", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 25);
    \u0275\u0275listener("click", function SubscriptionManagementComponent_div_21_Template_button_click_16_listener() {
      const plan_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectPlan(plan_r4));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", plan_r4.isCurrent ? plan_r4.color + "60" : "");
    \u0275\u0275classProp("popular", plan_r4.isPopular)("current", plan_r4.isCurrent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r4.isPopular);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", plan_r4.color + "20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", plan_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPrice(plan_r4) === 0 ? "Free" : ctx_r1.currencyService.formatAmount(ctx_r1.getPrice(plan_r4)), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPrice(plan_r4) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.billingCycle === "yearly" && plan_r4.price > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", plan_r4.features);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", plan_r4.isCurrent ? "transparent" : plan_r4.color)("border-color", plan_r4.color)("color", plan_r4.isCurrent ? plan_r4.color : "white");
    \u0275\u0275classProp("current", plan_r4.isCurrent);
    \u0275\u0275property("disabled", plan_r4.isCurrent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r4.isCurrent ? "\u2713 Current Plan" : "Upgrade to " + plan_r4.name, " ");
  }
}
function SubscriptionManagementComponent_app_subscription_payment_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-subscription-payment", 30);
    \u0275\u0275listener("close", function SubscriptionManagementComponent_app_subscription_payment_22_Template_app_subscription_payment_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClosePayment());
    })("paymentSuccess", function SubscriptionManagementComponent_app_subscription_payment_22_Template_app_subscription_payment_paymentSuccess_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaymentSuccess($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plan", ctx_r1.selectedPlan)("subscription", ctx_r1.buildSubscription(ctx_r1.selectedPlan));
  }
}
function SubscriptionManagementComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " You are now subscribed to the ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " plan ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.selectedPlan.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan.name);
  }
}
function SubscriptionManagementComponent_div_23_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function SubscriptionManagementComponent_div_23_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadInvoice());
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Download Invoice (PDF) ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function SubscriptionManagementComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275listener("click", function SubscriptionManagementComponent_div_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 35);
    \u0275\u0275text(6, "Congratulations!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SubscriptionManagementComponent_div_23_div_9_Template, 5, 3, "div", 37)(10, SubscriptionManagementComponent_div_23_button_10_Template, 4, 0, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39)(12, "button", 40);
    \u0275\u0275listener("click", function SubscriptionManagementComponent_div_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isFreePlanSuccess ? "You are subscribed to Free during one month" : "Payment Successfully Completed", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isFreePlanSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isFreePlanSuccess);
  }
}
function SubscriptionManagementComponent_app_subscription_abonnement_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-subscription-abonnement", 44);
    \u0275\u0275listener("close", function SubscriptionManagementComponent_app_subscription_abonnement_24_Template_app_subscription_abonnement_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseConfirmation());
    })("confirm", function SubscriptionManagementComponent_app_subscription_abonnement_24_Template_app_subscription_abonnement_confirm_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmFreePlan());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plan", ctx_r1.selectedPlan)("billingCycle", ctx_r1.billingCycle);
  }
}
var SubscriptionManagementComponent = class _SubscriptionManagementComponent {
  constructor(subscriptionService, router, currencyService) {
    this.subscriptionService = subscriptionService;
    this.router = router;
    this.currencyService = currencyService;
    this.plans = [];
    this.billingCycle = "monthly";
    this.showConfirmation = false;
    this.showPayment = false;
    this.showSuccessModal = false;
    this.isFreePlanSuccess = false;
    this.selectedPlan = null;
  }
  ngOnInit() {
    this.loadPlans();
    this.currentPlan = this.subscriptionService.getCurrentPlan();
  }
  loadPlans() {
    this.plans = this.subscriptionService.getPlans(this.billingCycle);
  }
  toggleBillingCycle(cycle) {
    this.billingCycle = cycle;
    this.subscriptionService.setBillingCycle(cycle);
    this.loadPlans();
  }
  getPrice(plan) {
    return plan.price;
  }
  getPeriod() {
    return this.billingCycle === "monthly" ? "/month" : "/year";
  }
  getPeriodFr() {
    return this.billingCycle === "monthly" ? "/mois" : "/an";
  }
  onSelectPlan(plan) {
    if (plan.isCurrent)
      return;
    this.selectedPlan = plan;
    this.subscriptionService.setSelectedPlan(plan);
    if (plan.price === 0) {
      this.showConfirmation = true;
    } else {
      this.showPayment = true;
    }
  }
  onConfirmFreePlan() {
    this.showConfirmation = false;
    this.isFreePlanSuccess = true;
    this.showSuccessModal = true;
    if (this.selectedPlan) {
      this.currentPlan = __spreadProps(__spreadValues({}, this.selectedPlan), { isCurrent: true });
    }
  }
  onPaymentSuccess(_response) {
  }
  downloadInvoice() {
    console.log("Downloading invoice as PDF...");
    alert("Invoice download started (PDF)");
  }
  closeModal() {
    this.showConfirmation = false;
    this.showPayment = false;
    this.showSuccessModal = false;
    this.isFreePlanSuccess = false;
    this.selectedPlan = null;
  }
  onCloseConfirmation() {
    this.closeModal();
  }
  onClosePayment() {
    this.closeModal();
  }
  buildSubscription(plan) {
    return this.subscriptionService.buildSubscription(plan, this.billingCycle);
  }
  static {
    this.\u0275fac = function SubscriptionManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionManagementComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CurrencyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionManagementComponent, selectors: [["app-subscription-management"]], decls: 25, vars: 8, consts: [[1, "subscription-page"], [1, "page-header"], [1, "hero-badge"], [1, "text-gradient"], [1, "billing-row"], [1, "billing-toggle"], [3, "click"], [1, "discount-badge"], [1, "plans-grid"], ["class", "plan-card", 3, "popular", "current", "border-color", 4, "ngFor", "ngForOf"], [3, "plan", "subscription", "close", "paymentSuccess", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "plan", "billingCycle", "close", "confirm", 4, "ngIf"], [1, "plan-card"], ["class", "popular-badge", 4, "ngIf"], [1, "plan-header"], [1, "plan-icon-wrap"], [1, "plan-name"], [1, "plan-desc"], [1, "plan-price"], [1, "price-amount"], ["class", "price-currency", 4, "ngIf"], ["class", "price-note", 4, "ngIf"], [1, "plan-features"], [4, "ngFor", "ngForOf"], [1, "plan-btn", 3, "click", "disabled"], [1, "popular-badge"], [1, "price-currency"], [1, "price-note"], [1, "check"], [3, "close", "paymentSuccess", "plan", "subscription"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "modal-sm", "success-modal", 3, "click"], [1, "modal-body"], [1, "success-icon-large"], [1, "success-title"], [1, "success-message"], ["class", "success-details", 4, "ngIf"], ["class", "btn-download-invoice", 3, "click", 4, "ngIf"], [1, "modal-footer"], [1, "btn-primary", 3, "click"], [1, "success-details"], [1, "btn-download-invoice", 3, "click"], [1, "pdf-icon"], [3, "close", "confirm", "plan", "billingCycle"]], template: function SubscriptionManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275text(4, "\u{1F4B3} Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Your ");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Upgrade to unlock more opportunities and grow your freelance career.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "button", 6);
        \u0275\u0275listener("click", function SubscriptionManagementComponent_Template_button_click_13_listener() {
          return ctx.toggleBillingCycle("monthly");
        });
        \u0275\u0275text(14, "Monthly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function SubscriptionManagementComponent_Template_button_click_15_listener() {
          return ctx.toggleBillingCycle("yearly");
        });
        \u0275\u0275text(16, " Yearly ");
        \u0275\u0275elementStart(17, "span", 7);
        \u0275\u0275text(18, "-20%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(19, "app-currency-selector");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8);
        \u0275\u0275template(21, SubscriptionManagementComponent_div_21_Template, 18, 28, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, SubscriptionManagementComponent_app_subscription_payment_22_Template, 1, 2, "app-subscription-payment", 10)(23, SubscriptionManagementComponent_div_23_Template, 14, 3, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, SubscriptionManagementComponent_app_subscription_abonnement_24_Template, 1, 2, "app-subscription-abonnement", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.billingCycle === "monthly");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.billingCycle === "yearly");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPayment && ctx.selectedPlan && ctx.selectedPlan.price > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showSuccessModal && ctx.selectedPlan && ctx.isFreePlanSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirmation && ctx.selectedPlan && ctx.selectedPlan.id === "free");
      }
    }, dependencies: [NgForOf, NgIf, SubscriptionPaymentComponent, CurrencySelectorComponent, SubscriptionAbonnementComponent], styles: ["\n\n.subscription-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(28px, 4vw, 48px);\n  font-weight: 800;\n  color: white;\n  letter-spacing: -1.5px;\n  margin-bottom: 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n}\n.current-plan-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  align-self: flex-start;\n}\n.current-plan-card[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.current-plan-card[_ngcontent-%COMP%]   .plan-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.current-plan-card[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 800;\n}\n.current-plan-card[_ngcontent-%COMP%]   .renew-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n  border-left: 1px solid var(--fo-border);\n  padding-left: 14px;\n}\n.billing-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin: 0 auto 40px;\n}\n.billing-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: 10px;\n  padding: 4px;\n  width: fit-content;\n  margin: 0;\n}\n.billing-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 7px;\n  border: none;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.billing-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.billing-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .discount-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  background: rgba(34, 197, 94, 0.2);\n  color: #22c55e;\n  border-radius: 6px;\n  font-size: 11px;\n  margin-left: 6px;\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 60px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-xl);\n  padding: 28px;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  transition: all 0.3s;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n}\n.plan-card.popular[_ngcontent-%COMP%] {\n  border-color: rgba(79, 110, 247, 0.4) !important;\n  box-shadow: 0 0 0 1px rgba(79, 110, 247, 0.2);\n}\n.plan-card[_ngcontent-%COMP%]   .popular-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: white;\n  padding: 4px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: center;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin: 0 auto 12px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 4px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n  margin-bottom: 16px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 800;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   .price-currency[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.plan-card[_ngcontent-%COMP%]   .plan-header[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   .price-note[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: var(--success);\n  margin-top: 2px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  flex: 1;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-btn[_ngcontent-%COMP%]:not(.current):hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.plan-card[_ngcontent-%COMP%]   .plan-btn.current[_ngcontent-%COMP%] {\n  cursor: default;\n  background: transparent !important;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.85);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-xl);\n  width: 100%;\n  max-width: 480px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n}\n.modal-content.modal-sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--fo-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 800;\n  color: white;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--fo-text-muted);\n  font-size: 20px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--fo-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.payment-method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 16px;\n}\n.payment-method-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.payment-method-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n  margin-bottom: 4px;\n  display: block;\n}\n.payment-method-card[_ngcontent-%COMP%]   .pm-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  line-height: 1.4;\n}\n.success-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.success-modal[_ngcontent-%COMP%]   .success-icon-large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: var(--success);\n  color: white;\n  border-radius: 50%;\n  font-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);\n}\n.success-modal[_ngcontent-%COMP%]   .success-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 8px;\n}\n.success-modal[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.success-modal[_ngcontent-%COMP%]   .success-details[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--fo-text-secondary);\n  margin-bottom: 24px;\n}\n.success-modal[_ngcontent-%COMP%]   .btn-download-invoice[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.success-modal[_ngcontent-%COMP%]   .btn-download-invoice[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.success-modal[_ngcontent-%COMP%]   .btn-download-invoice[_ngcontent-%COMP%]   .pdf-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: var(--primary);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n@media (max-width: 900px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=subscription-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionManagementComponent, { className: "SubscriptionManagementComponent", filePath: "app\\frontoffice\\subscription-management\\subscription-management.component.ts", lineNumber: 20 });
})();

// src/app/frontoffice/my-subscription/my-subscription.component.ts
function MySubscriptionComponent_app_subscription_payment_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-subscription-payment", 20);
    \u0275\u0275listener("close", function MySubscriptionComponent_app_subscription_payment_43_Template_app_subscription_payment_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePayment());
    })("paymentSuccess", function MySubscriptionComponent_app_subscription_payment_43_Template_app_subscription_payment_paymentSuccess_0_listener($event) {
      \u0275\u0275restoreView(_r1);
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
  constructor(subscriptionService, router) {
    this.subscriptionService = subscriptionService;
    this.router = router;
    this.renewDate = /* @__PURE__ */ new Date();
    this.progress = 0.75;
    this.autoRenew = false;
    this.showPayment = false;
    this.currentSubscription = null;
  }
  ngOnInit() {
    this.plan = this.subscriptionService.getCurrentPlan();
    this.renewDate = /* @__PURE__ */ new Date();
    this.renewDate.setMonth(this.renewDate.getMonth() + 2);
  }
  toggleAutoRenew() {
    this.autoRenew = !this.autoRenew;
  }
  changePlan() {
    this.router.navigate(["/subscription-management"]);
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
      return new (__ngFactoryType__ || _MySubscriptionComponent)(\u0275\u0275directiveInject(SubscriptionService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MySubscriptionComponent, selectors: [["app-my-subscription"]], decls: 44, vars: 13, consts: [[1, "my-sub-page"], [1, "page-header"], [1, "hero-badge"], [1, "grad"], [1, "status-card"], [1, "status-head"], [1, "dot"], [1, "actions"], ["type", "button", 1, "btn", "outline", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "progress-wrap"], [1, "progress-bar"], [1, "pct"], [1, "renew-row"], [1, "toggle-line"], ["type", "checkbox", 3, "change", "checked"], [1, "section"], [1, "muted"], [1, "empty-box"], [3, "plan", "subscription", "close", "paymentSuccess", 4, "ngIf"], [3, "close", "paymentSuccess", "plan", "subscription"]], template: function MySubscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "\u{1F4CB} My Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Your ");
        \u0275\u0275elementStart(6, "span", 3);
        \u0275\u0275text(7, "Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Manage your subscription, renewal and invoices.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "div")(13, "h2");
        \u0275\u0275text(14);
        \u0275\u0275elementStart(15, "span", 6);
        \u0275\u0275text(16, "\u25CF ACTIVE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "button", 8);
        \u0275\u0275listener("click", function MySubscriptionComponent_Template_button_click_21_listener() {
          return ctx.changePlan();
        });
        \u0275\u0275text(22, "Change Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 9);
        \u0275\u0275listener("click", function MySubscriptionComponent_Template_button_click_23_listener() {
          return ctx.renew();
        });
        \u0275\u0275text(24, "Renew");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 10)(26, "div", 11);
        \u0275\u0275element(27, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 12);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 13)(32, "label", 14)(33, "input", 15);
        \u0275\u0275listener("change", function MySubscriptionComponent_Template_input_change_33_listener() {
          return ctx.toggleAutoRenew();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "Auto-renewal");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "section", 16)(37, "h3");
        \u0275\u0275text(38, "Payment History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 17);
        \u0275\u0275text(40, "PDF invoices will appear here after admin validation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 18);
        \u0275\u0275text(42, "No recent payments to display (demo).");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(43, MySubscriptionComponent_app_subscription_payment_43_Template, 1, 2, "app-subscription-payment", 19);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("", ctx.plan.name, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Valid until ", \u0275\u0275pipeBind2(19, 7, ctx.renewDate, "longDate"), "");
        \u0275\u0275advance(9);
        \u0275\u0275styleProp("width", ctx.progress * 100, "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 10, ctx.progress * 100, "1.0-0"), "% of the period used");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.autoRenew);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.showPayment && ctx.currentSubscription);
      }
    }, dependencies: [NgIf, SubscriptionPaymentComponent, DecimalPipe, DatePipe], styles: ["\n\n.my-sub-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 100px 24px 48px;\n  max-width: 900px;\n  margin: 0 auto;\n  color: #e5e7eb;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 4vw, 40px);\n  font-weight: 800;\n  margin: 8px 0;\n}\n.grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #22c55e);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(79, 110, 247, 0.15);\n  border: 1px solid rgba(79, 110, 247, 0.35);\n  font-size: 13px;\n  font-weight: 600;\n  color: #93c5fd;\n}\n.status-card[_ngcontent-%COMP%] {\n  background: #141824;\n  border: 1px solid #2d3348;\n  border-radius: 20px;\n  padding: 24px;\n  margin-top: 28px;\n}\n.status-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: flex-start;\n}\n.status-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n}\n.dot[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #22c55e;\n  font-weight: 700;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 10px;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n}\n.btn.outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #3d4460;\n  color: #e5e7eb;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #2d3348;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f6ef7,\n      #22c55e);\n  border-radius: 999px;\n}\n.pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: inline-block;\n}\n.renew-row[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.toggle-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 14px;\n}\n.empty-box[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 24px;\n  border: 1px dashed #3d4460;\n  border-radius: 12px;\n  text-align: center;\n  color: #6b7280;\n}\n/*# sourceMappingURL=my-subscription.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MySubscriptionComponent, { className: "MySubscriptionComponent", filePath: "app\\frontoffice\\my-subscription\\my-subscription.component.ts", lineNumber: 11 });
})();

// src/app/frontoffice/available-projects/available-projects.component.ts
var _c03 = (a0) => ["/projects", a0];
function AvailableProjectsComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function AvailableProjectsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No projects found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your filters or check back later for new opportunities");
    \u0275\u0275elementEnd()();
  }
}
function AvailableProjectsComponent_div_30_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", project_r2.location, "");
  }
}
function AvailableProjectsComponent_div_30_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", project_r2.budget, " ", project_r2.currency, "");
  }
}
function AvailableProjectsComponent_div_30_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, project_r2.deadline, "MMM d, y"));
  }
}
function AvailableProjectsComponent_div_30_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r3);
  }
}
function AvailableProjectsComponent_div_30_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AvailableProjectsComponent_div_30_div_28_span_1_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", project_r2.skills);
  }
}
function AvailableProjectsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AvailableProjectsComponent_div_30_span_8_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h2", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 33)(17, "span", 34);
    \u0275\u0275text(18, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 33)(22, "span", 34);
    \u0275\u0275text(23, "Team Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, AvailableProjectsComponent_div_30_div_26_Template, 5, 2, "div", 36)(27, AvailableProjectsComponent_div_30_div_27_Template, 6, 4, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AvailableProjectsComponent_div_30_div_28_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(29, "div", 38)(30, "div", 39)(31, "span", 40);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 40);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 41);
    \u0275\u0275text(36, " View Details & Apply ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r2.companyName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.location);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getStatusClass(project_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r2.status === "open" ? "\u{1F7E2} Open" : project_r2.status === "in_progress" ? "\u{1F7E1} In Progress" : "\u{1F534} Closed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.projectTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(project_r2.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", project_r2.numberOfPeopleDemanded, " people");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.budget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.deadline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r2.skills && project_r2.skills.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", project_r2.clickCount, " views");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DD} ", project_r2.applicationsCount, " applications");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c03, project_r2.id));
  }
}
var AvailableProjectsComponent = class _AvailableProjectsComponent {
  constructor(projectsService) {
    this.projectsService = projectsService;
    this.projects = [];
    this.filteredProjects = [];
    this.searchTerm = "";
    this.selectedCategory = "all";
    this.selectedStatus = "open";
    this.categories = ["Web Development", "Mobile Development", "Design", "Data Science", "Marketing", "Other"];
  }
  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.applyFilters();
    });
  }
  applyFilters() {
    this.filteredProjects = this.projects.filter((p) => {
      const matchSearch = !this.searchTerm || p.projectTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.companyName.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCategory = this.selectedCategory === "all" || p.category === this.selectedCategory;
      const matchStatus = this.selectedStatus === "all" || p.status === this.selectedStatus;
      return matchSearch && matchCategory && matchStatus;
    });
  }
  onApply(project) {
    this.projectsService.incrementClickCount(project.id);
    alert(`Application submitted for: ${project.projectTitle}

The company will review your profile and contact you soon!`);
  }
  getStatusClass(status) {
    return status;
  }
  static {
    this.\u0275fac = function AvailableProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvailableProjectsComponent)(\u0275\u0275directiveInject(CompanyProjectsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailableProjectsComponent, selectors: [["app-available-projects"]], decls: 31, vars: 8, consts: [[1, "projects-page"], [1, "projects-hero"], [1, "hero-content"], [1, "hero-title"], [1, "text-gradient"], [1, "hero-subtitle"], [1, "filters-section"], [1, "filters-container"], ["type", "text", "placeholder", "\u{1F50D} Search projects, companies...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "open"], ["value", "in_progress"], ["value", "closed"], [1, "results-count"], [1, "projects-container"], [1, "projects-grid"], ["class", "empty-state", 4, "ngIf"], ["class", "project-card", 4, "ngFor", "ngForOf"], [3, "value"], [1, "empty-state"], [1, "empty-icon"], [1, "project-card"], [1, "card-header"], [1, "company-info"], [1, "company-avatar"], [1, "company-name"], ["class", "project-location", 4, "ngIf"], [1, "status-badge"], [1, "project-title"], [1, "project-description"], [1, "project-details"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], ["class", "skills-tags", 4, "ngIf"], [1, "card-footer"], [1, "project-stats"], [1, "stat-item"], [1, "btn-apply", 3, "routerLink"], [1, "project-location"], [1, "skills-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"]], template: function AvailableProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Available ");
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Discover exciting opportunities from top companies in Tunisia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AvailableProjectsComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AvailableProjectsComponent_Template_input_input_11_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AvailableProjectsComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AvailableProjectsComponent_Template_select_change_12_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(13, "option", 10);
        \u0275\u0275text(14, "All Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, AvailableProjectsComponent_option_15_Template, 2, 2, "option", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AvailableProjectsComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AvailableProjectsComponent_Template_select_change_16_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(17, "option", 10);
        \u0275\u0275text(18, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 12);
        \u0275\u0275text(20, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 13);
        \u0275\u0275text(22, "In Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 14);
        \u0275\u0275text(24, "Closed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
        \u0275\u0275template(29, AvailableProjectsComponent_div_29_Template, 7, 0, "div", 18)(30, AvailableProjectsComponent_div_30_Template, 37, 18, "div", 19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate2(" ", ctx.filteredProjects.length, " project", ctx.filteredProjects.length !== 1 ? "s" : "", " found ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.filteredProjects.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredProjects);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.projects-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding-top: 80px;\n}\n.projects-hero[_ngcontent-%COMP%] {\n  padding: 60px 32px 40px;\n  text-align: center;\n  background:\n    linear-gradient(\n      180deg,\n      var(--fo-bg-secondary) 0%,\n      var(--fo-bg-primary) 100%);\n  border-bottom: 1px solid var(--fo-border);\n}\n.projects-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.projects-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 48px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  letter-spacing: -1px;\n  margin-bottom: 16px;\n}\n.projects-hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--fo-text-secondary);\n  line-height: 1.6;\n}\n.filters-section[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: var(--fo-bg-secondary);\n  border-bottom: 1px solid var(--fo-border);\n  position: sticky;\n  top: 70px;\n  z-index: 100;\n}\n.filters-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-input[_ngcontent-%COMP%], \n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family: var(--font-body);\n  background: var(--fo-bg-card);\n  color: var(--fo-text-primary);\n  outline: none;\n  transition: all 0.2s;\n}\n.filter-input[_ngcontent-%COMP%]:focus, \n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.filter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 150px;\n}\n.results-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n}\n.projects-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px 32px;\n}\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(79, 110, 247, 0.15);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.company-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.company-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.company-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin: 0;\n}\n.project-location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-secondary);\n  display: block;\n  margin-top: 2px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-badge.open[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: var(--success);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.status-badge.in_progress[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--warning);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.project-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin: 0;\n  line-height: 1.3;\n}\n.project-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.project-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 16px;\n  background: rgba(79, 110, 247, 0.05);\n  border-radius: var(--radius-sm);\n  border: 1px solid rgba(79, 110, 247, 0.1);\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-primary);\n  font-weight: 600;\n}\n.skills-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: rgba(0, 229, 255, 0.1);\n  color: var(--accent);\n  border: 1px solid rgba(0, 229, 255, 0.2);\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--fo-border);\n  margin-top: auto;\n}\n.project-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-apply[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.4);\n}\n.btn-apply[_ngcontent-%COMP%]:disabled {\n  background: rgba(100, 116, 139, 0.3);\n  color: var(--fo-text-muted);\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  color: var(--fo-text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .projects-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filters-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-input[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .results-count[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n  }\n  .project-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-apply[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=available-projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailableProjectsComponent, { className: "AvailableProjectsComponent", filePath: "app\\frontoffice\\available-projects\\available-projects.component.ts", lineNumber: 10 });
})();

// src/app/frontoffice/project-details/project-details.component.ts
function ProjectDetailsComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 17);
    \u0275\u0275text(5, "Total Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.project.budget, " ", ctx_r1.project.currency, "");
  }
}
function ProjectDetailsComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 17);
    \u0275\u0275text(5, "Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.project.deadline, "MMM d, y"));
  }
}
function ProjectDetailsComponent_div_0_div_42_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r3);
  }
}
function ProjectDetailsComponent_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3");
    \u0275\u0275text(2, "Required Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275template(4, ProjectDetailsComponent_div_0_div_42_span_4_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.project.skills);
  }
}
function ProjectDetailsComponent_div_0_div_71_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const milestone_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", milestone_r5.budget, " ", milestone_r5.currency, "");
  }
}
function ProjectDetailsComponent_div_0_div_71_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const milestone_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(milestone_r5.duration);
  }
}
function ProjectDetailsComponent_div_0_div_71_div_1_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r6);
  }
}
function ProjectDetailsComponent_div_0_div_71_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, ProjectDetailsComponent_div_0_div_71_div_1_div_17_span_1_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const milestone_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", milestone_r5.skills);
  }
}
function ProjectDetailsComponent_div_0_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h3", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275element(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275template(10, ProjectDetailsComponent_div_0_div_71_div_1_div_10_Template, 5, 2, "div", 44)(11, ProjectDetailsComponent_div_0_div_71_div_1_div_11_Template, 5, 1, "div", 44);
    \u0275\u0275elementStart(12, "div", 45)(13, "span", 46);
    \u0275\u0275text(14, "Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, ProjectDetailsComponent_div_0_div_71_div_1_div_17_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(18, "button", 49);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_0_div_71_div_1_Template_button_click_18_listener() {
      const milestone_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openApplicationModal(milestone_r5));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const milestone_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(milestone_r5.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(milestone_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", milestone_r5.status === "open" ? "Open" : milestone_r5.status === "assigned" ? "Assigned" : milestone_r5.status === "in_progress" ? "In Progress" : "Completed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(milestone_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", milestone_r5.budget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", milestone_r5.duration);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(milestone_r5.applicationsCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", milestone_r5.skills && milestone_r5.skills.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", milestone_r5.status !== "open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", milestone_r5.status === "open" ? "Apply for this Milestone" : "Not Available", " ");
  }
}
function ProjectDetailsComponent_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, ProjectDetailsComponent_div_0_div_71_div_1_Template, 20, 11, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.milestones);
  }
}
function ProjectDetailsComponent_div_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No milestones yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "The company hasn't added any milestones to this project yet");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(3, "\u2190 Back to Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "h1", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "span", 17);
    \u0275\u0275text(24, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 15)(28, "span", 16);
    \u0275\u0275text(29, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "span", 17);
    \u0275\u0275text(32, "Team Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, ProjectDetailsComponent_div_0_div_35_Template, 8, 2, "div", 19)(36, ProjectDetailsComponent_div_0_div_36_Template, 9, 4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20)(38, "h3");
    \u0275\u0275text(39, "Project Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, ProjectDetailsComponent_div_0_div_42_Template, 5, 1, "div", 21);
    \u0275\u0275elementStart(43, "div", 22)(44, "div", 23)(45, "span", 24);
    \u0275\u0275text(46, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 25);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 26);
    \u0275\u0275text(50, "Views");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 23)(52, "span", 24);
    \u0275\u0275text(53, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 25);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 26);
    \u0275\u0275text(57, "Total Applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 23)(59, "span", 24);
    \u0275\u0275text(60, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 25);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 26);
    \u0275\u0275text(64, "Milestones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 27)(66, "div", 28)(67, "h2");
    \u0275\u0275text(68, "Project Milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p");
    \u0275\u0275text(70, "Choose which milestone you want to work on and apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(71, ProjectDetailsComponent_div_0_div_71_Template, 2, 1, "div", 29)(72, ProjectDetailsComponent_div_0_div_72_Template, 7, 0, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.project.companyName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.project.projectTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project.companyName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.project.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project.status === "open" ? "\u{1F7E2} Open" : ctx_r1.project.status === "in_progress" ? "\u{1F7E1} In Progress" : "\u{1F534} Closed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.project.location || "Not specified");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.project.numberOfPeopleDemanded, " people");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.budget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.deadline);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.project.detailsOfWork);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.project.skills && ctx_r1.project.skills.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.project.clickCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.project.applicationsCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.milestones.length);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.milestones.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.milestones.length === 0);
  }
}
function ProjectDetailsComponent_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Choose CV file (PDF, DOC, DOCX)");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCvFile.name, " ");
  }
}
function ProjectDetailsComponent_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeCvFile());
    });
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_div_1_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submit Application");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_div_1_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, " Uploading... ");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplicationModal());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Apply for Milestone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 59);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplicationModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "div", 61)(12, "label");
    \u0275\u0275text(13, "Years of Experience *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDetailsComponent_div_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applicationForm.yearsOfExperience, $event) || (ctx_r1.applicationForm.yearsOfExperience = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "label");
    \u0275\u0275text(17, "Upload CV/Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 63)(19, "input", 64, 0);
    \u0275\u0275listener("change", function ProjectDetailsComponent_div_1_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCvFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 65);
    \u0275\u0275element(22, "i", 66);
    \u0275\u0275template(23, ProjectDetailsComponent_div_1_span_23_Template, 2, 0, "span", 67)(24, ProjectDetailsComponent_div_1_span_24_Template, 3, 1, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ProjectDetailsComponent_div_1_button_25_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "Optional: Upload your CV or resume (Max 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 61)(29, "label");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDetailsComponent_div_1_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applicationForm.proposedBudget, $event) || (ctx_r1.applicationForm.proposedBudget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 61)(35, "label");
    \u0275\u0275text(36, "Motivation Letter *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDetailsComponent_div_1_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applicationForm.motivationLetter, $event) || (ctx_r1.applicationForm.motivationLetter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "Minimum 100 characters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 72)(41, "button", 73);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplicationModal());
    });
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 74);
    \u0275\u0275listener("click", function ProjectDetailsComponent_div_1_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitApplication());
    });
    \u0275\u0275template(44, ProjectDetailsComponent_div_1_span_44_Template, 2, 0, "span", 67)(45, ProjectDetailsComponent_div_1_span_45_Template, 3, 0, "span", 67);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedMilestone == null ? null : ctx_r1.selectedMilestone.title);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applicationForm.yearsOfExperience);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.selectedCvFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCvFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCvFile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Proposed Budget (", ctx_r1.selectedMilestone == null ? null : ctx_r1.selectedMilestone.currency, ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applicationForm.proposedBudget);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Suggested: ", ctx_r1.selectedMilestone == null ? null : ctx_r1.selectedMilestone.budget, " ", ctx_r1.selectedMilestone == null ? null : ctx_r1.selectedMilestone.currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applicationForm.motivationLetter);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUploading);
  }
}
var ProjectDetailsComponent = class _ProjectDetailsComponent {
  constructor(route, router, projectsService, milestonesService, authService) {
    this.route = route;
    this.router = router;
    this.projectsService = projectsService;
    this.milestonesService = milestonesService;
    this.authService = authService;
    this.milestones = [];
    this.showApplicationModal = false;
    this.selectedCvFile = null;
    this.isUploading = false;
    this.applicationForm = {
      motivationLetter: "",
      yearsOfExperience: 0,
      cvUrl: "",
      proposedBudget: 0
    };
  }
  ngOnInit() {
    const projectId = Number(this.route.snapshot.paramMap.get("id"));
    this.projectsService.getProjectById(projectId).subscribe((project) => {
      this.project = project;
      if (!this.project) {
        this.router.navigate(["/projects"]);
        return;
      }
      this.projectsService.incrementClickCount(projectId).subscribe();
      this.milestonesService.getMilestonesByProjectId(projectId).subscribe((allMilestones) => {
        this.milestones = allMilestones.filter((m) => m.status === "open");
        console.log("Project details loaded:", {
          projectId,
          totalMilestones: allMilestones.length,
          openMilestones: this.milestones.length
        });
      });
    });
  }
  openApplicationModal(milestone) {
    if (!this.authService.isAuthenticated) {
      alert("Please login to apply for this milestone");
      this.authService.setRedirectUrl(this.router.url);
      this.router.navigate(["/backoffice/login"]);
      return;
    }
    if (milestone.status !== "open") {
      alert("This milestone is not available for applications");
      return;
    }
    this.selectedMilestone = milestone;
    this.selectedCvFile = null;
    this.applicationForm = {
      motivationLetter: "",
      yearsOfExperience: 0,
      cvUrl: "",
      proposedBudget: milestone.budget || 0
    };
    this.showApplicationModal = true;
  }
  closeApplicationModal() {
    this.showApplicationModal = false;
    this.selectedMilestone = void 0;
    this.selectedCvFile = null;
  }
  onCvFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC, and DOCX files are allowed");
        return;
      }
      this.selectedCvFile = file;
      console.log("CV file selected:", file.name, file.size, file.type);
    }
  }
  removeCvFile() {
    this.selectedCvFile = null;
    const fileInput = document.getElementById("cvFile");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  uploadCvFile() {
    return __async(this, null, function* () {
      if (!this.selectedCvFile) {
        return "";
      }
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result;
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(this.selectedCvFile);
      });
    });
  }
  submitApplication() {
    return __async(this, null, function* () {
      console.log("\u{1F50D} submitApplication called");
      console.log("\u{1F50D} Current User:", this.authService.currentUser);
      console.log("\u{1F50D} Current User ID:", this.authService.currentUser?.id);
      console.log("\u{1F50D} Current User ID (string):", String(this.authService.currentUser?.id));
      console.log("\u{1F50D} Current User ID (number):", Number(this.authService.currentUser?.id));
      if (!this.selectedMilestone || !this.project || !this.authService.currentUser) {
        console.error("\u274C Missing required data for application submission");
        console.error("selectedMilestone:", this.selectedMilestone);
        console.error("project:", this.project);
        console.error("currentUser:", this.authService.currentUser);
        return;
      }
      if (!this.applicationForm.motivationLetter || this.applicationForm.yearsOfExperience < 0) {
        alert("Please fill in all required fields");
        return;
      }
      this.isUploading = true;
      try {
        let cvUrl = this.applicationForm.cvUrl;
        if (this.selectedCvFile) {
          cvUrl = yield this.uploadCvFile();
        }
        const application = {
          milestoneId: this.selectedMilestone.id,
          projectId: this.project.id,
          freelancerId: Number(this.authService.currentUser.id),
          freelancerName: this.authService.currentUser.name,
          freelancerEmail: this.authService.currentUser.email || "",
          motivationLetter: this.applicationForm.motivationLetter,
          yearsOfExperience: this.applicationForm.yearsOfExperience,
          cvUrl,
          proposedBudget: this.applicationForm.proposedBudget
        };
        console.log("\u2705 Submitting application with freelancerId:", application.freelancerId);
        console.log("\u2705 Submitting application:", application);
        this.milestonesService.submitApplication(application).subscribe(() => {
          this.milestonesService.getMilestonesByProjectId(this.project.id).subscribe((allMilestones) => {
            this.milestones = allMilestones.filter((m) => m.status === "open");
            console.log("Milestones after application:", this.milestones);
          });
          alert("Application submitted successfully! The company will review your application.");
          this.closeApplicationModal();
          this.isUploading = false;
        }, (error) => {
          console.error("Error submitting application:", error);
          alert("Failed to submit application. Please try again.");
          this.isUploading = false;
        });
      } catch (error) {
        console.error("Error uploading CV:", error);
        alert("Failed to upload CV. Please try again.");
        this.isUploading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/projects"]);
  }
  getStatusClass(status) {
    return status;
  }
  static {
    this.\u0275fac = function ProjectDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CompanyProjectsService), \u0275\u0275directiveInject(MilestonesService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 2, vars: 2, consts: [["cvFileInput", ""], ["class", "project-details-page", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "project-details-page"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "project-info-card"], [1, "card-header"], [1, "company-section"], [1, "company-avatar-large"], [1, "project-title"], [1, "company-name"], [1, "status-badge"], [1, "project-description"], [1, "project-details-grid"], [1, "detail-box"], [1, "detail-icon"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-box", 4, "ngIf"], [1, "work-details-section"], ["class", "skills-section", 4, "ngIf"], [1, "stats-section"], [1, "stat-item"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "milestones-section"], [1, "section-header"], ["class", "milestones-grid", 4, "ngIf"], ["class", "empty-milestones", 4, "ngIf"], [1, "skills-section"], [1, "skills-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"], [1, "milestones-grid"], ["class", "milestone-card", 4, "ngFor", "ngForOf"], [1, "milestone-card"], [1, "milestone-header"], [1, "milestone-title"], [1, "milestone-status"], [1, "dot"], [1, "milestone-description"], [1, "milestone-info"], ["class", "info-item", 4, "ngIf"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["class", "milestone-skills", 4, "ngIf"], [1, "btn-apply-milestone", 3, "click", "disabled"], [1, "milestone-skills"], ["class", "skill-badge", 4, "ngFor", "ngForOf"], [1, "skill-badge"], [1, "empty-milestones"], [1, "empty-icon"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-subtitle"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "number", "min", "0", "placeholder", "Enter your years of experience", 3, "ngModelChange", "ngModel"], [1, "file-upload-wrapper"], ["type", "file", "id", "cvFile", "accept", ".pdf,.doc,.docx", 3, "change"], ["for", "cvFile", 1, "file-upload-label"], [1, "fas", "fa-cloud-upload-alt"], [4, "ngIf"], ["class", "file-selected", 4, "ngIf"], ["class", "btn-remove-file", "type", "button", 3, "click", 4, "ngIf"], ["type", "number", "min", "0", "placeholder", "Your proposed budget", 3, "ngModelChange", "ngModel"], ["rows", "8", "placeholder", "Tell the company why you're the best fit for this milestone. Include:\n- Your relevant experience\n- Why you're interested in this project\n- How you plan to approach this milestone\n- Any questions or clarifications", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "file-selected"], [1, "fas", "fa-file-pdf"], ["type", "button", 1, "btn-remove-file", 3, "click"], [1, "fas", "fa-times"], [1, "fas", "fa-spinner", "fa-spin"]], template: function ProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectDetailsComponent_div_0_Template, 73, 18, "div", 1)(1, ProjectDetailsComponent_div_1_Template, 46, 13, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.project);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showApplicationModal);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, DatePipe], styles: ["\n\n.project-details-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 100px 32px 60px;\n}\n.page-header[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto 24px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary);\n  border: 1px solid rgba(79, 110, 247, 0.3);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.2);\n  transform: translateX(-4px);\n}\n.project-info-card[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto 40px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.company-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.company-avatar-large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-md);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent-secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.project-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  margin: 0;\n  line-height: 1.2;\n}\n.company-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--fo-text-secondary);\n  margin: 4px 0 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-badge.open[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: var(--success);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.status-badge.in_progress[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--warning);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.project-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--fo-text-secondary);\n  line-height: 1.7;\n  margin: 0;\n}\n.project-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.detail-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: rgba(79, 110, 247, 0.05);\n  border: 1px solid rgba(79, 110, 247, 0.1);\n  border-radius: var(--radius-sm);\n}\n.detail-box[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.detail-box[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--fo-text-primary);\n  font-weight: 600;\n  margin-top: 2px;\n}\n.work-details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.skills-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin: 0 0 12px;\n}\n.work-details-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.skills-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--fo-text-secondary);\n  line-height: 1.7;\n  margin: 0;\n}\n.skills-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(0, 229, 255, 0.1);\n  color: var(--accent);\n  border: 1px solid rgba(0, 229, 255, 0.2);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.stats-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 20px;\n  background: rgba(79, 110, 247, 0.05);\n  border-radius: var(--radius-sm);\n  border: 1px solid rgba(79, 110, 247, 0.1);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-secondary);\n}\n.milestones-section[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  margin: 0 0 8px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--fo-text-secondary);\n  margin: 0;\n}\n.milestones-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 24px;\n}\n.milestone-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.milestone-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(79, 110, 247, 0.15);\n  border-color: rgba(79, 110, 247, 0.4);\n}\n.milestone-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.milestone-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin: 0;\n  line-height: 1.3;\n}\n.milestone-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.milestone-status[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n}\n.milestone-status.open[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.milestone-status.open[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.milestone-status.assigned[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.milestone-status.assigned[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.milestone-status.in_progress[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  color: #0891b2;\n}\n.milestone-status.in_progress[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #06b6d4;\n}\n.milestone-status.completed[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #9333ea;\n}\n.milestone-status.completed[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #a855f7;\n}\n.milestone-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.milestone-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-primary);\n  font-weight: 600;\n}\n.milestone-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.skill-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary-light);\n  border: 1px solid rgba(79, 110, 247, 0.2);\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.btn-apply-milestone[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: auto;\n}\n.btn-apply-milestone[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.4);\n}\n.btn-apply-milestone[_ngcontent-%COMP%]:disabled {\n  background: rgba(100, 116, 139, 0.3);\n  color: var(--fo-text-muted);\n  cursor: not-allowed;\n}\n.empty-milestones[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n}\n.empty-milestones[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-milestones[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  color: var(--fo-text-primary);\n  margin-bottom: 8px;\n}\n.empty-milestones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n  backdrop-filter: blur(8px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px;\n  border-bottom: 1px solid var(--fo-border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n  margin: 4px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid var(--fo-border);\n  background: transparent;\n  color: var(--fo-text-secondary);\n  font-size: 18px;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: var(--danger);\n  color: var(--danger);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family: var(--font-body);\n  background: var(--fo-bg-secondary);\n  color: var(--fo-text-primary);\n  outline: none;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--fo-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n  line-height: 1.6;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--fo-border);\n}\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--fo-border);\n  color: var(--fo-text-secondary);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--fo-text-secondary);\n  color: var(--fo-text-primary);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border: none;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(79, 110, 247, 0.4);\n}\n@media (max-width: 768px) {\n  .project-details-page[_ngcontent-%COMP%] {\n    padding: 80px 16px 40px;\n  }\n  .project-info-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .project-details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .milestones-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .milestone-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.file-upload-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 20px;\n  background: var(--fo-bg-primary);\n  border: 2px dashed var(--fo-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary);\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: rgba(79, 110, 247, 0.05);\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%]   .file-selected[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%]   .file-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .btn-remove-file[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fee2e2;\n  color: #ef4444;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .btn-remove-file[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n  transform: scale(1.1);\n}\n.file-upload-wrapper[_ngcontent-%COMP%]   .btn-remove-file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n}\n/*# sourceMappingURL=project-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailsComponent, { className: "ProjectDetailsComponent", filePath: "app\\frontoffice\\project-details\\project-details.component.ts", lineNumber: 14 });
})();

// src/app/frontoffice/my-applications/my-applications.component.ts
function MyApplicationsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No applications yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start applying to milestones to see them here");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_div_51_div_26_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u2713 Confirmed");
    \u0275\u0275elementEnd();
  }
}
function MyApplicationsComponent_div_51_div_26_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r1.interview.notes, "");
  }
}
function MyApplicationsComponent_div_51_div_26_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_51_div_26_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const app_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmInterview(app_r1.id));
    });
    \u0275\u0275text(1, " Confirm Attendance ");
    \u0275\u0275elementEnd();
  }
}
function MyApplicationsComponent_div_51_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h4");
    \u0275\u0275text(3, "\u{1F4C5} Interview Scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MyApplicationsComponent_div_51_div_26_span_4_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35)(6, "p")(7, "strong");
    \u0275\u0275text(8, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "strong");
    \u0275\u0275text(16, "Meet Link:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 36);
    \u0275\u0275text(18, "Join Meeting");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, MyApplicationsComponent_div_51_div_26_p_19_Template, 4, 1, "p", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MyApplicationsComponent_div_51_div_26_button_20_Template, 2, 0, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", app_r1.interview.confirmedByFreelancer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(app_r1.interview.date), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", app_r1.interview.time, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("href", app_r1.interview.meetLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", app_r1.interview.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !app_r1.interview.confirmedByFreelancer);
  }
}
function MyApplicationsComponent_div_51_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h4");
    \u0275\u0275text(6, "Congratulations! You've been accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Access your workspace to collaborate with the team and submit your work");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_51_div_27_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const app_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openWorkspace(app_r1));
    });
    \u0275\u0275text(10, " Open Workspace \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25)(10, "div", 26)(11, "div", 27)(12, "span", 28);
    \u0275\u0275text(13, "Applied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 27)(17, "span", 28);
    \u0275\u0275text(18, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27)(22, "span", 28);
    \u0275\u0275text(23, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, MyApplicationsComponent_div_51_div_26_Template, 21, 6, "div", 30)(27, MyApplicationsComponent_div_51_div_27_Template, 11, 0, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const app_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(app_r1.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r2.getMilestone(app_r1.milestoneId)) == null ? null : tmp_3_0.title) || "Milestone");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r2.getProject(app_r1.projectId)) == null ? null : tmp_4_0.projectTitle) || "Project");
    \u0275\u0275advance();
    \u0275\u0275classMap(app_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(app_r1.status), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(app_r1.appliedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", app_r1.proposedBudget || 0, " TND");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", app_r1.yearsOfExperience, " years");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", app_r1.interview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", app_r1.status === "accepted");
  }
}
function MyApplicationsComponent_div_52_div_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.freelancer_name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.freelancer_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.freelancer_email);
  }
}
function MyApplicationsComponent_div_52_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "p");
    \u0275\u0275text(2, "Loading team members...");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_div_52_div_25_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r7, " ");
  }
}
function MyApplicationsComponent_div_52_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "h3");
    \u0275\u0275text(4, "\u{1F465} Team Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275template(6, MyApplicationsComponent_div_52_div_25_div_6_Template, 8, 3, "div", 64)(7, MyApplicationsComponent_div_52_div_25_div_7_Template, 3, 0, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 62)(9, "h3");
    \u0275\u0275text(10, "\u{1F4DD} Milestone Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 66)(12, "p")(13, "strong");
    \u0275\u0275text(14, "Description:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "strong");
    \u0275\u0275text(27, "Skills:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 67);
    \u0275\u0275template(29, MyApplicationsComponent_div_52_div_25_span_29_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.teamMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.teamMembers.length === 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_4_0.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (tmp_5_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_5_0.budget, " ", (tmp_5_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_5_0.currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_6_0.duration, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", (tmp_7_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_7_0.skills);
  }
}
function MyApplicationsComponent_div_52_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "div", 87)(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 90);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("own-message", msg_r9.user_id === (ctx_r2.authService.currentUser == null ? null : ctx_r2.authService.currentUser.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r9.user_name.charAt(0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(msg_r9.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(msg_r9.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r9.message);
  }
}
function MyApplicationsComponent_div_52_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "p");
    \u0275\u0275text(2, "No messages yet. Start the conversation!");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_div_52_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 78);
    \u0275\u0275template(3, MyApplicationsComponent_div_52_div_26_div_3_Template, 11, 6, "div", 79)(4, MyApplicationsComponent_div_52_div_26_div_4_Template, 3, 0, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 81)(6, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_26_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MyApplicationsComponent_div_52_div_26_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 83);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275text(8, "Send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.chatMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.chatMessages.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
  }
}
function MyApplicationsComponent_div_52_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "h3");
    \u0275\u0275text(3, "\u{1F4E4} Submit Your Work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 94);
    \u0275\u0275text(5, "Upload your completed work for review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 95)(7, "label");
    \u0275\u0275text(8, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_27_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.submissionForm.title, $event) || (ctx_r2.submissionForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 95)(11, "label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 97);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_27_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.submissionForm.description, $event) || (ctx_r2.submissionForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 95)(15, "label");
    \u0275\u0275text(16, "File URL *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_27_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.submissionForm.file_url, $event) || (ctx_r2.submissionForm.file_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "Provide a link to your work (Google Drive, GitHub, Figma, etc.)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 99)(21, "div", 95)(22, "label");
    \u0275\u0275text(23, "File Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_27_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.submissionForm.file_name, $event) || (ctx_r2.submissionForm.file_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 95)(26, "label");
    \u0275\u0275text(27, "File Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function MyApplicationsComponent_div_52_div_27_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.submissionForm.file_type, $event) || (ctx_r2.submissionForm.file_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 102);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_div_27_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitWork());
    });
    \u0275\u0275text(30, " Submit Work ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.submissionForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.submissionForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.submissionForm.file_url);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.submissionForm.file_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.submissionForm.file_type);
  }
}
function MyApplicationsComponent_div_52_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "p");
    \u0275\u0275text(2, "No submissions yet. Submit your work to get started!");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_div_52_div_28_div_4_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submission_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", submission_r11.file_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CE} ", submission_r11.file_name || "View File", " ");
  }
}
function MyApplicationsComponent_div_52_div_28_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "strong");
    \u0275\u0275text(2, "Feedback:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const submission_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(submission_r11.feedback);
  }
}
function MyApplicationsComponent_div_52_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 111)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MyApplicationsComponent_div_52_div_28_div_4_a_11_Template, 2, 2, "a", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MyApplicationsComponent_div_52_div_28_div_4_div_12_Template, 5, 1, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submission_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(submission_r11.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(submission_r11.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getSubmissionStatusLabel(submission_r11.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r11.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx_r2.formatDate(submission_r11.submitted_at), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r11.file_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submission_r11.feedback);
  }
}
function MyApplicationsComponent_div_52_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "h3");
    \u0275\u0275text(2, "\u{1F4CB} My Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MyApplicationsComponent_div_52_div_28_div_3_Template, 3, 0, "div", 104)(4, MyApplicationsComponent_div_52_div_28_div_4_Template, 13, 8, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.mySubmissions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.mySubmissions);
  }
}
function MyApplicationsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeWorkspace());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "div", 49)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 50);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeWorkspace());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51)(12, "button", 52);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab("overview"));
    });
    \u0275\u0275text(13, " \u{1F4CA} Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 52);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab("chat"));
    });
    \u0275\u0275text(15, " \u{1F4AC} Team Chat ");
    \u0275\u0275elementStart(16, "span", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 52);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab("submit"));
    });
    \u0275\u0275text(19, " \u{1F4E4} Submit Work ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 52);
    \u0275\u0275listener("click", function MyApplicationsComponent_div_52_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab("submissions"));
    });
    \u0275\u0275text(21, " \u{1F4CB} My Submissions ");
    \u0275\u0275elementStart(22, "span", 54);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 55);
    \u0275\u0275template(25, MyApplicationsComponent_div_52_div_25_Template, 30, 7, "div", 56)(26, MyApplicationsComponent_div_52_div_26_Template, 9, 3, "div", 57)(27, MyApplicationsComponent_div_52_div_27_Template, 31, 5, "div", 58)(28, MyApplicationsComponent_div_52_div_28_Template, 5, 2, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u{1F680} ", (tmp_1_0 = ctx_r2.getMilestone(ctx_r2.selectedApplication.milestoneId)) == null ? null : tmp_1_0.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.getProject(ctx_r2.selectedApplication.projectId)) == null ? null : tmp_2_0.projectTitle);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "chat");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.teamMembers.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab === "submit");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "submissions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.mySubmissions.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "chat");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "submit");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "submissions");
  }
}
var MyApplicationsComponent = class _MyApplicationsComponent {
  constructor(milestonesService, projectsService, authService, workspaceService, router) {
    this.milestonesService = milestonesService;
    this.projectsService = projectsService;
    this.authService = authService;
    this.workspaceService = workspaceService;
    this.router = router;
    this.applications = [];
    this.filteredApplications = [];
    this.selectedStatus = "all";
    this.milestones = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.showWorkspace = false;
    this.activeTab = "overview";
    this.chatMessages = [];
    this.newMessage = "";
    this.teamMembers = [];
    this.submissionForm = {
      title: "",
      description: "",
      file_url: "",
      file_name: "",
      file_type: ""
    };
    this.mySubmissions = [];
  }
  ngOnInit() {
    this.authService.checkAuth();
    if (!this.authService.isAuthenticated || !this.authService.currentUser) {
      this.authService.setRedirectUrl(this.router.url);
      this.router.navigate(["/backoffice/login"]);
      return;
    }
    this.loadData();
  }
  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }
  loadData() {
    console.log("Loading data...");
    console.log("Current user:", this.authService.currentUser);
    if (this.authService.currentUser) {
      this.projectsService.getProjects().subscribe({
        next: (projects) => {
          console.log("Projects loaded:", projects.length);
          projects.forEach((p) => this.projects.set(p.id, p));
        },
        error: (err) => {
          console.error("Failed to load projects:", err);
        }
      });
      this.milestonesService.getAllMilestones().subscribe({
        next: (milestones) => {
          console.log("Milestones loaded:", milestones.length);
          milestones.forEach((m) => this.milestones.set(m.id, m));
        },
        error: (err) => {
          console.error("Failed to load milestones:", err);
        }
      });
      const userId = this.authService.currentUser.id;
      console.log("User ID:", userId, "Type:", typeof userId);
      if (userId) {
        const numericUserId = Number(userId);
        console.log("Fetching applications for user:", numericUserId);
        this.milestonesService.getApplicationsByFreelancer(numericUserId).subscribe({
          next: (applications) => {
            console.log("Applications loaded:", applications);
            this.applications = applications;
            this.applyFilters();
          },
          error: (err) => {
            console.error("Failed to load applications:", err);
            this.applications = [];
            this.applyFilters();
          }
        });
      } else {
        console.warn("User ID not available");
        this.applications = [];
        this.applyFilters();
      }
    }
  }
  applyFilters() {
    this.filteredApplications = this.applications.filter((app) => {
      const matchStatus = this.selectedStatus === "all" || app.status === this.selectedStatus;
      return matchStatus;
    });
  }
  getMilestone(milestoneId) {
    return this.milestones.get(milestoneId);
  }
  getProject(projectId) {
    return this.projects.get(projectId);
  }
  confirmInterview(applicationId) {
    if (confirm("Are you sure you want to confirm your attendance for this interview?")) {
      this.milestonesService.confirmInterview(applicationId).subscribe(() => {
        this.loadData();
        alert("Interview confirmed! The company has been notified.");
      });
    }
  }
  openWorkspace(application) {
    if (application.status !== "accepted") {
      alert("Workspace is only available for accepted applications");
      return;
    }
    this.selectedApplication = application;
    this.showWorkspace = true;
    this.activeTab = "overview";
    this.loadWorkspaceData();
  }
  closeWorkspace() {
    this.showWorkspace = false;
    this.selectedApplication = void 0;
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }
  loadWorkspaceData() {
    if (!this.selectedApplication)
      return;
    this.workspaceService.getTeamMembers(this.selectedApplication.milestoneId).subscribe({
      next: (team) => {
        this.teamMembers = team;
      },
      error: (err) => {
        console.error("Failed to load team members:", err);
        this.teamMembers = [];
      }
    });
    if (this.authService.currentUser) {
      const userId = Number(this.authService.currentUser.id);
      this.workspaceService.getMySubmissions(userId).subscribe({
        next: (submissions) => {
          this.mySubmissions = submissions.filter((s) => s.milestone_id === this.selectedApplication?.milestoneId);
        },
        error: (err) => {
          console.error("Failed to load submissions:", err);
          this.mySubmissions = [];
        }
      });
    }
  }
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "chat" && this.selectedApplication) {
      this.loadChat();
    }
  }
  loadChat() {
    if (!this.selectedApplication)
      return;
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
    this.chatSubscription = this.workspaceService.pollChatMessages(this.selectedApplication.milestoneId).subscribe({
      next: (messages) => {
        this.chatMessages = messages;
        setTimeout(() => this.scrollChatToBottom(), 100);
      },
      error: (err) => {
        console.error("Failed to load chat messages:", err);
        this.chatMessages = [];
        if (this.chatSubscription) {
          this.chatSubscription.unsubscribe();
        }
      }
    });
  }
  sendMessage() {
    if (!this.newMessage.trim() || !this.selectedApplication || !this.authService.currentUser)
      return;
    const userId = Number(this.authService.currentUser.id);
    this.workspaceService.sendMessage(this.selectedApplication.milestoneId, userId, this.authService.currentUser.name, "freelancer", this.newMessage).subscribe({
      next: () => {
        this.newMessage = "";
      },
      error: (err) => {
        console.error("Failed to send message:", err);
        alert("Failed to send message. Please try again.");
      }
    });
  }
  scrollChatToBottom() {
    const chatContainer = document.querySelector(".chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  submitWork() {
    if (!this.submissionForm.title || !this.selectedApplication || !this.authService.currentUser) {
      alert("Please fill in all required fields");
      return;
    }
    const userId = Number(this.authService.currentUser.id);
    const submission = __spreadValues({
      application_id: this.selectedApplication.id,
      milestone_id: this.selectedApplication.milestoneId,
      freelancer_id: userId
    }, this.submissionForm);
    this.workspaceService.submitWork(submission).subscribe({
      next: () => {
        alert("Work submitted successfully!");
        this.submissionForm = {
          title: "",
          description: "",
          file_url: "",
          file_name: "",
          file_type: ""
        };
        this.loadWorkspaceData();
        this.activeTab = "submissions";
      },
      error: (err) => {
        console.error("Failed to submit work:", err);
        alert("Failed to submit work. Please try again.");
      }
    });
  }
  getStatusClass(status) {
    return status;
  }
  getStatusLabel(status) {
    const labels = {
      "pending": "Under Review",
      "interview_scheduled": "Interview Scheduled",
      "interview_confirmed": "Interview Confirmed",
      "accepted": "Accepted",
      "rejected": "Rejected"
    };
    return labels[status] || status;
  }
  getSubmissionStatusLabel(status) {
    const labels = {
      "pending": "Pending Review",
      "approved": "Approved",
      "revision_requested": "Revision Requested",
      "rejected": "Rejected"
    };
    return labels[status] || status;
  }
  getPendingCount() {
    return this.applications.filter((a) => a.status === "pending").length;
  }
  getInterviewCount() {
    return this.applications.filter((a) => a.status === "interview_scheduled" || a.status === "interview_confirmed").length;
  }
  getAcceptedCount() {
    return this.applications.filter((a) => a.status === "accepted").length;
  }
  getRejectedCount() {
    return this.applications.filter((a) => a.status === "rejected").length;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  formatTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function MyApplicationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyApplicationsComponent)(\u0275\u0275directiveInject(MilestonesService), \u0275\u0275directiveInject(CompanyProjectsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(WorkspaceService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyApplicationsComponent, selectors: [["app-my-applications"]], decls: 53, vars: 15, consts: [[1, "my-applications-page"], [1, "page-header"], [1, "header-content"], [1, "stats-grid"], [1, "stat-card", "pending"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "interview"], [1, "stat-card", "accepted"], [1, "stat-card", "rejected"], [1, "filters"], [1, "filter-btn", 3, "click"], [1, "applications-container"], ["class", "empty-state", 4, "ngIf"], ["class", "application-card", 3, "class", 4, "ngFor", "ngForOf"], ["class", "workspace-modal", 4, "ngIf"], [1, "empty-state"], [1, "empty-icon"], [1, "application-card"], [1, "card-header"], [1, "milestone-info"], [1, "project-name"], [1, "status-badge"], [1, "card-body"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["class", "interview-section", 4, "ngIf"], ["class", "workspace-access", 4, "ngIf"], [1, "interview-section"], [1, "interview-header"], ["class", "confirmed-badge", 4, "ngIf"], [1, "interview-details"], ["target", "_blank", 3, "href"], [4, "ngIf"], ["class", "btn-confirm", 3, "click", 4, "ngIf"], [1, "confirmed-badge"], [1, "btn-confirm", 3, "click"], [1, "workspace-access"], [1, "workspace-info"], [1, "workspace-icon"], [1, "btn-workspace", 3, "click"], [1, "workspace-modal"], [1, "workspace-overlay", 3, "click"], [1, "workspace-container"], [1, "workspace-header"], [1, "workspace-title"], [1, "btn-close", 3, "click"], [1, "workspace-tabs"], [1, "tab-btn", 3, "click"], [1, "team-count"], [1, "submission-count"], [1, "workspace-content"], ["class", "tab-content", 4, "ngIf"], ["class", "tab-content chat-tab", 4, "ngIf"], ["class", "tab-content submit-tab", 4, "ngIf"], ["class", "tab-content submissions-tab", 4, "ngIf"], [1, "tab-content"], [1, "overview-grid"], [1, "overview-card"], [1, "team-list"], ["class", "team-member", 4, "ngFor", "ngForOf"], ["class", "empty-team", 4, "ngIf"], [1, "milestone-details"], [1, "skills-list"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "team-member"], [1, "member-avatar"], [1, "member-info"], [1, "member-name"], [1, "member-email"], [1, "empty-team"], [1, "skill-tag"], [1, "tab-content", "chat-tab"], [1, "chat-container"], [1, "chat-messages"], ["class", "chat-message", 3, "own-message", 4, "ngFor", "ngForOf"], ["class", "empty-chat", 4, "ngIf"], [1, "chat-input"], ["type", "text", "placeholder", "Type your message...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-send", 3, "click"], [1, "chat-message"], [1, "message-avatar"], [1, "message-content"], [1, "message-header"], [1, "message-author"], [1, "message-time"], [1, "message-text"], [1, "empty-chat"], [1, "tab-content", "submit-tab"], [1, "submit-form"], [1, "form-description"], [1, "form-group"], ["type", "text", "placeholder", "e.g., Homepage Design - Final Version", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Describe what you've completed...", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "https://drive.google.com/... or https://github.com/...", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "placeholder", "project-files.zip", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ZIP, PDF, etc.", 3, "ngModelChange", "ngModel"], [1, "btn-submit-work", 3, "click"], [1, "tab-content", "submissions-tab"], ["class", "empty-submissions", 4, "ngIf"], ["class", "submission-card", 4, "ngFor", "ngForOf"], [1, "empty-submissions"], [1, "submission-card"], [1, "submission-header"], [1, "submission-status"], [1, "submission-description"], [1, "submission-meta"], ["target", "_blank", "class", "file-link", 3, "href", 4, "ngIf"], ["class", "submission-feedback", 4, "ngIf"], ["target", "_blank", 1, "file-link", 3, "href"], [1, "submission-feedback"]], template: function MyApplicationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "\u{1F4CB} My Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Track your milestone applications and collaborate with your team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5);
        \u0275\u0275text(10, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "span", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 8);
        \u0275\u0275text(15, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 5);
        \u0275\u0275text(18, "\u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6)(20, "span", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 8);
        \u0275\u0275text(23, "Interviews");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 5);
        \u0275\u0275text(26, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 6)(28, "span", 7);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 8);
        \u0275\u0275text(31, "Accepted");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 11)(33, "div", 5);
        \u0275\u0275text(34, "\u274C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 6)(36, "span", 7);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 8);
        \u0275\u0275text(39, "Rejected");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 12)(41, "button", 13);
        \u0275\u0275listener("click", function MyApplicationsComponent_Template_button_click_41_listener() {
          ctx.selectedStatus = "all";
          return ctx.applyFilters();
        });
        \u0275\u0275text(42, " All Applications ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 13);
        \u0275\u0275listener("click", function MyApplicationsComponent_Template_button_click_43_listener() {
          ctx.selectedStatus = "pending";
          return ctx.applyFilters();
        });
        \u0275\u0275text(44, " Pending ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 13);
        \u0275\u0275listener("click", function MyApplicationsComponent_Template_button_click_45_listener() {
          ctx.selectedStatus = "accepted";
          return ctx.applyFilters();
        });
        \u0275\u0275text(46, " Accepted ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 13);
        \u0275\u0275listener("click", function MyApplicationsComponent_Template_button_click_47_listener() {
          ctx.selectedStatus = "interview_scheduled";
          return ctx.applyFilters();
        });
        \u0275\u0275text(48, " Interviews ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 14);
        \u0275\u0275template(50, MyApplicationsComponent_div_50_Template, 7, 0, "div", 15)(51, MyApplicationsComponent_div_51_Template, 28, 12, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, MyApplicationsComponent_div_52_Template, 29, 16, "div", 17);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.getPendingCount());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.getInterviewCount());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.getAcceptedCount());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.getRejectedCount());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.selectedStatus === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedStatus === "pending");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedStatus === "accepted");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedStatus === "interview_scheduled");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.filteredApplications.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredApplications);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showWorkspace && ctx.selectedApplication);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.my-applications-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  padding: 40px 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 40px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.3);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.stat-card.pending[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.stat-card.interview[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n}\n.stat-card.accepted[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.stat-card.rejected[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.filters[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 24px;\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  color: var(--fo-text-secondary);\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.applications-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.application-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.application-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: 0 4px 12px rgba(79, 110, 247, 0.3);\n}\n.application-card.accepted[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid var(--fo-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.interview_scheduled[_ngcontent-%COMP%], \n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.interview_confirmed[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.accepted[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.application-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.application-card[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.05);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: var(--fo-text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%]   .confirmed-badge[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1),\n      rgba(59, 130, 246, 0.1));\n  border: 2px solid #10b981;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .btn-workspace[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #3b82f6);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .btn-workspace[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n}\n.workspace-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.workspace-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n}\n.workspace-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--fo-bg-card);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.workspace-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid var(--fo-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.workspace-header[_ngcontent-%COMP%]   .workspace-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n}\n.workspace-header[_ngcontent-%COMP%]   .workspace-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.workspace-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 32px;\n  color: var(--fo-text-muted);\n  cursor: pointer;\n  line-height: 1;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.workspace-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--fo-text-primary);\n}\n.workspace-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 24px;\n  border-bottom: 1px solid var(--fo-border);\n  gap: 8px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 16px 20px;\n  color: var(--fo-text-secondary);\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn[_ngcontent-%COMP%]   .team-count[_ngcontent-%COMP%], \n.tab-btn[_ngcontent-%COMP%]   .submission-count[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n.workspace-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n}\n.overview-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  padding: 20px;\n}\n.overview-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.team-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.team-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n}\n.team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.empty-team[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: var(--fo-text-muted);\n}\n.milestone-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: var(--fo-text-secondary);\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.1);\n  color: var(--primary);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.chat-message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.chat-message.own-message[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat-message.own-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.chat-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  max-width: 70%;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.empty-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--fo-text-muted);\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  border-top: 1px solid var(--fo-border);\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  color: var(--fo-text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.chat-input[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-input[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.submit-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.submit-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-description[_ngcontent-%COMP%] {\n  margin: 0 0 32px 0;\n  color: var(--fo-text-secondary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--fo-border);\n  color: var(--fo-text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.submit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.submit-form[_ngcontent-%COMP%]   .btn-submit-work[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.submit-form[_ngcontent-%COMP%]   .btn-submit-work[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n.submissions-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n}\n.submission-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--fo-border);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.approved[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.revision_requested[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: var(--fo-text-muted);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: rgba(59, 130, 246, 0.1);\n  border-left: 3px solid #3b82f6;\n  border-radius: 4px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fo-text-primary);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  color: var(--fo-text-secondary);\n  font-size: 14px;\n}\n.empty-submissions[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--fo-text-muted);\n}\n.page-header[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 40px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  font-size: 16px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.stat-card.pending[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.stat-card.interview[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n}\n.stat-card.accepted[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.stat-card.rejected[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.filters[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 24px;\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  color: var(--text-secondary);\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.applications-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.application-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.application-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.application-card.accepted[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .milestone-info[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.interview_scheduled[_ngcontent-%COMP%], \n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.interview_confirmed[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.accepted[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.application-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.application-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.application-card[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.application-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.05);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: var(--text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-header[_ngcontent-%COMP%]   .confirmed-badge[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .interview-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.application-card[_ngcontent-%COMP%]   .interview-section[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1),\n      rgba(59, 130, 246, 0.1));\n  border: 2px solid #10b981;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .btn-workspace[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #3b82f6);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.application-card[_ngcontent-%COMP%]   .workspace-access[_ngcontent-%COMP%]   .btn-workspace[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  font-size: 16px;\n}\n.workspace-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.workspace-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n}\n.workspace-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.workspace-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.workspace-header[_ngcontent-%COMP%]   .workspace-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.workspace-header[_ngcontent-%COMP%]   .workspace-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.workspace-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 32px;\n  color: var(--text-muted);\n  cursor: pointer;\n  line-height: 1;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.workspace-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n}\n.workspace-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 24px;\n  border-bottom: 1px solid var(--border);\n  gap: 8px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 16px 20px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn[_ngcontent-%COMP%]   .team-count[_ngcontent-%COMP%], \n.tab-btn[_ngcontent-%COMP%]   .submission-count[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n.workspace-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n}\n.overview-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px;\n}\n.overview-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.team-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.team-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n}\n.team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.milestone-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.1);\n  color: var(--primary);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.chat-message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.chat-message.own-message[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat-message.own-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.chat-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 12px;\n  max-width: 70%;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n.chat-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.empty-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  border-top: 1px solid var(--border);\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.chat-input[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-input[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.submit-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.submit-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-description[_ngcontent-%COMP%] {\n  margin: 0 0 32px 0;\n  color: var(--text-secondary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.submit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.submit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.submit-form[_ngcontent-%COMP%]   .btn-submit-work[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.submit-form[_ngcontent-%COMP%]   .btn-submit-work[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n.submissions-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.submission-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.approved[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.revision_requested[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-header[_ngcontent-%COMP%]   .submission-status.rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-meta[_ngcontent-%COMP%]   .file-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: rgba(59, 130, 246, 0.1);\n  border-left: 3px solid #3b82f6;\n  border-radius: 4px;\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.submission-card[_ngcontent-%COMP%]   .submission-feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.empty-submissions[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=my-applications.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyApplicationsComponent, { className: "MyApplicationsComponent", filePath: "app\\frontoffice\\my-applications\\my-applications.component.ts", lineNumber: 16 });
})();

// src/app/frontoffice/services/ai-recommendations.service.ts
var AiRecommendationsService = class _AiRecommendationsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.paymentsAdminBaseUrl;
  }
  getRecommendedFreelancers(projectId, limit = 10) {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/recommended-freelancers?limit=${limit}`);
  }
  getRecommendedProjects(freelancerId, limit = 10) {
    return this.http.get(`${this.apiUrl}/freelancers/${freelancerId}/recommended-projects?limit=${limit}`);
  }
  static {
    this.\u0275fac = function AiRecommendationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiRecommendationsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiRecommendationsService, factory: _AiRecommendationsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/ai-recommendations/ai-recommendations.component.ts
var _c04 = (a0) => ["/frontoffice/projects", a0];
function AiRecommendationsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Finding best matches for you...");
    \u0275\u0275elementEnd()();
  }
}
function AiRecommendationsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function AiRecommendationsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No recommendations available at the moment");
    \u0275\u0275elementEnd()();
  }
}
function AiRecommendationsComponent_div_10_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r2, " ");
  }
}
function AiRecommendationsComponent_div_10_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const project_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("matched", project_r4.matching_skills.includes(skill_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function AiRecommendationsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 23)(14, "strong");
    \u0275\u0275element(15, "i", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 25);
    \u0275\u0275template(18, AiRecommendationsComponent_div_10_div_1_span_18_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27)(20, "strong");
    \u0275\u0275text(21, "Required Skills:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275template(23, AiRecommendationsComponent_div_10_div_1_span_23_Template, 2, 3, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 29)(25, "div", 30);
    \u0275\u0275element(26, "i", 31);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 30);
    \u0275\u0275element(30, "i", 32);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 30);
    \u0275\u0275element(34, "i", 33);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 30);
    \u0275\u0275element(39, "i", 34);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 35)(43, "h4");
    \u0275\u0275text(44, "Match Score Breakdown:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 36)(46, "span");
    \u0275\u0275text(47, "Skills Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 37);
    \u0275\u0275element(49, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 39);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 36)(53, "span");
    \u0275\u0275text(54, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 37);
    \u0275\u0275element(56, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 39);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 36)(60, "span");
    \u0275\u0275text(61, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 37);
    \u0275\u0275element(63, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 39);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 40)(67, "button", 41);
    \u0275\u0275element(68, "i", 42);
    \u0275\u0275text(69, " View Project ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 43);
    \u0275\u0275element(71, "i", 44);
    \u0275\u0275text(72, " Apply Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getMatchScoreColor(project_r4.match_score));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r4.match_score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMatchScoreLabel(project_r4.match_score));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.project_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.company_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", project_r4.matching_skills.length, " Matching Skills: ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", project_r4.matching_skills);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", project_r4.skills);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", project_r4.budget, " ", project_r4.currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r4.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 25, project_r4.deadline, "MMM d, y"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(project_r4.category);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("width", project_r4.score_breakdown.skills * 2.5, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r4.score_breakdown.skills, "/40");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", project_r4.score_breakdown.experience * 5, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r4.score_breakdown.experience, "/20");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", project_r4.score_breakdown.rating * 5, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r4.score_breakdown.rating, "/20");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c04, project_r4.id));
  }
}
function AiRecommendationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, AiRecommendationsComponent_div_10_div_1_Template, 73, 30, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recommendations);
  }
}
var AiRecommendationsComponent = class _AiRecommendationsComponent {
  constructor(aiService) {
    this.aiService = aiService;
    this.recommendations = [];
    this.loading = false;
    this.error = null;
    this.freelancerId = 1;
  }
  ngOnInit() {
    this.loadRecommendations();
  }
  loadRecommendations() {
    this.loading = true;
    this.error = null;
    this.aiService.getRecommendedProjects(this.freelancerId, 10).subscribe({
      next: (data) => {
        console.log("AI Recommendations loaded:", data);
        this.recommendations = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading recommendations:", err);
        this.error = "Failed to load recommendations. Please make sure the database migration has been run.";
        this.loading = false;
      }
    });
  }
  getMatchScoreColor(score) {
    if (score >= 80)
      return "#10b981";
    if (score >= 60)
      return "#f59e0b";
    return "#ef4444";
  }
  getMatchScoreLabel(score) {
    if (score >= 80)
      return "Excellent Match";
    if (score >= 60)
      return "Good Match";
    return "Fair Match";
  }
  static {
    this.\u0275fac = function AiRecommendationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiRecommendationsComponent)(\u0275\u0275directiveInject(AiRecommendationsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiRecommendationsComponent, selectors: [["app-ai-recommendations"]], decls: 11, vars: 4, consts: [[1, "ai-recommendations-container"], [1, "header"], [1, "fas", "fa-magic"], [1, "subtitle"], ["class", "loading", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["class", "recommendations-grid", 4, "ngIf"], [1, "loading"], [1, "fas", "fa-spinner", "fa-spin"], [1, "error-message"], [1, "fas", "fa-exclamation-circle"], [1, "no-results"], [1, "fas", "fa-inbox"], [1, "recommendations-grid"], ["class", "recommendation-card", 4, "ngFor", "ngForOf"], [1, "recommendation-card"], [1, "match-score-badge"], [1, "score"], [1, "label"], [1, "project-header"], [1, "company"], [1, "description"], [1, "matching-skills"], [1, "fas", "fa-check-circle"], [1, "skills-tags"], ["class", "skill-tag matched", 4, "ngFor", "ngForOf"], [1, "all-skills"], ["class", "skill-tag", 3, "matched", 4, "ngFor", "ngForOf"], [1, "project-details"], [1, "detail-item"], [1, "fas", "fa-money-bill-wave"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-calendar-alt"], [1, "fas", "fa-folder"], [1, "score-breakdown"], [1, "breakdown-item"], [1, "progress-bar"], [1, "progress"], [1, "score-value"], [1, "card-actions"], [1, "btn-primary", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "btn-secondary"], [1, "fas", "fa-paper-plane"], [1, "skill-tag", "matched"], [1, "skill-tag"]], template: function AiRecommendationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " AI-Powered Project Recommendations ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Projects that match your skills and experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AiRecommendationsComponent_div_7_Template, 4, 0, "div", 4)(8, AiRecommendationsComponent_div_8_Template, 3, 1, "div", 5)(9, AiRecommendationsComponent_div_9_Template, 4, 0, "div", 6)(10, AiRecommendationsComponent_div_10_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.recommendations.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.recommendations.length > 0);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n\n.ai-recommendations-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  margin-right: 0.5rem;\n}\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.1rem;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem;\n  color: #6b7280;\n}\n.loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #8b5cf6;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 1rem;\n  border-radius: 8px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem;\n  color: #9ca3af;\n}\n.no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.recommendations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  gap: 2rem;\n}\n.recommendation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.recommendation-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);\n}\n.match-score-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: 20px;\n  background: #10b981;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.match-score-badge[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.match-score-badge[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.project-header[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.project-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n}\n.project-header[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #4b5563;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.matching-skills[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.matching-skills[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #059669;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.matching-skills[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.all-skills[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.all-skills[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n}\n.skills-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.85rem;\n}\n.skill-tag.matched[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  font-weight: 500;\n}\n.project-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #4b5563;\n  font-size: 0.9rem;\n}\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  width: 20px;\n}\n.score-breakdown[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.score-breakdown[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.breakdown-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100px 1fr 60px;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n}\n.breakdown-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n}\n.breakdown-item[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 600;\n  color: #374151;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #a78bfa);\n  transition: width 0.3s ease;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n  color: white;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #7c3aed;\n  transform: translateY(-2px);\n}\n.card-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #8b5cf6;\n  border: 2px solid #8b5cf6;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .recommendations-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .project-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=ai-recommendations.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiRecommendationsComponent, { className: "AiRecommendationsComponent", filePath: "app\\frontoffice\\ai-recommendations\\ai-recommendations.component.ts", lineNumber: 9 });
})();

// src/app/core/services/chat.service.ts
var ChatService = class _ChatService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/evenements/chat`;
  }
  sendMessage(history) {
    const backendHistory = history.map((msg) => ({
      role: msg.role,
      content: msg.content
    }));
    return this.http.post(this.apiUrl, { history: backendHistory });
  }
  static {
    this.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/chat-assistant/chat-assistant.component.ts
var _c05 = ["messagesContainer"];
function ChatAssistantComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "\u{1F916}");
    \u0275\u0275elementEnd();
  }
}
function ChatAssistantComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "\u{1F464}");
    \u0275\u0275elementEnd();
  }
}
function ChatAssistantComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ChatAssistantComponent_div_21_div_1_Template, 2, 0, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275element(3, "div", 26);
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ChatAssistantComponent_div_21_div_6_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("user-wrapper", msg_r2.role === "user")("assistant-wrapper", msg_r2.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275classProp("user-bubble", msg_r2.role === "user")("assistant-bubble", msg_r2.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.formatMessage(msg_r2.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(msg_r2.timestamp));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.role === "user");
  }
}
function ChatAssistantComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33);
    \u0275\u0275element(5, "span")(6, "span")(7, "span");
    \u0275\u0275elementEnd()()();
  }
}
function ChatAssistantComponent_div_23_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ChatAssistantComponent_div_23_button_4_Template_button_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.useSuggestion(s_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r5, " ");
  }
}
function ChatAssistantComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p", 35);
    \u0275\u0275text(2, "\u{1F4A1} Try asking:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275template(4, ChatAssistantComponent_div_23_button_4_Template, 2, 1, "button", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.suggestions);
  }
}
function ChatAssistantComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u27A4");
    \u0275\u0275elementEnd();
  }
}
function ChatAssistantComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u27F3");
    \u0275\u0275elementEnd();
  }
}
var ChatAssistantComponent = class _ChatAssistantComponent {
  constructor(chatService, router) {
    this.chatService = chatService;
    this.router = router;
    this.messages = [
      {
        role: "assistant",
        content: `\u{1F44B} Hi! I'm **Matchy AI**, your smart event assistant.

I can help you:
- \u{1F50D} Find events by date or type
- \u{1F4C5} Check what's happening today or this week
- \u{1F4BC} Answer freelancing questions
- \u{1F4DD} Guide you through registration

What would you like to know?`,
        timestamp: /* @__PURE__ */ new Date()
      }
    ];
    this.userInput = "";
    this.isLoading = false;
    this.shouldScroll = false;
    this.suggestions = [
      "What events are happening today?",
      "Show me upcoming workshops",
      "Are there any online events?",
      "What certifications are available?",
      "How do I register for an event?"
    ];
  }
  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }
  sendMessage() {
    const text = this.userInput.trim();
    if (!text || this.isLoading)
      return;
    this.messages.push({ role: "user", content: text, timestamp: /* @__PURE__ */ new Date() });
    this.userInput = "";
    this.isLoading = true;
    this.shouldScroll = true;
    this.chatService.sendMessage(this.messages).subscribe({
      next: (res) => {
        this.messages.push({ role: "assistant", content: res.text, timestamp: /* @__PURE__ */ new Date() });
        this.isLoading = false;
        this.shouldScroll = true;
      },
      error: (err) => {
        console.error("Chat error:", err);
        this.messages.push({
          role: "assistant",
          content: "\u26A0\uFE0F Sorry, I couldn't connect to the AI service. Please make sure the backend is running and try again.",
          timestamp: /* @__PURE__ */ new Date()
        });
        this.isLoading = false;
        this.shouldScroll = true;
      }
    });
  }
  useSuggestion(suggestion) {
    this.userInput = suggestion;
    this.sendMessage();
  }
  onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  goBack() {
    this.router.navigate(["/events"]);
  }
  clearChat() {
    this.messages = [this.messages[0]];
  }
  scrollToBottom() {
    try {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    } catch {
    }
  }
  // Format markdown-like bold text
  formatMessage(content) {
    return content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
  }
  formatTime(date) {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  static {
    this.\u0275fac = function ChatAssistantComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatAssistantComponent)(\u0275\u0275directiveInject(ChatService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatAssistantComponent, selectors: [["app-chat-assistant"]], viewQuery: function ChatAssistantComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
      }
    }, decls: 32, vars: 8, consts: [["messagesContainer", ""], [1, "chat-page"], [1, "chat-header"], [1, "back-btn", 3, "click"], [1, "header-center"], [1, "ai-avatar"], [1, "avatar-icon"], [1, "online-dot"], [1, "header-info"], [1, "status"], ["title", "Clear chat", 1, "clear-btn", 3, "click"], [1, "chat-body"], [1, "messages-container"], ["class", "message-wrapper", 3, "user-wrapper", "assistant-wrapper", 4, "ngFor", "ngForOf"], ["class", "message-wrapper assistant-wrapper", 4, "ngIf"], ["class", "suggestions-bar", 4, "ngIf"], [1, "chat-input-area"], [1, "input-wrapper"], ["placeholder", "Ask about events, dates, registration...", "rows", "1", 1, "chat-input", 3, "ngModelChange", "keydown", "ngModel", "disabled"], [1, "send-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "spin", 4, "ngIf"], [1, "input-hint"], [1, "message-wrapper"], ["class", "msg-avatar", 4, "ngIf"], [1, "message-bubble"], [1, "msg-content", 3, "innerHTML"], [1, "msg-time"], ["class", "msg-avatar user-avatar", 4, "ngIf"], [1, "msg-avatar"], [1, "msg-avatar", "user-avatar"], [1, "message-wrapper", "assistant-wrapper"], [1, "message-bubble", "assistant-bubble", "typing-bubble"], [1, "typing-dots"], [1, "suggestions-bar"], [1, "suggestions-label"], [1, "suggestions-grid"], ["class", "suggestion-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion-chip", 3, "click"], [1, "spin"]], template: function ChatAssistantComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function ChatAssistantComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Back to Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "h1");
        \u0275\u0275text(13, "Matchy AI Assistant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15, "\u25CF Online \xB7 Powered by Llama 3.1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function ChatAssistantComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearChat());
        });
        \u0275\u0275text(17, " \u{1F5D1}\uFE0F ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12, 0);
        \u0275\u0275template(21, ChatAssistantComponent_div_21_Template, 7, 12, "div", 13)(22, ChatAssistantComponent_div_22_Template, 8, 0, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, ChatAssistantComponent_div_23_Template, 5, 1, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "textarea", 18);
        \u0275\u0275twoWayListener("ngModelChange", function ChatAssistantComponent_Template_textarea_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userInput, $event) || (ctx.userInput = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keydown", function ChatAssistantComponent_Template_textarea_keydown_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 19);
        \u0275\u0275listener("click", function ChatAssistantComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sendMessage());
        });
        \u0275\u0275template(28, ChatAssistantComponent_span_28_Template, 2, 0, "span", 20)(29, ChatAssistantComponent_span_29_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 22);
        \u0275\u0275text(31, "Press Enter to send \xB7 Shift+Enter for new line");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.messages);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.messages.length === 1 && !ctx.isLoading);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.userInput);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.userInput.trim() || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.chat-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  padding-top: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0e27 0%,\n      #1a0f2e 50%,\n      #0d1117 100%);\n  color: #e0d4ff;\n  font-family: "Segoe UI", sans-serif;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(139, 92, 246, 0.2);\n  flex-shrink: 0;\n  z-index: 10;\n  gap: 12px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  color: #c4b5fd;\n  padding: 7px 14px;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 13px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.3);\n  transform: translateX(-2px);\n}\n.header-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  justify-content: center;\n  min-width: 0;\n}\n.ai-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);\n}\n.ai-avatar[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 9px;\n  height: 9px;\n  background: #22c55e;\n  border-radius: 50%;\n  border: 2px solid #0a0e27;\n  animation: _ngcontent-%COMP%_pulse-dot 2s infinite;\n}\n.header-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #e0d4ff;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #c4b5fd,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #22c55e;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 15px;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #f87171;\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  scroll-behavior: smooth;\n  min-height: 0;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(139, 92, 246, 0.3);\n  border-radius: 4px;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n.message-wrapper.user-wrapper[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(124, 58, 237, 0.3);\n}\n.msg-avatar.user-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: min(70%, 520px);\n  padding: 11px 15px;\n  border-radius: 18px;\n  position: relative;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #c4b5fd;\n  font-weight: 600;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 5px;\n  opacity: 0.5;\n  text-align: right;\n}\n.assistant-bubble[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(139, 92, 246, 0.2);\n  border-bottom-left-radius: 4px;\n  color: #e0d4ff;\n}\n.user-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border-bottom-right-radius: 4px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);\n}\n.user-bubble[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.typing-bubble[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n}\n.typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #a78bfa;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_typing-bounce 1.2s infinite;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.suggestions-bar[_ngcontent-%COMP%] {\n  padding: 0 16px 12px;\n  flex-shrink: 0;\n}\n.suggestions-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.suggestions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.suggestion-chip[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  color: #c4b5fd;\n  padding: 7px 13px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestion-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.25);\n  border-color: rgba(139, 92, 246, 0.5);\n  transform: translateY(-1px);\n}\n.chat-input-area[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border-top: 1px solid rgba(139, 92, 246, 0.15);\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  border-radius: 14px;\n  padding: 9px 9px 9px 14px;\n  transition: border-color 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(139, 92, 246, 0.6);\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e0d4ff;\n  font-size: 14px;\n  line-height: 1.5;\n  resize: none;\n  max-height: 100px;\n  font-family: "Segoe UI", sans-serif;\n}\n.chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.chat-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border: none;\n  color: white;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5);\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #475569;\n  text-align: center;\n  margin-top: 6px;\n}\n@media (max-width: 768px) {\n  .chat-page[_ngcontent-%COMP%] {\n    padding-top: 65px;\n  }\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 8px;\n  }\n  .back-btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n  .back-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .header-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .messages-container[_ngcontent-%COMP%] {\n    padding: 14px 10px;\n    gap: 12px;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 85%;\n    padding: 10px 13px;\n  }\n  .message-bubble[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .msg-avatar[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 13px;\n  }\n  .suggestions-bar[_ngcontent-%COMP%] {\n    padding: 0 10px 10px;\n  }\n  .suggestion-chip[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 6px 11px;\n  }\n  .chat-input-area[_ngcontent-%COMP%] {\n    padding: 10px 10px 14px;\n  }\n  .input-hint[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .header-center[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n  .ai-avatar[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 17px;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .suggestions-grid[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_typing-bounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(139, 92, 246, 0.2);\n  flex-shrink: 0;\n  z-index: 10;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  color: #c4b5fd;\n  padding: 8px 16px;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.3);\n  transform: translateX(-2px);\n}\n.header-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ai-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);\n}\n.ai-avatar[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 10px;\n  height: 10px;\n  background: #22c55e;\n  border-radius: 50%;\n  border: 2px solid #0a0e27;\n  animation: _ngcontent-%COMP%_pulse-dot 2s infinite;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #e0d4ff;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #c4b5fd,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #22c55e;\n  font-weight: 500;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #f87171;\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  scroll-behavior: smooth;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(139, 92, 246, 0.3);\n  border-radius: 4px;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n.message-wrapper.user-wrapper[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(124, 58, 237, 0.3);\n}\n.msg-avatar.user-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 18px;\n  position: relative;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #c4b5fd;\n  font-weight: 600;\n}\n.message-bubble[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 6px;\n  opacity: 0.5;\n  text-align: right;\n}\n.assistant-bubble[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(139, 92, 246, 0.2);\n  border-bottom-left-radius: 4px;\n  color: #e0d4ff;\n}\n.user-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border-bottom-right-radius: 4px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);\n}\n.user-bubble[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.typing-bubble[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n}\n.typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #a78bfa;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_typing-bounce 1.2s infinite;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.suggestions-bar[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n  flex-shrink: 0;\n}\n.suggestions-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 10px;\n}\n.suggestions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.suggestion-chip[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  color: #c4b5fd;\n  padding: 8px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestion-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.25);\n  border-color: rgba(139, 92, 246, 0.5);\n  transform: translateY(-1px);\n}\n.chat-input-area[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px;\n  background: rgba(255, 255, 255, 0.03);\n  border-top: 1px solid rgba(139, 92, 246, 0.15);\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  border-radius: 16px;\n  padding: 10px 10px 10px 16px;\n  transition: border-color 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(139, 92, 246, 0.6);\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e0d4ff;\n  font-size: 14px;\n  line-height: 1.5;\n  resize: none;\n  max-height: 120px;\n  font-family: "Segoe UI", sans-serif;\n}\n.chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.chat-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  border: none;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5);\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #475569;\n  text-align: center;\n  margin-top: 8px;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_typing-bounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n/*# sourceMappingURL=chat-assistant.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatAssistantComponent, { className: "ChatAssistantComponent", filePath: "app\\frontoffice\\chat-assistant\\chat-assistant.component.ts", lineNumber: 10 });
})();

// src/app/frontoffice/services/content-notification.service.ts
var ContentNotificationService = class _ContentNotificationService {
  constructor() {
    this.notificationsSubject = new BehaviorSubject([]);
    this.notifications$ = this.notificationsSubject.asObservable();
    this.unreadCountSubject = new BehaviorSubject(0);
    this.unreadCount$ = this.unreadCountSubject.asObservable();
    this.loadNotifications();
  }
  getStorageKey() {
    const rawUser = localStorage.getItem("matchy_user");
    if (!rawUser)
      return "content_notifications_anonymous";
    try {
      const user = JSON.parse(rawUser);
      return `content_notifications_${user?.email || user?.id || "anonymous"}`;
    } catch {
      return "content_notifications_anonymous";
    }
  }
  loadNotifications() {
    const stored = localStorage.getItem(this.getStorageKey());
    if (stored) {
      const notifications = JSON.parse(stored).map((n) => __spreadProps(__spreadValues({}, n), { timestamp: new Date(n.timestamp) }));
      this.notificationsSubject.next(notifications);
      this.updateUnreadCount();
    }
  }
  addNotification(type, title, message, icon = "\u{1F4E2}", data) {
    const notification = { id: Date.now().toString(), type, icon, title, message, timestamp: /* @__PURE__ */ new Date(), read: false, data };
    const updated = [notification, ...this.notificationsSubject.value];
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }
  markAsRead(id) {
    const updated = this.notificationsSubject.value.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n);
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }
  markAllAsRead() {
    const updated = this.notificationsSubject.value.map((n) => __spreadProps(__spreadValues({}, n), { read: true }));
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }
  deleteNotification(id) {
    const updated = this.notificationsSubject.value.filter((n) => n.id !== id);
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }
  clearAll() {
    this.notificationsSubject.next([]);
    localStorage.removeItem(this.getStorageKey());
    this.updateUnreadCount();
  }
  updateUnreadCount() {
    this.unreadCountSubject.next(this.notificationsSubject.value.filter((n) => !n.read).length);
  }
  static {
    this.\u0275fac = function ContentNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentNotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContentNotificationService, factory: _ContentNotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/shared/notification-panel/notification-panel.component.ts
function NotificationPanelComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function NotificationPanelComponent_div_4_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_4_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1, "\u2713 Mark all read");
    \u0275\u0275elementEnd();
  }
}
function NotificationPanelComponent_div_4_div_8_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_4_div_8_div_1_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const notif_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notif_r6.id));
    });
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function NotificationPanelComponent_div_4_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "h4", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 24);
    \u0275\u0275template(12, NotificationPanelComponent_div_4_div_8_div_1_button_12_Template, 2, 0, "button", 25);
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_4_div_8_div_1_Template_button_click_13_listener() {
      const notif_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteNotification(notif_r6.id));
    });
    \u0275\u0275text(14, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !notif_r6.read)("type-certificate", notif_r6.type === "certificate");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r6.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTimeAgo(notif_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !notif_r6.read);
  }
}
function NotificationPanelComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, NotificationPanelComponent_div_4_div_8_div_1_Template, 15, 9, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function NotificationPanelComponent_div_4_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No notifications yet");
    \u0275\u0275elementEnd()();
  }
}
function NotificationPanelComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_4_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearAll());
    });
    \u0275\u0275text(2, "Clear all notifications");
    \u0275\u0275elementEnd()();
  }
}
function NotificationPanelComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h3");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, NotificationPanelComponent_div_4_button_5_Template, 2, 0, "button", 10);
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDropdown());
    });
    \u0275\u0275text(7, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, NotificationPanelComponent_div_4_div_8_Template, 2, 1, "div", 12)(9, NotificationPanelComponent_div_4_ng_template_9_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, NotificationPanelComponent_div_4_div_11_Template, 3, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyState_r8 = \u0275\u0275reference(10);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideDown", void 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0)("ngIfElse", emptyState_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.notifications.length > 0);
  }
}
function NotificationPanelComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function NotificationPanelComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDropdown());
    });
    \u0275\u0275elementEnd();
  }
}
var NotificationPanelComponent = class _NotificationPanelComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.notifications = [];
    this.unreadCount = 0;
    this.showDropdown = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.notificationService.notifications$.pipe(takeUntil(this.destroy$)).subscribe((n) => this.notifications = n);
    this.notificationService.unreadCount$.pipe(takeUntil(this.destroy$)).subscribe((c) => this.unreadCount = c);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  markAsRead(id) {
    this.notificationService.markAsRead(id);
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead();
  }
  deleteNotification(id) {
    this.notificationService.deleteNotification(id);
  }
  clearAll() {
    if (confirm("Clear all notifications?"))
      this.notificationService.clearAll();
  }
  getTimeAgo(timestamp) {
    const diff = (/* @__PURE__ */ new Date()).getTime() - new Date(timestamp).getTime();
    const m = Math.floor(diff / 6e4), h = Math.floor(diff / 36e5), d = Math.floor(diff / 864e5);
    if (m < 1)
      return "just now";
    if (m < 60)
      return `${m}m ago`;
    if (h < 24)
      return `${h}h ago`;
    if (d < 7)
      return `${d}d ago`;
    return new Date(timestamp).toLocaleDateString();
  }
  static {
    this.\u0275fac = function NotificationPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationPanelComponent)(\u0275\u0275directiveInject(ContentNotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationPanelComponent, selectors: [["app-notification-panel"]], decls: 6, vars: 3, consts: [["emptyState", ""], [1, "notifications-container"], [1, "btn-notifications", 3, "click"], ["class", "badge", 4, "ngIf"], ["class", "notifications-dropdown", 4, "ngIf"], ["class", "notifications-backdrop", 3, "click", 4, "ngIf"], [1, "badge"], [1, "notifications-dropdown"], [1, "notifications-header"], [1, "header-actions"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], [1, "btn-close", 3, "click"], ["class", "notifications-list", 4, "ngIf", "ngIfElse"], ["class", "notifications-footer", 4, "ngIf"], [1, "btn-mark-all", 3, "click"], [1, "notifications-list"], ["class", "notification-item", 3, "unread", "type-certificate", 4, "ngFor", "ngForOf"], [1, "notification-item"], [1, "notification-content"], [1, "notification-icon"], [1, "notification-text"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], [1, "notification-actions"], ["class", "btn-read", "title", "Mark as read", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn-delete", 3, "click"], ["title", "Mark as read", 1, "btn-read", 3, "click"], [1, "notifications-empty"], [1, "empty-icon"], [1, "notifications-footer"], [1, "btn-clear-all", 3, "click"], [1, "notifications-backdrop", 3, "click"]], template: function NotificationPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function NotificationPanelComponent_Template_button_click_1_listener() {
          return ctx.toggleDropdown();
        });
        \u0275\u0275text(2, " \u{1F514} Notifications ");
        \u0275\u0275template(3, NotificationPanelComponent_span_3_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NotificationPanelComponent_div_4_Template, 12, 5, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, NotificationPanelComponent_div_5_Template, 1, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDropdown);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDropdown);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.notifications-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.btn-notifications[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.btn-notifications[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n  background: #f8fafc;\n}\n.btn-notifications[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.notifications-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 380px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.notifications-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.notifications-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.notifications-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-mark-all[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: none;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.notifications-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.2s;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left: 3px solid #667eea;\n}\n.notification-item.type-certificate[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-left: 3px solid #10b981;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex: 1;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  flex-shrink: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .btn-read[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 0.85rem;\n  padding: 0.2rem;\n  border-radius: 4px;\n}\n.notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: #fee2e2;\n}\n.notifications-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n.notifications-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.notifications-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin: 0;\n}\n.notifications-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  text-align: center;\n}\n.notifications-footer[_ngcontent-%COMP%]   .btn-clear-all[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 0.85rem;\n  cursor: pointer;\n  font-weight: 600;\n}\n.notifications-footer[_ngcontent-%COMP%]   .btn-clear-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.notifications-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=notification-panel.component.css.map */"], data: { animation: [
      trigger("slideDown", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-10px)" }),
          animate("300ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
        ]),
        transition(":leave", [
          animate("300ms ease-in", style({ opacity: 0, transform: "translateY(-10px)" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationPanelComponent, { className: "NotificationPanelComponent", filePath: "app\\frontoffice\\shared\\notification-panel\\notification-panel.component.ts", lineNumber: 23 });
})();

// src/app/frontoffice/content-list/content-list.component.ts
function ContentListComponent_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badge_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.getBadgeClass(badge_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r2 === "Gold Badge" ? "\u{1F947}" : badge_r2 === "Silver Badge" ? "\u{1F948}" : badge_r2 === "Bronze Badge" ? "\u{1F949}" : badge_r2 === "Perfect Score Badge" ? "\u{1F3C6}" : "\u{1F396}\uFE0F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r2);
  }
}
function ContentListComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ContentListComponent_div_32_span_1_Template, 5, 3, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.currentUserBadges);
  }
}
function ContentListComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "Complete certifications to unlock Bronze, Silver, Gold and Perfect Score badges.");
    \u0275\u0275elementEnd();
  }
}
function ContentListComponent_div_60_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F512} ", ctx_r2.getUnlockMessage(content_r5), "");
  }
}
function ContentListComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ContentListComponent_div_60_p_13_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(14, "button", 46);
    \u0275\u0275listener("click", function ContentListComponent_div_60_Template_button_click_14_listener() {
      const content_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewContent(content_r5));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.getContentIcon(content_r5.type), " ", \u0275\u0275pipeBind2(3, 12, content_r5.createdAt, "dd/MM/yyyy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(content_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getContentBadgeClass(content_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getLevelLabel(content_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isContentUnlocked(content_r5));
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-locked", !ctx_r2.isContentUnlocked(content_r5));
    \u0275\u0275property("disabled", !ctx_r2.isContentUnlocked(content_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isContentUnlocked(content_r5) ? "\u{1F4D6} View Content" : "\u{1F512} Locked", " ");
  }
}
function ContentListComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "No contents found.");
    \u0275\u0275elementEnd()();
  }
}
var ContentListComponent = class _ContentListComponent {
  static {
    this.INTERMEDIATE_UNLOCK_BEGINNER_CERTS = 3;
  }
  static {
    this.ADVANCED_UNLOCK_INTERMEDIATE_CERTS = 5;
  }
  constructor(contentService, router, authService, certificationService) {
    this.contentService = contentService;
    this.router = router;
    this.authService = authService;
    this.certificationService = certificationService;
    this.contents = [];
    this.filteredContents = [];
    this.selectedFilter = "all";
    this.currentUserName = "Guest";
    this.currentUserId = null;
    this.currentUserEmail = "";
    this.currentUserBadges = [];
    this.currentUserCertificationCount = 0;
    this.beginnerCertificationCount = 0;
    this.intermediateCertificationCount = 0;
    this.primaryBadge = "";
    this.badgeSummary = "No badge yet";
  }
  ngOnInit() {
    this.authService.checkAuth();
    const user = this.authService.currentUser;
    this.currentUserName = user?.name || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "Guest";
    this.currentUserEmail = user?.email || "";
    const userId = user?.id;
    this.currentUserId = userId != null ? Number(userId) : null;
    this.certificationService.getAllCertifications().subscribe({
      next: () => {
        this.refreshCertificationProgress();
        if (this.currentUserId != null) {
          const uid = this.currentUserId;
          this.currentUserBadges = this.certificationService.getBadgesForUser(uid, this.currentUserEmail, this.currentUserName);
          this.primaryBadge = this.certificationService.getPrimaryBadgeForUser(uid, this.currentUserEmail, this.currentUserName) || "";
          this.badgeSummary = this.primaryBadge || "No badge yet";
        }
      },
      error: () => {
        this.currentUserCertificationCount = 0;
        this.beginnerCertificationCount = 0;
        this.intermediateCertificationCount = 0;
        this.currentUserBadges = [];
        this.primaryBadge = "";
        this.badgeSummary = "No badge yet";
      }
    });
    this.loadContents();
  }
  loadContents() {
    this.contentService.getAllContents().subscribe({
      next: (contents) => {
        this.contents = contents;
        this.filteredContents = contents;
        this.refreshCertificationProgress();
        if (this.currentUserId != null) {
          const uid = this.currentUserId;
          this.currentUserBadges = this.certificationService.getBadgesForUser(uid, this.currentUserEmail, this.currentUserName);
          this.primaryBadge = this.certificationService.getPrimaryBadgeForUser(uid, this.currentUserEmail, this.currentUserName) || "";
          this.badgeSummary = this.primaryBadge || "No badge yet";
        }
      },
      error: () => {
        this.contents = [];
        this.filteredContents = [];
      }
    });
  }
  filterContents(type) {
    this.selectedFilter = type;
    this.filteredContents = type === "all" ? this.contents : this.contents.filter((c) => c.type === type.toUpperCase());
  }
  viewContent(content) {
    if (!content.contentId || !this.isContentUnlocked(content))
      return;
    this.router.navigate(["/content-list/content", content.contentId]);
  }
  isContentUnlocked(content) {
    if (content.level === "DEBUTANT")
      return true;
    if (content.level === "INTERMEDIAIRE")
      return this.beginnerCertificationCount >= _ContentListComponent.INTERMEDIATE_UNLOCK_BEGINNER_CERTS;
    return this.intermediateCertificationCount >= _ContentListComponent.ADVANCED_UNLOCK_INTERMEDIATE_CERTS;
  }
  getUnlockRemainingCertifications(content) {
    if (content.level === "DEBUTANT")
      return 0;
    if (content.level === "INTERMEDIAIRE")
      return Math.max(0, _ContentListComponent.INTERMEDIATE_UNLOCK_BEGINNER_CERTS - this.beginnerCertificationCount);
    return Math.max(0, _ContentListComponent.ADVANCED_UNLOCK_INTERMEDIATE_CERTS - this.intermediateCertificationCount);
  }
  getUnlockMessage(content) {
    const remaining = this.getUnlockRemainingCertifications(content);
    if (remaining <= 0 || this.isContentUnlocked(content))
      return "";
    return `Unlock in ${remaining} certification${remaining > 1 ? "s" : ""}`;
  }
  getLevelLabel(content) {
    switch (content.level) {
      case "DEBUTANT":
        return "Beginner Level";
      case "INTERMEDIAIRE":
        return "Intermediate Level";
      default:
        return "Advanced Level";
    }
  }
  findContentById(contentId) {
    if (contentId == null)
      return void 0;
    return this.contents.find((c) => Number(c.contentId) === Number(contentId));
  }
  refreshCertificationProgress() {
    if (this.currentUserId == null) {
      this.currentUserCertificationCount = 0;
      this.beginnerCertificationCount = 0;
      this.intermediateCertificationCount = 0;
      return;
    }
    const certs = this.certificationService.getCertificationsForUser(this.currentUserId, this.currentUserEmail, this.currentUserName);
    this.currentUserCertificationCount = certs.length;
    this.beginnerCertificationCount = certs.filter((c) => this.findContentById(c.contentId)?.level === "DEBUTANT").length;
    this.intermediateCertificationCount = certs.filter((c) => this.findContentById(c.contentId)?.level === "INTERMEDIAIRE").length;
  }
  getContentIcon(type) {
    switch (type) {
      case "COURS":
        return "\u{1F4DA}";
      case "ARTICLE":
        return "\u{1F4DD}";
      case "VIDEO":
        return "\u{1F3A5}";
      default:
        return "\u{1F4C4}";
    }
  }
  getContentBadgeClass(type) {
    switch (type) {
      case "COURS":
        return "badge-cours";
      case "ARTICLE":
        return "badge-article";
      case "VIDEO":
        return "badge-video";
      default:
        return "badge-default";
    }
  }
  getBadgeClass(badge) {
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
  static {
    this.\u0275fac = function ContentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentListComponent)(\u0275\u0275directiveInject(ContentService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CertificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentListComponent, selectors: [["app-content-list"]], decls: 63, vars: 19, consts: [["noBadges", ""], [1, "content-list-page"], [1, "hero-section"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badge-panel"], [1, "hero-panel-top"], [1, "hero-badge-label"], [1, "hero-badge-name"], [1, "hero-main-award", 3, "ngClass"], [1, "hero-main-award-icon"], [1, "hero-main-award-content"], [1, "hero-main-award-title"], [1, "hero-main-award-subtitle"], [1, "hero-stats"], [1, "hero-stat-card"], [1, "hero-stat-value"], [1, "hero-stat-label"], ["class", "hero-badge-list", 4, "ngIf", "ngIfElse"], [1, "content-section"], [1, "content-list-container"], [1, "page-header"], [1, "header-left"], [1, "subtitle"], [1, "header-actions"], ["routerLink", "/content-list/favorites", 1, "btn-favorites"], [1, "filter-tabs"], [1, "filter-tab", 3, "click"], [1, "section-header"], [1, "section-title"], [1, "contents-grid"], ["class", "content-card", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "hero-badge-list"], ["class", "hero-badge-chip", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "hero-badge-chip", 3, "ngClass"], [1, "hero-badge-chip-icon"], [1, "hero-badge-empty"], [1, "content-card"], [1, "content-date"], [1, "content-title"], [1, "content-description"], [1, "content-meta"], [1, "content-badge", 3, "ngClass"], [1, "content-level"], ["class", "unlock-hint", 4, "ngIf"], [1, "btn", "btn-view", 3, "click", "disabled"], [1, "unlock-hint"], [1, "no-results"]], template: function ContentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-fo-navbar");
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Discover Amazing Contents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Explore our collection of courses, articles and videos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10, "Gamification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275text(20, "Top unlocked badge");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "div", 16);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 17);
        \u0275\u0275text(26, "Certifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15)(28, "div", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 17);
        \u0275\u0275text(31, "Badges unlocked");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(32, ContentListComponent_div_32_Template, 2, 1, "div", 18)(33, ContentListComponent_ng_template_33_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "h1");
        \u0275\u0275text(40, "\u{1F4DA} Explore Contents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 23);
        \u0275\u0275text(42, "Discover our collection of courses, articles, and videos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 24);
        \u0275\u0275element(44, "app-notification-panel");
        \u0275\u0275elementStart(45, "button", 25);
        \u0275\u0275text(46, "\u2B50 My Favorites");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 26)(48, "button", 27);
        \u0275\u0275listener("click", function ContentListComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterContents("all"));
        });
        \u0275\u0275text(49, "All Contents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 27);
        \u0275\u0275listener("click", function ContentListComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterContents("cours"));
        });
        \u0275\u0275text(51, "Courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 27);
        \u0275\u0275listener("click", function ContentListComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterContents("article"));
        });
        \u0275\u0275text(53, "Articles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 27);
        \u0275\u0275listener("click", function ContentListComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterContents("video"));
        });
        \u0275\u0275text(55, "Videos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 28)(57, "h2", 29);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 30);
        \u0275\u0275template(60, ContentListComponent_div_60_Template, 16, 15, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, ContentListComponent_div_61_Template, 3, 0, "div", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(62, "app-fo-footer");
      }
      if (rf & 2) {
        const noBadges_r6 = \u0275\u0275reference(34);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.currentUserName);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.primaryBadge ? ctx.getBadgeClass(ctx.primaryBadge) : "badge-muted");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.primaryBadge === "Gold Badge" ? "\u{1F947}" : ctx.primaryBadge === "Silver Badge" ? "\u{1F948}" : ctx.primaryBadge === "Bronze Badge" ? "\u{1F949}" : ctx.primaryBadge === "Perfect Score Badge" ? "\u{1F3C6}" : "\u{1F3AF}", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.badgeSummary);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.currentUserCertificationCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.currentUserBadges.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.currentUserBadges.length > 0)("ngIfElse", noBadges_r6);
        \u0275\u0275advance(16);
        \u0275\u0275classProp("active", ctx.selectedFilter === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedFilter === "cours");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedFilter === "article");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedFilter === "video");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.filteredContents.length, " Contents Available");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredContents);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredContents.length === 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, FoNavbarComponent, FoFooterComponent, NotificationPanelComponent, DatePipe], styles: ["\n\n.content-list-page[_ngcontent-%COMP%] {\n  padding-top: 80px;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 4rem 2rem;\n  text-align: center;\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 0.9;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-panel[_ngcontent-%COMP%] {\n  width: min(920px, 100%);\n  margin: 2rem auto 0;\n  padding: 1.35rem 1.5rem 1.4rem;\n  border-radius: 24px;\n  background:\n    radial-gradient(\n      circle at 15% -20%,\n      rgba(255, 255, 255, 0.26),\n      rgba(255, 255, 255, 0.08) 46%,\n      rgba(255, 255, 255, 0.1)),\n    rgba(255, 255, 255, 0.11);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  backdrop-filter: blur(14px);\n  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.22);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  opacity: 0.86;\n  margin-bottom: 0.45rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.1;\n  font-weight: 800;\n  margin-bottom: 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-panel-top[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-main-award[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  padding: 1rem 1.1rem;\n  margin: 0 auto;\n  max-width: 560px;\n  background: rgba(15, 23, 42, 0.18);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-main-award-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  font-size: 1.8rem;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  flex-shrink: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-main-award-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-main-award-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.08;\n  font-weight: 900;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-main-award-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.92rem;\n  letter-spacing: 0.04em;\n  opacity: 0.88;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  margin: 1rem auto 0.9rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(150px, 1fr));\n  gap: 0.75rem;\n  max-width: 560px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stat-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 0.75rem 0.85rem;\n  background: rgba(15, 23, 42, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stat-value[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  line-height: 1.1;\n  font-weight: 900;\n  color: #ffffff;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-stat-label[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.85;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  justify-content: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 52px;\n  min-width: 180px;\n  padding: 0.7rem 1.2rem;\n  border-radius: 999px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  border: 1px solid transparent;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);\n  letter-spacing: 0.01em;\n  gap: 0.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-chip-icon[_ngcontent-%COMP%] {\n  font-size: 1.05em;\n  line-height: 1;\n  filter: drop-shadow(0 1px 2px rgba(15, 23, 42, 0.25));\n}\n.hero-section[_ngcontent-%COMP%]   .hero-badge-empty[_ngcontent-%COMP%] {\n  margin: 0.2rem auto 0;\n  max-width: 580px;\n  font-size: 1rem;\n  opacity: 0.92;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-badge-name[_ngcontent-%COMP%] {\n    font-size: 1.55rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-main-award-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-main-award[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n    gap: 0.75rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-main-award-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    font-size: 1.45rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.badge-bronze[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b8652a 0%,\n      #8f4f20 100%);\n  color: #fff7ef;\n  border-color: rgba(255, 203, 156, 0.45);\n  box-shadow: 0 10px 22px rgba(143, 79, 32, 0.35);\n}\n.badge-silver[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #cfd8e3 0%,\n      #9aa7b8 100%);\n  color: #1f2937;\n  border-color: rgba(226, 232, 240, 0.7);\n  box-shadow: 0 10px 22px rgba(148, 163, 184, 0.35);\n}\n.badge-gold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f6d365 0%,\n      #f4b400 100%);\n  color: #3a2a00;\n  border-color: rgba(255, 242, 179, 0.75);\n  box-shadow: 0 10px 22px rgba(245, 158, 11, 0.45);\n}\n.badge-perfect[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #059669 100%);\n  color: #ecfdf5;\n  border-color: rgba(167, 243, 208, 0.6);\n  box-shadow: 0 10px 22px rgba(5, 150, 105, 0.35);\n}\n.badge-muted[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8 0%,\n      #64748b 100%);\n  color: #f8fafc;\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.content-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n.filter-tabs[_ngcontent-%COMP%]   .filter-tab[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: 2px solid #e2e8f0;\n  background: white;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.filter-tabs[_ngcontent-%COMP%]   .filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.filter-tabs[_ngcontent-%COMP%]   .filter-tab.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: transparent;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.contents-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.content-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);\n}\n.content-card[_ngcontent-%COMP%]   .content-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.content-card[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.content-card[_ngcontent-%COMP%]   .content-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.content-card[_ngcontent-%COMP%]   .content-meta[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n  flex-wrap: wrap;\n}\n.content-card[_ngcontent-%COMP%]   .content-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.content-card[_ngcontent-%COMP%]   .content-badge.badge-cours[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.content-card[_ngcontent-%COMP%]   .content-badge.badge-article[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.content-card[_ngcontent-%COMP%]   .content-badge.badge-video[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.content-card[_ngcontent-%COMP%]   .content-level[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.78rem;\n  color: #334155;\n  background: #eef2ff;\n  border: 1px solid #c7d2fe;\n}\n.content-card[_ngcontent-%COMP%]   .unlock-hint[_ngcontent-%COMP%] {\n  margin: -0.4rem 0 1rem;\n  color: #b45309;\n  font-size: 0.87rem;\n  font-weight: 600;\n}\n.content-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  width: 100%;\n}\n.content-card[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.content-card[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.content-card[_ngcontent-%COMP%]   .btn-locked[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8 0%,\n      #64748b 100%);\n  color: #f8fafc;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.content-card[_ngcontent-%COMP%]   .btn-locked[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #64748b;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n.btn-favorites[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.btn-favorites[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);\n}\n@media (max-width: 768px) {\n  .btn-favorites[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=content-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentListComponent, { className: "ContentListComponent", filePath: "app\\frontoffice\\content-list\\content-list.component.ts", lineNumber: 13 });
})();

// src/app/frontoffice/services/translation.service.ts
var TranslationService = class _TranslationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/Translation`;
    this.languages = [
      { code: "en", name: "English", flag: "\u{1F1EC}\u{1F1E7}" },
      { code: "fr", name: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
      { code: "es", name: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
      { code: "de", name: "Deutsch", flag: "\u{1F1E9}\u{1F1EA}" },
      { code: "it", name: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
      { code: "pt", name: "Portugu\xEAs", flag: "\u{1F1F5}\u{1F1F9}" },
      { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\u{1F1F8}\u{1F1E6}" },
      { code: "zh", name: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" },
      { code: "ja", name: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}" },
      { code: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", flag: "\u{1F1F7}\u{1F1FA}" }
    ];
  }
  translateContent(contentId, targetLanguage) {
    return this.http.post(`${this.apiUrl}/translate/${contentId}/${targetLanguage}`, {});
  }
  getTranslation(contentId, languageCode) {
    return this.http.get(`${this.apiUrl}/${contentId}/${languageCode}`);
  }
  getAllTranslations(contentId) {
    return this.http.get(`${this.apiUrl}/all/${contentId}`);
  }
  getSupportedLanguages() {
    return this.languages;
  }
  getLanguageName(code) {
    return this.languages.find((l) => l.code === code)?.name ?? code;
  }
  getLanguageFlag(code) {
    return this.languages.find((l) => l.code === code)?.flag ?? "\u{1F310}";
  }
  static {
    this.\u0275fac = function TranslationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranslationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/services/pdf-generator.service.ts
var PdfGeneratorService = class _PdfGeneratorService {
  downloadContentAsPdf(content, authorName) {
    const doc = new jspdf_es_min_default({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let y = margin;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Matchy Platform", pageWidth - margin, y, { align: "right" });
    y += 20;
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;
    if (content.type === "COURS")
      doc.setFillColor(37, 99, 235);
    else if (content.type === "ARTICLE")
      doc.setFillColor(16, 185, 129);
    else
      doc.setFillColor(239, 68, 68);
    doc.roundedRect(margin, y, 30, 8, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text(content.type, margin + 15, y + 5.5, { align: "center" });
    y += 15;
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(content.title, contentWidth);
    doc.text(titleLines, margin, y);
    y += titleLines.length * 10 + 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    if (authorName) {
      doc.text(`Author: ${authorName}`, margin, y);
      y += 7;
    }
    if (content.createdAt) {
      doc.text(`Published: ${new Date(content.createdAt).toLocaleDateString()}`, margin, y);
      y += 7;
    }
    y += 10;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(content.description, contentWidth);
    for (const line of descLines) {
      if (y > pageHeight - margin - 20) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 7;
    }
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.3);
      doc.line(margin, pageHeight - 20, pageWidth - margin, pageHeight - 20);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text("Downloaded from Matchy Platform", margin, pageHeight - 12);
      doc.text(`Page ${i} / ${totalPages}`, pageWidth - margin, pageHeight - 12, { align: "right" });
    }
    doc.save(content.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").substring(0, 50) + ".pdf");
  }
  static {
    this.\u0275fac = function PdfGeneratorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfGeneratorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdfGeneratorService, factory: _PdfGeneratorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/services/favorite.service.ts
var FavoriteService = class _FavoriteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/Favorite`;
  }
  addFavorite(userId, contentId) {
    return this.http.post(`${this.apiUrl}/add/${userId}/${contentId}`, {});
  }
  removeFavorite(userId, contentId) {
    return this.http.delete(`${this.apiUrl}/remove/${userId}/${contentId}`);
  }
  isFavorite(userId, contentId) {
    return this.http.get(`${this.apiUrl}/check/${userId}/${contentId}`);
  }
  getUserFavorites(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  getUserFavoriteContents(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}/contents`);
  }
  countUserFavorites(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}/count`);
  }
  static {
    this.\u0275fac = function FavoriteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoriteService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoriteService, factory: _FavoriteService.\u0275fac, providedIn: "root" });
  }
};

// src/app/frontoffice/content-detail/content-detail.component.ts
function ContentDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "Loading content...");
    \u0275\u0275elementEnd()();
  }
}
function ContentDetailComponent_div_2_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} By ", ctx_r1.author.name, "");
  }
}
function ContentDetailComponent_div_2_div_19_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_div_19_div_8_div_1_Template_div_click_0_listener() {
      const lang_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.translateToLanguage(lang_r5.code));
    });
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r5.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r5.name);
  }
}
function ContentDetailComponent_div_2_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, ContentDetailComponent_div_2_div_19_div_8_div_1_Template, 5, 2, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableLanguages);
  }
}
function ContentDetailComponent_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleLanguageDropdown());
    });
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3, "\u{1F310}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ContentDetailComponent_div_2_div_19_div_8_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.showLanguageDropdown ? "\u25B2" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showLanguageDropdown);
  }
}
function ContentDetailComponent_div_2_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideTranslation());
    });
    \u0275\u0275text(1, "\u2715 Hide Translation");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Translating...");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "h3");
    \u0275\u0275text(3, "Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "h3");
    \u0275\u0275text(8, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentTranslation.translatedTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentTranslation.translatedDescription);
  }
}
function ContentDetailComponent_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ContentDetailComponent_div_2_div_23_div_4_Template, 4, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ContentDetailComponent_div_2_div_23_div_5_Template, 11, 2, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getSelectedLanguageFlag(), " Translated Content (", ctx_r1.getSelectedLanguageName(), ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.translating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.translating && ctx_r1.currentTranslation);
  }
}
function ContentDetailComponent_div_2_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4C4} Download as PDF");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Generating PDF...");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50 Add to Favorites");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 In Favorites");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Processing...");
    \u0275\u0275elementEnd();
  }
}
function ContentDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(2, "\u2190 Back to Contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h1", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ContentDetailComponent_div_2_p_12_Template, 2, 1, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "h2");
    \u0275\u0275text(17, "\u{1F4D6} Original Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275template(19, ContentDetailComponent_div_2_div_19_Template, 9, 2, "div", 18)(20, ContentDetailComponent_div_2_button_20_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ContentDetailComponent_div_2_div_23_Template, 6, 4, "div", 21);
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "div", 24);
    \u0275\u0275text(27, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25)(29, "h3");
    \u0275\u0275text(30, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 23)(35, "div", 24);
    \u0275\u0275text(36, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 25)(38, "h3");
    \u0275\u0275text(39, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 23)(43, "div", 24);
    \u0275\u0275text(44, "\u{1F194}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 25)(46, "h3");
    \u0275\u0275text(47, "Content ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 26)(51, "button", 27);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takeAssessment());
    });
    \u0275\u0275text(52, "\u{1F4DD} Take Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 28);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadResources());
    });
    \u0275\u0275template(54, ContentDetailComponent_div_2_span_54_Template, 2, 0, "span", 29)(55, ContentDetailComponent_div_2_span_55_Template, 3, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 30);
    \u0275\u0275listener("click", function ContentDetailComponent_div_2_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275template(57, ContentDetailComponent_div_2_span_57_Template, 2, 0, "span", 29)(58, ContentDetailComponent_div_2_span_58_Template, 2, 0, "span", 29)(59, ContentDetailComponent_div_2_span_59_Template, 3, 0, "span", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.getContentBadgeClass(ctx_r1.content.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getContentIcon(ctx_r1.content.type), " ", ctx_r1.content.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Created: ", \u0275\u0275pipeBind2(9, 26, ctx_r1.content.createdAt, "dd MMMM yyyy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.content.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.author);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.showTranslation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTranslation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.content.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTranslation);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 29, ctx_r1.content.updatedAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r1.author == null ? null : ctx_r1.author.name) || ctx_r1.content.authorId || "Unknown");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.content.contentId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("loading", ctx_r1.downloadingPdf);
    \u0275\u0275property("disabled", ctx_r1.downloadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.downloadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.downloadingPdf);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-favorite", ctx_r1.isFavorite)("loading", ctx_r1.processingFavorite);
    \u0275\u0275property("disabled", ctx_r1.processingFavorite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.processingFavorite && !ctx_r1.isFavorite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.processingFavorite && ctx_r1.isFavorite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.processingFavorite);
  }
}
function ContentDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "h2");
    \u0275\u0275text(2, "\u274C Content not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The content you're looking for doesn't exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ContentDetailComponent_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Go Back");
    \u0275\u0275elementEnd()();
  }
}
var ContentDetailComponent = class _ContentDetailComponent {
  constructor(route, router, contentService, translationService, pdfGenerator, favoriteService, notificationService, authService) {
    this.route = route;
    this.router = router;
    this.contentService = contentService;
    this.translationService = translationService;
    this.pdfGenerator = pdfGenerator;
    this.favoriteService = favoriteService;
    this.notificationService = notificationService;
    this.authService = authService;
    this.content = null;
    this.author = null;
    this.loading = true;
    this.downloadingPdf = false;
    this.showTranslation = false;
    this.selectedLanguage = "";
    this.availableLanguages = [];
    this.currentTranslation = null;
    this.translating = false;
    this.showLanguageDropdown = false;
    this.isFavorite = false;
    this.processingFavorite = false;
    this.currentUserId = "1";
  }
  ngOnInit() {
    this.authService.checkAuth();
    const userId = this.authService.getCurrentUserId();
    if (userId)
      this.currentUserId = String(userId);
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadContent(+id);
      this.availableLanguages = this.translationService.getSupportedLanguages();
    }
  }
  loadContent(id) {
    this.contentService.getContentById(id).subscribe({
      next: (content) => {
        this.content = content;
        if (content.authorId)
          this.author = { name: `Author #${content.authorId}` };
        this.checkIfFavorite(id);
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  toggleLanguageDropdown() {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }
  translateToLanguage(languageCode) {
    if (!this.content)
      return;
    this.selectedLanguage = languageCode;
    this.showLanguageDropdown = false;
    this.translating = true;
    this.translationService.getTranslation(this.content.contentId, languageCode).subscribe({
      next: (t) => {
        this.currentTranslation = t;
        this.showTranslation = true;
        this.translating = false;
      },
      error: () => this.createTranslation(languageCode)
    });
  }
  createTranslation(languageCode) {
    if (!this.content)
      return;
    this.translationService.translateContent(this.content.contentId, languageCode).subscribe({
      next: (t) => {
        this.currentTranslation = t;
        this.showTranslation = true;
        this.translating = false;
        this.notificationService.addNotification("success", "\u{1F30D} Translation Complete", `Content translated to ${this.translationService.getLanguageName(languageCode)}`);
      },
      error: () => {
        this.translating = false;
        alert("Error translating content. Please try again.");
      }
    });
  }
  hideTranslation() {
    this.showTranslation = false;
    this.currentTranslation = null;
    this.selectedLanguage = "";
  }
  getSelectedLanguageFlag() {
    return this.translationService.getLanguageFlag(this.selectedLanguage);
  }
  getSelectedLanguageName() {
    return this.translationService.getLanguageName(this.selectedLanguage);
  }
  checkIfFavorite(contentId) {
    this.favoriteService.isFavorite(this.currentUserId, contentId).subscribe({
      next: (r) => this.isFavorite = r.isFavorite,
      error: () => {
      }
    });
  }
  toggleFavorite() {
    if (!this.content || this.processingFavorite)
      return;
    this.processingFavorite = true;
    const action = this.isFavorite ? this.favoriteService.removeFavorite(this.currentUserId, this.content.contentId) : this.favoriteService.addFavorite(this.currentUserId, this.content.contentId);
    action.subscribe({
      next: () => {
        this.isFavorite = !this.isFavorite;
        this.processingFavorite = false;
        this.notificationService.addNotification(this.isFavorite ? "success" : "info", this.isFavorite ? "\u2B50 Added to Favorites" : "\u274C Removed from Favorites", `"${this.content?.title}" ${this.isFavorite ? "added to" : "removed from"} your favorites.`);
      },
      error: () => {
        this.processingFavorite = false;
      }
    });
  }
  downloadResources() {
    if (!this.content)
      return;
    this.downloadingPdf = true;
    try {
      this.pdfGenerator.downloadContentAsPdf(this.content, this.author?.name);
      this.notificationService.addNotification("success", "\u{1F4E5} PDF Downloaded", `"${this.content.title}" downloaded as PDF!`);
    } catch {
      this.notificationService.addNotification("error", "\u274C PDF Failed", "Error generating PDF.");
    } finally {
      this.downloadingPdf = false;
    }
  }
  goBack() {
    this.router.navigate(["/content-list"]);
  }
  takeAssessment() {
    if (this.content?.contentId != null)
      this.router.navigate(["/content-list/assessment", this.content.contentId]);
  }
  getContentIcon(type) {
    switch (type) {
      case "COURS":
        return "\u{1F4DA}";
      case "ARTICLE":
        return "\u{1F4DD}";
      case "VIDEO":
        return "\u{1F3A5}";
      default:
        return "\u{1F4C4}";
    }
  }
  getContentBadgeClass(type) {
    switch (type) {
      case "COURS":
        return "badge-cours";
      case "ARTICLE":
        return "badge-article";
      case "VIDEO":
        return "badge-video";
      default:
        return "badge-default";
    }
  }
  static {
    this.\u0275fac = function ContentDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ContentService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(PdfGeneratorService), \u0275\u0275directiveInject(FavoriteService), \u0275\u0275directiveInject(ContentNotificationService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentDetailComponent, selectors: [["app-content-detail"]], decls: 4, vars: 3, consts: [[1, "content-detail-page"], ["class", "loading-container", 4, "ngIf"], ["class", "content-detail-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "content-detail-container"], [1, "back-button", 3, "click"], [1, "content-detail-header"], [1, "content-meta-info"], [1, "content-badge", 3, "ngClass"], [1, "content-date"], [1, "content-detail-title"], ["class", "content-author", 4, "ngIf"], [1, "content-detail-body"], [1, "content-description-section"], [1, "section-header"], [1, "translate-controls"], ["class", "language-selector", 4, "ngIf"], ["class", "hide-translation-button", 3, "click", 4, "ngIf"], [1, "description-text"], ["class", "translated-content-section", 4, "ngIf"], [1, "content-info-grid"], [1, "info-card"], [1, "info-icon"], [1, "info-content"], [1, "content-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-pdf", 3, "click", "disabled"], [4, "ngIf"], [1, "btn", "btn-favorite", 3, "click", "disabled"], [1, "content-author"], [1, "language-selector"], [1, "translate-button", 3, "click"], [1, "translate-icon"], [1, "dropdown-arrow"], ["class", "language-dropdown", 4, "ngIf"], [1, "language-dropdown"], ["class", "language-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "language-option", 3, "click"], [1, "option-flag"], [1, "option-name"], [1, "hide-translation-button", 3, "click"], [1, "translated-content-section"], [1, "translation-header"], ["class", "translating-indicator", 4, "ngIf"], ["class", "translation-content", 4, "ngIf"], [1, "translating-indicator"], [1, "spinner"], [1, "translation-content"], [1, "translated-title"], [1, "translated-description"], [1, "error-container"]], template: function ContentDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ContentDetailComponent_div_1_Template, 3, 0, "div", 1)(2, ContentDetailComponent_div_2_Template, 60, 32, "div", 2)(3, ContentDetailComponent_div_3_Template, 7, 0, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.content);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.content);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DatePipe], styles: ["\n\n.content-detail-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n  padding-top: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.content-detail-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: white;\n  border: 2px solid #e2e8f0;\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  margin-bottom: 2rem;\n  transition: all 0.3s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n  background: #f8fafc;\n  transform: translateX(-4px);\n}\n.content-detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.content-meta-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.content-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.badge-cours[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.badge-article[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.badge-video[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.badge-default[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.content-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.content-detail-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #1e293b;\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.content-author[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  font-weight: 500;\n  margin-top: 0.5rem;\n}\n.content-detail-body[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.content-description-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.content-description-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.content-description-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.content-description-section[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: #64748b;\n  white-space: pre-wrap;\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.translate-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.language-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n.translate-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.translate-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.translate-button[_ngcontent-%COMP%]   .translate-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.translate-button[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-left: 0.25rem;\n}\n.language-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 200px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.language-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.25rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.language-option[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.language-option[_ngcontent-%COMP%]   .option-flag[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.language-option[_ngcontent-%COMP%]   .option-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #1e293b;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.hide-translation-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.hide-translation-button[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);\n}\n.translated-content-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  border-radius: 16px;\n  border: 2px solid #93c5fd;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.translation-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.translation-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e3a8a;\n  margin: 0;\n}\n.translating-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #667eea;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.translating-indicator[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.translation-content[_ngcontent-%COMP%]   .translated-title[_ngcontent-%COMP%], \n.translation-content[_ngcontent-%COMP%]   .translated-description[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.translation-content[_ngcontent-%COMP%]   .translated-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.translation-content[_ngcontent-%COMP%]   .translated-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e3a8a;\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.translation-content[_ngcontent-%COMP%]   .translated-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.translation-content[_ngcontent-%COMP%]   .translated-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: #1e40af;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  margin: 0;\n  border-left: 4px solid #3b82f6;\n}\n.translation-content[_ngcontent-%COMP%]   .translated-description[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.content-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  transition: all 0.3s;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  transform: translateY(-2px);\n}\n.info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.content-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 1rem;\n  position: relative;\n  min-width: 180px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #1e293b;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.btn-pdf[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 100%);\n  color: white;\n}\n.btn-pdf[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);\n}\n.btn-pdf.loading[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #3b82f6 100%);\n}\n.btn-favorite[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  color: white;\n  transition: all 0.3s ease;\n}\n.btn-favorite[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);\n}\n.btn-favorite.is-favorite[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.btn-favorite.is-favorite[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);\n}\n.btn-favorite.loading[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 100%);\n  cursor: wait;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #667eea;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 3rem;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.error-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.1rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .content-detail-page[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n  .content-detail-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .content-detail-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .content-detail-body[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .translate-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .content-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .content-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .content-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .translation-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .content-detail-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .content-description-section[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%], \n   .content-description-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .translated-content-section[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%], \n   .translated-content-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .translate-button[_ngcontent-%COMP%], \n   .hide-translation-button[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0.625rem 1.25rem;\n  }\n}\n/*# sourceMappingURL=content-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentDetailComponent, { className: "ContentDetailComponent", filePath: "app\\frontoffice\\content-detail\\content-detail.component.ts", lineNumber: 17 });
})();

// src/app/frontoffice/favorites/favorites.component.ts
function FavoritesComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.favoriteContents.length, " content", ctx_r0.favoriteContents.length !== 1 ? "s" : "", " saved");
  }
}
function FavoritesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your favorites...");
    \u0275\u0275elementEnd()();
  }
}
function FavoritesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No favorites yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start adding contents to your favorites to see them here!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275listener("click", function FavoritesComponent_div_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(8, "Explore Contents");
    \u0275\u0275elementEnd()();
  }
}
function FavoritesComponent_div_11_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function FavoritesComponent_div_11_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function FavoritesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function FavoritesComponent_div_11_div_1_Template_div_click_0_listener() {
      const content_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewContent(content_r4.contentId));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function FavoritesComponent_div_11_div_1_Template_button_click_4_listener($event) {
      const content_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFavorite(content_r4, $event));
    });
    \u0275\u0275template(5, FavoritesComponent_div_11_div_1_span_5_Template, 2, 0, "span", 20)(6, FavoritesComponent_div_11_div_1_span_6_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "h3", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 27);
    \u0275\u0275text(17, "View Details \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const content_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getContentBadgeClass(content_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.getContentIcon(content_r4.type), " ", content_r4.type, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.removingFavoriteId === content_r4.contentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.removingFavoriteId !== content_r4.contentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.removingFavoriteId === content_r4.contentId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(content_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r4.description.length > 120 ? content_r4.description.substring(0, 120) + "..." : content_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(15, 9, content_r4.createdAt, "dd MMM yyyy"), "");
  }
}
function FavoritesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, FavoritesComponent_div_11_div_1_Template, 18, 12, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.favoriteContents);
  }
}
var FavoritesComponent = class _FavoritesComponent {
  constructor(favoriteService, notificationService, router, authService) {
    this.favoriteService = favoriteService;
    this.notificationService = notificationService;
    this.router = router;
    this.authService = authService;
    this.favoriteContents = [];
    this.loading = true;
    this.currentUserId = "1";
    this.removingFavoriteId = null;
  }
  ngOnInit() {
    this.authService.checkAuth();
    const userId = this.authService.getCurrentUserId();
    if (userId)
      this.currentUserId = String(userId);
    this.loadFavorites();
  }
  loadFavorites() {
    this.loading = true;
    this.favoriteService.getUserFavoriteContents(this.currentUserId).subscribe({
      next: (contents) => {
        this.favoriteContents = contents;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  removeFavorite(content, event) {
    event.stopPropagation();
    if (!confirm(`Remove "${content.title}" from favorites?`))
      return;
    this.removingFavoriteId = content.contentId;
    this.favoriteService.removeFavorite(this.currentUserId, content.contentId).subscribe({
      next: () => {
        this.favoriteContents = this.favoriteContents.filter((c) => c.contentId !== content.contentId);
        this.removingFavoriteId = null;
        this.notificationService.addNotification("info", "\u274C Removed from Favorites", `"${content.title}" removed from favorites.`, "\u2B50");
      },
      error: () => {
        this.removingFavoriteId = null;
      }
    });
  }
  viewContent(contentId) {
    this.router.navigate(["/content-list/content", contentId]);
  }
  goBack() {
    this.router.navigate(["/content-list"]);
  }
  getContentIcon(type) {
    switch (type) {
      case "COURS":
        return "\u{1F4DA}";
      case "ARTICLE":
        return "\u{1F4DD}";
      case "VIDEO":
        return "\u{1F3A5}";
      default:
        return "\u{1F4C4}";
    }
  }
  getContentBadgeClass(type) {
    switch (type) {
      case "COURS":
        return "badge-cours";
      case "ARTICLE":
        return "badge-article";
      case "VIDEO":
        return "badge-video";
      default:
        return "badge-default";
    }
  }
  static {
    this.\u0275fac = function FavoritesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesComponent)(\u0275\u0275directiveInject(FavoriteService), \u0275\u0275directiveInject(ContentNotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], decls: 13, vars: 4, consts: [[1, "favorites-container"], [1, "favorites-header"], [1, "back-button", 3, "click"], [1, "header-content"], ["class", "subtitle", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "favorites-grid", 4, "ngIf"], [1, "subtitle"], [1, "loading-container"], [1, "loading-spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "btn", "btn-primary", 3, "click"], [1, "favorites-grid"], ["class", "favorite-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "favorite-card", 3, "click"], [1, "card-header"], [1, "content-badge", 3, "ngClass"], ["title", "Remove from favorites", 1, "btn-remove-favorite", 3, "click", "disabled"], [4, "ngIf"], ["class", "spinner-small", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-description"], [1, "card-footer"], [1, "card-date"], [1, "view-link"], [1, "spinner-small"]], template: function FavoritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-fo-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "button", 2);
        \u0275\u0275listener("click", function FavoritesComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(4, "\u2190 Back to Contents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "h1");
        \u0275\u0275text(7, "\u2B50 My Favorite Contents");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FavoritesComponent_p_8_Template, 2, 2, "p", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, FavoritesComponent_div_9_Template, 4, 0, "div", 5)(10, FavoritesComponent_div_10_Template, 9, 0, "div", 6)(11, FavoritesComponent_div_11_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "app-fo-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.favoriteContents.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.favoriteContents.length > 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, FoNavbarComponent, FoFooterComponent, DatePipe], styles: ["\n\n.favorites-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 60vh;\n}\n.favorites-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 2rem;\n  transition: all 0.3s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n  transform: translateX(-4px);\n}\n.header-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.header-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 0;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #f59e0b;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin-bottom: 2rem;\n}\n.empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.favorites-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n}\n.favorite-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.favorite-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.content-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.content-badge.badge-cours[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.content-badge.badge-article[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.content-badge.badge-video[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.btn-remove-favorite[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.btn-remove-favorite[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  transform: scale(1.1);\n}\n.btn-remove-favorite[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #fee2e2;\n  border-top-color: #ef4444;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.75rem;\n  line-height: 1.4;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  line-height: 1.6;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n}\n.view-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #667eea;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=favorites.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "app\\frontoffice\\favorites\\favorites.component.ts", lineNumber: 13 });
})();

// src/app/frontoffice/assessment-test/assessment-test.component.ts
function AssessmentTestComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "\xAD\u0192\xC5\xE5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "strong");
    \u0275\u0275text(6, "Your certification has been generated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "\xAD\u0192\xF4\xBA Check your email to download your certificate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEmailNotification = false);
    });
    \u0275\u0275text(10, " \xD4\xA3\xF2 ");
    \u0275\u0275elementEnd()()();
  }
}
function AssessmentTestComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "Loading assessment...");
    \u0275\u0275elementEnd()();
  }
}
function AssessmentTestComponent_div_4_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " This content doesn't have an associated assessment yet. ");
    \u0275\u0275elementEnd();
  }
}
function AssessmentTestComponent_div_4_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " The assessment questions are not properly formatted. Please contact support. ");
    \u0275\u0275elementEnd();
  }
}
function AssessmentTestComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h2");
    \u0275\u0275text(2, "\xD4\xD8\xEE No assessment available");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AssessmentTestComponent_div_4_p_3_Template, 2, 0, "p", 14)(4, AssessmentTestComponent_div_4_p_4_Template, 2, 0, "p", 14);
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Back to Content");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.assessment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assessment && ctx_r1.questions.length === 0);
  }
}
function AssessmentTestComponent_div_5_div_13_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_5_div_13_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextQuestion());
    });
    \u0275\u0275text(1, " Next \xD4\xE5\xC6 ");
    \u0275\u0275elementEnd();
  }
}
function AssessmentTestComponent_div_5_div_13_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_5_div_13_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitAssessment());
    });
    \u0275\u0275text(1, " Submit Assessment ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.isAllQuestionsAnswered());
  }
}
function AssessmentTestComponent_div_5_div_13_span_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_5_div_13_span_15_Template_span_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.currentQuestionIndex = i_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", i_r8 === ctx_r1.currentQuestionIndex)("answered", q_r9.userAnswer && q_r9.userAnswer.trim() !== "");
    \u0275\u0275property("title", "Question " + (i_r8 + 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r8 + 1, " ");
  }
}
function AssessmentTestComponent_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "label", 28);
    \u0275\u0275text(7, "Your Answer:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AssessmentTestComponent_div_5_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentQuestion.userAnswer, $event) || (ctx_r1.currentQuestion.userAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AssessmentTestComponent_div_5_div_13_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentQuestionIndex < ctx_r1.questions.length - 1 ? ctx_r1.nextQuestion() : null);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30)(10, "button", 31);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_5_div_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousQuestion());
    });
    \u0275\u0275text(11, " \xD4\xE5\xC9 Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AssessmentTestComponent_div_5_div_13_button_12_Template, 2, 0, "button", 32)(13, AssessmentTestComponent_div_5_div_13_button_13_Template, 2, 1, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34);
    \u0275\u0275template(15, AssessmentTestComponent_div_5_div_13_span_15_Template, 2, 6, "span", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Question ", ctx_r1.currentQuestionIndex + 1, " of ", ctx_r1.questions.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentQuestion.question);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentQuestion.userAnswer);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentQuestionIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentQuestionIndex < ctx_r1.questions.length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestionIndex === ctx_r1.questions.length - 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
  }
}
function AssessmentTestComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h1", 18);
    \u0275\u0275text(3, "\xAD\u0192\xF4\xD8 Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275element(12, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AssessmentTestComponent_div_5_div_13_Template, 16, 8, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xD4\xC5\u2592\xB4\xA9\xC5 ", ctx_r1.assessment.duration, " min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xAD\u0192\xC4\xBB Passing: ", ctx_r1.assessment.passingScore, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\xAD\u0192\xF4\xE8 Q ", ctx_r1.currentQuestionIndex + 1, " / ", ctx_r1.questions.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion);
  }
}
function AssessmentTestComponent_div_6_div_34_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\xAD\u0192\xEE\u0192 Perfect Score Badge unlocked!");
    \u0275\u0275elementEnd();
  }
}
function AssessmentTestComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "p");
    \u0275\u0275text(2, "\xD4\xA3\xE0 You passed the assessment!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\xAD\u0192\xC5\xE5 Your certification has been generated. Check your email!");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AssessmentTestComponent_div_6_div_34_p_5_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.result.score === 100);
  }
}
function AssessmentTestComponent_div_6_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p");
    \u0275\u0275text(2, "\xD4\xD8\xEE You didn't reach the passing score.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\xAD\u0192\xC6\xAC Keep learning and try again!");
    \u0275\u0275elementEnd()();
  }
}
function AssessmentTestComponent_div_6_div_39_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66)(1, "strong");
    \u0275\u0275text(2, "Correct answer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", q_r11.correctAnswer, " ");
  }
}
function AssessmentTestComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 64)(9, "strong");
    \u0275\u0275text(10, "Your answer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AssessmentTestComponent_div_6_div_39_p_12_Template, 4, 1, "p", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275classProp("correct", q_r11.isCorrect)("incorrect", !q_r11.isCorrect);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r12 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r11.isCorrect ? "\xD4\xA3\xE0" : "\xD4\xD8\xEE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r11.question);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", q_r11.userAnswer || "(No answer)", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !q_r11.isCorrect);
  }
}
function AssessmentTestComponent_div_6_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_6_button_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryAssessment());
    });
    \u0275\u0275text(1, " Try Again ");
    \u0275\u0275elementEnd();
  }
}
function AssessmentTestComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "div", 43)(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 46)(13, "div", 47)(14, "span", 48);
    \u0275\u0275text(15, "\xD4\xA3\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 49);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 50);
    \u0275\u0275text(19, "Correct");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 47)(21, "span", 48);
    \u0275\u0275text(22, "\xD4\xD8\xEE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 49);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 50);
    \u0275\u0275text(26, "Incorrect");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 47)(28, "span", 48);
    \u0275\u0275text(29, "\xAD\u0192\xF4\xE8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 49);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 50);
    \u0275\u0275text(33, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, AssessmentTestComponent_div_6_div_34_Template, 6, 1, "div", 51)(35, AssessmentTestComponent_div_6_div_35_Template, 5, 0, "div", 52);
    \u0275\u0275elementStart(36, "div", 53)(37, "h3");
    \u0275\u0275text(38, "Review Your Answers:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, AssessmentTestComponent_div_6_div_39_Template, 13, 9, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 55)(41, "button", 15);
    \u0275\u0275listener("click", function AssessmentTestComponent_div_6_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(42, " Back to Content ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, AssessmentTestComponent_div_6_button_43_Template, 2, 0, "button", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r1.result.passed)("fail", !ctx_r1.result.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.passed ? "\xAD\u0192\xC4\xEB" : "\xAD\u0192\xFF\xF6", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.passed ? "Congratulations!" : "Not Quite There", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("passed", ctx_r1.result.passed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.result.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Passing Score: ", ctx_r1.result.passingScore, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.result.correctAnswers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.result.incorrectAnswers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.result.totalQuestions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.result.passed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.result.passed);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.result.passed);
  }
}
var AssessmentTestComponent = class _AssessmentTestComponent {
  constructor(route, router, assessmentService, certificationService, notificationService, authService, http) {
    this.route = route;
    this.router = router;
    this.assessmentService = assessmentService;
    this.certificationService = certificationService;
    this.notificationService = notificationService;
    this.authService = authService;
    this.http = http;
    this.assessment = null;
    this.contentId = 0;
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.showResult = false;
    this.result = null;
    this.loading = true;
    this.showEmailNotification = false;
    this.passed = false;
    this.userScore = 0;
  }
  ngOnInit() {
    this.authService.checkAuth();
    const contentIdStr = this.route.snapshot.paramMap.get("contentId");
    if (contentIdStr) {
      this.contentId = +contentIdStr;
      this.loadAssessmentForContent(this.contentId);
    } else {
      this.loading = false;
    }
  }
  loadAssessmentForContent(contentId) {
    this.assessmentService.getAssessmentByContentId(contentId).subscribe({
      next: (assessment) => {
        this.assessment = assessment;
        this.parseQuestions();
        this.loading = false;
      },
      error: () => {
        this.assessment = null;
        this.loading = false;
      }
    });
  }
  parseQuestions() {
    if (!this.assessment?.questions) {
      this.questions = [];
      return;
    }
    try {
      const parsed = JSON.parse(this.assessment.questions);
      if (Array.isArray(parsed)) {
        this.questions = parsed.map((q) => ({
          question: q.question || "",
          correctAnswer: q.correctAnswer || "",
          userAnswer: "",
          isCorrect: false
        }));
      } else {
        this.questions = [];
      }
    } catch {
      this.questions = [];
    }
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1)
      this.currentQuestionIndex++;
  }
  previousQuestion() {
    if (this.currentQuestionIndex > 0)
      this.currentQuestionIndex--;
  }
  submitAssessment() {
    if (!this.assessment || !this.questions.length)
      return;
    let correct = 0;
    this.questions.forEach((q) => {
      q.isCorrect = (q.userAnswer || "").trim().toLowerCase() === (q.correctAnswer || "").trim().toLowerCase();
      if (q.isCorrect)
        correct++;
    });
    const score = Math.round(correct / this.questions.length * 100);
    const passed = score >= this.assessment.passingScore;
    this.result = { totalQuestions: this.questions.length, correctAnswers: correct, incorrectAnswers: this.questions.length - correct, score, passed, passingScore: this.assessment.passingScore };
    this.passed = passed;
    this.userScore = score;
    this.showResult = true;
    if (passed) {
      this.createCertification(score);
      this.showEmailNotification = true;
      setTimeout(() => this.showEmailNotification = false, 8e3);
    }
  }
  createCertification(score) {
    if (!this.assessment)
      return;
    const rawId = this.authService.getCurrentUserId();
    const userId = rawId ? Number(rawId) : null;
    if (!userId) {
      console.error("No logged-in user ID found");
      return;
    }
    const user = this.authService.currentUser;
    const userPayload = {
      id: userId,
      name: user?.name || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User",
      email: user?.email || "",
      role: user?.role || "FREELANCER",
      status: "ACTIVE"
    };
    this.http.post(`${environment.apiUrl}/User/addUser`, userPayload).subscribe({
      next: () => this.saveCertification(score, userId),
      error: () => {
        this.saveCertification(score, userId);
      }
    });
  }
  saveCertification(score, userId) {
    const cert = {
      score,
      validity: "1 year",
      verifiedBy: "System",
      userId,
      contentId: this.contentId,
      assessmentId: this.assessment.assessmentId
    };
    this.certificationService.createCertification(cert).subscribe({
      next: () => {
        const userName = this.authService.currentUser?.name || "User";
        const courseName = this.assessment?.contentTitle || "Course";
        this.notificationService.addNotification("certificate", "\u{1F3C6} Certification Generated", `Congratulations ${userName}! Your certificate for "${courseName}" has been generated.`, "\u{1F393}");
        if (score === 100)
          this.notificationService.addNotification("success", "\u{1F3C5} Perfect Score Badge", `${userName} earned the Perfect Score Badge!`, "\u{1F3C6}");
      },
      error: (err) => console.error("Failed to create certification:", err)
    });
  }
  retryAssessment() {
    this.currentQuestionIndex = 0;
    this.showResult = false;
    this.result = null;
    this.passed = false;
    this.userScore = 0;
    this.showEmailNotification = false;
    this.questions.forEach((q) => {
      q.userAnswer = "";
      q.isCorrect = false;
    });
  }
  goBack() {
    this.router.navigate(["/content-list/content", this.contentId]);
  }
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex] || null;
  }
  get progress() {
    return this.questions.length === 0 ? 0 : Math.round((this.currentQuestionIndex + 1) / this.questions.length * 100);
  }
  isAllQuestionsAnswered() {
    return this.questions.every((q) => q.userAnswer && q.userAnswer.trim() !== "");
  }
  static {
    this.\u0275fac = function AssessmentTestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssessmentTestComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AssessmentService), \u0275\u0275directiveInject(CertificationService), \u0275\u0275directiveInject(ContentNotificationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessmentTestComponent, selectors: [["app-assessment-test"]], decls: 8, vars: 5, consts: [["class", "email-notification", 4, "ngIf"], [1, "assessment-page"], ["class", "loading-container", 4, "ngIf"], ["class", "no-assessment", 4, "ngIf"], ["class", "assessment-container", 4, "ngIf"], ["class", "result-container", 4, "ngIf"], [1, "email-notification"], [1, "notification-content"], [1, "notification-icon"], [1, "notification-text"], [1, "notification-close", 3, "click"], [1, "loading-container"], [1, "loading-spinner"], [1, "no-assessment"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "assessment-container"], [1, "assessment-header"], [1, "assessment-title"], [1, "assessment-info"], [1, "info-badge"], [1, "progress-bar-container"], [1, "progress-bar"], ["class", "question-card", 4, "ngIf"], [1, "question-card"], [1, "question-number"], [1, "question-text"], [1, "answer-section"], [1, "answer-label"], ["type", "text", "placeholder", "Type your answer here...", 1, "answer-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "navigation-buttons"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "questions-overview"], ["class", "question-dot", 3, "active", "answered", "title", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "question-dot", 3, "click", "title"], [1, "result-container"], [1, "result-card"], [1, "result-icon"], [1, "result-title"], [1, "score-display"], [1, "score-circle"], [1, "score-number"], [1, "passing-score"], [1, "result-stats"], [1, "stat-item"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], ["class", "success-message", 4, "ngIf"], ["class", "fail-message", 4, "ngIf"], [1, "answers-review"], ["class", "review-item", 3, "correct", "incorrect", 4, "ngFor", "ngForOf"], [1, "result-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "success-message"], [1, "fail-message"], [1, "review-item"], [1, "review-header"], [1, "review-number"], [1, "review-status"], [1, "review-question"], [1, "review-answer"], ["class", "review-correct", 4, "ngIf"], [1, "review-correct"], [1, "btn", "btn-secondary", 3, "click"]], template: function AssessmentTestComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-fo-navbar");
        \u0275\u0275template(1, AssessmentTestComponent_div_1_Template, 11, 0, "div", 0);
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275template(3, AssessmentTestComponent_div_3_Template, 3, 0, "div", 2)(4, AssessmentTestComponent_div_4_Template, 7, 2, "div", 3)(5, AssessmentTestComponent_div_5_Template, 14, 7, "div", 4)(6, AssessmentTestComponent_div_6_Template, 44, 17, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "app-fo-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEmailNotification);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && (!ctx.assessment || ctx.questions.length === 0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.assessment && ctx.questions.length > 0 && !ctx.showResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResult && ctx.result);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, FoNavbarComponent, FoFooterComponent], styles: ["\n\n.email-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideInRight 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.notification-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  padding: 1.5rem 2rem;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  max-width: 400px;\n  position: relative;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  margin-bottom: 0.25rem;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.95;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s;\n}\n.notification-content[_ngcontent-%COMP%]   .notification-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.assessment-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n  padding-top: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 50vh;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #667eea;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.assessment-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.assessment-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.assessment-header[_ngcontent-%COMP%]   .assessment-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.assessment-header[_ngcontent-%COMP%]   .assessment-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.assessment-header[_ngcontent-%COMP%]   .assessment-info[_ngcontent-%COMP%]   .info-badge[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #667eea;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.progress-bar-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transition: width 0.3s ease;\n}\n.question-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.question-card[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.question-card[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n}\n.answer-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.answer-section[_ngcontent-%COMP%]   .answer-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.75rem;\n  font-size: 1rem;\n}\n.answer-section[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.5rem;\n  font-size: 1.1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  transition: all 0.3s;\n  box-sizing: border-box;\n}\n.answer-section[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.answer-section[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.navigation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.navigation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);\n}\n.questions-overview[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n}\n.questions-overview[_ngcontent-%COMP%]   .question-dot[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #64748b;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.questions-overview[_ngcontent-%COMP%]   .question-dot[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.questions-overview[_ngcontent-%COMP%]   .question-dot.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transform: scale(1.1);\n}\n.questions-overview[_ngcontent-%COMP%]   .question-dot.answered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.questions-overview[_ngcontent-%COMP%]   .question-dot.answered.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.result-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.result-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.result-card[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  text-align: center;\n  margin-bottom: 1rem;\n  animation: _ngcontent-%COMP%_bounceIn 0.6s ease;\n}\n.result-card[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #1e293b;\n}\n@keyframes _ngcontent-%COMP%_bounceIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.score-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 30px rgba(239, 68, 68, 0.3);\n  animation: _ngcontent-%COMP%_scaleIn 0.5s ease;\n}\n.score-display[_ngcontent-%COMP%]   .score-circle.passed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.3);\n}\n.score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.passing-score[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748b;\n  font-size: 1.1rem;\n  margin-bottom: 2rem;\n}\n.result-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.result-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n}\n.result-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.result-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n}\n.result-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.success-message[_ngcontent-%COMP%], \n.fail-message[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  text-align: center;\n  font-size: 1.1rem;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fail-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  border: 2px solid #6ee7b7;\n  color: #065f46;\n}\n.fail-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 2px solid #fca5a5;\n  color: #991b1b;\n}\n.answers-review[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 2px solid #e2e8f0;\n}\n.answers-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left: 4px solid #e2e8f0;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  border-radius: 8px;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item.correct[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  border-left-color: #10b981;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item.incorrect[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-left-color: #ef4444;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-status[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-question[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.75rem;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-answer[_ngcontent-%COMP%] {\n  color: #475569;\n  margin-bottom: 0.5rem;\n}\n.answers-review[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-correct[_ngcontent-%COMP%] {\n  color: #065f46;\n  font-weight: 600;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-top: 2rem;\n}\n.result-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.no-assessment[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 3rem;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.no-assessment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n}\n.no-assessment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.no-assessment[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.no-assessment[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transition: all 0.3s;\n}\n.no-assessment[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n@media (max-width: 768px) {\n  .assessment-page[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n  .assessment-container[_ngcontent-%COMP%], \n   .result-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .question-card[_ngcontent-%COMP%], \n   .result-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .question-text[_ngcontent-%COMP%] {\n    font-size: 1.25rem !important;\n  }\n  .result-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .navigation-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .navigation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .result-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .result-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=assessment-test.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessmentTestComponent, { className: "AssessmentTestComponent", filePath: "app\\frontoffice\\assessment-test\\assessment-test.component.ts", lineNumber: 33 });
})();

// src/app/frontoffice/frontoffice-routing.module.ts
var routes = [
  // Layout wrapper for main frontoffice pages
  {
    path: "",
    component: FoLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", redirectTo: "", pathMatch: "full" },
      { path: "register", component: RegisterComponent },
      { path: "projects", component: AvailableProjectsComponent },
      { path: "projects/:id", component: ProjectDetailsComponent },
      { path: "courses-resources", component: CoursesResourcesComponent },
      { path: "events", component: EventsComponent },
      { path: "available-projects", redirectTo: "projects", pathMatch: "full" },
      { path: "available-projects/:id", redirectTo: "projects/:id", pathMatch: "full" },
      { path: "my-applications", component: MyApplicationsComponent },
      { path: "ai-recommendations", component: AiRecommendationsComponent },
      { path: "chat-assistant", component: ChatAssistantComponent },
      { path: "profile-settings", component: ProfileSettingsComponent },
      { path: "projects-milestones", component: ProjectsMilestonesComponent },
      { path: "subscription-management", component: SubscriptionManagementComponent },
      { path: "my-subscription", component: MySubscriptionComponent },
      { path: "subscription-abonnement/:planId/:planName", component: SubscriptionAbonnementComponent },
      { path: "subscription-payment/:subscriptionId", component: SubscriptionPaymentComponent }
    ]
  },
  // Content routes — each has its own navbar/footer, no layout wrapper needed
  { path: "content-list", component: ContentListComponent },
  { path: "content-list/favorites", component: FavoritesComponent },
  { path: "content-list/assessment/:contentId", component: AssessmentTestComponent },
  { path: "content-list/content/:id", component: ContentDetailComponent }
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

// src/app/frontoffice/projects-home/projects-home.component.ts
function ProjectsHomeComponent_div_27_Template(rf, ctx) {
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
function ProjectsHomeComponent_div_29_span_7_Template(rf, ctx) {
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
function ProjectsHomeComponent_div_29_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function ProjectsHomeComponent_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ProjectsHomeComponent_div_29_div_8_span_1_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getStarsArray(card_r2.stars));
  }
}
function ProjectsHomeComponent_div_29_span_9_Template(rf, ctx) {
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
function ProjectsHomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32)(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectsHomeComponent_div_29_span_7_Template, 2, 1, "span", 34)(8, ProjectsHomeComponent_div_29_div_8_Template, 2, 1, "div", 35)(9, ProjectsHomeComponent_div_29_span_9_Template, 2, 1, "span", 36);
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
var ProjectsHomeComponent = class _ProjectsHomeComponent {
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
      this.router.navigate(["/register"]);
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
    this.\u0275fac = function ProjectsHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsHomeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsHomeComponent, selectors: [["app-projects-home"]], decls: 60, vars: 2, consts: [[1, "hero"], [1, "hero-bg"], [1, "bg-glow", "bg-glow-1"], [1, "bg-glow", "bg-glow-2"], [1, "bg-grid"], [1, "hero-container"], [1, "hero-content"], [1, "hero-badge"], [1, "badge-dot"], [1, "hero-title"], [1, "title-accent"], [1, "hero-description"], [1, "hero-actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "hero-stats"], ["class", "stat", 4, "ngFor", "ngForOf"], [1, "hero-cards"], ["class", "project-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["id", "how-it-works", 1, "features"], [1, "features-container"], [1, "section-title"], [1, "text-gradient"], [1, "section-sub"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "project-card"], [1, "card-icon"], [1, "card-content"], [1, "card-label"], ["class", "card-title", 4, "ngIf"], ["class", "card-stars", 4, "ngIf"], ["class", "card-sub", 4, "ngIf"], [1, "card-title"], [1, "card-stars"], [4, "ngFor", "ngForOf"], [1, "card-sub"]], template: function ProjectsHomeComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_button_click_22_listener() {
          return ctx.getStarted();
        });
        \u0275\u0275text(23, " Get started for free \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function ProjectsHomeComponent_Template_button_click_24_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(25, " I already have an account ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 15);
        \u0275\u0275template(27, ProjectsHomeComponent_div_27_Template, 5, 2, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 17);
        \u0275\u0275template(29, ProjectsHomeComponent_div_29_Template, 10, 11, "div", 18);
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
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background: var(--fo-bg-primary);\n  display: flex;\n  align-items: center;\n  padding-top: 80px;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n  pointer-events: none;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--primary);\n  top: -100px;\n  right: -100px;\n  animation: _ngcontent-%COMP%_pulse 6s ease-in-out infinite;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-glow.bg-glow-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: var(--accent-secondary);\n  bottom: -50px;\n  left: -50px;\n  animation: _ngcontent-%COMP%_pulse 8s ease-in-out infinite reverse;\n}\n.hero-bg[_ngcontent-%COMP%]   .bg-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image:\n    linear-gradient(rgba(79, 110, 247, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(79, 110, 247, 0.05) 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.15;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.22;\n  }\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 80px 32px;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 80px;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  position: relative;\n  z-index: 2;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(79, 110, 247, 0.12);\n  border: 1px solid rgba(79, 110, 247, 0.25);\n  border-radius: 20px;\n  color: var(--primary-light);\n  font-size: 13px;\n  font-weight: 600;\n  width: fit-content;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--accent);\n  border-radius: 50%;\n  box-shadow: 0 0 8px var(--accent);\n  animation: _ngcontent-%COMP%_blink 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 68px);\n  font-weight: 800;\n  line-height: 1.05;\n  color: var(--fo-text-primary);\n  letter-spacing: -2px;\n}\n.hero-title[_ngcontent-%COMP%]   .title-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #00e5ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-description[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  line-height: 1.7;\n  max-width: 420px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 600;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(79, 110, 247, 0.4);\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: transparent;\n  color: var(--fo-text-secondary);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-sm);\n  font-size: 15px;\n  font-weight: 500;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.25s;\n  position: relative;\n  z-index: 2;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  padding-top: 8px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--fo-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fo-text-muted);\n  margin-top: 2px;\n}\n.hero-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-md);\n  backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_slideInRight 0.5s ease both;\n  transition: all 0.25s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateX(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.project-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fo-text-primary);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fo-text-muted);\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-stars[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.features[_ngcontent-%COMP%] {\n  background: var(--fo-bg-secondary);\n  padding: 100px 32px;\n  border-top: 1px solid var(--fo-border);\n}\n.features-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  text-align: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(32px, 4vw, 48px);\n  font-weight: 800;\n  color: var(--fo-text-primary);\n  margin-bottom: 12px;\n  letter-spacing: -1px;\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 16px;\n  margin-bottom: 60px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--fo-bg-card);\n  border: 1px solid var(--fo-border);\n  border-radius: var(--radius-lg);\n  padding: 36px 28px;\n  text-align: left;\n  transition: all 0.3s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 110, 247, 0.4);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 20px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fo-text-primary);\n  margin-bottom: 10px;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fo-text-secondary);\n  font-size: 15px;\n  line-height: 1.6;\n}\n@media (max-width: 900px) {\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n    padding: 60px 20px;\n  }\n  .hero-cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=projects-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsHomeComponent, { className: "ProjectsHomeComponent", filePath: "app\\frontoffice\\projects-home\\projects-home.component.ts", lineNumber: 25 });
})();

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
      FrontofficeRoutingModule,
      SharedModule
    ] });
  }
};
export {
  FrontofficeModule
};
//# sourceMappingURL=chunk-YRH7TU5G.js.map
