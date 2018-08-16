import { GrupoProvider } from './../../providers/grupo/grupo';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';


/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  dados;
  grupos;
  segmento="lista";
  //campos do formulario
  id;
  nome;
  gruposSelecionados=[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private provedorProduto:ProdutoProvider,private provedorGrupo:GrupoProvider,
    private msg:ToastController) {

    this.provedorProduto.getTodos().subscribe(ret=>{
      this.dados = ret;
    })
    this.provedorGrupo.getTodos().subscribe(ret=>{
      this.grupos = ret;
    })
    
  }

  /**
   * Salva/Altera o cadastro
   */
 salvar() {
  let produto = {NOME:this.nome,GRUPOS:this.gruposSelecionados}
  
   if (this.id) {
    produto['ID'] = this.id;
   }
   
   this.provedorProduto.salvar(produto).subscribe(ret=>{
      this.msg.create({
        message:"Salvo com sucesso",
        position:"top",
        duration:3000,
        cssClass:"changeToast"
      }).present();
   });

   //limpa as variaveis
   this.id=null;
   this.nome=null;
   this.gruposSelecionados=null;
   
 }

 /**
  * Monta o objeto para carregar no formulario de edição
  * @param item 
  */
 editar(item:any) {
   this.segmento="cadastro";
   this.id = item.ID;
   this.nome=item.NOME;
   this.provedorGrupo.getPorProduto(item.ID).subscribe(ret=>{
      this.gruposSelecionados = [].map.call(ret,(x)=>{
        return x.ID;
      });
      
   })
   
   
 }

}
