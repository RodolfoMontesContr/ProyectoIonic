import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  goJuegos(){
    this.navCtrl.navigateForward(['juegos']);
  }
  goHome(){
    this.navCtrl.navigateForward(['home']);
  }
  goReir(){
    this.navCtrl.navigateForward(['reir']);
  }
}
