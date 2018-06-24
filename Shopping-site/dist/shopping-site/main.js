(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'log-in', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'deparment/:category', component: _department_department_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentComponent"] },
    { path: 'deparment/:category/:product-type', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'products/detail/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 200%;\r\n}\r\n\r\n#wrapper {\r\n  width: 1250px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.top-bar {\r\n\ttext-align: right;\r\n}\r\n\r\n.top-menu {\r\n\tfont-size: 20px;\r\n\tpadding: 3px 3px;\r\n\tborder: none;\r\n}\r\n\r\n.title {\r\n\ttext-align: center;\t\r\n\tfont-size: 50px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n}\r\n\r\n.title a {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-bar {\r\n\tmargin-top: 60px;\r\n\tmargin-bottom: 80px;\r\n\tmargin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 20px;\r\n  width: 800px;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\nli {\r\n\tdisplay: inline;\r\n\tfont-size: 25px;\r\n\tpadding: 10px 16px;\r\n\tborder-left: 0.1px solid #D3D3D3;\r\n\tcursor: pointer;\r\n}\r\n\r\nli:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.footer {\r\n\twidth: 1350px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.column {\r\n  width: 200px;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div id=\"wrapper\">\r\n\r\n  <flash-messages></flash-messages>\r\n\r\n  <ul class=\"top-bar\" *ngIf=\"productService.productsCheckOut\">\r\n      <li *ngIf=\"!userService.loggedIn\" class=\"top-menu\" routerLink='/log-in'> Log in </li>\r\n      <li *ngIf=\"userService.loggedIn\" class=\"top-menu\" (click)=\"logOut()\"> Log out </li>\r\n    <span> <li class=\"top-menu\" routerLink=\"./cart\"> <i class=\"fa fa-shopping-cart\"></i> Shopping Bag ({{productService.productsCheckOut.length}}) </li> </span>\r\n  </ul>\r\n\r\n  <div class=\"title\" > <a routerLink=\"/home\"> Online Shopping Store </a> </div>\r\n\r\n  <ul class=\"menu-bar\">\r\n    <li routerLink=\"/deparment/women\"> Women </li>\r\n    <li routerLink=\"/deparment/men\"> Men </li> \r\n    <li (click)=\"display()\"> Girls </li>\r\n    <li (click)=\"display()\"> Boys </li>\r\n    <li (click)=\"display()\"> Baby </li>\r\n    <li (click)=\"display()\"> Sale </li>\r\n  </ul>\r\n\r\n  <hr><br>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <hr> \r\n\r\n  <div class=\"footer\">\r\n    <div class=\"column\">\r\n      <h3>Store information</h3>\r\n      <p>Created for educational purposes by Antonio Lok</p> </div>\r\n    <div class=\"column\">\r\n      <h3>About us</h3>\r\n      <p>Created for educational purposes by Antonio Lok</p> </div>\r\n    <div class=\"column\">\r\n      <h3>Help</h3>\r\n      <p>Created for educational purposes by Antonio Lok</p> </div>\r\n    <div class=\"column\">\r\n      <h3>Follow us</h3>\r\n      <p>Created for educational purposes by Antonio Lok</p> </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(productService, userService, router, flashMessage) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    AppComponent.prototype.getCart = function () {
        var _this = this;
        if (this.userService.loggedIn == true) {
            console.log("LOGGEDIN");
            this.userService.getUserCart(document.cookie.split("username=")[1])
                .subscribe(function (data) {
                _this.productService.productsCheckOut = data.userCart;
                //console.log(this.productService.productsCheckOut);
            });
        }
        else {
            if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != "") {
                this.productService.productsCheckOut = JSON.parse(localStorage.getItem("cart"));
            }
            else {
                this.productService.productsCheckOut = [];
            }
        }
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        //localStorage.clear();
        this.userService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.message, {
                cssClass: 'alert-logged-out',
                timeout: 2000
            });
            _this.userService.loggedIn = false;
            _this.getCart();
        });
        this.router.navigate(['/home']);
    };
    AppComponent.prototype.display = function () {
        alert("We are still adding more products. Please check the Women/Men department in the meantime");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages/module */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__["LogInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n\ttext-align: center;\r\n\tfont-size: 40px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.item-section {\r\n\tborder: solid 1px;\r\n\tmargin: 0 auto;\r\n\twidth: 1000px;\r\n\tdisplay: flex;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.info {\r\n\tmargin-left: 60px;\r\n\tmargin-top: 40px;\r\n\twidth: 520px;\r\n}\r\n\r\n.final {\r\n\ttext-align: right;\r\n}\r\n\r\n.item-section img {\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 10px;\r\n\tmargin-left: 40px;\r\n\twidth: 175px;\r\n\theight: 230px;\r\n}\r\n\r\n.text {\r\n\tfont-size: 30px;\r\n}\r\n\r\n.btn {\r\n\tmargin-top: 60px;\r\n\tmargin-right: 30px;\r\n  background-color: white;\r\n  border: none;\r\n  color: black;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  width: 220px;\r\n  border: solid 0.1px;\r\n}\r\n\r\n.amount {\r\n  background-color: white;\r\n  border: none;\r\n  color: black;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  width: 220px;\r\n  border: solid 0.1px;\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"title\"> Shopping Bag </div>\r\n\r\n<div class=\"items-container\" *ngFor=\"let product of productService.productsCheckOut\"> \r\n  <div class=\"item-section\">\r\n    <img src={{product.img}}>\r\n    <div class=\"info\">\r\n      <div class=\"text\"> {{product.name}} </div>\r\n      <div class=\"text\"> Size: {{product.sizeSelected}} </div>\r\n      <div class=\"small-container\">\r\n        <button class=\"btn\" (click)=\"delete(product)\"><i class=\"fa fa-trash\"></i> </button> \r\n        <select class=\"amount\" (change)=\"selectChangeHandler($event.target.value, product)\" required>\r\n          <option *ngFor=\"let n of amountOption\" [selected]=\"n==product.amount\"> {{n}} </option>\r\n        </select>\r\n\r\n    </div>\r\n    </div>\r\n    <div class=\"text\" style=\"font-weight:bold\"> {{product.price * product.amount}} </div>\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"final\">\r\n  <p> Total Products: {{total}} CAD </p>\r\n  <p> Estimated Shipping Rates: 0 CAD </p>\r\n  <p> TOTAL: {{total}} CAD</p>\r\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(productService, userService) {
        this.productService = productService;
        this.userService = userService;
        this.amountOption = [1, 2, 3, 4, 5, 6, 7];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    CartComponent.prototype.getTotal = function () {
        var totalSoFar = 0;
        for (var _i = 0, _a = this.productService.productsCheckOut; _i < _a.length; _i++) {
            var product = _a[_i];
            totalSoFar = totalSoFar + (product.price * product.amount);
        }
        return totalSoFar;
    };
    CartComponent.prototype.selectChangeHandler = function (value, product) {
        var index = this.productService.productsCheckOut.indexOf(product);
        product.amount = value;
        this.productService.productsCheckOut[index] = product;
        this.total = this.getTotal();
    };
    CartComponent.prototype.delete = function (product) {
        this.productService.productsCheckOut = this.productService.productsCheckOut.filter(function (p) { return !(p._id == product._id && p.sizeSelected == product.sizeSelected); });
        if (this.userService.loggedIn == true) {
            this.userService.updateCart(this.productService.productsCheckOut).subscribe(function (data) { return console.log(data.message); });
        }
        else {
            localStorage.setItem("cart", JSON.stringify(this.productService.productsCheckOut));
        }
        this.total = this.getTotal();
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        if (this.userService.loggedIn == true) {
            this.userService.getUserCart(document.cookie.split("username=")[1])
                .subscribe(function (data) {
                _this.productService.productsCheckOut = data.userCart;
                console.log(_this.productService.productsCheckOut);
                _this.total = _this.getTotal();
            });
        }
        else {
            this.total = this.getTotal();
            if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != "") {
                this.productService.productsCheckOut = JSON.parse(localStorage.getItem("cart"));
            }
            else {
                this.productService.productsCheckOut = [];
            }
        }
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n\twidth: 1200px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.column-menu {\r\n\tmargin-top: 20px;\r\n\twidth: 200px;\r\n\tfloat: left;\r\n}\r\n\r\n.right-section {\r\n\twidth: 900px;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.right-section img{\r\n\twidth: 900px;\r\n\theight: 700px;\r\n}\r\n\r\nli {\r\n\tlist-style-type: none;\r\n\tmargin-bottom: 25px;\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/department/department.component.html":
/*!******************************************************!*\
  !*** ./src/app/department/department.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"column-menu\" *ngIf=\"category=='men'\">\r\n    <ul>\r\n      <li routerLink=\"./t-shirts\"> T-Shirts </li>\r\n      <li routerLink=\"./jeans\"> Jeans </li>\r\n      <li routerLink=\"./hoodies&sweatshirts\"> Hoodies & Sweatshirts </li>\r\n      <li routerLink=\"./shoes\"> Shoes </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"right-section\" *ngIf=\"category=='men'\">\r\n    <img src=\"http://lp2.hm.com/hmgoepprod?set=width[800],quality[80],options[limit]&source=url[http://www2.hm.com/content/dam/Campaign%20Men%20s07/30x/30X-Men-Summer-Shop-Beach-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]\"> \r\n  </div>\r\n\r\n  <div class=\"column-menu\" *ngIf=\"category=='women'\">\r\n    <ul>\r\n      <li routerLink=\"./dresses\"> Dresses </li>\r\n      <li routerLink=\"./jackets&coats\"> Jackets & Coats </li>\r\n      <li routerLink=\"./jeans\"> Jeans </li>\r\n      <li routerLink=\"./pants\"> Pants </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"right-section\" *ngIf=\"category=='women'\">\r\n    <img src=\"https://thumbs.dreamstime.com/b/colorful-collection-women-s-clothes-23554117.jpg\"> \r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(route) {
        this.route = route;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
        });
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-message {\r\n\tbackground-color: lightblue;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n}\r\n\r\n.subheader {\r\n\tfont-size: 25px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tmargin-top : 20px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.section-container {\r\n\twidth: 1200px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.column-img {\r\n\twidth: 1200px;\r\n\tdisplay: flex;\r\n\ttext-align: center;\t\r\n\tflex-flow: row wrap;\r\n}\r\n\r\n.column-img img {\r\n\tmargin-left: 25px;\r\n\tmargin-right: 25px;\r\n  width: 250px;\r\n  height: 400px;\r\n}\r\n\r\n.img-text-bottom {\r\n\tmargin-bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"top-message\">\r\n  Free shipping on all orders!\r\n</div>\r\n\r\n<hr>\r\n<div class=\"subheader\"> New Arrivals </div>\r\n\r\n<h2> Women: </h2>\r\n\r\n<div class=\"section-container\">\r\n  <div class=\"column-img\">\r\n    <div class=\"product\" *ngFor=\"let product of womenProducts\" routerLink=\"/products/detail/{{product._id}}\">\r\n      <img src={{product.img}}>\r\n      <div class=\"img-text\"> {{product.name}} </div>\r\n      <div class=\"img-text-bottom\"> {{product.price}} </div>\r\n    </div>  \r\n  </div>\r\n</div>\r\n\r\n<h2> Men: </h2>\r\n\r\n<div class=\"section-container\">\r\n  <div class=\"column-img\">\r\n    <div class=\"product\" *ngFor=\"let product of menProducts\" routerLink=\"/products/detail/{{product._id}}\">\r\n      <img src={{product.img}}>\r\n      <div class=\"img-text\"> {{product.name}} </div>\r\n      <div class=\"img-text-bottom\"> {{product.price}} </div>\r\n    </div>  \r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService) {
        this.productService = productService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProducts("men");
        this.getProducts("women");
    };
    HomeComponent.prototype.getProducts = function (category) {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            if (category == "men") {
                _this.menProducts = data.data.filter(function (product) { return product.category == category; });
                _this.menProducts = _this.menProducts.slice(_this.menProducts.length - 8);
            }
            else if (category == "women") {
                _this.womenProducts = data.data.filter(function (product) { return product.category == category; });
                _this.womenProducts = _this.womenProducts.slice(_this.womenProducts.length - 8);
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".log-in-container {\r\n\twidth: 800px;\r\n\tdisplay: flex;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tjustify-content: space-evenly;\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.alert {\r\n\tcolor: red;\r\n\tfont-size: 14px;\r\n}\r\n\r\n#alert-success {\r\n\tcolor: green;\r\n}"

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in-container\">\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" >\r\n    <div class=\"form-group\">\r\n      <label for=\"username\"> Username (e-mail): </label>\r\n      <input type=\"email\" class=\"form-control\" id=\"username\" \r\n      [(ngModel)]=\"user.username\" name=\"uname\" required autocomplete=\"username\">\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\"> Password: </label>\r\n      <input type=\"password\" class=\"form-control\" id=\"password\"\r\n      [(ngModel)]=\"user.password\" name=\"pwd\" autocomplete=\"current-password\" required>\r\n    </div>\r\n\r\n    <br>\r\n\r\n     <div [hidden]=\"!incorrect\" class=\"alert alert-danger\"> {{message}} </div>\r\n\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\"> Log in! </button>\r\n\r\n  </form>\r\n\r\n  <div class=\"signup\">\r\n    <p> New customer? </p>\r\n    <button routerLink='/sign-up'> Register here! </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogInComponent = /** @class */ (function () {
    function LogInComponent(userService, productService, router, flashMessage) {
        this.userService = userService;
        this.productService = productService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = { username: "", password: "", productsSelected: [] };
        this.incorrect = false;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    //this.productService.productsCheckOut
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.login(this.user).subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessage.show("You are logged in!", {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
                _this.userService.loggedIn = true;
                _this.productService.productsCheckOut = data.cart;
                localStorage.setItem('currentUser', document.cookie);
                _this.router.navigate(['/home']);
            }
            else {
                _this.incorrect = true;
                _this.message = data.message;
            }
        });
    };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\r\n\ttext-align: center;\r\n\tfont-size: 90px;\r\n\tmargin-bottom: 200px;\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\"> Page not found </div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n\twidth: 1000px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.left-component img {\r\n\twidth: 450px;\r\n\theight: 600px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.right-component {\r\n\twidth: 400px;\r\n}\r\n\r\n.text {\r\n\tmargin-top: 20px;\r\n\tfont-size: 30px;\r\n\tmargin-bottom: 10px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.btn {\r\n\tfont-size: 20px;\r\n\twidth: 350px;\r\n\theight: 40px;\r\n}\r\n\r\n.size {\r\n\tfont-size: 20px;\r\n\twidth: 350px;\r\n\theight: 40px;\t\r\n}\r\n\r\n.pick-size {\r\n\tmargin-top: 150px;\r\n}"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div *ngIf=\"product\" class=\"container\">\r\n  <div class=\"left-component\">\r\n    <img src={{product.img}}>\r\n  </div>\r\n\r\n  <div class=\"right-component\" *ngIf=\"product\">\r\n    <div class=\"text\">  {{product.name}} </div>\r\n    <div class=\"text\"> Only ${{product.price}} </div>\r\n\r\n    <div class=\"pick-size\">\r\n      <select class=\"size\" (change)=\"selectChangeHandler($event.target.value)\" >\r\n        <option disabled=\"true\"> Pick a size </option>\r\n        <option *ngFor=\"let size of product.sizeAvailable.split(',')\"> {{size}} </option>\r\n      </select>\r\n\r\n    <span> <button class=\"btn\" (click)=check(product)> <i class=\"fa fa-shopping-cart\"></i> Add </button> </span>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, userService, location, router, flashMessage) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.location = location;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.productService.getProduct(id)
            .subscribe(function (product) {
            _this.product = product.data;
            console.log(typeof _this.product.sizeAvailable.split(","));
        });
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        this.productService.productsCheckOut.push(product);
        if (this.userService.loggedIn == true) {
            this.userService.updateCart(this.productService.productsCheckOut).subscribe(function (data) { return console.log(data.message); });
        }
        else {
            localStorage.setItem("cart", JSON.stringify(this.productService.productsCheckOut));
        }
        this.flashMessage.show("Product added to the cart!", {
            cssClass: 'cart-success',
            timeout: 2000
        });
        this.router.navigate(["./deparment/" + product.category + "/" + product.type]);
    };
    ProductDetailComponent.prototype.selectChangeHandler = function (value) {
        this.product.sizeSelected = value;
        this.product.amount = 1;
    };
    ProductDetailComponent.prototype.check = function (product) {
        if (this.product.sizeSelected == undefined) {
            alert("Please select a size first");
        }
        else {
            this.addToCart(product);
        }
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.total = 0;
        this.productsUrl = 'api/products'; // URL to web api
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getProduct = function (_id) {
        var url = this.productsUrl + "/" + _id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n\twidth: 1200px;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n}\r\n\r\n.column-menu {\r\n\tmin-width: 200px;\r\n\tfloat: left;\r\n}\r\n\r\n.display-products {\r\n}\r\n\r\n.section {\r\n\twidth: 950px;\r\n\tdisplay: flex;\r\n\ttext-align: center;\t\r\n\t#justify-content: space-around;\r\n\tmargin-left: 50px;\r\n\tmargin-bottom: 30px;\r\n\tflex-flow: row wrap;\r\n}\r\n\r\n.section img {\r\n\tmargin-left: 15px;\r\n\tmargin-right: 15px;\r\n  width: 275px;\r\n  height: 370px;\r\n}\r\n\r\nli {\r\n\tlist-style-type: none;\r\n\tmargin-bottom: 25px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.img-text-bottom{\r\n\tmargin-bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"column-menu\" *ngIf=\"category=='men'\">\r\n    <ul>\r\n      <li routerLink=\"./../t-shirts\"> T-Shirts </li>\r\n      <li routerLink=\"./../jeans\"> Jeans </li>\r\n      <li routerLink=\"./../hoodies&sweatshirts\"> Hoodies & Sweatshirts </li>\r\n      <li routerLink=\"./../shoes\"> Shoes </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"column-menu\" *ngIf=\"category=='women'\">\r\n    <ul>\r\n      <li routerLink=\"./../dresses\"> Dresses </li>\r\n      <li routerLink=\"./../jackets&coats\"> Jackets & Coats </li>\r\n      <li routerLink=\"./../jeans\"> Jeans </li>\r\n      <li routerLink=\"./../pants\"> Pants </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <div class=\"product\" *ngFor=\"let product of products\" routerLink=\"/products/detail/{{product._id}}\">\r\n      <img src={{product.img}}>\r\n      <div class=\"img-text\"> {{product.name}} </div>\r\n      <div class=\"img-text-bottom\"> {{product.price}} </div>\r\n    </div>  \r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.productType = params['product-type'];
            _this.getProducts(_this.category, _this.productType);
        });
    };
    ProductsComponent.prototype.getProducts = function (category, type) {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            return _this.products = data.data.
                filter(function (product) { return product.category == category && product.type == type; });
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-container {\r\n\twidth: 800px;\r\n\tdisplay: flex;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tjustify-content: space-evenly;\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.input{\r\n\theight: 124;\r\n}\r\n\r\n.sign-up-container form {\r\n\tborder-right: none;\r\n\tpadding-right: 0;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.alert {\r\n\tcolor: red;\r\n\tfont-size: 14px;\r\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-up-container\">\r\n  <form (ngSubmit)=\"onSubmit()\" #signupForm=\"ngForm\" >\r\n    <div class=\"form-group\">\r\n      <label for=\"username\"> Email (Username): </label>\r\n      <input type=\"email\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" \r\n      name=\"uname\" autocomplete='email'  required\r\n      pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\">\r\n    </div>\r\n\r\n    <br> <div [hidden]=\"!accountExistAlready\" class=\"alert alert-danger\">This account already exists</div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\"> Password: </label>\r\n      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" \r\n      name=\"pwd\" autocomplete=\"new-password\" required >\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"repassword\"> Confirm Password: </label>\r\n      <input type=\"password\" class=\"form-control\" id=\"repassword\" [(ngModel)]=\"confirmationPassword\" \r\n      name=\"repwd\" autocomplete=\"new-password\" required>\r\n    </div>\r\n    <br> <div [hidden]=\"!passwordConfirmationFailed\" class=\"alert alert-danger\">Password did not match</div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signupForm.form.valid\">\r\n    Submit</button>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { username: "", password: "", productsSelected: [] };
        this.confirmationPassword = "";
        this.passwordConfirmationFailed = false;
        this.accountExistAlready = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.user.password === this.confirmationPassword) {
            this.passwordConfirmationFailed = false;
            this.userService.register(this.user).subscribe(function (data) {
                if (data.success == false) {
                    _this.accountExistAlready = true;
                }
                else {
                    _this.router.navigate(['/log-in']);
                }
            });
        }
        else {
            this.passwordConfirmationFailed = true;
            this.accountExistAlready = false;
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = this.isUserLoggedIn();
    }
    UserService.prototype.register = function (user) {
        return this.http.put('api/sign-up', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.login = function (user) {
        return this.http.put('api/log-in', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.logout = function () {
        return this.http.get('api/log-out').map(function (response) { return response.json(); });
    };
    UserService.prototype.updateCart = function (products) {
        return this.http.patch('api/update-cart', products).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserCart = function (id) {
        return this.http.get("api/user/" + id + "/cart").map(function (response) { return response.json(); });
    };
    UserService.prototype.isUserLoggedIn = function () {
        return (document.cookie.split("username=")[1] != "");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Antonio Lok\Documents\GitHub\test\ShoppingSite\Shopping-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map