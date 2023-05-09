import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  constructor(private companyService:CompanyService) { }

  company:any=[];
  id=1;

  ngOnInit(): void {
    this.companyService.listarCompanyId(this.id).subscribe(
      (data)=>{
        this.company=data;
        console.log(this.company);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar la empresa','error');
      }

    )

  }

}
