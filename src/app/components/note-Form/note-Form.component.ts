import { Component,OnInit,Inject } from '@angular/core';
import {Note} from '../../shared/entities/note';
// import {FormsModule} from '@angular/forms';
import {NotesServices} from '../../shared/services/notes.services'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'note-Form',
  templateUrl: './note-Form.component.html',
  styleUrls: ['./note-Form.component.css']
})
export class NoteFormComponent implements OnInit {

  // newDate:Date;
  // newTime:HTMLTimeElement;
  // newText:string='';

  constructor(private notesService:NotesServices,
    public dialogRef: MatDialogRef<NoteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
