import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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

  constructor(private ActiveRouter : ActivatedRoute,private Router : Router){

  }
  // redirect(){
  //   console.log(this.ActiveRouter)
  //   this.Router.navigate(["server","addserver"],{relativeTo:this.ActiveRouter}) 
  // }
}
