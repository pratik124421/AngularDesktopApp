import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server/serverlist/serverlist.component';
import { ServerEditComponent } from './server/serverlist/serveredit/serveredit.component';
import { HomeComponent } from './Home/home.component';
import { AddServerComponent } from './server/addserver/addserver.component';
import { ServerService } from './services/server.service';
import { ServerDetailComponent } from './ServerDetails/serverdetail.component';
import { RouteErrorComponent } from './NotFoundErrorPage/routeerror.component';
import { AppRoutermodule } from './server/Module/Roter.module';
import { AuthGuard } from './services/AuthGuard.service';
import { CanDeactivateGuard } from './server/serverlist/serveredit/can-deactivate-guard';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    ServerEditComponent,
    HomeComponent,
    AddServerComponent,
    ServerDetailComponent,
    RouteErrorComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutermodule
  ],
  providers: [ServerService,AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
