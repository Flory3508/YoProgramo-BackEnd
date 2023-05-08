import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
formRegistro:FormGroup;

  constructor(
    public formulario:FormBuilder,
    ) {
    this.formRegistro = this.formulario.group({
      correo:[''],
      contrasenia:['']
    })
  }
  ngOnInit(): void {}

      enviarDatos():any{
        console.log('Me presionaste');
        console.log(this.formRegistro.value)
      }
  }

