import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //gettasks
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
