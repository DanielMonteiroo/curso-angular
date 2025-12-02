import { Component } from '@angular/core';
import { Formulario } from "../formulario/formulario";
import { Tabela } from "../tabela/tabela";
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [Formulario, Tabela, CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
//vetor para armazenar pessoas
pessoas:Pessoa[] = [];

//método para cadastro
adicionarPessoa(pessoa:Pessoa):void{
this.pessoas.push(pessoa);
}

}
