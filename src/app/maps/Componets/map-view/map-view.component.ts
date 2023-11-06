import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlacesServicesService} from "../../Services";
import mapboxgl, {Map, Marker, Popup} from "mapbox-gl";

import Swal from "sweetalert2";
import {BranchsOfficeService} from "../../../services/branchs-office/branchs-office.service";
import {sucursalInterface} from "../../../interface/sucursalInterface";

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

    @ViewChild('mapDiv') mapDivElement!: ElementRef;
    public coordenadas!: [number, number];
    public map !: Map;

    public sucursales: sucursalInterface[] = [];
    // id de sucursal mas cercana
    public idSucursal: number = 0;

    constructor(private placesServices: PlacesServicesService, private sucursalService: BranchsOfficeService) {
    }


    ngAfterViewInit(): void {

        this.placesServices.getUserLocation().then((coords) => {


        }, (error) => {
            console.log(error);
            Swal.fire('Error', 'Ocurrió un error cargar el mapa, por favor brinde acceso de ubicación', 'error');

        });


        //this.coordenadas = [-88.89653, 13.794185];

        this.map = new Map({
            container: this.mapDivElement.nativeElement, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-88.89653, 13.794185], // starting position [lng, lat]
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

        this.map.addControl(geolocate);


        this.map.on('load', () => {
            geolocate.trigger();

        });

        geolocate.on('geolocate', (e) => {
            //cast e to object
            if (e != null) {
                let target = e as any;
                this.coordenadas = [target.coords.longitude, target.coords.latitude];
                //console.log(this.coordenadas);


              // obtener id de la sucursal mas cercana
              this.sucursales.forEach((sucursal) => {
                let lat = sucursal.altitud;
                let lng = sucursal.longitud;
                let distancia = this.placesServices.calcularDistancia(this.coordenadas[0], this.coordenadas[1], lng, lat);
                if (distancia < sucursal.radio) {
                  this.idSucursal = sucursal.id;
                  console.log(`la distancia es de ${distancia} y el id de la sucursal es ${this.idSucursal}`);
                }else{
                  // sweet alert
                    Swal.fire('Info', 'No se encontró sucursal cercana', 'info');
                }



              });
            }

        });


        this.sucursalService.listarSucursalActivoConInterfaz().subscribe((sucursales) => {
            this.sucursales = sucursales;
            sucursales.forEach((sucursal) => {
                let lat = sucursal.longitud;
                let lng = sucursal.altitud;
                let mark = new Marker({color: 'red'})
                    .setLngLat([lat, lng])
                    .setPopup(new Popup().setHTML(`

                            <h1>${sucursal.nombre}</h1>
                        `))
                    .addTo(this.map);
            });
        }, (error) => {
            console.log(error);
            // a ocurrido un error, al mostrar las sucursales, swall alert
            Swal.fire('Info', 'Ocurrió un error al mostrar las sucursales', 'info');
        });


    }


}
