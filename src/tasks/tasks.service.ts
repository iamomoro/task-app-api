import { Injectable, NotFoundException } from '@nestjs/common';

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

  //getonetask
  getOneTask(id: string): any {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) {
      return new NotFoundException();
    }

    return { ...task };
  }
}
