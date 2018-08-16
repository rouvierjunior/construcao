import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GrupoPage } from '../pages/grupo/grupo';
import { MyApp } from './app.component';
import { GrupoProvider } from '../providers/grupo/grupo';
import { ProdutoProvider } from '../providers/produto/produto';
import { ProdutoPage } from '../pages/produto/produto';
import { LancamentoProvider } from '../providers/lancamento/lancamento';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { ObraPage } from '../pages/obra/obra';

@NgModule({
  declarations: [
    MyApp,
    GrupoPage,
    ProdutoPage,
    LancamentoPage,
    ObraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GrupoPage,
    ProdutoPage,
    LancamentoPage,
    ObraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GrupoProvider,
    ProdutoProvider,
    LancamentoProvider,
  ]
})
export class AppModule {}
