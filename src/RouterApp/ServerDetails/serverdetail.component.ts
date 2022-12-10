import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ServerModel } from '../Model/server.model';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-serverdetail',
  templateUrl: './serverdetail.component.html',
 })
export class ServerDetailComponent implements OnInit{

    server : {ip:string,name:string,location:string} = {ip:"0.0.0.0",name:"none",location:"none"}
  constructor(private ServerService : ServerService,private activeroute:ActivatedRoute,private Route : Router){

  }

  ngOnInit(): void {
    this.activeroute.params.subscribe(
        (params:Params) => {
            this.server["ip"]=params["ip"]
        }
    )

   this.activeroute.queryParams.subscribe(
    (params:Params) => {
        this.server["name"]=params["name"];
        this.server["location"]=params["location"]
    }
   )

}


    editserver(){
        this.Route.navigate(["server","editserver"],{queryParams:{id:10},queryParamsHandling:"preserve"})
    }
    // queryParamsHandling:"preserve"  =>  preserve old query params
    // queryParamsHandling:"merge" => merge both old and new query params
    // queryParamsHandling cant preserve or merge params it only work with queryparams
}
