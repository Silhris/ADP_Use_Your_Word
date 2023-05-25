import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UywInputComponent } from './uyw-input.component';

describe('UywInputComponent', () => {
  let component: UywInputComponent;
  let fixture: ComponentFixture<UywInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UywInputComponent]
    });
    fixture = TestBed.createComponent(UywInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
