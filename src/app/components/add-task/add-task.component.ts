import { Component , EventEmitter, Output} from '@angular/core';
import { task } from 'src/app/task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<task> = new EventEmitter()
  text: string = "";
  day:  string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription | undefined;
  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTask = val)
  }

  OnSubmit(){
    if(!this.text){
      alert("please add text")
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);
  }

}
