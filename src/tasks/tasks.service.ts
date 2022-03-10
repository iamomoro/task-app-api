import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks: any[] = [
    {
      id: 'asd1',
      title: 'Task Number One',
      description: 'Simple Task For My App',
    },
    {
      id: 'qwe2',
      title: 'Go to a Store',
      description: 'Because I need to Buy Some Milk',
    },
    { id: 'zxc3', title: 'Boot Computer', description: 'Still needs linux' },
  ];

  //Get All Tasks
  getTasks(): any[] {
    return [...this.tasks];
  }
}
