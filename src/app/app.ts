import { Component, signal } from '@angular/core';
import { ProjetoCrud } from "./projeto-crud/projeto-crud";
import { Rotas } from "./rotas/rotas";
import { Blog } from "./blog/blog";

@Component({
  selector: 'app-root',
  imports: [Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angular');
}
