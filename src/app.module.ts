import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';

//Import MondgoDB
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/tasksdb'), TasksModule],
  controllers: [TasksController],
  //controllers: [],
  //providers: [],
})
export class AppModule {}
