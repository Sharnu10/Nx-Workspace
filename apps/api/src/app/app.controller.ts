import { Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  addToDo() {
    return this.appService.addTodo();
  }

  @Post('deleteTodo/:id')
  deleteTodo(@Param('id') id: number) {
    return this.appService.deleteTodo(id);
  }
}
