import { Component } from '@angular/core';
import { Postagens } from '../servico/postagens';
import { Post } from '../modelo/Post';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  //vetor de postagens
  postagens:Post[] = [];

  //Construtor
  constructor(private servico:Postagens){}

  //NgOnInit para executar ação quando o componente for criado
  ngOnInit():void{
    this.listar();
  }

  //Método para acesso a todas postagens
  listar():void{
    this.servico.listar().subscribe(p => this.postagens = p);
  }


}
