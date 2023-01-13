import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Task Tracker";
  showAddTask: boolean=false;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((value)=>this.showAddTask=value)
  }

  addTask = ()=>{
    this.uiService.toggleAddTask();
  }
}
