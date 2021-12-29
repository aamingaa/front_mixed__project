"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 149);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!****************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/main.js?{"type":"appStyle"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 149:
/*!***************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/main.js?{"page":"pages%2Fvlog%2Fvlog"} ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_vlog_vlog_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vlog/vlog.nvue?mpType=page */ 150);

        
        
        
        _pages_vlog_vlog_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_vlog_vlog_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/vlog/vlog'
        _pages_vlog_vlog_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_vlog_vlog_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 150:
/*!*********************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vlog.nvue?vue&type=template&id=34c89013&mpType=page */ 151);
/* harmony import */ var _vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vlog.nvue?vue&type=script&lang=js&mpType=page */ 153);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./vlog.nvue?vue&type=style&index=0&lang=css&mpType=page */ 162).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./vlog.nvue?vue&type=style&index=0&lang=css&mpType=page */ 162).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "5cedca44",
  false,
  _vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/*!***************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=template&id=34c89013&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vlog.nvue?vue&type=template&id=34c89013&mpType=page */ 152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_template_id_34c89013_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 152:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=template&id=34c89013&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            { style: { height: _vm.screenHeight + "px" } },
            [
              _c(
                "swiper-item",
                [
                  _c("video-detail", {
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playStatus: _vm.playStatus,
                      vlogId: _vm.vlogId
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["header"],
              style: { marginTop: _vm.statusBarHeight + "px" }
            },
            [
              _c("u-image", {
                staticClass: ["header-right-search"],
                staticStyle: {
                  width: "40rpx",
                  height: "40rpx",
                  opacity: "0.8"
                },
                attrs: { src: "../../static/images/icon-back.png" },
                on: {
                  click: function($event) {
                    _vm.back()
                  }
                }
              }),
              _c("view", { staticClass: ["header-center"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["header-item"],
                    on: {
                      click: function($event) {
                        _vm.tapFollow(1)
                      }
                    }
                  },
                  [_c("u-text", { staticClass: ["header-item-title"] })]
                )
              ]),
              _c("u-image", {
                staticClass: ["header-right-search"],
                staticStyle: { width: "50rpx", height: "50rpx", opacity: "0" },
                attrs: { src: "../../static/images/icon-search.png" }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 153:
/*!*********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vlog.nvue?vue&type=script&lang=js&mpType=page */ 154);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 154:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















































































































var _videoDetail = _interopRequireDefault(__webpack_require__(/*! @/components/videoDetail.vue */ 155));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var system = uni.getSystemInfoSync();var _default = { components: { videoDetail: _videoDetail.default }, data: function data() {return { vlogId: "", playStatus: true };}, onLoad: function onLoad(option) {this.statusBarHeight = system.statusBarHeight;var screenWidth = system.screenWidth;this.vlogWidth = (screenWidth - 10) / 2;var screenHeight = system.safeArea.bottom + 50;this.screenHeight = screenHeight; // 获得参数
    var vlogId = option.vlogId;this.vlogId = vlogId;}, onShow: function onShow() {}, onHide: function onHide() {// TODO 隐藏的时候暂停播放
  }, methods: { back: function back() {uni.navigateBack({ delta: 1 });} } };exports.default = _default;

/***/ }),

/***/ 155:
/*!***************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=template&id=0db20ca8& */ 156);
/* harmony import */ var _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=script&lang=js& */ 158);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoDetail.vue?vue&type=style&index=0&lang=css& */ 160).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./videoDetail.vue?vue&type=style&index=0&lang=css& */ 160).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "71cb110a",
  false,
  _videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/*!**********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=template&id=0db20ca8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoDetail.vue?vue&type=template&id=0db20ca8& */ 157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_template_id_0db20ca8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 157:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=template&id=0db20ca8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll }
      },
      _vm._l(_vm.playerList, function(item, index) {
        return _c(
          "cell",
          {
            key: index,
            style: { height: _vm.screenHeight + "px" },
            appendAsTree: true,
            attrs: { recycle: false, dataIndex: index, append: "tree" }
          },
          [
            _vm.playerCur === index
              ? _c("u-video", {
                  ref: "videoDetail",
                  refInFor: true,
                  staticStyle: { width: "750rpx" },
                  style: { height: _vm.screenHeight + "px" },
                  attrs: {
                    id: "videoDetail",
                    objectFit: item.width >= item.height ? "contain" : "fill",
                    src: item.url,
                    controls: false,
                    enableProgressGesture: false,
                    loop: "",
                    autoplay: "",
                    showLoading: "true"
                  },
                  on: {
                    click: _vm.playOrPause,
                    play: _vm.onplay,
                    error: _vm.onerror,
                    timeupdate: _vm.timeupdate
                  }
                })
              : _vm._e(),
            !item.play
              ? _c("u-image", {
                  staticStyle: { width: "750rpx", filter: "blur(10px)" },
                  style: { height: _vm.screenHeight + "px" },
                  attrs: {
                    lazyLoad: true,
                    fadeShow: false,
                    src: item.cover,
                    mode:
                      item.width >= item.height ? "aspectFit" : "scaleToFill"
                  }
                })
              : _vm._e(),
            _c("view", { staticClass: ["publish-info-box"] }, [
              _c("view", {}, [
                _c("u-text", { staticClass: ["publish-info-vloger-name"] }, [
                  _vm._v("@" + _vm._s(item.vlogerName))
                ]),
                _c("u-text", { staticClass: ["publish-info-content"] }, [
                  _vm._v(_vm._s(item.content))
                ]),
                _c(
                  "view",
                  { staticClass: ["publish-info-music-box"] },
                  [
                    _c("u-image", {
                      staticClass: ["icon-fire"],
                      attrs: { src: "/static/images/icon-fire.png" }
                    }),
                    _c("u-text", { staticClass: ["muisc-words"] }, [
                      _vm._v(_vm._s(item.vlogerName) + "的原声创作")
                    ])
                  ],
                  1
                )
              ]),
              _c(
                "view",
                { staticStyle: { flexDirection: "row" } },
                [
                  !_vm.isIOS
                    ? _c("u-image", {
                        staticClass: ["play-cd"],
                        staticStyle: { width: "120rpx", height: "120rpx" },
                        attrs: { src: "/static/images/icon-cd.png" }
                      })
                    : _vm._e(),
                  _vm.isIOS
                    ? _c("u-image", {
                        staticClass: ["play-cd"],
                        attrs: {
                          src:
                            "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                            _vm.times
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ]),
            _c(
              "view",
              { staticClass: ["operation-box"] },
              [
                _c(
                  "view",
                  { staticClass: ["operation-face-box"] },
                  [
                    _c("u-image", {
                      staticClass: ["user-face"],
                      attrs: { src: item.vlogerFace },
                      on: {
                        click: function($event) {
                          _vm.goUserInfoSeeSee(item.vlogerId)
                        }
                      }
                    })
                  ],
                  1
                ),
                !item.doIFollowVloger && _vm.userId != item.vlogerId
                  ? _c("u-image", {
                      staticClass: ["follow-me"],
                      attrs: { src: "/static/images/icon-follow.png" },
                      on: {
                        click: function($event) {
                          _vm.followMe(item.vlogerId)
                        }
                      }
                    })
                  : _vm._e(),
                _c(
                  "view",
                  { staticClass: ["like-box"] },
                  [
                    !item.doILikeThisVlog
                      ? _c("u-image", {
                          staticClass: ["icon"],
                          attrs: { src: "/static/images/icon-unlike.png" },
                          on: {
                            click: function($event) {
                              _vm.likeOrDislikeVlog(1)
                            }
                          }
                        })
                      : _vm._e(),
                    item.doILikeThisVlog
                      ? _c("u-image", {
                          staticClass: ["icon"],
                          attrs: { src: "/static/images/icon-like.png" },
                          on: {
                            click: function($event) {
                              _vm.likeOrDislikeVlog(0)
                            }
                          }
                        })
                      : _vm._e(),
                    _c("u-text", { staticClass: ["some-counts"] }, [
                      _vm._v(_vm._s(item.likeCounts))
                    ])
                  ],
                  1
                ),
                _c(
                  "view",
                  { staticClass: ["comment-and-share-box"] },
                  [
                    _c("u-image", {
                      staticClass: ["icon"],
                      attrs: { src: "/static/images/icon-comments.png" },
                      on: { click: _vm.commentToggle }
                    }),
                    _c("u-text", { staticClass: ["some-counts"] }, [
                      _vm._v(_vm._s(_vm.thisVlogTotalComentCounts))
                    ])
                  ],
                  1
                ),
                _c(
                  "view",
                  { staticClass: ["comment-and-share-box"] },
                  [
                    _c("u-image", {
                      staticClass: ["icon"],
                      attrs: { src: "/static/images/icon-share.png" },
                      on: { click: _vm.shareToggle }
                    }),
                    _c("u-text", { staticClass: ["some-counts"] }, [
                      _vm._v("分享")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      }),
      0
    ),
    _vm.thisVlog != null && _vm.thisVlog != {}
      ? _c(
          "view",
          [
            _c(
              "uni-popup",
              { ref: "comment", attrs: { type: "comment" } },
              [
                _c("uni-popup-comments", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId
                  }
                })
              ],
              1
            ),
            _c(
              "uni-popup",
              {
                ref: "share",
                attrs: { backgroundColor: "#fff", type: "share" }
              },
              [
                _c("uni-popup-share", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                    vlogUrl: _vm.thisVlog.url,
                    isPrivate: _vm.thisVlog.isPrivate
                  }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 158:
/*!****************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoDetail.vue?vue&type=script&lang=js& */ 159);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 159:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();var _default =
{
  props: {
    screenHeight: {
      default: 0 },

    src: {
      default: false },

    playStatus: {
      default: false },

    vlogId: {
      default: false } },


  data: function data() {
    return {
      thisVlog: {}, // 当前的短视频对象
      thisVlogId: "", // 当前的短视频主键id
      thisVlogerId: "", // 当前的短视频博主的主键id
      userId: "",

      playerCur: 0,
      page: 0,
      totalPage: 0,
      playerList: this.videoList,
      thisVlogTotalComentCounts: 0,

      videoContext: {},

      currentIndex: 0,
      contentOffsetY: 0,

      times: new Date().getTime(),

      objectFit: "fill",
      isIOS: uni.getSystemInfoSync().platform == "ios" };

  },
  created: function created() {

    if (!this.isIOS) {
      this.objectFit = "cover";
    }

    var myUserInfo = getApp().getUserInfoSession();
    if (myUserInfo != null) {
      this.userId = getApp().getUserInfoSession().id;
    }

    // 查询首页短视频列表
    this.displayVideoPaging(this.page + 1, true);

    var videoContext = uni.createVideoContext('videoDetail');
    this.videoContext = videoContext;
  },
  watch: {
    refreshList: function refreshList(value) {
      var me = this;
      var newList = value;
      if (newList != null && newList != undefined && newList.length > 0) {
        me.playerList = newList;
      }

      // 重置
      this.playerCur = 0;
      this.currentIndex = 0;
      this.contentOffsetY = 0;
    },
    playStatus: function playStatus(val) {
      var me = this;

      if (!val) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
    } },

  methods: {

    // 喜欢/点赞的list重新设置
    reLikePlayList: function reLikePlayList(vlogId) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.doILikeThisVlog = true;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    reDislikePlayList: function reDislikePlayList(vlogId) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.doILikeThisVlog = false;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },

    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.likeCounts = counts;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },

    refreshVlogCounts: function refreshVlogCounts() {
      // 查询当前点赞数，重新赋值给当前视频
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      uni.request({
        method: "POST",
        url: serverUrl + "/vlog/totalLikedCounts?vlogId=" + vlog.vlogId,
        success: function success(result) {
          if (result.data.status == 200) {
            var counts = result.data.data;
            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);
          }
        } });

    },
    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {
      var me = this;
      if (isLike == 1) {
        // 喜欢/点赞视频

        var myUserInfo = getApp().getUserInfoSession();
        if (myUserInfo == null) {
          uni.showToast({
            duration: 3000,
            title: "请登录~",
            icon: "none" });

          uni.navigateTo({
            url: "../loginRegist/loginRegist",
            animationType: "slide-in-bottom",
            success: function success() {
              me.loginWords = "请登录";
            } });

          return;
        }

        var userId = getApp().getUserInfoSession().id;
        var serverUrl = app.globalData.serverUrl;
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        uni.request({
          method: "POST",
          header: {
            headerUserId: userId,
            headerUserToken: app.getUserSessionToken() },

          url: serverUrl + "/vlog/like?userId=" + userId + "&vlogerId=" + vlog.vlogerId + "&vlogId=" + vlog.vlogId,
          success: function success(result) {

            if (result.data.status == 200) {
              me.reLikePlayList(vlog.vlogId);
              me.refreshVlogCounts();
            } else {
              uni.showToast({
                title: result.data.msg,
                icon: "none",
                duration: 3000 });

            }
          } });


      } else if (isLike == 0) {
        // 取消喜欢/点赞视频

        var myUserInfo = getApp().getUserInfoSession();
        if (myUserInfo == null) {
          uni.showToast({
            duration: 3000,
            title: "请登录~",
            icon: "none" });

          uni.navigateTo({
            url: "../loginRegist/loginRegist",
            animationType: "slide-in-bottom",
            success: function success() {
              me.loginWords = "请登录";
            } });

          return;
        }

        var userId = getApp().getUserInfoSession().id;
        var serverUrl = app.globalData.serverUrl;
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        uni.request({
          method: "POST",
          header: {
            headerUserId: userId,
            headerUserToken: app.getUserSessionToken() },

          url: serverUrl + "/vlog/unlike?userId=" + userId + "&vlogerId=" + vlog.vlogerId + "&vlogId=" + vlog.vlogId,
          success: function success(result) {

            if (result.data.status == 200) {
              me.reDislikePlayList(vlog.vlogId);
              me.refreshVlogCounts();
            } else {
              uni.showToast({
                title: result.data.msg,
                icon: "none",
                duration: 3000 });

            }
          } });


      }
    },
    // 关注后的list重新设置
    reFollowPlayList: function reFollowPlayList(vlogerId) {
      var me = this;
      var playerList = me.playerList;

      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogerId == vlogerId) {
          vlog.doIFollowVloger = true;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    // 取关后的list重新设置
    reCancelPlayList: function reCancelPlayList(vlogerId) {
      var me = this;
      var playerList = me.playerList;

      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogerId == vlogerId) {
          vlog.doIFollowVloger = false;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    // 关注博主
    followMe: function followMe(vlogerId) {
      var me = this;
      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none" });


        uni.navigateTo({
          url: "../loginRegist/loginRegist",
          animationType: "slide-in-bottom",
          success: function success() {
            me.loginWords = "请登录";
          } });


        return;
      }

      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken() },

        url: serverUrl + "/fans/follow?myId=" + userId + "&vlogerId=" + vlogerId,
        success: function success(result) {

          if (result.data.status == 200) {
            me.reFollowPlayList(vlogerId);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }
        } });


    },

    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {
      uni.setStorageSync("userPageId", userId);
      uni.navigateTo({
        url: "/pages/me/vlogerInfo?userPageId=" + userId });

    },

    listScroll: function listScroll(e) {},

    downloadVlog: function downloadVlog() {

      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var pendingLength = vlog.url;

    },

    onplay: function onplay(e) {
      if (uni.getSystemInfoSync().platform == 'ios') {
        this.doplay(0.1);
      }
    },
    onerror: function onerror(err) {
    },
    timeupdate: function timeupdate(e) {
      if (e.detail.currentTime > 0.2) {
        this.doplay(e.detail.currentTime);
      }
    },

    playOrPause: function playOrPause() {
      var me = this;
      var playStatus = this.playStatus;

      if (!playStatus) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
      this.playStatus = !playStatus;
    },


    scroll: function scroll(e) {},

    displayVideoPaging: function displayVideoPaging(page, needClearList) {
      // 查询首页短视频列表
      var me = this;
      var vlogId = me.vlogId;

      var myUserInfo = getApp().getUserInfoSession();
      var userId = "";
      if (myUserInfo != null) {
        userId = myUserInfo.id;
      }


      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/vlog/detail?userId=" + userId + "&vlogId=" + vlogId,
        success: function success(result) {

          if (result.data.status == 200) {
            var vlog = result.data.data;
            var playerList = [];
            playerList.push(vlog);
            me.playerList = playerList;
            me.freshCommentCounts();
            me.setThisVlogInfo();
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }

        } });

    },

    doplay: function doplay(time) {
      if (time > 0) {
        this.playerList[this.playerCur].play = true;
      }
    },
    onchange: function onchange(index) {
      if (index != this.playerCur) {
        this.playerList[this.playerCur].play = false;
        this.playerCur = index;
      }

      this.setThisVlogInfo();
    },

    // 设置当前vlog的信息
    setThisVlogInfo: function setThisVlogInfo() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;

      if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        this.thisVlog = vlog;
        this.thisVlogId = vlog.vlogId;
        this.thisVlogerId = vlog.vlogerId;
      }
    },
    freshCommentCounts: function freshCommentCounts() {
      var me = this;
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;


      if (me.playerList == null || me.playerList == undefined || me.playerList.length == 0) {
        return;
      }
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var vlogId = vlog.vlogId;

      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/comment/counts?vlogId=" + vlogId,
        success: function success(result) {

          if (result.data.status == 200) {
            me.thisVlogTotalComentCounts = result.data.data;
          } else {
            me.thisVlogTotalComentCounts = 0;
          }
        } });

    },
    commentToggle: function commentToggle() {
      this.$refs.comment.open();
      uni.hideTabBar({
        animation: true });

    },
    shareToggle: function shareToggle() {
      this.$refs.share.open();
      uni.hideTabBar({
        animation: true });

    } } };exports.default = _default;

/***/ }),

/***/ 160:
/*!************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoDetail.vue?vue&type=style&index=0&lang=css& */ 161);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 161:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "width": "80rpx",
    "height": "80rpx",
    "opacity": 0.9
  },
  "user-face": {
    "width": "100rpx",
    "height": "100rpx",
    "borderRadius": "100rpx"
  },
  "play-cd": {
    "width": "150rpx",
    "height": "150rpx",
    "opacity": 0.8
  },
  "refresh-info-txt": {
    "color": "#F1F1F1",
    "textAlign": "center",
    "fontSize": "12"
  },
  "publish-info-box": {
    "position": "absolute",
    "bottom": "200rpx",
    "left": 0,
    "right": 0,
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "publish-info-vloger-name": {
    "color": "#FFFFFF",
    "fontSize": "40rpx",
    "fontWeight": "600",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "publish-info-music-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "publish-info-content": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "fontWeight": "400",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "lines": 5,
    "width": "520rpx",
    "textOverflow": "ellipsis"
  },
  "icon-fire": {
    "width": "36rpx",
    "height": "36rpx"
  },
  "muisc-words": {
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "width": "400rpx"
  },
  "some-counts": {
    "fontSize": "24rpx",
    "fontWeight": "500",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "2rpx"
  },
  "operation-box": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "alignItems": "center",
    "justifyContent": "center",
    "paddingRight": "20rpx"
  },
  "operation-face-box": {
    "borderRadius": "100rpx",
    "borderColor": "#FFFFFF",
    "borderWidth": "3rpx"
  },
  "follow-me": {
    "width": "40rpx",
    "height": "40rpx",
    "borderRadius": "10",
    "position": "relative",
    "top": "-20rpx"
  },
  "like-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "30rpx"
  },
  "comment-and-share-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "45rpx"
  }
}

/***/ }),

/***/ 162:
/*!*****************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vlog.nvue?vue&type=style&index=0&lang=css&mpType=page */ 163);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vlog_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 163:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/vlog/vlog.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "#000000"
  },
  "header": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "center",
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "header-center": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "header-left": {
    "color": "#999999",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "fontFamily": "iconfont"
  },
  "header-right": {
    "color": "#999999",
    "height": "100rpx",
    "lineHeight": "100rpx",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "fontFamily": "iconfont"
  },
  "header-right-search": {
    "height": "100rpx"
  },
  "header-item": {
    "alignItems": "center",
    "marginLeft": "6rpx",
    "marginRight": "6rpx"
  },
  "header-item-title": {
    "width": "120rpx",
    "textAlign": "center",
    "height": "60rpx",
    "lineHeight": "60rpx",
    "color": "#FFFFFF",
    "fontSize": "16",
    "fontWeight": "600"
  },
  "header-refresh-title": {
    "width": "300rpx",
    "textAlign": "center",
    "height": "60rpx",
    "lineHeight": "60rpx",
    "color": "#FFFFFF",
    "fontSize": "16",
    "fontWeight": "600"
  },
  "header-item-line": {
    "height": "5rpx",
    "lineHeight": "8rpx",
    "width": "60rpx",
    "borderRadius": "8rpx"
  }
}

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "activate-line": {
    "backgroundColor": "#FFFFFF"
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz8zODZjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz9mZGQ4Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvdmxvZy92bG9nLm52dWU/MmQ5OCIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL3Zsb2cvdmxvZy5udnVlP2U1N2QiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9wYWdlcy92bG9nL3Zsb2cubnZ1ZT8xNzkyIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvdmxvZy92bG9nLm52dWU/NmU2MiIsInVuaS1hcHA6Ly8vcGFnZXMvdmxvZy92bG9nLm52dWUiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRGV0YWlsLnZ1ZT85Y2NiIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0RldGFpbC52dWU/M2NjNiIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L2NvbXBvbmVudHMvdmlkZW9EZXRhaWwudnVlP2FkODciLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRGV0YWlsLnZ1ZT9jMWJlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3ZpZGVvRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L2NvbXBvbmVudHMvdmlkZW9EZXRhaWwudnVlPzU4NWUiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRGV0YWlsLnZ1ZT9jNzBmIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvdmxvZy92bG9nLm52dWU/YjYwOCIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL3Zsb2cvdmxvZy5udnVlPzExYmQiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9BcHAudnVlPzIzZmYiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9BcHAudnVlPzNhNzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLDJEQUEyRCxtQkFBTyxDQUFDLGtEQUEyQzs7Ozs7Ozs7Ozs7OztBQ0Q5RztBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQSxRQUE4QjtBQUM5QixRQUE0RDtBQUM1RCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxnQkFBZ0IseUVBQUc7Ozs7Ozs7Ozs7Ozs7QUNQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUM3SDtBQUNvRTtBQUNMO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFPLENBQUMsa0VBQXlEO0FBQzdHLGFBQWE7QUFDYixpREFBaUQsbUJBQU8sQ0FBQyxrRUFBeUQ7QUFDbEg7O0FBRUE7O0FBRUE7QUFDMk07QUFDM00sZ0JBQWdCLG1OQUFVO0FBQzFCLEVBQUUsc0ZBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNyQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUMsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsa0NBQWtDLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHdCQUF3QiwyQ0FBMkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZiwwQkFBMEIsaUNBQWlDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQ0FBaUMscUNBQXFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFnRDtBQUM5RSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBZ2lCLENBQWdCLHNrQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tIcGpCLHdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQSxxQyxlQUlBLEVBQ0EsY0FDQSxpQ0FEQSxFQURBLEVBSUEsSUFKQSxrQkFJQSxDQUNBLFNBQ0EsVUFEQSxFQUdBLGdCQUhBLEdBS0EsQ0FWQSxFQVdBLE1BWEEsa0JBV0EsTUFYQSxFQVdBLENBQ0EsOENBQ0EscUNBQ0Esd0NBRUEsK0NBQ0EsaUNBTkEsQ0FRQTtBQUNBLCtCQUNBLHFCQUNBLENBdEJBLEVBdUJBLE1BdkJBLG9CQXVCQSxDQUVBLENBekJBLEVBMEJBLE1BMUJBLG9CQTBCQSxDQUNBO0FBQ0EsR0E1QkEsRUE2QkEsV0FDQSxJQURBLGtCQUNBLENBQ0EsbUJBQ0EsUUFEQSxJQUdBLENBTEEsRUE3QkEsRTs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZEQUFvRDtBQUN4RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkRBQW9EO0FBQzdHOztBQUVBOztBQUVBO0FBQzJNO0FBQzNNLGdCQUFnQixtTkFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDckNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxZQUFZLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUE4RDtBQUM5RSxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRCwwQkFBMEIsa0NBQWtDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RSwwQkFBMEIsa0NBQWtDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RCwyQkFBMkI7QUFDM0IsOEJBQThCLDRDQUE0QztBQUMxRTtBQUNBO0FBQ0EsOEJBQThCLHdDQUF3QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQixrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZSx1QkFBdUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvQ0FBb0M7QUFDMUUsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3Q0FBd0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEUsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQixrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsa0NBQWtDLCtCQUErQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QixrQkFBa0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVQQTtBQUFBO0FBQUE7QUFBQTtBQUEyaEIsQ0FBZ0IsaWtCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpTi9pQixtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLEVBREE7O0FBSUE7QUFDQSxvQkFEQSxFQUpBOztBQU9BO0FBQ0Esb0JBREEsRUFQQTs7QUFVQTtBQUNBLG9CQURBLEVBVkEsRUFEQTs7O0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLG9CQUZBLEVBRUE7QUFDQSxzQkFIQSxFQUdBO0FBQ0EsZ0JBSkE7O0FBTUEsa0JBTkE7QUFPQSxhQVBBO0FBUUEsa0JBUkE7QUFTQSxnQ0FUQTtBQVVBLGtDQVZBOztBQVlBLHNCQVpBOztBQWNBLHFCQWRBO0FBZUEsdUJBZkE7O0FBaUJBLGlDQWpCQTs7QUFtQkEsdUJBbkJBO0FBb0JBLHNEQXBCQTs7QUFzQkEsR0F0Q0E7QUF1Q0EsU0F2Q0EscUJBdUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQXZEQTtBQXdEQTtBQUNBLGVBREEsdUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FyQkEsRUF4REE7O0FBK0VBOztBQUVBO0FBQ0Esa0JBSEEsMEJBR0EsTUFIQSxFQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7QUFnQkEscUJBaEJBLDZCQWdCQSxNQWhCQSxFQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVCQTs7QUE4QkEscUNBOUJBLDZDQThCQSxNQTlCQSxFQThCQSxNQTlCQSxFQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFDQTs7QUE0Q0EscUJBNUNBLCtCQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsdUVBRkE7QUFHQSxlQUhBLG1CQUdBLE1BSEEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQTVEQTtBQTZEQSxxQkE3REEsNkJBNkRBLE1BN0RBLEVBNkRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEseUJBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLDZDQURBO0FBRUEsNENBRkE7QUFHQSxtQkFIQSxxQkFHQTtBQUNBO0FBQ0EsYUFMQTs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BLGtIQU5BO0FBT0EsaUJBUEEsbUJBT0EsTUFQQSxFQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBOztBQUtBO0FBQ0EsV0FuQkE7OztBQXNCQSxPQTlDQSxNQThDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEseUJBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLDZDQURBO0FBRUEsNENBRkE7QUFHQSxtQkFIQSxxQkFHQTtBQUNBO0FBQ0EsYUFMQTs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BLG9IQU5BO0FBT0EsaUJBUEEsbUJBT0EsTUFQQSxFQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBOztBQUtBO0FBQ0EsV0FuQkE7OztBQXNCQTtBQUNBLEtBNUpBO0FBNkpBO0FBQ0Esb0JBOUpBLDRCQThKQSxRQTlKQSxFQThKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzS0E7QUE0S0E7QUFDQSxvQkE3S0EsNEJBNktBLFFBN0tBLEVBNktBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFMQTtBQTJMQTtBQUNBLFlBNUxBLG9CQTRMQSxRQTVMQSxFQTRMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSx1QkFGQTtBQUdBLHNCQUhBOzs7QUFNQTtBQUNBLDJDQURBO0FBRUEsMENBRkE7QUFHQSxpQkFIQSxxQkFHQTtBQUNBO0FBQ0EsV0FMQTs7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsOEJBREE7QUFFQSxvREFGQSxFQUZBOztBQU1BLGdGQU5BO0FBT0EsZUFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSwwQkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0EsU0FsQkE7OztBQXFCQSxLQXhPQTs7QUEwT0Esb0JBMU9BLDRCQTBPQSxNQTFPQSxFQTBPQTtBQUNBO0FBQ0E7QUFDQSx3REFEQTs7QUFHQSxLQS9PQTs7QUFpUEEsY0FqUEEsc0JBaVBBLENBalBBLEVBaVBBLEVBalBBOztBQW1QQSxnQkFuUEEsMEJBbVBBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0EzUEE7O0FBNlBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqUUE7QUFrUUE7QUFDQSxLQW5RQTtBQW9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeFFBOztBQTBRQSxlQTFRQSx5QkEwUUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBSQTs7O0FBdVJBLGlDQXZSQTs7QUF5UkEsc0JBelJBLDhCQXlSQSxJQXpSQSxFQXlSQSxhQXpSQSxFQXlSQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscUJBREE7QUFFQSw4RUFGQTtBQUdBLGVBSEEsbUJBR0EsTUFIQSxFQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FQQSxNQU9BO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7O0FBRUEsU0FwQkE7O0FBc0JBLEtBNVRBOztBQThUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbFVBO0FBbVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQTFVQTs7QUE0VUE7QUFDQSxtQkE3VUEsNkJBNlVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeFZBO0FBeVZBLHNCQXpWQSxnQ0F5VkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBREE7QUFFQSwyREFGQTtBQUdBLGVBSEEsbUJBR0EsTUFIQSxFQUdBOztBQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FWQTs7QUFZQSxLQW5YQTtBQW9YQSxpQkFwWEEsMkJBb1hBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBelhBO0FBMFhBLGVBMVhBLHlCQTBYQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQSxLQS9YQSxFQS9FQSxFOzs7Ozs7Ozs7Ozs7QUNsTkE7QUFBQTtBQUFBO0FBQUE7QUFBMDVCLENBQWdCLG02QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTk2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFBKzVCLENBQWdCLHc2QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQW43QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQWk1QixDQUFnQiwwNUJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FyNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL3Zsb2cvdmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDkpO1xuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50cywgb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9KVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3Zsb2cvdmxvZy5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy92bG9nL3Zsb2cnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmxvZy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0Yzg5MDEzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92bG9nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmxvZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92bG9nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92bG9nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjVjZWRjYTQ0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9wYWdlcy92bG9nL3Zsb2cubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92bG9nLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzRjODkwMTMmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICB7IHN0eWxlOiB7IGhlaWdodDogX3ZtLnNjcmVlbkhlaWdodCArIFwicHhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZGVvLWRldGFpbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2NyZWVuSGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgIHBsYXlTdGF0dXM6IF92bS5wbGF5U3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIHZsb2dJZDogX3ZtLnZsb2dJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlclwiXSxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgbWFyZ2luVG9wOiBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJweFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1yaWdodC1zZWFyY2hcIl0sXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcnB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBycHhcIixcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC44XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tYmFjay5wbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5iYWNrKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWNlbnRlclwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YXBGb2xsb3coMSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWl0ZW0tdGl0bGVcIl0gfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaGVhZGVyLXJpZ2h0LXNlYXJjaFwiXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI1MHJweFwiLCBoZWlnaHQ6IFwiNTBycHhcIiwgb3BhY2l0eTogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLXNlYXJjaC5wbmdcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92bG9nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zsb2cubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHN0eWxlPlxuLnBhZ2Uge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblx0XG4uaGVhZGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0aGVpZ2h0OiAxMDBycHg7XG5cdGxpbmUtaGVpZ2h0OiAxMDBycHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogNDBycHg7XG5cdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xufVxuXG4uaGVhZGVyLWNlbnRlciB7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWxlZnQsXG4uaGVhZGVyLXJpZ2h0IHtcblx0Y29sb3I6ICM5OTk7XG5cdGhlaWdodDogMTAwcnB4O1xuXHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0Zm9udC1mYW1pbHk6IGljb25mb250O1xufVxuXG4uaGVhZGVyLXJpZ2h0LXNlYXJjaCB7XG5cdGhlaWdodDogMTAwcnB4O1xuXHQvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbn1cblxuLmhlYWRlci1pdGVtIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDZycHg7XG5cdG1hcmdpbi1yaWdodDogNnJweDtcbn1cblxuLmhlYWRlci1pdGVtLXRpdGxlIHtcblx0d2lkdGg6IDEyMHJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRoZWlnaHQ6IDYwcnB4O1xuXHRsaW5lLWhlaWdodDogNjBycHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVhZGVyLXJlZnJlc2gtdGl0bGUge1xuXHR3aWR0aDogMzAwcnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGhlaWdodDogNjBycHg7XG5cdGxpbmUtaGVpZ2h0OiA2MHJweDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oZWFkZXItaXRlbS1saW5lIHtcblx0aGVpZ2h0OiA1cnB4O1xuXHRsaW5lLWhlaWdodDogOHJweDtcblx0d2lkdGg6IDYwcnB4O1xuXHRib3JkZXItcmFkaXVzOiA4cnB4O1xufVxuPC9zdHlsZT5cblxuPCEtLSDop4bpopHor6bmg4XpobXvvIzku45b5pyL5Y+LXVvmiJFdW+aJq+eggV1b5raI5oGvXei3s+i9rOi/h+adpeeahCAtLT5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XG5cdFx0PCEtLSDov5nph4zmmK/nirbmgIHmoI8sIOavj+S4qumhtemdoumDvemcgOimgeacie+8jOebrueahOS4jeiuqemhtemdouimhueblueKtuaAgeagjyAtLT5cblx0XHQ8IS0tIDx2aWV3IDpzdHlsZT1cIntoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCArICdweCd9XCI+PC92aWV3PiAtLT5cblx0XHQ8IS0tIOWinuWKoOmhtemdoui3s+i9rOi/h+adpeeahOWPguaVsO+8jOagueaNruWPguaVsOadpeWIpOaWreaYr+S4quS6uui/mOaYr+aci+WPi++8jOWPguaVsOWPr+S7peaLk+Wxle+8jOmhtemdouWFrOeUqCAtLT5cblx0XHRcblx0XHRcblx0XHQ8c3dpcGVyIHN0eWxlPVwibXktc3dpcGVyXCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIj5cblx0XHRcdDxzd2lwZXItaXRlbT5cblx0XHRcdFx0PHZpZGVvLWRldGFpbFxuXHRcdFx0XHRcdDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiBcblx0XHRcdFx0XHQ6cGxheVN0YXR1cz1cInBsYXlTdGF0dXNcIlxuXHRcdFx0XHRcdDp2bG9nSWQ9XCJ2bG9nSWRcIj48L3ZpZGVvLWRldGFpbD5cblx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0PC9zd2lwZXI+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOnN0YXR1c0JhckhlaWdodCsncHgnfVwiPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyLXJpZ2h0LXNlYXJjaFwiXG5cdFx0XHRcdFx0c3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLWJhY2sucG5nXCIgIFxuXHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDQwcnB4O2hlaWdodDogNDBycHg7b3BhY2l0eTogMC44O1wiIEBjbGljaz1cImJhY2soKVwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItY2VudGVyXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMSlcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1pdGVtLXRpdGxlXCI+PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJoZWFkZXItcmlnaHQtc2VhcmNoXCIgXG5cdFx0XHRcdFx0c3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLXNlYXJjaC5wbmdcIiAgXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNTBycHg7aGVpZ2h0OiA1MHJweDtvcGFjaXR5OiAwO1wiPlxuXHRcdDwvdmlldz5cblx0XHRcdFxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgc3lzdGVtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFxuXHRpbXBvcnQgdmlkZW9EZXRhaWwgZnJvbSAnQC9jb21wb25lbnRzL3ZpZGVvRGV0YWlsLnZ1ZSc7XG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dmlkZW9EZXRhaWxcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2bG9nSWQ6IFwiXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRwbGF5U3RhdHVzOiB0cnVlLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKG9wdGlvbikge1xuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0O1xuXHRcdFx0dmFyIHNjcmVlbldpZHRoID0gc3lzdGVtLnNjcmVlbldpZHRoO1xuXHRcdFx0dGhpcy52bG9nV2lkdGggPSAoc2NyZWVuV2lkdGgtMTApLzI7XG5cdFx0XHRcblx0XHRcdHZhciBzY3JlZW5IZWlnaHQgPSBzeXN0ZW0uc2FmZUFyZWEuYm90dG9tICsgNTA7XG5cdFx0XHR0aGlzLnNjcmVlbkhlaWdodCA9IHNjcmVlbkhlaWdodDtcblx0XHRcdFxuXHRcdFx0Ly8g6I635b6X5Y+C5pWwXG5cdFx0XHR2YXIgdmxvZ0lkID0gb3B0aW9uLnZsb2dJZDtcblx0XHRcdHRoaXMudmxvZ0lkID0gdmxvZ0lkO1xuXHRcdH0sXG5cdFx0b25TaG93KCkge1xuXHRcdFx0XG5cdFx0fSxcblx0XHRvbkhpZGUoKSB7XG5cdFx0XHQvLyBUT0RPIOmakOiXj+eahOaXtuWAmeaaguWBnOaSreaUvlxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YmFjaygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlb0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRiMjBjYTgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3MWNiMTEwYVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYjIwY2E4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIHsgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImxpc3RcIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHsgcGFnaW5nRW5hYmxlZDogdHJ1ZSwgc2hvd1Njcm9sbGJhcjogZmFsc2UsIHNjcm9sbGFibGU6IHRydWUgfSxcbiAgICAgICAgb246IHsgc2Nyb2xsOiBfdm0ubGlzdFNjcm9sbCwgc2Nyb2xsZW5kOiBfdm0uc2Nyb2xsIH1cbiAgICAgIH0sXG4gICAgICBfdm0uX2woX3ZtLnBsYXllckxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0ICsgXCJweFwiIH0sXG4gICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICBhdHRyczogeyByZWN5Y2xlOiBmYWxzZSwgZGF0YUluZGV4OiBpbmRleCwgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0ucGxheWVyQ3VyID09PSBpbmRleFxuICAgICAgICAgICAgICA/IF9jKFwidS12aWRlb1wiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwidmlkZW9EZXRhaWxcIixcbiAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzUwcnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnNjcmVlbkhlaWdodCArIFwicHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmlkZW9EZXRhaWxcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gXCJjb250YWluXCIgOiBcImZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpdGVtLnVybCxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVQcm9ncmVzc0dlc3R1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb29wOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmc6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5wbGF5T3JQYXVzZSxcbiAgICAgICAgICAgICAgICAgICAgcGxheTogX3ZtLm9ucGxheSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5vbmVycm9yLFxuICAgICAgICAgICAgICAgICAgICB0aW1ldXBkYXRlOiBfdm0udGltZXVwZGF0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAhaXRlbS5wbGF5XG4gICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjc1MHJweFwiLCBmaWx0ZXI6IFwiYmx1cigxMHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS5zY3JlZW5IZWlnaHQgKyBcInB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmYWRlU2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaXRlbS5jb3ZlcixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTpcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gXCJhc3BlY3RGaXRcIiA6IFwic2NhbGVUb0ZpbGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wicHVibGlzaC1pbmZvLWJveFwiXSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJAXCIgKyBfdm0uX3MoaXRlbS52bG9nZXJOYW1lKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwdWJsaXNoLWluZm8tY29udGVudFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY29udGVudCkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbi1maXJlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWZpcmUucG5nXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXVpc2Mtd29yZHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS52bG9nZXJOYW1lKSArIFwi55qE5Y6f5aOw5Yib5L2cXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgIV92bS5pc0lPU1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wicGxheS1jZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEyMHJweFwiLCBoZWlnaHQ6IFwiMTIwcnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWNkLnBuZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzSU9TXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwbGF5LWNkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbW9vYy1uZXdzLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vaW1hZ2UvY2QtcGxheS00LmdpZj90aW1lPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcGVyYXRpb24tYm94XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wib3BlcmF0aW9uLWZhY2UtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVzZXItZmFjZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0udmxvZ2VyRmFjZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICFpdGVtLmRvSUZvbGxvd1Zsb2dlciAmJiBfdm0udXNlcklkICE9IGl0ZW0udmxvZ2VySWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9sbG93LW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb2xsb3dNZShpdGVtLnZsb2dlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImxpa2UtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICFpdGVtLmRvSUxpa2VUaGlzVmxvZ1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLXVubGlrZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWtlT3JEaXNsaWtlVmxvZygxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRvSUxpa2VUaGlzVmxvZ1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZU9yRGlzbGlrZVZsb2coMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5saWtlQ291bnRzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29tbWVudC1hbmQtc2hhcmUtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbW1lbnRUb2dnbGUgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hhcmVUb2dnbGUgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWIhuS6q1wiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKSxcbiAgICBfdm0udGhpc1Zsb2cgIT0gbnVsbCAmJiBfdm0udGhpc1Zsb2cgIT0ge31cbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidW5pLXBvcHVwXCIsXG4gICAgICAgICAgICAgIHsgcmVmOiBcImNvbW1lbnRcIiwgYXR0cnM6IHsgdHlwZTogXCJjb21tZW50XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktcG9wdXAtY29tbWVudHNcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Zsb2dlcklkOiBfdm0udGhpc1Zsb2dlcklkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzVmxvZ0lkOiBfdm0udGhpc1Zsb2dJZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bmktcG9wdXBcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZjogXCJzaGFyZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIHR5cGU6IFwic2hhcmVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS1wb3B1cC1zaGFyZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVmxvZ2VySWQ6IF92bS50aGlzVmxvZ2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNWbG9nSWQ6IF92bS50aGlzVmxvZ0lkLFxuICAgICAgICAgICAgICAgICAgICB2bG9nVXJsOiBfdm0udGhpc1Zsb2cudXJsLFxuICAgICAgICAgICAgICAgICAgICBpc1ByaXZhdGU6IF92bS50aGlzVmxvZy5pc1ByaXZhdGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHN0eWxlPlxuXHQuaWNvbiB7XG5cdFx0d2lkdGg6IDgwcnB4O1xuXHRcdGhlaWdodDogODBycHg7XG5cdFx0b3BhY2l0eTogMC45O1xuXHR9XG5cdFxuXHQudXNlci1mYWNlIHtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0fVxuXHRcblx0LnBsYXktY2Qge1xuXHRcdHdpZHRoOiAxNTBycHg7XG5cdFx0aGVpZ2h0OiAxNTBycHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cdC5yZWZyZXNoLWluZm8tdHh0IHtcblx0XHRjb2xvcjogI0YxRjFGMTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAyMDBycHg7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4OyBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWUge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogNDBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLW11c2ljLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tY29udGVudCB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdGxpbmVzOiA1O1xuXHRcdHdpZHRoOiA1MjBycHg7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblx0Lmljb24tZmlyZSB7XG5cdFx0d2lkdGg6IDM2cnB4O1xuXHRcdGhlaWdodDogMzZycHg7XG5cdH1cblx0Lm11aXNjLXdvcmRzIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdHdpZHRoOjQwMHJweDtcblx0fVxuXHQuc29tZS1jb3VudHMge1xuXHRcdGZvbnQtc2l6ZToyNHJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAycnB4O1xuXHR9XG5cdC5vcGVyYXRpb24tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDsgXG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDtcblx0fVxuXHQub3BlcmF0aW9uLWZhY2UtYm94IHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci13aWR0aDogM3JweDtcblx0fVxuXHQuZm9sbG93LW1lIHtcblx0XHR3aWR0aDogNDBycHg7XG5cdFx0aGVpZ2h0OiA0MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC0yMHJweDtcblx0fVxuXHQubGlrZS1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcblx0fVxuXHQuY29tbWVudC1hbmQtc2hhcmUtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XG5cdH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdDwhLS0gPHVuaS1saXN0IEBjaGFuZ2U9XCJvbmNoYW5nZVwiIDpudW09XCJwbGF5ZXJMaXN0Lmxlbmd0aFwiPiAtLT5cblx0XHQ8bGlzdCA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIEBzY3JvbGw9XCJsaXN0U2Nyb2xsXCIgQHNjcm9sbGVuZD1cInNjcm9sbFwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiID5cdFxuXHRcdFx0PGNlbGwgOnJlY3ljbGU9XCJmYWxzZVwiIFxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGxheWVyTGlzdFwiIFxuXHRcdFx0XHQ6a2V5PVwiaW5kZXhcIiBcblx0XHRcdFx0OmRhdGEtaW5kZXg9XCJpbmRleFwiIFxuXHRcdFx0XHQ6c3R5bGU9XCJ7J2hlaWdodCc6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XG5cdFx0XHRcdDwhLS0gPHVuaS12aWRlbyA6c3JjPVwiaXRlbS51cmxcIiA6cGxheVN0YXR1cz1cInBsYXlTdGF0dXNcIiA6c2NyZWVuSGVpZ2h0PVwic2NyZWVuSGVpZ2h0XCIgdi1pZj1cInBsYXllckN1ciA9PT0gaW5kZXhcIiBAcGxheT1cIm9ucGxheVwiPjwvdW5pLXZpZGVvPiAtLT5cblx0XHRcdFx0PHZpZGVvIFxuXHRcdFx0XHRcdHJlZj1cInZpZGVvRGV0YWlsXCIgXG5cdFx0XHRcdFx0aWQ9XCJ2aWRlb0RldGFpbFwiIFxuXHRcdFx0XHRcdDpvYmplY3QtZml0PVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdjb250YWluJyA6ICdmaWxsJ1wiIFxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLnVybFwiIFxuXHRcdFx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcblx0XHRcdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0IHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCJcblx0XHRcdFx0XHRsb29wIFxuXHRcdFx0XHRcdGF1dG9wbGF5XG5cdFx0XHRcdFx0c2hvdy1sb2FkaW5nPVwidHJ1ZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgXG5cdFx0XHRcdFx0QGNsaWNrPVwicGxheU9yUGF1c2VcIlxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXG5cdFx0XHRcdFx0QGVycm9yPVwib25lcnJvclwiIFxuXHRcdFx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiPjwvdmlkZW8+XG5cdFx0XHRcdDxpbWFnZSBcblx0XHRcdFx0XHQ6bGF6eS1sb2FkPVwidHJ1ZVwiIFxuXHRcdFx0XHRcdDpmYWRlLXNob3c9XCJmYWxzZVwiIFxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0uY292ZXJcIiBcblx0XHRcdFx0XHQ6bW9kZT1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnYXNwZWN0Rml0JyA6ICdzY2FsZVRvRmlsbCdcIiBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPlxuXHRcdFx0XHQ8IS0tPGltYWdlIDpsYXp5LWxvYWQ9XCJ0cnVlXCIgOmZhZGUtc2hvdz1cImZhbHNlXCIgdi1pZj1cIiFpdGVtLnBsYXlcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDogMDtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwOyBmaWx0ZXI6IGJsdXIoMTBweCk7XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+LS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiPkB7e2l0ZW0udmxvZ2VyTmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiBjbGFzcz1cImljb24tZmlyZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cblx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NkLXBsYXktNC5naWZcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDE1MHJweDtoZWlnaHQ6IDE1MHJweDtvcGFjaXR5OiAwLjg7XCI+PC9pbWFnZT4gLS0+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIiBzdHlsZT1cIndpZHRoOiAxMjBycHg7aGVpZ2h0OiAxMjBycHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNJT1NcIiA6c3JjPVwiJ2h0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT0nK3RpbWVzXCIgXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSDop4bpopHlsZXnpLrlj7PkvqfnmoTmk43kvZzmjInpkq7vvIzlpLTlg48gLSDngrnotZ4gLSDor4TorrogLSDovazlj5EgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWZhY2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udmxvZ2VyRmFjZVwiIGNsYXNzPVwidXNlci1mYWNlXCIgQGNsaWNrPVwiZ29Vc2VySW5mb1NlZVNlZShpdGVtLnZsb2dlcklkKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JRm9sbG93VmxvZ2VyICYmIHVzZXJJZCAhPSBpdGVtLnZsb2dlcklkXCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiBcblx0XHRcdFx0XHRcdEBjbGljaz1cImZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXCIgXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbGxvdy1tZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi11bmxpa2UucG5nXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMSlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0ubGlrZUNvdW50c319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgQGNsaWNrPVwiY29tbWVudFRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0uY29tbWVudHNDb3VudHN9fTwvdGV4dD4gLS0+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3t0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiBAY2xpY2s9XCJzaGFyZVRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9jZWxsPlxuXHRcdDwvbGlzdD5cblx0XHQ8IS0tIDwvdW5pLWxpc3Q+IC0tPlxuXHRcdFxuXHRcdDx2aWV3IHYtaWY9XCJ0aGlzVmxvZyAhPSBudWxsICYmIHRoaXNWbG9nICE9IHt9XCI+XG5cdFx0XHQ8IS0tIOW6lemDqOivhOiuuueql+WPo3BvcHVwIC0tPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJjb21tZW50XCIgdHlwZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwic2hhcmVcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJzaGFyZVwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlXG5cdFx0XHRcdFx0OnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIFxuXHRcdFx0XHRcdDp0aGlzVmxvZ0lkPVwidGhpc1Zsb2dJZFwiIFxuXHRcdFx0XHRcdDp2bG9nVXJsPVwidGhpc1Zsb2cudXJsXCJcblx0XHRcdFx0XHQ6aXNQcml2YXRlPVwidGhpc1Zsb2cuaXNQcml2YXRlXCJcblx0XHRcdFx0XHQ+PC91bmktcG9wdXAtc2hhcmU+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRzY3JlZW5IZWlnaHQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogMFxuXHRcdFx0fSxcblx0XHRcdHNyYzoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHBsYXlTdGF0dXM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR2bG9nSWQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXG5cdFx0XHRcdHRoaXNWbG9nZXJJZDogXCJcIixcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Y2a5Li755qE5Li76ZSuaWRcblx0XHRcdFx0dXNlcklkOiBcIlwiLFxuXHRcdFx0XHRcblx0XHRcdFx0cGxheWVyQ3VyOiAwLFxuXHRcdFx0XHRwYWdlOiAwLFxuXHRcdFx0XHR0b3RhbFBhZ2U6IDAsXG5cdFx0XHRcdHBsYXllckxpc3Q6IHRoaXMudmlkZW9MaXN0LFxuXHRcdFx0XHR0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0dmlkZW9Db250ZXh0OiB7fSxcblx0XHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRJbmRleDogMCxcblx0XHRcdFx0Y29udGVudE9mZnNldFk6IDAsXG5cdFx0XHRcdFxuXHRcdFx0XHR0aW1lczogbmV3IERhdGUoKS5nZXRUaW1lKCksXG5cdFx0XHRcdFxuXHRcdFx0XHRvYmplY3RGaXQ6IFwiZmlsbFwiLFxuXHRcdFx0XHRpc0lPUzogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdFxuXHRcdFx0aWYoIXRoaXMuaXNJT1MpIHtcblx0XHRcdFx0dGhpcy5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRpZiAobXlVc2VySW5mbyAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxuXHRcdFx0dGhpcy5kaXNwbGF5VmlkZW9QYWdpbmcodGhpcy5wYWdlICsgMSwgdHJ1ZSk7XG5cdFx0XHRcblx0XHRcdHZhciB2aWRlb0NvbnRleHQgPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCd2aWRlb0RldGFpbCcpO1xuXHRcdFx0dGhpcy52aWRlb0NvbnRleHQgPSB2aWRlb0NvbnRleHQ7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cmVmcmVzaExpc3QodmFsdWUpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKG5ld0xpc3QgIT0gbnVsbCAmJiBuZXdMaXN0ICE9IHVuZGVmaW5lZCAmJiBuZXdMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6YeN572uXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xuXHRcdFx0fSxcblx0XHRcdHBsYXlTdGF0dXM6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCF2YWwpIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRcblx0XHRcdC8vIOWWnOasoi/ngrnotZ7nmoRsaXN06YeN5paw6K6+572uXG5cdFx0XHRyZUxpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ0lkID09IHZsb2dJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSB0cnVlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0cmVEaXNsaWtlUGxheUxpc3QodmxvZ0lkKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nSWQsIGNvdW50cykge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmxpa2VDb3VudHMgPSBjb3VudHM7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlZnJlc2hWbG9nQ291bnRzKCkge1xuXHRcdFx0XHQvLyDmn6Xor6LlvZPliY3ngrnotZ7mlbDvvIzph43mlrDotYvlgLznu5nlvZPliY3op4bpopFcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy90b3RhbExpa2VkQ291bnRzP3Zsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgY291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdFx0bWUucmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2cudmxvZ0lkLCBjb3VudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bGlrZU9yRGlzbGlrZVZsb2coaXNMaWtlKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdGlmIChpc0xpa2UgPT0gMSkge1xuXHRcdFx0XHRcdC8vIOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2xpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZUxpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSBlbHNlIGlmIChpc0xpa2UgPT0gMCkge1xuXHRcdFx0XHRcdC8vIOWPlua2iOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy91bmxpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZURpc2xpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIOWFs+azqOWQjueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUZvbGxvd1Zsb2dlciA9IHRydWU7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHQvLyDlj5blhbPlkI7nmoRsaXN06YeN5paw6K6+572uXG5cdFx0XHRyZUNhbmNlbFBsYXlMaXN0KHZsb2dlcklkKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nZXJJZCA9PSB2bG9nZXJJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lGb2xsb3dWbG9nZXIgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdC8vIOWFs+azqOWNmuS4u1xuXHRcdFx0Zm9sbG93TWUodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmFucy9mb2xsb3c/bXlJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZ2VySWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUucmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Z29Vc2VySW5mb1NlZVNlZSh1c2VySWQpIHtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlclBhZ2VJZFwiLCB1c2VySWQpO1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9tZS92bG9nZXJJbmZvP3VzZXJQYWdlSWQ9XCIgKyB1c2VySWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGxpc3RTY3JvbGwoZSkge30sXG5cdFx0XHRcblx0XHRcdGRvd25sb2FkVmxvZygpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdG9ucGxheTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheShlLmRldGFpbC5jdXJyZW50VGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHBsYXlPclBhdXNlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheVN0YXR1cyA9IHRoaXMucGxheVN0YXR1cztcblx0XHRcdFx0XG5cdFx0XHRcdGlmICghcGxheVN0YXR1cykge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gIXBsYXlTdGF0dXM7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24oZSkge30sXG5cdFx0XHRcblx0XHRcdGRpc3BsYXlWaWRlb1BhZ2luZyhwYWdlLCBuZWVkQ2xlYXJMaXN0KSB7XG5cdFx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdmxvZ0lkID0gbWUudmxvZ0lkO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvZGV0YWlsP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmxvZyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gW107XG5cdFx0XHRcdFx0XHRcdHBsYXllckxpc3QucHVzaCh2bG9nKTtcblx0XHRcdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHRcdFx0XHRcdG1lLmZyZXNoQ29tbWVudENvdW50cygpO1xuXHRcdFx0XHRcdFx0XHRtZS5zZXRUaGlzVmxvZ0luZm8oKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG9wbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGlmICh0aW1lID4gMCkge1xuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbmNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdFx0aWYgKGluZGV4ICE9IHRoaXMucGxheWVyQ3VyKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5zZXRUaGlzVmxvZ0luZm8oKTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOiuvue9ruW9k+WJjXZsb2fnmoTkv6Hmga9cblx0XHRcdHNldFRoaXNWbG9nSW5mbygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ICE9IG51bGwgJiYgbWUucGxheWVyTGlzdCAhPSB1bmRlZmluZWQgJiYgbWUucGxheWVyTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0XHR0aGlzLnRoaXNWbG9nID0gdmxvZztcblx0XHRcdFx0XHR0aGlzLnRoaXNWbG9nSWQgPSB2bG9nLnZsb2dJZDtcblx0XHRcdFx0XHR0aGlzLnRoaXNWbG9nZXJJZCA9IHZsb2cudmxvZ2VySWQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmcmVzaENvbW1lbnRDb3VudHMoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobWUucGxheWVyTGlzdCA9PSBudWxsIHx8IG1lLnBsYXllckxpc3QgPT0gdW5kZWZpbmVkIHx8IG1lLnBsYXllckxpc3QubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHZhciB2bG9nSWQgPSB2bG9nLnZsb2dJZDtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NvdW50cz92bG9nSWQ9XCIgKyB2bG9nSWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNvbW1lbnRUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuY29tbWVudC5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuc2hhcmUub3BlbigpO1xuXHRcdFx0XHR1bmkuaGlkZVRhYkJhcih7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI4MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcIm9wYWNpdHlcIjogMC45XG4gIH0sXG4gIFwidXNlci1mYWNlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwicGxheS1jZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTUwcnB4XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOFxuICB9LFxuICBcInJlZnJlc2gtaW5mby10eHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRjFGMUYxXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTJcIlxuICB9LFxuICBcInB1Ymxpc2gtaW5mby1ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IFwiMjAwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicHVibGlzaC1pbmZvLXZsb2dlci1uYW1lXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwdWJsaXNoLWluZm8tbXVzaWMtYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInB1Ymxpc2gtaW5mby1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJsaW5lc1wiOiA1LFxuICAgIFwid2lkdGhcIjogXCI1MjBycHhcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJpY29uLWZpcmVcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzZycHhcIlxuICB9LFxuICBcIm11aXNjLXdvcmRzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQwMHJweFwiXG4gIH0sXG4gIFwic29tZS1jb3VudHNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjJycHhcIlxuICB9LFxuICBcIm9wZXJhdGlvbi1ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm9wZXJhdGlvbi1mYWNlLWJveFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBycHhcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIzcnB4XCJcbiAgfSxcbiAgXCJmb2xsb3ctbWVcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ0b3BcIjogXCItMjBycHhcIlxuICB9LFxuICBcImxpa2UtYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDVycHhcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92bG9nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zsb2cubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItY2VudGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJoZWFkZXItbGVmdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwiaGVhZGVyLXJpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCJcbiAgfSxcbiAgXCJoZWFkZXItcmlnaHQtc2VhcmNoXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWl0ZW1cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWl0ZW0tdGl0bGVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCJoZWFkZXItcmVmcmVzaC10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwMHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcImhlYWRlci1pdGVtLWxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjhycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhycHhcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImFjdGl2YXRlLWxpbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9