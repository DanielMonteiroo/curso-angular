import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  //vetor armazenar dados
  @Input() vetor:Pessoa[] =[];

  //função remover dados selecionados
  @Output() remover = new EventEmitter<number>();

  excluir(indice:number):void{
      this.remover.emit(indice);
  }

}
