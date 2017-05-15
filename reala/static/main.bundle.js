webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let lead of leadsData\">\n  <lead [leadData]=\"lead\"></lead>\n</div>\n<login (toggleLeads)=\"toggleLeads($event)\"></login>\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"lead-card card\">\n  <div class=\"row\">\n    <i class=\"material-icons col s2\">home</i>\n    <div class=\"col s10 slim\">\n      <div>\n        <span class=\"truncate\">{{first_name}} {{last_name}}</span>\n      </div>\n      <div>\n        <span class=\"truncate\">{{formatted_address}}</span>\n      </div>\n      <br>\n      <div class=\"slim\" *ngFor=\"let event of events\">\n        <div class=\"chip truncate tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"I am tooltip\">\n          <img src=\"{{get_icon_url(event)}}\" alt=\"Event\">\n          <b>({{get_occurred(event)}}):</b>&nbsp; {{get_type(event)}} &nbsp;\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"row section\">\n    <i class=\"material-icons col s3 center\" (click)=\"open_modal()\">filter_drama</i>\n    <i class=\"material-icons col s3 center\">perm_contact_calendar</i>\n    <i class=\"material-icons col s3 center\">compare_arrows</i>\n    <i class=\"material-icons col s3 center\">announcement</i>\n  </div>\n</div>\n\n<!-- Modal Structure -->\n<div id='modal_{{id}}' class=\"modal\">\n  <a class=\"col s3 center modal-action modal-close waves-effect waves-green btn-flat\"><i class=\"material-icons\">done</i></a>\n  <ul class=\"modal-content slim\" style=\"padding-top: 0;\">\n    <blockquote>\n      <span class=\"truncate\">{{first_name}} {{last_name}}</span>\n      <span class=\"truncate\">{{email_address}} </span>\n      <span class=\"truncate\">{{phone_number}} </span>\n      <span class=\"truncate\">{{formatted_address}} </span>\n    </blockquote>\n\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"input-field row\">\n          <div class=\"col s6 m2\">\n            <input [checked]=\"select_claimed\" (change)=\"select_claimed = !select_claimed\" type=\"checkbox\" id=\"select-claimed-{{id}}\"/>\n            <label for=\"select-claimed-{{id}}\">Claimed</label>\n          </div>\n          <div class=\"col s6 m2\">\n            <input [checked]=\"select_called\" (change)=\"select_called = !select_called\" type=\"checkbox\" id=\"select-called-{{id}}\" checked/>\n            <label for=\"select-called-{{id}}\">Called</label>\n          </div>\n          <div class=\"col s6 m2\">\n            <input [checked]=\"select_mailed\" (change)=\"select_mailed = !select_mailed\" type=\"checkbox\" id=\"select-mailed-{{id}}\"/>\n            <label for=\"select-mailed-{{id}}\">Mailed</label>\n          </div>\n          <div class=\"col s6 m2\">\n            <input [checked]=\"select_social\" (change)=\"select_social = !select_social\" type=\"checkbox\" id=\"select-social-{{id}}\"/>\n            <label for=\"select-social-{{id}}\">Social</label>\n          </div>\n          <div class=\"col s6 m2\">\n            <input [checked]=\"select_other\" (change)=\"select_other = !select_other\" type=\"checkbox\" id=\"select-other-{{id}}\"/>\n            <label for=\"select-other-{{id}}\">Other</label>\n          </div>\n        </div>\n\n        <div class=\"input-field\" (keydown)=\"keyFunction($event)\">\n          <input [(ngModel)]=\"notes\" placeholder=\"Notes...\" id=\"notes_{{id}}\" type=\"text\" class=\"validate\">\n          <label for=\"notes_{{id}}\">Notes:</label>\n        </div>\n\n      </div>\n    </div>\n\n\n    <br>\n\n    <div *ngFor=\"let event of events\">\n      <div class=\"chip truncate tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"I am tooltip\">\n        <img src=\"{{get_icon_url(event)}}\" alt=\"Event\">\n        <b>({{get_occurred(event)}}):</b>&nbsp; {{get_type(event)}} &nbsp;\n      </div>\n\n      <div class=\"row slim\" style=\"padding-left: 12px;\" >\n        <div *ngFor=\"let tag of get_tags(event)\">\n          <div class=\"chip col s2\" style=\"width: unset;\">{{tag}}</div>\n        </div>\n      </div>\n      <blockquote style=\"margin-top: 0; padding-left: 12px;\">\n        <span>{{get_notes(event)}}</span>\n      </blockquote>\n      <div class=\"divider\"></div>\n      <br>\n    </div>\n\n  </ul>\n</div>\n\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" deactivate>\n  <div class=\"card-content row\">\n\n    <div id=\"login_form\" class=\"col s12 center\">\n      <div class=\"input-field\">\n        <input [(ngModel)]=\"username\" id=\"username\" name=\"username\" type=\"text\" class=\"validate\">\n        <label for=\"username\">Username</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input [(ngModel)]=\"password\" id=\"password\" name=\"password\" type=\"password\" class=\"validate\">\n        <label for=\"password\">Password</label>\n      </div>\n\n      <a (click)=\"login()\" class=\"waves-effect waves-light btn\" id=\"submit_button\">login</a>\n    </div>\n\n    <div id=\"logout\" class=\"col s12 center\">\n      <a (click)=\"logout()\" class=\"waves-effect waves-light btn\" id=\"logout_button\">logout</a>\n    </div>\n\n    <div class=\"progress col s12 center\" id=\"login_loader\" style=\"display: none;\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeadService = (function () {
    function LeadService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.setToken = function (token) {
            this.token = token;
            this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.headers.append('Authorization', 'Bearer ' + token);
        };
        var url = window.location.href;
        if (url[url.length - 6] == ':') {
            url = "http://localhost:8000/";
        }
        this.apiURL = url + 'api';
    }
    LeadService.prototype.getToken = function () {
        return this.token;
    };
    LeadService.prototype.getLeads = function (filter) {
        console.log(this.token);
        console.log("Requesting Leads...");
        if (filter == '?') {
            filter = '';
        }
        return this.http.get(this.apiURL + '/leads/' + filter, {
            headers: this.headers,
        })
            .map(function (response) { return response.json(); });
    };
    LeadService.prototype.getLead = function (id) {
        console.log(this.token);
        return this.http.get(this.apiURL + '/owners/' + id + '/', {
            headers: this.headers,
        })
            .map(function (response) { return response.json(); });
    };
    LeadService.prototype.getEvents = function (owner_id) {
        return this.http.get(this.apiURL + '/events/?owner=' + owner_id, {
            headers: this.headers,
        })
            .map(function (response) { return response.json(); });
    };
    LeadService.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    LeadService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    LeadService.prototype.setEvent = function (data) {
        var _headers = this.headers;
        _headers.set('Content-Type', 'application/json');
        return this.http.post(this.apiURL + '/events/', data, {
            headers: this.headers,
            withCredentials: true,
        })
            .map(function (response) { return response.json(); });
    };
    return LeadService;
}());
LeadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LeadService);

var _a;
//# sourceMappingURL=lead.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lead_lead_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(loginService, leadService) {
        this.loginService = loginService;
        this.leadService = leadService;
        this.toggleLeads = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.username = '';
        this.password = '';
    }
    Login.prototype.setToken = function (data) {
        console.log("Setting Token...");
        this.token = data['access_token'];
        localStorage.setItem('current_token', JSON.stringify({ token: this.token }));
        this.leadService.setToken(data['access_token']);
        this.toggleLeads.emit(data['access_token']);
        return this.token;
    };
    Login.prototype.delToken = function () {
        this.token = null;
        localStorage.removeItem('current_token');
        this.leadService.setToken(null);
        return this.token;
    };
    Login.prototype.toggleVisibility = function () {
        $('#login_form').css('display', 'none');
    };
    Login.prototype.deactivateForm = function () {
        $('#submit_button').addClass('disabled');
        $('#username').prop('disabled', true);
        $('#password').prop('disabled', true);
        $('#login_loader').css('display', 'block');
    };
    Login.prototype.activateForm = function () {
        $('#submit_button').removeClass('disabled');
        $('#username').prop('disabled', false);
        $('#password').prop('disabled', false);
        $('#login_loader').css('display', 'none');
    };
    Login.prototype.getToken = function () {
        var _this = this;
        var that = this;
        this.deactivateForm();
        this.loginService.login(this.username, this.password)
            .catch(function (err) {
            _this.activateForm();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return _this.setToken(data); }, function (err) { return function () {
            this.activateForm();
            console.error(err);
        }; }, function () {
            //that.toggleLeads.emit('on');
        });
    };
    Login.prototype.loseToken = function () {
        this.loginService.logout(this.token)
            .catch(function (err) {
            console.log("Error trying to revoke token on server.");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return data; }, function (err) { return function () {
            console.error(err);
        }; });
    };
    Login.prototype.login = function () {
        console.log("Logging in...");
        this.getToken();
    };
    Login.prototype.logout = function () {
        console.log("Logging out...");
        this.loseToken();
        this.delToken();
        console.log("Removing leads...");
        this.toggleLeads.emit(null);
        this.toggleVisibility();
    };
    return Login;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], Login.prototype, "toggleLeads", void 0);
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'login',
        template: __webpack_require__(143),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__lead_lead_service__["a" /* LeadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__lead_lead_service__["a" /* LeadService */]) === "function" && _c || Object])
], Login);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var url = window.location.href;
        if (url[url.length - 6] == ':') {
            url = "http://localhost:8000/";
        }
        this.url = url;
    }
    LoginService.prototype.login = function (username, password) {
        var data = {
            username: username,
            password: password,
            grant_type: 'password',
            client_id: 'ZvKaxqhmyG4HopZGo14YKlC9SXj8zW852GJyQmRY'
        };
        return this.http.post(this.url + 'o/token/', JSON.stringify(data), { headers: this.headers });
    };
    LoginService.prototype.logout = function (token) {
        var data = {
            token: token,
            client_id: 'ZvKaxqhmyG4HopZGo14YKlC9SXj8zW852GJyQmRY'
        };
        return this.http.post(this.url + 'o/revoke_token/', JSON.stringify(data), { headers: this.headers });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lead_lead_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lead_lead_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__lead_lead_component__["a" /* Lead */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* Login */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__lead_lead_service__["a" /* LeadService */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_lead_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(leadService) {
        this.leadService = leadService;
        // Lead Container
        this.leadsData = [];
        this.filters = '?';
        this.login;
    }
    AppComponent.prototype.toggleLeads = function (token) {
        if (token != null) {
            this.getLeadsOnInit(token);
        }
        else {
            this.leadsData = [];
        }
    };
    AppComponent.prototype.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results != null) {
            return results[1] || 0;
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.getLeadsOnInit = function (token) {
        var _this = this;
        console.log("Getting Leads...");
        this.leadService.setToken(token);
        this.leadService.getLeads(this.filters).subscribe(function (data) { return _this.populateLeads(data.results); }, function (err) { return console.error(err); });
        console.log(this.login.getToken());
    };
    AppComponent.prototype.getLeads = function () {
        var _this = this;
        console.log("Getting Leads...");
        this.leadService.getLeads(this.filters).subscribe(function (data) { return _this.populateLeads(data.results); }, function (err) { return console.error(err); });
    };
    AppComponent.prototype.populateLeads = function (leads_data) {
        for (var i = 0; i < leads_data.length; ++i) {
            this.leadsData.push(leads_data[i]);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var currentToken = JSON.parse(localStorage.getItem('current_token'));
        if (this.urlParam('postal_code') != null) {
            this.filters += 'postal_code=' + this.urlParam('postal_code');
        }
        if (currentToken != null) {
            this.login.toggleVisibility();
            this.getLeadsOnInit(currentToken['token']);
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* Login */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* Login */]) === "function" && _a || Object)
], AppComponent.prototype, "login", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__lead_lead_service__["a" /* LeadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lead_lead_service__["a" /* LeadService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lead; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Lead = (function () {
    function Lead(leadService) {
        this.leadService = leadService;
        this.leadData = [];
        this.first_name = '';
        this.last_name = '';
        this.email_address = '';
        this.phone_number = '';
        this.select_claimed = false;
        this.select_called = false;
        this.select_mailed = false;
        this.select_social = false;
        this.select_other = false;
        this.notes = '';
        this.formatted_address = '';
        this.events = [];
        /*
         Event Stuff vvv
         */
        this.icon_urls = [
            'http://icons.iconarchive.com/icons/jeanette-foshee/simpsons-03/32/Townspeople-Hans-Moleman-icon.png',
            'http://icons.iconarchive.com/icons/jeanette-foshee/simpsons-05/32/Homertopia-Cool-Homer-icon.png',
            'http://icons.iconarchive.com/icons/jeanette-foshee/simpsons-04/32/Guest-Stars-Spinal-Tap-Rock-star-Bart-icon.png',
            'http://icons.iconarchive.com/icons/jeanette-foshee/simpsons-06/32/Homertopia-Homers-Woohoo-icon.png',
            'http://icons.iconarchive.com/icons/jeanette-foshee/simpsons-08/32/Marge-O-Rama-Marge-in-curlers-icon.png',
        ];
    }
    Lead.prototype.getLead = function () {
        var _this = this;
        this.leadService.getLead(this.id).subscribe(function (data) { return _this.consume_detail_json(data); }, function (err) { return console.error(err); }, function () { return _this.getEvents(); });
    };
    Lead.prototype.getEvents = function () {
        var _this = this;
        var i;
        this.leadService.getEvents(this.id).subscribe(function (data) {
            for (i = 0; i < data['results'].length; i++) {
                _this.addEvent(data['results'][i]);
            }
        }, function (err) { return console.error(err); });
    };
    Lead.prototype.open_modal = function () {
        // TODO: Fix loading time
        $('#modal_' + this.id).modal('open');
        this.getLead();
    };
    Lead.prototype.ngOnInit = function () {
        this.consume_json(this.leadData);
    };
    Lead.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            ready: function (modal, trigger) {
            }
        });
        $('.tooltipped').tooltip();
    };
    Lead.prototype.consume_json = function (d) {
        console.log(d);
        this.id = d['id'];
        this.first_name = d['first_name'];
        this.last_name = d['last_name'];
        this.formatted_address = d['home']['formatted_address'];
        for (var i = 0; i < d['events'].length; i++) {
            this.events.push(d['events'][i]);
        }
    };
    Lead.prototype.consume_detail_json = function (d) {
        this.id = d['id'];
        this.first_name = d['first_name'];
        this.last_name = d['last_name'];
        this.email_address = d['email_address'];
        this.phone_number = d['phone_number'];
        this.events = [];
        for (var i = 0; i < d['events'].length; i++) {
            this.events.push(d['events'][i]);
        }
    };
    Lead.prototype.get_type = function (event) {
        return event['type'];
    };
    Lead.prototype.get_notes = function (event) {
        return event['notes'];
    };
    Lead.prototype.get_tags = function (event) {
        var tag_list = [];
        if (event['claimed']) {
            tag_list.push('Claimed');
        }
        if (event['called']) {
            tag_list.push('Called');
        }
        if (event['mailed']) {
            tag_list.push('Mailed');
        }
        if (event['social']) {
            tag_list.push('Social');
        }
        if (event['other']) {
            tag_list.push('Other');
        }
        return tag_list;
    };
    Lead.prototype.get_occurred = function (event) {
        var date = new Date(event['occurred']);
        var now = new Date();
        // If different month or year
        if (now.getMonth() != date.getMonth() || now.getFullYear() != date.getFullYear()) {
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
        // Same month/year, different day
        if (now.getDate() - date.getDate() > 0) {
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
        var time_sig = ' AM';
        var hour = date.getHours();
        if (hour > 12) {
            hour = hour % 12;
            time_sig = ' PM';
        }
        var padding = '';
        if (('' + date.getMinutes()).length == 1) {
            padding = '0';
        }
        return hour + ':' + date.getMinutes() + padding + time_sig;
    };
    Lead.prototype.get_icon_url = function (event) {
        if (event.icon_url == null) {
            event.icon_url = this.icon_urls[Math.floor(Math.random() * this.icon_urls.length)];
        }
        return event.icon_url;
    };
    Lead.prototype.addEvent = function (event) {
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i]['id'] == event['id']) {
                console.log("Lead Already Present");
                console.log(event);
                this.events[i] = event;
                return event;
            }
        }
        this.events.unshift(event);
        return event;
    };
    Lead.prototype.keyFunction = function (event) {
        var _this = this;
        if (event.key == "Enter") {
            if (this.notes == '') {
                return;
            }
            var data = {
                'owner': this.id,
                'notes': this.notes,
                "claimed": this.select_claimed,
                "called": this.select_called,
                "mailed": this.select_mailed,
                "social": this.select_social,
                "other": this.select_other
            };
            console.log("DATA:", data);
            this.leadService.setEvent(data).subscribe(function (data) { return _this.addEvent(data); }, function (err) { return console.error(err); });
        }
    };
    return Lead;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Array)
], Lead.prototype, "leadData", void 0);
Lead = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'lead',
        template: __webpack_require__(142),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */]) === "function" && _a || Object])
], Lead);

var _a;
//# sourceMappingURL=lead.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[168]);
//# sourceMappingURL=main.bundle.js.map