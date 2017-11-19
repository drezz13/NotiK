import { Component, OnInit } from '@angular/core';
import {NotesServices} from '../../shared/services/notes.services';
import {MatDialog} from '@angular/material';
import {NoteFormComponent} from '../note-Form/note-Form.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'actionBar',
  templateUrl: './actionBar.component.html',
  styleUrls: ['./actionBar.component.css']
})
export class ActionBarComponent implements OnInit {
  isDisabled:boolean;

  constructor(private noteService:NotesServices, public dialog: MatDialog,
              private authServ:AuthService)
 {
    this.authServ.authState.subscribe(
                              (user)=>{if (user) {
                                        this.isDisabled = false;
                                        }
                                      else {
                                        this.isDisabled = true;
                                      }
                                    })
  }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NoteFormComponent, {
      width: '300px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){this.noteService.addNote(result.newDate,result.newTime,result.newText,result.tags);
      };      
      
    });

  }

  logOut(){
    this.authServ.logOut();
  }
  

}
