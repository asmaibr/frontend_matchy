import {
  HttpClient,
  Subject,
  catchError,
  environment,
  map,
  of,
  timeout,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-74CLTESD.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/notifications`;
  }
  getForUser(userId) {
    return this.http.get(`${this.api}/user/${userId}`);
  }
  getUnread(userId) {
    return this.http.get(`${this.api}/user/${userId}/unread`);
  }
  countUnread(userId) {
    return this.http.get(`${this.api}/user/${userId}/count`);
  }
  markAsRead(id) {
    return this.http.patch(`${this.api}/${id}/read`, {});
  }
  markAllAsRead(userId) {
    return this.http.patch(`${this.api}/user/${userId}/read-all`, {});
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/chatbot.service.ts
var ChatbotService = class _ChatbotService {
  constructor(http) {
    this.http = http;
    this.API_URL = `${environment.apiUrl}/chat`;
  }
  sendMessage(history) {
    return this.http.post(this.API_URL, { history }).pipe(timeout(1e4), map((res) => {
      const text = String(res?.text ?? "").trim();
      const safeText = text || "AI assistant returned an empty response. Please try again.";
      return {
        content: [{ type: "text", text: safeText }]
      };
    }), catchError((err) => {
      console.error("Erreur ChatbotService:", err);
      return of({
        content: [{ type: "text", text: "\u{1F50C} Groq service unavailable right now. Please try again." }]
      });
    }));
  }
  static {
    this.\u0275fac = function ChatbotService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatbotService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatbotService, factory: _ChatbotService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/proposal.service.ts
var ProposalService = class _ProposalService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/proposals`;
  }
  getAll(projectId, freelancerId) {
    let params = {};
    if (projectId)
      params["projectId"] = projectId;
    if (freelancerId)
      params["freelancerId"] = freelancerId;
    return this.http.get(this.api, { params });
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(proposal) {
    return this.http.post(this.api, proposal);
  }
  updateStatus(id, status, feedback) {
    return this.http.patch(`${this.api}/${id}/status`, { status, feedback });
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  getStats() {
    return this.http.get(`${this.api}/stats`);
  }
  static {
    this.\u0275fac = function ProposalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProposalService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProposalService, factory: _ProposalService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/websocket.service.ts
var WebSocketService = class _WebSocketService {
  constructor() {
    this.ws = null;
    this.notificationSubject = new Subject();
    this.userId = "";
  }
  connect(userId) {
    if (this.ws?.readyState === WebSocket.OPEN)
      return;
    this.userId = userId;
    this.tryConnect();
  }
  tryConnect() {
    try {
      const url = `ws://localhost:8080/ws/websocket`;
      this.ws = new WebSocket(url);
      this.ws.onopen = () => {
        console.log("[WS] Connected");
        const subscribeFrame = `SUBSCRIBE
destination:/topic/notifications/${this.userId}
id:sub-0

\0`;
        this.ws?.send(subscribeFrame);
      };
      this.ws.onmessage = (event) => {
        try {
          const body = event.data;
          const jsonStart = body.indexOf("{");
          if (jsonStart !== -1) {
            const json = body.substring(jsonStart, body.lastIndexOf("}") + 1);
            const notif = JSON.parse(json);
            this.notificationSubject.next(notif);
          }
        } catch (e) {
        }
      };
      this.ws.onclose = () => {
        this.reconnectTimer = setTimeout(() => this.tryConnect(), 5e3);
      };
      this.ws.onerror = () => {
        this.ws?.close();
      };
    } catch (e) {
      console.warn("[WS] Connection failed, will retry");
      this.reconnectTimer = setTimeout(() => this.tryConnect(), 5e3);
    }
  }
  disconnect() {
    clearTimeout(this.reconnectTimer);
    this.ws?.close();
    this.ws = null;
  }
  onNotification() {
    return this.notificationSubject.asObservable();
  }
  static {
    this.\u0275fac = function WebSocketService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebSocketService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebSocketService, factory: _WebSocketService.\u0275fac, providedIn: "root" });
  }
};

export {
  NotificationService,
  ChatbotService,
  ProposalService,
  WebSocketService
};
//# sourceMappingURL=chunk-QQ7LITVV.js.map
