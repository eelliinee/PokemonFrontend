/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RivalBattleComponent } from './rival-battle.component';

describe('RivalBattleComponent', () => {
  let component: RivalBattleComponent;
  let fixture: ComponentFixture<RivalBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
