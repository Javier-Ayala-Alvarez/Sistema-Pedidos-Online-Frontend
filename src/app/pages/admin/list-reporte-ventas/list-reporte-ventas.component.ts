import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
import { RealizarVentaService } from 'src/app/services/realizarVenta/realizar-venta.service';

@Component({
  selector: 'app-list-reporte-ventas',
  templateUrl: './list-reporte-ventas.component.html',
  styleUrls: ['./list-reporte-ventas.component.css']
})
export class ListReporteVentasComponent implements OnInit {

  ventas:any=[];
  search='';
  fecha='';

  constructor(private realizarVentaService:RealizarVentaService,
              private router:Router){

  }
  ngOnInit(): void {
    this.realizarVentaService.listarReporteVentas().subscribe(
      (dato:any)=>{
        this.ventas=dato.body;
        console.log(this.ventas);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las ventas por sucursal','error');
      }
    )

  }

  listarReporteVentasSearch(){
    if(this.search==''){
      this.ngOnInit();
    }else
    this.realizarVentaService.listarReporteVentasSearch(this.search).subscribe(
      (dato:any)=>{
        this.ventas=dato.body;
        console.log(this.ventas);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargas las ventas por sucursal','error');
      }
    )

  }
}
