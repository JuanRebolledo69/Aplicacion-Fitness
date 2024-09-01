import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: string ='';

  constructor( private router: Router) { }

  ingresar() {
    localStorage.setItem('nombreUsuario', this.nombre);

    this.router.navigate(['/cal-imc'])
  }

  ngOnInit() {
  }

}
