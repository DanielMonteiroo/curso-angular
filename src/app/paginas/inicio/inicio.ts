import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
alert(arg0: string) {
}

  //variavel parametro
  situacaoParametro:string = '';

  //construtor
  constructor(private route:ActivatedRoute){}

  //ngOnInit
  ngOnInit():void{
    this.situacaoParametro = this.route.snapshot.paramMap.get('mensagem')||'';
  }
}
