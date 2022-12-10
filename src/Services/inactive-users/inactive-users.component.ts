import { Component, Input, OnInit } from "@angular/core";
import { CounterService } from "../SharedService/Counterservice";
import { UserService } from "../SharedService/UserService";

@Component({
    selector:"app-inactive",
    templateUrl:"./inactive-users.component.html",
    styleUrls:["./inactive-users.component.css"]
})
export class InactiveUser implements OnInit{
    inactiveuser : string[]

    constructor(private userservice:UserService){
            
    }

    ngOnInit(): void {
        this.inactiveuser = this.userservice.userdata["Inactive"]
    }



    settoactive(user:string){
        this.userservice.settoactive(user)
    }


}