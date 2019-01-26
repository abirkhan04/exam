import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostlyviewedComponent } from './mostlyviewed.component';

describe('MostlyviewedComponent', () => {
  let component: MostlyviewedComponent;
  let fixture: ComponentFixture<MostlyviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostlyviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostlyviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
