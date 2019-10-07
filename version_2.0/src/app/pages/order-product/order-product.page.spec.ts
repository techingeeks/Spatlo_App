import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductPage } from './order-product.page';

describe('OrderProductPage', () => {
  let component: OrderProductPage;
  let fixture: ComponentFixture<OrderProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
