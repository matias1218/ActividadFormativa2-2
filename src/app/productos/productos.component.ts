import { Component, OnInit } from '@angular/core';
import {Ng2IzitoastService} from "ng2-izitoast";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos = [];
  mostrarFormulario = false;


  constructor(public iziToast: Ng2IzitoastService) { 
    
  }

  ngOnInit(): void {

  }

  receptor($event: any) {  
    this.productos = $event; 
    this.mostrarFormulario = false;
    this.iziToast.success({ 
      title: "Producto Agregado",
      position:"topCenter",
      
    });
  } 

  nuevoItem(){
    this.mostrarFormulario = true;
  }
  cancelar(){
    this.mostrarFormulario = false;
  }

}
