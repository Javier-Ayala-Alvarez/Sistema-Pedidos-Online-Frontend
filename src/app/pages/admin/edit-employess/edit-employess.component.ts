import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-edit-employess',
  templateUrl: './edit-employess.component.html',
  styleUrls: ['./edit-employess.component.css']
})
export class EditEmployessComponent implements OnInit {

  id=0;
  employee:any;
  constructor(private employeesService:EmployeesService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeesService.listarEmployeePorId(this.id).subscribe(
      (data)=>{
        this.employee=data;
        console.log(this.employee);
      },
      (error)=>{
        console.log(this.employee);
      }
    )
  }

}
