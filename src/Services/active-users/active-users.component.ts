import { Component, Input, OnInit } from "@angular/core";
import { CounterService } from "../SharedService/Counterservice";
import { UserService } from "../SharedService/UserService";

@Component({
    selector:"app-active",
    templateUrl:"./active-users.component.html",
    styleUrls:["./active-users.component.css"]
})
export class ActiveUser implements OnInit{
    activeuser : string[]

    constructor(private userservice:UserService){

    }

    ngOnInit(): void {
        this.activeuser = this.userservice.userdata["Active"]
    }

    settoinactive(user:string){
        this.userservice.settoinactive(user)
     }
}