import { Component,OnInit,Injectable, OnChanges, SimpleChanges, Input} from '@angular/core';
import {Note} from '../../shared/entities/note';
import {NotesServices} from '../../shared/services/notes.services';
import {NoteFormComponent} from '../note-Form/note-Form.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInp:string;
  tagsInp:string;
  chbTag:boolean;

  notes:Note[]=[];
  filtered:Note[]=[];
  

  constructor(private noteService:NotesServices) 
  {
          
  }
  
  ngOnInit(){
    this.noteService.getAllNotes().subscribe(val=>this.notes=this.filtered=val);
  };

  search(txt:string,tag:string=''){
      this.filtered=this.notes.filter(item=>(item.text.includes(txt)||item.tags.includes(txt))&&item.tags.includes(tag))
  
  }

  


}
