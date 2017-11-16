import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthGuard {

  constructor(private af:AngularFireAuth, private router:Router){}


  canActivate(): Observable<boolean> {
    return this.af.authState.map(auth => {
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    });
  }
    
}


  