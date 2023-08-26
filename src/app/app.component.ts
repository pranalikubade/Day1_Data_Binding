import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
message(message: any) {
  throw new Error('Method not implemented.');
}

//  message = 'my-app';

itemList=[
  {text:'Item 1',done:false},
  {text:'Item 2',done:false},
  {text:'Item 3',done:false},

];
  
markItemAsDone(index:number){
  this.itemList[index].done=true;
}
}
