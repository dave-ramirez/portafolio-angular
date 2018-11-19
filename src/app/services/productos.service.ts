import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];
  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise ( (resolve, reject) => {
      this.http.get('https://angular-html-f9313.firebaseio.com/productos_idx.json')
        .subscribe( (respuesta: Producto[]) => {
          this.productos = respuesta;
          setTimeout(() => {
            this.cargando = false;
          }, 1500);
          resolve();
        });
    });
  }

  getProducto(id: string) {
   return this.http.get(`https://angular-html-f9313.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string) {

    if (this.productos.length === 0) {
      // Cargar Productos
      this.cargarProductos().then( () => {
        // Aplicar Filtro
        this.filtrarProducto(termino);
      });
    } else {
      // Aplicar filtro
      this.filtrarProducto(termino);
    }
  }

  private filtrarProducto(termino: string) {
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      const tituloMinus = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloMinus.indexOf( termino ) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
