import { Component, signal } from '@angular/core';
import { ControleFluxo } from "./controle-fluxo/controle-fluxo";

@Component({
  selector: 'app-root',
  imports: [ControleFluxo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angular');
}
