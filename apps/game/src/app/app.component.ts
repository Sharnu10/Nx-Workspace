import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Todo {
  id?: number;
  title: string;
}

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'game';
  todos: Todo[] = [];


  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => { this.todos = t });
  }

  addTodos() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  deleteTodo(todo: Todo) {
    console.log('table: ', todo);
    this.http.post('/api/deleteTodo', todo.id).subscribe(() => { this.fetch() });
  }
}
