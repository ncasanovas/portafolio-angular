import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: Producto[] = [];

  constructor(private http:HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){


    this.http.get('https://portafolio-6d5d9.firebaseio.com/productos_idx.json').subscribe(
      (data: Producto[])=>{
        
        this.productos = data;
        this.cargando = false;
       
      });
    
  }
}
