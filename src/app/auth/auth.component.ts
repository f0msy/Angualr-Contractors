import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string = ""
  password: string = ""
  constructor(
    private auth: AuthService,
    private router: Router     
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signIn(this.login, this.password).then(token => {
      
    this.auth.token = token       
    this.router.navigate(["/grid"])
    }).catch(err => {
      console.error("User is not found")
      alert("Неверный Логин или Пароль")
    })
  }

  registrate() {
    this.auth.registrate(this.login, this.password).then(token => {
      this.auth.token = token
      alert("Регистарция успешно проведена")
      this.router.navigate(["/grid"])
    }).catch(err => {
      if (err.code == "auth/email-already-in-use") {
        console.error("Email already exists")
        alert("Вы уже зарегистрированы")
      }
      else if (err.code == "auth/invalid-email"){
        console.error("Wrong credentials data format")
        alert("Неверный формат почтового ящика")
      }
    })
  }


}
