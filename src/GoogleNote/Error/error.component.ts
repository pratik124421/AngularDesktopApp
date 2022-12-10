import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector:"app-error",
    templateUrl:"./error.component.html",
    styleUrls:["./error.component.css"]
})
export class ErrorComponent implements OnInit{
    @Input("errorobj") errormsg : {type:string,msg:string} 
    @Output("removeerror") rmerror = new EventEmitter<boolean>()

    constructor(){

    }

    ngOnInit(){
        console.log("error comp called")
    }

    removeerror(){
        this.rmerror.emit(true)
    }

}