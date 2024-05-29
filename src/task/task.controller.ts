import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskModule } from "./task.module";
import { taskService } from "./task.service";

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
    createTask(@Body() task:any){
        console.log(task)
     return this.taskService.createTask(task)
    }

    @Put()
    updateTask(){
     return this.taskService.updateTask()
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