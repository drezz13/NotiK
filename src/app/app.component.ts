import { Component, Input, Injectable } from '@angular/core';
import { NoteListComponent} from './components/noteList/noteList.component'
import {NotesServices} from './shared/services/notes.services'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
 

  constructor(private noteService:NotesServices){
    
  }

  
  

  

  
 
}
