import { Component,OnInit,Injectable, OnChanges, SimpleChanges, Input} from '@angular/core';
import {Note} from '../../shared/entities/note';
import {NotesServices} from '../../shared/services/notes.services';
import {NoteFormComponent} from '../note-Form/note-Form.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';



@Component({
  selector: 'noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})

@Injectable()
export class NoteListComponent implements OnInit {
  notes:Array<Note>=[];
  

  constructor(private noteService:NotesServices,private router:Router) 
  {
      
  }
  
  ngOnInit(){
      this.noteService.getAllNotes().subscribe(notes=>this.notes=notes.filter((item)=>new Date(item.date).toDateString()
      ===new Date(Date.now()).toDateString()));
      

  };
    

  

}
