import { Component } from '@angular/core';
import { Formulario } from "../formulario/formulario";
import { Tabela } from "../tabela/tabela";

@Component({
  selector: 'app-principal',
  imports: [Formulario, Tabela],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

}
