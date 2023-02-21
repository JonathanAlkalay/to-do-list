import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ToDoListController } from './to-do-list/to-do-list.controller';
import { ToDoListService } from './to-do-list/to-do-list.service';

@Module({
  imports: [ ],
  controllers: [
    ToDoListController
  ],
  providers: [
    ToDoListService,
    PrismaService
  ],
})
export class AppModule {}
