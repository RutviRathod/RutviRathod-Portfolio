/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EduexpComponent } from './eduexp.component';

describe('EduexpComponent', () => {
  let component: EduexpComponent;
  let fixture: ComponentFixture<EduexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
