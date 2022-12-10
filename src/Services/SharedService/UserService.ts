import { Injectable } from "@angular/core"
import { CounterService } from "./Counterservice"

@Injectable()
export class UserService{
    
    constructor(private counterservice:CounterService){}

    private UserData : {"Active":string[],"Inactive":string[]} = {"Active":["pratik","chirag"],"Inactive":["suresh","falguni"]}

    settoactive(user:string){
        let user_ = this.UserData["Inactive"].splice(this.UserData["Inactive"].indexOf(user),1)
        this.UserData["Active"].push(user_[0])
        this.counterservice.setitoa()
    }

    settoinactive(user:string){
        let user_ = this.UserData["Active"].splice(this.UserData["Active"].indexOf(user),1)
        this.UserData["Inactive"].push(user_[0])
        this.counterservice.setatoi()
    }


    get userdata(){
        return this.UserData
    }

}