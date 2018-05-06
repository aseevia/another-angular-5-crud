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

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <div class=\"container justify-content-center justify-content-sm-start\">\n\n    <div class=\"d-sm-flex align-items-sm-center\">\n        <a class=\"navbar-brand\" href=\"/\">\n          <img alt=\"Angular Logo\" width=\"40px\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> Angular 5 CRUD\n        </a>\n      <ul class=\"navbar-nav justify-content-center justify-content-sm-start\">\n        <li class=\"nav-item\">\n          <a routerLink=\"index\" routerLinkActive=\"active\" class=\"nav-link\">List\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"create\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Add</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular 5 CRUD example';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_service__ = __webpack_require__("./src/app/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_routerCfg__ = __webpack_require__("./src/app/config/routerCfg.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__config_routerCfg__["a" /* appRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__customer_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary mt-5 form-container\">\n  <div class=\"panel-heading\">\n    <h3>{{ title }}</h3>\n    <hr>\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"form-group col-sm-6\">\n          <label class=\"\">First Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"fname\" #fname [class.is-invalid]=\"angForm.controls['fname'].invalid && (angForm.controls['fname'].dirty || angForm.controls['fname'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            First Name is required.\n          </div>\n        </div>\n        <div class=\"form-group col-sm-6\">\n          <label class=\"\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"lname\" #lname [class.is-invalid]=\"angForm.controls['lname'].invalid && (angForm.controls['lname'].dirty || angForm.controls['lname'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            Last Name is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8 mb-3\">\n          <label class=\"\">Birthday</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"birthday\" #birthday [class.is-invalid]=\"angForm.controls['birthday'].invalid && (angForm.controls['birthday'].dirty || angForm.controls['birthday'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            Birthday is required.\n          </div>\n        </div>\n\n        <div class=\"col-sm-4 mb-3\">\n          <label for=\"state\">Gender</label>\n          <select class=\"form-control custom-select d-block w-100\" formControlName=\"gender\" #gender>\n            <option value=\"N/A\">Prefer not to say</option>\n            <option value=\"M\">Male</option>\n            <option value=\"F\">Female</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"addCustomer(fname.value, lname.value, birthday.value, gender.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Add</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-container {\n  max-width: 600px;\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("./src/app/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.title = 'Add Customer';
        this.createForm();
    }
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    };
    CreateComponent.prototype.addCustomer = function (fname, lname, birthday, gender) {
        var _this = this;
        this.service.addCustomer(fname, lname, birthday, gender).subscribe(function (res) {
            console.log('Added id# ' + res['_id']);
            _this.router.navigate(['index']);
        }, function (err) {
            console.error(err);
        });
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/create/create.component.html"),
            styles: [__webpack_require__("./src/app/components/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary mt-5 form-container\">\n  <div class=\"panel-heading tac\">\n    <h3>{{ title }}</h3>\n    <hr>\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"form-group col-12 text-muted\">ID: {{ customer._id }}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-sm-6\">\n          <label class=\"\">First Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"fname\" #fname [(ngModel)]=\"customer.name.first\" [class.is-invalid]=\"angForm.controls['fname'].invalid && (angForm.controls['fname'].dirty || angForm.controls['fname'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            First Name is required.\n          </div>\n        </div>\n        <div class=\"form-group col-sm-6\">\n          <label class=\"\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"lname\" #lname [(ngModel)]=\"customer.name.last\" [class.is-invalid]=\"angForm.controls['lname'].invalid && (angForm.controls['lname'].dirty || angForm.controls['lname'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            Last Name is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8 mb-3\">\n          <label class=\"\">Birthday</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"birthday\" #birthday [(ngModel)]=\"customer.birthday\" [class.is-invalid]=\"angForm.controls['birthday'].invalid && (angForm.controls['birthday'].dirty || angForm.controls['birthday'].touched)\"\n          />\n          <div class=\"invalid-feedback\">\n            Birthday is required.\n          </div>\n        </div>\n\n        <div class=\"col-sm-4 mb-3\">\n          <label for=\"state\">Gender</label>\n          <select class=\"form-control custom-select d-block w-100\" formControlName=\"gender\" #gender [(ngModel)]=\"customer.gender\">\n            <option value=\"N/A\">Prefer not to say</option>\n            <option value=\"M\">Male</option>\n            <option value=\"F\">Female</option>\n          </select>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <button (click)=\"updateCustomer(fname.value, lname.value, birthday.value, gender.value)\" [disabled]=\"angForm.pristine || angForm.invalid\"\n          class=\"btn btn-primary\">Update</button>\n        <button (click)=\"deleteCustomer(customer._id)\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-container {\n  max-width: 600px;\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("./src/app/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, service, fb) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.customer = {
            _id: '',
            name: {
                first: '',
                last: ''
            },
            birthday: '',
            gender: '',
            lastContact: '',
            customerLifetimeValue: 0,
        };
        this.title = 'Edit Customer';
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]
        });
    };
    EditComponent.prototype.updateCustomer = function (fname, lname, birthday, gender) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updateCustomer(fname, lname, birthday, gender, params['id'])
                .subscribe(function (res) {
                console.log('Done updating id# ' + res['_id']);
                _this.router.navigate(['index']);
            });
        });
    };
    EditComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.service.deleteCustomer(id).subscribe(function (res) {
            console.log('Deleted id# ' + res['_id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.getCustomer(params['id']).subscribe(function (res) {
                console.log('Fetched id# ' + res['_id']);
                _this.customer = res;
            });
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mt-5 mb-3\">Customer Register</h3>\n<table class=\"table table-sm table-hover\">\n  <thead>\n    <tr>\n      <th>Full name</th>\n      <th>Gender</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let customer of customers\">\n      <td>{{ customer.name.first }} {{ customer.name.last }}\n          <span class=\"d-block small text-muted\">id: {{ customer._id }}</span>\n      </td>\n      <td>{{ customer.gender }}</td>\n      <td>\n        <a [routerLink]=\"['/edit', customer._id]\" class=\"btn\">\n          <i class=\"fa fa-pencil-square-o\"></i>\n        </a>\n        <a (click)=\"deleteCustomer(customer._id)\" class=\"btn\">\n          <i class=\"fa fa-trash-o\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("./src/app/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service) {
        this.http = http;
        this.service = service;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    IndexComponent.prototype.getCustomers = function () {
        var _this = this;
        this.service.getCustomers().subscribe(function (res) {
            console.log('Done fetching customers');
            _this.customers = res;
        });
    };
    IndexComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.service.deleteCustomer(id).subscribe(function (res) {
            console.log('Deleted id# ' + res['_id']);
            _this.getCustomers();
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/components/index/index.component.html"),
            styles: [__webpack_require__("./src/app/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/config/routerCfg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");



var appRoutes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__["a" /* CreateComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__["a" /* IndexComponent */]
    }
];


/***/ }),

/***/ "./src/app/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// http://localhost:4000
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.addCustomer = function (fname, lname, birthday, gender) {
        var uri = '/customers/add';
        var obj = {
            _id: undefined,
            name: {
                first: fname,
                last: lname
            },
            birthday: birthday,
            gender: gender,
            lastContact: '',
            customerLifetimeValue: 0,
        };
        return this.http.post(uri, obj);
    };
    CustomerService.prototype.getCustomers = function () {
        var uri = '/customers';
        return this.http.get(uri);
    };
    CustomerService.prototype.getCustomer = function (id) {
        var uri = '/customers/get/' + id;
        return this.http.get(uri);
    };
    CustomerService.prototype.updateCustomer = function (fname, lname, birthday, gender, id) {
        var uri = '/customers/update/' + id;
        var obj = {
            _id: id,
            name: {
                first: fname,
                last: lname
            },
            birthday: birthday,
            gender: gender,
            lastContact: '',
            customerLifetimeValue: 0,
        };
        return this.http.post(uri, obj);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        var uri = '/customers/delete/' + id;
        return this.http.get(uri);
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map