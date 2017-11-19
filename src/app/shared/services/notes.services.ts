import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Note } from '../entities/note';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from './auth.service';



@Injectable()
export class NotesServices implements OnInit{
    
    _notes:AngularFireList<Note>=null;
    userId:string;
    notes:Array<Note>


    constructor(private db: AngularFireDatabase, private afAuth: AuthService,private afa:AngularFireAuth) {
        this.afa.authState.subscribe(user => {
            if(user) this.userId = user.uid
          })
        }

    

    ngOnInit(): void {
        
    }

    
    getAllNotes():Observable<Note[]> {
        if (!this.userId) return;
        this._notes = this.db.list<Note>(`notes/${this.userId}`);
        return this._notes.valueChanges().map(Note.fromJsonList)
      }

    
 
    addNote(date:Date,time:HTMLTimeElement,text:string,tags:string){
        
        let temp:Note =new Note(date,time,text,tags);
        this._notes.push(temp)

    };
    

    
}