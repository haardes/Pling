import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const notificationEl = document.querySelector('app-notifications') as HTMLElement;
    const notifHeight =
      window.innerHeight - notificationEl.getBoundingClientRect().top - 128;
    notificationEl.style.height = `${notifHeight}px`;
  }
}
