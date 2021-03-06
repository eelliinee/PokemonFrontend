/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TownComponent } from './town.component';

describe('TownComponent', () => {
  let component: TownComponent;
  let fixture: ComponentFixture<TownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
