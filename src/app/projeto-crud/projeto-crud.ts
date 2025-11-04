import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../Modelo/Pessoa';

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

  //Vetor para armazenamento de pessoas cadastradas
  vetor: Pessoa[] = [];

  //Método para cadastrar
  cadastrar():void {
    this.vetor.push(this.pessoa.value as Pessoa); //as Pessoa faz referencia a classe criada na pasta Modelo
    this.pessoa.reset(); //limpar o formulario apos o cadastro
  }

}
