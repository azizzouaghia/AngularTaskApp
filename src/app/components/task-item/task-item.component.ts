import { Component,Input } from '@angular/core';
import { task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: task = {text:'',day:'',reminder:false};
  faTimes = faTimes;
}
