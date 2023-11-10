import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
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

  crearPdf(){
    this.realizarVentaService.listarReporteVentas().subscribe(
      (dato:any)=>{
        this.ventas=dato.body;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las ventas por sucursal','error');
      }
    )
    console.log("aaaa",this.ventas.map((row: { id: any; nombre: any; direccion: any; ventas: any; })=>[row.id,row.nombre,row.direccion,row.ventas]));




    const pdfDefinition:any={
      content:[
        {

          table:{
            widths: [ 'auto', 'auto', 'auto', '*' ],
            body:[
            ['ID','Nombre Sucursal','Direccion Sucursal','Total Ventas'],
            ...this.ventas.map((row: { id: any; nombre: any; direccion: any; ventas: any; })=>[row.id,row.nombre,row.direccion,row.ventas])
            ]
          }
        }
      ]
    }
    const pdf=pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }


}
