import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  id=1;
  company:any;
  constructor(private companyService:CompanyService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.companyService.listarCompanyId(this.id).subscribe(
      (data)=>{
        this.company=data;
        console.log(this.company);
      },
      (error)=>{
        console.log(error);
      }
    )

  }
  public actualizarCompany(){
    this.companyService.actualizarCompany(this.id,this.company).subscribe(
      (data)=>{
        Swal.fire('Empresa actualizada','La Empresa ha sido actualizada con èxito','success').
        then((e)=>{
          this.router.navigate(['/admin/list-company'])
        });
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar la Empresa','error');
        console.log(error);
      }
    )

  }

}
