import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reir',
  templateUrl: './reir.page.html',
  styleUrls: ['./reir.page.scss'],
})
export class ReirPage implements OnInit {

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
    direction: 'vertical',
    slidesPerView : 1
  }

}
