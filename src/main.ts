import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = '<your access token here>';


if (!navigator.geolocation){
  alert('Geolocation is not supported by your browser')
  throw new Error('Geolocation is not supported by your browser');
}

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
