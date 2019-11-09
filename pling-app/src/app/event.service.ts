import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'https://pling-258309.appspot.com/api/events';
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this.eventsUrl);
  }
}
