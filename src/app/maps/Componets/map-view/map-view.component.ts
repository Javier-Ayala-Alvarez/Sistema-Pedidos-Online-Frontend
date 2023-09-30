import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlacesServicesService} from "../../Services";
import {Map} from "mapbox-gl";

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

    @ViewChild('mapDiv') mapDivElement!: ElementRef;

    constructor(private placesServices: PlacesServicesService) {
    }

    ngAfterViewInit(): void {
        if (!this.placesServices.useLocation) throw new Error('No hay placesServices.useLocation');

        const map = new Map({
            container: this.mapDivElement.nativeElement, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: this.placesServices.useLocation, // starting position [lng, lat]
            zoom: 14 // starting zoom
        });

    }


}
