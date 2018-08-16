webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(98);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GrupoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GrupoProvider = /** @class */ (function (_super) {
    __extends(GrupoProvider, _super);
    function GrupoProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.PATH = _this.HOST_WS + "/grupos/";
        return _this;
    }
    GrupoProvider.prototype.getTodos = function () {
        return this.http.get(this.PATH + "read.php?token=" + this.TOKEN_WS);
    };
    GrupoProvider.prototype.get = function (key) {
        return this.http.get(this.PATH + "read.php?token=" + this.TOKEN_WS + "&id=" + key);
    };
    GrupoProvider.prototype.getPorProduto = function (ID_PRODUTO) {
        return this.http.get(this.PATH + "read.php?token=" + this.TOKEN_WS + "&p=" + ID_PRODUTO);
    };
    /**
     * Salva o grupo
     * @param item
     */
    GrupoProvider.prototype.salvar = function (item) {
        if (item.ID > 0) {
            return this.http.put(this.PATH + "update.php?token=" + this.TOKEN_WS, JSON.stringify(item));
        }
        else {
            return this.http.post(this.PATH + "create.php?token=" + this.TOKEN_WS, JSON.stringify(item));
        }
    };
    GrupoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GrupoProvider);
    return GrupoProvider;
}(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* Config */]));

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrupoPage = /** @class */ (function () {
    function GrupoPage(navCtrl, grupoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.grupoProvider = grupoProvider;
        this.segmento = "lista";
        this.grupoProvider.getTodos().subscribe(function (ret) {
            _this.dados = ret;
        });
    }
    GrupoPage.prototype.ver = function (tag) {
        this.segmento = tag;
        this.id = 0;
        this.nome = "";
    };
    GrupoPage.prototype.salvar = function () {
        var _this = this;
        var item = { "ID": this.id, "NOME": this.nome };
        this.grupoProvider.salvar(item).subscribe(function (ret) {
            _this.grupoProvider.getTodos().subscribe(function (ret) {
                _this.dados = ret;
            });
        });
        this.ver('lista');
    };
    GrupoPage.prototype.editar = function (item) {
        this.segmento = "cadastro";
        this.id = item.ID;
        this.nome = item.NOME;
    };
    GrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupo',template:/*ion-inline-start:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/grupo/grupo.html"*/'<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Grupos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="segmento" >\n      <ion-list *ngSwitchCase="\'lista\'" >\n          <button ion-button value="cadastro" (click)="ver(\'cadastro\')">Cadastro</button>\n          <ion-item *ngFor="let item of dados" >\n            {{item.NOME}}<button ion-button item-end (click)="editar(item)">Editar</button>\n          </ion-item>\n      </ion-list>\n   \n      <ion-card *ngSwitchCase="\'cadastro\'" >\n          <button ion-button value="lista" (click)="ver(\'lista\')" >Lista</button>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label color="primary" floating>GRUPO</ion-label>\n                      <ion-input type="text" color="primary" [(ngModel)]="nome"></ion-input>\n                    </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          \n          <ion-item>\n              <button ion-button small (click)="salvar()">Salvar</button>\n          </ion-item>\n      </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/grupo/grupo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__["a" /* GrupoProvider */]])
    ], GrupoPage);
    return GrupoPage;
}());

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
        this.HOST_WS = "http://localhost/rest";
        this.TOKEN_WS = "01abfc750a0c942167651c40d088531d";
    }
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LancamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LancamentoPage = /** @class */ (function () {
    function LancamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segmento = 'lista';
        this.lancamento = { "ID": null, "OBRA_ID": null, "PRODUTO_ID": null,
            "GRUPO_ID": null, "DATA": null, "QUANTIDADE": null,
            "VALORTOTAL": null, "FORNECEDOR": null };
    }
    LancamentoPage.prototype.ionViewDidLoad = function () {
    };
    LancamentoPage.prototype.ver = function (tag) {
        this.segmento = tag;
    };
    LancamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lancamento',template:/*ion-inline-start:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/lancamento/lancamento.html"*/'<!--\n  Generated template for the LancamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lançamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="segmento" >\n    <ion-list *ngSwitchCase="\'lista\'" >\n        <button ion-button value="cadastro" (click)="ver(\'cadastro\')">Cadastro</button>\n        <ion-item *ngFor="let item of dados" >\n          {{item.PRODUTO.NOME}}<button ion-button item-end (click)="">Remover</button>\n        </ion-item>\n    </ion-list>\n \n    <ion-card *ngSwitchCase="\'cadastro\'" >\n        <button ion-button value="lista" (click)="ver(\'lista\')" >Lista</button>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-label color="primary" floating>OBRA</ion-label>\n                      <ion-select [(ngModel)]="lancamento.OBRA_ID" >\n                        <ion-option *ngFor="let item of obras" value="item.ID" >\n                          {{item.NOME}}\n                        </ion-option>\n                      </ion-select>\n                  </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n        <ion-item>\n            <button ion-button small (click)="salvar()">Salvar</button>\n        </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/lancamento/lancamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LancamentoPage);
    return LancamentoPage;
}());

//# sourceMappingURL=lancamento.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_grupo_grupo__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produto_produto__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, navParams, provedorProduto, provedorGrupo, msg) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provedorProduto = provedorProduto;
        this.provedorGrupo = provedorGrupo;
        this.msg = msg;
        this.segmento = "lista";
        this.gruposSelecionados = [];
        this.provedorProduto.getTodos().subscribe(function (ret) {
            _this.dados = ret;
        });
        this.provedorGrupo.getTodos().subscribe(function (ret) {
            _this.grupos = ret;
        });
    }
    /**
     * Salva/Altera o cadastro
     */
    ProdutoPage.prototype.salvar = function () {
        var _this = this;
        var produto = { NOME: this.nome, GRUPOS: this.gruposSelecionados };
        if (this.id) {
            produto['ID'] = this.id;
        }
        this.provedorProduto.salvar(produto).subscribe(function (ret) {
            _this.msg.create({
                message: "Salvo com sucesso",
                position: "top",
                duration: 3000,
                cssClass: "changeToast"
            }).present();
        });
        //limpa as variaveis
        this.id = null;
        this.nome = null;
        this.gruposSelecionados = null;
    };
    /**
     * Monta o objeto para carregar no formulario de edição
     * @param item
     */
    ProdutoPage.prototype.editar = function (item) {
        var _this = this;
        this.segmento = "cadastro";
        this.id = item.ID;
        this.nome = item.NOME;
        this.provedorGrupo.getPorProduto(item.ID).subscribe(function (ret) {
            _this.gruposSelecionados = [].map.call(ret, function (x) {
                return x.ID;
            });
        });
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/produto/produto.html"*/'<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PRODUTOS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="segmento" >\n      <ion-list *ngSwitchCase="\'lista\'" >\n          <button ion-button value="cadastro" (click)="segmento=\'cadastro\'">Cadastro</button>\n          <ion-item *ngFor="let item of dados" >\n            {{item.NOME}}<button ion-button item-end (click)="editar(item)">Editar</button>\n          </ion-item>\n      </ion-list>\n   \n    <ion-card *ngSwitchCase="\'cadastro\'" >\n        <button ion-button value="lista" (click)="segmento=\'lista\'">Lista</button>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-label color="primary" floating>PRODUTO:</ion-label>\n                    <ion-input type="text" color="primary" required="true" [(ngModel)]="nome"></ion-input>\n                  </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                  <ion-item>\n                    <ion-label color="primary" floating>GRUPOS:</ion-label>\n                    <ion-select [(ngModel)]="gruposSelecionados"  multiple="true">\n                      <ion-option *ngFor="let item of grupos" value={{item.ID}}>\n                        {{item.NOME}}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        \n        <ion-item>\n            <button ion-button small (click)="salvar()">Salvar</button>\n        </ion-item>\n      \n\n    </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/produto/produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_produto_produto__["a" /* ProdutoProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_grupo_grupo__["a" /* GrupoProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(199);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutoProvider = /** @class */ (function (_super) {
    __extends(ProdutoProvider, _super);
    function ProdutoProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.PATH = _this.HOST_WS + "/produtos/";
        return _this;
    }
    /**
     * Retorna uma observable
     */
    ProdutoProvider.prototype.getTodos = function () {
        return this.http.get(this.PATH + "read.php?token=" + this.TOKEN_WS);
    };
    ProdutoProvider.prototype.get = function (key) {
        return this.http.get(this.PATH + "read.php&id=" + key + "&token=" + this.TOKEN_WS);
    };
    /**
     * Retorna uma promisse
     */
    ProdutoProvider.prototype.getPorGrupo = function (grupo) {
        return this.http.get(this.PATH + "read.php?g=" + grupo + "&token=" + this.TOKEN_WS);
    };
    ProdutoProvider.prototype.salvar = function (item) {
        if (item.ID) {
            return this.http.put(this.PATH + "update.php?token=" + this.TOKEN_WS, JSON.stringify(item));
        }
        else {
            return this.http.post(this.PATH + "create.php?token=" + this.TOKEN_WS, JSON.stringify(item));
        }
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]));

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObraPage = /** @class */ (function () {
    function ObraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segmento = "lista";
    }
    ObraPage.prototype.ionViewDidLoad = function () {
    };
    ObraPage.prototype.ver = function (tag) {
        this.segmento = tag;
    };
    ObraPage.prototype.salvar = function () {
    };
    ObraPage.prototype.editar = function (item) {
        this.segmento = "cadastro";
        this.nome = item.nome;
        this.descricao = item.descricao;
        this.id = item.id;
    };
    ObraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-obra',template:/*ion-inline-start:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/obra/obra.html"*/'<!--\n  Generated template for the ObraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>obra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="segmento" >\n    <ion-list *ngSwitchCase="\'lista\'" >\n        <button ion-button value="cadastro" (click)="ver(\'cadastro\')">Cadastro</button>\n        <ion-item *ngFor="let item of dados" >\n          <ion-col col-5>\n              {{item.NOME}}\n          </ion-col>\n          <ion-col col-5>\n            {{item.DESCRICAO}}\n          </ion-col>\n          <ion-col col-2>\n            <button ion-button item-end (click)="editar(item)">Editar</button>\n          </ion-col>\n          \n        </ion-item>\n    </ion-list>\n \n    <ion-card *ngSwitchCase="\'cadastro\'" >\n        <button ion-button value="lista" (click)="ver(\'lista\')" >Lista</button>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>NOME</ion-label>\n            <ion-input type="text" color="primary" [(ngModel)]="nome"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>DESCRIÇÃO</ion-label>\n            <ion-input type="text" color="primary" title="Endereço,Localização,etc"\n              [(ngModel)]="descricao"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-item>\n            <button ion-button small (click)="salvar()">Salvar</button>\n        </ion-item>\n    </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/pages/obra/obra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ObraPage);
    return ObraPage;
}());

//# sourceMappingURL=obra.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_grupo_grupo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_grupo_grupo__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_produto_produto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_lancamento_lancamento__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lancamento_lancamento__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_obra_obra__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_grupo_grupo__["a" /* GrupoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lancamento_lancamento__["a" /* LancamentoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_obra_obra__["a" /* ObraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_grupo_grupo__["a" /* GrupoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lancamento_lancamento__["a" /* LancamentoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_obra_obra__["a" /* ObraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_grupo_grupo__["a" /* GrupoProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_produto_produto__["a" /* ProdutoProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_lancamento_lancamento__["a" /* LancamentoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lancamento_lancamento__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_grupo_grupo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_produto_produto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_obra_obra__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_grupo_grupo__["a" /* GrupoPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'GRUPO', component: __WEBPACK_IMPORTED_MODULE_5__pages_grupo_grupo__["a" /* GrupoPage */] },
            { title: 'PRODUTO', component: __WEBPACK_IMPORTED_MODULE_6__pages_produto_produto__["a" /* ProdutoPage */] },
            { title: 'OBRA', component: __WEBPACK_IMPORTED_MODULE_7__pages_obra_obra__["a" /* ObraPage */] },
            { title: 'LANÇAMENTOS', component: __WEBPACK_IMPORTED_MODULE_0__pages_lancamento_lancamento__["a" /* LancamentoPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/junior/projetos/Projetos Esporaticos/ionic/mcrconstrucoes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the LancamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LancamentoProvider = /** @class */ (function () {
    function LancamentoProvider() {
    }
    LancamentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LancamentoProvider);
    return LancamentoProvider;
}());

//# sourceMappingURL=lancamento.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map