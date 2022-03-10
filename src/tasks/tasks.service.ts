import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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

  //create tasks
  createTask(task: any): any[] {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: any = {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };

    this.tasks.push(taskToCreate);

    return [...this.tasks];
  }

  //Get All Tasks
  getTasks(): any[] {
    return [...this.tasks];
  }

  //get one task
  getOneTask(id: string): any {
    const task = this.findTask(id);

    if (!task) {
      return new NotFoundException();
    }

    return { ...task };
  }
  //delete one task
  deleteTask(id: string): string {
    const task = this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);

    return id;
  }

  private findTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    return task;
  }
}
