function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AvatarData, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarData", function () {
      return AvatarData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AvatarData =
    /*#__PURE__*/
    function () {
      function AvatarData(_ref) {
        var url = _ref.url,
            tracker = _ref.tracker,
            _ref$enableRotate = _ref.enableRotate,
            enableRotate = _ref$enableRotate === void 0 ? false : _ref$enableRotate,
            _ref$enableZoom = _ref.enableZoom,
            enableZoom = _ref$enableZoom === void 0 ? false : _ref$enableZoom,
            _ref$loading = _ref.loading,
            loading = _ref$loading === void 0 ? true : _ref$loading;

        _classCallCheck(this, AvatarData);

        this.update({
          url: url,
          tracker: tracker,
          enableRotate: enableRotate,
          enableZoom: enableZoom,
          loading: loading
        });
      }

      _createClass(AvatarData, [{
        key: "update",
        value: function update(_ref2) {
          var url = _ref2.url,
              tracker = _ref2.tracker,
              enableRotate = _ref2.enableRotate,
              enableZoom = _ref2.enableZoom,
              loading = _ref2.loading;
          this.url = url;
          this.tracker = tracker;
          this.enableRotate = enableRotate;
          this.enableZoom = enableZoom;
          this.loading = loading;
        }
      }]);

      return AvatarData;
    }();

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.men = new AvatarData({
          url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].menURL,
          tracker: 'cursor'
        });
        this.women = new AvatarData({
          url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].womenURL,
          tracker: 'cursor'
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpdateMen",
        value: function onUpdateMen(data) {
          this.men.update(data);
        }
      }, {
        key: "onUpdateWomen",
        value: function onUpdateWomen(data) {
          this.women.update(data);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 4,
      consts: [[1, "men-avatar", 3, "data"], [1, "men-form", 3, "data", "submit"], [1, "women-avatar", 3, "data"], [1, "women-form", 3, "data", "submit"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-avatar-visor", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-avatar-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_app_avatar_form_submit_1_listener($event) {
            return ctx.onUpdateMen($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-avatar-visor", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-avatar-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_app_avatar_form_submit_3_listener($event) {
            return ctx.onUpdateWomen($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.men);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.men);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.women);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.women);
        }
      },
      styles: ["[_nghost-%COMP%] {\n      display: grid;\n      grid-template-columns: 50vw 50vw;\n      grid-template-rows: 1fr auto;\n      grid-template-areas:\n      \"men-avatar women-avatar\"\n      \"men-form women-form\";\n      width: 100%;\n      height: 100vh;\n    }\n\n    .men-avatar[_ngcontent-%COMP%] { grid-area: men-avatar; }\n    .women-avatar[_ngcontent-%COMP%] { grid-area: women-avatar; }\n    .women-form[_ngcontent-%COMP%] { grid-area: women-form; }\n    .men-form[_ngcontent-%COMP%] { grid-area: men-form; }\n\n    @media only screen and (max-width: 600px) {\n      [_nghost-%COMP%] {\n        grid-template-columns: 100vw;\n        grid-template-rows: 65vh auto 65vh auto;\n        grid-template-areas:\n          \"men-avatar\"\n          \"men-form\"\n          \"women-avatar\"\n          \"women-form\";\n        height: auto;\n      }\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n\n    <app-avatar-visor class=\"men-avatar\" [data]=\"men\"></app-avatar-visor>\n    <app-avatar-form class=\"men-form\" [data]=\"men\" (submit)=\"onUpdateMen($event)\"></app-avatar-form>\n\n    <app-avatar-visor class=\"women-avatar\" [data]=\"women\"></app-avatar-visor>\n    <app-avatar-form class=\"women-form\" [data]=\"women\" (submit)=\"onUpdateWomen($event)\"></app-avatar-form>\n  ",
          styles: ["\n    :host {\n      display: grid;\n      grid-template-columns: 50vw 50vw;\n      grid-template-rows: 1fr auto;\n      grid-template-areas:\n      \"men-avatar women-avatar\"\n      \"men-form women-form\";\n      width: 100%;\n      height: 100vh;\n    }\n\n    .men-avatar { grid-area: men-avatar; }\n    .women-avatar { grid-area: women-avatar; }\n    .women-form { grid-area: women-form; }\n    .men-form { grid-area: men-form; }\n\n    @media only screen and (max-width: 600px) {\n      :host {\n        grid-template-columns: 100vw;\n        grid-template-rows: 65vh auto 65vh auto;\n        grid-template-areas:\n          \"men-avatar\"\n          \"men-form\"\n          \"women-avatar\"\n          \"women-form\";\n        height: auto;\n      }\n    }\n  "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/spinner.component */
    "./src/app/components/spinner.component.ts");
    /* harmony import */


    var _components_avatar_visor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/avatar-visor.component */
    "./src/app/components/avatar-visor.component.ts");
    /* harmony import */


    var _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @michaelldev/ngx-profile-avatar */
    "./node_modules/@michaelldev/ngx-profile-avatar/fesm2015/michaelldev-ngx-profile-avatar.js");
    /* harmony import */


    var _components_avatar_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/avatar-form.component */
    "./src/app/components/avatar-form.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // Library


    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_8__["NgxProfileAvatarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _components_avatar_visor_component__WEBPACK_IMPORTED_MODULE_7__["AvatarVisorComponent"], _components_avatar_form_component__WEBPACK_IMPORTED_MODULE_9__["AvatarFormComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_8__["NgxProfileAvatarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _components_avatar_visor_component__WEBPACK_IMPORTED_MODULE_7__["AvatarVisorComponent"], _components_avatar_form_component__WEBPACK_IMPORTED_MODULE_9__["AvatarFormComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_8__["NgxProfileAvatarModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_8__["NgxProfileAvatarComponent"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _components_avatar_visor_component__WEBPACK_IMPORTED_MODULE_7__["AvatarVisorComponent"], _components_avatar_form_component__WEBPACK_IMPORTED_MODULE_9__["AvatarFormComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/avatar-form.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/avatar-form.component.ts ***!
    \*****************************************************/

  /*! exports provided: AvatarFormComponent */

  /***/
  function srcAppComponentsAvatarFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarFormComponent", function () {
      return AvatarFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AvatarFormComponent =
    /*#__PURE__*/
    function () {
      function AvatarFormComponent() {
        _classCallCheck(this, AvatarFormComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AvatarFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tracker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.tracker, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            enableRotate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.enableRotate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            enableZoom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.enableZoom, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.formGroup.valid) alert('Error. Please, complete form');
          this.formGroup.get('enableRotate').setValue(this.formGroup.get('enableRotate').value === 'true');
          this.formGroup.get('enableZoom').setValue(this.formGroup.get('enableZoom').value === 'true');
          this.change.emit(Object.assign(Object.assign({}, this.formGroup.value), {
            loading: this.formGroup.get('url').value !== this.data.url
          }));
        }
      }]);

      return AvatarFormComponent;
    }();

    AvatarFormComponent.ɵfac = function AvatarFormComponent_Factory(t) {
      return new (t || AvatarFormComponent)();
    };

    AvatarFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AvatarFormComponent,
      selectors: [["app-avatar-form"]],
      inputs: {
        data: "data"
      },
      outputs: {
        change: "change"
      },
      decls: 34,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-item"], ["for", "url", 1, "form-label"], ["type", "url", "id", "url", "formControlName", "url", "placeholder", "Enter your 3d avatar URL generated from ReadyPlayerMe", "required", "true", 1, "form-control"], ["for", "tracker", 1, "form-label"], ["id", "tracker", "formControlName", "tracker", "required", "true", 1, "form-control"], ["value", "cursor"], ["value", "face"], ["for", "rotation", 1, "form-label"], ["id", "rotation", "formControlName", "enableRotate", "required", "true", 1, "form-control"], ["value", "true"], ["value", "false"], ["for", "zoom", 1, "form-label"], ["id", "zoom", "formControlName", "enableZoom", "required", "true", 1, "form-control"], ["type", "submit", 1, "button"]],
      template: function AvatarFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AvatarFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " URL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cursor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rotation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Disable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Zoom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["[_nghost-%COMP%] {\n      padding: 1rem 2rem;\n      border-right: 1px solid var(--gray-600);\n    }\n\n    form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n        display: flex;\n    }\n\n    form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n      display: flex;\n      gap: 1rem;\n    }\n\n    form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n      display: flex;\n      justify-content: end;\n    }\n\n    @media only screen and (max-width: 600px) {\n\n      form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n        display: flex;\n        flex-direction: column;\n      }\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-avatar-form',
          template: "\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n\n      <div>\n\n        <div class=\"form-item\">\n          <label for=\"url\" class=\"form-label\"> URL </label>\n          <input type=\"url\" id=\"url\" class=\"form-control\" formControlName=\"url\"\n            placeholder=\"Enter your 3d avatar URL generated from ReadyPlayerMe\" required=\"true\">\n        </div>\n\n      </div>\n\n      <div>\n\n        <div class=\"form-item\">\n          <label for=\"tracker\" class=\"form-label\">Tracker</label>\n          <select id=\"tracker\" class=\"form-control\" formControlName=\"tracker\" required=\"true\">\n            <option value=\"cursor\">Cursor</option>\n            <option value=\"face\">Face</option>\n          </select>\n        </div>\n\n        <div class=\"form-item\">\n          <label for=\"rotation\" class=\"form-label\">Rotation</label>\n          <select id=\"rotation\" class=\"form-control\" formControlName=\"enableRotate\" required=\"true\">\n            <option value=\"true\">Enable</option>\n            <option value=\"false\">Disable</option>\n          </select>\n        </div>\n\n        <div class=\"form-item\">\n          <label for=\"zoom\" class=\"form-label\">Zoom</label>\n          <select id=\"zoom\" class=\"form-control\" formControlName=\"enableZoom\" required=\"true\">\n            <option value=\"true\">Enable</option>\n            <option value=\"false\">Disable</option>\n          </select>\n        </div>\n\n      </div>\n\n      <div>\n        <button type=\"submit\" class=\"button\">Apply</button>\n      </div>\n\n    </form>\n  ",
          styles: ["\n\n    :host {\n      padding: 1rem 2rem;\n      border-right: 1px solid var(--gray-600);\n    }\n\n    form > div:nth-child(1) {\n        display: flex;\n    }\n\n    form > div:nth-child(2) {\n      display: flex;\n      gap: 1rem;\n    }\n\n    form > div:nth-child(3) {\n      display: flex;\n      justify-content: end;\n    }\n\n    @media only screen and (max-width: 600px) {\n\n      form > div:nth-child(2) {\n        display: flex;\n        flex-direction: column;\n      }\n    }\n  "]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/avatar-visor.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/avatar-visor.component.ts ***!
    \******************************************************/

  /*! exports provided: AvatarVisorComponent */

  /***/
  function srcAppComponentsAvatarVisorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarVisorComponent", function () {
      return AvatarVisorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @michaelldev/ngx-profile-avatar */
    "./node_modules/@michaelldev/ngx-profile-avatar/fesm2015/michaelldev-ngx-profile-avatar.js");
    /* harmony import */


    var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinner.component */
    "./src/app/components/spinner.component.ts");

    var AvatarVisorComponent =
    /*#__PURE__*/
    function () {
      function AvatarVisorComponent() {
        _classCallCheck(this, AvatarVisorComponent);
      }

      _createClass(AvatarVisorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "onLoading",
        value: function onLoading(_ref3) {
          var loaded = _ref3.loaded,
              total = _ref3.total;
          var loadPercent = Math.round(loaded / total * 100);
          if (loadPercent >= 100) this.data.loading = false;
        }
      }]);

      return AvatarVisorComponent;
    }();

    AvatarVisorComponent.ɵfac = function AvatarVisorComponent_Factory(t) {
      return new (t || AvatarVisorComponent)();
    };

    AvatarVisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AvatarVisorComponent,
      selectors: [["app-avatar-visor"]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 6,
      consts: [[1, "avatar-container"], [1, "avatar", 3, "url", "tracker", "enableRotate", "enableZoom", "loading"], [1, "spinner-container"]],
      template: function AvatarVisorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-profile-avatar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loading", function AvatarVisorComponent_Template_ngx_profile_avatar_loading_1_listener($event) {
            return ctx.onLoading($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.data.url)("tracker", ctx.data.tracker)("enableRotate", ctx.data.enableRotate)("enableZoom", ctx.data.enableZoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.data.loading);
        }
      },
      directives: [_michaelldev_ngx_profile_avatar__WEBPACK_IMPORTED_MODULE_1__["NgxProfileAvatarComponent"], _spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
      styles: ["div.avatar-container[_ngcontent-%COMP%] {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      border-right: 1px solid var(--gray-600);\n    }\n\n    .avatar[_ngcontent-%COMP%] {\n      display: flex;\n      flex-grow: 1;\n      width: 100%;\n      height: 100%;\n    }\n\n    div.spinner-container[_ngcontent-%COMP%] {\n      position: absolute;\n      inset: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      visibility: visible;\n      visibility: visible;\n      transition: visibility 1s ease;\n    }\n\n    div.hide[_ngcontent-%COMP%] {\n      visibility: hidden;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarVisorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-avatar-visor',
          template: "\n\n    <div class=\"avatar-container\">\n\n      <ngx-profile-avatar class=\"avatar\" [url]=\"data.url\" [tracker]=\"data.tracker\" [enableRotate]=\"data.enableRotate\"\n        [enableZoom]=\"data.enableZoom\" (loading)=\"onLoading($event)\">\n      </ngx-profile-avatar>\n\n      <div class=\"spinner-container\" [class.hide]=\"!data.loading\">\n        <app-spinner></app-spinner>\n      </div>\n\n    </div>\n  ",
          styles: ["\n\n    div.avatar-container {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      border-right: 1px solid var(--gray-600);\n    }\n\n    .avatar {\n      display: flex;\n      flex-grow: 1;\n      width: 100%;\n      height: 100%;\n    }\n\n    div.spinner-container {\n      position: absolute;\n      inset: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      visibility: visible;\n      visibility: visible;\n      transition: visibility 1s ease;\n    }\n\n    div.hide {\n      visibility: hidden;\n    }\n  "]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/spinner.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/spinner.component.ts ***!
    \*************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppComponentsSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerComponent =
    /*#__PURE__*/
    _createClass(function SpinnerComponent() {
      _classCallCheck(this, SpinnerComponent);
    });

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)();
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      decls: 3,
      vars: 0,
      consts: [["aria-hidden", "true", "viewBox", "0 0 100 101", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "animate-spin", "spinner"], ["d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", "fill", "var(--blue-600)"], ["d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", "fill", "var(--gray-600)"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".animate-spin[_ngcontent-%COMP%] {\n      animation: spin 1s linear infinite;\n    }\n\n    @keyframes spin {\n      100% {\n        transform: rotate(1turn);\n      }\n    }\n\n    svg.spinner[_ngcontent-%COMP%] {\n      width: 32px;\n    }"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          template: "\n    <svg aria-hidden=\"true\" class=\"animate-spin spinner\" viewBox=\"0 0 100 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path\n        d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\"\n        fill=\"var(--blue-600)\" />\n      <path\n        d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\"\n        fill=\"var(--gray-600)\" />\n    </svg>",
          styles: ["\n    .animate-spin {\n      animation: spin 1s linear infinite;\n    }\n\n    @keyframes spin {\n      100% {\n        transform: rotate(1turn);\n      }\n    }\n\n    svg.spinner {\n      width: 32px;\n    }"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      menURL: 'assets/men.avatar.glb',
      womenURL: 'assets/women.avatar.glb'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\fmich\OneDrive\Documentos\GitHub\ngx-profile-avatar\ngx-profile-avatar-app\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!****************************!*\
    !*** node-fetch (ignored) ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!********************************!*\
    !*** string_decoder (ignored) ***!
    \********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  6:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  7:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  8:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map