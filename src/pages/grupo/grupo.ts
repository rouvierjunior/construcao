import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';

@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html'
})
export class GrupoPage {

  dados;
  segmento:string="lista";
  id;
  nome:string;

  constructor(public navCtrl: NavController,private grupoProvider:GrupoProvider) {
    this.grupoProvider.getTodos().subscribe(ret=>{      
      this.dados = ret; 
    })
  }

  ver(tag) {
    this.segmento=tag;
    this.id=0;
    this.nome="";
  }

  salvar() {
    let item = {"ID":this.id,"NOME":this.nome};
    this.grupoProvider.salvar(item).subscribe(ret=>{
      this.grupoProvider.getTodos().subscribe(ret=>{      
        this.dados = ret; 
      })
    })
    this.ver('lista');
  }
  
  editar(item:any) {
    this.segmento="cadastro";
    this.id = item.ID;
    this.nome=item.NOME;
  }
 
}
