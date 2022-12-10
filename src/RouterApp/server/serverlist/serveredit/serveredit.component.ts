import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from 'src/RouterApp/services/server.service';
import { CanComponentDeactivate } from './can-deactivate-guard';

@Component({
  selector: 'app-serveredit',
  templateUrl: './serveredit.component.html',
  styleUrls: ['./serveredit.component.css'],
 })
export class ServerEditComponent implements OnInit,CanComponentDeactivate{

  name : string
  ip : string 
  location : string 
  edited : boolean = false
  paramname : string
  paramlocation : string

  constructor(private ServerService : ServerService,private Router : Router,private ActiveRoute:ActivatedRoute){

  }

  ngOnInit(): void {
      this.ActiveRoute.params.subscribe(
        (params:Params) => {
          this.ip=params["ip"]
        }
      )

      this.ActiveRoute.queryParams.subscribe(
        (params:Params) => {
          this.name = params["name"];
          this.paramname = params["name"]
          this.location = params["location"]
          this.paramlocation = params["location"]
        }
      )
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    // console.log("came in compo")
    if(this.edited){
      return true
    }else if(this.name != this.paramname || this.location != this.paramlocation){
      return confirm("do you want to discard the changes")
    }else{
      return true
    }
  }

  editserver(){
    this.ServerService.editserver(
      this.name,
      this.ip,
      this.location
    )
    this.edited = true
    this.Router.navigate(['/server'])
  }

}
