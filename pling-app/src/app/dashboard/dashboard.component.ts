import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  week = [
    {
      name: 'monday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'tuesday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'wednesday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'thursday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'friday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'saturday',
      events: [
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        },
        {
          eventid: 1,
          userid: 1,
          title: 'Event title',
          location: 'Event location',
          description: 'Event description',
          previousVersion: null,
          start: '2019-11-15 00:00:00',
          end: '2019-11-15 12:00:00'
        }
      ]
    },
    {
      name: 'sunday',
      events: []
    }
  ];
  constructor() {}

  ngOnInit() {
    const scrollEl = document.querySelector('.scroll-container') as HTMLElement;
    const notificationEl = document.querySelector('.notifications') as HTMLElement;

    const scrollHeight = window.innerHeight - scrollEl.getBoundingClientRect().top - 16;
    scrollEl.style.height = `${scrollHeight}px`;

    const notifHeight = window.innerHeight - notificationEl.getBoundingClientRect().top - 128;
    notificationEl.style.height = `${notifHeight}px`;
  }

  isToday(index: number): boolean {
    const day = new Date().getDay() - 1;
    return day === -1 ? index === 6 : index === day;
  }
}
