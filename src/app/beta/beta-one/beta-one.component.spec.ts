/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetaOneComponent } from './beta-one.component';

describe('BetaOneComponent', () => {
  let component: BetaOneComponent;
  let fixture: ComponentFixture<BetaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
