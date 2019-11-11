import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateComponent } from '../events/create/create.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openCreateEvent() {
    const dialogRef = this.dialog.open(CreateComponent, { disableClose: true });
  }
}
