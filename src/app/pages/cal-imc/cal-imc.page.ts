import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cal-imc',
  templateUrl: './cal-imc.page.html',
  styleUrls: ['./cal-imc.page.scss'],
})
export class CalImcPage implements OnInit {
  altura='';
  peso='';
  generoSeleccionado: string='';
  edad='';

  constructor(private router: Router) { }

  ingresar() {
    localStorage.setItem('altura', this.altura);
    localStorage.setItem('peso', this.peso);
    localStorage.setItem('generoSeleccionado', this.generoSeleccionado);
    localStorage.setItem('edad', this.edad);

    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
