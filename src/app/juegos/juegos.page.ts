import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  goJuegos(){
    this.navCtrl.navigateForward(['juegos']);
  }
  goHome(){
    this.navCtrl.navigateForward(['home']);
  }
  goReir(){
    this.navCtrl.navigateForward(['reir']);
  }

  ngOnInit() {
  }
  slideOpts ={
    slidesPerView : 3.2,
    spaceBetween: 10,
    freeMode: true
  }

}
