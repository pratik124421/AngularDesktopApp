import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent implements OnInit{
  @Input() erroroccured : boolean
  public errorobj : {type:string,msg:string}

  ngOnInit(){
    this.erroroccured = false
  }

  error(event:{type:string,msg:string}){
    this.erroroccured = true
    this.errorobj = event
  }

  

}
