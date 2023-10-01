import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlacesServicesService} from "../../Services";
import {Map} from "mapbox-gl";
import {Marker} from "mapbox-gl";
import Swal from "sweetalert2";

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

    @ViewChild('mapDiv') mapDivElement!: ElementRef;
    public coordenadas!: [number, number];
    public map !: Map;


    constructor(private placesServices: PlacesServicesService) {
    }


    ngAfterViewInit(): void {

        this.placesServices.getUserLocation().then((coords) => {

            this.coordenadas = coords;

            this.map = new Map({
                container: this.mapDivElement.nativeElement, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: coords, // starting position [lng, lat]
                zoom: 18// starting zoom
            });

            const marker = new Marker({
                scale:1.5,

            }).setLngLat(coords)
                .addTo(this.map);
        }, (error) => {
            console.log(error);
            Swal.fire('Error', 'Ocurrió un error cargar el mapa, por favor brinde acceso de ubicación', 'error');

        });


    }


}
