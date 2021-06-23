import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import {Ng2IzitoastService} from "ng2-izitoast";

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  constructor(public iziToast: Ng2IzitoastService) { }

  ngOnInit(): void {

  }

  @Output() emisor = new EventEmitter <any>();  
  productos = []

  formularioProducto = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl('')
  })

  guardar(){
    let comprobacion = true;
    if(this.formularioProducto.value.codigo == ""){
      this.iziToast.warning({ 
        title: "El campo codigo no se ha ingresado",
        position:"topRight",
        transitionIn:'fadeInDown'
        
      });
      comprobacion = false;
    }
    if(this.formularioProducto.value.nombre == ""){
      this.iziToast.warning({ 
        title: "El campo nombre no se ha ingresado",
        position:"topRight",
        transitionIn:'fadeInDown'
      });
      comprobacion = false;
    }
    if(this.formularioProducto.value.precio == ""){
      this.iziToast.warning({ 
        title: "El campo precio no se ha ingresado",
        position:"topRight",
        transitionIn:'fadeInDown'
      });
      comprobacion = false;
    }
    if(this.formularioProducto.value.stock == ""){
      this.iziToast.warning({ 
        title: "El campo stock no se ha ingresado",
        position:"topRight",
        transitionIn:'fadeInDown'
      });
      comprobacion = false;
    }

    if(comprobacion){
      let newProducto = new producto();

      newProducto.codigo = this.formularioProducto.value.codigo;
      newProducto.nombre = this.formularioProducto.value.nombre;
      newProducto.precio = this.formularioProducto.value.precio;
      newProducto.stock = this.formularioProducto.value.stock;
      this.productos.push(newProducto);

      this.emisor.emit(this.productos);
    }
  }

}

export class producto{
  codigo:any;
  nombre:any;
  precio:any;
  stock:any;
}
