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

  //indice da pessoa selecionada
  indicePessoa:number = -1;

  //Método para cadastrar
  cadastrar():void {
    this.vetor.push(this.pessoa.value as Pessoa); //as Pessoa faz referencia a classe criada na pasta Modelo
    this.pessoa.reset(); //limpar o formulario apos o cadastro
  }

  //Método para selecionar uma pessoa especifica
  selecionar(indice:number):void{
   this.indicePessoa = indice;
   this.pessoa.get('nome')?.setValue(this.vetor[indice].nome|| ''); //atributo associado ao indice indicado
   this.pessoa.get('idade')?.setValue(this.vetor[indice].idade?.toString() ||'');
   this.pessoa.get('cidade')?.setValue(this.vetor[indice].cidade|| '');

   this.btnCadastrar = false;
  }

  //Método para cancelar ações de alterar e remvover
  cancelar():void{
    this.pessoa.reset();
    this.indicePessoa = -1;
    this.btnCadastrar = true;
  }

  //Método para alterar dados
  alterar():void{
    this.vetor[this.indicePessoa] = this.pessoa.value as Pessoa;
    this.cancelar();
  }

  //Método para remover dados
  remover():void{
    this.vetor.splice(this.indicePessoa,1);
    this.cancelar();
  }
}
