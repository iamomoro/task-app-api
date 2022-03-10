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
  async createTask(@Body() body: Task): Promise<Task[]> {
    const tasks = await this.tasksService.createTask(body);
    return tasks;
  }

  //get tasks
  @Get()
  async getTasks(): Promise<Task[]> {
    const tasks = await this.tasksService.getTasks();
    return tasks;
  }

  //get one task
  @Get(':id')
  async getOneTask(@Param('id') id: string): Promise<Task> {
    const tasks = await this.tasksService.getOneTask(id);
    return tasks;
  }

  //update task
  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() body: Task): Promise<Task> {
    const tasks = await this.tasksService.updateTask(id, body);
    return tasks;
  }

  //Delete Task
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    const tasks = await this.tasksService.deleteTask(id);
    return tasks;
  }
}
