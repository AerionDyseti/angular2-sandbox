/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlphaOneComponent } from './alpha-one.component';

describe('AlphaOneComponent', () => {
  let component: AlphaOneComponent;
  let fixture: ComponentFixture<AlphaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
