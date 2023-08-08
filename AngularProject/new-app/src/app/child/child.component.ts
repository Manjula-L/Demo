import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //getting input "name"
@Input()//decorators
name: string | undefined;
//Throwing the output via "EventEmmiter"
@Output()
valueThis: EventEmitter<string>= new EventEmitter<string>();
valfromChild='';
//Calling function for button operation
sendValues(){
  this.valueThis.emit(this.valfromChild);
}
}

