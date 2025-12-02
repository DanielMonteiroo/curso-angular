import { Component, Input } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  @Input() vetor:Pessoa[] =[];

}
