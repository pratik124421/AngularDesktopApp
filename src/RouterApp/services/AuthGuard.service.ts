import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    login : boolean = true

    constructor(private Route : Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(
            (resolve,reject) => {
                console.log("comming here...")
                if(this.login){
                    resolve(true)
                }else{
                    reject(this.Route.navigate(["/"]))
                }
            }
        )

        // return this.login
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute,state)
    }
}