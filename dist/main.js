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
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gridlayout/gridlayout.component */ "./src/app/gridlayout/gridlayout.component.ts");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/spacing/spacing.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page-section/page-section.component */ "./src/app/page-section/page-section.component.ts");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/app/form-elements/form-elements.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/tooltip/tooltip.component.ts");

























var routes = [
    { path: '', component: _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_15__["GridlayoutComponent"] },
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
    { path: 'tabs', component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"] },
    { path: 'select', component: _select_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"] },
    { path: 'gridlayout', component: _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_15__["GridlayoutComponent"] },
    { path: 'spacing', component: _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_16__["SpacingComponent"] },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_17__["CardsComponent"] },
    { path: 'page-section', component: _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_18__["PageSectionComponent"] },
    { path: 'form-elements', component: _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_19__["FormElementsComponent"] },
    { path: 'pagination', component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"] },
    { path: 'rating', component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_21__["RatingComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"] },
    { path: 'tooltip', component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_24__["TooltipComponent"] }
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

module.exports = "<div class=\"docs-body\">\r\n    <div class=\"docs-sidebar\" [class.docs-hideSidebar]=\"!showSidebar\">\r\n        <i class=\"fa fa-bars docs-toggleSidebar\" (click)=\"showSidebar = !showSidebar\" title=\"Toggle Sidebar\"></i>\r\n        <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"docs-content\" [class.docs-fullWidth]=\"!showSidebar\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

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
        this.showSidebar = true;
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
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/lib/languages/htmlbars */ "./node_modules/highlight.js/lib/languages/htmlbars.js");
/* harmony import */ var highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _pipes_keep_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/keep-html.pipe */ "./src/app/pipes/keep-html.pipe.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/modals/modals.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/labels/labels.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/loaders/loaders.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./toasters/toasters.component */ "./src/app/toasters/toasters.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gridlayout/gridlayout.component */ "./src/app/gridlayout/gridlayout.component.ts");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/spacing/spacing.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./page-section/page-section.component */ "./src/app/page-section/page-section.component.ts");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/app/form-elements/form-elements.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/tooltip/tooltip.component.ts");










































/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
    return [
        { name: 'html', func: highlight_js_lib_languages_htmlbars__WEBPACK_IMPORTED_MODULE_12___default.a },
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_10___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9___default.a }
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pipes_keep_html_pipe__WEBPACK_IMPORTED_MODULE_16__["EscapeHtmlPipe"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_18__["TemplateComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsComponent"],
                _modals_modals_component__WEBPACK_IMPORTED_MODULE_20__["ModalsComponent"],
                _labels_labels_component__WEBPACK_IMPORTED_MODULE_21__["LabelsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_22__["TypographyComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_25__["TablesComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_26__["ColorsComponent"],
                _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_27__["LoadersComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_28__["FormsComponent"],
                _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_29__["ToastersComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_30__["TabsComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_31__["SelectComponent"],
                _gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_32__["GridlayoutComponent"],
                _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_33__["SpacingComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_34__["CardsComponent"],
                _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_35__["PageSectionComponent"],
                _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_36__["FormElementsComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_37__["PaginationComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_38__["RatingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_40__["FooterComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_41__["TooltipComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"].forRoot({ languages: hljsLanguages }),
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__["SuiModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_15__["Ng2IziToastModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_6__["SlickModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__["SuiTabsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__["SuiSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n  <a href=\"docs/assets/design-system/index.html#/screens/344424222\"  target=\"_blank\" class=\"sb-reference-url\">(reference link)</a>\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
                demoCode: "\n      <button class=\"sb-btn sb-btn-outline-primary sb-btn-normal mr-8\">Primary Button/Info</button>\n      <button class=\"sb-btn sb-btn-outline-secondary sb-btn-normal mr-8\">Secondary/Success</button>\n      <button class=\"sb-btn sb-btn-outline-tertiary sb-btn-normal mr-8\">Tertiary/Warning</button>\n      <button class=\"sb-btn sb-btn-outline-error sb-btn-normal mr-8\">Error</button>\n      <button class=\"sb-btn sb-btn-outline-gray sb-btn-normal\">Default</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-outline-primary sb-btn-normal mr-8\">Primary Button/Info</button>\n      <button class=\"sb-btn sb-btn-outline-secondary sb-btn-normal mr-8\">Secondary/Success</button>\n      <button class=\"sb-btn sb-btn-outline-tertiary sb-btn-normal mr-8\">Tertiary/Warning</button>\n      <button class=\"sb-btn sb-btn-outline-error sb-btn-normal mr-8\">Error</button>\n      <button class=\"sb-btn sb-btn-outline-gray sb-btn-normal\">Default</button>\n      "
            },
            {
                expandCode: false,
                title: 'Colored Buttons',
                demoCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal mr-8\">Primary Button/Info</button>\n      <button class=\"sb-btn sb-btn-secondary sb-btn-normal mr-8\">Secondary/Success</button>\n      <button class=\"sb-btn sb-btn-tertiary sb-btn-normal mr-8\">Tertiary/Warning</button>\n      <button class=\"sb-btn sb-btn-error sb-btn-normal mr-8\">Error</button>\n      <button class=\"sb-btn sb-btn-gray sb-btn-normal\">Gray</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal mr-8\">Primary Button/Info</button>\n      <button class=\"sb-btn sb-btn-secondary sb-btn-normal mr-8\">Secondary/Success</button>\n      <button class=\"sb-btn sb-btn-tertiary sb-btn-normal mr-8\">Tertiary/Warning</button>\n      <button class=\"sb-btn sb-btn-error sb-btn-normal mr-8\">Error</button>\n      <button class=\"sb-btn sb-btn-gray sb-btn-normal\">Gray</button>\n      "
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
                demoCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn\">View More<i class=\"chevron down icon\"></i></button>\n<button class=\"sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn\"><i class=\"home icon\"></i>Home</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-outline-error sb-left-icon-btn\"><i class=\"trash alternate outline icon\"></i>Remove All</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn\">View More<i class=\"chevron down icon\"></i></button>\n<button class=\"sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn\"><i class=\"home icon\"></i>Home</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn\"><i class=\"trash alternate outline icon\"></i>Remove All</button>\n      "
            },
            {
                expandCode: false,
                title: 'Text Link Buttons',
                demoCode: "\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary\">Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary\">Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary\">Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-error\">Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray\">Text Link</button>\n<div class=\"sb-spacer48\"></div>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n<button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary\">Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary\">Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary\">Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-error\">Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray\">Text Link</button>\n      <div class=\"sb-spacer48\"></div>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      <button class=\"sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn\"><i class=\"home icon\"></i>Text Link</button>\n      "
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
                title: 'Button Sizes',
                demoCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-xs\">mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\">normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-sm\">small</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-md\">medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-lg\">large</button>\n      <div class=\"sb-spacer48\"></div>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs\"><i class=\"home icon\"></i>Mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal\"><i class=\"home icon\"></i>Normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm\"><i class=\"home icon\"></i>Small</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md\"><i class=\"home icon\"></i>Medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg\"><i class=\"home icon\"></i>Large</button>\n      ",
                copyCode: "\n      <button class=\"sb-btn sb-btn-primary sb-btn-xs\">Mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\">Normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-sm\">Small</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-md\">medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-btn-lg\">large</button>\n      <div class=\"sb-spacer48\"></div>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs\"><i class=\"home icon\"></i>Mini</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal\"><i class=\"home icon\"></i>Normal</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm\"><i class=\"home icon\"></i>Small</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md\"><i class=\"home icon\"></i>Medium</button>\n      <button class=\"sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg\"><i class=\"home icon\"></i>Large</button>\n      "
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
                demoCode: "\n      <div class=\"masonry-grid\">\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning system and its application\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : Limits of artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress success\">\n            <div class=\"bar\" style=\"width: 100%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structures\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Global positioning system and its application & Limits of artificial ...\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n              \u0645\u0648\u0636\u0648\u0639: \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n              </div>\n              <div class=\"sb-card-meta-item\">\n              \u0630\u06CC\u0644\u06CC \u0645\u0648\u0636\u0648\u0639: \u0645\u0635\u0646\u0648\u0639\u06CC \u0627\u0646\u0679\u06CC\u0644\u06CC \u062C\u0646\u0633 \u06A9\u06CC \u062D\u062F\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0648\u0631 \u0645\u0635\u0646\u0648\u0639\u06CC \u062D\u062F\u0648\u062F \n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning system and its application\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : Limits of artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress success\">\n            <div class=\"bar\" style=\"width: 100%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n                Topic : Global positioning\n              </div>\n              <div class=\"sb-card-meta-item\">\n                Subtopic : artificial intelligence\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structures\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Global positioning system and its application & Limits of artificial ...\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta course\">\n              <div class=\"sb-card-meta-item mb-15\">\n              \u0645\u0648\u0636\u0648\u0639: \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n              </div>\n              <div class=\"sb-card-meta-item\">\n              \u0630\u06CC\u0644\u06CC \u0645\u0648\u0636\u0648\u0639: \u0645\u0635\u0646\u0648\u0639\u06CC \u0627\u0646\u0679\u06CC\u0644\u06CC \u062C\u0646\u0633 \u06A9\u06CC \u062D\u062F\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u06AF\u0644\u0648\u0628\u0644 \u067E\u0648\u0632\u06CC\u0634\u0646\u0646\u06AF \u0633\u0633\u0679\u0645 \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0648\u0631 \u0645\u0635\u0646\u0648\u0639\u06CC \u062D\u062F\u0648\u062F \n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n          <sui-progress class=\"ui progress\">\n            <div class=\"bar\" style=\"width: 30%;\">\n              <div class=\"progress\">100%</div>\n            </div>\n            <div class=\"label\"></div>\n          </sui-progress>\n        </div>\n      </div>\n      "
            },
            {
                expandCode: false,
                title: 'Resource Card',
                demoCode: "\n      <div class=\"masonry-grid\">\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Worksheet</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n                Subject : English\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Class : Class 1,Class 2,Class 3,Class 4,Class 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Medium : Other\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Book</div>\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">\u0648\u0631\u06A9\u0634\u0627\u067E</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n              \u0645\u0636\u0645\u0648\u0646: \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u06A9\u0644\u0627\u0633: \u06A9\u0644\u0627\u0633 1\u060C \u06A9\u0644\u0627\u0633 2\u060C \u06A9\u0644\u0627\u0633 3\u060C \u06A9\u0644\u0627\u0633 4\u060C \u06A9\u0644\u0627\u0633 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u062F\u0631\u0645\u06CC\u0627\u0646\u06C1: \u062F\u06CC\u06AF\u0631\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u0688\u06CC\u0679\u0627 \u0688\u06BE\u0627\u0646\u0686\u06C1 \u0627\u0648\u0631 \u0627\u0644\u06AF\u0648\u0631\u062A\u06BE\u0645 - \u0627\u06C1\u062F\u0627\u0641 1 \u06A9\u062A\u0627\u0628\u0686\u06C1\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Worksheet</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n                Subject : English\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Class : Class 1,Class 2,Class 3,Class 4,Class 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n                Medium : Other\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure and Algorithm - Assignment 1 Paperback\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">Book</div>\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n            Data Structure\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n            Academy of European Law (ERA)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n\n      <div class=\"sb-card\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\n        <div class=\"sb-card-body\">\n          <div class=\"sb-card-metas\">\n            <div class=\"sb-card-image mr-16\">\n              <img src=\"assets/images/book.png\">\n            </div>\n            <div class=\"sb-card-meta non-course\">\n              <div class=\"d-flex mb-auto\">\n                <div class=\"sb-card-label\">\u0648\u0631\u06A9\u0634\u0627\u067E</div>\n                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\n              </div>\n              <div class=\"sb-card-meta-item ellipsis\">\n              \u0645\u0636\u0645\u0648\u0646: \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u06A9\u0644\u0627\u0633: \u06A9\u0644\u0627\u0633 1\u060C \u06A9\u0644\u0627\u0633 2\u060C \u06A9\u0644\u0627\u0633 3\u060C \u06A9\u0644\u0627\u0633 4\u060C \u06A9\u0644\u0627\u0633 5\n              </div>\n              <div class=\"sb-card-meta-item ellipsis mt-4\">\n              \u062F\u0631\u0645\u06CC\u0627\u0646\u06C1: \u062F\u06CC\u06AF\u0631\n              </div>\n            </div>\n          </div>\n          <h4 class=\"sb-card-title\">\n          \u0688\u06CC\u0679\u0627 \u0688\u06BE\u0627\u0646\u0686\u06C1 \u0627\u0648\u0631 \u0627\u0644\u06AF\u0648\u0631\u062A\u06BE\u0645 - \u0627\u06C1\u062F\u0627\u0641 1 \u06A9\u062A\u0627\u0628\u0686\u06C1\n          </h4>\n          <div class=\"sb-card-org ellipsis\">\n          \u06CC\u0648\u0631\u067E\u06CC \u0642\u0627\u0646\u0648\u0646 \u0627\u06A9\u06CC\u0688\u0645\u06CC (\u0627\u06CC\u0631\u0627 \u0627\u06D2)\n          </div>\n        </div>\n        <div class=\"sb-card-progressbar\">\n        </div>\n      </div>\n      "
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
                demoCode: "\n\n      ",
                copyCode: "\n\n      "
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

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <footer class=\"footer\">\r\n      <div class=\"ui container\">\r\n        <div class=\"ui grid stackable px-20\">\r\n          <div class=\"four wide column footerMenu mr-auto\">\r\n            <ul class=\"p-0 m-0\">\r\n              <li class=\"mb-15\">\r\n                <a>\r\n                  Verticals\r\n                </a>\r\n              </li>\r\n              <li class=\"mb-15\">\r\n                <a>\r\n                  Help Center\r\n                </a>\r\n              </li>\r\n              <li class=\"mb-15\">\r\n                <a>\r\n                  Partners\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"download-diksha\">\r\n            <div class=\"diksha-logo p-15\">\r\n              <div class=\"mobile-circles\">\r\n                <div class=\"big-box border-round border-r50\"></div>\r\n                <div class=\"oval-box border-round ml-20 ml-10\"></div>\r\n                <div class=\"small-box border-round border-r50 ml-20 mr-10\"></div>\r\n                <div class=\"small-box border-round border-r50\"></div>\r\n              </div>\r\n              <label class=\"d-block mb-10\">Download DIKSHA for Mobile</label>\r\n              <a class=\"d-block pb-10 app-download\">\r\n                <img class=\"playStore-img\" src=\"assets/images/google_playstore.png\" alt=\"\">\r\n              </a>\r\n              <p class=\"d-block\">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide column contantDetails\">\r\n            <label class=\"d-block mb-10\">\r\n              Contact for queries:\r\n            </label>\r\n            <a class=\"d-block mb-30\">\r\n              support@diksha-ncte.freshdesk.com\r\n            </a>\r\n            <label class=\"d-block\">\r\n              <a>\r\n                Terms of use\r\n              </a>\r\n              <span>| &copy; 2019, DIKSHA</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.pageTitle = 'Footer';
        this.sections = [{
                expandCode: false,
                title: 'Footer Bar',
                demoCode: "\n    <footer class=\"footer\" *ngIf=\"showFooter\">\n    <div class=\"ui container\">\n  <div class=\"ui grid stackable\">\n    <div class=\"four wide column footerMenu mr-auto\">\n      <ul class=\"p-0 m-0\">\n        <li class=\"mb-15\">\n          <a>\n            Verticals\n          </a>\n        </li>\n        <li class=\"mb-15\">\n          <a>\n            Help Center\n          </a>\n        </li>\n        <li class=\"mb-15\">\n          <a>\n            Partners\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"download-diksha\">\n      <div class=\"diksha-logo p-15\">\n        <div class=\"mobile-circles\">\n          <div class=\"big-box border-round border-r50\"></div>\n          <div class=\"oval-box border-round ml-20 ml-10\"></div>\n          <div class=\"small-box border-round border-r50 ml-20 mr-10\"></div>\n          <div class=\"small-box border-round border-r50\"></div>\n        </div>\n        <label class=\"d-block pb-10\">Download DIKSHA for Mobile</label>\n        <a class=\"d-block pb-10 app-download\">\n          <img class=\"playStore-img\" src=\"/assets/images/google_playstore.png\"\n            alt=\"\">\n        </a>\n        <p class=\"d-block\">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.</p>\n      </div>\n    </div>\n    <div class=\"four wide column contantDetails\">\n      <label class=\"d-block mb-10\">\n        Contact for queries:\n      </label>\n      <a class=\"d-block mb-30\">\n        support@diksha-ncte.freshdesk.com\n      </a>\n      <label class=\"d-block\">\n        <a >\n          Terms of use\n        </a>\n        <span>| &copy; 2019, DIKSHA</span>\n      </label>\n    </div>\n  </div>\n</div>\n</footer>\n      ",
                copyCode: "\n    <footer class=\"footer\" *ngIf=\"showFooter\">\n    <div class=\"ui container\">\n  <div class=\"ui grid stackable\">\n    <div class=\"four wide column footerMenu mr-auto\">\n      <ul class=\"p-0 m-0\">\n        <li class=\"mb-15\">\n          <a>\n            Verticals\n          </a>\n        </li>\n        <li class=\"mb-15\">\n          <a>\n            Help Center\n          </a>\n        </li>\n        <li class=\"mb-15\">\n          <a>\n            Partners\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"download-diksha\">\n      <div class=\"diksha-logo p-15\">\n        <div class=\"mobile-circles\">\n          <div class=\"big-box border-round border-r50\"></div>\n          <div class=\"oval-box border-round ml-20 ml-10\"></div>\n          <div class=\"small-box border-round border-r50 ml-20 mr-10\"></div>\n          <div class=\"small-box border-round border-r50\"></div>\n        </div>\n        <label class=\"d-block pb-10\">Download DIKSHA for Mobile</label>\n        <a class=\"d-block pb-10 app-download\">\n          <img class=\"playStore-img\" src=\"/assets/images/google_playstore.png\"\n            alt=\"\">\n        </a>\n        <p class=\"d-block\">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.</p>\n      </div>\n    </div>\n    <div class=\"four wide column contantDetails\">\n      <label class=\"d-block mb-10\">\n        Contact for queries:\n      </label>\n      <a class=\"d-block mb-30\">\n        support@diksha-ncte.freshdesk.com\n      </a>\n      <label class=\"d-block\">\n        <a >\n          Terms of use\n        </a>\n        <span>| &copy; 2019, DIKSHA</span>\n      </label>\n    </div>\n  </div>\n</div>\n</footer>\n      "
            }];
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form-elements/form-elements.component.html":
/*!************************************************************!*\
  !*** ./src/app/form-elements/form-elements.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n\r\n<!--Large Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Sample Form\r\n    <!-- <i class=\"fa fa-code text-gray docs-expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i> -->\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"ViewForm = !ViewForm\">View Form</button>\r\n    <sui-modal *ngIf=\"ViewForm\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'normal'\"\r\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"ViewForm = !ViewForm\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Sample Form\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        <div class=\"ui form\">\r\n          <div class=\"ui grid\">\r\n            <div class=\"twelve wide column\">\r\n              <div class=\"sb-field-group\">\r\n                <label>Full Name</label>\r\n                <div class=\"sb-field\">\r\n                  <input class=\"sb-form-control\" type=\"text\" placeholder=\"Enter full name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"six wide column pt-0\">\r\n              <label>Grade</label>\r\n              <sui-multi-select class=\"fluid selection\" labelField=\"name\" #multiSelect>\r\n                <sui-select-option *ngFor=\"let option of grade\" [value]=\"option\">\r\n                </sui-select-option>\r\n              </sui-multi-select>\r\n            </div>\r\n\r\n            <div class=\"six wide column pt-0\">\r\n              <label>Class</label>\r\n              <sui-multi-select class=\"fluid selection\" labelField=\"name\" #multiSelect>\r\n                <sui-select-option *ngFor=\"let option of class\" [value]=\"option\">\r\n                </sui-select-option>\r\n              </sui-multi-select>\r\n            </div>\r\n            <div class=\"six wide column pt-0\">\r\n              <label>Subject</label>\r\n              <sui-select class=\"fluid selection\" labelField=\"name\" #select>\r\n                <sui-select-option *ngFor=\"let option of subject\" [value]=\"option\">\r\n                </sui-select-option>\r\n              </sui-select>\r\n            </div>\r\n\r\n            <div class=\"six wide column pt-0\">\r\n              <label>Medium</label>\r\n              <sui-select class=\"fluid selection\" labelField=\"name\" #searchSelect>\r\n                <sui-select-option *ngFor=\"let option of medium\" [value]=\"option\">\r\n                </sui-select-option>\r\n              </sui-select>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"ViewForm = !ViewForm\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"ViewForm = !ViewForm\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Large Modal-->"

/***/ }),

/***/ "./src/app/form-elements/form-elements.component.scss":
/*!************************************************************!*\
  !*** ./src/app/form-elements/form-elements.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZWxlbWVudHMvZm9ybS1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form-elements/form-elements.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/form-elements/form-elements.component.ts ***!
  \**********************************************************/
/*! exports provided: FormElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsComponent", function() { return FormElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormElementsComponent = /** @class */ (function () {
    function FormElementsComponent() {
        this.pageTitle = 'Sample Forms';
        this.sections = [
            {
                expandCode: false,
                title: 'Form Elements',
            }
        ];
        this.grade = [{ name: 'grade1' }, { name: 'grade2' }, { name: 'grade3' }];
        this.class = [{ name: 'class1' }, { name: 'class2' }, { name: 'class3' }];
        this.medium = [{ name: 'English' }, { name: 'Kannada' }];
        this.subject = [{ name: 'English' }, { name: 'Kannada' }];
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    FormElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-elements',
            template: __webpack_require__(/*! ./form-elements.component.html */ "./src/app/form-elements/form-elements.component.html"),
            styles: [__webpack_require__(/*! ./form-elements.component.scss */ "./src/app/form-elements/form-elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormElementsComponent);
    return FormElementsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n      </div>\r\n      <!--/Display output-->\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\"  *ngIf=\"section.title === 'toggle'\">\r\n      <sui-checkbox class=\"toggle sb-toggle\">Toggle checkbox</sui-checkbox>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
                demoCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n      <input type=\"checkbox\" id=\"check1\" name=\"example\">\n      <label for=\"check1\">Make my profile visible</label>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n      <input type=\"checkbox\" name=\"example\">\n      <label>Make my profile visible</label>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Diabled Checkbox',
                demoCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n      <input type=\"checkbox\" id=\"check\" name=\"disabled\" disabled=\"disabled\">\n      <label for=\"check\">Make my profile visible</label>\n      </div>\n      ",
                copyCode: "\n      <div class=\"sb-checkbox sb-checkbox-primary\">\n      <input type=\"checkbox\" name=\"example\" disabled=\"disabled\">\n      <label>Make my profile visible</label>\n  </div>\n      "
            },
            {
                expandCode: false,
                title: 'Input Disabled',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control\" disabled type=\"text\" placeholder=\"Enter Mobile Number\">\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control\" disabled type=\"text\" placeholder=\"Enter Mobile Number\">\n      </div>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Input with Error',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control is-invalid\">\n      </div>\n      <small class=\"text-error\">Enter phone number</small>\n      </div>\n\n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control is-invalid\">\n      </div>\n      <small class=\"text-error\">Enter phone number</small>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Field Name',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control\" type=\"text\" placeholder=\"Enter Mobile Number\">\n          <i class=\"search icon sb-input-icon\"></i>\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Name</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control\" type=\"text\" placeholder=\"Enter Mobile Number\">\n          <i class=\"search icon sb-input-icon\"></i>\n      </div>\n      </div>\n  "
            },
            {
                expandCode: false,
                title: 'Input with Required',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Required field</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control required\" required>\n      </div>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Required field</label>\n      <div class=\"sb-field\">\n          <input class=\"sb-form-control required\" required>\n      </div>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Input with success',
                demoCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n      <div class=\"sb-field\">\n      <input class=\"sb-form-control is-valid\">\n      </div>\n      <small class=\"text-success\">Both password are matching</small>\n      </div>\n  \n      ",
                copyCode: "\n      \n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n      <div class=\"sb-field\">\n      <input class=\"sb-form-control is-valid\">\n      </div>\n      <small class=\"text-success\">Both password are matching</small>\n      </div>\n  \n      "
            },
            {
                expandCode: false,
                title: 'Radio',
                demoCode: "\n      <div class=\"sb-radio-btn sb-radio-primary\">\n        <input type=\"radio\" id=\"test1\" name=\"radio-group\" disabled=\"disabled\" checked>\n        <label for=\"test1\">Radio Button label</label>\n      </div>\n      <div class=\"sb-radio-btn sb-radio-primary\">\n        <input type=\"radio\" id=\"test2\" name=\"radio-group\">\n        <label for=\"test2\">Peach</label>\n      </div>\n    \n      ",
                copyCode: "\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test1\" name=\"radio-group\" disabled=\"disabled\" checked>\n        <label for=\"test1\">Radio Button label</label>\n      </div>\n      <div class=\"sb-radio sb-radio-primary\">\n        <input type=\"radio\" id=\"test2\" name=\"radio-group\">\n        <label for=\"test2\">Peach</label>\n      </div>\n      "
            },
            {
                expandCode: false,
                title: 'Text Area',
                demoCode: "\n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n          <div class=\"sb-field\">\n              <textarea rows=\"4\" class=\"sb-form-control\" placeholder=\"Enter summary\"></textarea>\n          </div>\n          </div>\n      ",
                copyCode: "\n      <div class=\"sb-field-group\">\n      <label>Field Label</label>\n          <div class=\"sb-field\">\n              <textarea rows=\"4\" class=\"sb-form-control\" placeholder=\"Enter summary\"></textarea>\n          </div>\n          </div>\n      "
            },
            {
                expandCode: false,
                title: 'toggle',
                demoCode: "\n      <sui-checkbox class=\"toggle\"></sui-checkbox>\n      ",
                copyCode: "\n    <sui-checkbox class=\"toggle\">Toggle checkbox</sui-checkbox>\n      "
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
                demoCode: "\n\n      ",
                copyCode: "\n\n      "
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

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n      <div class=\"ui container\">\r\n    <div class=\"sb-header\">\r\n      <div class=\"ui container fixed main menu \">\r\n        <div class=\"ui container d-flex\">\r\n          <div class=\"sb-header-logo d-flex mr-auto\">\r\n            <img src=\"https://dev.sunbirded.org/assets/images/sunbird_logo.png\" alt=\"sunbird\">\r\n          </div>\r\n          <div class=\"sb-header-links d-flex ml-auto computer only\">\r\n            <a class=\"item active\">Library</a>\r\n            <a class=\"item\">Course</a>\r\n          </div>\r\n          <i class=\"large bars icon link primary-color mobile only ml-auto my-auto\" (click)=\"showSideBar()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mobile only\">\r\n      <div class=\"ui sidebar right vertical menu\">\r\n        <ng-container>\r\n          <div class=\"item font-weight-bold\">\r\n            <i class=\"close link icon\" (click)=\"showSideBar()\" tabindex=\"0\" title=\"close\"></i>\r\n            <div class=\"ellipsis\">\r\n              firstName lastname\r\n            </div>\r\n          </div>\r\n          <div class=\"ui divider mt-0\"></div>\r\n          <a class=\"item\">\r\n            Library\r\n          </a>\r\n          <a class=\"item\">\r\n            Course\r\n          </a>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"sb-sub-header\">\r\n      <div class=\"blue-bar\">\r\n        <div class=\"ui container d-flex flex-ai-center\">\r\n          <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center computer only\"\r\n            title=\"Enter QR code\">\r\n            <i class=\"qrcode icon\"></i>\r\n            Enter QR code\r\n          </button>\r\n          <div class=\"sb-divider computer only\"></div>\r\n          <div class=\"sb-search-box mr-auto medium\">\r\n            <div class=\"input-div relative\">\r\n              <i class=\"search icon\"></i>\r\n              <input type=\"text\" name=\"filter_search\" class=\"sb-search-input\" placeholder=\"Search in All\">\r\n              <!-- <i class=\"close icon\"></i>\r\n                <div class=\"sb-loader\"></div> -->\r\n            </div>\r\n            <button class=\"sb-btn sb-btn-normal\" tabindex=\"0\">Search</button>\r\n          </div>\r\n          <div class=\"sb-header-links ml-auto d-flex flex-ai-center computer only\">\r\n            <div>Select Language :\r\n            </div>\r\n            <sui-select class=\"sb-sub-header-select\" placeholder=\"Choose\" #searchSelect>\r\n              <sui-select-option *ngFor=\"let option of language\" [value]=\"option.name\"></sui-select-option>\r\n            </sui-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"white-bar mobile only\">\r\n        <div class=\"ui container d-flex flex-ai-center\">\r\n          <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center mr-auto\"\r\n            title=\"Enter QR code\">\r\n            <i class=\"qrcode icon\"></i>\r\n            Enter QR code\r\n          </button>\r\n          <div class=\"sb-header-links ml-auto d-flex flex-ai-center\">\r\n            <sui-select class=\"sb-sub-header-select sb-btn sb-btn-normal sb-btn-outline-primary\" placeholder=\"Choose\" #searchSelect>\r\n              <sui-select-option *ngFor=\"let option of language\" [value]=\"option.name\"></sui-select-option>\r\n            </sui-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.pageTitle = 'Header';
        this.sections = [{
                expandCode: false,
                title: 'Header Bar',
                demoCode: "\n    <div class=\"sb-header\">\n    <div class=\"ui container fixed main menu \">\n      <div class=\"ui container d-flex\">\n        <div class=\"sb-header-logo d-flex mr-auto\">\n          <img src=\"http://localhost:3000/assets/images/sunbird_logo.png\" alt=\"sunbird\">\n        </div>\n        <div class=\"sb-header-links d-flex ml-auto computer only\">\n          <a class=\"item active\">Library</a>\n          <a class=\"item\">Course</a>\n        </div>\n        <i class=\"large bars icon link primary-color mobile only ml-auto my-auto\" (click)=\"showSideBar()\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"mobile only\">\n    <div class=\"ui sidebar right vertical menu\">\n      <ng-container *ngIf=\"userService.loggedIn\">\n        <div class=\"item font-weight-bold\">\n          <i class=\"close link icon\" (click)=\"showSideBar()\" tabindex=\"0\"\n            title=\"close\"></i>\n          <div class=\"ellipsis\">\n            firstName lastname\n          </div>\n        </div>\n        <div class=\"ui divider mt-0\"></div>\n        <a class=\"item\">\n          Library\n        </a>\n        <a class=\"item\">\n          Course\n        </a>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"sb-sub-header\">\n    <div class=\"blue-bar\">\n      <div class=\"ui container d-flex flex-ai-center\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center computer only\"\n          title=\"Enter QR code\">\n          <i class=\"qrcode icon\"></i>\n          Enter QR code\n        </button>\n        <div class=\"sb-divider computer only\"></div>\n        <div class=\"sb-search-box mr-auto medium\">\n          <div class=\"input-div relative\">\n            <i class=\"search icon\"></i>\n            <input type=\"text\" name=\"filter_search\" class=\"sb-search-input\" placeholder=\"Search in All\">\n            <!-- <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div> -->\n          </div>\n          <button class=\"sb-btn sb-btn-normal\" tabindex=\"0\">Search</button>\n        </div>\n        <div class=\"sb-header-links ml-auto d-flex flex-ai-center computer only\">\n          <div>Select Language :\n          </div>\n          <sui-select class=\"sb-sub-header-select\" placeholder=\"Choose\" #searchSelect>\n          <sui-select-option *ngFor=\"let option of language\" [value]=\"option\">\n          </sui-select>\n        </div>\n      </div>\n    </div>\n    <div class=\"white-bar mobile only\">\n      <div class=\"ui container d-flex flex-ai-center\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center mr-auto\" title=\"Enter QR code\">\n          <i class=\"qrcode icon\"></i>\n          Enter QR code\n        </button>\n        <div class=\"sb-header-links ml-auto d-flex flex-ai-center\">\n          <sui-select class=\"sb-sub-header-select sb-btn sb-btn-normal sb-btn-outline-primary\" placeholder=\"Choose\" #searchSelect>\n            <sui-select-option *ngFor=\"let option of language\" [value]=\"option\">\n          </sui-select>\n        </div>\n      </div>\n    </div>\n  </div>\n      ",
                copyCode: "\n    <div class=\"sb-header\">\n    <div class=\"ui container fixed main menu \">\n      <div class=\"ui container d-flex\">\n        <div class=\"sb-header-logo d-flex mr-auto\">\n          <img src=\"http://localhost:3000/assets/images/sunbird_logo.png\" alt=\"sunbird\">\n        </div>\n        <div class=\"sb-header-links d-flex ml-auto computer only\">\n          <a class=\"item active\">Library</a>\n          <a class=\"item\">Course</a>\n        </div>\n        <i class=\"large bars icon link primary-color mobile only ml-auto my-auto\" (click)=\"showSideBars()\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"mobile only\">\n    <div class=\"ui sidebar right vertical menu\">\n      <ng-container *ngIf=\"userService.loggedIn\">\n        <div class=\"item font-weight-bold\">\n          <i class=\"close link icon\" (click)=\"showSideBars()\" tabindex=\"0\"\n            title=\"close\"></i>\n          <div class=\"ellipsis\">\n            firstName lastname\n          </div>\n        </div>\n        <div class=\"ui divider mt-0\"></div>\n        <a class=\"item\">\n          Library\n        </a>\n        <a class=\"item\">\n          Course\n        </a>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"sb-sub-header\">\n    <div class=\"blue-bar\">\n      <div class=\"ui container d-flex flex-ai-center\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center computer only\"\n          title=\"Enter QR code\">\n          <i class=\"qrcode icon\"></i>\n          Enter QR code\n        </button>\n        <div class=\"sb-divider computer only\"></div>\n        <div class=\"sb-search-box mr-auto medium\">\n          <div class=\"input-div relative\">\n            <i class=\"search icon\"></i>\n            <input type=\"text\" name=\"filter_search\" class=\"sb-search-input\" placeholder=\"Search in All\">\n            <!-- <i class=\"close icon\"></i>\n          <div class=\"sb-loader\"></div> -->\n          </div>\n          <button class=\"sb-btn sb-btn-normal\" tabindex=\"0\">Search</button>\n        </div>\n        <div class=\"sb-header-links ml-auto d-flex flex-ai-center computer only\">\n          <div>Select Language :\n          </div>\n          <sui-select class=\"sb-sub-header-select\" placeholder=\"Choose\">\n            <sui-select-option value=\"Option 1\"></sui-select-option>\n            <sui-select-option value=\"Option 2\"></sui-select-option>\n            <sui-select-option value=\"Option 3\"></sui-select-option>\n            <sui-select-option value=\"Option 4\"></sui-select-option>\n          </sui-select>\n        </div>\n      </div>\n    </div>\n    <div class=\"white-bar mobile only\">\n      <div class=\"ui container d-flex flex-ai-center\">\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center mr-auto\" title=\"Enter QR code\">\n          <i class=\"qrcode icon\"></i>\n          Enter QR code\n        </button>\n        <div class=\"sb-header-links ml-auto d-flex flex-ai-center\">\n          <sui-select class=\"sb-sub-header-select sb-btn sb-btn-normal sb-btn-outline-primary\" placeholder=\"Choose\">\n            <sui-select-option value=\"Option 1\"></sui-select-option>\n            <sui-select-option value=\"Option 2\"></sui-select-option>\n            <sui-select-option value=\"Option 3\"></sui-select-option>\n            <sui-select-option value=\"Option 4\"></sui-select-option>\n          </sui-select>\n        </div>\n      </div>\n    </div>\n  </div>\n      "
            }];
        this.language = [{ name: 'English' }, { name: 'Kannada' }];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.showSideBar = function () {
        jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n\r\n<!--Large Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Large Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"largemodal = !largemodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showLargeModal = !showLargeModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showLargeModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'large'\"\r\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showLargeModal = !showLargeModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showLargeModal = !showLargeModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showLargeModal = !showLargeModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"largemodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"largeModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"largeModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Large Modal-->\r\n\r\n<!--Normal Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Normal Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"normalmodal = !normalmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showNormalModal = !showNormalModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showNormalModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'normal'\" class=\"sb-modal\" appBodyScroll (dismissed)=\"showNormalModal = !showNormalModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showNormalModal = !showNormalModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showNormalModal = !showNormalModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"normalmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"normalModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"normalModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Normal Modal-->\r\n\r\n<!--Small Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Small Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"smallmodal = !smallmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showSmallModal = !showSmallModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showSmallModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\r\n      class=\"sb-modal\" appBodyScroll (dismissed)=\"showSmallModal = !showSmallModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showSmallModal = !showSmallModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"showSmallModal = !showSmallModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"smallmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"smallModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"smallModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Small Modal-->\r\n\r\n<!--Full screen Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Fullscreen Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"fullscreenmodal = !fullscreenmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"showFullscreenModal = !showFullscreenModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showFullscreenModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'fullscreen'\" class=\"sb-modal\" appBodyScroll\r\n      (dismissed)=\"showFullscreenModal = !showFullscreenModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"showFullscreenModal = !showFullscreenModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\"\r\n          (click)=\"showFullscreenModal = !showFullscreenModal\">\r\n          No\r\n        </button>\r\n    </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"fullscreenmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"fullscreenModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"fullscreenModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Fullscreen Modal-->\r\n\r\n<!--Success Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Success Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"successmodal = !successmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-success sb-btn-normal\" (click)=\"showSuccessModal = !showSuccessModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showSuccessModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'small'\" class=\"sb-modal sb-success\" appBodyScroll (dismissed)=\"showSuccessModal = !showSuccessModal\"\r\n      #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-success\" (click)=\"showSuccessModal = !showSuccessModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-success\" (click)=\"showSuccessModal = !showSuccessModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"successmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"successModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"successModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Success Modal-->\r\n\r\n<!--Error Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Error Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"errormodal = !errormodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"showErrorModal = !showErrorModal\">Show Modal</button>\r\n    <sui-modal *ngIf=\"showErrorModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\" [size]=\"'small'\"\r\n      class=\"sb-modal sb-error\" appBodyScroll (dismissed)=\"showErrorModal = !showErrorModal\" #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-error\" (click)=\"showErrorModal = !showErrorModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-error\" (click)=\"showErrorModal = !showErrorModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"errormodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"errorModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"errorModalCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Danger Modal-->\r\n\r\n<!--WarningModal-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    Warning Modal\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"warningmodal = !warningmodal\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-warning sb-btn-normal\" (click)=\"showWarningModal = !showWarningModal\">Show\r\n      Modal</button>\r\n    <sui-modal *ngIf=\"showWarningModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n      [size]=\"'small'\" class=\"sb-modal sb-warning\" appBodyScroll (dismissed)=\"showWarningModal = !showWarningModal\"\r\n      #modal>\r\n      <div class=\"sb-modal-header\">\r\n        Modal Heading\r\n      </div>\r\n      <div class=\"sb-modal-content\">\r\n        Modal Content\r\n      </div>\r\n      <div class=\"sb-modal-actions\">\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-warning\" (click)=\"showWarningModal = !showWarningModal\">\r\n          Yes\r\n        </button>\r\n        <button class=\"sb-btn sb-btn-normal sb-btn-outline-warning\" (click)=\"showWarningModal = !showWarningModal\">\r\n          No\r\n        </button>\r\n      </div>\r\n    </sui-modal>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"warningmodal\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"warningModalCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n        <code [highlight]=\"warningModalCode\"></code>\r\n      </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n</div>\r\n<!--/Warning Modal-->\r\n\r\n\r\n  <!--Tab Modal-->\r\n<div class=\"docs-sections\">\r\n\r\n    <h4 class=\"docs-sectionHeading\">\r\n        Modal with Tab Design\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"TabModal = !TabModal\" title=\"Toggle Code\"\r\n        tabindex=\"0\"></i>\r\n    </h4>\r\n  \r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\">\r\n      <button class=\"sb-btn sb-btn-primary sb-btn-normal\" (click)=\"ShowTabModal = !ShowTabModal\">Show Modal</button>\r\n      <sui-modal *ngIf=\"ShowTabModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\r\n        [size]=\"'normal'\" class=\"sb-modal\" appBodyScroll (dismissed)=\"ShowTabModal = !ShowTabModal\" #modal>\r\n        <div class=\"sb-modal-header\">\r\n          Modal with Tab Design\r\n        </div>\r\n        <div class=\"sb-modal-content sb-modal-tab\">\r\n            <sui-tabset>\r\n                <div class=\"ui pointing secondary menu\">\r\n                    <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\r\n                    <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\r\n                </div>\r\n                <div class=\"ui container\" suiTabContent=\"1\">First nested tab!</div>\r\n                <div class=\"ui container\" suiTabContent=\"2\">Second nested tab!</div>\r\n            </sui-tabset>\r\n        </div>\r\n        <div class=\"sb-modal-actions\">\r\n          <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"ShowTabModal = !ShowTabModal\">\r\n            Yes\r\n          </button>\r\n          <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"ShowTabModal = !ShowTabModal\">\r\n            No\r\n          </button>\r\n        </div>\r\n      </sui-modal>\r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"TabModal\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"tabModalCode\"\r\n        class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"tabModalCode\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n  </div>\r\n  <!--/Tab Modal-->\r\n\r\n<!--Page Content-->"

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
        this.tabModalCode = "\n<sui-modal *ngIf=\"ShowTabModal\" [mustScroll]=\"true\" [isClosable]=\"true\" [transitionDuration]=\"0\"\n[size]=\"'normal'\" class=\"sb-modal\" appBodyScroll (dismissed)=\"ShowTabModal = !ShowTabModal\" #modal>\n<div class=\"sb-modal-header\">\n  Modal with Tab Design\n</div>\n<div class=\"sb-modal-content sb-modal-tab\">\n    <sui-tabset>\n        <div class=\"ui pointing secondary menu\">\n            <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\n            <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\n        </div>\n        <div class=\"ui container\" suiTabContent=\"1\">First nested tab!</div>\n        <div class=\"ui container\" suiTabContent=\"2\">Second nested tab!</div>\n    </sui-tabset>\n</div>\n<div class=\"sb-modal-actions\">\n  <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"ShowTabModal = !ShowTabModal\">\n    Yes\n  </button>\n  <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary\" (click)=\"ShowTabModal = !ShowTabModal\">\n    No\n  </button>\n</div>\n</sui-modal>";
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n      <div class=\"sb-pageSection\">\r\n          <!--Header-->\r\n          <div class=\"sb-pageSection-header\">\r\n              <!--Section Title-->\r\n              <h4 class=\"sb-pageSection-title m-0 mr-5\">\r\n                My Courses\r\n              </h4>\r\n              <!--/Section Title-->\r\n              <!--Count-->\r\n              <span class=\"sb-pageSection-count sb-label sb-label-xs sb-label-error\">\r\n            25\r\n              </span>\r\n              <!--/Count-->\r\n              <!--View all button-->\r\n              <button class=\"sb-btn sb-btn-xs sb-btn-secondary ml-auto\">\r\n                  View all\r\n              </button>\r\n              <!--/View all button-->\r\n          </div>\r\n          <!--/Header-->\r\n\r\n          <!--Content-->\r\n          <div class=\"sb-pageSection-content\">\r\n              <ngx-slick class=\"carousel\" [config]=\"slideConfig\">\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                      <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\r\n                        <div class=\"sb-card-body\">\r\n                          <div class=\"sb-card-metas\">\r\n                            <div class=\"sb-card-image mr-16\">\r\n                              <img src=\"assets/images/book.png\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta non-course\">\r\n                              <div class=\"d-flex mb-auto\">\r\n                                <div class=\"sb-card-label\">\r\n                                ورکشاپ</div>\r\n                                <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                              </div>\r\n                              <div class=\"sb-card-meta-item ellipsis\">\r\n                                  مضمون: انگریزی\r\n                              </div>\r\n                              <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                                  کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس5\r\n                              </div>\r\n                              <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                                  درمیانہ: دیگر\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <h4 class=\"sb-card-title\">\r\n                              ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ\r\n                          </h4>\r\n                          <div class=\"sb-card-org ellipsis\">\r\n                              یورپی قانون اکیڈمی (ایرا اے)\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"sb-card-progressbar\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </ngx-slick>\r\n          </div>\r\n          <!--/Content-->\r\n      </div>\r\n      <div class=\"sb-pageSection\">\r\n          <!--Header-->\r\n          <div class=\"sb-pageSection-header\">\r\n              <!--Section Title-->\r\n              <h4 class=\"sb-pageSection-title m-0 mr-5\">\r\n                My Resources\r\n              </h4>\r\n              <!--/Section Title-->\r\n              <!--Count-->\r\n              <span class=\"sb-pageSection-count sb-label sb-label-xs sb-label-error\">\r\n                25\r\n              </span>\r\n              <!--/Count-->\r\n              <!--View all button-->\r\n              <button class=\"sb-btn sb-btn-xs sb-btn-secondary ml-auto\">\r\n                  View all\r\n              </button>\r\n              <!--/View all button-->\r\n          </div>\r\n          <!--/Header-->\r\n\r\n          <!--Content-->\r\n          <div class=\"sb-pageSection-content\">\r\n              <ngx-slick class=\"carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Worksheet</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                            Subject : English\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Medium : Other\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure and Algorithm - Assignment 1 Paperback\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Book</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">ورکشاپ</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                          مضمون: انگریزی\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          درمیانہ: دیگر\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                      ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                      یورپی قانون اکیڈمی (ایرا اے)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Worksheet</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                              Subject : English\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                              Medium : Other\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure and Algorithm - Assignment 1 Paperback\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">Book</div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                          Data Structure\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                          Academy of European Law (ERA)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div ngxSlickItem class=\"mr-15\">\r\n                    <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\r\n                      <div class=\"sb-card-body\">\r\n                        <div class=\"sb-card-metas\">\r\n                          <div class=\"sb-card-image mr-16\">\r\n                            <img src=\"assets/images/book.png\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta non-course\">\r\n                            <div class=\"d-flex mb-auto\">\r\n                              <div class=\"sb-card-label\">ورکشاپ</div>\r\n                              <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis\">\r\n                            مضمون: انگریزی\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5\r\n                            </div>\r\n                            <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            درمیانہ: دیگر\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class=\"sb-card-title\">\r\n                        ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ\r\n                        </h4>\r\n                        <div class=\"sb-card-org ellipsis\">\r\n                        یورپی قانون اکیڈمی (ایرا اے)\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sb-card-progressbar\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Worksheet</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                            Subject : English\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Medium : Other\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure and Algorithm - Assignment 1 Paperback\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Book</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">ورکشاپ</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                          مضمون: انگریزی\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          درمیانہ: دیگر\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                      ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                      یورپی قانون اکیڈمی (ایرا اے)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Worksheet</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                            Subject : English\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Class : Class 1,Class 2,Class 3,Class 4,Class 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                            Medium : Other\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure and Algorithm - Assignment 1 Paperback\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">Book</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                        Data Structure\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                        Academy of European Law (ERA)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"mr-15\">\r\n                  <div class=\"sb-card d-inline-block mr-15\" tabindex=\"0\" dir=\"rtl\" lang=\"ur\">\r\n                    <div class=\"sb-card-body\">\r\n                      <div class=\"sb-card-metas\">\r\n                        <div class=\"sb-card-image mr-16\">\r\n                          <img src=\"assets/images/book.png\">\r\n                        </div>\r\n                        <div class=\"sb-card-meta non-course\">\r\n                          <div class=\"d-flex mb-auto\">\r\n                            <div class=\"sb-card-label\">ورکشاپ</div>\r\n                            <img src=\"assets/images/badge1.png\" class=\"sb-card-badge ml-auto\">\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis\">\r\n                          مضمون: انگریزی\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5\r\n                          </div>\r\n                          <div class=\"sb-card-meta-item ellipsis mt-4\">\r\n                          درمیانہ: دیگر\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h4 class=\"sb-card-title\">\r\n                      ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ\r\n                      </h4>\r\n                      <div class=\"sb-card-org ellipsis\">\r\n                      یورپی قانون اکیڈمی (ایرا اے)\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"sb-card-progressbar\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ngx-slick>\r\n          </div>\r\n          <!--/Content-->\r\n      </div>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
                demoCode: "\n     ",
                copyCode: "\n      <div class=\"sb-pageSection\">\n          <!--Header-->\n          <div class=\"sb-pageSection-header\">\n              <!--Section Title-->\n              <h4 class=\"sb-pageSection-title m-0 mr-5\">\n                My Courses\n              </h4>\n              <!--/Section Title-->\n              <!--Count-->\n              <span class=\"sb-pageSection-count sb-label sb-label-xs sb-label-error\">\n            25\n              </span>\n              <!--/Count-->\n              <!--View all button-->\n              <button class=\"sb-btn sb-btn-xs sb-btn-secondary ml-auto\">\n                  View all\n              </button>\n              <!--/View all button-->\n          </div>\n          <!--/Header-->\n\n          <!--Content-->\n          <div class=\"sb-pageSection-content\">\n              <ngx-slick class=\"carousel\" [config]=\"slideConfig\">\n                  <div ngxSlickItem class=\"mr-15\">\n                    <app-card></card>\n                  </div>\n              </ngx-slick>\n          </div>\n          <!--/Content-->\n      </div>\n      "
            }
        ];
        this.slideConfig = {
            "slidesToShow": 4,
            "slidesToScroll": 4,
            "responsive": [
                {
                    "breakpoint": 2800,
                    "settings": {
                        "slidesToShow": 6,
                        "slidesToScroll": 6
                    }
                },
                {
                    "breakpoint": 2200,
                    "settings": {
                        "slidesToShow": 5,
                        "slidesToScroll": 5
                    }
                },
                {
                    "breakpoint": 1920,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 3
                    }
                },
                {
                    "breakpoint": 1440,
                    "settings": {
                        "slidesToShow": 3.5,
                        "slidesToScroll": 3
                    }
                },
                {
                    "breakpoint": 1200,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3
                    }
                },
                {
                    "breakpoint": 992,
                    "settings": {
                        "slidesToShow": 2.25,
                        "slidesToScroll": 2
                    }
                },
                {
                    "breakpoint": 750,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2
                    }
                },
                {
                    "breakpoint": 660,
                    "settings": {
                        "slidesToShow": 1.75,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 1.5,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 530,
                    "settings": {
                        "slidesToShow": 1.33,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 498,
                    "settings": {
                        "slidesToShow": 1.25,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 450,
                    "settings": {
                        "slidesToShow": 1.15,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 390,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                }
            ],
            "infinite": false,
            "rtl": false
        };
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

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageTitle = 'Pagination';
        this.sections = [
            {
                expandCode: false,
                title: 'Basic Pagination',
                demoCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
            {
                expandCode: false,
                title: 'Pagination in small size',
                demoCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination mini\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination mini\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
            {
                expandCode: false,
                title: 'Pagination in large size',
                demoCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination large\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n      <div class=\"sb-pagination-container\">\n            <div class=\"sb-pagination large\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
            {
                expandCode: false,
                title: 'Pagination in Center',
                demoCode: "\n      <div class=\"sb-pagination-container flex-jc-center\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n      <div class=\"sb-pagination-container flex-jc-center\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
            {
                expandCode: false,
                title: 'Pagination in Right',
                demoCode: "\n      <div class=\"sb-pagination-container flex-jc-flex-end\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n      <div class=\"sb-pagination-container flex-jc-flex-end\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
        ];
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
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

/***/ "./src/app/rating/rating.component.html":
/*!**********************************************!*\
  !*** ./src/app/rating/rating.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <div class=\"ui form\">\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\"[ngModel]=\"3\" class=\"sb-rating mini\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating tiny\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating small\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating large\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating huge\"></sui-rating>\r\n      </div>\r\n      <div class=\"field\">\r\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating massive\"></sui-rating>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->\r\n"

/***/ }),

/***/ "./src/app/rating/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.pageTitle = 'Rating';
        this.sections = [
            {
                expandCode: false,
                title: 'Rating',
                demoCode: "\n       ",
                copyCode: "\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\"[ngModel]=\"3\" class=\"sb-rating mini\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating tiny\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating small\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating large\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating huge\"></sui-rating>\n      </div>\n      <div class=\"field\">\n        <sui-rating [maximum]=\"5\" [ngModel]=\"3\" class=\"sb-rating massive\"></sui-rating>\n      </div>\n\n      "
            }
        ];
        this.multiSelect1 = [{ name: 'Example' }, { name: 'Test' }, { name: 'that' }];
        console.log(this.multiSelect1);
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/rating/rating.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
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

/***/ "./src/app/select/select.component.html":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n    {{pageTitle}}\r\n  </h1>\r\n  <!--/Page Heading-->\r\n  \r\n  <!--Page Content-->\r\n  <div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n  \r\n    <h4 class=\"docs-sectionHeading\">\r\n      {{section.title}}\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n    </h4>\r\n\r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\">\r\n        <div class=\"ui segment\">\r\n            <p>Multi Select (with <code>selection</code> class applied) </p>\r\n  \r\n            <sui-multi-select class=\"selection\"                             \r\n                              [options]=\"options\"\r\n                              labelField=\"name\"\r\n                              #multiSelect>\r\n                <sui-select-option *ngFor=\"let option of multiSelect1\"\r\n                                   [value]=\"option\">\r\n                </sui-select-option>\r\n            </sui-multi-select>\r\n        </div>\r\n  \r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"section.copyCode\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n    \r\n  </div>\r\n  <!--Page Content-->"

/***/ }),

/***/ "./src/app/select/select.component.scss":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.pageTitle = 'Select';
        this.sections = [
            {
                expandCode: false,
                title: 'Select',
                demoCode: "\n      <div class=\"ui segment\">\n      <p>Multi Select (with <code>selection</code> class applied)</p>\n      <sui-multi-select class=\"selection\"\n                        [(ngModel)]=\"selectedOptions\"\n                        [options]=\"options\"\n                        labelField=\"name\"\n                        [isSearchable]=\"searchable\"\n                        [isDisabled]=\"disabled\"\n                        [hasLabels]=\"!hideLabels\"\n                        #multiSelect>\n          <sui-select-option *ngFor=\"let option of multiSelect.filteredOptions\"\n                             [value]=\"option\">\n          </sui-select-option>\n      </sui-multi-select>\n  </div> ",
                copyCode: "\n      <div class=\"ui segment\">\n      <p>Multi Select (with <code>selection</code> class applied)</p>\n      <sui-multi-select class=\"selection\"\n                        [(ngModel)]=\"selectedOptions\"\n                        [options]=\"options\"\n                        labelField=\"name\"\n                        [isSearchable]=\"searchable\"\n                        [isDisabled]=\"disabled\"\n                        [hasLabels]=\"!hideLabels\"\n                        #multiSelect>\n          <sui-select-option *ngFor=\"let option of multiSelect.filteredOptions\"\n                             [value]=\"option\">\n          </sui-select-option>\n      </sui-multi-select>\n  </div>\n\n      "
            }
        ];
        this.multiSelect1 = [{ name: 'Example' }, { name: 'Test' }, { name: 'that' }];
        console.log(this.multiSelect1);
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/select/select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sb-branding\">\r\n  <div><img src=\"https://project-sunbird.atlassian.net/secure/projectavatar?pid=10000&avatarId=10512&size=xxlarge\"\r\n      width=\"100%\" /></div>\r\n  <h4 class=\"sb-doc-app-title\">Sunbird - Design System</h4>\r\n</div>\r\n<ul>\r\n  <li>\r\n      <h4>Refence</h4> \r\n      <ul>\r\n          <li><a href=\"docs/assets/design-system/index.html\" target=\"_blank\">Design System</a></li>\r\n      </ul>\r\n    </li>\r\n  <li>\r\n    <h4>Base</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Grid & Layout</a></li>\r\n      <li><a routerLink=\"/spacing\" routerLinkActive=\"active\">Spacing</a></li>\r\n      <li><a routerLink=\"/typography\" routerLinkActive=\"active\">Typography</a></li>\r\n      <li><a routerLink=\"/colors\" routerLinkActive=\"active\">Colors</a></li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <h4>Components</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/buttons\" routerLinkActive=\"active\">Buttons</a></li>\r\n      <li><a routerLink=\"/cards\" routerLinkActive=\"active\">Cards</a></li>\r\n      <li><a routerLink=\"/forms\" routerLinkActive=\"active\">Forms</a></li>\r\n      <li><a routerLink=\"/footer\" routerLinkActive=\"active\">Footer</a></li>\r\n      <li><a routerLink=\"/header\" routerLinkActive=\"active\">Header</a></li>\r\n      <li><a routerLink=\"/loaders\" routerLinkActive=\"active\">Loaders</a></li>\r\n      <li><a routerLink=\"/modals\" routerLinkActive=\"active\">Modals</a></li>\r\n      <li><a routerLink=\"/page-section\" routerLinkActive=\"active\">Page Sections</a></li>\r\n      <li><a routerLink=\"/pagination\" routerLinkActive=\"active\">Pagination</a></li>\r\n      <li><a routerLink=\"/rating\" routerLinkActive=\"active\">Rating</a></li>\r\n      <li><a routerLink=\"/search\" routerLinkActive=\"active\">Search</a></li>\r\n      <li><a routerLink=\"/select\" routerLinkActive=\"active\">Select</a></li>\r\n      <li><a routerLink=\"/tables\" routerLinkActive=\"active\">Tables</a></li>\r\n      <li><a routerLink=\"/tabs\" routerLinkActive=\"active\">Tabs</a></li>\r\n      <li><a routerLink=\"/toasters\" routerLinkActive=\"active\">Toast</a></li>\r\n      <li><a routerLink=\"/tooltip\" routerLinkActive=\"active\">Tooltip</a></li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <h4>Coming Soon</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/labels\" routerLinkActive=\"active\">Labels</a></li>\r\n      <li><a routerLink=\"/icons\" routerLinkActive=\"active\">Icons</a></li>\r\n      <li><a routerLink=\"/tooltips\" routerLinkActive=\"active\">Toolbars</a></li>\r\n      <li><a routerLink=\"/treenavigation\" routerLinkActive=\"active\">Tree Navigation</a></li>\r\n      <li><a routerLink=\"/menus\" routerLinkActive=\"active\">Menus</a></li>\r\n      <li><a routerLink=\"/menu-filters\" routerLinkActive=\"active\">Menu Filters</a></li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <h4>Pages/Templates (Coming Soon)</h4>\r\n    <ul>\r\n      <li><a routerLink=\"/courses\" routerLinkActive=\"active\">Courses</a></li>\r\n      <li><a routerLink=\"/library\" routerLinkActive=\"active\">Library</a></li>\r\n      <li><a routerLink=\"/search-results\" routerLinkActive=\"active\">Search Results</a></li>\r\n      <li><a routerLink=\"/workflow\" routerLinkActive=\"active\">Workflow</a></li>\r\n      <li><a routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></li>\r\n      <li><a routerLink=\"/form-elements\" routerLinkActive=\"active\">Sample Forms</a></li>\r\n    </ul>\r\n  </li>\r\n</ul>"

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
        this.sections = [{
                expandCode: false,
                title: 'Table - Default',
                demoCode: "\n            <div class=\"sb-table-container\">\n            <table class=\"sb-table sb-table-fixed sb-table-hover\">\n            <thead class=\"sb-table-header heading-large\">\n                <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n                </tr>\n            </thead>\n            <tbody class=\"sb-table-body body-large\">\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">26</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr class=\"sb-table-active\">\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n            </tbody>\n            </table>\n        </div>\n        <div class=\"sb-pagination-container flex-jc-flex-end\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      ",
                copyCode: "\n            <div class=\"sb-table-container\">\n            <table class=\"sb-table sb-table-fixed sb-table-hover\">\n            <thead class=\"sb-table-header heading-large\">\n                <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n                </tr>\n            </thead>\n            <tbody class=\"sb-table-body body-large\">\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">26</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr class=\"sb-table-active\">\n                <td data-label=\"Name\">\n                    <div class=\"sb-media\">\n                    <img src=\"\" alt=\"\" class=\"sb-media-object mr-15\">\n                    <div class=\"sb-media-body\">\n                        <h6 class=\"media-heading\">United Course</h6>\n                        <p class=\"media-description\">Course</p>\n                    </div>\n                    </div>\n                </td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n            </tbody>\n            </table>\n        </div>\n        <div class=\"sb-pagination-container flex-jc-flex-end\">\n            <div class=\"sb-pagination\">\n                <a class=\"sb-item\">First</a>\n                <a class=\"sb-item\">Previous</a>\n                <a class=\"sb-item sb-item-active\">1</a>\n                <a class=\"sb-item\">...</a>\n                <a class=\"sb-item\">10</a>\n                <a class=\"sb-item\">11</a>\n                <a class=\"sb-item\">12</a>\n                <a class=\"sb-item\">Next</a>\n                <a class=\"sb-item\">Last</a>\n            </div>\n        </div>\n      "
            },
            {
                expandCode: false,
                title: 'Table - with Download',
                demoCode: "\n            <div class=\"sb-table-container\">\n            <div class=\"sb-table-search-header search-header-withbg\">\n            <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n                <i class=\"search icon\"></i>\n                <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n                <i class=\"close icon\"></i>\n                <div class=\"sb-loader\"></div>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search</button>\n            </div>\n                <div class=\"download-file\"><i class=\"download icon\"></i>Download File</div>\n            </div>\n            <table class=\"sb-table sb-table-hover sb-table-striped sb-table-sortable br-0\">\n            <thead class=\"sb-table-header\">\n                <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n                </tr>\n            </thead>\n            <tbody class=\"sb-table-body\">\n                <tr>\n                <td data-label=\"Name\">James</td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">Jill</td>\n                <td data-label=\"Age\">26</td>\n                <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">Elyse</td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">Elyse</td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                <td data-label=\"Name\">Elyse</td>\n                <td data-label=\"Age\">24</td>\n                <td data-label=\"Job\">Designer</td>\n                </tr>\n            </tbody>\n            </table>\n        </div>\n        <div class=\"ui pagination\"></div>\n      ",
                copyCode: "\n            <div class=\"sb-table-container\">\n            <div class=\"sb-table-search-header search-header-withbg\">\n            <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n                <i class=\"search icon\"></i>\n                <input class=\"sb-search-input\" type=\"text\" placeholder=\"Search...\" />\n                <i class=\"close icon\"></i>\n                <div class=\"sb-loader\"></div>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search</button>\n            </div>\n                <div class=\"download-file\"><i class=\"download icon\"></i>Download File</div>\n            </div>\n            <table class=\"sb-table sb-table-hover sb-table-striped sb-table-sortable br-0\">\n                <thead class=\"sb-table-header\">\n                <tr>\n                    <th>Name</th>\n                    <th>Age</th>\n                    <th>Job</th>\n                </tr>\n                </thead>\n                <tbody class=\"sb-table-body\">\n                <tr>\n                    <td data-label=\"Name\">James</td>\n                    <td data-label=\"Age\">24</td>\n                    <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                    <td data-label=\"Name\">Jill</td>\n                    <td data-label=\"Age\">26</td>\n                    <td data-label=\"Job\">Engineer</td>\n                </tr>\n                <tr>\n                    <td data-label=\"Name\">Elyse</td>\n                    <td data-label=\"Age\">24</td>\n                    <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                    <td data-label=\"Name\">Elyse</td>\n                    <td data-label=\"Age\">24</td>\n                    <td data-label=\"Job\">Designer</td>\n                </tr>\n                <tr>\n                    <td data-label=\"Name\">Elyse</td>\n                    <td data-label=\"Age\">24</td>\n                    <td data-label=\"Job\">Designer</td>\n                </tr>\n                </tbody>\n            </table>\n            </div>\n\n      "
            },
            {
                expandCode: false,
                title: 'Table - with Placeholder',
                demoCode: "\n            <div class=\"sb-table-container\">\n            <table class=\"sb-table sb-table-fixed sb-table-placeholder\">\n            <thead class=\"sb-table-header heading-large\">\n                <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n                </tr>\n            </thead>\n            <tbody class=\"sb-table-body body-large\">\n                <tr>\n                <td>\n                    <div class=\"sb-media-obj-placeholder\">\n                    <img src=\"\" alt=\"\" class=\"image loading\">\n                    <div>\n                        <div class=\"text loading\"></div>\n                    </div>\n                    </div>\n                </td>\n                <td><div class=\"bar loading\"></div></td>\n                <td><div class=\"bar loading\"></div></td>\n                </tr>\n            </tbody>\n            </table>\n            </div>\n\n      ",
                copyCode: "\n\n            <div class=\"sb-table-container\">\n            <table class=\"sb-table sb-table-fixed sb-table-placeholder\">\n            <thead class=\"sb-table-header heading-large\">\n                <tr>\n                <th>Name</th>\n                <th>Age</th>\n                <th>Job</th>\n                </tr>\n            </thead>\n            <tbody class=\"sb-table-body body-large\">\n                <tr>\n                <td>\n                    <div class=\"sb-media-obj-placeholder\">\n                    <img src=\"\" alt=\"\" class=\"image loading\">\n                    <div>\n                        <div class=\"text loading\"></div>\n                    </div>\n                    </div>\n                </td>\n                <td><div class=\"bar loading\"></div></td>\n                <td><div class=\"bar loading\"></div></td>\n                </tr>\n            </tbody>\n            </table>\n        </div>\n      "
            }
        ];
    }
    TablesComponent.prototype.ngOnInit = function () { };
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

/***/ "./src/app/tabs/tabs.component.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n      <sui-tabset>\r\n          <div class=\"ui top attached tabular menu\">\r\n              <a class=\"item\" suiTabHeader=\"1\">First</a>\r\n              <a class=\"item\" suiTabHeader=\"2\">Second</a>\r\n              <a class=\"item\" suiTabHeader=\"3\">Third</a>\r\n          </div>\r\n          <div class=\"ui bottom attached segment\" suiTabContent=\"1\">First tab!</div>\r\n          <div class=\"ui bottom attached segment\" suiTabContent=\"2\">Second tab!</div>\r\n          <div class=\"ui bottom attached segment\" suiTabContent=\"3\">Third tab!</div>\r\n        </sui-tabset>\r\n\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->\r\n\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections1;\">\r\n\r\n    <h4 class=\"docs-sectionHeading\">\r\n      {{section.title}}\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n    </h4> \r\n  \r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\">\r\n        <sui-tabset>\r\n            <div class=\"ui pointing secondary menu pointing-tab\">\r\n                <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\r\n                <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\r\n                <a class=\"item\" suiTabHeader=\"3\">Nested 3</a>\r\n            </div>\r\n            <div class=\"ui segment\" suiTabContent=\"1\">First nested tab!</div>\r\n            <div class=\"ui segment\" suiTabContent=\"2\">Second nested tab!</div>\r\n            <div class=\"ui segment\" suiTabContent=\"3\">Third nested tab!</div>\r\n        </sui-tabset>\r\n  \r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"section.copyCode1\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"section.copyCode1\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n    \r\n  </div>\r\n  <!--Page Content-->\r\n\r\n  <!--Page Content-->\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections2;\">\r\n\r\n    <h4 class=\"docs-sectionHeading\">\r\n      {{section.title}}\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n    </h4> \r\n  \r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\">\r\n        <sui-tabset>\r\n            <div class=\"ui pointing secondary menu\">\r\n                <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\r\n                <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\r\n            </div>\r\n            <div class=\"ui segment\" suiTabContent=\"1\">First nested tab!</div>\r\n            <div class=\"ui segment\" suiTabContent=\"2\">Second nested tab!</div>\r\n        </sui-tabset>\r\n  \r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"section.copyCode1\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"section.copyCode1\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n    \r\n  </div>\r\n  <!--Page Content-->"

/***/ }),

/***/ "./src/app/tabs/tabs.component.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.pageTitle = 'Tabs';
        this.sections = [
            {
                expandCode: false,
                title: 'Tabular Menu',
                copyCode: "\n      <sui-tabset>\n      <div class=\"ui top attached tabular menu\">\n          <a class=\"item\" suiTabHeader=\"1\">First</a>\n          <a class=\"item\" suiTabHeader=\"2\">Second</a>\n          <a class=\"item\" suiTabHeader=\"3\">Third</a>\n      </div>\n      <div class=\"ui bottom attached segment\" suiTabContent=\"1\">First tab!</div>\n      <div class=\"ui bottom attached segment\" suiTabContent=\"2\">Second tab!</div>\n      <div class=\"ui bottom attached segment\" suiTabContent=\"3\">Third tab!</div>\n    </sui-tabset>\n\n      "
            }
        ];
        this.sections1 = [
            {
                expandCode: false,
                title: 'Pointing Tabs',
                copyCode1: "\n      <sui-tabset>\n      <div class=\"ui pointing secondary menu pointing-tab\">\n          <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\n          <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\n      </div>\n      <div class=\"ui segment\" suiTabContent=\"1\">First nested tab!</div>\n      <div class=\"ui segment\" suiTabContent=\"2\">Second nested tab!</div>\n  </sui-tabset>\n\n      "
            }
        ];
        this.sections2 = [
            {
                expandCode: false,
                title: 'Secondary Pointing Tabs',
                copyCode1: "\n      <sui-tabset>\n      <div class=\"ui pointing secondary menu\">\n          <a class=\"item\" suiTabHeader=\"1\">Nested 1</a>\n          <a class=\"item\" suiTabHeader=\"2\">Nested 2</a>\n      </div>\n      <div class=\"ui segment\" suiTabContent=\"1\">First nested tab!</div>\n      <div class=\"ui segment\" suiTabContent=\"2\">Second nested tab!</div>\n  </sui-tabset>\n\n      "
            }
        ];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/tabs/tabs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
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

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\">\r\n<h4 class=\"docs-sectionHeading\">\r\n    iziToast Critical Examples\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"iziToasterCritical = !iziToasterCritical\" title=\"Toggle Code\"\r\n      tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n <!--Display output-->\r\n <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-info sb-btn-normal mr-8\" (click)=\"InfoToasterCritical();\">Info</button>\r\n<button class=\"sb-btn sb-btn-success sb-btn-normal mr-8\" (click)=\"SuccessToasterCritical();\">Success</button>\r\n<button class=\"sb-btn sb-btn-warning sb-btn-normal mr-8\" (click)=\"WarningToasterCritical();\">Warning</button>\r\n<button class=\"sb-btn sb-btn-error sb-btn-normal\" (click)=\"ErrorToasterCritical();\">Error</button>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"iziToasterCritical\">\r\n        <!--Copy code button-->\r\n        <button ngxClipboard [cbContent]=\"iziToasterCriticalCode\"\r\n          class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n        <!--/Copy code button-->\r\n        <!--Copy code display-->\r\n        <pre>\r\n          <code [highlight]=\"iziToasterCriticalCode\"></code>\r\n        </pre>\r\n        <!--/Copy code display-->\r\n      </div>\r\n      <!--/Display code-->\r\n\r\n      <div class=\"sb-spacer48\"></div>\r\n\r\n      <h4 class=\"docs-sectionHeading\">\r\n          iziToast Standard Examples\r\n          <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"iziToasterStandard = !iziToasterStandard\" title=\"Toggle Code\"\r\n            tabindex=\"0\"></i>\r\n        </h4>\r\n      \r\n       <!--Display output-->\r\n       <div class=\"docs-sectionDemoCode\">\r\n          <button class=\"sb-btn sb-btn-normal sb-btn-outline-info mr-8\" (click)=\"InfoToasterStandard();\">Info</button>\r\n      <button class=\"sb-btn sb-btn-normal sb-btn-outline-success mr-8\" (click)=\"SuccessToasterStandard();\">Success</button>\r\n      <button class=\"sb-btn sb-btn-normal sb-btn-outline-warning mr-8\" (click)=\"WarningToasterStandard();\">Warning</button>\r\n      <button class=\"sb-btn sb-btn-normal sb-btn-outline-error\" (click)=\"ErrorToasterStandard();\">Error</button>\r\n        </div>\r\n        <!--/Display output-->\r\n      \r\n          <!--Display code-->\r\n          <div class=\"docs-sectionCopyCode\" *ngIf=\"iziToasterStandard\">\r\n              <!--Copy code button-->\r\n              <button ngxClipboard [cbContent]=\"iziToasterStandardCode\"\r\n                class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n              <!--/Copy code button-->\r\n              <!--Copy code display-->\r\n              <pre>\r\n                <code [highlight]=\"iziToasterStandardCode\"></code>\r\n              </pre>\r\n              <!--/Copy code display-->\r\n            </div>\r\n            <!--/Display code-->\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"docs-sections\" *ngFor=\"let section of sections;\">\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\" title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4> \r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section.copyCode\" class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n  \r\n</div>\r\n<!--Page Content-->"

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
        this.pageTitle = 'Toast';
        this.sections = [{
                expandCode: false,
                title: 'Standard Information Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-info sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Simple Meassage</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n        </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-info sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Simple Meassage</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Success Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-success sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Thank you!</div>\n          <div class=\"sb-toast-message\">We have received your download request.\n           The file will be sent to your registered email ID shortly.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-success sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Thank you!</div>\n          <div class=\"sb-toast-message\">We have received your download request.\n           The file will be sent to your registered email ID shortly.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Warning Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-warning sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Download failed!</div>\n          <div class=\"sb-toast-message\">Your profile does not have a valid email ID. Please update your email ID.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-warning sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Download failed!</div>\n          <div class=\"sb-toast-message\">Your profile does not have a valid email ID. Please update your email ID.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Standard Error Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-danger sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Delete this Content Type</div>\n          <div class=\"sb-toast-message\">When you delete a folder you also delete all of its contents.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-danger sb-toast-normal\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Delete this Content Type</div>\n          <div class=\"sb-toast-message\">When you delete a folder you also delete all of its contents.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Critical Information Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-info\">\n      <div class=\"sb-toast-body\">\n        <i class=\"book icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Simple Meassage</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-info\">\n      <div class=\"sb-toast-body\">\n        <i class=\"book icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Simple Meassage</div>\n          <div class=\"sb-toast-message\">message comes here</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Critical Success Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-success\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Thank you!</div>\n          <div class=\"sb-toast-message\">We have received your download request.\n           The file will be sent to your registered email ID shortly.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-success\">\n      <div class=\"sb-toast-body\">\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Thank you!</div>\n          <div class=\"sb-toast-message\">We have received your download request.\n           The file will be sent to your registered email ID shortly.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Critical Warning Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-warning\">\n      <div class=\"sb-toast-body\">\n        <i class=\"warning icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Download failed!</div>\n          <div class=\"sb-toast-message\">Your profile does not have a valid email ID. Please update your email ID.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-warning\">\n      <div class=\"sb-toast-body\">\n        <i class=\"warning icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Download failed!</div>\n          <div class=\"sb-toast-message\">Your profile does not have a valid email ID. Please update your email ID.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            },
            {
                expandCode: false,
                title: 'Critical Error Toaster',
                demoCode: "\n      <div class=\"sb-toaster sb-toast-danger\">\n      <div class=\"sb-toast-body\">\n        <i class=\"plus icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Delete this Content Type</div>\n          <div class=\"sb-toast-message\">When you delete a folder you also delete all of its contents.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      ",
                copyCode: "\n      <div class=\"sb-toaster sb-toast-danger\">\n      <div class=\"sb-toast-body\">\n        <i class=\"plus icon sb-toast-icon\"></i>\n        <div class=\"sb-toast-texts\">\n          <div class=\"sb-toast-title\">Delete this Content Type</div>\n          <div class=\"sb-toast-message\">When you delete a folder you also delete all of its contents.</div>\n        </div>\n        <span class=\"sb-toast-close-icon\"></span>\n      </div>\n    </div>\n      "
            }
        ];
        this.iziToasterCriticalCode = "\n  <!-- info toast -->\n  InfoToasterCritical() {\n    this.iziToast.show({\n      title: 'Sample message',\n      message: 'Message come here',\n      class: 'sb-toaster sb-toast-info',\n      icon: 'book icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n  <!-- Success toast -->\n  SuccessToasterCritical() {\n    this.iziToast.show({\n      title: 'Thank you',\n      message: 'We have received your download request. The file will be sent to your registered email ID shortly.',\n      class: 'sb-toaster sb-toast-success',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n\n  <!-- warning toast -->\n\n  WarningToasterCritical() {\n    this.iziToast.show({\n      title: 'Download failed!',\n      message: 'Your profile does not have a valid email ID. Please update your email ID.',\n      class: 'sb-toaster sb-toast-warning',\n      icon: 'warning icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n\n  <!-- error toast -->\n\n  ErrorToasterCritical() {\n    this.iziToast.show({\n      title: 'Delete this Content Type',\n      message: 'When you delete a folder you also delete all of its contents.',\n      class: 'sb-toaster sb-toast-danger',\n      icon: 'plus icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n  ";
        this.iziToasterStandardCode = "\n  <!-- info toast -->\n  InfoToasterStandard() {\n    this.iziToast.show({\n      title: 'Sample message',\n      message: 'Message come here',\n      class: 'sb-toaster sb-toast-info sb-toast-normal',\n      icon: 'book icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n  <!-- Success toast -->\n  SuccessToasterStandard() {\n    this.iziToast.show({\n      title: 'Thank you',\n      message: 'We have received your download request. The file will be sent to your registered email ID shortly.',\n      class: 'sb-toaster sb-toast-success sb-toast-normal',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n\n  <!-- warning toast -->\n\n  WarningToasterStandard() {\n    this.iziToast.show({\n      title: 'Download failed!',\n      message: 'Your profile does not have a valid email ID. Please update your email ID.',\n      class: 'sb-toaster sb-toast-warning sb-toast-normal',\n      icon: 'warning icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n\n  <!-- error toast -->\n\n  ErrorToasterStandard() {\n    this.iziToast.show({\n      title: 'Delete this Content Type',\n      message: 'When you delete a folder you also delete all of its contents.',\n      class: 'sb-toaster sb-toast-danger sb-toast-normal',\n      icon: 'plus icon',\n      position: 'center',\n      timeout: 100000000,\n      transitionIn: 'flipInX',\n      transitionOut: 'flipOutX'\n    });\n  }\n  ";
    }
    ToastersComponent.prototype.InfoToasterCritical = function () {
        this.iziToast.show({
            title: 'Sample message',
            message: 'Message come here',
            class: 'sb-toaster sb-toast-info',
            icon: 'book icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.SuccessToasterCritical = function () {
        this.iziToast.show({
            title: 'Thank you',
            message: 'We have received your download request. The file will be sent to your registered email ID shortly.',
            class: 'sb-toaster sb-toast-success',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.WarningToasterCritical = function () {
        this.iziToast.show({
            title: 'Download failed!',
            message: 'Your profile does not have a valid email ID. Please update your email ID.',
            class: 'sb-toaster sb-toast-warning',
            icon: 'warning icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.ErrorToasterCritical = function () {
        this.iziToast.show({
            title: 'Delete this Content Type',
            message: 'When you delete a folder you also delete all of its contents.',
            class: 'sb-toaster sb-toast-danger',
            icon: 'plus icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.InfoToasterStandard = function () {
        this.iziToast.show({
            title: 'Sample message',
            message: 'Message come here',
            class: 'sb-toaster sb-toast-info sb-toast-normal',
            icon: 'book icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.SuccessToasterStandard = function () {
        this.iziToast.show({
            title: 'Thank you',
            message: 'We have received your download request. The file will be sent to your registered email ID shortly.',
            class: 'sb-toaster sb-toast-success sb-toast-normal',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.WarningToasterStandard = function () {
        this.iziToast.show({
            title: 'Download failed!',
            message: 'Your profile does not have a valid email ID. Please update your email ID.',
            class: 'sb-toaster sb-toast-warning sb-toast-normal',
            icon: 'warning icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.ErrorToasterStandard = function () {
        this.iziToast.show({
            title: 'Delete this Content Type',
            message: 'When you delete a folder you also delete all of its contents.',
            class: 'sb-toaster sb-toast-danger sb-toast-normal',
            icon: 'plus icon',
            position: 'center',
            timeout: 100000000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    };
    ToastersComponent.prototype.ngOnInit = function () { };
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

/***/ "./src/app/tooltip/tooltip.component.html":
/*!************************************************!*\
  !*** ./src/app/tooltip/tooltip.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n  {{pageTitle}}\r\n</h1>\r\n<!--/Page Heading-->\r\n\r\n<!--Page Content-->\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section1.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section1.expandCode = !section1.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-outline-gray sb-btn-normal\" suiPopup popupHeader=\"Short text Discription\">Hover for\r\n      tooltip</button>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section1.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section1.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section1.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section2.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section2.expandCode = !section2.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <div class=\"ui card mx-auto\" >\r\n      <div class=\"content\" suiPopup popupHeader=\"You can customise my placement!\" [popupPlacement]=\"selectedPosition\">\r\n        <div class=\"header\">Positioning</div>\r\n        <div class=\"description\">\r\n          Popup placement can be anywhere around the content.\r\n        </div>\r\n      </div>\r\n      <p class=\"mt-20 mb-5 px-15\"><strong>Select Positions</strong></p>\r\n      <sui-select class=\"selection mx-15 mb-10\" [(ngModel)]=\"selectedPosition\">\r\n        <sui-select-option *ngFor=\"let option of positions\" [value]=\"option\">\r\n        </sui-select-option>\r\n      </sui-select>\r\n    </div>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section2.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section2.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section2.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<div class=\"docs-sections\">\r\n\r\n  <h4 class=\"docs-sectionHeading\">\r\n    {{section3.title}}\r\n    <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section3.expandCode = !section3.expandCode\"\r\n      title=\"Toggle Code\" tabindex=\"0\"></i>\r\n  </h4>\r\n\r\n  <!--Display output-->\r\n  <div class=\"docs-sectionDemoCode\">\r\n    <button class=\"sb-btn sb-btn-outline-gray sb-btn-normal mr-20\" suiPopup popupHeader=\"Title\"\r\n    popupText=\"Short text Discription\" popupPlacement=\"top\">Title tooltip</button>\r\n  </div>\r\n  <!--/Display output-->\r\n\r\n  <!--Display code-->\r\n  <div class=\"docs-sectionCopyCode\" *ngIf=\"section3.expandCode\">\r\n\r\n    <!--Copy code button-->\r\n    <button ngxClipboard [cbContent]=\"section3.copyCode\"\r\n      class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n    <!--/Copy code button-->\r\n\r\n    <!--Copy code display-->\r\n    <pre>\r\n      <code [highlight]=\"section3.copyCode\"></code>\r\n    </pre>\r\n    <!--/Copy code display-->\r\n\r\n  </div>\r\n  <!--/Display code-->\r\n\r\n</div>\r\n<!--Page Content-->\r\n"

/***/ }),

/***/ "./src/app/tooltip/tooltip.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tooltip/tooltip.component.ts ***!
  \**********************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.selectedPosition = 'top';
        this.pageTitle = 'Tooltip';
        this.section1 = {
            expandCode: false,
            title: 'Standard Tooltip',
            demoCode: "<button class=\"sb-btn sb-btn-outline-gray sb-btn-normal\" suiPopup popupHeader=\"Short text Discription\">Hover for\n    tooltip</button>",
            copyCode: "<button class=\"sb-btn sb-btn-outline-gray sb-btn-normal\" suiPopup popupHeader=\"Short text Discription\">Hover for\n    tooltip</button>"
        };
        this.section2 = {
            expandCode: false,
            title: 'Positions for Tooltip',
            demoCode: "<div class=\"ui card mx-auto\" >\n    <div class=\"content\" suiPopup popupHeader=\"You can customise my placement!\" [popupPlacement]=\"selectedPosition\">\n      <div class=\"header\">Positioning</div>\n      <div class=\"description\">\n        Popup placement can be anywhere around the content.\n      </div>\n    </div>\n    <p class=\"mt-20 mb-5 px-15\"><strong>Select Positions</strong></p>\n    <sui-select class=\"selection mx-15 mb-10\" [(ngModel)]=\"selectedPosition\">\n      <sui-select-option *ngFor=\"let option of positions\" [value]=\"option\">\n      </sui-select-option>\n    </sui-select>\n  </div>",
            copyCode: "<div class=\"ui card mx-auto\" >\n    <div class=\"content\" suiPopup popupHeader=\"You can customise my placement!\" [popupPlacement]=\"selectedPosition\">\n      <div class=\"header\">Positioning</div>\n      <div class=\"description\">\n        Popup placement can be anywhere around the content.\n      </div>\n    </div>\n    <p class=\"mt-20 mb-5 px-15\"><strong>Select Positions</strong></p>\n    <sui-select class=\"selection mx-15 mb-10\" [(ngModel)]=\"selectedPosition\">\n      <sui-select-option *ngFor=\"let option of positions\" [value]=\"option\">\n      </sui-select-option>\n    </sui-select>\n  </div>"
        };
        this.section3 = {
            expandCode: false,
            title: 'Title for Tooltip',
            demoCode: "<button class=\"sb-btn sb-btn-outline-gray sb-btn-normal mr-20\" suiPopup popupHeader=\"Title\"\n    popupText=\"Short text Discription\" popupPlacement=\"top\">Title tooltip</button>",
            copyCode: "<button class=\"sb-btn sb-btn-outline-gray sb-btn-normal mr-20\" suiPopup popupHeader=\"Title\"\n    popupText=\"Short text Discription\" popupPlacement=\"top\">Title tooltip</button>"
        };
        // tslint:disable-next-line:max-line-length
        this.positions = ['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'right', 'right top', 'right bottom', 'left', 'left top', 'left bottom'];
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/tooltip/tooltip.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.html":
/*!******************************************************!*\
  !*** ./src/app/typography/typography.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Heading-->\r\n<h1 class=\"docs-pageHeading\">\r\n    {{pageTitle}}\r\n  </h1>\r\n  <!--/Page Heading-->\r\n  \r\n  <!--Page Content-->\r\n  <p>Text is the main way that teams visualize content and complete their work, so we've developed a typographic landscape that uses system fonts for all standard typefaces in Diksha products.</p>\r\n  \r\n  <hr class=\"sb-doc-hr\">\r\n  \r\n  <h4>Font</h4>\r\n  <div class=\"img-block\"><img src=\"docs/assets/images/font.jpg\" width=\"\" alt=\"\" title=\"\" /></div>\r\n  <p>Please note : All the fonts are of the same font size and weight, i.e. Noto Sans Regular</p>\r\n  \r\n  <hr class=\"sb-doc-hr\">\r\n  \r\n  <h4>Typography</h4>\r\n  <p>The most powerful part of the 8pt grid concept is its ability to drive consistency throughout your designs. You will need to assess the needs of your users and the best way to scale your typography to meet those needs.</p>\r\n  \r\n  <div class=\"sb-dtable-container\">\r\n    <table class=\"ui selectable fixed single-line table no-br-radius sb-dtable\">\r\n      <thead class=\"sb-dtable-header\">\r\n        <tr>\r\n          <th>Size</th>\r\n          <th>in REM</th>\r\n          <th>in PX</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"sb-dtable-body\">\r\n        <tr>\r\n          <td>H1</td>\r\n          <td>2.071rem/2.285rem</td>\r\n          <td>29px/32px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H1</td>\r\n          <td>2.071rem/2.285rem</td>\r\n          <td>29px/32px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H2</td>\r\n          <td>1.714rem/2rem</td>\r\n          <td>24px/28px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H3</td>\r\n          <td>1.428rem/1.714rem</td>\r\n          <td>20px/24px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H4</td>\r\n          <td>1.142rem/1.428rem</td>\r\n          <td>16px/20px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H5</td>\r\n          <td>1rem/1.285rem</td>\r\n          <td>14px/18px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>H6</td>\r\n          <td>0.857rem/1.142rem</td>\r\n          <td>12px/16px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>P</td>\r\n          <td>1rem/1.428rem</td>\r\n          <td>14px/20px</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Overline</td>\r\n          <td>0.714rem</td>\r\n          <td>10px</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n      \r\n  <hr class=\"sb-doc-hr\">\r\n\r\n  <h4>Font Scale & Line Height</h4>\r\n  <p>The font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font.</p>\r\n  <div class=\"img-block\"><img src=\"docs/assets/images/fontsize.jpg\" width=\"100%\" alt=\"\" title=\"\" /></div>\r\n  \r\n  <div class=\"sb-table-container\">\r\n    <table class=\"sb-table sb-table-hover\">\r\n      <!-- <thead class=\"sb-dtable-header\">\r\n        <tr>\r\n          <th class=\"sb-sort-icon\">Font Size</th>\r\n          <td>H1</td>\r\n          <td>2.071rem/2.285rem</td>\r\n          <td>29px/32px</td>\r\n        </tr>stats\r\n      </thead> -->\r\n      <tbody class=\"sb-table-body\">\r\n        <tr>\r\n          <th>Font Size</th>\r\n          <td>12</td>\r\n          <td>14</td>\r\n          <td>16</td>\r\n          <td>20</td>\r\n          <td>24</td>\r\n          <td>32</td>\r\n          <td>40</td>\r\n          <td>48</td>\r\n          <td>56</td>\r\n          <td>64</td>\r\n        </tr>\r\n        <tr>\r\n          <th>Line Height</th>\r\n          <td>20</td>\r\n          <td>22</td>\r\n          <td>24</td>\r\n          <td>28</td>\r\n          <td>32</td>\r\n          <td>40</td>\r\n          <td>48</td>\r\n          <td>56</td>\r\n          <td>64</td>\r\n          <td>72</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  \r\n  <p>Our recommended base font size is 14, and its corresponding line height is 22. The choice of the rest of the font scale can be freely defined according to the specific circumstances. It is recommended that in a design system (except for display pages), the choice of font scale should be controlled within 3 to 5 types, and the principle of restraint should be maintained.</p>\r\n  \r\n  \r\n  \r\n  <div class=\"docs-sections sb-doc-hidden\" *ngFor=\"let section of sections;\">\r\n  \r\n    <h4 class=\"docs-sectionHeading\">\r\n      {{section.title}}\r\n      <i class=\"fa fa-code text-gray docs-expandCode\" (click)=\"section.expandCode = !section.expandCode\"\r\n        title=\"Toggle Code\" tabindex=\"0\"></i>\r\n    </h4>\r\n  \r\n    <!--Display output-->\r\n    <div class=\"docs-sectionDemoCode\" [innerHTML]=\"section.demoCode | keepHtml\">\r\n    </div>\r\n    <!--/Display output-->\r\n  \r\n    <!--Display code-->\r\n    <div class=\"docs-sectionCopyCode\" *ngIf=\"section.expandCode\">\r\n  \r\n      <!--Copy code button-->\r\n      <button ngxClipboard [cbContent]=\"section.copyCode\"\r\n        class=\"sb-btn sb-btn-primary sb-btn-xs fa fa-copy btn-copy\"></button>\r\n      <!--/Copy code button-->\r\n  \r\n      <!--Copy code display-->\r\n      <pre>\r\n        <code [highlight]=\"section.copyCode\"></code>\r\n      </pre>\r\n      <!--/Copy code display-->\r\n  \r\n    </div>\r\n    <!--/Display code-->\r\n  \r\n  </div>\r\n  <!--Page Content-->"

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