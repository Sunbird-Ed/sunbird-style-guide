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
/* harmony import */ var _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gridlayout/gridlayout.component */ "./src/app/gridlayout/gridlayout.component.ts");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/spacing/spacing.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-section/page-section.component */ "./src/app/page-section/page-section.component.ts");

















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
    { path: 'gridlayout', component: _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_13__["GridlayoutComponent"] },
    { path: 'spacing', component: _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_14__["SpacingComponent"] },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_15__["CardsComponent"] },
    { path: 'page-section', component: _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_16__["PageSectionComponent"] }
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

module.exports = "<div class=\"docs-body\">\r\n    <div class=\"docs-sidebar\">\r\n        <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"docs-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./gridlayout/gridlayout.component */ "./src/app/gridlayout/gridlayout.component.ts");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/spacing/spacing.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./page-section/page-section.component */ "./src/app/page-section/page-section.component.ts");
































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
                _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_27__["ToastersComponent"],
                _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_28__["GridlayoutComponent"],
                _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_29__["SpacingComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_30__["CardsComponent"],
                _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_31__["PageSectionComponent"]
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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

/***/ "./src/app/cards/cards.component.html":
/*!********************************************!*\
  !*** ./src/app/cards/cards.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/cards/cards.component.ts":
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.pageTitle = 'Cards';
        this.sections = [
            {
                expandCode: false,
                title: 'Course Card',
                demoCode: "\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning system and its application\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : Limits of artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress success\">\n            <div class=\"bar\" style=\"width: 100%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structures\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Global positioning system and its application & Limits of artificial ...\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n              \u0645\u0648\u0636\u0648\u0639: \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n              </div>\n              <div class=\"sb-card-meta-item\">\n              \u0630\u06CC\u0644\u06CC \u0645\u0648\u0636\u0648\u0639: \u0645\u0635\u0646\u0648\u0639\u06CC \u0627\u0646\u0679\u06CC\u0644\u06CC \u062C\u0646\u0633 \u06A9\u06CC \u062D\u062F\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0648\u0631 \u0645\u0635\u0646\u0648\u0639\u06CC \u062D\u062F\u0648\u062F \n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning system and its application\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : Limits of artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress success\">\n            <div class=\"bar\" style=\"width: 100%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structures\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Global positioning system and its application & Limits of artificial ...\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n              \u0645\u0648\u0636\u0648\u0639: \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n              </div>\n              <div class=\"sb-card-meta-item\">\n              \u0630\u06CC\u0644\u06CC \u0645\u0648\u0636\u0648\u0639: \u0645\u0635\u0646\u0648\u0639\u06CC \u0627\u0646\u0679\u06CC\u0644\u06CC \u062C\u0646\u0633 \u06A9\u06CC \u062D\u062F\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0648\u0631 \u0645\u0635\u0646\u0648\u0639\u06CC \u062D\u062F\u0648\u062F \n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n      "
            },
            {
                expandCode: false,
                title: 'Resource Card',
                demoCode: "\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Worksheet</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n                Subject : English\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Class : Class 1,Class 2,Class 3,Class 4,Class 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Medium : Other\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Book</div>\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">\u0648\u0631\u06A9\u0634\u0627\u067E</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n              \u0645\u0636\u0645\u0648\u0646: \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u06A9\u0644\u0627\u0633: \u06A9\u0644\u0627\u0633 1\u060C \u06A9\u0644\u0627\u0633 2\u060C \u06A9\u0644\u0627\u0633 3\u060C \u06A9\u0644\u0627\u0633 4\u060C \u06A9\u0644\u0627\u0633 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u062F\u0631\u0645\u06CC\u0627\u0646\u06C1: \u062F\u06CC\u06AF\u0631\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u0688\u06CC\u0679\u0627 \u0688\u06BE\u0627\u0646\u0686\u06C1 \u0627\u0648\u0631 \u0627\u0644\u06AF\u0648\u0631\u062A\u06BE\u0645 - \u0627\u06C1\u062F\u0627\u0641 1 \u06A9\u062A\u0627\u0628\u0686\u06C1\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Worksheet</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n                Subject : English\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Class : Class 1,Class 2,Class 3,Class 4,Class 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Medium : Other\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Book</div>\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-15\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">\u0648\u0631\u06A9\u0634\u0627\u067E</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n              \u0645\u0636\u0645\u0648\u0646: \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u06A9\u0644\u0627\u0633: \u06A9\u0644\u0627\u0633 1\u060C \u06A9\u0644\u0627\u0633 2\u060C \u06A9\u0644\u0627\u0633 3\u060C \u06A9\u0644\u0627\u0633 4\u060C \u06A9\u0644\u0627\u0633 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u062F\u0631\u0645\u06CC\u0627\u0646\u06C1: \u062F\u06CC\u06AF\u0631\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u0688\u06CC\u0679\u0627 \u0688\u06BE\u0627\u0646\u0686\u06C1 \u0627\u0648\u0631 \u0627\u0644\u06AF\u0648\u0631\u062A\u06BE\u0645 - \u0627\u06C1\u062F\u0627\u0641 1 \u06A9\u062A\u0627\u0628\u0686\u06C1\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n      "
            }
        ];
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/cards/cards.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/colors/colors.component.html":
/*!**********************************************!*\
  !*** ./src/app/colors/colors.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<p>Where appropriate, we enable people to introduce their own color palettes. Our products adapt intelligently and\r\n  flexibly to cater for the user's preference. We are also committed to complying with AA standard contrast ratios . To\r\n  accomplish this, you should choose primary, secondary and extended colors that ensure sufficient color contrast\r\n  between elements. This allows users with low vision to see and use the interface.</p>\r\n<h4>Web Content Accessibility</h4>\r\n<h6>Color Contrast Checker</h6>\r\n<p>Source - <a href=\"https://webaim.org/resources/contrastchecker/\">https://webaim.org/resources/contrastchecker/</a>\r\n</p>\r\n<div class=\"img-block\"><img src=\"docs/assets/images/colors.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n<p>Refer : Level AA Conformance to Web Content Accessibility Guidelines 2.0- <a\r\n    href=\"https://www.w3.org/WAI/WCAG2AA-Conformance\">https://www.w3.org/WAI/WCAG2AA-Conformance</a></p>\r\n\r\n    <hr class=\"sb-doc-hr\">\r\n\r\n<h4>Color Palette</h4>\r\n<p>Our primary palette uses bright colors to bring a boldness to our brand, and is used in logical ways throughout\r\n  product and marketing to guide the eye and highlight the important bits. We pepper warmer, secondary palette colors\r\n  throughout to soften the experience and to impart confidence and optimism.</p>\r\n\r\n<!-- primary color-->\r\n<div class=\"ui grid\">\r\n\r\n  <div class=\"five wide column\">\r\n    <h6>Primary Color</h6>\r\n    <p>B400 is often used for our logo color, backgrounds, buttons, and text links. The accompanying shades of blue can\r\n      be used in illustrations to create depth, motion and hover effects. It can also be used for some typography, as\r\n      long as it passes WCAG AA requirements.</p>\r\n    <p><span class=\"sb-doc-condition-sign\">*</span> We use primarily for body text and headings, is used for primary\r\n      actions and buttons, links, global\r\n      navigation, indicates progress, and represents authentication.</p>\r\n  </div>\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-space-30\"></div>\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile primary\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block fullrow\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B400 - Endeavour <span class=\"sb-doc-condition-sign\">*</span>approx.</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#024F9D</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>RGB</label>\r\n          <div class=\"label-value\">2, 79, 157</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>PMS</label>\r\n          <div class=\"label-value\">2945 C</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>CMYK</label>\r\n          <div class=\"label-value\">100, 78, 60, 0</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Standard button, Table titles, Toggles hover, Subtle links, Hover state, Standard\r\n            button background, Headding</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6>Primary neutral colors - B400</h6>\r\n  <p>We use as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath\r\n    transparent\r\n    neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B800\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B800</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#002E50</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Button On hover</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B600\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B600</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#005391</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">On Press</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B300\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B300</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#7AB4EE</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Selected textbox, Outlines</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B200\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B200</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#80A7CE</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Divider</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B100\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B100</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#EDF4F9</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Search Button background</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 primary-B0\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">B0</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#F3F7FA</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Background</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<!-- secondary color-->\r\n<div class=\"ui grid \">\r\n\r\n    <h6>Secondary & Tertiary color palette</h6>\r\n    <p>Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean on these colors more frequently when brand awareness is high, or on our own properties where we control the surrounding environment. When used in conjunction with our primary palette, these colors makes every moment feel on-brand.</p>\r\n    <p>The extended palette consists of all the useable tints and shades of each color in the palette. They are all helpfully named and numbered for easy reference. Usage of these colors varies depending on the element, but they come in handy for illustrations and components in product.</p>\r\n\r\n  <div class=\"five wide column\">\r\n    <h6>Secondary Color</h6>\r\n    <p>Our secondary palette is made up of  green, and orange. These colors are not used equally - see the Color System below for more information.</p>\r\n    <p><span class=\"sb-doc-condition-sign\">*</span> G400 is used to represent success in flags and inline messages.</p>\r\n  </div>\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-space-30\"></div>\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile secondary\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block fullrow\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">G400 - Green haze</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#008840</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>RGB</label>\r\n          <div class=\"label-value\">0, 136, 64</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>PMS</label>\r\n          <div class=\"label-value\">348 C</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>CMYK</label>\r\n          <div class=\"label-value\">87, 22, 100, 8</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Illustration color, icon color, Button hover state</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6>Secondary neutral colors for text - G400</h6>\r\n  <p>We use G400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 secondary-G200\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">G200</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#07BC81</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Button color</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 secondary-G100\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">G100</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#00C786</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Colored button background, Toasts design element</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile color-tile2 secondary-G0\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">G0</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#E1FFDF</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Toasts background</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<!-- tertiary color-->\r\n<div class=\"ui grid \">\r\n  <div class=\"five wide column\">\r\n    <h6>Tertiary neutral colors for text - O400</h6>\r\n    <p>We use O400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n    <p><span class=\"sb-doc-condition-sign\">*</span> primarily to indicate warning and to indicate destructive actions.</p>\r\n  </div>\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-space-30\"></div>\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile tertiary\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block fullrow\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">O400 - Tango <span class=\"sb-doc-condition-sign\">*</span>approx</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#E55A28</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>RGB</label>\r\n          <div class=\"label-value\">229, 90, 40</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>PMS</label>\r\n          <div class=\"label-value\">7579 C</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>CMYK</label>\r\n          <div class=\"label-value\">5, 79, 99, 0</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Illustration color, icon color, Label color, Notification background, Button hover state</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"three wide column computer only\"></div>\r\n \r\n    <h6>Tertiary neutral colors for text - O400</h6>\r\n    <p>We use O400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n  \r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 tertiary-O100\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">O100</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#FFA11D</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Colored button background, Toasts design element, Icon color, Button color</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 tertiary-O0\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">O0</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#FEEDD7</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Toasts background</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<!-- red color-->\r\n<div class=\"ui grid\">\r\n    <h6>Red neutral colors - R400</h6>\r\n    <p>We use R400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n  \r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 red-R400\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">R400</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#FF4558</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Illustration color, icon color, Label color, Notification background</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 red-R100\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">R100</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#FF6979</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Colored button background, Toasts design element, Icon color</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 red-R0\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">R0</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#FBCCD1</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Toasts background</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<!-- grey color-->\r\n<div class=\"ui grid \">\r\n  <div class=\"five wide column\">\r\n    <h6>Grey Neutrals colors for font</h6>\r\n    <p>Muted and neutral palettes are derived from Gray. Their varying degrees of saturation allow for the appropriate level of warmth across marketing and product.</p>\r\n  </div>\r\n  <div class=\"four wide column\">\r\n    <div class=\"sb-doc-space-30\"></div>\r\n    <div class=\"sb-doc-color-block\">\r\n      <div class=\"color-tile grey-T800\"></div>\r\n      <div class=\"color-details\">\r\n        <div class=\"block\">\r\n          <label>Name</label>\r\n          <div class=\"label-value\">T800</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>HEX</label>\r\n          <div class=\"label-value\">#333333</div>\r\n        </div>\r\n        <div class=\"block\">\r\n          <label>Percentage Color</label>\r\n          <div class=\"label-value\">0%</div>\r\n        </div>\r\n        <div class=\"block fullrow\">\r\n          <label>Usage</label>\r\n          <div class=\"label-value\">Secoundary Text color</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"three wide column computer only\"></div>\r\n \r\n    <h6>Grey neutral colors  - T400</h6>\r\n    <p>We use T400 as a basis for the RGB values to avoid shadows from desaturating other colors that appear beneath transparent neutral colors and is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\r\n  \r\n  \r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 grey-T400\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">T400</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#666666</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>Percentage Color</label>\r\n            <div class=\"label-value\">20%</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Subheading one</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 grey-T300\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">T300</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#969696</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>Percentage Color</label>\r\n            <div class=\"label-value\">39%</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Place holder text, Disable button text</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 grey-T200\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">T200</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#99999</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>Percentage Color</label>\r\n            <div class=\"label-value\">40%</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Subheading two</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 grey-T100\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">T100</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#CCCCCC</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>Percentage Color</label>\r\n            <div class=\"label-value\">60%</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Secondary Button outline, Divider line, Icon color, Disable button background</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"sb-doc-color-block\">\r\n        <div class=\"color-tile color-tile2 grey-T0\"></div>\r\n        <div class=\"color-details\">\r\n          <div class=\"block\">\r\n            <label>Name</label>\r\n            <div class=\"label-value\">T0</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>HEX</label>\r\n            <div class=\"label-value\">#F2F2F2</div>\r\n          </div>\r\n          <div class=\"block\">\r\n            <label>Percentage Color</label>\r\n            <div class=\"label-value\">75%</div>\r\n          </div>\r\n          <div class=\"block fullrow\">\r\n            <label>Usage</label>\r\n            <div class=\"label-value\">Place holder active background</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"docs-sections sb-doc-hidden\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->"

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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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

/***/ "./src/app/gridlayout/gridlayout.component.html":
/*!******************************************************!*\
  !*** ./src/app/gridlayout/gridlayout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<p>Layout size for containers for different device resolutions (Mobile, Tablets, Laptops, Desktop (including large screen resolutions like 1920x1080px), Media Quries (different break points for mentioned resolutions)</p>\r\n<h4>Desktop screen resolution stats India</h4>\r\n<p>Source - <a href=\"Source - http://gs.statcounter.com/screen-resolution-stats/desktop/india\">http://gs.statcounter.com/screen-resolution-stats/desktop/india</a>\r\n</p>\r\n<div class=\"img-block\"><img src=\"docs/assets/images/gridlayout.jpg\" width=\"100%\" alt=\"\" title=\"\" /></div>\r\n\r\n    <hr class=\"sb-doc-hr\">\r\n\r\n<h4>Grid breakpoint</h4>\r\n<p>Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices, but not the first xs breakpoint).</p>\r\n\r\n<h4>Grid options</h4>\r\n<p>See how aspects of the grid system work across multiple devices with a handy table.</p>\r\n\r\n<div class=\"img-block\"><img src=\"docs/assets/images/gridoptions.jpg\" width=\"100%\" alt=\"\" title=\"\" /></div>\r\n\r\n<h4>Desktop grid layout</h4>\r\n<p>1366 x 768 - 12 columns with 14px gutter space</p>\r\n<div class=\"img-block\"><img src=\"docs/assets/images/1366x768layout.jpg\" width=\"100%\" alt=\"\" title=\"\" /></div>\r\n\r\n\r\n\r\n<div class=\"docs-sections sb-doc-hidden\" *ngFor=\"let section of sections;\">\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/gridlayout/gridlayout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gridlayout/gridlayout.component.ts ***!
  \****************************************************/
/*! exports provided: GridlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridlayoutComponent", function() { return GridlayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridlayoutComponent = /** @class */ (function () {
    function GridlayoutComponent() {
        this.pageTitle = 'Grid Layout';
        this.sections = [
            {
                expandCode: false,
                title: 'gridlayout',
                demoCode: "\n     \n      ",
                copyCode: "\n     \n      "
            }
        ];
    }
    GridlayoutComponent.prototype.ngOnInit = function () {
    };
    GridlayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridlayout',
            template: __webpack_require__(/*! ./gridlayout.component.html */ "./src/app/gridlayout/gridlayout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridlayoutComponent);
    return GridlayoutComponent;
}());



/***/ }),

/***/ "./src/app/labels/labels.component.html":
/*!**********************************************!*\
  !*** ./src/app/labels/labels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
                demoCode: "\n     \n      ",
                copyCode: "\n    \n      "
            },
            {
                expandCode: false,
                title: 'label States',
                demoCode: "\n    \n      ",
                copyCode: "\n     \n      "
            },
            {
                expandCode: false,
                title: 'Colored labels',
                demoCode: "\n   \n      ",
                copyCode: "\n    \n      "
            },
            {
                expandCode: false,
                title: 'label Sizes',
                demoCode: "\n     \n      ",
                copyCode: "\n   \n      "
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n\r\n<!--Large Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Large Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"largemodal = !largemodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showLargeModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'large'\"\r\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showLargeModal = !showLargeModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showLargeModal = !showLargeModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showLargeModal = !showLargeModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"largemodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"largeModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"largeModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Large Modal-->\r\n\r\n<!--Normal Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Normal Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"normalmodal = !normalmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showNormalModal = !showNormalModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showNormalModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'normal'\" class=\"sb-modal\" appBodyScroll (dismissed)=\"showNormalModal = !showNormalModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showNormalModal = !showNormalModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showNormalModal = !showNormalModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"normalmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"normalModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"normalModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Normal Modal-->\r\n\r\n<!--Small Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Small Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"smallmodal = !smallmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showSmallModal = !showSmallModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showSmallModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\r\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showSmallModal = !showSmallModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showSmallModal = !showSmallModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showSmallModal = !showSmallModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"smallmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"smallModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"smallModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Small Modal-->\r\n\r\n<!--Full screen Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Fullscreen Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"fullscreenmodal = !fullscreenmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showFullscreenModal = !showFullscreenModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showFullscreenModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'fullscreen'\" class=\"sb-modal sb-modal-fullscreen\" appBodyScroll\r\n      (dismissed)=\"showFullscreenModal = !showFullscreenModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showFullscreenModal = !showFullscreenModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\"\r\n          (click)=\"showFullscreenModal = !showFullscreenModal\">\r\n          No\r\n        </button>\r\n    </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"fullscreenmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"fullscreenModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"fullscreenModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Fullscreen Modal-->\r\n\r\n<!--Success Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Success Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"successmodal = !successmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-success sb-btn-normal\" (click)=\"showSuccessModal = !showSuccessModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showSuccessModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'small'\" class=\"sb-modal sb-success\" appBodyScroll (dismissed)=\"showSuccessModal = !showSuccessModal\"\r\n      #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-success\" (click)=\"showSuccessModal = !showSuccessModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-success\" (click)=\"showSuccessModal = !showSuccessModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"successmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"successModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"successModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Success Modal-->\r\n\r\n<!--Error Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Error Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"errormodal = !errormodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"showErrorModal = !showErrorModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showErrorModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\r\n      class=\"sb-modal sb-error\" appBodyScroll (dismissed)=\"showErrorModal = !showErrorModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-error\" (click)=\"showErrorModal = !showErrorModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-error\" (click)=\"showErrorModal = !showErrorModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"errormodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"errorModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"errorModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Danger Modal-->\r\n\r\n<!--WarningModal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Warning Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"warningmodal = !warningmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-warning sb-btn-normal\" (click)=\"showWarningModal = !showWarningModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showWarningModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'small'\" class=\"sb-modal sb-warning\" appBodyScroll (dismissed)=\"showWarningModal = !showWarningModal\"\r\n      #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-warning\" (click)=\"showWarningModal = !showWarningModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-warning\" (click)=\"showWarningModal = !showWarningModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"warningmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"warningModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n        <code [highlight]=\"warningModalCode\"></code>\r\n      </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Danger Modal-->\r\n\r\n<!--Page Content-->"

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

module.exports = "<p>\r\n  overview works!\r\n</p>\r\n"

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

/***/ "./src/app/page-section/page-section.component.html":
/*!**********************************************************!*\
  !*** ./src/app/page-section/page-section.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/page-section/page-section.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page-section/page-section.component.ts ***!
  \********************************************************/
/*! exports provided: PageSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSectionComponent", function() { return PageSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageSectionComponent = /** @class */ (function () {
    function PageSectionComponent() {
        this.pageTitle = 'Page Section / Carousel';
        this.sections = [
            {
                expandCode: false,
                title: 'Page Section / Carousel',
                demoCode: "\n      \n     ",
                copyCode: "\n      \n      "
            }
        ];
    }
    PageSectionComponent.prototype.ngOnInit = function () {
    };
    PageSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-section',
            template: __webpack_require__(/*! ./page-section.component.html */ "./src/app/page-section/page-section.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageSectionComponent);
    return PageSectionComponent;
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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

module.exports = "<div class=\"sb-branding\">\r\n  <div><img src=\"https://project-sunbird.atlassian.net/secure/projectavatar?pid=10000&avatarId=10512&size=xxlarge\"\r\n      width=\"100%\" /></div>\r\n  <h4 class=\"sb-doc-app-title\">Sunbird - Design System</h4>\r\n</div>\r\n<ul>\r\n  <li>\r\n    <h4>Base</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/gridlayout\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Grid & Layout</a></li>\r\n      <li><a routerLink=\"/spacing\" routerLinkActive=\"active\">Spacing</a></li>\r\n      <li><a routerLink=\"/typography\" routerLinkActive=\"active\">Typography</a></li>\r\n      <li><a routerLink=\"/colors\" routerLinkActive=\"active\">Colors</a></li>\r\n      <li><a routerLink=\"/labels\" routerLinkActive=\"active\">Labels</a></li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <h4>Components</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/buttons\" routerLinkActive=\"active\">Buttons</a></li>\r\n      <li><a routerLink=\"/modals\" routerLinkActive=\"active\">Modals</a></li>\r\n      <li><a routerLink=\"/search\" routerLinkActive=\"active\">Search</a></li>\r\n      <li><a routerLink=\"/tables\" routerLinkActive=\"active\">Tables</a></li>\r\n      <li><a routerLink=\"/loaders\" routerLinkActive=\"active\">Loaders</a></li>\r\n      <li><a routerLink=\"/forms\" routerLinkActive=\"active\">Forms</a></li>\r\n      <li><a routerLink=\"/toasters\" routerLinkActive=\"active\">Toasters</a></li>\r\n      <li><a routerLink=\"/cards\" routerLinkActive=\"active\">Cards</a></li>\r\n      <li><a routerLink=\"/page-section\" routerLinkActive=\"active\">Page Sections</a></li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <h4>Pages</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/buttons\" routerLinkActive=\"active\">Library/Courses</a></li>\r\n    </ul>\r\n  </li>\r\n</ul>"

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
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: ["\n   \n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/spacing/spacing.component.html":
/*!************************************************!*\
  !*** ./src/app/spacing/spacing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<p>Space is everywhere. CSS uses properties like padding, margin, and absolute positioning’s left, right, top and bottom to separate objects. Across five libraries (Bootstrap, Salesforce Lightning, Foundation, a previous project, and a current project), I compared occurrence of these space properties relative to property groups of color, size, type, layout and more.</p>\r\n\r\n<h4>8-Point Grid System</h4>\r\n<p>I’ve used design systems like Bootstrap or Foundation to jumpstart web projects, even tried to build a few similar systems myself. It wasn’t until recently that I realized components like buttons can be beautifully laid out individually but degrade the overall design when set into a larger soup of elements and content. This is because reaching an aesthetically pleasing composition to the overall page is difficult to consistently create. I can use my design eye to nudge a few elements here or there but I can’t rely on a team of designers and developers to share my same vision. Without a system to define the spacing relationships of my elements it’s difficult to create consistency.</p>\r\n\r\n<p>In this comparison you can see an 8pt grid system vertically aligning the elements of a form versus a popular design system that utilizes arbitrary numbers to space and size elements.</p>\r\n\r\n\r\n<div class=\"img-block\"><img src=\"docs/assets/images/8ptspace.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<h4>Why? 8-Point Grid System</h4>\r\n<p>The variety of screen sizes and pixel densities has continued to increase making the work of asset generation more complicated for designers. Utilizing an even number like 8 to size and space elements makes scaling for a wide variety of devices easy and consistent.</p>\r\n<p>Smaller components, such as iconography and typography, can align to a 4dp grid.</p>\r\n\r\n<div class=\"img-block\"><img src=\"docs/assets/images/space-02.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n\r\n    <hr class=\"sb-doc-hr\">\r\n\r\n    <h4>Borders in the 8pt grid system</h4>\r\n<p>You’ve got an auto width button meaning the content determines its width and you’ve decided to add an 8px padding on the left and right of it. Your current brand style calls for an outlined button. How do you count the border?</p>\r\n\r\n<div class=\"img-block\"><img src=\"docs/assets/images/space-03.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n\r\n<hr class=\"sb-doc-hr\">\r\n\r\n<h4>Button Style</h4>\r\n<p>Loream ipsum</p>\r\n\r\n<div class=\"img-block\"><img src=\"docs/assets/images/space-04.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n<div class=\"img-block\"><img src=\"docs/assets/images/space-05.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n\r\n\r\n\r\n<div class=\"docs-sections sb-doc-hidden\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/spacing/spacing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spacing/spacing.component.ts ***!
  \**********************************************/
/*! exports provided: SpacingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacingComponent", function() { return SpacingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpacingComponent = /** @class */ (function () {
    function SpacingComponent() {
        this.pageTitle = 'Space in Design Systems';
        this.sections = [
            {
                expandCode: false,
                title: 'gridlayout',
                demoCode: "\n     \n      ",
                copyCode: "\n     \n      "
            }
        ];
    }
    SpacingComponent.prototype.ngOnInit = function () {
    };
    SpacingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spacing',
            template: __webpack_require__(/*! ./spacing.component.html */ "./src/app/spacing/spacing.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpacingComponent);
    return SpacingComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.html":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.demoCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.demoCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\" *ngIf=\"template.title\">\r\n  {{template.title}}\r\n</h1>\r\n<!--/Page Heading-->\r\n  \r\n <!--Page Content-->\r\n<ng-container *ngIf=\"template.sections\">\r\n  <div class=\"docs-sections\" *ngFor=\"let section of template.sections;\">\r\n  \r\n    <h4 class=\"docs-sectionHeading\" *ngIf=\"section.title\">\r\n      {{section.title}}\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n    </h4> \r\n  \r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\" *ngIf=\"section.demoCode\">\r\n    <ng-template component-host></ng-template>\r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode && section.copyCode\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"section.copyCode\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n    \r\n  </div>\r\n</ng-container>\r\n<!--Page Content-->\r\n"

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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n\r\n\r\n<button class=\"sb-btn sb-btn-info sb-btn-normal\" (click)=\"InfoToaster();\">Info</button>\r\n<button class=\"sb-btn sb-btn-success sb-btn-normal\" (click)=\"SuccessToaster();\">Success</button>\r\n<button class=\"sb-btn sb-btn-warning sb-btn-normal\" (click)=\"WarningToaster();\">Warning</button>\r\n<button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"ErrorToaster();\">Error</button>\r\n\r\n\r\n<br><br>\r\n\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
        this.pageTitle = 'Toasters';
        this.sections = [
            {
                expandCode: false,
                title: 'Standard Information Toaster',
                demoCode: "\n      <div class=\"sb-toast sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toast\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Success Toaster',
                demoCode: "\n      <div class=\"sb-toast sb-toast-success sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toast sb-toast-success\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Warning Toaster',
                demoCode: "\n      <div class=\"sb-toast sb-toast-warning sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toast sb-toast-warning sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Error Toaster',
                demoCode: "\n      <div class=\"sb-toast sb-toast-danger sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toast sb-toast-danger sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-icon\"></div>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">title comes here</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            }
        ];
    }
    ToastersComponent.prototype.InfoToaster = function () {
        this.iziToast.show({
            title: "Standard Information Toaster",
            message: "Message come here",
            class: "sb-toast sb-toast-info",
            icon: 'icon-person',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->\r\n"

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

module.exports = __webpack_require__(/*! G:\2019\ekstep\sb-ui-style-guide\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map