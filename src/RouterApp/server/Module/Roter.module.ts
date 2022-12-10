import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/RouterApp/Home/home.component";
import { RouteErrorComponent } from "src/RouterApp/NotFoundErrorPage/routeerror.component";
import { ServerDetailComponent } from "src/RouterApp/ServerDetails/serverdetail.component";
import { AuthGuard } from "src/RouterApp/services/AuthGuard.service";
import { AddServerComponent } from "../addserver/addserver.component";
import { ServerComponent } from "../server.component";
import { CanDeactivateGuard } from "../serverlist/serveredit/can-deactivate-guard";
import { ServerEditComponent } from "../serverlist/serveredit/serveredit.component";

const routes : Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"server",
    //   canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component:ServerComponent,children:[
      {path:"addserver",component:AddServerComponent},
      {path:"editserver",component:ServerEditComponent,canDeactivate:[CanDeactivateGuard]},
      {path:"serverdetail/:ip",component:ServerDetailComponent}
    ]},
    {path:"notfound",component:RouteErrorComponent},
    {path:"**",redirectTo:"notfound"}
  
  ]

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
export class AppRoutermodule{

}