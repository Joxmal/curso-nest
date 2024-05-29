import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-taks-dto";
import { UpdateTaskDto } from "./dto/update-taks-dto";


@Injectable()
export class taskService{

    private task = []

    getTask(){
        console.log("task")
        return this.task
    }

    createTask(task:CreateTaskDto){
        this.task.push({
            ...task,
            id: this.task.length + 1
        })
            
        return task
    }

    updateTask(task:UpdateTaskDto){
        console.log(task)
        return 'actualizando tarea'
    }

    patchTask(){
        return 'cambiando estado de la tarea'
    }

    deleteTask(){
        return 'eliminando tarea'
    }

}


