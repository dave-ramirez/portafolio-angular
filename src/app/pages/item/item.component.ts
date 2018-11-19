import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoId: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.productoService.getProducto(parametros['id'])
          .subscribe( (respuesta: ProductoDescripcion) => {
            this.productoId = parametros['id'];
            this.producto = respuesta;
          });
      });
  }
}
