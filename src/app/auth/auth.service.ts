import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  isAuthenticated() {
    return this.angularFireAuth.authState.pipe(
      map(user => user && user.uid ? true : false)
    );
  }
}
