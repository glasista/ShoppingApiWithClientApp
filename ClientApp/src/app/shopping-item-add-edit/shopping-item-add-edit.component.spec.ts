import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemAddEditComponent } from './shopping-item-add-edit.component';

describe('ShoppingItemAddEditComponent', () => {
  let component: ShoppingItemAddEditComponent;
  let fixture: ComponentFixture<ShoppingItemAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingItemAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
