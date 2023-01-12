import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/myTasks';
import { task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  getTasks(): task[] {
    return TASKS;
  }
}
