import { Component,OnInit } from '@angular/core';
import {Note} from '../../shared/entities/note';
// import {FormsModule} from '@angular/forms';
import {NotesServices} from '../../shared/services/notes.services'


@Component({
  selector: 'note-Form',
  templateUrl: './note-Form.component.html',
  styleUrls: ['./note-Form.component.css']
})
export class NoteFormComponent implements OnInit {

  newDate:Date;
  newTime:HTMLTimeElement;
  newText:string='';

  constructor(private notesService:NotesServices) { }

  ngOnInit(){

  }

  addNewNote(){
    this.notesService.addNote(this.newDate,this.newTime,this.newText)
  }

  
}
