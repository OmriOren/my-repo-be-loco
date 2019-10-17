import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectCredentialsAlertComponent } from './incorrect-credentials-alert.component';

describe('IncorrectCredentialsAlertComponent', () => {
  let component: IncorrectCredentialsAlertComponent;
  let fixture: ComponentFixture<IncorrectCredentialsAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectCredentialsAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectCredentialsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
