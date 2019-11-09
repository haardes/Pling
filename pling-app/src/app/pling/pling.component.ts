import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-pling',
  templateUrl: './pling.component.html',
  styleUrls: ['./pling.component.css']
})
export class PlingComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'pling',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/pling-icon.svg')
    );
  }

  ngOnInit() {}
}
