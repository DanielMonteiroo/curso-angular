import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SituacaoMediaPipe } from '../situacao-media-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,SituacaoMediaPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

   pessoa = {
     nome: 'Daniel Monteiro',
     idade: 35
   }

}
