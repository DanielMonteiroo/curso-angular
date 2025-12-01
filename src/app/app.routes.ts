import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { autenticacaoGuard } from './autenticacao-guard';


export const routes: Routes = [
  //load component refere-se ao lazy-loading
  /*{path:'inicio',component:Inicio},
  {path:'inicio/:mensagem',component:Inicio},
  {path:'sobre',loadComponent: ()=>import('./paginas/sobre/sobre').then(c => c.Sobre)},
  {path:'contato',loadComponent: ()=>import('./paginas/contato/contato').then(c => c.Contato)},
  {path:'produto/:codigo',loadComponent: ()=>import('./paginas/produto/produto').then(c => c.Produto)},
  {path:'restrito',loadComponent:()=>import('./paginas/restrito/restrito').then(c => c.Restrito),canActivate:[autenticacaoGuard]}, //lazy-loading + autenticação
  {path:'',redirectTo:'inicio',pathMatch:'full'}, //redirecionamento para a pag inicial
  {path:'**',loadComponent: ()=>import('./paginas/nao-encontrado/nao-encontrado').then(c => c.NaoEncontrado)} //exibição de mensagem de pagina nao encontrada*/
];
