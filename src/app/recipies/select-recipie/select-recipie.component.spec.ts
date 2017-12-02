import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipieComponent } from './select-recipie.component';

describe('SelectRecipieComponent', () => {
  let component: SelectRecipieComponent;
  let fixture: ComponentFixture<SelectRecipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
