import {Note} from '../entities/note'

export class NoteRepo{

    notes :Note[]=[];

    repoName:string="_noteStorage";

    loadNoteRepo():Note[] 
    {

        if (!localStorage.getItem(this.repoName)===null){
            this.notes = JSON.parse(localStorage.getItem(this.repoName))
        }
        else {
            localStorage.setItem(this.repoName, JSON.stringify(this.notes))
        }
        return this.notes;
    }
    saveToRepo(date:Date,time:HTMLTimeElement,text:string)
    {
        this.loadNoteRepo();
        this.notes.push(new Note(date,time,text));
        localStorage.setItem(this.repoName, JSON.stringify(this.notes));
    }

}