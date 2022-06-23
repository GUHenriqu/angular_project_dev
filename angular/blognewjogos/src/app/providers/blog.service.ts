// usado para dcorar o serviços angular
import { Injectable } from '@angular/core';

//importa lodash como _
import * as _ from 'lodash';

//usado para navegar entre rotas
import { Router } from '@angular/router'

// usado para requisiçoes GET, POST, etc.
import { HttpClientModule } from '@angular/common/http';

//declara uma constante base URL
const baseURL = window.location.href;

// decora a classe Blogservice para ser "injetavel" dentro do angular
@Injectable()

// exporta nossa classe para ser entendida por outros arquivos
export class BlogService {

  // declara uma variavel de escopo global na classe, com URL do serviço externo que iremos consumir. por exemplo; podemos copiar esta URL no nosso navegador.
  getURL: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    public http: HttpClientModule, //injeta o serviço httpdo angular
    public Router: Router //injeta o serviço do Router do angular
  ) {}
}
