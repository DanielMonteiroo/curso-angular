import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
//implementação @output
@Output() adicionar = new EventEmitter<Pessoa>();

//variáveis
 nome:string = '';
 cidade:string = '';

 //método cadastrar
 cadastrar():void{

  let p = new Pessoa();

 p.nome = this.nome;
 p.cidade = this.cidade;

 //Efetuar cadastro
 this.adicionar.emit(p);

 //limpar formulário
 this.nome = '';
 this.cidade= '';
 }


}
