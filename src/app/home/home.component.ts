import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budgetitemmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
  }

}
