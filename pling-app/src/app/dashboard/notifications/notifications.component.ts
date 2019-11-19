import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  @Input() events = [];
  newEventsLoaded = false;
  newEvents = [];

  constructor() {}

  ngOnInit() {
    const notificationEl = document.querySelector('app-notifications') as HTMLElement;
    const notifHeight =
      window.innerHeight - notificationEl.getBoundingClientRect().top - 128;
    notificationEl.style.height = `${notifHeight}px`;
    this.newEvents = this.getNewEvents();
    this.newEventsLoaded = true;
  }

  getNewEvents() {
    return this.events.filter(event => {
      return (
        new Date(event.timestamp) >
        new Date(JSON.parse(localStorage.getItem('user')).lastLogin)
      );
    });
  }
}
