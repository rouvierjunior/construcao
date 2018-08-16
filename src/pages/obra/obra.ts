import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-obra',
  templateUrl: 'obra.html',
})
export class ObraPage {

  id;
  nome:string;
  descricao:string;
  segmento="lista";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  ver(tag) {
    this.segmento=tag;
  }

  salvar() {

  }

  editar(item) {
    this.segmento="cadastro";
    this.nome=item.nome;
    this.descricao=item.descricao;
    this.id=item.id;
  }

}
