import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../entities/user.model';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "https://ru.1forma.ru/app/v1.0/api/auth/token/"
  public token: string = ""
  $user!: Observable<any>

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router 
  ) { 
    this.$user = this.afAuth.authState.pipe(
      switchMap(user => {
       if (user) {
         return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
       } else {
         return of(null)
       }
      })
    );
  }
  
  async signIn(login: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(login, password)    
  }

  async registrate(login: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(login, password)
  }
  redirect() {
    if (this.token == "") {
      this.router.navigate(['/auth'])
    }
  }
}
