import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Tarea } from '../../models/tarea';
@Injectable({
  providedIn: 'root'
})
export class TareaService {

  taskList: AngularFireList<any>;
  selectTask: Tarea = new Tarea();

  constructor(
    private angularFireDatabase: AngularFireDatabase,
  ) { }

  getTask(){
    return this.taskList = this.angularFireDatabase.list("tasks")
  }

  createTask(tarea:Tarea){
    this.taskList.push({
      id: tarea.id,
      name: tarea.nombre,
      description: tarea.descripcion,
      location: tarea.lugar
    })
  }

  updateTask(tarea:Tarea){
    this.taskList.update(tarea.id, {
      id: tarea.id,
      name: tarea.nombre,
      description: tarea.descripcion,
      location: tarea.lugar
    })
  }

  deleteTask(id:string){
    this.taskList.remove(id);
  }

}
