import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budgetitemmodel';


@Component({
  selector: 'app-budgetitemlist',
  templateUrl: './budgetitemlist.component.html',
  styleUrls: ['./budgetitemlist.component.scss']
})
export class BudgetitemlistComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);
    
  }

}
