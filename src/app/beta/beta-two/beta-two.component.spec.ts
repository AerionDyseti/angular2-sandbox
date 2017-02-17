/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetaTwoComponent } from './beta-two.component';

describe('BetaTwoComponent', () => {
  let component: BetaTwoComponent;
  let fixture: ComponentFixture<BetaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
