import { Component, OnInit, Input } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  @Input() events = [];
  week = [
    {
      name: "Monday",
      events: []
    },
    {
      name: "Tuesday",
      events: []
    },
    {
      name: "Wednesday",
      events: []
    },
    {
      name: "Thursday",
      events: []
    },
    {
      name: "Friday",
      events: []
    },
    {
      name: "Saturday",
      events: []
    },
    {
      name: "Sunday",
      events: []
    }
  ];

  constructor() {}

  ngOnInit() {
    this.fillWeekEvents();

    const scrollEl = document.querySelector(".scroll-container") as HTMLElement;

    const scrollHeight =
      window.innerHeight - scrollEl.getBoundingClientRect().top - 16;
    scrollEl.style.height = `${scrollHeight}px`;
  }

  fillWeekEvents() {
    this.events
      .filter(event => this.isSameWeek(event))
      .forEach(event => {
        const start = new Date(event.start);
        const dayNr = start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
        this.week[dayNr].events.push(event);
      });
  }

  isSameWeek(event) {
    const today = new Date();
    const dayNr = today.getDay() - 1 === -1 ? 6 : today.getDay() - 1;
    const monday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - dayNr
    );
    const sunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (7 - dayNr)
    );

    const start = new Date(event.start);

    return start > monday && start < sunday;
  }

  isToday(index: number): boolean {
    const day = new Date().getDay() - 1;
    return day === -1 ? index === 6 : index === day;
  }
}
