import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  findAll() {
    return this.tasksService.findALL();
  }

  @Get(':id')
  findOne() {
    return 'Get one task';
  }

  @Post()
  crate() {
    return 'Create task';
  }

  @Delete(':id')
  delete() {
    return 'Delete task';
  }

  @Put(':id')
  update() {
    return 'Update task';
  }
}
