import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombreUsuario: string= '';
  altura='';
  peso='';
  generoSeleccionado: string='';
  edad='';

  constructor() { }

  ngOnInit() {

    this.nombreUsuario= localStorage.getItem('nombreUsuario') || '';
    this.altura= localStorage.getItem('altura') || '';
    this.peso= localStorage.getItem('peso') || '';
    this.generoSeleccionado= localStorage.getItem('generoSeleccionado') || '';
    this.edad= localStorage.getItem('edad') || '';

  }

}
