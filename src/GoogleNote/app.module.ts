import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './Note/note.component';
import { AddNoteComponent } from './Note/AddNote/addnote.component';
import { NoteListComponent } from './Note/NoteList/notelist.component';
import { HideArea } from './Directives/HideTextArea/hidetextarea.directive';
import { ErrorComponent } from './Error/error.component';
import { CrossHover } from './Directives/CrossHover/crosshover.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    AddNoteComponent,
    NoteListComponent,
    HideArea,
    ErrorComponent,
    CrossHover
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
