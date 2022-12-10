import { EventEmitter } from "@angular/core";
import { ServerModel } from "../Model/server.model";

export class ServerService{
    private servers : ServerModel[] = [new ServerModel("pratik","10.10.10.10","ahedabad")]

    serverAdded = new EventEmitter<void>()

    constructor(){

    }

    AddServer(name:string,ip:string,location:string){
        this.servers.push(new ServerModel(name,ip,location))
        this.serverAdded.emit()
    }

    RemoveServer(index:number){
        this.servers.splice(index,1)
    }

    getservers(){
        return this.servers.slice()
    }

    editserver(name:string,ip:string,location:string){
        for(let i=0;i<this.servers.length;i++){
            if(this.servers[i].ip==ip){
                this.servers[i].name=name
                this.servers[i].location=location
            }
        }
        this.serverAdded.emit()
    }

}