import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    "username" : '',
    "password" : '',
  }
  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.loginData.username.trim()==''|| this.loginData.password.trim()==null){
      this.snack.open('El nombre de usuario es requerido ', 'Aceptar',{duration:3000})
      return;
    }
    if(this.loginData.password.trim()==''||this.loginData.password.trim()==null){
      this.snack.open('La contraseña es requerida ','Aceptar',{
        duration:3000
      })
      return;
    }
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);
          console.log(user);
          if(this.loginService.getUserRole() == 'ADMIN'){
            this.router.navigate(['admin/welcome']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole()=='CLIENTE'){
            this.router.navigate(['customer-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole()=='COCINA'){
            this.router.navigate(['cocina-dashboard/cocina-welcome']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole()=='DELIVERY'){
            this.router.navigate(['delivery-dashboard/delivery-welcome']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      },(error)=>{
        console.log(error);
        this.snack.open('Detalles inválidos, vuelva a intentar ','Aceptar',{
          duration:3000
        })
      }
    )
  }
}
