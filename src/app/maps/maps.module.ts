import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './Componets/map-view/map-view.component';
import { MapScreenComponent } from './Screens/map-screen/map-screen.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule
  ], exports: [
        MapScreenComponent,
        MapViewComponent
    ]
})
export class MapsModule {

}
