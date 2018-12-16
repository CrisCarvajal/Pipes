import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre :string = "Ragnar Lodbrok";
  nombre2 : string = "raGnar lodbRok";

  arreglo :number[] = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a:number = 0.234;


  moneda:number = 1245000.52;

  heroe = {
    nombre:"Logan",
    clave:"Wolverine",
    edad: 500,
    direccion:{
      calle:"Primera",
      casa: "19"
    }
  }

  fecha = new Date();

  video :string = "MwfNjjM-6ds";

  activar:boolean = true;

  valorDePromesa = new Promise(  (resolve,reject) =>{

      setTimeout( ()=>resolve('Llego la data!'),3500);
  }  )
}
