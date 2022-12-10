import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ServerModel } from 'src/RouterApp/Model/server.model';

@Component({
  selector: 'app-serverlist',
  templateUrl: './serverlist.component.html',
  styleUrls: ['./serverlist.component.css'],
 })
export class ServerListComponent {

  @Input() server : ServerModel

  constructor(private route : Router){

  }

  details(server:ServerModel){
    this.route.navigate(["server","serverdetail",server.ip],{queryParams:{name:server.name,location:server.location}})
  }

}
