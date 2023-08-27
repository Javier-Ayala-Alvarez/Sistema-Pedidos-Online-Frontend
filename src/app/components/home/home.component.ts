import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EntityCategory } from 'src/app/entity/entityCategory';
import { CusCategoryService } from 'src/app/services/cusCategory/cus-category.service';//src\app\entity
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @Output() idSelect = new EventEmitter(); // Decorador para enviar el "id"
  entityArray: EntityCategory[] = []; // Inicializamos el array

  constructor(private category: CusCategoryService,private router:Router) { } // Inicializar en el constructor el servicio

  redireccionar(id: number) {
    this.router.navigate(['/Productos', id]);
  }
  /*
  deleteContact(_id: number) { // Eliminamos el registro
    this.category.onDelete(_id);
  }

  getPosition(_id: number) { // Mandamos el "id" del registro para cargar en el formulario
    this.idUpdate.emit(_id); // Enviamos por medio del decorador
  }
  */

  ngOnInit(): void {
    this.category.loadData().then(() => {
      this.entityArray = this.category.entityArray;
    });
  }

}
