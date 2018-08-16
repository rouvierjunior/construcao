import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the GrupoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrupoProvider extends Config{
  
  private PATH=this.HOST_WS+"/grupos/";
  
  constructor(private http:HttpClient) {
    super()
  }

  getTodos() {
    return this.http.get(this.PATH+"read.php?token="+this.TOKEN_WS);
  }

  get(key:string) {
    return this.http.get(this.PATH+"read.php?token="+this.TOKEN_WS+"&id="+key);
  }

  getPorProduto(ID_PRODUTO:number) {
      return this.http.get(this.PATH+"read.php?token="+this.TOKEN_WS+"&p="+ID_PRODUTO);
        
  }

  /**
   * Salva o grupo
   * @param item 
   */
  salvar(item:any) {
    if(item.ID>0) {
      return this.http.put(this.PATH+"update.php?token="+this.TOKEN_WS,JSON.stringify(item));
    } else {
      return this.http.post(this.PATH+"create.php?token="+this.TOKEN_WS,JSON.stringify(item));
    }
  }
}
