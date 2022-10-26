import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-reir',
  templateUrl: './reir.page.html',
  styleUrls: ['./reir.page.scss'],
})
export class ReirPage implements OnInit {

  constructor(
    private videoPlayer: VideoPlayer,
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

  playvideo(){
    this.videoPlayer.play('file:///android_asset/www/assets/videos/ST4.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }



}

export class Vplayer {
  constructor(private videoPlayer: VideoPlayer){
  }

  playvideo(){
    this.videoPlayer.play('file:///android_asset/www/assets/videos/ST4.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  playvid(){
    this.videoPlayer.play('file:///android_asset/www/assets/videos/ST4.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });

  }
}