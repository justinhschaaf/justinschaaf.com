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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");






var routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: 'project',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    },
    {
        path: '**',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div> <!--class=\"theme_dark\"-->\n\n  <jhs-header></jhs-header>\n  \n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer>\n    <jhs-footer></jhs-footer>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  padding: 48pt 0 0 0;\n  min-height: calc(100vh - 96pt); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdXN0aVxcUHJvZ3JhbW1pbmdcXGp1c3RpbnNjaGFhZi5jb21cXGp1c3RpbnNjaGFhZi5jb20vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFtQjtFQUVuQiw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYWluIHtcclxuICAgIHBhZGRpbmc6IDQ4cHQgMCAwIDA7XHJcbiAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL2NvdXBsZS10YWtlcy1zdGlja3ktZm9vdGVyL1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDk2cHQpO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"banner banner_error\">\n  <div class=\"banner_content\">\n  \n      <h1>Sorry, all we found here was a barren desert...</h1>\n    \n      <!--<br>\n    \n      <p>Maybe <a routerLink=\"/home\">go home</a>?</p>-->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/error/error.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner_error {\n  background-image: url(\"/assets/images/404/404_banner.jpg\");\n  height: calc(100vh - 96pt); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3IvQzpcXFVzZXJzXFxqdXN0aVxcUHJvZ3JhbW1pbmdcXGp1c3RpbnNjaGFhZi5jb21cXGp1c3RpbnNjaGFhZi5jb20vc3JjXFxhcHBcXHBhZ2VzXFxlcnJvclxcZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBMEQ7RUFDMUQsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJfZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy80MDQvNDA0X2Jhbm5lci5qcGcnKTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk2cHQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-404',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/pages/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"prefooter\" id=\"prefooter\">\n\n  <h6>Designed by Justin Schaaf | Website Licensed under MIT | Content (c) Justin Schaaf 2019 | 3rd-party logos are trademarks of their respective owners</h6>\n\n</div>\n\n<div class=\"footer\" id=\"footer\">\n\n  <div class=\"footer_content\">\n\n    <div class=\"footer_column\">\n\n      <h1>Projects</h1>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pinetree.dev\">Pinetree</a></p>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://yamltobot.com\">YamlToBot</a></p>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://colors.justinschaaf.com\">Stylesheet</a></p>\n\n    </div>\n\n    <div class=\"footer_column\">\n\n      <h1>Social</h1>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liberapay.com/justinhschaaf/\">Liberapay</a></p>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/justinhschaaf\">GitHub</a></p>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://twitter.com/justinhschaaf\">Twitter</a></p>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.youtube.com/channel/UCNw2pX6yLUuq9J0dYmsn6mA\">YouTube</a></p>\n\n    </div>\n\n    <div class=\"footer_column\">\n\n      <h1>Et Cetera</h1>\n\n      <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/justinhschaaf/justinschaaf.com\">Website Source</a></p>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prefooter {\n  height: 48pt;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  transition: 0.5s;\n  z-index: 1; }\n\n.prefooter:hover {\n  box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2); }\n\n.footer {\n  padding: 16pt;\n  background-color: #111111;\n  color: #ffffff; }\n\n.footer .footer_content {\n    max-width: 720pt;\n    margin: auto;\n    display: flex; }\n\n.footer .footer_content .footer_column {\n      min-width: 240pt;\n      width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vdGVyL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFxqdXN0aW5zY2hhYWYuY29tXFxqdXN0aW5zY2hhYWYuY29tL3NyY1xcYXBwXFxwYWdlc1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcanVzdGluc2NoYWFmLmNvbVxcanVzdGluc2NoYWFmLmNvbS9zcmNcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMENDSG1DO0VESW5DLGdCQ0RrQjtFREVsQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSwyQ0NSMEMsRUFBQTs7QURXOUM7RUFHSSxhQUFhO0VBQ2IseUJDbEJnQjtFRG1CaEIsY0NyQmlCLEVBQUE7O0FEZ0JyQjtJQVNRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYSxFQUFBOztBQVhyQjtNQWNZLGdCQUFnQjtNQUNoQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLnByZWZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDQ4cHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi10aW1lO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByZWZvb3Rlcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWhvdmVyO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuXHJcbiAgICAvL21hcmdpbjogNDhwdCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDE2cHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyaztcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcblxyXG4gICAgLmZvb3Rlcl9jb250ZW50IHtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MjBwdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmZvb3Rlcl9jb2x1bW4ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB0O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG4kY29sb3ItbGlnaHQ6ICNmZmZmZmY7XHJcbiRjb2xvci1tZWRpdW06ICM4ODg4ODg7XHJcbiRjb2xvci1kYXJrOiAjMTExMTExO1xyXG5cclxuJHNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kc2hhZG93LWhvdmVyOiAwcHQgNnB0IDE2cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuJHRyYW5zaXRpb24tdGltZTogMC41cztcclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\" id=\"header\">\n  \n  <div class=\"header_content\">\n\n    <img src=\"https://content.justinschaaf.com/common/logos/js-fullname.svg\" class=\"header_logo\">\n\n    <div class=\"header_item\">\n      <a routerLink=\"/home\"><h3>Home</h3></a>\n    </div>\n\n    <!--There aren't enough projects for a dedicated page-->\n    <!--<div class=\"header_item\">\n      <a routerLink=\"/projects\"><h3>Projects</h3></a>\n    </div>-->\n\n    <div class=\"header_item\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pinetree.dev\"><h3>Pinetree</h3></a>\n    </div>\n\n    <div class=\"header_item\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://yamltobot.com\"><h3>YamlToBot</h3></a>\n    </div>\n\n    <div class=\"header_socialicons\">\n\n      <div class=\"header_socialicon\">\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liberapay.com/justinhschaaf/\"><img src=\"assets/socialicons/liberapay.svg\"></a>\n      </div>\n\n      <div class=\"header_socialicon\">\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/justinhschaaf/\"><img src=\"assets/socialicons/github.svg\"></a>\n      </div>\n\n      <div class=\"header_socialicon\">\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://twitter.com/justinhschaaf/\"><img src=\"assets/socialicons/twitter.svg\"></a>\n      </div>\n\n      <div class=\"header_socialicon\">\n        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.youtube.com/channel/UCNw2pX6yLUuq9J0dYmsn6mA\"><img src=\"assets/socialicons/youtube.svg\"></a>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  min-height: 48pt;\n  width: 100%;\n  position: fixed;\n  flex-wrap: nowrap;\n  background-color: #ffffff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  transition: 0.5s; }\n  .header .header_content {\n    width: 100%;\n    height: 100%;\n    display: flex; }\n  .header .header_content img {\n      max-height: 100%; }\n  .header .header_content .header_logo {\n      height: 48pt; }\n  .header .header_content .header_item {\n      margin: auto;\n      height: 48pt;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center; }\n  .header .header_content .header_item a {\n        text-decoration: none;\n        color: inherit;\n        transition: 0.5s; }\n  .header .header_content .header_item a:hover {\n        text-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2); }\n  .header .header_content .header_socialicons {\n      align-self: end;\n      margin: 0 0 0 0;\n      height: 48pt;\n      display: flex;\n      flex-direction: row;\n      background-color: #111111; }\n  .header .header_content .header_socialicons .header_socialicon {\n        width: 48pt;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        text-align: center;\n        transition: 0.5s; }\n  .header .header_content .header_socialicons .header_socialicon img {\n          margin: 0 auto;\n          width: 24pt; }\n  .header .header_content .header_socialicons .header_socialicon:hover {\n        background-color: rgba(255, 255, 255, 0.2); }\n  .header:hover {\n  box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFxqdXN0aW5zY2hhYWYuY29tXFxqdXN0aW5zY2hhYWYuY29tL3NyY1xcYXBwXFxwYWdlc1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWRlci9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcanVzdGluc2NoYWFmLmNvbVxcanVzdGluc2NoYWFmLmNvbS9zcmNcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUVqQix5QkNSaUI7RURTakIsMENDTG1DO0VETW5DLGdCQ0hrQixFQUFBO0VETnRCO0lBYVEsV0FBVztJQUNYLFlBQVk7SUFFWixhQUFhLEVBQUE7RUFoQnJCO01BbUJZLGdCQUFnQixFQUFBO0VBbkI1QjtNQXVCWSxZQUFZLEVBQUE7RUF2QnhCO01BNEJZLFlBQVk7TUFDWixZQUFZO01BRVosYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7RUFsQzlCO1FBcUNnQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGdCQ2pDTSxFQUFBO0VETnRCO1FBMkNnQiwyQ0N4Q3VCLEVBQUE7RURIdkM7TUFrRFksZUFBZTtNQUNmLGVBQWU7TUFDZixZQUFZO01BRVosYUFBYTtNQUNiLG1CQUFtQjtNQUVuQix5QkN4RFEsRUFBQTtFRERwQjtRQTZEZ0IsV0FBVztRQUNYLFlBQVk7UUFFWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFFbEIsZ0JDL0RNLEVBQUE7RUROdEI7VUF3RW9CLGNBQWM7VUFDZCxXQUFXLEVBQUE7RUF6RS9CO1FBK0VnQiwwQ0FBMEMsRUFBQTtFQVMxRDtFQUNJLDJDQ3JGMEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiA0OHB0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tdGltZTtcclxuXHJcbiAgICAuaGVhZGVyX2NvbnRlbnQge1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyX2xvZ28ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyX2l0ZW0ge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHQ7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyX3NvY2lhbGljb25zIHtcclxuXHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHQ7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcms7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyX3NvY2lhbGljb24ge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tdGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlcl9zb2NpYWxpY29uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmhlYWRlcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWhvdmVyO1xyXG59XHJcbiIsIlxyXG4kY29sb3ItbGlnaHQ6ICNmZmZmZmY7XHJcbiRjb2xvci1tZWRpdW06ICM4ODg4ODg7XHJcbiRjb2xvci1kYXJrOiAjMTExMTExO1xyXG5cclxuJHNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kc2hhZG93LWhvdmVyOiAwcHQgNnB0IDE2cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuJHRyYW5zaXRpb24tdGltZTogMC41cztcclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner banner_home\">\n  <div class=\"banner_content\">\n    <h1><span class=\"banner_home_typed\"></span></h1>\n  </div>\n</div>\n\n<div class=\"content\">\n\n  <h1>A Little About Me...</h1>\n\n  <br>\n\n  <p>\n    My name is Justin Schaaf, and I've spent the last 4 years of my life in front of a computer.\n    I started programming when I was 11 and my elementary school offered a <a href=\"https://code.org\">code.org</a>\n    programming club, in which I learned basic block programming. Ever since, I've loved to code.\n  </p>\n\n  <br>\n\n  <p>\n    I taught myself Java when I was in 6th grade, as I made <a href=\"https://minecraft.net\">Minecraft</a>\n    mods in my free time. In 7th grade, I took a Computer Explorations class, in which I learned\n    how to create projects in <a href=\"https://scratch.mit.edu\">Scratch</a>. I also began attending\n    <a href=\"https://mycodecentral.com\">Code Central</a>, where I properly learned JavaScript and HTML.\n    Also at Code Central, I experimented in <a href=\"https://www.yoyogames.com/\">GameMaker Studio</a>,\n    <a href=\"https://angular.io\">Angular</a> (which this website is built in), and \n    <a href=\"https://ionicframework.com\">Ionic</a>, the latter two I have grown to love.\n  </p>\n\n  <br>\n\n  <p>\n    Now, I'm developing crazier and crazier projects. I've made <a href=\"https://yamltobot.com\">a program\n    that locally runs a chat bot based on a config file</a>, <a href=\"https://colors.justinschaaf.com\">\n    a website exclusively filled with colors</a>, and <a href=\"https://github.com/justinhschaaf?tab=repositories\">\n    more fun projects to come</a>.\n  </p>\n\n  <br>\n\n  <p>\n    As a user, I was always frustrated by the amount of data most services need to collect nowadays; this \n    is why I am working to create high-quality software that does not collect any user data you don't tell \n    it, that does not have intrusive advertising, and that provides the best user experience.\n  </p>\n\n  <br>\n\n  <h1>Current Projects</h1>\n\n  <jhs-projects></jhs-projects>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner_home {\n  background-image: url(\"/assets/images/home/home_banner.jpg\");\n  height: calc(100vh - 48pt); }\n\nh1 span {\n  font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcanVzdGluc2NoYWFmLmNvbVxcanVzdGluc2NoYWFmLmNvbS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBNEQ7RUFDNUQsMEJBQTBCLEVBQUE7O0FBRzlCO0VBRVEsOERBQThELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyX2hvbWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2hvbWVfYmFubmVyLmpwZycpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhwdCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgJ1NlZ29lIFVJIEVtb2ppJywgbW9ub3NwYWNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typed_js_src_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js/src/typed */ "./node_modules/typed.js/src/typed.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var typed = new typed_js_src_typed__WEBPACK_IMPORTED_MODULE_2__["default"](".banner_home_typed", {
            strings: [
                "Java ⬢ Ionic ⬢ Angular <br/> Welcome to justinschaaf.com"
                /*"What, you were expecting something after that?",
                "What else do you want me to put here‽",
                "Oh, also, did you know that this is called the Interrobang? -> ‽",
                "It's a very interesting symbol...",
                "<a href='https://en.wikipedia.org/wiki/Interrobang'>Here's the Wikipedia page for it</a>",
                "Well, while you're here, how was your day?",
                "Good, good, glad to hear! My day is alright...",
                "Hey, did you know that I find HTTP requests very annyoing in JavaScript?",
                "It's just that JS continues reading the program before it actually has the requested value.",
                "I perfer the way you can make HTTP requests in Java, as a BufferedInputStream.",
                "In Java, YOU ACTUALLY GET THE VALUE INSTANTLY. It's rocket science, I know...",
                "The way that I usually get around this problem in JavaScript is just making any function that involves HTTP requests return a promise.",
                "This method is still stupid, in my opinion, but it works, at least...",
                "Mind if I ask: why are you sitting around and reading this?^5000",
                "Yeah, it's fine... I often get distracted and end up reading stuff like this all the time.",
                "It's one way my brain likes to procrastinate.",
                "I have a ton of projects and ideas I could be working on, but my brain doesn't like stress at all...",
                "For example, a book on Python has been sitting on my desk for the past month.",
                "I could be reading that book and learning Python, but my brain perfers to write this comedic series of text instead.",
                "...^5000",
                "How much time have I spent writing these strings and setting up typed.js here?",
                "What is the true meaning of life, the universe, and everything?",
                "How much wood could a wood chuck really chuck if a wood chuck could chuck wood?",
                "If the Big Bang created the universe, then what created the Big Bang?",
                "If the Big Bang created the Big Bang, then what created the Big Bang?",
                "Why does Apple like stealing money from their customers by overpricing their products?",
                "Why would any person, in their right mind, buy <a href='https://www.samsung.com/global/galaxy/galaxy-fold/'>a phone for $1,980</a>?",
                "Why can no company understand I just want something that comfortably fits in my hand? I'm certain others want one too.",
                "What does Microsoft have against Thunderbolt 3?",
                "What does Apple have against USB-A?",
                "Why can't macOS, the first OS with windows, properly manage windows?",
                "When will we get slim Cherry MX Blue switches?",
                "Who approved the Magic Mouse's charging solution?",
                "Did you know that some people still use wired headphones?",
                "Did you know that you can give me money by pressing the \"Donate\" button in the header?",
                "When are we ever going to need to know how to analyze a fictional character in the real world if we aren't becoming a professional writer?",
                "Why does standardized testing exist? ^5000In short: it shouldn't...",
                "Why is it snowing... ^5000in Las Vegas... ^5000in February?",
                "Why is February spelled \"February\"?",
                "How does Siri never get anything I say right?",
                "Why do I have 53 items in this array very few people are going to see?",
                "Why haven't I committed this and gone to bed yet?",
                "Why am I still doing this at 10 PM?",
                "The next string will literally be a space.",
                " ",
                "I'm impressed that you sat through all those messages. Congratulations.",
                "If you read through the source code to see these instead of waiting the 10+ minutes it would have actually taken you to see all the messages, you know who you are...",
                "When I tested this, it took 10 minutes. It'll probably be 20 by the time I'm done.",
                "Back to the beginning now, bye!"*/
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: true,
            cursorChar: "|",
            loop: false
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project_container\">\n\n  <div class=\"card\">\n\n    <div class=\"card-start\">\n\n      <h2>YamlToBot</h2>\n\n      <div class=\"project_img\">\n        <img src=\"https://content.yamltobot.com/common/logos/logo.svg\">\n      </div>\n\n    </div>\n\n    <div class=\"card-content\">\n\n      <p>\n        YamlToBot is an application that allows you to quickly and easily\n        develop self-hosted chatbots for Discord and Twitch, with support\n        for more platforms coming in the near future. With YamlToBot, all\n        it takes is a few simple steps to deploy your own chat bot.\n      </p>\n\n    </div>\n\n    <br>\n\n    <div class=\"card-end\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://yamltobot.com\"><h4>I ❤️ YAML & Chat Bots!</h4></a>\n    </div>\n\n  </div>\n\n  <!--<div class=\"card\">\n\n    <h2>Pinetree Mail</h2>\n\n    <div class=\"project_img\">\n      <img src=\"https://content.justinschaaf.com/pinetree/logos/pt-mail.svg\">\n    </div>\n\n    <p>\n      Pinetree Mail is an indev email app designed to provide\n      a consistant user experience between mobile and desktop operating\n      systems. Not only can you check emails from all of your accounts\n      in one place, but it is also designed with customization in mind.\n    </p>\n\n    <br>\n    \n    <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/PinetreeDev/PinetreeMail\"><h4>Emails sound fun!</h4></a>\n\n  </div>-->\n\n  <div class=\"card\">\n\n    <div class=\"card-start\">\n\n      <h2>Stylesheet</h2>\n  \n      <div class=\"project_img\">\n        <img src=\"https://content.justinschaaf.com/common/logos/js-stylesheet.svg\">\n      </div>\n\n    </div>\n    \n    <div class=\"card-content\">\n\n      <p>\n        This is a place where I've compiled a collection of creative\n        colors in 10 different shades. It also includes colors from\n        some of my other current and past projects. It has now grown\n        to include 300 individual colors and has a swatch generator\n        for your color needs.\n      </p>\n\n    </div>\n\n    <br>\n    \n    <div class=\"card-end\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://colors.justinschaaf.com\"><h4>COLORS!</h4></a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project_container {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 16pt 0;\n  max-width: 720pt;\n  margin: auto; }\n  .project_container .card .project_img {\n    margin: auto;\n    padding: 5pt;\n    height: 180pt;\n    display: flex;\n    justify-content: center; }\n  .project_container .card img {\n    max-height: 180pt;\n    max-width: 180pt;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxqdXN0aVxcUHJvZ3JhbW1pbmdcXGp1c3RpbnNjaGFhZi5jb21cXGp1c3RpbnNjaGFhZi5jb20vc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBTmhCO0lBZ0JZLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtFQXBCbkM7SUF5QlksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0X2NvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDE2cHQgMDtcclxuICAgIG1heC13aWR0aDogNzIwcHQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgLmNhcmQge1xyXG5cclxuICAgICAgICAvL21hcmdpbjogNzVwdCBhdXRvIDA7IC8vIFRoaXMgd2FzIGZvciB0aGUgc3RhbmRhbG9uZSBwcm9qZWN0cyBwYWdlLCBidXQgaXQgY2FuJ3QgYmUgZGlzYWJsZWQgb24gdGhlIGhvbWUgcGFnZSB0aHJvdWdoIHNjc3NcclxuXHJcbiAgICAgICAgLy9oZWlnaHQ6IDQwMHB0OyAvLyBBcyBsb25nIGFzIHRoZSBwYXJhZ3JhcGgncyBzaXplIGlzIHRoZSBzYW1lLCB0aGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnlcclxuXHJcbiAgICAgICAgLnByb2plY3RfaW1nIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTgwcHQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTgwcHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jhs-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\justinschaaf.com\justinschaaf.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map