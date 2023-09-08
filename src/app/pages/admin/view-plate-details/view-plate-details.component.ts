import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlatoService} from "../../../services/plato/plato.service";
import {PlatoInterface} from "../../../interface/plato-interface";

@Component({
  selector: 'app-view-plate-details',
  templateUrl: './view-plate-details.component.html',
  styleUrls: ['./view-plate-details.component.css']
})
export class ViewPlateDetailsComponent implements OnInit {
  id:number = 0;
  plato: PlatoInterface | undefined;

  constructor(private platoSetvice: PlatoService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getDataPlatoOfService();

  }

  private getDataPlatoOfService() {
    this.platoSetvice.ObtenerPlatoPorId(this.id).subscribe(
      (data) => {
        this.plato = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }



}
