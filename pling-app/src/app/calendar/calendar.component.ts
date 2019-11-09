import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService
      .getEvents()
      .subscribe(res => (this.events = res), err => console.log(err));
  }
}
