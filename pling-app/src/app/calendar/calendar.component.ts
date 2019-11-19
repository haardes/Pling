import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  loading = true;
  events = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      res => {
        this.events = res;
        this.loading = false;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }

        console.log(err);
      }
    );
  }
/*
  shareEvent(event) {
    const shareTo = prompt('Please enter a valid userid');
    const data = {
      userid: shareTo,
      eventdata: event,
    };

    this.eventService.shareEvent(data).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  } */
}
