import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server-list/server-list.component';
import { HeaderComponent } from 'src/app/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
