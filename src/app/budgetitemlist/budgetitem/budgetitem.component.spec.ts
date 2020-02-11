import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetitemComponent } from './budgetitem.component';

describe('BudgetitemComponent', () => {
  let component: BudgetitemComponent;
  let fixture: ComponentFixture<BudgetitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
