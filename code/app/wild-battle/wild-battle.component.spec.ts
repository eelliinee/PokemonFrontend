/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WildBattleComponent } from './wild-battle.component';

describe('WildBattleComponent', () => {
  let component: WildBattleComponent;
  let fixture: ComponentFixture<WildBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
