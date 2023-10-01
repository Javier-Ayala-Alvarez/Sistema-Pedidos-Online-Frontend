import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesServicesService {
  public useLocation?: [number, number];

  get isLocation(): boolean {
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        this.useLocation = [coords.longitude, coords.latitude];
        resolve(this.useLocation);
      }, (err) => {
        alert("No se pudo obtener su ubicación");
        console.log(err);
        reject();
      });

    });

  }
}
