import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budgetitemmodel';

@Component({
  selector: 'app-budgetitemlist',
  templateUrl: './budgetitemlist.component.html',
  styleUrls: ['./budgetitemlist.component.scss']
})
export class BudgetitemlistComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  constructor() { }

  ngOnInit() {
  }

}
