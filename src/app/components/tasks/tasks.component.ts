import { Component ,OnInit } from '@angular/core';
import { task } from 'src/app/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../app.component.css']
})
export class TasksComponent {

  constructor(private taskServices: TaskService){

  }

  tasks: task[] = [];
  
  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }
  DeleteTask(task: task){
    this.taskServices.DeleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t) =>t.id !== task.id);
    });
  }
  OnReminder(task:task){
    task.reminder = !task.reminder;
    this.taskServices.UpdateReminder(task).subscribe();
  }
  addTask(task:task){
    this.taskServices.addTask(task).subscribe((task)=>this.tasks.push(task));
  }
}
