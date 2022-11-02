import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],

  imports: [ 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     VideoPlayer],

  bootstrap: [AppComponent],
})
export class AppModule {}
