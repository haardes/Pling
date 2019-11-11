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
    console.log(document.querySelector('.scroll-container').getBoundingClientRect());
    document.querySelector('.scroll-container').style.height = '100px';
  }

  isToday(index: number): boolean {
    const day = new Date().getDay() - 1;
    return day === -1 ? index === 6 : index === day;
  }
}
