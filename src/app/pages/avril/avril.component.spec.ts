import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvrilComponent } from './avril.component';

describe('AvrilComponent', () => {
  let component: AvrilComponent;
  let fixture: ComponentFixture<AvrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
