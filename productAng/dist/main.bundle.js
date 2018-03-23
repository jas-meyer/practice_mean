webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'products/new', component: new_component_1.NewComponent },
    { path: 'products/edit/:id', component: edit_component_1.EditComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h1> PPM - Project Product Management </h1>\n\n<h3><a [routerLink] = \"['']\">Home</a>\n<a [routerLink] = \"['products']\">Product List</a>\n<a [routerLink] = \"['products/new']\">Product Creation</a>\n</h3>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                products_component_1.ProductsComponent,
                edit_component_1.EditComponent,
                new_component_1.NewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3> Edit this product</h3>\n<h3>Name:</h3>\n<form (submit)=\"update($event)\">\n   <!-- {{author | json}}  -->\n   <h3>Title: <input type =\"text\" [(ngModel)] = \"product.title\" name = \"product.title\"></h3>\n   <h3> Price: <input type =\"text\" [(ngModel)] = \"product.price\" name = \"product.price\"></h3>\n   <h3> Image url: <input type =\"text\" [(ngModel)] = \"product.iurl\" name = \"product.iurl\"></h3>\n\n     <!-- {{author | json}} -->\n   <h3> <input type=\"submit\" value=\"Update\"><button (click) =\"Delete(product._id)\">Delete</button></h3>\n\n   </form>\n<h3> {{errmessage}} </h3>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.product = { title: "", price: "", iurl: "" };
    }
    EditComponent.prototype.ngOnInit = function () {
        this.oneProduct();
    };
    EditComponent.prototype.oneProduct = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        var getOne = this._httpService.editProduct(this.id);
        getOne.subscribe(function (data) {
            console.log("Got the product!", data);
            _this.product = data;
            console.log(_this.product);
        });
    };
    EditComponent.prototype.update = function (event) {
        var _this = this;
        event.preventDefault();
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        console.log(this.product);
        var update = this._httpService.updateProduct(this.id, this.product);
        update.subscribe(function (data) {
            _this.datas = data;
            if ((_this.datas).message == "Error") {
                console.log(_this.datas);
                _this.errmessage = (_this.datas).err.message;
            }
            else {
                console.log("Updating the product", _this.datas);
                _this.product = { title: "", price: "", img: "" };
                _this._router.navigate(['products']);
            }
        });
    };
    EditComponent.prototype.Delete = function (id) {
        var _this = this;
        var deleteOne = this._httpService.deleteProduct(id);
        deleteOne.subscribe(function (data) {
            console.log("Deleting an author!", data);
            _this._router.navigate(['products']);
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_service_1.ProductService,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Home Page</h1>\n\n<h2> Welcome to Site. Look at cool things that we sell. You can edit, create, remove and edit product.</h2>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>Create a new project:</h3>\n<form (submit)=\"Create()\">\n<h3>Title: <input type =\"text\" [(ngModel)] = \"product.title\" name = \"product.title\"></h3>\n<h3> Price: <input type =\"text\" [(ngModel)] = \"product.price\" name = \"product.price\"></h3>\n<h3> Image url: <input type =\"text\" [(ngModel)] = \"product.iurl\" name = \"product.iurl\"></h3>\n\n  <!-- {{author | json}} -->\n<h3> <button [routerLink] = \"['products']\">Cancel</button><input type=\"submit\" value=\"Create\"></h3>\n</form>\n     <h3> {{errmessage}} </h3>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
        this.product = { title: "", price: "", img: "" };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.Create = function () {
        var _this = this;
        console.log(this.product);
        var add = this._httpService.addProduct(this.product);
        add.subscribe(function (data) {
            _this.datas = data;
            if (_this.datas.message == "Error") {
                console.log(_this.datas);
                _this.errmessage = _this.datas.err.message;
            }
            else {
                console.log("Adding a product!", data);
                _this.product = { title: "", price: "", img: "" };
                _this._router.navigate(['products']);
            }
        });
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            product_service_1.ProductService])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get('/product');
    };
    ProductService.prototype.deleteProduct = function (id) {
        console.log("id: ", id);
        return this._http.delete('/product/' + id);
    };
    ProductService.prototype.editProduct = function (id) {
        console.log(id);
        return this._http.get('/product/' + id);
    };
    ProductService.prototype.addProduct = function (newProduct) {
        return this._http.post('/product', newProduct);
    };
    ProductService.prototype.updateProduct = function (id, update) {
        return this._http.put('/product/' + id, update);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/products/products.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper{\nwidth: 1000px;\n}\n.display{\n  height: 400px;\n  width: 420px;\n  display: inline-block;\n  border: solid black;\n\n}\nimg{\n  height: 200px;\n  width: 264px;\n}\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"wrapper\">\n<h1>\n  Products List\n</h1>\n\n  <div *ngFor =\"let product of products\" class = \"display\">\n   <h3>{{product.title}}</h3>\n   <h3>{{product.price}}</h3>\n   <img [src] = \"sanitizer.bypassSecurityTrustUrl(product.iurl)\"/>\n      <h3> <button [routerLink] = \"['edit', product._id]\">Edit</button>\n       <button (click) =\"Delete(product._id)\">Delete</button> </h3>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(_httpService, sanitizer) {
        this._httpService = _httpService;
        this.sanitizer = sanitizer;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.All();
    };
    ProductsComponent.prototype.All = function () {
        var _this = this;
        var getAll = this._httpService.getProducts();
        // this.trustedImg = this.sanitizer.bypassSecurityTrustUrl(this.products.iurl);
        // delete (this.products).iurl;
        // (this.products).iurl = this.trustedImg;
        getAll.subscribe(function (data) {
            console.log("Got the products!", data);
            _this.products = data;
        });
    };
    ProductsComponent.prototype.Delete = function (id) {
        var _this = this;
        var deleteOne = this._httpService.deleteProduct(id);
        deleteOne.subscribe(function (data) {
            console.log("Deleting an author!", data);
            _this.All();
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            template: __webpack_require__("./src/app/products/products.component.html"),
            styles: [__webpack_require__("./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            platform_browser_1.DomSanitizer])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map