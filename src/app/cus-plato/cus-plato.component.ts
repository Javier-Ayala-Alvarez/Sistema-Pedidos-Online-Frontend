import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';
import { ActivatedRoute } from '@angular/router';
import { EntityProducts } from '../entity/entityProducts';
import { MatDialog } from '@angular/material/dialog';
import { CusModalProductoComponent } from '../cus-modal-producto/cus-modal-producto.component';
import { CusCardsService } from '../services/cusCards/cus-cards.service';

@Component({
  selector: 'app-cus-plato',
  templateUrl: './cus-plato.component.html',
  styleUrls: ['./cus-plato.component.css']
})
export class CusPlatoComponent implements OnInit {
@Output() idSelect = new EventEmitter();//Decorador para enviar el id
productsArray: EntityProducts[]=[];
  constructor(private products: CusProductoService,private activatedRoute:ActivatedRoute,private dialog: MatDialog) { }//, ,private modalService: NgbModal
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      // Utiliza el ID como necesites, por ejemplo:
      this.productsArray = this.products.getOneCategory(id);
    });
  }

  openModal(id: number) {
    const dialogRef = this.dialog.open(CusModalProductoComponent, {
      width: '800px', // Establece el ancho del diálogo modal según tus necesidades
      height: '400px',
      data: {  id: id} /* Puedes pasar datos adicionales al diálogo modal si es necesario */
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica que desees realizar después de que se cierra el diálogo modal
    });
  }
  

}
