import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Created form variables
  public todoTitle = " ";
  public todoNote = " ";
  public todoArray: any = [];

  constructor() { }
  ngOnInit(): void { }

  handleForm() {
    var myTodo = {
      todoTitle: this.todoTitle,
      todoNote: this.todoNote
    }
    this.todoArray.push(myTodo);
    console.log(this.todoArray);

  }

}
