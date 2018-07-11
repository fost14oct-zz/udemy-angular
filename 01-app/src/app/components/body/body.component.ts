import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  frase : any = {
    mensaje: 'Always be willing to fail',
    Autor: 'Arnold Schwarzenneger'
  }
  mostrar = true;

  personajes: string[] = ['Spiderman','Venom','Octopues']
}
