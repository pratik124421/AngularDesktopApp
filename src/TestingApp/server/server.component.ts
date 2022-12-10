import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html",
})
export class ServerComponent implements OnInit{
    name : string;
    @Output() serveradded = new EventEmitter<string>()
    @ViewChild("serverNameInput") servernameref : ElementRef

    constructor(){
        console.log("constructor called")
    }
    ngOnInit(){
        console.log("init server list called")
    }

    AddNames(servername:HTMLInputElement){
        console.log(this.servernameref.nativeElement)
        console.log(servername.value)
        // this.serveradded.emit(this.name)
        this.serveradded.emit(servername.value)
    }
}