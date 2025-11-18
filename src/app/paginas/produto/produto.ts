import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {

  //variável que captura o código via parametro
  codigo:number = 0;

  //contrutor
  constructor(private route:ActivatedRoute){}

  //Executa quando o componente é criado
  ngOnInit():void{
    this.codigo = Number(this.route.snapshot.paramMap.get('codigo'));
  }

}
