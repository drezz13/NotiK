import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { NoteRepo } from './shared/repos/noteRepo';
import { NotesServices } from './shared/services/notes.services';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-Form/note-Form.component';
import {NoteListComponent} from './components/noteList/noteList.component';
import {NoteItemComponent} from './components/noteItem/noteItem.component'
@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  
  providers: [NoteRepo,NotesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
