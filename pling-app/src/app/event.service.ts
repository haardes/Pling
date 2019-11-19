import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private EVENT_URL = 'https://pling-258309.appspot.com/api/events';
  private SHARE_EVENT_URL = 'https://pling-258309.appspot.com/api/events/share';
  constructor(private http: HttpClient, private auth: AuthService) {}

  getEvents() {
    return this.http.get<any>(this.EVENT_URL);
  }

  createEvent(eventData) {
    return this.http.post<any>(this.EVENT_URL, eventData);
  }
/*
  shareEvent(data) {
    return this.http.post<any>(this.SHARE_EVENT_URL, data);
  } */
}
