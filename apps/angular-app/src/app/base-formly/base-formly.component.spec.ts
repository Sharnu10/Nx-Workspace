import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormlyComponent } from './base-formly.component';

describe('BaseFormlyComponent', () => {
  let component: BaseFormlyComponent;
  let fixture: ComponentFixture<BaseFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseFormlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
