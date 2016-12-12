import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  templateUrl:'welcome.html'
})
export class WelcomePage {
  constructor(public navCtrl: NavController){}

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
