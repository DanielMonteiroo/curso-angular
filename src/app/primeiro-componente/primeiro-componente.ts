import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css',
})
export class PrimeiroComponente {
nome:string = 'Daniel';
media:number = 7;

mensagem():string{
  return "É hora de estudar!";
}

pessoa = {
  nome: 'Daniel Monteiro',
  idade: 35,
  altura: 1.80
}
}
