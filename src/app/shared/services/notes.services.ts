import {Injectable,OnInit} from '@angular/core';
import {Note} from '../entities/note';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';



@Injectable()
export class NotesServices implements OnInit{
    private _notes:BehaviorSubject<Array<Note>>=new BehaviorSubject(new Array<Note>());
    repoName:string;
    private tempRepo:Note[]=[];
    


    constructor()
    {
        this.repoName="_noteStorage";
 
        if(localStorage.getItem(this.repoName)===null){
            localStorage.setItem(this.repoName,JSON.stringify(this.tempRepo))
        };
        this._notes.next(JSON.parse(localStorage.getItem(this.repoName)))
    };

    ngOnInit(){
        
        
        
    };
    
   

    getAllNotes():Observable<Note[]>
    {
        this._notes.next(JSON.parse(localStorage.getItem(this.repoName)))
        return this._notes.asObservable();
       
                                                  
    }; 

    search(req:string):Observable<Note[]>{

        return this.getAllNotes().filter((val,ind)=>val[ind].text.includes(req))

    }

    
 
    addNote(date:Date,time:HTMLTimeElement,text:string,tags:string){
        
        
      
        let tempo=this._notes.getValue();
        let temp:Note =new Note(date,time,text,tags);
        tempo.push(temp);
        localStorage.setItem(this.repoName,JSON.stringify(tempo));
        this._notes.next(tempo);
        
        

        
        
    };

    
}