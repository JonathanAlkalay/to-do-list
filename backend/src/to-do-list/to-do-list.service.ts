import { Injectable, Logger } from "@nestjs/common"
import { ToDoItemDTO } from "commonDataModel"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class ToDoListService {
  
    private readonly logger: Logger

    constructor(private prismaService: PrismaService) { 

        this.logger = new Logger('ToDoListService', { timestamp: true }) 
    }

    async getToDos(): Promise<ToDoItemDTO[]>{
        return await this.prismaService.toDoItems.findMany();
    }
   
    async addToDo(toDoItem: ToDoItemDTO): Promise<void> {
        const { id } = await this.prismaService.toDoItems.create({
            data: toDoItem,
            select: { id: true }
        });

        this.logger.log(`to do added itemId -> ${id}`);
    }

    async editToDo({title, id}: ToDoItemDTO): Promise<void> {
        await this.prismaService.toDoItems.update({
            where: { id },
            data: { title }
        });

        this.logger.log(`item ${id} was edited`);

    }
    
    async deleteToDo(id: string): Promise<void> {
        await this.prismaService.toDoItems.delete({ where: { id } });

        this.logger.log('item ${id} was deleted');
    }
}
