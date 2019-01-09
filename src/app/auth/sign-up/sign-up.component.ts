import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {auth} from "firebase";

@Component({
  selector: 'dr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signIn(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        if(user) {
          this.router.navigate(['/characters']);
        }
      })
  }

  signInWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

}
