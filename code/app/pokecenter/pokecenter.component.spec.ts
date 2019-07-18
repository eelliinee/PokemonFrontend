/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokecenterComponent } from './pokecenter.component';

describe('PokecenterComponent', () => {
  let component: PokecenterComponent;
  let fixture: ComponentFixture<PokecenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokecenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
