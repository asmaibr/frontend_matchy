import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = `${environment.apiUrl}/evenements/chat`;

  constructor(private http: HttpClient) {}

  sendMessage(history: ChatMessage[]): Observable<{ text: string }> {
    // Map history to remove timestamp for backend compatibility
    const backendHistory = history.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    return this.http.post<{ text: string }>(this.apiUrl, { history: backendHistory });
  }
}
