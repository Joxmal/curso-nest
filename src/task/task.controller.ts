import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskModule } from "./task.module";
import { taskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-taks-dto";
import { UpdateTaskDto } from "./dto/update-taks-dto";

@Controller('/task')
export class taskController {

    constructor(private taskService:taskService){

    }

    @Get()
    getAllTask(@Query() query:any){
        console.log(query)
     return this.taskService.getTask()
    }

    @Post()
    createTask(@Body() task:CreateTaskDto){
        console.log(task)
     return this.taskService.createTask(task)
    }

    @Put()
    updateTask(@Body() task:UpdateTaskDto){
     return this.taskService.updateTask(task)
    }
    
    @Patch()
    patchTask(){
     return  this.taskService.patchTask()
    }

    @Delete()
    deleteTask(){
        return  this.taskService.deleteTask()

    }

}