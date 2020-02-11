import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budgetitem',
  templateUrl: './budgetitem.component.html',
  styleUrls: ['./budgetitem.component.scss']
})
export class BudgetitemComponent implements OnInit {
  @Input() isIncome: boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
