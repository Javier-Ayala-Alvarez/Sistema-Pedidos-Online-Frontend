import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityProducts } from '../entity/entityProducts';
import { CusProductoService } from '../services/CusProducts/cus-producto.service';

@Component({
  selector: 'app-cus-modal-producto',
  templateUrl: './cus-modal-producto.component.html',
  styleUrls: ['./cus-modal-producto.component.css']
})
export class CusModalProductoComponent implements OnInit {
  productsArray: EntityProducts[] = [];

  constructor(
    public dialogRef: MatDialogRef<CusModalProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },private products: CusProductoService
  ) {}

  ngOnInit(): void {
    const id = this.data.id;
    const idNumber = parseInt(id, 10);
    console.log(idNumber);
    this.productsArray = this.products.getOneProducto(idNumber);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

