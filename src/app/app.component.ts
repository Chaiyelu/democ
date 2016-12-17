import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { Storage } from '@ionic/storage';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage :any =  WelcomeComponent;

  constructor(platform: Platform, public storage: Storage) {

    this.storage.get('firstIn').then((result) => {

      if(result){
        this.rootPage = TabsComponent;
      }
      else{
        this.storage.set('firstIn', true);
        this.rootPage = WelcomeComponent;
      }

    }
    );


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //Splashscreen.hide();
    });
  }

}
