import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector:"app-addnote",
    templateUrl:"./addnote.component.html",
    styleUrls:["./addnote.component.css"]
})
export class AddNoteComponent implements OnInit{
    @ViewChild("title") title : ElementRef
    @ViewChild("description") descripationvalue : ElementRef

    @Output("error") error = new EventEmitter<{type:string,msg:string}>()
    @Output("note") note = new EventEmitter<{title:string,description:string}>()

    private descripation:boolean
    

    ngOnInit(){
        this.descripation = false
    }

    addData(){
        const des = this.descripationvalue.nativeElement.value
        const tit = this.title.nativeElement.value
        console.log("title: ",tit,"\ndescription: ",des)
        if(tit.trim() == ""){
            this.error.emit({type:"danger",msg:"please provide Title..."})
        }
        else if(des.trim() == ""){
            this.error.emit({type:"danger",msg:"please provide Description..."})
        }else{
            this.note.emit({title:tit,description:des})
        }

    }
    

    get desc(){
        console.log(this.descripation)
        return this.descripation
    }
    set desc(descripation){
        console.log(">>> ",descripation)
        this.descripation = descripation
    }
}