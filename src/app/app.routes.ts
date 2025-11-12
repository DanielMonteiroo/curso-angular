import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Sobre } from './paginas/sobre/sobre';
import { Contato } from './paginas/contato/contato';
import { NaoEncontrado } from './paginas/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  {path:'inicio',component:Inicio},
  {path:'sobre',component:Sobre},
  {path:'contato',component:Contato},
  {path:'',redirectTo:'inicio',pathMatch:'full'}, //redirecionamento para a pag inicial
  {path:'**',component:NaoEncontrado} //exibição de mensagem de pagina nao encontrada
];
