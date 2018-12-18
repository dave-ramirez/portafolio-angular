import { Component, OnInit } from '@angular/core';

declare const fbq: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    fbq('track', 'PageView');
    console.log('==============================');
    console.log('Ingresando al Home Page con el evento PageView.');
    console.log('==============================');
  }

}
