import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider extends Config {
  private PATH=this.HOST_WS+"/produtos/";

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Retorna uma observable
   */
  getTodos() {
    return this.http.get(this.PATH+"read.php?token="+this.TOKEN_WS);
  }

  get(key:string) {
    return this.http.get(this.PATH+"read.php&id="+key+"&token="+this.TOKEN_WS);
  }

  /**
   * Retorna uma promisse
   */
  getPorGrupo(grupo:string) {
    return this.http.get(this.PATH+"read.php?g="+grupo+"&token="+this.TOKEN_WS);
  }

  salvar(item:any) {
      if(item.ID) {
        return this.http.put(this.PATH+"update.php?token="+this.TOKEN_WS,JSON.stringify(item));
      } else {
        return this.http.post(this.PATH+"create.php?token="+this.TOKEN_WS,JSON.stringify(item));
      }
  }
  

}
