export class Note { 
    date:Date;  
    time:HTMLTimeElement;  
    text:string;  
    tags:string
constructor(date:Date,time:HTMLTimeElement,text:string,tags:string){
    this.date=date;
    this.time=time;
    this.text=text;
    this.tags=tags;
}

static fromJsonList(array): Note[] {
    return array.map(Note.fromJson);
}

static fromJson({date,time,text,tags}):Note {
    return new Note(
        date,time,text,tags);
}
}


