import { ThisReceiver } from "@angular/compiler";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-note",
    templateUrl:"./note.component.html",
    styleUrls:["./note.component.css"]
})
export class NoteComponent{
    
    @Output("error") error = new EventEmitter<{type:string,msg:string}>()
    NoteList : {title:string,description:string,index:number}[] = []

    static count : number = 0

    addnotes(data:{title:string,description:string}){
        this.NoteList.push({...data,index:NoteComponent.count})
        NoteComponent.count++
    }

    erroroccured(event:{type:string,msg:string}){
        this.error.emit(event)
    }

    removeelem(index:number){
        this.NoteList.splice(index,1)
    }


}