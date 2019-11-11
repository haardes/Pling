import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EVENT_URL = 'https://pling-258309.appspot.com/api/events';
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this.EVENT_URL);
  }

  createEvent(eventData) {
    return this.http.post<any>(this.EVENT_URL, eventData);
  }
}
