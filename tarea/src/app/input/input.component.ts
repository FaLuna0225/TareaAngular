import { Component, Input, OnInit } from '@angular/core';
import { ComponentesComponent } from '../componentes/componentes.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() nombre:string='Fabiola Luna'
  @Input() edad:string='19'
  @Input() imagen:string='assets/perfil.jpeg'
  @Input() fechaNacimiento:string='25/07/2002'
  mostrarFoto:boolean=true
  ocultarFoto(){
    //true==>false
    //false==>true
    this.mostrarFoto=!this.mostrarFoto
  }

}
