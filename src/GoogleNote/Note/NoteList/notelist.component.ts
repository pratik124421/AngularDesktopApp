import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector:"app-notelist",
    templateUrl:"./notelist.component.html",
    styleUrls:["./notelist.component.css"]
})
export class NoteListComponent{
    
    @Input("noteobj") note : {title:string,description:string,index:number}
    @ViewChild('index') elemindex : ElementRef
    @Output() deleteelement = new EventEmitter<number>()

    deleteelem(){
        const ind = parseInt(this.elemindex.nativeElement.value)
        this.deleteelement.emit(ind)
    }
}