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
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/labels/labels.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/modals/modals.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/loaders/loaders.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toasters/toasters.component */ "./src/app/toasters/toasters.component.ts");













var routes = [
    { path: '', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"] },
    { path: 'labels', component: _labels_labels_component__WEBPACK_IMPORTED_MODULE_5__["LabelsComponent"] },
    { path: 'modals', component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
    { path: 'tables', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_9__["ColorsComponent"] },
    { path: 'loaders', component: _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_10__["LoadersComponent"] },
    { path: 'forms', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["FormsComponent"] },
    { path: 'toasters', component: _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_12__["ToastersComponent"] },
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

module.exports = "<div class=\"docs-body\">\n    <div class=\"docs-sidebar\">\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"docs-content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n\n"

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
        this.title = 'docs';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highlight.js/lib/languages/htmlbars */ "./node_modules/highlight.js/lib/languages/htmlbars.js");
/* harmony import */ var highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _pipes_keep_html_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/keep-html.pipe */ "./src/app/pipes/keep-html.pipe.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/modals/modals.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/labels/labels.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/loaders/loaders.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./toasters/toasters.component */ "./src/app/toasters/toasters.component.ts");




























/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
    return [
        { name: 'html', func: highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_10___default.a },
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_9___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7___default.a }
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pipes_keep_html_pipe__WEBPACK_IMPORTED_MODULE_14__["EscapeHtmlPipe"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_16__["TemplateComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_17__["ButtonsComponent"],
                _modals_modals_component__WEBPACK_IMPORTED_MODULE_18__["ModalsComponent"],
                _labels_labels_component__WEBPACK_IMPORTED_MODULE_19__["LabelsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_20__["TypographyComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_21__["OverviewComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_23__["TablesComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_24__["ColorsComponent"],
                _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_25__["LoadersComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_26__["FormsComponent"],
                _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_27__["ToastersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({ languages: hljsLanguages }),
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_12__["SuiModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_13__["Ng2IziToastModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buttons/buttons.component.html":
/*!************************************************!*\
  !*** ./src/app/buttons/buttons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/buttons/buttons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/buttons/buttons.component.ts ***!
  \**********************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.pageTitle = 'Buttons';
        this.sections = [
            {
                expandCode: false,
                title: 'Basic Buttons',
                demoCode: "\n      <button class=\"sb-btn sb-btn-outline-primary sb-btn-normal mr-10\">Basic Button</button>\n      <button class=\"sb-btn sb-btn-outline-secondary sb-btn-normal mr-10\">Secondary</button>\n      <button class=\"sb-btn sb-btn-outline-tertiary sb-btn-normal mr-10\">Tertiary</button>\n      <button class=\"sb-btn sb-btn-outline-info sb-btn-normal mr-10\">Info</button>\n      <button class=\"sb-btn sb-btn-outline-success sb-btn-normal mr-10\">Success</button>\n      <button class=\"sb-btn sb-btn-outline-warning sb-btn-normal mr-10\">Warning</button>\n      <button class=\"sb-btn sb-btn-outline-error sb-btn-normal mr-10\">Error</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-outline-primary sb-btn-normal\">Basic Button</button>\n      <button class=\"sb-btn sb-btn-outline-secondary sb-btn-normal\">Secondary</button>\n      <button class=\"sb-btn sb-btn-outline-tertiary sb-btn-normal\">Tertiary</button>\n      <button class=\"sb-btn sb-btn-outline-info sb-btn-normal\">Info</button>\n      <button class=\"sb-btn sb-btn-outline-success sb-btn-normal\">Success</button>\n      <button class=\"sb-btn sb-btn-outline-warning sb-btn-normal\">Warning</button>\n      <button class=\"sb-btn sb-btn-outline-error sb-btn-normal\">Error</button>\n      "
            },
            {
                expandCode: false,
                title: 'Button Groups',
                demoCode: "\n      <div class=\"btn-group\">\n      <button class=\"sb-btn sb-btn-normal\"><i class=\"plus icon\"></i></button>\n      <button class=\"sb-btn sb-btn-normal active\"><i class=\"plus icon\"></i></button>\n      </div>\n      ",
                copyCode: "\n      <div class=\"btn-group\">\n      <button class=\"sb-btn sb-btn-normal\"><i class=\"plus icon\"></i></button>\n      <button class=\"sb-btn sb-btn-normal active\"><i class=\"plus icon\"></i></button>\n      </div>\n      "
            },
            {
                expandCode: false,
                title: 'Dashed Buttons',
                demoCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-dashed\">Basic Button</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-dashed\">Basic Button</button>\n      "
            },
            {
                expandCode: false,
                title: 'Icon Buttons',
                demoCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn\">right icon button <i class=\"home icon\"></i></button>\n<button class=\"sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn\"><i class=\"home icon\"></i>left icon button </button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn\">right icon button <i class=\"home icon\"></i></button>\n<button class=\"sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn\"><i class=\"home icon\"></i>left icon button </button>\n      "
            },
            {
                expandCode: false,
                title: 'Loading Button',
                demoCode: "\n      <button class=\"sb-btn sb-btn-loading-spinner sb-btn-primary\">\n    <div class=\"loading-spinner\" role=\"status\" aria-hidden=\"true\"></div>\n    Primary loading\n  </button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-loading-spinner sb-btn-primary\">\n    <div class=\"loading-spinner\" role=\"status\" aria-hidden=\"true\"></div>\n    Primary loading\n  </button>\n      "
            },
            {
                expandCode: false,
                title: 'Button States',
                demoCode: "\n      <button class=\"sb-btn sb-btn-disabled sb-btn-normal mr-10\">Primary Disable</button>\n      <button class=\"sb-btn sb-btn-outline-disabled sb-btn-normal\">Basic Button Disable</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-disabled sb-btn-normal\">Primary Disable</button>\n      <button class=\"sb-btn sb-btn-outline-disabled sb-btn-normal\">Basic Button Disable</button>\n      "
            },
            {
                expandCode: false,
                title: 'Colored Buttons',
                demoCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal mr-10\">Primary Button</button>\n      <button class=\"sb-btn sb-btn-secondary sb-btn-normal mr-10\">Secondary</button>\n      <button class=\"sb-btn sb-btn-tertiary sb-btn-normal mr-10\">Tertiary</button>\n      <button class=\"sb-btn sb-btn-warning sb-btn-normal mr-10\">warning</button>\n      <button class=\"sb-btn sb-btn-error sb-btn-normal mr-10\">Error</button>\n      <button class=\"sb-btn sb-btn-info sb-btn-normal mr-10\">Info</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\">Primary Button</button>\n      <button class=\"sb-btn sb-btn-secondary sb-btn-normal\">Secondary</button>\n      <button class=\"sb-btn sb-btn-tertiary sb-btn-normal\">Tertiary</button>\n      <button class=\"sb-btn sb-btn-warning sb-btn-normal\">warning</button>\n      <button class=\"sb-btn sb-btn-error sb-btn-normal\">Error</button>\n      <button class=\"sb-btn sb-btn-info sb-btn-normal\">Info</button>\n      "
            },
            {
                expandCode: false,
                title: 'Button Sizes',
                demoCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-xs\">mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\">normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-sm\">small</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-md\">medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-lg\">large</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-xs\">mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\">normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-sm\">small</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-md\">medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-lg\">large</button>\n      "
            }
        ];
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/buttons/buttons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/colors/colors.component.html":
/*!**********************************************!*\
  !*** ./src/app/colors/colors.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<p>Where appropriate, we enable people to introduce their own color palettes. Our products adapt intelligently and\n  flexibly to cater for the user's preference. We are also committed to complying with AA standard contrast ratios . To\n  accomplish this, you should choose primary, secondary and extended colors that ensure sufficient color contrast\n  between elements. This allows users with low vision to see and use the interface.</p>\n<h4>Web Content Accessibility</h4>\n<h6>Color Contrast Checker</h6>\n<p>Source - <a href=\"https://webaim.org/resources/contrastchecker/\">https://webaim.org/resources/contrastchecker/</a>\n</p>\n<div class=\"img-block\"><img src=\"../../docs/assets/images/colors.jpg\" width=\"100%\" alt=\"\" title=\"\" /></div>\n<p>Refer : Level AA Conformance to Web Content Accessibility Guidelines 2.0- <a\n    href=\"https://www.w3.org/WAI/WCAG2AA-Conformance\">https://www.w3.org/WAI/WCAG2AA-Conformance</a></p>\n\n    <hr class=\"sb-doc-hr\">\n\n<h4>Color Palette</h4>\n<p>Our primary palette uses bright colors to bring a boldness to our brand, and is used in logical ways throughout\n  product and marketing to guide the eye and highlight the important bits. We pepper warmer, secondary palette colors\n  throughout to soften the experience and to impart confidence and optimism.</p>\n\n<!-- primary color-->\n<div class=\"ui grid\">\n\n  <div class=\"five wide column\">\n    <h6>Primary Color</h6>\n    <p>B400 is often used for our logo color, backgrounds, buttons, and text links. The accompanying shades of blue can\n      be used in illustrations to create depth, motion and hover effects. It can also be used for some typography, as\n      long as it passes WCAG AA requirements.</p>\n    <p><span class=\"sb-doc-condition-sign\">*</span> We use primarily for body text and headings, is used for primary\n      actions and buttons, links, global\n      navigation, indicates progress, and represents authentication.</p>\n  </div>\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-space-30\"></div>\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile primary\"></div>\n      <div class=\"color-details\">\n        <div class=\"block fullrow\">\n          <label>Name</label>\n          <div class=\"label-value\">B400 - Endeavour <span class=\"sb-doc-condition-sign\">*</span>approx.</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#024F9D</div>\n        </div>\n        <div class=\"block\">\n          <label>RGB</label>\n          <div class=\"label-value\">2, 79, 157</div>\n        </div>\n        <div class=\"block\">\n          <label>PMS</label>\n          <div class=\"label-value\">2945 C</div>\n        </div>\n        <div class=\"block\">\n          <label>CMYK</label>\n          <div class=\"label-value\">100, 78, 60, 0</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Standard button, Table titles, Toggles hover, Subtle links, Hover state, Standard\n            button background, Headding</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h6>Primary neutral colors - B400</h6>\n  <p>We use as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath\n    transparent\n    neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B800\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B800</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#002E50</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Button On hover</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B600\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B600</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#005391</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">On Press</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B300\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B300</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#7AB4EE</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Selected textbox, Outlines</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B200\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B200</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#80A7CE</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Divider</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B100\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B100</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#EDF4F9</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Search Button background</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 primary-B0\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">B0</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#F3F7FA</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Background</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<hr class=\"sb-doc-hr\">\n\n<!-- secondary color-->\n<div class=\"ui grid \">\n\n    <h6>Secondary & Tertiary color palette</h6>\n    <p>Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these colors more frequently when brand awareness is high, or on our own properties where we control the surrounding environment. When used in conjunction with our primary palette, these colors makes every moment feel on-brand.</p>\n    <p>The extended palette consists of all the useable tints and shades of each color in the palette. They are all helpfully named and numbered for easy reference. Usage of these colors varies depending on the element, but they come in handy for illustrations and components in product.</p>\n\n  <div class=\"five wide column\">\n    <h6>Secondary Color</h6>\n    <p>Our secondary palette is made up of  green, and orange. These colors are not used equally - see the Color System below for more information.</p>\n    <p><span class=\"sb-doc-condition-sign\">*</span> G400 is used to represent success in flags and inline messages.</p>\n  </div>\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-space-30\"></div>\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile secondary\"></div>\n      <div class=\"color-details\">\n        <div class=\"block fullrow\">\n          <label>Name</label>\n          <div class=\"label-value\">G400 - Green haze</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#008840</div>\n        </div>\n        <div class=\"block\">\n          <label>RGB</label>\n          <div class=\"label-value\">0, 136, 64</div>\n        </div>\n        <div class=\"block\">\n          <label>PMS</label>\n          <div class=\"label-value\">348 C</div>\n        </div>\n        <div class=\"block\">\n          <label>CMYK</label>\n          <div class=\"label-value\">87, 22, 100, 8</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Illustration color, icon color, Button hover state</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h6>Secondary neutral colors for text - G400</h6>\n  <p>We use G400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 secondary-G200\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">G200</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#07BC81</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Button color</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 secondary-G100\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">G100</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#00C786</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Colored button background, Toasts design element</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile color-tile2 secondary-G0\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">G0</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#E1FFDF</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Toasts background</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n\n<hr class=\"sb-doc-hr\">\n\n<!-- tertiary color-->\n<div class=\"ui grid \">\n  <div class=\"five wide column\">\n    <h6>Tertiary neutral colors for text - O400</h6>\n    <p>We use O400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n    <p><span class=\"sb-doc-condition-sign\">*</span> primarily to indicate warning and to indicate destructive actions.</p>\n  </div>\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-space-30\"></div>\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile tertiary\"></div>\n      <div class=\"color-details\">\n        <div class=\"block fullrow\">\n          <label>Name</label>\n          <div class=\"label-value\">O400 - Tango <span class=\"sb-doc-condition-sign\">*</span>approx</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#E55A28</div>\n        </div>\n        <div class=\"block\">\n          <label>RGB</label>\n          <div class=\"label-value\">229, 90, 40</div>\n        </div>\n        <div class=\"block\">\n          <label>PMS</label>\n          <div class=\"label-value\">7579 C</div>\n        </div>\n        <div class=\"block\">\n          <label>CMYK</label>\n          <div class=\"label-value\">5, 79, 99, 0</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Illustration color, icon color, Label color, Notification background, Button hover state</div>\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"three wide column computer only\"></div>\n \n    <h6>Tertiary neutral colors for text - O400</h6>\n    <p>We use O400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n  \n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 tertiary-O100\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">O100</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#FFA11D</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Colored button background, Toasts design element, Icon color, Button color</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 tertiary-O0\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">O0</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#FEEDD7</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Toasts background</div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<hr class=\"sb-doc-hr\">\n\n<!-- red color-->\n<div class=\"ui grid\">\n    <h6>Red neutral colors - R400</h6>\n    <p>We use R400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n  \n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 red-R400\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">R400</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#FF4558</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Illustration color, icon color, Label color, Notification background</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 red-R100\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">R100</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#FF6979</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Colored button background, Toasts design element, Icon color</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 red-R0\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">R0</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#FBCCD1</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Toasts background</div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<hr class=\"sb-doc-hr\">\n\n<!-- grey color-->\n<div class=\"ui grid \">\n  <div class=\"five wide column\">\n    <h6>Grey Neutrals colors for font</h6>\n    <p>Muted and neutral palettes are derived from Gray. Their varying degrees of saturation allow for the appropriate level of warmth across marketing and product.</p>\n  </div>\n  <div class=\"four wide column\">\n    <div class=\"sb-doc-space-30\"></div>\n    <div class=\"sb-doc-color-block\">\n      <div class=\"color-tile grey-T800\"></div>\n      <div class=\"color-details\">\n        <div class=\"block\">\n          <label>Name</label>\n          <div class=\"label-value\">T800</div>\n        </div>\n        <div class=\"block\">\n          <label>HEX</label>\n          <div class=\"label-value\">#333333</div>\n        </div>\n        <div class=\"block\">\n          <label>Percentage Color</label>\n          <div class=\"label-value\">0%</div>\n        </div>\n        <div class=\"block fullrow\">\n          <label>Usage</label>\n          <div class=\"label-value\">Secoundary Text color</div>\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"three wide column computer only\"></div>\n \n    <h6>Grey neutral colors  - T400</h6>\n    <p>We use T400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n  \n  \n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 grey-T400\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">T400</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#666666</div>\n          </div>\n          <div class=\"block\">\n            <label>Percentage Color</label>\n            <div class=\"label-value\">20%</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Subheading one</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 grey-T300\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">T300</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#969696</div>\n          </div>\n          <div class=\"block\">\n            <label>Percentage Color</label>\n            <div class=\"label-value\">39%</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Place holder text, Disable button text</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 grey-T200\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">T200</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#99999</div>\n          </div>\n          <div class=\"block\">\n            <label>Percentage Color</label>\n            <div class=\"label-value\">40%</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Subheading two</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 grey-T100\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">T100</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#CCCCCC</div>\n          </div>\n          <div class=\"block\">\n            <label>Percentage Color</label>\n            <div class=\"label-value\">60%</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Secondary Button outline, Divider line, Icon color, Disable button background</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"four wide column\">\n      <div class=\"sb-doc-color-block\">\n        <div class=\"color-tile color-tile2 grey-T0\"></div>\n        <div class=\"color-details\">\n          <div class=\"block\">\n            <label>Name</label>\n            <div class=\"label-value\">T0</div>\n          </div>\n          <div class=\"block\">\n            <label>HEX</label>\n            <div class=\"label-value\">#F2F2F2</div>\n          </div>\n          <div class=\"block\">\n            <label>Percentage Color</label>\n            <div class=\"label-value\">75%</div>\n          </div>\n          <div class=\"block fullrow\">\n            <label>Usage</label>\n            <div class=\"label-value\">Place holder active background</div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n<div class=\"docs-sections sb-doc-hidden\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\n      title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n\n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/colors/colors.component.ts":
/*!********************************************!*\
  !*** ./src/app/colors/colors.component.ts ***!
  \********************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.pageTitle = 'Colors';
        this.sections = [
            {
                expandCode: false,
                title: 'Colors',
                demoCode: "\n     \n      ",
                copyCode: "\n     \n      "
            }
        ];
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/colors/colors.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.pageTitle = 'Forms';
        this.sections = [
            {
                expandCode: false,
                title: 'Checkbox',
                demoCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n    <input type=\"checkbox\" name=\"example\">\n    <label>Make my profile visible</label>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n      <input type=\"checkbox\" name=\"example\">\n      <label>Make my profile visible</label>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Input Disabled',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input\" disabled type=\"text\" placeholder=\"Enter Mobile Number\">\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input\" disabled type=\"text\" placeholder=\"Enter Mobile Number\">\n      </div>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Input with Error',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input sb-error\">\n      </div>\n      <small class=\"text-error\">Enter phone number</small>\n      </div>\n\n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input sb-error\">\n      </div>\n      <small class=\"text-error\">Enter phone number</small>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Input with Icon',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input\" type=\"text\" placeholder=\"Enter Mobile Number\">\n          <i class=\"search icon sb-input-icon\"></i>\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Input with icon</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input\" type=\"text\" placeholder=\"Enter Mobile Number\">\n          <i class=\"search icon sb-input-icon\"></i>\n      </div>\n      </div>\n  "
            },
            {
                expandCode: false,
                title: 'Input with Required',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Required field</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input required\" required>\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Required field</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-input required\" required>\n      </div>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Input with success',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n      <div class=\"sb-field\">\n      <input class=\"sb-input sb-success\">\n      </div>\n      <small class=\"text-success\">Both password are matching</small>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n      <div class=\"sb-field\">\n      <input class=\"sb-input sb-success\">\n      </div>\n      <small class=\"text-success\">Both password are matching</small>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Radio',
                demoCode: "\n      <form action=\"#\" class=\"checker\">\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test1\" name=\"radio-group\" disabled=\"disabled\" checked>\n        <label for=\"test1\">Radio Button label</label>\n      </div>\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test2\" name=\"radio-group\">\n        <label for=\"test2\">Peach</label>\n      </div>\n    \n      ",
                copyCode: "\n      <form action=\"#\" class=\"checker\">\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test1\" name=\"radio-group\" disabled=\"disabled\" checked>\n        <label for=\"test1\">Radio Button label</label>\n      </div>\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test2\" name=\"radio-group\">\n        <label for=\"test2\">Peach</label>\n      </div>\n    \n      "
            },
            {
                expandCode: false,
                title: 'Text Area',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n          <div class=\"sb-field\">\n              <textarea rows=\"4\" class=\"sb-textarea\" placeholder=\"Enter summary\"></textarea>\n          </div>\n          </div>\n      \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n          <div class=\"sb-field\">\n              <textarea rows=\"4\" class=\"sb-textarea\" placeholder=\"Enter summary\"></textarea>\n          </div>\n          </div>\n      \n      "
            }
        ];
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/labels/labels.component.html":
/*!**********************************************!*\
  !*** ./src/app/labels/labels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/labels/labels.component.ts":
/*!********************************************!*\
  !*** ./src/app/labels/labels.component.ts ***!
  \********************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelsComponent = /** @class */ (function () {
    function LabelsComponent() {
        this.pageTitle = 'Labels';
        this.sections = [
            {
                expandCode: false,
                title: 'Basic Labels',
                demoCode: "\n      <label class=\"sb-label sb-label-outline-primary sb-label-normal mr-10\">Basic label</label>\n      <label class=\"sb-label sb-label-outline-secondary sb-label-normal mr-10\">Secondary</label>\n      <label class=\"sb-label sb-label-outline-tertiary sb-label-normal mr-10\">Tertiary</label>\n      <label class=\"sb-label sb-label-outline-info sb-label-normal mr-10\">Info</label>\n      <label class=\"sb-label sb-label-outline-success sb-label-normal mr-10\">Success</label>\n      <label class=\"sb-label sb-label-outline-warning sb-label-normal mr-10\">Warning</label>\n      <label class=\"sb-label sb-label-outline-error sb-label-normal mr-10\">Error</label>\n      ",
                copyCode: "\n      <label class=\"sb-label sb-label-outline-primary sb-label-normal\">Basic label</label>\n      <label class=\"sb-label sb-label-outline-secondary sb-label-normal\">Secondary</label>\n      <label class=\"sb-label sb-label-outline-tertiary sb-label-normal\">Tertiary</label>\n      <label class=\"sb-label sb-label-outline-info sb-label-normal\">Info</label>\n      <label class=\"sb-label sb-label-outline-success sb-label-normal\">Success</label>\n      <label class=\"sb-label sb-label-outline-warning sb-label-normal\">Warning</label>\n      <label class=\"sb-label sb-label-outline-error sb-label-normal\">Error</label>\n      "
            },
            {
                expandCode: false,
                title: 'label States',
                demoCode: "\n      <label class=\"sb-label sb-label-disabled sb-label-normal mr-10\">Primary Disable</label>\n      <label class=\"sb-label sb-label-outline-disabled sb-label-normal\">Basic label Disable</label>\n      ",
                copyCode: "\n      <label class=\"sb-label sb-label-disabled sb-label-normal\">Primary Disable</label>\n      <label class=\"sb-label sb-label-outline-disabled sb-label-normal\">Basic label Disable</label>\n      "
            },
            {
                expandCode: false,
                title: 'Colored labels',
                demoCode: "\n      <label class=\"sb-label sb-label-primary sb-label-normal mr-10\">Primary label</label>\n      <label class=\"sb-label sb-label-secondary sb-label-normal mr-10\">Secondary</label>\n      <label class=\"sb-label sb-label-tertiary sb-label-normal mr-10\">Tertiary</label>\n      <label class=\"sb-label sb-label-warning sb-label-normal mr-10\">warning</label>\n      <label class=\"sb-label sb-label-error sb-label-normal mr-10\">Error</label>\n      <label class=\"sb-label sb-label-info sb-label-normal mr-10\">Info</label>\n      ",
                copyCode: "\n      <label class=\"sb-label sb-label-primary sb-label-normal\">Primary label</label>\n      <label class=\"sb-label sb-label-secondary sb-label-normal\">Secondary</label>\n      <label class=\"sb-label sb-label-tertiary sb-label-normal\">Tertiary</label>\n      <label class=\"sb-label sb-label-warning sb-label-normal\">warning</label>\n      <label class=\"sb-label sb-label-error sb-label-normal\">Error</label>\n      <label class=\"sb-label sb-label-info sb-label-normal\">Info</label>\n      "
            },
            {
                expandCode: false,
                title: 'label Sizes',
                demoCode: "\n      <label class=\"sb-label sb-label-primary sb-label-xs mr-10\">mini</label>\n      <label class=\"sb-label sb-label-primary sb-label-normal mr-10\">normal</label>\n      <label class=\"sb-label sb-label-primary sb-label-sm mr-10\">small</label>\n      <label class=\"sb-label sb-label-primary sb-label-md mr-10\">medium</label>\n      <label class=\"sb-label sb-label-primary sb-label-lg mr-10\">large</label>\n      ",
                copyCode: "\n      <label class=\"sb-label sb-label-primary sb-label-xs\">mini</label>\n      <label class=\"sb-label sb-label-primary sb-label-normal\">normal</label>\n      <label class=\"sb-label sb-label-primary sb-label-sm\">small</label>\n      <label class=\"sb-label sb-label-primary sb-label-md\">medium</label>\n      <label class=\"sb-label sb-label-primary sb-label-lg\">large</label>\n      "
            }
        ];
    }
    LabelsComponent.prototype.ngOnInit = function () {
    };
    LabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labels',
            template: __webpack_require__(/*! ./labels.component.html */ "./src/app/labels/labels.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsComponent);
    return LabelsComponent;
}());



/***/ }),

/***/ "./src/app/loaders/loaders.component.html":
/*!************************************************!*\
  !*** ./src/app/loaders/loaders.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/loaders/loaders.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loaders/loaders.component.ts ***!
  \**********************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadersComponent = /** @class */ (function () {
    function LoadersComponent() {
        this.pageTitle = 'Loaders';
        this.sections = [
            {
                expandCode: false,
                title: 'Loader',
                demoCode: "\n      <div class=\"\" style=\"position:relative;width:100%;height: 300px;\">\n    <div class=\"sb-loader\" style=\"position: absolute;\n    left: 0px;\n    right: 0px;\n    width: 40px;\n    margin: 0 auto;\n    height: 40px;\"></div>\n</div>\n      ",
                copyCode: "\n      <div class=\"\" style=\"position:relative;width:100%;height: 300px;\">\n      <div class=\"sb-loader\" style=\"position: absolute;\n      left: 0px;\n      right: 0px;\n      width: 40px;\n      margin: 0 auto;\n      height: 40px;\"></div>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Page Loader with Background',
                demoCode: "\n      <div class=\"\" style=\"position:relative;width:100%;height: 300px;\">\n    <div class=\"sb-loader dimmer\" style=\"position: absolute;\"></div>\n</div>\n      ",
                copyCode: "\n      <div class=\"\" style=\"position:relative;width:100%;height: 300px;\">\n      <div class=\"sb-loader dimmer\" style=\"position: absolute;\"></div>\n  </div>\n      "
            }
        ];
    }
    LoadersComponent.prototype.ngOnInit = function () {
    };
    LoadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loaders',
            template: __webpack_require__(/*! ./loaders.component.html */ "./src/app/loaders/loaders.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "./src/app/modals/modals.component.html":
/*!**********************************************!*\
  !*** ./src/app/modals/modals.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n\n<!--Large Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Large Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"largemodal = !largemodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Show Modal</button>\n    <sui-modal *ngIf=\"showLargeModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'large'\"\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showLargeModal = !showLargeModal\" #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showLargeModal = !showLargeModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showLargeModal = !showLargeModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"largemodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"largeModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"largeModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Large Modal-->\n\n<!--Normal Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Normal Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"normalmodal = !normalmodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showNormalModal = !showNormalModal\">Show Modal</button>\n    <sui-modal *ngIf=\"showNormalModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\n      [size]=\"'normal'\" class=\"sb-modal\" appBodyScroll (dismissed)=\"showNormalModal = !showNormalModal\" #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showNormalModal = !showNormalModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showNormalModal = !showNormalModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"normalmodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"normalModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"normalModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Normal Modal-->\n\n<!--Small Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Small Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"smallmodal = !smallmodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showSmallModal = !showSmallModal\">Show Modal</button>\n    <sui-modal *ngIf=\"showSmallModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showSmallModal = !showSmallModal\" #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showSmallModal = !showSmallModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showSmallModal = !showSmallModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"smallmodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"smallModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"smallModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Small Modal-->\n\n<!--Full screen Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Fullscreen Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"fullscreenmodal = !fullscreenmodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showFullscreenModal = !showFullscreenModal\">Show\n      Modal</button>\n    <sui-modal *ngIf=\"showFullscreenModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\n      [size]=\"'fullscreen'\" class=\"sb-modal sb-modal-fullscreen\" appBodyScroll\n      (dismissed)=\"showFullscreenModal = !showFullscreenModal\" #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showFullscreenModal = !showFullscreenModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\"\n          (click)=\"showFullscreenModal = !showFullscreenModal\">\n          No\n        </button>\n    </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"fullscreenmodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"fullscreenModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"fullscreenModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Fullscreen Modal-->\n\n<!--Success Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Success Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"successmodal = !successmodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-success sb-btn-normal\" (click)=\"showSuccessModal = !showSuccessModal\">Show\n      Modal</button>\n    <sui-modal *ngIf=\"showSuccessModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\n      [size]=\"'small'\" class=\"sb-modal sb-success\" appBodyScroll (dismissed)=\"showSuccessModal = !showSuccessModal\"\n      #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-success\" (click)=\"showSuccessModal = !showSuccessModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-success\" (click)=\"showSuccessModal = !showSuccessModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"successmodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"successModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"successModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Success Modal-->\n\n<!--Error Modal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Error Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"errormodal = !errormodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"showErrorModal = !showErrorModal\">Show Modal</button>\n    <sui-modal *ngIf=\"showErrorModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\n      class=\"sb-modal sb-error\" appBodyScroll (dismissed)=\"showErrorModal = !showErrorModal\" #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-error\" (click)=\"showErrorModal = !showErrorModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-error\" (click)=\"showErrorModal = !showErrorModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"errormodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"errorModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"errorModalCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Danger Modal-->\n\n<!--WarningModal-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Warning Modal\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"warningmodal = !warningmodal\" title=\"Toggle Code\"\n      tabindex=\"0\"></i>\n  </h4>\n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n    <button class=\"sb-btn sb-btn-warning sb-btn-normal\" (click)=\"showWarningModal = !showWarningModal\">Show\n      Modal</button>\n    <sui-modal *ngIf=\"showWarningModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\n      [size]=\"'small'\" class=\"sb-modal sb-warning\" appBodyScroll (dismissed)=\"showWarningModal = !showWarningModal\"\n      #modal>\n      <div class=\"sb-modal-header\">\n        Modal Heading\n      </div>\n      <div class=\"sb-modal-content\">\n        Modal Content\n      </div>\n      <div class=\"sb-modal-actions\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-warning\" (click)=\"showWarningModal = !showWarningModal\">\n          Yes\n        </button>\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-warning\" (click)=\"showWarningModal = !showWarningModal\">\n          No\n        </button>\n      </div>\n    </sui-modal>\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"warningmodal\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"warningModalCode\"\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n        <code [highlight]=\"warningModalCode\"></code>\n      </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n</div>\n<!--/Danger Modal-->\n\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/modals/modals.component.ts":
/*!********************************************!*\
  !*** ./src/app/modals/modals.component.ts ***!
  \********************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
        this.pageTitle = 'Modals';
        this.largeModalCode = "<sui-modal \n  *ngIf=\"showLargeModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'large'\" \n  class=\"sb-modal\" \n  appBodyScroll \n  (dismissed)=\"showLargeModal = !showLargeModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"doSomething()\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"doSomething()\">\n      No\n    </button>\n  </div>\n  </sui-modal>";
        this.normalModalCode = "<sui-modal \n  *ngIf=\"showNormalModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'normal'\" \n  class=\"sb-modal\" \n  appBodyScroll \n  (dismissed)=\"showNormalModal = !showNormalModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"doSomething()\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"doSomething()\">\n      No\n    </button>\n  </div>\n  </sui-modal>";
        this.smallModalCode = "<sui-modal \n  *ngIf=\"showSmallModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'small'\" \n  class=\"sb-modal\" \n  appBodyScroll \n  (dismissed)=\"showSmallModal = !showSmallModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showSmallModal = !showSmallModal\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showSmallModal = !showSmallModal\">\n      No\n    </button>\n  </div>\n  </sui-modal>";
        this.fullscreenModalCode = "<sui-modal \n  *ngIf=\"showFullscreenModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'fullscreen'\" \n  class=\"sb-modal sb-modal-fullscreen\" \n  appBodyScroll \n  (dismissed)=\"showFullscreenModal = !showFullscreenModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showFullscreenModal = !showFullscreenModal\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showFullscreenModal = !showFullscreenModal\">\n      No\n    </button>\n  </div>\n</sui-modal>";
        this.successModalCode = "<sui-modal \n  *ngIf=\"showSuccessModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'small'\" \n  class=\"sb-modal\" \n  appBodyScroll \n  (dismissed)=\"showSuccessModal = !showSuccessModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-success\" (click)=\"showSuccessModal = !showSuccessModal\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-success\" (click)=\"showSuccessModal = !showSuccessModal\">\n      No\n    </button>\n  </div>\n  </sui-modal>";
        this.errorModalCode = "<sui-modal \n  *ngIf=\"showErrorModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'small'\" \n  class=\"sb-modal sb-error\" \n  appBodyScroll \n  (dismissed)=\"showErrorModal = !showErrorModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-error\" (click)=\"showErrorModal = !showErrorModal\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-error\" (click)=\"showErrorModal = !showErrorModal\">\n      No\n    </button>\n  </div>\n  </sui-modal>";
        this.warningModalCode = "<sui-modal \n  *ngIf=\"showWarningModal\"\n  [mustScroll]=\"true\"\n  [isClosable]=\"true\" \n  [transitionDuration]=\"0\" \n  [size]=\"'small'\" \n  class=\"sb-modal sb-warning\" \n  appBodyScroll \n  (dismissed)=\"showWarningModal = !showWarningModal\" \n  #modal>\n  <div class=\"sb-modal-header\">\n    Modal Heading\n  </div>\n  <div class=\"sb-modal-content\">\n    Modal Content\n  </div>\n  <div class=\"sb-modal-actions\">\n    <button class=\"sb-btn sb-btn-normal sb-btn-warning\" (click)=\"showWarningModal = !showWarningModal\">\n      Yes\n    </button>\n    <button class=\"sb-btn sb-btn-normal sb-btn-outline-warning\" (click)=\"showWarningModal = !showWarningModal\">\n      No\n    </button>\n  </div>\n</sui-modal>";
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/modals/modals.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  overview works!\n</p>\n"

/***/ }),

/***/ "./src/app/overview/overview.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/pipes/keep-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/keep-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: EscapeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keepHtml', pure: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.pageTitle = 'Search';
        this.sections = [
            {
                expandCode: false,
                title: 'Searchbox - Large',
                demoCode: "\n      <div class=\"sb-search-box large\">\n    <div class=\"input-div relative\">\n        <i class=\"search icon\"></i>\n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n        <div class=\"sb-loader\"></div>\n    </div>\n    <button class=\"sb-btn sb-btn-normal\">Search</button>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-search-box large\">\n      <div class=\"input-div relative\">\n          <i class=\"search icon\"></i>\n          <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n          <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Searchbox - Medium',
                demoCode: "\n      <div class=\"sb-search-box medium\">\n    <div class=\"input-div relative\">\n        <i class=\"search icon\"></i>\n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n        <div class=\"sb-loader\"></div>\n    </div>\n    <button class=\"sb-btn sb-btn-normal\">Search</button>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-search-box medium\">\n      <div class=\"input-div relative\">\n          <i class=\"search icon\"></i>\n          <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n          <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Searchbox - Small',
                demoCode: "\n      <div class=\"sb-search-box small\">\n      <div class=\"input-div relative\">\n          <i class=\"search icon\"></i>\n          <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n          <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n  </div>\n      ",
                copyCode: "\n      <div class=\"sb-search-box small\">\n      <div class=\"input-div relative\">\n          <i class=\"search icon\"></i>\n          <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n          <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Searchbox - No Button',
                demoCode: "\n      <div class=\"sb-search-box small no-btn\">\n    <div class=\"input-div relative\">\n        <i class=\"search icon\"></i>\n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n        <div class=\"sb-loader\"></div>\n    </div>\n    <button class=\"sb-btn sb-btn-normal\">Search</button>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-search-box small no-btn\">\n    <div class=\"input-div relative\">\n        <i class=\"search icon\"></i>\n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n        <div class=\"sb-loader\"></div>\n    </div>\n    <button class=\"sb-btn sb-btn-normal\">Search</button>\n</div>\n      "
            },
            {
                expandCode: false,
                title: 'Searchbox - Disabled',
                demoCode: "\n      <div class=\"sb-search-box large disabled\">\n      <div class=\"input-div relative\">\n          <i class=\"search icon\"></i>\n          <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n          <i class=\"close icon\"></i>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n  </div>\n      ",
                copyCode: "\n      <div class=\"sb-search-box large disabled\">\n    <div class=\"input-div relative\">\n        <i class=\"search icon\"></i>\n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n    </div>\n    <button class=\"sb-btn sb-btn-normal\">Search</button>\n</div>\n      "
            }
        ];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sb-branding\">\n  <div><img src=\"https://project-sunbird.atlassian.net/secure/projectavatar?pid=10000&avatarId=10512&size=xxlarge\"\n      width=\"100%\" /></div>\n  <h4 class=\"sb-doc-app-title\">Sunbird - Design System</h4>\n</div>\n<ul>\n  <li>\n    <h4>Base</h4>\n    <ul>\n      <li><a routerLink=\"/typography\">Typography</a></li>\n      <li><a routerLink=\"/colors\">Colors</a></li>\n      <li><a routerLink=\"/labels\">Labels</a></li>\n    </ul>\n  </li>\n  <li>\n    <h4>Components</h4>\n    <ul>\n      <li><a routerLink=\"/buttons\">Buttons</a></li>\n      <li><a routerLink=\"/modals\">Modals</a></li>\n      <li><a routerLink=\"/search\">Search</a></li>\n      <li><a routerLink=\"/tables\">Tables</a></li>\n      <li><a routerLink=\"/loaders\">Loaders</a></li>\n      <li><a routerLink=\"/forms\">Forms</a></li>\n      <li><a routerLink=\"/toasters\">Toasters</a></li>\n    </ul>\n  </li>\n  <li>\n    <h4>Pages</h4>\n    <ul>\n      <li><a routerLink=\"/buttons\">Library/Courses</a></li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.html":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.demoCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.demoCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/*!********************************************!*\
  !*** ./src/app/tables/tables.component.ts ***!
  \********************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        this.pageTitle = 'Tables';
        this.sections = [
            {
                expandCode: false,
                title: 'Table - with Download',
                demoCode: "\n      <div class=\"sb-dtable-container\">\n  <div class=\"sb-dtable-search-header search-header-withbg\">\n\n    <div class=\"sb-search-box small no-btn\">\n      <div class=\"input-div relative\">\n        <i class=\"search icon\"></i> \n        <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n        <i class=\"close icon\"></i>\n        <div class=\"sb-loader\"></div>\n      </div>\n      <button class=\"sb-btn sb-btn-normal\">Search</button>\n    </div>\n\n\n    <div class=\"download-file\"><i class=\"download icon\"></i>Download File</div>\n  </div>\n  <table class=\"ui selectable fixed single-line table no-br-radius sb-dtable\">\n    <thead class=\"sb-dtable-header\">\n      <tr>\n        <th class=\"sb-sort-icon\">Name</th>\n        <th class=\"sb-sort-icon\">Age</th>\n        <th class=\"sb-sort-icon\">Job</th>\n      </tr>\n    </thead>\n    <tbody class=\"sb-dtable-body\">\n      <tr>\n        <td data-label=\"Name\">James</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Engineer</td>\n      </tr>\n      <tr class=\"sb-activated-row\">\n        <td data-label=\"Name\">Jill</td>\n        <td data-label=\"Age\">26</td>\n        <td data-label=\"Job\">Engineer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n      <tr>\n        <td data-label=\"Name\">Elyse</td>\n        <td data-label=\"Age\">24</td>\n        <td data-label=\"Job\">Designer</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-dtable-container\">\n      <div class=\"sb-dtable-search-header search-header-withbg\">\n    \n        <div class=\"sb-search-box small no-btn\">\n          <div class=\"input-div relative\">\n            <i class=\"search icon\"></i>\n            <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n            <i class=\"close icon\"></i>\n            <div class=\"sb-loader\"></div>\n          </div>\n          <button class=\"sb-btn sb-btn-normal\">Search</button>\n        </div>\n    \n    \n        <div class=\"download-file\"><i class=\"download icon\"></i>Download File</div>\n      </div>\n      <table class=\"ui selectable fixed single-line table no-br-radius sb-dtable\">\n        <thead class=\"sb-dtable-header\">\n          <tr>\n            <th class=\"sb-sort-icon\">Name</th>\n            <th class=\"sb-sort-icon\">Age</th>\n            <th class=\"sb-sort-icon\">Job</th>\n          </tr>\n        </thead>\n        <tbody class=\"sb-dtable-body\">\n          <tr>\n            <td data-label=\"Name\">James</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Engineer</td>\n          </tr>\n          <tr class=\"sb-activated-row\">\n            <td data-label=\"Name\">Jill</td>\n            <td data-label=\"Age\">26</td>\n            <td data-label=\"Job\">Engineer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n          <tr>\n            <td data-label=\"Name\">Elyse</td>\n            <td data-label=\"Age\">24</td>\n            <td data-label=\"Job\">Designer</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Table - Default',
                demoCode: "\n      <div class=\"sb-dtable-container\">\n    <table class=\"sb-dtable ui selectable striped fixed single-line table\">\n        <thead class=\"sb-dtable-header pd-y-x\">\n            <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n            </tr>\n        </thead>\n        <tbody class=\"sb-dtable-body body-large\">\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Engineer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">26</td>\n                <td data-label=\"Job\">Engineer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n      ",
                copyCode: "\n      <div class=\"sb-dtable-container\">\n    <table class=\"sb-dtable ui selectable striped fixed single-line table\">\n        <thead class=\"sb-dtable-header pd-y-x\">\n            <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n            </tr>\n        </thead>\n        <tbody class=\"sb-dtable-body body-large\">\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Engineer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">26</td>\n                <td data-label=\"Job\">Engineer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n            <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                        <img src=\"\" alt=\"\" class=\"sb-media-object\">\n                        <div class=\"sb-media-body\">\n                            <h6 class=\"media-heading\">United Course</h6>\n                            <p class=\"media-description\">Course</p>\n                        </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n      "
            }
        ];
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/tables/tables.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/template/template.component.html":
/*!**************************************************!*\
  !*** ./src/app/template/template.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\" *ngIf=\"template.title\">\n  {{template.title}}\n</h1>\n<!--/Page Heading-->\n  \n <!--Page Content-->\n<ng-container *ngIf=\"template.sections\">\n  <div class=\"docs-sections\" *ngFor=\"let section of template.sections;\">\n  \n    <h4 class=\"docs-sectionHeading\" *ngIf=\"section.title\">\n      {{section.title}}\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n    </h4> \n  \n    <!--Display output-->\n    <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\" *ngIf=\"section.demoCode\">\n    <ng-template component-host></ng-template>\n    </div>\n    <!--/Display output-->\n  \n    <!--Display code-->\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode && section.copyCode\">\n  \n      <!--Copy code button-->\n      <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n      <!--/Copy code button-->\n  \n      <!--Copy code display-->\n      <pre>\n        <code [highlight]=\"section.copyCode\"></code>\n      </pre>\n      <!--/Copy code display-->\n  \n    </div>\n    <!--/Display code-->\n    \n  </div>\n</ng-container>\n<!--Page Content-->\n"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(activeRoute, http) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.http = http;
        this.component = '';
        this.template = '';
        this.activeRoute.params.subscribe(function (routeParams) {
            if (routeParams.component) {
                _this.component = routeParams.component;
            }
            else {
                _this.component = 'buttons';
            }
            _this.getContent(_this.component).subscribe(function (data) {
                _this.template = data[_this.component];
            });
        });
    }
    TemplateComponent.prototype.getContent = function (component) {
        return this.http.get('./assets/data.json');
    };
    TemplateComponent.prototype.ngOnInit = function () { };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/template/template.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/toasters/toasters.component.html":
/*!**************************************************!*\
  !*** ./src/app/toasters/toasters.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\">\n\n  <h4 class=\"docs-sectionHeading\">\n    Standard Toasters\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\">\n\n      <button class=\"sb-btn sb-btn-info sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Info</button>\n      <button class=\"sb-btn sb-btn-success sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Success</button>\n      <button class=\"sb-btn sb-btn-warning sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Warning</button>\n      <button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Error</button>\n\n      \n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/toasters/toasters.component.ts":
/*!************************************************!*\
  !*** ./src/app/toasters/toasters.component.ts ***!
  \************************************************/
/*! exports provided: ToastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastersComponent", function() { return ToastersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");



var ToastersComponent = /** @class */ (function () {
    function ToastersComponent(iziToast) {
        this.iziToast = iziToast;
        // this.iziToast.question({
        //   title: "Welcome",
        //   progressBarColor: "red",
        //   onOpened: () => {
        //     console.log("opened");
        //   }
        // });
        this.pageTitle = 'Toasters';
        this.sections = [
        // {
        //   expandCode: false,
        //   title: 'Standard Information Toaster',
        //   demoCode: `
        //   <div class="sb-toast sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `,
        //   copyCode: `
        //   <div class="sb-toast">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `
        // },
        // {
        //   expandCode: false,
        //   title: 'Standard Success Toaster',
        //   demoCode: `
        //   <div class="sb-toast sb-toast-success sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `,
        //   copyCode: `
        //   <div class="sb-toast sb-toast-success">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `
        // },
        // {
        //   expandCode: false,
        //   title: 'Standard Warning Toaster',
        //   demoCode: `
        //   <div class="sb-toast sb-toast-warning sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `,
        //   copyCode: `
        //   <div class="sb-toast sb-toast-warning sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `
        // },
        // {
        //   expandCode: false,
        //   title: 'Standard Error Toaster',
        //   demoCode: `
        //   <div class="sb-toast sb-toast-danger sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `,
        //   copyCode: `
        //   <div class="sb-toast sb-toast-danger sb-toast-normal">
        //   <div class="sb-toast-body">
        //     <div class="sb-toast-icon"></div>
        //     <div class="sb-toast-texts">
        //       <div class="sb-toast-title">title comes here</div>
        //       <div class="sb-toast-message">message comes here</div>
        //     </div>
        //     <span class="sb-toast-close-icon"></span>
        //   </div>
        // </div>
        //   `
        // }
        ];
    }
    ToastersComponent.prototype.ngOnInit = function () {
    };
    ToastersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toasters',
            template: __webpack_require__(/*! ./toasters.component.html */ "./src/app/toasters/toasters.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__["Ng2IzitoastService"]])
    ], ToastersComponent);
    return ToastersComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.html":
/*!******************************************************!*\
  !*** ./src/app/typography/typography.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\n<h1 class=\"docs-pageHeading\">\n  {{pageTitle}}\n</h1>\n<!--/Page Heading-->\n\n<!--Page Content-->\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\n\n  <h4 class=\"docs-sectionHeading\">\n    {{section.title}}\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\n  </h4> \n\n  <!--Display output-->\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\n  </div>\n  <!--/Display output-->\n\n  <!--Display code-->\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\n\n    <!--Copy code button-->\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\n    <!--/Copy code button-->\n\n    <!--Copy code display-->\n    <pre>\n      <code [highlight]=\"section.copyCode\"></code>\n    </pre>\n    <!--/Copy code display-->\n\n  </div>\n  <!--/Display code-->\n  \n</div>\n<!--Page Content-->\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
        this.pageTitle = 'Typography';
        this.sections = [];
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/typography/typography.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
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

module.exports = __webpack_require__(/*! /home/ttpllt40/Documents/git/sunbird/sunbird-style-guide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map