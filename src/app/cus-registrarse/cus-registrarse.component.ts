import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cus-registrarse',
  templateUrl: './cus-registrarse.component.html',
  styleUrls: ['./cus-registrarse.component.css']
})
export class CusRegistrarseComponent implements OnInit {
  newSesion = {//Agregamos este objeto
    usuario:'',
    contrasenia:'',
    contraseniaConfirm:'',
    apodo:'',
    fechaNacimiento:'',
    apellido:'',
    nombre:'',

 
  }
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    
  }
}
