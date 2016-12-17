import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutComponent } from '../pages/about/about.component';
import { OrderComponent } from '../pages/order/order.component';
import { ContactComponent} from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { HotelListComponent } from '../pages/home/hotel/list/list.component';

import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutComponent,
    OrderComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    WelcomeComponent,
    HotelListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutComponent,
    OrderComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    WelcomeComponent,
    HotelListComponent
  ],
  providers: [Storage]
})
export class AppModule {

}
