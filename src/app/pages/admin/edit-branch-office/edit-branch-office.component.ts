import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { BranchsOfficeService } from 'src/app/services/branchs-office/branchs-office.service';
import { CompanyService } from 'src/app/services/company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-branch-office',
  templateUrl: './edit-branch-office.component.html',
  styleUrls: ['./edit-branch-office.component.css']
})
export class EditBranchOfficeComponent implements OnInit {

  id=0;
  branchOffice:any;
  companys:any;

  constructor(private companyService:CompanyService,
              private router:Router,
              private route:ActivatedRoute,
              private branchsOfficeService:BranchsOfficeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.branchsOfficeService.listarSucursalPorId(this.id).subscribe(
      (data)=>{
        this.branchOffice=data;
        console.log(this.branchOffice);
      },
      (error)=>{
        console.log(this.branchOffice);
      }
    )
    this.companyService.listarCompanyTodos().subscribe(
      (data:any)=>{
        this.companys=data;
      },
      (error)=>{
        alert('Error al cargar las categorías');
      }
    )
  }

  public actualizarSucursal(){
    this.branchsOfficeService.actualizarSucursal(this.branchOffice,this.id).subscribe(
      (data)=>{
        Swal.fire('Sucursal actualizado','La Sucursal ha sido actualizada con èxito','success').
        then((e)=>{
          this.router.navigate(['/admin/list-branch-office']);
        })
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar la Sucursal','error');
        console.log(error);
      }

    )
  }

}
