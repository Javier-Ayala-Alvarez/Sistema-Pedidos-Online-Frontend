import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PlatoService} from "../../../services/plato/plato.service";
import {PlatoInterface} from "../../../interface/plato-interface";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-plato',
  templateUrl: './list-plato.component.html',
  styleUrls: ['./list-plato.component.css']
})
export class ListPlatoComponent implements OnInit {

  paginationConfig = {
    page: 0,
    size: 2,
    order: 'id',
    asc: true
  }


  search = '';

  product: any = [];
  totalPages: any = [];

  isFirst = false;
  isLast = false;

  platos: PlatoInterface[] = [];

  constructor(private router: Router, private platoService: PlatoService) {
  }

  ngOnInit(): void {

    this.callListarPlatoPorPaginaService();
  }

  public callListarPlatoPorPaginaService(): void {
    this.platoService.listarPlatoPorPagina(this.paginationConfig.page, this.paginationConfig.size, this.paginationConfig.order, this.paginationConfig.asc).subscribe((dato: any) => {
      this.platos = dato.content;
      this.isFirst = dato.first;
      this.isLast = dato.last;
      this.totalPages = new Array(dato['totalPages']);


    }, (error) => {
      console.log(error);
      Swal.fire('Error !!', 'Error al cargar los platos', 'error');
    })

  }



  paginaSiguiente(): void {
    if (!this.isLast) {
      this.paginationConfig.page++;
      this.callListarPlatoPorPaginaService();
    }
  }

  paginaAnterior(): void {
    if (!this.isFirst) {
      this.paginationConfig.page--;
      this.callListarPlatoPorPaginaService();
    }
  }
}
