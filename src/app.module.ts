import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';

//Import MondgoDB
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tasks'),
    TasksModule,
  ],
  controllers: [TasksController],
  //controllers: [],
  //providers: [],
})
export class AppModule {}
