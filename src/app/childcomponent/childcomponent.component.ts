import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {
  // @Input() childMessage: string = "";
  @Input() item:any;
  @Output() itemDone =new EventEmitter<void>();

  markDone(){
    this.itemDone.emit();
  }
  
}

