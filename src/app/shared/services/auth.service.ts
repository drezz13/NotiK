import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';



@Injectable()
export class AuthService {

authState=null;


constructor(private afAuth:AngularFireAuth,
            private router:Router,
            private snack:MatSnackBar) {

    this.authState=this.afAuth.authState
        
 }



signUp(email:string,pass:string){
    this.afAuth
    .auth
    .createUserWithEmailAndPassword(email,pass)
    .then((success)=>{
      this.router.navigate(['/today']);})
    .catch(err => {
      this.snack.open("Пользователь с таким e-mail уже существует", 'Ok', {
        duration: 3000
      });
    });
}




logIn(email:string,pass:string){

    this.afAuth
    .auth
    .signInWithEmailAndPassword(email,pass)
    .then(
      (success) => {
      this.authState=this.afAuth.authState;
      this.router.navigate(['/today']);
      
    })
    .catch(err => {
      this.snack.open("Неверный логин и/или пароль!", 'Ok', {
        duration: 3000
      });
    });

}

logOut(){
    this.afAuth
    .auth
    .signOut();
}

}