import { Component,Input} from '@angular/core';
import {Note} from '../../shared/entities/note'

@Component({
  selector: 'noteItem',
  templateUrl: './noteItem.component.html',
  styleUrls: ['./noteItem.component.css']
})
export class NoteItemComponent {
  @Input() note: Note;

  constructor() { 
    this.note=null;
  }

  
}
