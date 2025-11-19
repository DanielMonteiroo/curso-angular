import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacaoGuard: CanActivateFn = (route, state) => {

  //Router
  const router = inject(Router);

  //Constante de acesso
  const acesso = false;

  //condicional
  if(acesso){
    return true;
  }else{
    router.navigate(['/inicio/falhaAcesso']); //redirecionamento onde será exibida a mensagem de acesso restrito
    return false;
  }



};
