import { Injectable } from '@nestjs/common';

interface Todo {
  id: number,
  title: string;
}

@Injectable()
export class AppService {
  todos: Todo[] = [{ id: 1, title: 'server Todo 1' }, { id: 2, title: ' server Todo 2' }];


  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((item) => {
      return item.id !== id
    })
  }

}
