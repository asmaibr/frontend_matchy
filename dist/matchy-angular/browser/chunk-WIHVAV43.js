import {
  AuthService,
  HttpClient,
  Router,
  environment,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-74CLTESD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/users`;
  }
  toUser(u) {
    return __spreadProps(__spreadValues({}, u), { name: `${u.firstName} ${u.lastName}`, city: u.location });
  }
  getAll() {
    return this.http.get(this.api).pipe(map((list) => list.map((u) => this.toUser(u))));
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`).pipe(map((u) => this.toUser(u)));
  }
  getByRole(role) {
    return this.http.get(`${this.api}/role/${role}`).pipe(map((list) => list.map((u) => this.toUser(u))));
  }
  create(user) {
    return this.http.post(this.api, user).pipe(map((u) => this.toUser(u)));
  }
  update(id, user) {
    return this.http.put(`${this.api}/${id}`, user).pipe(map((u) => this.toUser(u)));
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.api}/${id}/status`, { status }).pipe(map((u) => this.toUser(u)));
  }
  getDashboardStats() {
    return this.http.get(`${this.api}/stats/dashboard`);
  }
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/project.service.ts
var ProjectService = class _ProjectService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/projects`;
  }
  getAll(status, clientId) {
    let params = {};
    if (status)
      params["status"] = status;
    if (clientId)
      params["clientId"] = clientId;
    return this.http.get(this.api, { params });
  }
  getOpen() {
    return this.http.get(`${this.api}/open`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(project) {
    return this.http.post(this.api, project);
  }
  update(id, project) {
    return this.http.put(`${this.api}/${id}`, project);
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.api}/${id}/status`, { status });
  }
  getStats() {
    return this.http.get(`${this.api}/stats`);
  }
  // ── Freelancer soumet le livrable ─────────────────
  deliver(id, deliveryLink, deliveryMessage) {
    return this.http.patch(`${this.api}/${id}/deliver`, {
      deliveryLink,
      deliveryMessage: deliveryMessage ?? ""
    });
  }
  // ── Client confirme + déclenche le paiement ───────
  completeProject(id, clientId, proposalId) {
    return this.http.patch(`${this.api}/${id}/complete`, {
      clientId,
      proposalId
    });
  }
  // ── Client demande une révision ───────────────────
  requestRevision(id, revisionMessage, clientId) {
    return this.http.patch(`${this.api}/${id}/revision`, {
      revisionMessage,
      clientId
    });
  }
  // ── Projets livrés en attente de confirmation ─────
  getDelivered(clientId) {
    return this.http.get(`${this.api}/delivered`, {
      params: { clientId }
    });
  }
  static {
    this.\u0275fac = function ProjectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/guards/auth.guard.ts
var AdminGuard = class _AdminGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isAdmin())
      return true;
    this.authService.setRedirectUrl(this.router.url);
    this.router.navigate(["/backoffice/login"]);
    return false;
  }
  static {
    this.\u0275fac = function AdminGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminGuard, factory: _AdminGuard.\u0275fac, providedIn: "root" });
  }
};
var ClientGuard = class _ClientGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isClient())
      return true;
    this.authService.setRedirectUrl(this.router.url);
    this.router.navigate(["/backoffice/login"]);
    return false;
  }
  static {
    this.\u0275fac = function ClientGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientGuard, factory: _ClientGuard.\u0275fac, providedIn: "root" });
  }
};
var FreelancerGuard = class _FreelancerGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated && this.authService.isFreelancer())
      return true;
    this.authService.setRedirectUrl(this.router.url);
    this.router.navigate(["/backoffice/login"]);
    return false;
  }
  static {
    this.\u0275fac = function FreelancerGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FreelancerGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FreelancerGuard, factory: _FreelancerGuard.\u0275fac, providedIn: "root" });
  }
};
var AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    this.authService.checkAuth();
    if (this.authService.isAuthenticated)
      return true;
    this.authService.setRedirectUrl(this.router.url);
    this.router.navigate(["/backoffice/login"]);
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService,
  ProjectService,
  AdminGuard,
  ClientGuard,
  FreelancerGuard
};
//# sourceMappingURL=chunk-WIHVAV43.js.map
