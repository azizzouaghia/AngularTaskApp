import { Component,Input,Output,EventEmitter } from '@angular/core';
import { task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: task = {text:'',day:'',reminder:false};
  @Output() OnDeleteTask: EventEmitter<task> = new EventEmitter(); 
  @Output() OnToggleReminder: EventEmitter<task> = new EventEmitter(); 
  faTimes = faTimes;
  //Delete Tasks
  OnDelete=(task: task)=>{
    this.OnDeleteTask.emit(task)
  }
  OnReminder=(task: task)=>{
    this.OnToggleReminder.emit(task);
  }

}
