import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

declare const fbq: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor( public infoService: InfoPaginaService ) { }

  ngOnInit() {
    fbq('track', 'CompleteRegistration');
    console.log('==============================');
    console.log('Ingresando al About Page con el evento CompleteRegistration. Para simular la finalizacion de un registro.');
    console.log('==============================');
  }

}
