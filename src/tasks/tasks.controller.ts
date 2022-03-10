import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //create tasks
  @Post()
  createTask(@Body() body: any): any[] {
    return this.tasksService.createTask(body);
  }

  //get tasks
  @Get()
  getTasks(): any[] {
    return this.tasksService.getTasks();
  }

  //get one task
  @Get(':id')
  getOneTask(@Param('id') id: string): any {
    return this.tasksService.getOneTask(id);
  }
}
