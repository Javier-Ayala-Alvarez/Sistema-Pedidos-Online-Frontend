import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetallePedidoComponent} from './Components/detalle-pedido/detalle-pedido.component';
import {MatIconModule} from "@angular/material/icon";
import {MapDeliveryComponent} from './Components/map-delivery/map-delivery.component';
import {DeliveryPedidoComponent} from './Components/delivery-pedido/delivery-pedido.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MapsModule} from "../maps/maps.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PedidosEntregadosComponent} from './Components/pedidos-entregados/pedidos-entregados.component';


@NgModule({
    declarations: [

        DetallePedidoComponent,
        MapDeliveryComponent,
        DeliveryPedidoComponent,
        PedidosEntregadosComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MapsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ], exports: [
        DeliveryPedidoComponent,
        PedidosEntregadosComponent
    ]
})
export class PedidosModule {

}
