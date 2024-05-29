import { Injectable } from "@nestjs/common";


@Injectable()
export class taskService{

    private task = []

    getTask(){
        console.log("task")
        return this.task
    }

    createTask(task:any){
        this.task.push({
            ...task,
            id: this.task.length + 1
        })
            
        return task
    }

    updateTask(){
        return 'actualizando tarea'
    }

    patchTask(){
        return 'cambiando estado de la tarea'
    }

    deleteTask(){
        return 'eliminando tarea'
    }

}


