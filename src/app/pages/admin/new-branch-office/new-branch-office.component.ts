import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { BranchsOfficeService } from 'src/app/services/branchs-office/branchs-office.service';
import { CompanyService } from 'src/app/services/company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-branch-office',
  templateUrl: './new-branch-office.component.html',
  styleUrls: ['./new-branch-office.component.css']
})
export class NewBranchOfficeComponent implements OnInit {


  companys:any=[];

  branchOffice={
    nombre:'',
    abreviatura:'',
    direccion:'',
    estado:true,
    empresa:{
      id:''
    }
  }


  constructor(private companyService:CompanyService,
    private branchsOfficeService:BranchsOfficeService,
    private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.companyService.listarCompanyTodos().subscribe(
      (dato:any)=>{
        this.companys=dato;
        console.log(this.companys);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }

    )
  }

  guardarSucursal(){
    if(this.branchOffice.nombre.trim()==''||
        this.branchOffice.abreviatura.trim()==''||
        this.branchOffice.direccion.trim()==''){
          this.snack.open("Los datos son requeridos","",{
            duration:3000
          })
          return ;
    }
    this.branchsOfficeService.guardarSucursal(this.branchOffice).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Sucursal guardada','La Sucursal ha sido guardada con éxito','success');
        this.branchOffice={
          nombre:'',
          abreviatura:'',
          direccion:'',
          estado:true,
          empresa:{
            id:''
          }
        }
        this.router.navigate(['/admin/list-branch-office']);
      },
      (error)=>{
        Swal.fire('Error','Error al guardar la Sucursal','error');
      }
    )
  }

}
