import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './Componets/map-view/map-view.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule
  ], exports: [
        MapViewComponent
    ]
})
export class MapsModule {

}
