import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { InactiveUser } from './inactive-users/inactive-users.component';
import { ActiveUser } from './active-users/active-users.component';
import { UserService } from './SharedService/UserService';
import { CounterService } from './SharedService/Counterservice';


@NgModule({
  declarations: [
    AppComponent,
    InactiveUser,
    ActiveUser
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
