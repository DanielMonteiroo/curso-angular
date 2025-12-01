import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../modelo/Post';

@Injectable({
  providedIn: 'root'
})
export class Postagens {

  //Construtor
  constructor(private http:HttpClient){}

  //Método listar postagens
  listar():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
