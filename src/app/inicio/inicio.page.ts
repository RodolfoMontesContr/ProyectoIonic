import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public slideOpts ={
    slidesPerView : 1.3,
    spaceBetween: 50,
    freeMode: true
  };
  constructor() { }

  ngOnInit() {
    
  }
  slideInicio ={
    slidesPerView : 3.2,
    spaceBetween: 10,
    freeMode: true
  
}
}
