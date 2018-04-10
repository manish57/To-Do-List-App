import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
  inputText;
  arr= [];
  
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.inputText
    }
    this.todos.push(newTodo);  
    this._todoService.addTodo(newTodo);
    this.inputText = " ";
  }
  
  deleteTodo(todo) {
    for(let i=0;i< this.todos.length; i++) {
      if(this.todos[i].text == todo) {
        this.todos.splice(i,1);
      }
    }
    this._todoService.deleteTodo(todo);
  }

  updateTodoStatus(e, todo){
    if(e.target.checked) {
      this.arr.push(todo);
    }
    else {
      console.log('not checked');
    }
  }

  deleteSelected() {
    for(let i=0;i< this.arr.length; i++) {
      this.deleteTodo(this.arr[i]);
    }
  }
  
  deleteAll() {
    for(let i=0;i< this.todos.length; i++) {
        this.todos.splice(i, this.todos.length);
    }
    this._todoService.deleteAllTodo();
  }
}
