import { Component, OnInit, QueryList } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reir',
  templateUrl: './reir.page.html',
  styleUrls: ['./reir.page.scss'],
})
export class ReirPage implements OnInit {
  @ViewChild('videoauto') videosp: QueryList<any>;
  nowPlaying = null;

  ngAfterViewInit(){
    this.didscroll();
  }

  isElementinViewport(element){
    const rect = element.getBoundingClientRect();
    return(
      rect.top >= 0 &&
      rect.left >=0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.rigth <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 

  didscroll(event?){
    console.log(event);
    if(this.nowPlaying && this.isElementinViewport(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementinViewport(this.nowPlaying)){
      this.nowPlaying.pause();
      this.nowPlaying = null;
    }

    
  this.videosp.forEach(player => {
    console.log('player', player);

    if(this.nowPlaying)return;

    const nativeElement = player.nativeElement;
    const inView = this.isElementinViewport(nativeElement);

    if(inView){
      this.nowPlaying = nativeElement;
      this.nowPlaying.play();
    }

  })
  }




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

