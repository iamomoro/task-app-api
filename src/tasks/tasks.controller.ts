import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.module';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //create tasks
  @Post()
  createTask(@Body() body: Task): Task[] {
    return this.tasksService.createTask(body);
  }

  //get tasks
  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  //get one task
  @Get(':id')
  getOneTask(@Param('id') id: string): Task {
    return this.tasksService.getOneTask(id);
  }

  //update task
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: Task): Task {
    return this.tasksService.updateTask(id, body);
  }

  //Delete Task
  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }
}
