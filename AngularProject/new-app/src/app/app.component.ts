import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  name="Welcome";
  show=true;
  hide=false;
  //calling event for two-way-Binding
    nameFromChild='';
  onValueChange(event: string): void{
    console.log(event);
    this.name=event;
  }
  //calling method from child
  getData(event: string): void {
    this.nameFromChild = event;
  }
}