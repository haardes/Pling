import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { MatDialogRef } from '@angular/material';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  titleControl = new FormControl('', [Validators.required]);
  startDateControl = new FormControl('', [Validators.required]);
  startTimeControl = new FormControl('', [Validators.required]);
  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555'
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9c27b0',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  eventData = {
    title: '',
    description: '',
    location: '',
    start: '',
    startTime: '',
    end: '',
    endTime: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private eventService: EventService
  ) {}

  ngOnInit() {}

  cancelDialog() {
    this.dialogRef.close();
  }

  createEvent() {
    this.eventService.createEvent(this.prepareData(this.eventData)).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    this.dialogRef.close();
  }

  prepareData(data) {
    data.start.setHours(data.startTime.split(':')[0], data.startTime.split(':')[1]);

    const preparedData: any = {
      title: data.title,
      description: data.description,
      location: data.location,
      start: data.start
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')
    };

    if (data.end !== '') {
      data.end.setHours(data.endTime.split(':')[0], data.endTime.split(':')[1]);
      preparedData.end = data.end
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
    }

    return preparedData;
  }

  getErrorMessage() {
    return this.titleControl.hasError('required')
      ? 'You must enter a value'
      : this.startDateControl.hasError('required')
      ? 'You must enter a date'
      : this.startTimeControl.hasError('required')
      ? 'You must enter a time'
      : '';
  }

  setZindex() {
    const timePicker = document.querySelector(
      'ngx-material-timepicker-content'
    ) as HTMLElement;
    timePicker.style.zIndex = '1001';

    const timePickerOverlay = document.querySelector(
      '.timepicker-overlay'
    ) as HTMLElement;
    timePickerOverlay.style.zIndex = '1001';
  }
}
