import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { CategorysService } from 'src/app/services/categorys/categorys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categorys',
  templateUrl: './edit-categorys.component.html',
  styleUrls: ['./edit-categorys.component.css']
})
export class EditCategorysComponent implements OnInit {

  id=0;
  category:any;

  constructor(private categorysService:CategorysService,
              private router:Router,
              private route:ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.categorysService.listarCategoryPorId(this.id).subscribe(
      (data)=>{
        this.category=data;
        console.log(this.category);
      },
      (error)=>{
        console.log(this.category);
      }
    )
  }

  public actualizarCategory(){

    this.categorysService.actualizarCategory(this.category,this.id).subscribe(
      (data)=>{
        Swal.fire('CategoriaInterface actualizado','La CategoriaInterface ha sido actualizada con èxito','success').
        then((e)=>{
          this.router.navigate(['/admin/list-category']);
        })
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar la categoria','error');
        console.log(error);
      }
    )
  }

}
