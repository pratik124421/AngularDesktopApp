import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate{
    canDeactivate:()=>Observable<boolean> | Promise<boolean> | boolean 
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
     canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    //    console.log("came here",component)
        return component.canDeactivate()
    }
}