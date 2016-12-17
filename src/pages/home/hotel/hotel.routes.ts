import { Route } from "@angular/router";
import { HotelListComponent } from "./list/list.component";

export const HotelRoutes: Route[] = [
  {
    path: 'hotel/list',
    component: HotelListComponent
  }
];
