import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  // Input variables
  public budgetName = "";
  public budgetAmount!: number;
  public budgetNote = "";
  public budgetTarget = "";

  public budgetArray: any = [];// Array




  constructor() { }

  ngOnInit(): void {
  }

  createBudget() {
    if (this.budgetName && this.budgetAmount) {

      // alert("Gbemidebe!!")
      var todoObj = {
        budgetName: this.budgetName,
        budgetAmount: this.budgetAmount,
        budgetNote: this.budgetNote,
        budgetTarget: this.budgetTarget
      }
      this.budgetArray.push(todoObj)
      console.log(this.budgetArray);
    } else {
      alert("Traboski")
    }

  }

}
