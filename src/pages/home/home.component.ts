import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HotelListComponent } from './hotel/list/list.component';
import { HotelModule } from './hotel/hotel.module';
@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  // HotelListRoot: any = HotelListComponent;
  mySlideOptions = {
    pager: true
  };
  constructor(public navCtrl: NavController) {

  }

  pushPage() {
    this.navCtrl.push(HotelListComponent);
  }
}
