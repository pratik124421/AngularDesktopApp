import { Component, OnInit } from '@angular/core';
import { UserService } from './SharedService/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // userlist : {"Active":string[],"Inactive":string[]} 
  constructor(private userservice:UserService){
  }

  ngOnInit(): void {
    // this.userlist = this.userservice.userdata
  }

}
