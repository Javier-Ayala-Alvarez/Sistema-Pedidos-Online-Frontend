import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategorysService } from 'src/app/services/categorys/categorys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-categorys',
  templateUrl: './new-categorys.component.html',
  styleUrls: ['./new-categorys.component.css']
})
export class NewCategorysComponent implements OnInit {

  category={
    ct_Nombre:'',
    ct_Estado:true
  }
  constructor(private categorysService:CategorysService,
    private scnack:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
  }

  guardarCategory(){
    if(this.category.ct_Nombre.trim()==''||
      this.category.ct_Nombre==null){
        this.scnack.open("el campo es requerido","",{
          duration:3000
        })
        return;
      }
      this.categorysService.guardarCategory(this.category).subscribe(
        (dato:any)=>{
          this.category.ct_Nombre='';
          Swal.fire('Categorìa agregada','La categorìa ha sido agregada con èxito','success');
          this.router.navigate(['/admin/list-category']);
        }
      )
  }

}
