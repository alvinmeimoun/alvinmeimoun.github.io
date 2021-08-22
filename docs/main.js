(self["webpackChunkalvinmeimoun"] = self["webpackChunkalvinmeimoun"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.service */ 7070);
/* harmony import */ var _name_block_name_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name-block/name-block.component */ 1067);
/* harmony import */ var _licenses_block_licenses_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./licenses-block/licenses-block.component */ 9466);
/* harmony import */ var _skills_block_skills_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills-block/skills-block.component */ 8086);
/* harmony import */ var _experiences_block_experiences_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experiences-block/experiences-block.component */ 124);






class AppComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.title = 'Alvin MEIMOUN';
    }
    ngOnInit() {
        this.languageService.applyDefaultLang();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "root"], [1, "fixed-header"], [1, "name"], [1, "space"], [1, "translate-root"], [3, "click"], [1, "scrollable-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Alvin MEIMOUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_span_click_6_listener() { return ctx.languageService.changeLang("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_span_click_9_listener() { return ctx.languageService.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-name-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-licenses-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-skills-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-experiences-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_name_block_name_block_component__WEBPACK_IMPORTED_MODULE_1__.NameBlockComponent, _licenses_block_licenses_block_component__WEBPACK_IMPORTED_MODULE_2__.LicensesBlockComponent, _skills_block_skills_block_component__WEBPACK_IMPORTED_MODULE_3__.SkillsBlockComponent, _experiences_block_experiences_block_component__WEBPACK_IMPORTED_MODULE_4__.ExperiencesBlockComponent], styles: [".fixed-header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  height: 50px;\n  width: 100%;\n  background: black;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  color: white;\n}\n.fixed-header[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.fixed-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: 700;\n}\n.fixed-header[_ngcontent-%COMP%]   .translate-root[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.fixed-header[_ngcontent-%COMP%]   .translate-root[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.fixed-header[_ngcontent-%COMP%]   .translate-root[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.app-name-block[_ngcontent-%COMP%] {\n  z-index: 101;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFMZ0I7RUFNaEIsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtBQURSO0FBSUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFLSTtFQUNJLGtCQUFBO0FBSFI7QUFLUTtFQUNJLGdCQUFBO0FBSFo7QUFNUTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUpaO0FBUUE7RUFDSSxZQUFBO0FBTEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpeGVkLWhlYWRlci1zaXplOiA1MHB4O1xuXG4uZml4ZWQtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6ICRmaXhlZC1oZWFkZXItc2l6ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgLnNwYWNlIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgLnRyYW5zbGF0ZS1yb290IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW46aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYXBwLW5hbWUtYmxvY2sge1xuICAgIHotaW5kZXg6IDEwMTtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _name_block_name_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-block/name-block.component */ 1067);
/* harmony import */ var _name_block_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-block/social-icon/social-icon.component */ 4848);
/* harmony import */ var _licenses_block_licenses_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./licenses-block/licenses-block.component */ 9466);
/* harmony import */ var _licenses_block_license_item_license_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./licenses-block/license-item/license-item.component */ 7358);
/* harmony import */ var _skills_block_skills_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills-block/skills-block.component */ 8086);
/* harmony import */ var _skills_block_prog_lang_skill_prog_lang_skill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills-block/prog-lang-skill/prog-lang-skill.component */ 1692);
/* harmony import */ var _skills_block_group_skill_group_skill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills-block/group-skill/group-skill.component */ 7930);
/* harmony import */ var _experiences_block_experiences_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiences-block/experiences-block.component */ 124);
/* harmony import */ var _experiences_block_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiences-block/experience/experience.component */ 112);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./language.service */ 7070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _name_block_name_block_component__WEBPACK_IMPORTED_MODULE_2__.NameBlockComponent,
        _name_block_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__.SocialIconComponent,
        _licenses_block_licenses_block_component__WEBPACK_IMPORTED_MODULE_4__.LicensesBlockComponent,
        _licenses_block_license_item_license_item_component__WEBPACK_IMPORTED_MODULE_5__.LicenseItemComponent,
        _skills_block_skills_block_component__WEBPACK_IMPORTED_MODULE_6__.SkillsBlockComponent,
        _skills_block_prog_lang_skill_prog_lang_skill_component__WEBPACK_IMPORTED_MODULE_7__.ProgLangSkillComponent,
        _skills_block_group_skill_group_skill_component__WEBPACK_IMPORTED_MODULE_8__.GroupSkillComponent,
        _experiences_block_experiences_block_component__WEBPACK_IMPORTED_MODULE_9__.ExperiencesBlockComponent,
        _experiences_block_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__.ExperienceComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 112:
/*!**********************************************************************!*\
  !*** ./src/app/experiences-block/experience/experience.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent),
/* harmony export */   "Experience": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);



function ExperienceComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.experience.period));
} }
function ExperienceComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExperienceComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.experience.location));
} }
function ExperienceComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.experience.position));
} }
function ExperienceComponent_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, line_r6));
} }
function ExperienceComponent_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_ul_15_li_1_Template, 3, 3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.experience.lines);
} }
class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
    openLink(url) {
        if (url)
            window.open(url, "_blank");
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], inputs: { experience: "experience" }, decls: 16, vars: 10, consts: [[1, "root"], [1, "line-root"], [1, "point"], [1, "line"], [1, "content"], [1, "top-line"], [1, "company", 3, "click"], ["class", "period normal-text", 4, "ngIf"], ["class", "normal-text", 4, "ngIf"], ["class", "location normal-text", 4, "ngIf"], [1, "second-line"], ["class", "position", 4, "ngIf"], [4, "ngIf"], [1, "period", "normal-text"], [1, "normal-text"], [1, "location", "normal-text"], [1, "position"], [4, "ngFor", "ngForOf"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_span_click_6_listener() { return ctx.openLink(ctx.experience.url); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_span_10_Template, 3, 3, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceComponent_span_11_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceComponent_span_12_Template, 3, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExperienceComponent_span_14_Template, 3, 3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceComponent_ul_15_Template, 2, 1, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("clickable", ctx.experience.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.experience.company));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.period);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.period && ctx.experience.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.lines && ctx.experience.lines.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 0px 0px;\n  gap: 0px 0px;\n  grid-template-areas: \"line content\";\n}\n\n.line-root[_ngcontent-%COMP%] {\n  grid-area: line;\n}\n\n.line-root[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  border: 1px solid #2F528F;\n  background: #4472C4;\n  margin-left: auto;\n}\n\n.line-root[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 8.5px;\n  height: calc(100% - 18px);\n  width: 2px;\n  background: #4472C4;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-area: content;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  font-size: 14px;\n}\n\n.content[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.content[_ngcontent-%COMP%]   .company.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%]   .company.clickable[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.content[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQUEsWUFBQTtFQUNBLG1DQUNFO0FBQU47O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQVI7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJSTtFQUNJLGdCQUFBO0FBRlI7O0FBSVE7RUFDSSxlQUFBO0FBRlo7O0FBS1E7RUFDSSwwQkFBQTtBQUhaOztBQU9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTFIiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcImxpbmUgY29udGVudFwiO1xufVxuXG4ubGluZS1yb290IHsgXG4gICAgZ3JpZC1hcmVhOiBsaW5lO1xuXG4gICAgLnBvaW50IHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMkY1MjhGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ3MkM0O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAubGluZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDguNXB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4cHgpO1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ3MkM0O1xuICAgIH1cbn1cblxuLmNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC5jb21wYW55IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAmLmNsaWNrYWJsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50b3AtbGluZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDsgLy8gSGVyZSBpIGtub3cgZXhhY3RseSB3aGF0IGkgZG8gd2l0aCB0aGlzIG5lZ2F0aXZlIG1hcmdpbiwgaSBhbGlnbiB0ZXh0IHdpdGggcG9pbnQsIGFuZCBwb2ludCBtdXN0IGJlIG9uIHRvcCBvZiBkaXYgdG8gc2ltdWxhdGUgZ2l0IGhpc3Rvcnkgc3R5bGVcbiAgICB9XG59Il19 */"] });
class Experience {
    constructor() {
        this.location = "";
        this.position = "";
        this.url = "";
        this.lines = [];
    }
}


/***/ }),

/***/ 124:
/*!******************************************************************!*\
  !*** ./src/app/experiences-block/experiences-block.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencesBlockComponent": () => (/* binding */ ExperiencesBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience/experience.component */ 112);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




function ExperiencesBlockComponent_app_experience_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-experience", 4);
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("experience", experience_r1);
} }
class ExperiencesBlockComponent {
    constructor() {
        this.experiences = [
            {
                company: "MyTower (Adias)",
                period: "experiences.items.mytower.period",
                location: "experiences.items.mytower.location",
                position: "experiences.items.mytower.title",
                url: "https://www.mytower.fr",
                lines: [
                    "experiences.items.mytower.line1",
                    "experiences.items.mytower.line2",
                    "experiences.items.mytower.line3",
                    "experiences.items.mytower.line4",
                    "experiences.items.mytower.line5",
                    "experiences.items.mytower.line6"
                ]
            },
            {
                company: "Capgemini",
                period: "experiences.items.capgemini.period",
                location: "Sophia-Antipolis (France)",
                position: "experiences.items.capgemini.title",
                url: "https://www.capgemini.com",
                lines: [
                    "experiences.items.capgemini.line1",
                    "experiences.items.capgemini.line2",
                    "experiences.items.capgemini.line3",
                    "experiences.items.capgemini.line4",
                    "experiences.items.capgemini.line5"
                ]
            },
            {
                company: "Beepeers",
                period: "experiences.items.beepeers.period",
                location: "Sophia-Antipolis (France)",
                position: "experiences.items.beepeers.title",
                url: "http://www.beepeers.com",
                lines: [
                    "experiences.items.beepeers.line1",
                    "experiences.items.beepeers.line2"
                ]
            },
            {
                company: "experiences.items.self-taught.company",
                lines: [
                    "experiences.items.self-taught.line4",
                    "experiences.items.self-taught.line3",
                    "experiences.items.self-taught.line2",
                    "experiences.items.self-taught.line1"
                ]
            },
        ];
    }
    ngOnInit() {
    }
}
ExperiencesBlockComponent.ɵfac = function ExperiencesBlockComponent_Factory(t) { return new (t || ExperiencesBlockComponent)(); };
ExperiencesBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperiencesBlockComponent, selectors: [["app-experiences-block"]], decls: 6, vars: 4, consts: [[1, "root"], [1, "section-title"], [1, "experiences-list"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]], template: function ExperiencesBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExperiencesBlockComponent_app_experience_5_Template, 1, 1, "app-experience", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "experiences.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #fefefe;\n}\n\n.experiences-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 1000px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2VzLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJleHBlcmllbmNlcy1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xufVxuXG4uZXhwZXJpZW5jZXMtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ 7070:
/*!*************************************!*\
  !*** ./src/app/language.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9790);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
    }
    changeLang(newLang) {
        if (newLang == null) {
            console.warn("Trying to set null language");
        }
        this.translate.use(newLang);
        localStorage.setItem(LanguageService.KEY_STORED_LANG, newLang);
    }
    applyDefaultLang() {
        this.translate.setDefaultLang("en");
        if (this.getSelectedLang() != null) {
            this.translate.use(this.getSelectedLang());
        }
    }
    getSelectedLang() {
        if (this.getStoredLang() != null) {
            return this.getStoredLang();
        }
        if (this.getBrowserLang() != null) {
            return this.getBrowserLang().substring(0, 2).toLowerCase();
        }
        return null;
    }
    getStoredLang() {
        return localStorage.getItem(LanguageService.KEY_STORED_LANG);
    }
    getBrowserLang() {
        return navigator.languages ? navigator.languages[0] : (navigator.language);
    }
}
LanguageService.KEY_STORED_LANG = "language";
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7358:
/*!***********************************************************************!*\
  !*** ./src/app/licenses-block/license-item/license-item.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseItemComponent": () => (/* binding */ LicenseItemComponent),
/* harmony export */   "LicenseItem": () => (/* binding */ LicenseItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);



function LicenseItemComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "license.training_period") + " : " + ctx_r0.data.curriculumPeriod, " ");
} }
function LicenseItemComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "license.degree_obtention_date") + " " + ctx_r1.data.graduationDate, "");
} }
function LicenseItemComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.data.description));
} }
class LicenseItemComponent {
    constructor() { }
    ngOnInit() {
    }
    openLink(url) {
        if (url)
            window.open(url, "_blank");
    }
}
LicenseItemComponent.ɵfac = function LicenseItemComponent_Factory(t) { return new (t || LicenseItemComponent)(); };
LicenseItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LicenseItemComponent, selectors: [["app-license-item"]], inputs: { data: "data" }, decls: 14, vars: 12, consts: [[1, "root", 3, "click"], [1, "logo"], [3, "src"], [1, "top-text"], [1, "title"], [1, "company"], [1, "level3"], [4, "ngIf"], ["class", "bottom-content", 4, "ngIf"], [1, "bottom-content"], [1, "description"]], template: function LicenseItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LicenseItemComponent_Template_div_click_0_listener() { return ctx.openLink(ctx.data.link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LicenseItemComponent_span_11_Template, 3, 3, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LicenseItemComponent_span_12_Template, 3, 3, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LicenseItemComponent_div_13_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("clickable", ctx.data.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + ctx.data.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.data.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.data.company));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.curriculumPeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.graduationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  grid-gap: 0px 0px;\n  gap: 0px 0px;\n  grid-template-areas: \"logo top-text\" \"bottom-content .\";\n  background: #e6ecff;\n  border-radius: 10px;\n  border: white 1px solid;\n  padding: 5px;\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n  grid-area: logo;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: auto;\n  margin-right: 5px;\n}\n\n.top-text[_ngcontent-%COMP%] {\n  grid-area: top-text;\n}\n\n.top-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n}\n\n.top-text[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #111111;\n}\n\n.top-text[_ngcontent-%COMP%]   .level3[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-style: italic;\n  color: #333333;\n}\n\n.bottom-content[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  grid-area: bottom-content;\n  grid-column: span 2;\n}\n\n.bottom-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: #222222;\n  line-height: normal;\n}\n\n.top-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: normal;\n}\n\n.root.clickable[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 25px 5px rgba(8, 139, 255, 0.7);\n  transition: box-shadow 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpY2Vuc2UtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0VBQ0EsdURBQ0U7RUFHRixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUlFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZOOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFLRTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSE47O0FBTUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUpOOztBQU9FO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxOOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBUUU7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTk47O0FBV0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFZQTtFQUNJLGVBQUE7RUFDQSxtREFBQTtFQUNBLHVDQUFBO0FBVEoiLCJmaWxlIjoibGljZW5zZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBnYXA6IDBweCAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJsb2dvIHRvcC10ZXh0XCJcbiAgICBcImJvdHRvbS1jb250ZW50IC5cIjtcblxuICBiYWNrZ3JvdW5kOiAjZTZlY2ZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgZ3JpZC1hcmVhOiBsb2dvO1xuXG4gIGltZyB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbi50b3AtdGV4dCB7XG4gIGdyaWQtYXJlYTogdG9wLXRleHQ7XG5cbiAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5jb21wYW55IHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICB9XG5cbiAgLmxldmVsMyB7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG59XG5cbi5ib3R0b20tY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGdyaWQtYXJlYTogYm90dG9tLWNvbnRlbnQ7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG59XG5cbi50b3AtdGV4dCwgLmJvdHRvbS1jb250ZW50IHtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxufVxuXG4ucm9vdC5jbGlja2FibGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggNXB4IHJnYmEoOCwxMzksMjU1LDAuNyk7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xufSJdfQ== */"] });
class LicenseItem {
    constructor() {
        this.title = "";
        this.graduationDate = "";
        this.company = "";
    }
}


/***/ }),

/***/ 9466:
/*!************************************************************!*\
  !*** ./src/app/licenses-block/licenses-block.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicensesBlockComponent": () => (/* binding */ LicensesBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _license_item_license_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license-item/license-item.component */ 7358);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




function LicensesBlockComponent_app_license_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-license-item", 4);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r2);
} }
function LicensesBlockComponent_app_license_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-license-item", 4);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r3);
} }
class LicensesBlockComponent {
    constructor() {
        this.academicCurriculum = [
            {
                title: "license.items.academic.1.title",
                curriculumPeriod: "2008-2012",
                graduationDate: "2012",
                description: "license.items.academic.1.desc",
                logo: "companies/fr-en.png",
                company: "license.items.academic.1.company",
                location: "Nice, France",
                link: "https://eduscol.education.fr/sti/formations/bac-technologique-sti-genie-electronique-abroge-juin-2012"
            },
            {
                title: "Master Of Science",
                curriculumPeriod: "2012-2017",
                graduationDate: "2017",
                description: "Bac+5",
                logo: "companies/supinfo.png",
                company: "SUPINFO",
                location: "Nice, France",
                link: "https://www.supinfo.com"
            },
        ];
        this.certifications = [
            {
                title: "Mobile & Responsive Web Device",
                graduationDate: "2017",
                logo: "companies/supinfo.png",
                company: "Supinfo",
                link: "http://web.archive.org/web/20160414095744/https://www.supinfo.com/fr/Newsdceadfa8-eaab-45f3-8398-b62c182723bb.aspx"
            },
            {
                title: "OCP Java SE 11 Developer",
                graduationDate: "2021",
                logo: "badge/ocp_javase11dev.png",
                company: "Oracle",
                link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=62439C1720828961FE97D82A3533FB51861FE8853F256F556CC1253EF1A906B1",
                description: "Oracle Certified Professional: Java SE 11 Developer"
            },
        ];
    }
    ngOnInit() {
    }
}
LicensesBlockComponent.ɵfac = function LicensesBlockComponent_Factory(t) { return new (t || LicensesBlockComponent)(); };
LicensesBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LicensesBlockComponent, selectors: [["app-licenses-block"]], decls: 11, vars: 8, consts: [[1, "root"], [1, "section-title"], [1, "item-list"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function LicensesBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LicensesBlockComponent_app_license_item_5_Template, 1, 1, "app-license-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LicensesBlockComponent_app_license_item_10_Template, 1, 1, "app-license-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "license.academic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.academicCurriculum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "license.certifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.certifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _license_item_license_item_component__WEBPACK_IMPORTED_MODULE_0__.LicenseItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  background: #363636;\n  background: linear-gradient(168deg, #363636 0%, #333333 100%);\n  padding-bottom: 5px;\n}\n\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\napp-license-item[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 250px;\n  max-width: 250px;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpY2Vuc2VzLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibGljZW5zZXMtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDU0LDU0LDU0KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY4ZGVnLCByZ2JhKDU0LDU0LDU0LDEpIDAlLCByZ2JhKDUxLDUxLDUxLDEpIDEwMCUpO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hcHAtbGljZW5zZS1pdGVtIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 1067:
/*!****************************************************!*\
  !*** ./src/app/name-block/name-block.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NameBlockComponent": () => (/* binding */ NameBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language.service */ 7070);
/* harmony import */ var _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-icon/social-icon.component */ 4848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




class NameBlockComponent {
    constructor(languageService) {
        this.languageService = languageService;
    }
    ngOnInit() {
    }
}
NameBlockComponent.ɵfac = function NameBlockComponent_Factory(t) { return new (t || NameBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
NameBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NameBlockComponent, selectors: [["app-name-block"]], decls: 25, vars: 9, consts: [[1, "translate-root"], [3, "click"], [1, "content-root"], [1, "text-root"], [1, "split", "name-title-part"], [1, "name"], [1, "title"], [1, "split", "details-part"], [1, "details"], [1, "links-root"], ["link", "https://www.linkedin.com/in/alvinmeimoun", "iconClass", "fab fa-linkedin"], ["link", "https://github.com/alvinmeimoun", "iconClass", "fab fa-github"], ["link", "https://stackoverflow.com/users/1024368/alvinmeimoun", "iconClass", "fab fa-stack-overflow"]], template: function NameBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NameBlockComponent_Template_span_click_1_listener() { return ctx.languageService.changeLang("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NameBlockComponent_Template_span_click_3_listener() { return ctx.languageService.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Alvin MEIMOUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-social-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "app-social-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "app-social-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 3, "intro.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 5, "intro.details_1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 7, "intro.details_2"), " ");
    } }, directives: [_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_1__.SocialIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".translate-root[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1002;\n  right: 10px;\n  top: 5px;\n  color: #333;\n}\n.translate-root[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.translate-root[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.content-root[_ngcontent-%COMP%] {\n  background: #abc6f5;\n  background: linear-gradient(344deg, #abc6f5 0%, #dae3f3 100%);\n  height: auto;\n  min-height: 200px;\n  z-index: 1001;\n  padding: 10px;\n  position: relative;\n  display: flex;\n  flex-flow: column;\n}\n.text-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  align-items: center;\n  flex: 1 0 auto;\n}\n.split[_ngcontent-%COMP%] {\n  flex: 1 1 400px;\n  text-align: center;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 400;\n}\n@media (max-width: 450px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 400;\n}\n@media (max-width: 450px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.details[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 200;\n}\n@media (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.name[_ngcontent-%COMP%], .title[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.links-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n}\n.links-root[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.name-title-part[_ngcontent-%COMP%] {\n  animation: fadeInLeft;\n}\n.details-part[_ngcontent-%COMP%] {\n  animation: fadeInRight;\n}\n.name-title-part[_ngcontent-%COMP%], .details-part[_ngcontent-%COMP%] {\n  animation-duration: 0.5s;\n}\n@media (max-width: 820px) {\n  .name-title-part[_ngcontent-%COMP%], .details-part[_ngcontent-%COMP%] {\n    animation: fadeIn;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUtYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FBSFI7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0FBTEo7QUFRQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUxKO0FBUUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUpKO0lBS1EsZUFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFKSjtJQUtRLGVBQUE7RUFITjtBQUNGO0FBTUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBSko7SUFLUSxlQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0kscUdBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUZKO0FBS0E7RUFDSSxpQkFBQTtBQUZKO0FBS0E7RUFDSSxxQkFBQTtBQUZKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBSUE7RUFDSSx3QkFBQTtBQURKO0FBRUk7RUFGSjtJQUdRLGlCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJuYW1lLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNtYWxsLXRleHQtYnA6IDQ1MHB4O1xuJHdyYXAtYnA6IDgyMHB4O1xuXG4udHJhbnNsYXRlLXJvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAyO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgc3Bhbjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY29udGVudC1yb290IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTcxLDE5OCwyNDUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDRkZWcsIHJnYmEoMTcxLDE5OCwyNDUsMSkgMCUsIHJnYmEoMjE4LDIyNywyNDMsMSkgMTAwJSk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHotaW5kZXg6IDEwMDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4udGV4dC1yb290IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uc3BsaXQge1xuICAgIGZsZXg6IDEgMSA0MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtdGV4dC1icCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbC10ZXh0LWJwKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtdGV4dC1icCkge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG4ubmFtZSwgLnRpdGxlLCAuZGV0YWlscyB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5saW5rcy1yb290IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlua3Mtcm9vdCA+ICogKyAqIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5hbWUtdGl0bGUtcGFydCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0O1xufVxuLmRldGFpbHMtcGFydCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodDtcbn1cblxuLm5hbWUtdGl0bGUtcGFydCwgLmRldGFpbHMtcGFydCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkd3JhcC1icCkge1xuICAgICAgICBhbmltYXRpb246IGZhZGVJbjtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 4848:
/*!*****************************************************************!*\
  !*** ./src/app/name-block/social-icon/social-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconComponent": () => (/* binding */ SocialIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SocialIconComponent {
    constructor() {
        this.link = "";
        this.iconClass = "";
    }
    ngOnInit() {
    }
}
SocialIconComponent.ɵfac = function SocialIconComponent_Factory(t) { return new (t || SocialIconComponent)(); };
SocialIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialIconComponent, selectors: [["app-social-icon"]], inputs: { link: "link", iconClass: "iconClass" }, decls: 5, vars: 3, consts: [[1, "root"], ["target", "_blank", 3, "href"], [1, "icon"], [1, "background"]], template: function SocialIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.iconClass);
    } }, styles: [".root[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.background[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 52px;\n  width: 52px;\n  left: 0;\n  top: 0;\n  z-index: 11;\n  display: none;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 35px;\n  z-index: 12;\n  color: darkcyan;\n}\n\na[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.icon[_ngcontent-%COMP%] {\n  z-index: 12;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 52px;\n  width: 52px;\n}\n\n.root[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%] {\n  background: #44444444;\n  display: inline;\n  animation: zoomIn;\n  animation-duration: 0.2s;\n  border-radius: 50%;\n}\n\n.root[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  animation: pulse;\n  animation-duration: 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsWUFSYztFQVNkLFdBVGM7RUFVZCxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBaENjO0VBaUNkLFdBakNjO0FBZ0NsQjs7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUhSIiwiZmlsZSI6InNvY2lhbC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtc2l6ZTogNTJweDtcblxuLnJvb3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6ICRiYWNrZ3JvdW5kLXNpemU7XG4gICAgd2lkdGg6ICRiYWNrZ3JvdW5kLXNpemU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTE7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHotaW5kZXg6IDEyO1xuICAgIGNvbG9yOiBkYXJrY3lhbjtcbn1cblxuYSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbiB7XG4gICAgei1pbmRleDogMTI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6ICRiYWNrZ3JvdW5kLXNpemU7XG4gICAgd2lkdGg6ICRiYWNrZ3JvdW5kLXNpemU7XG59XG5cbi5yb290OmhvdmVyIHtcbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ0NDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBhbmltYXRpb246IHpvb21JbjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2U7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7930:
/*!*******************************************************************!*\
  !*** ./src/app/skills-block/group-skill/group-skill.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSkillComponent": () => (/* binding */ GroupSkillComponent),
/* harmony export */   "GroupSkill": () => (/* binding */ GroupSkill)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);



function GroupSkillComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, skill_r1));
} }
class GroupSkillComponent {
    constructor() { }
    ngOnInit() {
    }
}
GroupSkillComponent.ɵfac = function GroupSkillComponent_Factory(t) { return new (t || GroupSkillComponent)(); };
GroupSkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSkillComponent, selectors: [["app-group-skill"]], inputs: { group: "group" }, decls: 6, vars: 4, consts: [[1, "root"], [1, "title"], [1, "content"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"]], template: function GroupSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSkillComponent_li_5_Template, 3, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.group.groupTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.group.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  background-color: #dddddd99;\n  border-radius: 10px;\n  display: flex;\n  flex-flow: column;\n  min-height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  border-bottom: 1px solid #999;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 8px;\n}\n\n.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFSTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQUFSIiwiZmlsZSI6Imdyb3VwLXNraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ5OTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSJdfQ== */"] });
class GroupSkill {
    constructor(groupTitle, skills) {
        this.groupTitle = groupTitle;
        this.skills = skills;
    }
}


/***/ }),

/***/ 1692:
/*!***************************************************************************!*\
  !*** ./src/app/skills-block/prog-lang-skill/prog-lang-skill.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgLangSkillComponent": () => (/* binding */ ProgLangSkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProgLangSkillComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgLangSkillComponent.ɵfac = function ProgLangSkillComponent_Factory(t) { return new (t || ProgLangSkillComponent)(); };
ProgLangSkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgLangSkillComponent, selectors: [["app-prog-lang-skill"]], inputs: { name: "name" }, decls: 3, vars: 1, consts: [[1, "root"]], template: function ProgLangSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, styles: [".root[_ngcontent-%COMP%] {\n  background-color: #dddddd99;\n  padding: 5px;\n  border-radius: 10px;\n}\n.root[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ctbGFuZy1za2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJwcm9nLWxhbmctc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDk5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 8086:
/*!********************************************************!*\
  !*** ./src/app/skills-block/skills-block.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsBlockComponent": () => (/* binding */ SkillsBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _prog_lang_skill_prog_lang_skill_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prog-lang-skill/prog-lang-skill.component */ 1692);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _group_skill_group_skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-skill/group-skill.component */ 7930);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9790);





function SkillsBlockComponent_app_group_skill_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-group-skill", 11);
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("group", skill_r1);
} }
class SkillsBlockComponent {
    constructor() {
        this.skills = [
            {
                groupTitle: "Spring",
                skills: ["Boot", "Data", "Security"]
            },
            {
                groupTitle: ".NET",
                skills: ["ASP.NET MVC", "UWP", "Xamarin", "WPF", "Office", "Entity Framework"]
            },
            {
                groupTitle: "Mobile",
                skills: ["Android (Java)", "iOS (Swift + UIKit)", "Windows Phone"]
            },
            {
                groupTitle: "Test",
                skills: ["JUnit", "NUnit", "Selenium", "Mockito", "REST Assured"]
            },
            {
                groupTitle: "skills.items.quality",
                skills: ["Jenkins", "SonarQube"]
            },
            {
                groupTitle: "SGBD",
                skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"]
            },
            {
                groupTitle: "Web",
                skills: ["Angular", "CSS3", "jQuery", "Aria Templates"]
            },
            {
                groupTitle: "DevOps",
                skills: ["Docker", "Kubernetes", "AWS", "Linux", "Windows Server"]
            },
            {
                groupTitle: "skills.items.artificial_intelligence",
                skills: ["OptaPlanner"]
            },
            {
                groupTitle: "skills.items.project_tools",
                skills: ["JIRA Software", "Gerrit", "Git"]
            },
            {
                groupTitle: "skills.items.languages",
                skills: [
                    "skills.items.lang_fr",
                    "skills.items.lang_en",
                    "skills.items.lang_ar"
                ]
            }
        ];
    }
    ngOnInit() {
    }
}
SkillsBlockComponent.ɵfac = function SkillsBlockComponent_Factory(t) { return new (t || SkillsBlockComponent)(); };
SkillsBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsBlockComponent, selectors: [["app-skills-block"]], decls: 18, vars: 10, consts: [[1, "root"], [1, "section-title"], [1, "subsection-title"], [1, "languages-root"], ["name", "Java"], ["name", "C#"], ["name", "TypeScript"], ["name", "JavaScript"], ["name", "Swift"], [1, "frameworks-root"], [3, "group", 4, "ngFor", "ngForOf"], [3, "group"]], template: function SkillsBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-prog-lang-skill", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-prog-lang-skill", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-prog-lang-skill", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-prog-lang-skill", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-prog-lang-skill", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SkillsBlockComponent_app_group_skill_17_Template, 1, 1, "app-group-skill", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "skills.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "skills.programming_languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 8, "skills.framework_platforms"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_prog_lang_skill_prog_lang_skill_component__WEBPACK_IMPORTED_MODULE_0__.ProgLangSkillComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _group_skill_group_skill_component__WEBPACK_IMPORTED_MODULE_1__.GroupSkillComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".root[_ngcontent-%COMP%] {\n  background: #f2faff;\n  padding-bottom: 10px;\n}\n\n.languages-root[_ngcontent-%COMP%], .frameworks-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.languages-root[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\n.frameworks-root[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.frameworks-root[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.frameworks-root[_ngcontent-%COMP%]   app-group-skill[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBSUk7RUFDSSxlQUFBO0FBRlIiLCJmaWxlIjoic2tpbGxzLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xuICAgIGJhY2tncm91bmQ6ICNmMmZhZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5sYW5ndWFnZXMtcm9vdCwgLmZyYW1ld29ya3Mtcm9vdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmxhbmd1YWdlcy1yb290IHtcbiAgICAqIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG59XG5cbi5mcmFtZXdvcmtzLXJvb3Qge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICoge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICBhcHAtZ3JvdXAtc2tpbGwge1xuICAgICAgICBmbGV4OiAxIDEgMjAwcHg7XG4gICAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map