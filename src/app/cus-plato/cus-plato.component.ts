import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';
import { ActivatedRoute } from '@angular/router';
import { EntityProducts } from '../entity/entityProducts';
import { CusModalProductoComponent } from '../cus-modal-producto/cus-modal-producto.component';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cus-plato',
  templateUrl: './cus-plato.component.html',
  styleUrls: ['./cus-plato.component.css']
})
export class CusPlatoComponent implements OnInit {
@Output() idSelect = new EventEmitter();//Decorador para enviar el id
productsArray: EntityProducts[]=[];
  constructor(private products: CusProductoService,private activatedRoute:ActivatedRoute) { }//, ,private modalService: NgbModal
  //openModal(): void {
    //const modalRef = this.modalService.open(CusModalProductoComponent);
    // Puedes agregar código adicional para pasar datos a la modal, configurar opciones, etc.
  //}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      // Utiliza el ID como necesites, por ejemplo:
      this.productsArray = this.products.getOneCategory(id);
    });
  }

  //ngOnInit(): void {
    //this.productsArray = this.products.getProduct(); // Llenamos el array
 //}

}
