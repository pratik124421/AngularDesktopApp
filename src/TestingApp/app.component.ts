import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.None
  // used to remove style encapsulation
  // style encaptulation is default behaviour in angular so when we give any style in css file
  // it will apply only that component if you want to remove style encapsulation then use this above option
})
export class AppComponent {

  names:string[] = []

  onNamesAdded(name:string){
    this.names.push(name)
  }
  


}
