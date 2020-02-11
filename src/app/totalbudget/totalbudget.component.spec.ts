import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbudgetComponent } from './totalbudget.component';

describe('TotalbudgetComponent', () => {
  let component: TotalbudgetComponent;
  let fixture: ComponentFixture<TotalbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
