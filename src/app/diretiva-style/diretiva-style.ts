import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  imports: [CommonModule],
  templateUrl: './diretiva-style.html',
  styleUrl: './diretiva-style.css',
})
export class DiretivaStyle {
corFonte:string = 'yellow';
corFundo:string = 'green';

//objeto com atributos de estilização
estiloTexto = {
'color': this.corFonte,
'background-color': this.corFundo
}

//função para alterar as cores ao clicar no botão
alterarEstilo():void{
  this.corFonte = this.corFonte === 'yellow' ? 'white' : 'yellow';
  this.corFundo = this.corFundo === 'green' ? 'black' : 'green';

  //chamada do objeto de estilo
  this.estiloTexto = {
    'color': this.corFonte,
    'background-color': this.corFundo
  }
}

}
