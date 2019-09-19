import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalService } from './global.service';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__pesquisaPF19',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
