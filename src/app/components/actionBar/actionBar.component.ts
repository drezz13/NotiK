import { Component, OnInit } from '@angular/core';
import {NotesServices} from '../../shared/services/notes.services';
import {MatDialog} from '@angular/material';
import {NoteFormComponent} from '../note-Form/note-Form.component';

@Component({
  selector: 'actionBar',
  templateUrl: './actionBar.component.html',
  styleUrls: ['./actionBar.component.css']
})
export class ActionBarComponent implements OnInit {

  constructor(private noteService:NotesServices, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NoteFormComponent, {
      width: '300px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){this.noteService.addNote(result.newDate,result.newTime,result.newText);
      };      
      
    });

  }

}
