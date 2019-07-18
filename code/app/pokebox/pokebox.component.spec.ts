/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokeboxComponent } from './pokebox.component';

describe('PokeboxComponent', () => {
  let component: PokeboxComponent;
  let fixture: ComponentFixture<PokeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
