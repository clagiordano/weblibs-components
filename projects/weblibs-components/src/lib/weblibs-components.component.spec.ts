import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblibsComponentsComponent } from './weblibs-components.component';

describe('WeblibsComponentsComponent', () => {
  let component: WeblibsComponentsComponent;
  let fixture: ComponentFixture<WeblibsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeblibsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeblibsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
