import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent {
  mostrarInfo1:boolean=false
  mostrarInfo2:boolean=false
  mostrarInfo3:boolean=false
  mostrarInfo4:boolean=false
  mostrarInfo5:boolean=false
  mostrarInfo6:boolean=false
  ocultarInfo1(){
    //true==>false
    //false==>true
    this.mostrarInfo1=!this.mostrarInfo1
  }
  ocultarInfo2(){

    this.mostrarInfo2=!this.mostrarInfo2
  }
  ocultarInfo3(){

    this.mostrarInfo3=!this.mostrarInfo3
  }
  ocultarInfo4(){

    this.mostrarInfo4=!this.mostrarInfo4
  }
  ocultarInfo5(){

    this.mostrarInfo5=!this.mostrarInfo5
  }
  ocultarInfo6(){

    this.mostrarInfo6=!this.mostrarInfo6
  }
 
}
