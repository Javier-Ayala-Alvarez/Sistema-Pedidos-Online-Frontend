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

  public calcularDistancia(lon1: number, lat1: number, lon2: number, lat2: number): number {
    // conversión de grados a radianes
    let lngRad = lon1 * (Math.PI / 180);
    let latRad = lat1 * (Math.PI / 180);
    let lng2Rad = lon2 * (Math.PI / 180);
    let lat2Rad = lat2 * (Math.PI / 180);
    //Aproximación de la distancia equirectangular
    let x = (lng2Rad - lngRad) * Math.cos((latRad + lat2Rad) / 2);
    let y = (lat2Rad - latRad);
    let d = Math.sqrt(x * x + y * y) * 6371;
    return d;


  }
}
