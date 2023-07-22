import { Component, OnInit, Inject } from '@angular/core';
import { CusCardsService } from '../services/cusCards/cus-cards.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityCarrito } from '../entity/entityCarrito';

@Component({
  selector: 'app-cus-cards',
  templateUrl: './cus-cards.component.html',
  styleUrls: ['./cus-cards.component.css']
})
export class CusCardsComponent implements OnInit {
  arrayCards: EntityCarrito[] = [];
  constructor(
    public dialogRef: MatDialogRef<CusCardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { },
    public servicesCard: CusCardsService
  
  ) { }

  ngOnInit(): void {
    this.arrayCards = this.servicesCard.arryProductCars;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
