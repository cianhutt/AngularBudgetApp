import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budgetitemmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number=0;
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem){
    
    this.budgetItems.push(newItem);
    this.totalBudget = this.totalBudget +newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }

}
