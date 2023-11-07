import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {sucursalInterface} from "../../../interface/sucursalInterface";
import mapboxgl, {Map, Marker, Popup} from "mapbox-gl";
import {MapDeliveryService} from "../../Service/mapDeliveryService";

@Component({
    selector: 'app-map-delivery',
    templateUrl: './map-delivery.component.html',
    styleUrls: ['./map-delivery.component.css']
})
export class MapDeliveryComponent implements AfterViewInit {
    @Input() entregaCoordenadas?: [number, number];
    //@Input() sucursal ?: sucursalInterface;

    @ViewChild('mapElement') mapElement !: ElementRef;
    public map ?: Map;

    constructor(private mapboxService: MapDeliveryService) {
    }

    ngAfterViewInit(): void {



    }

    public cargarMapa(coordenadas: [number, number], sucursal: sucursalInterface) {
        console.log(sucursal);

        this.map = new Map({
            container: this.mapElement.nativeElement, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: coordenadas, // starting position [lng, lat]
            zoom: 7// starting zoom
        });
        //ading controls
        this.map.addControl(new mapboxgl.NavigationControl());
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },

            trackUserLocation: true,
            showUserHeading: true,
        });

        let mark = new Marker({color: 'red'})
            .setLngLat([coordenadas![0], coordenadas![1]])

            .setPopup(new Popup().setHTML(`

                <div class="card" ">
                    <div class="card-body">
                        <h4> Ubicación de entrega</h4>
                        <p>Latitud: ${coordenadas![1]}</p>
                        <p>Longitud: ${coordenadas![0]}</p>
                    </div>
                </div>

                        `))
            .addTo(this.map);

        let markSucursal = new Marker({color: 'blue'})
            .setLngLat([sucursal.longitud, sucursal.altitud])

            .setPopup(new Popup().setHTML(`

                <div class="card" ">
                    <div class="card-body">
                        <h4> Ubicación de sucursal</h4>
                        <p>Latitud: ${sucursal.altitud}</p>
                        <p>Longitud: ${sucursal.longitud}</p>
                    </div>
                </div>

                        `))
            .addTo(this.map);


        // agregar linea de ruta
        this.mapboxService.obtenerRuta(coordenadas, [sucursal.longitud, sucursal.altitud]).subscribe(
            (data) => {
                console.log(data);
                let route = data.routes[0].geometry;
                console.log(route);
                this.map?.on('load', () => {
                    this.map?.addSource('route', {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'properties': {},
                            'geometry': route
                        }
                    });
                    this.map?.addLayer({
                        'id': 'route',
                        'type': 'line',
                        'source': 'route',
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': '#888',
                            'line-width': 8
                        }
                    });
                });
            },
            (error) => {
                console.log(error);
            }
        )


    }





}
