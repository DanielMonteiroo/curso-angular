import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.css',
})
export class ProjetoCrud {

  //Variavel para trabalhar com  a visibilidad dos botões
  btnCadastrar:boolean = true;

  //Objeto pessoa do tipo FormGroup
  pessoa = new FormGroup({
    nome: new FormControl('',[Validators.required,Validators.minLength(3)]),
    idade: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
    cidade: new FormControl('',[Validators.required,Validators.minLength(3)])
  });
}
