import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  // Input variables
  public budgetName = "";
  public budgetAmount = "";
  public budgetNote = "";
  public budgetTarget = "";

  public budgetArray: any = [];// Array




  constructor() { }

  ngOnInit(): void {
  }

  createBudget() {
    // alert("Gbemidebe!!")
    var todoObj = {
      budgetName: this.budgetName,
      budegtAmount: this.budgetAmount,
      budgetNote: this.budgetNote,
      budgetTarget: this.budgetTarget
    }
    this.budgetArray.push(todoObj)
    console.log(this.budgetArray);

  }

}
