import { Component, signal } from '@angular/core';
import { ProjetoCrud } from "./projeto-crud/projeto-crud";
import { Rotas } from "./rotas/rotas";

@Component({
  selector: 'app-root',
  imports: [Rotas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angular');
}
