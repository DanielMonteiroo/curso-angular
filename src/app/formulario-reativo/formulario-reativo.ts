import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.html',
  styleUrl: './formulario-reativo.css',
})
export class FormularioReativo {

  //objeto do formulário
pessoa = new FormGroup({
   nome : new FormControl('',[Validators.required,Validators.minLength(3)]),
   idade : new FormControl('',[Validators.required,Validators.max(100)])
});

}
