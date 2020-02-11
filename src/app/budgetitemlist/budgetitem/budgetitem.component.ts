import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budgetitemmodel';


@Component({
  selector: 'app-budgetitem',
  templateUrl: './budgetitem.component.html',
  styleUrls: ['./budgetitem.component.scss']
})
export class BudgetitemComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onXButtonClick(){
    this.xButtonClick.emit();
  }

}
