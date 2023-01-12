import { Component ,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "black";
  @Output() btnClick= new EventEmitter();
  OnClick=()=>{
    this.btnClick.emit();
  }
}
