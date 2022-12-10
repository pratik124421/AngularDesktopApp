import { Component, OnInit, QueryList } from "@angular/core";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";

@Component(
    {
        selector:"app-router",
        templateUrl:"./RouterTest.component.html",
        styleUrls:["./RouterTest.component.css"]
    }
)
export class RouterTestComponent implements OnInit{
    user:{id:number,name:string,allow:boolean}
    constructor(private activeRoute : ActivatedRoute,private Router:Router){

    }

    ngOnInit(): void {
        console.log(this.activeRoute.snapshot)
        this.user={
            id: this.activeRoute.snapshot.params["id"] ,       
            name : this.activeRoute.snapshot.params["name"],
            allow:this.activeRoute.snapshot.queryParams["allow"]
        }

        this.activeRoute.params.subscribe(
            (params:Params) => {    
                console.log("called")
                this.user={
                    id: params["id"] ,       
                    name : params["name"],
                    allow:false
                }
            }
        )

        this.activeRoute.queryParams.subscribe(
            (queryparam:Params) => {
                console.log("queryparam::: ",queryparam)
            }
        )

    }

    incrementid(){
        this.Router.navigate(["/testing",parseInt(this.activeRoute.snapshot.params["id"])+1,this.activeRoute.snapshot.params["name"]],{relativeTo:this.activeRoute,queryParams:{allow:true},fragment:"loading"})
        
    }


}
