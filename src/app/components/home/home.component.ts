import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { EntityCategory } from 'src/app/entity/entityCategory';
import { CusCategoryService } from 'src/app/services/cusCategory/cus-category.service';//src\app\entity
import { Router } from '@angular/router';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @Output() idSelect = new EventEmitter(); // Decorador para enviar el "id"
  entityArray: EntityCategory[] = []; // Inicializamos el array
  
  loading = false;
  @ViewChild(LoadingSpinnerComponent) spinner: LoadingSpinnerComponent | undefined;

  constructor(private category: CusCategoryService,private router:Router) { } // Inicializar en el constructor el servicio

  redireccionar(id: number) {
    this.router.navigate(['/Productos', id]);
  }
  ngOnInit(): void {
    this.loading = true; // Activar el spinner
  
    this.category.loadData().then(() => {
      
      this.entityArray = this.category.entityArray;
      this.loading = false; // Desactivar el spinner cuando los datos estén cargados
    });
  }
  

 

}
