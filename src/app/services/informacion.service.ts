import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  equipo: any =[];

  constructor( public http:HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
    
  }


  private cargarInfo() {
    this.http.get("assets/data/info.pagina.json").subscribe( data =>{
      
      this.cargada = true;
      this.info = data;
  });
  }


  private cargarEquipo(){
    this.http.get("https://portafolio-6d5d9.firebaseio.com/equipo.json").subscribe( data =>{
      
      this.equipo = data;
      
      
  });
  }
}
