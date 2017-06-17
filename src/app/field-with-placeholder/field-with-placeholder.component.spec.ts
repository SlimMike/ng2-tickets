import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithPlaceholderComponent } from './field-with-placeholder.component';

describe('FieldWithPlaceholderComponent', () => {
  let component: FieldWithPlaceholderComponent;
  let fixture: ComponentFixture<FieldWithPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldWithPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWithPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
