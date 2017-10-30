import { Component,OnInit } from '@angular/core';
import {Note} from '../../shared/entities/note';
import {NotesServices} from '../../shared/services/notes.services';

@Component({
  selector: 'noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})
export class NoteListComponent implements OnInit {
  notes:Note[];

  constructor(private noteService:NotesServices) 
  {
      this.notes=[];
  }
  
  ngOnInit(){
    this.notes=this.noteService.getNotes();
  }



}
