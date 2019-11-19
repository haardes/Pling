import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateComponent } from '../events/create/create.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  events = [];
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(
      res => {
        this.events = res.events;
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

  ngOnInit() {}

  openCreateEvent() {
    const dialogRef = this.dialog.open(CreateComponent, { disableClose: true });
  }
}
