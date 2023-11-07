import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Token} from "@angular/compiler";
import {mapBoxKey} from "../../../environments/environment.prod";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MapDeliveryService {

    constructor(
        private httpClient:HttpClient
    ) { };

    // llamar a la api de mapbox directions
    public obtenerRuta(coordenadas:[number,number],coordenadasSucursal:[number,number]):Observable<any>{
        return this.httpClient.get<any>(`https://api.mapbox.com/directions/v5/mapbox/driving/${coordenadas[0]},${coordenadas[1]};${coordenadasSucursal[0]},${coordenadasSucursal[1]}?geometries=geojson&access_token=${mapBoxKey}`);
    }


}
