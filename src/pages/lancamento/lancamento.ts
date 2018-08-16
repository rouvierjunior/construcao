import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LancamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {

  segmento:string='lista';
  dados;
  
  lancamento={"ID":null,"OBRA_ID":null,"PRODUTO_ID":null,
  "GRUPO_ID":null,"DATA":null,"QUANTIDADE":null,
  "VALORTOTAL":null,"FORNECEDOR":null}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  ver(tag) {
    this.segmento=tag;
  }

}
