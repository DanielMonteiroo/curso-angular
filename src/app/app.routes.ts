import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Sobre } from './paginas/sobre/sobre';
import { Contato } from './paginas/contato/contato';
import { NaoEncontrado } from './paginas/nao-encontrado/nao-encontrado';
import { Produto } from './paginas/produto/produto';

export const routes: Routes = [
  {path:'inicio',component:Inicio},
  {path:'sobre',loadComponent: ()=>import('./paginas/sobre/sobre').then(c => c.Sobre)},
  {path:'contato',loadComponent: ()=>import('./paginas/contato/contato').then(c => c.Contato)},
  {path:'produto/:codigo',loadComponent: ()=>import('./paginas/produto/produto').then(c => c.Produto)},
  {path:'',redirectTo:'inicio',pathMatch:'full'}, //redirecionamento para a pag inicial
  {path:'**',loadComponent: ()=>import('./paginas/nao-encontrado/nao-encontrado').then(c => c.NaoEncontrado)} //exibição de mensagem de pagina nao encontrada
];
