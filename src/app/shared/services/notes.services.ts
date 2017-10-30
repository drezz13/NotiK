import {Injectable,OnInit} from '@angular/core'
import{NoteRepo} from "../repos/noteRepo"
import {Note} from '../entities/note'

@Injectable()
export class NotesServices implements OnInit{
    notes:Note[];


    constructor(private noteRepo:NoteRepo)
    {
        this.notes=[];
    }
    ngOnInit(){
        this.notes= this.noteRepo.loadNoteRepo();
    }

    getNotes():Note[]
    {
        return this.noteRepo.loadNoteRepo();
    };

    addNote(date:Date,time:HTMLTimeElement,text:string){
        this.noteRepo.saveToRepo(date,time,text);
    };

    
}