import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlingComponent } from './pling.component';

describe('PlingComponent', () => {
  let component: PlingComponent;
  let fixture: ComponentFixture<PlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
