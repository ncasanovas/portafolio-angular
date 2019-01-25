import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any = {};
  cargada:boolean = false;

  constructor( public http:HttpClient) { 
    this.http.get("assets/data/info.pagina.json").subscribe( data =>{
      console.log(data);
      this.cargada = true;
      this.info = data;
    })
  }
}
