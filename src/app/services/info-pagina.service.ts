import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  infoEquipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo() {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (respuesta: InfoPagina) => {
        this.info = respuesta;
        this.cargada = true;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-f9313.firebaseio.com/team.json')
      .subscribe( (response: any) => {
        this.infoEquipo = response;
      });
  }
}
