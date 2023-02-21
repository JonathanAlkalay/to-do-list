import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoItemDTO } from 'commonDataModel'


@Controller('todos')
export class ToDoListController {

    constructor(private toDoListService: ToDoListService) { }

    @Get()
    async getToDos(): Promise<ToDoItemDTO[]> {
        return await this.toDoListService.getToDos();
    }

    @Post('/add')
    async addToDo(@Body() toDoItem: ToDoItemDTO): Promise<void>{
        return await this.toDoListService.addToDo(toDoItem);
    }

    @Post('/edit')
    async editToDo(@Body() toDoItem: ToDoItemDTO): Promise<void>{
        return await this.toDoListService.editToDo(toDoItem);
    }

    @Delete('/:itemId')
    async deleteToDo(@Param('itemId') itemId: string): Promise<void> {
        return await this.toDoListService.deleteToDo(itemId);
    }
}