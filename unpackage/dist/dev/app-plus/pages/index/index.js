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
/******/ 	return __webpack_require__(__webpack_require__.s = 172);
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

/***/ 172:
/*!*****************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 173);

        
        
        
        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/index/index'
        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 173:
/*!***********************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=329c2ded&scoped=true&mpType=page */ 174);
/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 176);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=329c2ded&scoped=true&lang=css&mpType=page */ 192).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=329c2ded&scoped=true&lang=css&mpType=page */ 192).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "329c2ded",
  "5fd70532",
  false,
  _index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 174:
/*!*****************************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=template&id=329c2ded&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=329c2ded&scoped=true&mpType=page */ 175);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_329c2ded_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 175:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=template&id=329c2ded&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            {
              style: { height: _vm.screenHeight + "px" },
              attrs: { current: _vm.curIndex },
              on: { change: _vm.changeTopTab }
            },
            [
              _c("swiper-item", [
                _c(
                  "view",
                  {
                    staticClass: ["near-by"],
                    style: { height: _vm.screenHeight + "px" }
                  },
                  [
                    _c("u-text", { staticClass: ["warn-info"] }, [
                      _vm._v("暂未开放，敬请期待！")
                    ])
                  ]
                )
              ]),
              _c(
                "swiper-item",
                [
                  _vm.myUserInfo == null
                    ? _c(
                        "view",
                        {
                          staticClass: ["my-follow"],
                          style: { height: _vm.screenHeight + "px" }
                        },
                        [
                          _c("u-text", { staticClass: ["warn-info"] }, [
                            _vm._v("请登录后查看！")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _c("video-follow-comp", {
                    ref: "videoFollowComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playFollowStatus: _vm.playFollowStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      letFollowVideoPause: _vm.letFollowVideoPause,
                      displayVideoPaging: _vm.displayVideoPaging
                    }
                  })
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _c("video-comp", {
                    ref: "videoComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playStatus: _vm.playStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      displayVideoPaging: _vm.displayVideoPaging
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          !_vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" }
                },
                [
                  _c("u-text", { staticClass: ["header-left"] }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function($event) {
                            _vm.tapFollow(0)
                          }
                        }
                      },
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("附近")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 0 }
                        })
                      ]
                    ),
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
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("关注")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 1 }
                        })
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function($event) {
                            _vm.tapFollow(2)
                          }
                        }
                      },
                      [
                        _c("u-text", { staticClass: ["header-item-title"] }, [
                          _vm._v("推荐")
                        ]),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 2 }
                        })
                      ]
                    )
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/icon-search.png" },
                    on: { click: _vm.goSearch }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" }
                },
                [
                  _c("u-text", { staticClass: ["header-left"] }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c("view", { staticClass: ["header-item"] }, [
                      _c("u-text", { staticClass: ["header-refresh-title"] }, [
                        _vm._v("下拉刷新视频")
                      ])
                    ])
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/loading.gif" }
                  })
                ],
                1
              )
            : _vm._e()
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

/***/ 176:
/*!***********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 177);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 177:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


























































































































































































var _videoComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoComp.vue */ 178));
var _videoFollowComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoFollowComp.vue */ 185));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var system = uni.getSystemInfoSync();var app = getApp(); // import uniHeader from '@/components/header';
// import uniFooter from '@/components/footer';
// import uniSwiper from '@/components/swiper';
var _default = { components: { // uniHeader,
    // uniFooter,
    // uniSwiper,
    videoComp: _videoComp.default, videoFollowComp: _videoFollowComp.default }, data: function data() {return { isLoading: false, statusBarHeight: system.statusBarHeight, screenHeight: system.screenHeight, // screenHeight: system.safeArea.bottom,// - 50,
      curIndex: 2, playStatus: false, playFollowStatus: false, // videoList: getApp().getDefaultVlogList(),			// 首页一开始查询所得的默认视频列表
      videoList: [], // 首页一开始查询所得的默认视频列表
      refreshList: [], // 下拉刷新后获得的新的列表
      pagingList: [], // 分页list
      refresh: 0 // 从me页面传来的refresh，用于退出登录后重新刷新当前页的视频
    };}, onLoad: function onLoad() {var have = plus.navigator.hasNotchInScreen(); // 判断是否有下巴
  }, onTabItemTap: function onTabItemTap(e) {var tabIndex = e.index; // this.playStatus = tabIndex === 0 ? true : false;
    // 切换视频要做暂停或播放的判断
    var me = this;if (tabIndex == 0) {// 虚位以待
    } else if (tabIndex == 1) {me.playStatus = false;me.playFollowStatus = true;} else if (tabIndex == 2) {me.playStatus = true;me.playFollowStatus = false;}}, onShow: function onShow() {var me = this;var myUserInfo = app.getUserInfoSession();this.myUserInfo = myUserInfo; // 如果当前没有list，则relaunch
    if (this.$refs.videoComp != undefined) {var playerList = this.$refs.videoComp.playerList;if (playerList != undefined && playerList.length == 0) {this.$refs.videoComp.displayVideoPaging(1, true);}} // 判断如果当前是tab为1或2，则播放，否则不播放
    if (me.curIndex == 0) {// 虚位以待
    } else if (me.curIndex == 1) {me.playFollowStatus = true;} else if (me.curIndex == 2) {me.playStatus = true;} // onShow的时候，关注的话，则重新刷一下list
    var justFollowVlogerId = uni.getStorageSync("justFollowVlogerId");if (!app.isStrEmpty(justFollowVlogerId)) {this.$refs.videoComp.reFollowPlayList(justFollowVlogerId);uni.setStorageSync("justFollowVlogerId", "");} // 取消关注也要重新刷一下list
    var justCancelVlogerId = uni.getStorageSync("justCancelVlogerId");if (!app.isStrEmpty(justCancelVlogerId)) {this.$refs.videoComp.reCancelPlayList(justCancelVlogerId);uni.setStorageSync("justCancelVlogerId", "");}}, onHide: function onHide() {var me = this; // 显示和隐藏，需要判断根据不同tab做暂停或者隐藏
    if (me.curIndex == 0) {// 虚位以待
    } else if (me.curIndex == 1) {me.playFollowStatus = false;} else if (me.curIndex == 2) {me.playStatus = false;}}, // 当前页下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {var me = this; // 下拉刷新判断，如果是不同tab，那么组件中刷新的请求也不同
    if (me.curIndex == 0) {// 虚位以待
    } else if (me.curIndex == 1) {this.$refs.videoFollowComp.displayVideoPaging(1, true);} else if (me.curIndex == 2) {this.$refs.videoComp.displayVideoPaging(1, true);}}, methods: { // 前往搜索页面
    goSearch: function goSearch() {uni.navigateTo({ url: "/pages/search/search" });}, // 左滑右滑选项卡改变选中状态
    changeTopTab: function changeTopTab(e) {var current = e.detail.current;this.curIndex = current;this.playFollowStatus = this.curIndex === 1 ? true : false;this.playStatus = this.curIndex === 2 ? true : false;}, // 点击头部选项卡，切换页面
    tapFollow: function tapFollow(current) {this.curIndex = current;this.playFollowStatus = this.curIndex === 1 ? true : false;this.playStatus = this.curIndex === 2 ? true : false;}, // 下拉刷新，改变head的字样显示
    showLoading: function showLoading() {this.isLoading = true;}, hideLoading: function hideLoading() {this.isLoading = false;}, letFollowVideoPause: function letFollowVideoPause() {this.playFollowStatus = false;} } };exports.default = _default;

/***/ }),

/***/ 178:
/*!*************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoComp.vue?vue&type=template&id=52c2f62a& */ 179);
/* harmony import */ var _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoComp.vue?vue&type=script&lang=js& */ 181);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 183).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 183).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "09a14d08",
  false,
  _videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/*!********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=template&id=52c2f62a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=template&id=52c2f62a& */ 180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_52c2f62a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 180:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=template&id=52c2f62a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh }
          },
          [
            _c("u-text", { staticClass: ["refresh-info-txt"] }),
            _c("loading-indicator")
          ]
        ),
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
                    ref: "myVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myVideo",
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
                  !item.doIFollowVloger && _vm.userId != _vm.thisVlogerId
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
                        _vm._v(_vm._s(_vm.getGraceNumber(item.likeCounts)))
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
                        _vm._v(
                          _vm._s(
                            _vm.getGraceNumber(_vm.thisVlogTotalComentCounts)
                          )
                        )
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
        })
      ],
      2
    ),
    _c(
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
          { ref: "share", attrs: { backgroundColor: "#fff", type: "share" } },
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
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 181:
/*!**************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=script&lang=js& */ 182);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 182:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

    videoList: {
      default: [] },

    refreshList: {
      default: [] },

    pagingList: {
      default: [] } },


  data: function data() {
    return {
      thisVlog: {}, // 当前的短视频对象
      thisVlogId: "", // 当前的短视频主键id
      thisVlogerId: "", // 当前的短视频博主的主键id
      userId: "", // 当前用户id


      refreshing: false,
      showRefreshLoading: "hide",

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

    var videoContext = uni.createVideoContext('myVideo');
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
    // 把超过1000或10000的数字调整，比如1.3k/6.8w
    getGraceNumber: function getGraceNumber(num) {
      return getApp().graceNumber(num);
    },
    freshCommentCounts: function freshCommentCounts() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;
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

    listScroll: function listScroll(e) {
      if (e.contentOffset.y > 0) {
        this.$emit("showLoading");
      }
    },

    downloadVlog: function downloadVlog() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var pendingLength = vlog.url;
    },

    copyLink: function copyLink() {
      var me = me;
    },

    showQRCode: function showQRCode() {
      var me = me;
    },

    changeVlogToPrivate: function changeVlogToPrivate() {
      var me = me;
    },

    // 下拉刷新的过程中，改变头部tab显示的字样
    onpullingdown: function onpullingdown(e) {
    },
    onrefresh: function onrefresh(e) {var _this = this;
      this.refreshing = true;
      setTimeout(function () {
        _this.refreshing = false;
        _this.$emit("hideLoading");
        _this.refreshText = '↓ Pull To Refresh';
      }, 300);

      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新
      uni.startPullDownRefresh();
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


    scroll: function scroll(e) {
      var originalIndex = this.currentIndex;
      var isNext = false;
      if (e.contentOffset.y < this.contentOffsetY) {
        isNext = true;
      }
      this.contentOffsetY = e.contentOffset.y;

      var num = this.playerList.length;

      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));
      this.onchange(this.currentIndex);

      this.times = new Date().getTime();
      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中
      if (this.playerList.length - this.currentIndex < 3) {
        // 如果要分页的page和总数totalPage相等，则没有更多
        if (this.page == this.totalPage) {
          return;
        }
        this.displayVideoPaging(this.page + 1, false);
      }

    },

    // 分页查询新的list，并且追加到现有list中
    displayVideoPaging: function displayVideoPaging(page, needClearList) {

      // 查询首页短视频列表
      var me = this;
      var myUserInfo = getApp().getUserInfoSession();
      var userId = "";
      if (myUserInfo != null) {
        userId = myUserInfo.id;
      }
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/vlog/indexList?userId=" + userId + "&page=" + page + "&pageSize=10",
        success: function success(result) {

          if (result.data.status == 200) {
            var vlogList = result.data.data.rows;
            var totalPage = result.data.data.total;
            // me.playerList = vlogList;
            if (needClearList) {
              me.playerList = [];
            }
            me.playerList = me.playerList.concat(vlogList);
            me.page = page;
            me.totalPage = totalPage;

            if (needClearList) {
              me.setThisVlogInfo();
              me.freshCommentCounts();
            }
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }

        },
        complete: function complete() {
          uni.stopPullDownRefresh();
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

      this.refreshVlogCounts();
      this.setThisVlogInfo();
      this.freshCommentCounts();
    },

    // 设置当前vlog的信息
    setThisVlogInfo: function setThisVlogInfo() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      this.thisVlog = vlog;
      this.thisVlogId = vlog.vlogId;
      this.thisVlogerId = vlog.vlogerId;
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

/***/ 183:
/*!**********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=style&index=0&lang=css& */ 184);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 184:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 185:
/*!*******************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=template&id=107c06bb& */ 186);
/* harmony import */ var _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=script&lang=js& */ 188);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 190).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 190).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "3f2d81ce",
  false,
  _videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 186:
/*!**************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=template&id=107c06bb& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=template&id=107c06bb& */ 187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_107c06bb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 187:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=template&id=107c06bb& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh }
          },
          [
            _c("u-text", { staticClass: ["refresh-info-txt"] }),
            _c("loading-indicator")
          ]
        ),
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
                    ref: "myFollowVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myFollowVideo",
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
                  !item.doIFollowVloger
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
        })
      ],
      2
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

/***/ 188:
/*!********************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=script&lang=js& */ 189);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

    playFollowStatus: {
      default: false },

    playStatus: {
      default: false },

    videoList: {
      default: [] },

    refreshList: {
      default: [] },

    pagingList: {
      default: [] } },


  data: function data() {
    return {
      thisVlog: {}, // 当前的短视频对象
      thisVlogId: "", // 当前的短视频主键id
      thisVlogerId: "", // 当前的短视频博主的主键id

      refreshing: false,
      showRefreshLoading: "hide",

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

    // 查询首页短视频列表
    this.displayVideoPaging(this.page + 1, true);

    var videoContext = uni.createVideoContext('myFollowVideo');
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

    playFollowStatus: function playFollowStatus(val) {
      var me = this;

      if (!val) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
    } },

  methods: {
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

    listScroll: function listScroll(e) {
      if (e.contentOffset.y > 0) {
        this.$emit("showLoading");
      }
    },

    downloadVlog: function downloadVlog() {

      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var pendingLength = vlog.url;

    },

    copyLink: function copyLink() {
      var me = me;
    },

    showQRCode: function showQRCode() {
      var me = me;
    },

    changeVlogToPrivate: function changeVlogToPrivate() {
      var me = me;
    },

    onrefresh: function onrefresh(e) {var _this = this;
      this.refreshing = true;
      setTimeout(function () {
        _this.refreshing = false;
        _this.$emit("hideLoading");
        _this.refreshText = '↓ Pull To Refresh';
      }, 300);

      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新
      uni.startPullDownRefresh();
    },

    onplay: function onplay(e) {
      if (uni.getSystemInfoSync().platform == 'ios') {
        // this.$emit("play", 0.1);
        this.doplay(0.1);
      }
    },
    onerror: function onerror(err) {
    },
    timeupdate: function timeupdate(e) {
      if (e.detail.currentTime > 0.2) {
        // this.$emit("play", e.detail.currentTime);
        this.doplay(e.detail.currentTime);
      }
    },

    playOrPause: function playOrPause() {
      var me = this;
      var playFollowStatus = this.playFollowStatus;

      if (!playFollowStatus) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
      this.playFollowStatus = !playFollowStatus;
    },


    scroll: function scroll(e) {
      var originalIndex = this.currentIndex;
      var isNext = false;
      if (e.contentOffset.y < this.contentOffsetY) {
        isNext = true;
      }
      this.contentOffsetY = e.contentOffset.y;

      var num = this.playerList.length;

      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));
      this.onchange(this.currentIndex);

      this.times = new Date().getTime();

      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中
      if (this.playerList.length - this.currentIndex < 3) {
        // 如果要分页的page和总数totalPage相等，则没有更多
        if (this.page == this.totalPage) {
          return;
        }
        this.displayVideoPaging(this.page + 1, false);
      }

    },

    // 分页查询新的list，并且追加到现有list中
    displayVideoPaging: function displayVideoPaging(page, needClearList) {

      // 查询首页短视频列表
      var me = this;
      var myUserInfo = getApp().getUserInfoSession();
      var userId = "";
      if (myUserInfo != null) {
        userId = myUserInfo.id;
      } else {
        return;
      }
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken() },

        url: serverUrl + "/vlog/followList?myId=" + userId + "&page=" + page + "&pageSize=10",
        success: function success(result) {

          if (result.data.status == 200) {
            var vlogList = result.data.data.rows;
            var totalPage = result.data.data.total;
            if (needClearList) {
              me.playerList = [];
            }
            me.playerList = me.playerList.concat(vlogList);
            me.page = page;
            me.totalPage = totalPage;

            if (needClearList) {
              me.setThisVlogInfo();
              me.freshCommentCounts();
            }
            me.doTimer();
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }

        },
        complete: function complete() {
          // me.doTimer();
        } });

    },

    doTimer: function doTimer() {
      var me = this;
      var t = setTimeout(function () {

        if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {
          me.videoContext.pause();
          me.playFollowStatus = false;
        }
      }, 3000);
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

      this.refreshVlogCounts();
      this.setThisVlogInfo();
      this.freshCommentCounts();
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

/***/ 190:
/*!****************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 191);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 191:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 192:
/*!*******************************************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=style&index=0&id=329c2ded&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=329c2ded&scoped=true&lang=css&mpType=page */ 193);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_329c2ded_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/index/index.nvue?vue&type=style&index=0&id=329c2ded&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  },
  "my-swiper": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "near-by": {
    "backgroundColor": "#000000",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "my-follow": {
    "backgroundColor": "#000000",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "warn-info": {
    "color": "#FFFFFF",
    "fontSize": "36rpx",
    "fontWeight": "600"
  },
  "normal-img": {
    "width": "50rpx",
    "height": "50rpx",
    "opacity": 0.8
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz8zODZjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz8yYzFiIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9mZjc0Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT8zMDQ2Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9hMjU4Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT8wOTI1IiwidW5pLWFwcDovLy9wYWdlcy9pbmRleC9pbmRleC5udnVlIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0NvbXAudnVlPzJmYzAiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvQ29tcC52dWU/MmFkMCIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L2NvbXBvbmVudHMvdmlkZW9Db21wLnZ1ZT9kM2M0Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0NvbXAudnVlPzMzODEiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdmlkZW9Db21wLnZ1ZSIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L2NvbXBvbmVudHMvdmlkZW9Db21wLnZ1ZT8zMWM3Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0NvbXAudnVlP2JmNDQiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRm9sbG93Q29tcC52dWU/ZDYxNiIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L2NvbXBvbmVudHMvdmlkZW9Gb2xsb3dDb21wLnZ1ZT9jYmE3Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlPzVhZWUiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRm9sbG93Q29tcC52dWU/MDlmNiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlP2YzYjAiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9jb21wb25lbnRzL3ZpZGVvRm9sbG93Q29tcC52dWU/NjdlMiIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/MGNmYSIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/ZmRhZCIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L0FwcC52dWU/MjNmZiIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L0FwcC52dWU/M2E3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDOzs7Ozs7Ozs7Ozs7O0FDRDlHO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlELFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRzs7Ozs7Ozs7Ozs7OztBQ1BuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBJO0FBQzFJO0FBQ3FFO0FBQ0w7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQywyRkFBa0Y7QUFDdEksYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLDJGQUFrRjtBQUMzSTs7QUFFQTs7QUFFQTtBQUMyTTtBQUMzTSxnQkFBZ0IsbU5BQVU7QUFDMUIsRUFBRSx1RkFBTTtBQUNSLEVBQUUsd0dBQU07QUFDUixFQUFFLGlIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDRHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RCxzQkFBc0Isd0JBQXdCO0FBQzlDLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBLGtDQUFrQyw2QkFBNkI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0Esd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRCw4QkFBOEIsaUNBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHNDQUFzQyxxQ0FBcUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxzQ0FBc0MscUNBQXFDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esc0NBQXNDLHFDQUFxQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBNkM7QUFDekUseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRCw4QkFBOEIsaUNBQWlDO0FBQy9ELGdDQUFnQywrQkFBK0I7QUFDL0Qsb0NBQW9DLHdDQUF3QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUFBO0FBQUE7QUFBQTtBQUFpaUIsQ0FBZ0IsdWtCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJMcmpCO0FBQ0EsZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOQSxxQ0FDQSxtQixDQUNBO0FBQ0E7QUFDQTtlQUdBLEVBQ0EsY0FDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FKQSxFQUtBLHlDQUxBLEVBREEsRUFRQSxJQVJBLGtCQVFBLENBQ0EsU0FDQSxnQkFEQSxFQUdBLHVDQUhBLEVBSUEsaUNBSkEsRUFLQTtBQUNBLGlCQU5BLEVBT0EsaUJBUEEsRUFRQSx1QkFSQSxFQVVBO0FBQ0EsbUJBWEEsRUFXQTtBQUNBLHFCQVpBLEVBWUE7QUFDQSxvQkFiQSxFQWFBO0FBQ0EsZ0JBZEEsQ0FjQTtBQWRBLE1BaUJBLENBMUJBLEVBMkJBLE1BM0JBLG9CQTJCQSxDQUNBLDZDQURBLENBQ0E7QUFDQSxHQTdCQSxFQThCQSx3Q0FDQSx1QkFEQSxDQUVBO0FBRUE7QUFDQSxrQkFDQSxvQkFDQTtBQUNBLEtBRkEsTUFFQSxvQkFDQSxzQkFDQSwyQkFDQSxDQUhBLE1BR0Esb0JBQ0EscUJBQ0EsNEJBQ0EsQ0FDQSxDQTdDQSxFQThDQSxNQTlDQSxvQkE4Q0EsQ0FDQSxjQUVBLDBDQUNBLDZCQUpBLENBT0E7QUFDQSw0Q0FDQSxpREFDQSx3REFDQSxpREFDQSxDQUNBLENBYkEsQ0FnQkE7QUFDQSwyQkFDQTtBQUNBLEtBRkEsTUFFQSx1QkFDQSwyQkFDQSxDQUZBLE1BRUEsdUJBQ0EscUJBQ0EsQ0F2QkEsQ0F5QkE7QUFDQSxzRUFDQSwwQ0FDQSwwREFDQSw2Q0FDQSxDQTlCQSxDQStCQTtBQUNBLHNFQUNBLDBDQUNBLDBEQUNBLDZDQUNBLENBRUEsQ0FwRkEsRUFxRkEsTUFyRkEsb0JBcUZBLENBQ0EsY0FEQSxDQUVBO0FBQ0EsMkJBQ0E7QUFDQSxLQUZBLE1BRUEsdUJBQ0EsNEJBQ0EsQ0FGQSxNQUVBLHVCQUNBLHNCQUNBLENBQ0EsQ0EvRkEsRUFnR0E7QUFDQSxtQkFqR0EsK0JBaUdBLENBQ0EsY0FEQSxDQUdBO0FBQ0EsMkJBQ0E7QUFDQSxLQUZBLE1BRUEsdUJBQ0EsdURBQ0EsQ0FGQSxNQUVBLHVCQUNBLGlEQUNBLENBRUEsQ0E3R0EsRUE4R0EsV0FDQTtBQUNBLFlBRkEsc0JBRUEsQ0FDQSxpQkFDQSwyQkFEQSxJQUdBLENBTkEsRUFRQTtBQUNBLDRDQUNBLCtCQUNBLHdCQUNBLDJEQUNBLHFEQUNBLENBZEEsRUFlQTtBQUNBLDRDQUNBLHdCQUNBLDJEQUNBLHFEQUNBLENBcEJBLEVBc0JBO0FBQ0EsZUF2QkEseUJBdUJBLENBQ0Esc0JBQ0EsQ0F6QkEsRUEwQkEsV0ExQkEseUJBMEJBLENBQ0EsdUJBQ0EsQ0E1QkEsRUE2QkEsbUJBN0JBLGlDQTZCQSxDQUNBLDhCQUNBLENBL0JBLEVBOUdBLEU7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQywyREFBa0Q7QUFDdEcsYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLDJEQUFrRDtBQUMzRzs7QUFFQTs7QUFFQTtBQUMyTTtBQUMzTSxnQkFBZ0IsbU5BQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWUsWUFBWSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBOEQ7QUFDOUUsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBNEM7QUFDaEUsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BELDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQXdDO0FBQzFFLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlELDZCQUE2QjtBQUM3QixnQ0FBZ0MsNENBQTRDO0FBQzVFO0FBQ0E7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlLHVCQUF1QixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0NBQXdDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0NBQXNDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlDQUF5QztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFLDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkIsb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlDQUF5QztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUNBQXVDO0FBQ3ZFLDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkIsb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QixrQkFBa0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCLHlDQUF5QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4UUE7QUFBQTtBQUFBO0FBQUE7QUFBeWhCLENBQWdCLCtqQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FON2lCLG1CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsRUFEQTs7QUFJQTtBQUNBLG9CQURBLEVBSkE7O0FBT0E7QUFDQSxvQkFEQSxFQVBBOztBQVVBO0FBQ0EsaUJBREEsRUFWQTs7QUFhQTtBQUNBLGlCQURBLEVBYkE7O0FBZ0JBO0FBQ0EsaUJBREEsRUFoQkEsRUFEQTs7O0FBcUJBLE1BckJBLGtCQXFCQTtBQUNBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLG9CQUZBLEVBRUE7QUFDQSxzQkFIQSxFQUdBO0FBQ0EsZ0JBSkEsRUFJQTs7O0FBR0EsdUJBUEE7QUFRQSxnQ0FSQTs7QUFVQSxrQkFWQTtBQVdBLGFBWEE7QUFZQSxrQkFaQTtBQWFBLGdDQWJBO0FBY0Esa0NBZEE7O0FBZ0JBLHNCQWhCQTs7QUFrQkEscUJBbEJBO0FBbUJBLHVCQW5CQTs7QUFxQkEsaUNBckJBOztBQXVCQSx1QkF2QkE7QUF3QkEsc0RBeEJBOztBQTBCQSxHQWhEQTtBQWlEQSxTQWpEQSxxQkFpREE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBakVBO0FBa0VBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTs7QUFjQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0F0QkEsRUFsRUE7O0FBMEZBO0FBQ0E7QUFDQSxrQkFGQSwwQkFFQSxHQUZBLEVBRUE7QUFDQTtBQUNBLEtBSkE7QUFLQSxzQkFMQSxnQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsMkRBRkE7QUFHQSxlQUhBLG1CQUdBLE1BSEEsRUFHQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7O0FBWUEsS0F6QkE7QUEwQkEscUJBMUJBLDZCQTBCQSxNQTFCQSxFQTBCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHlCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQSw2Q0FEQTtBQUVBLDRDQUZBO0FBR0EsbUJBSEEscUJBR0E7QUFDQTtBQUNBLGFBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLGdDQURBO0FBRUEsc0RBRkEsRUFGQTs7QUFNQSxrSEFOQTtBQU9BLGlCQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTs7QUFLQTtBQUNBLFdBbkJBOzs7QUFzQkEsT0E5Q0EsTUE4Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHlCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQSw2Q0FEQTtBQUVBLDRDQUZBO0FBR0EsbUJBSEEscUJBR0E7QUFDQTtBQUNBLGFBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLGdDQURBO0FBRUEsc0RBRkEsRUFGQTs7QUFNQSxvSEFOQTtBQU9BLGlCQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTs7QUFLQTtBQUNBLFdBbkJBOzs7QUFzQkE7QUFDQSxLQXpIQTs7QUEySEE7QUFDQSxrQkE1SEEsMEJBNEhBLE1BNUhBLEVBNEhBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpJQTtBQTBJQSxxQkExSUEsNkJBMElBLE1BMUlBLEVBMElBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZKQTs7QUF5SkE7QUFDQSxvQkExSkEsNEJBMEpBLFFBMUpBLEVBMEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4S0E7QUF5S0E7QUFDQSxvQkExS0EsNEJBMEtBLFFBMUtBLEVBMEtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZMQTs7O0FBMExBO0FBQ0EsWUEzTEEsb0JBMkxBLFFBM0xBLEVBMkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHVCQUZBO0FBR0Esc0JBSEE7OztBQU1BO0FBQ0EsMkNBREE7QUFFQSwwQ0FGQTtBQUdBLGlCQUhBLHFCQUdBO0FBQ0E7QUFDQSxXQUxBOzs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLDhCQURBO0FBRUEsb0RBRkEsRUFGQTs7QUFNQSxnRkFOQTtBQU9BLGVBUEEsbUJBT0EsTUFQQSxFQU9BOztBQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTs7QUFLQTtBQUNBLFNBbEJBOzs7QUFxQkEsS0F0T0E7O0FBd09BLG9CQXhPQSw0QkF3T0EsTUF4T0EsRUF3T0E7QUFDQTtBQUNBO0FBQ0Esd0RBREE7O0FBR0EsS0E3T0E7O0FBK09BLGNBL09BLHNCQStPQSxDQS9PQSxFQStPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBblBBOztBQXFQQSxnQkFyUEEsMEJBcVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM1BBOztBQTZQQSxZQTdQQSxzQkE2UEE7QUFDQTtBQUNBLEtBL1BBOztBQWlRQSxjQWpRQSx3QkFpUUE7QUFDQTtBQUNBLEtBblFBOztBQXFRQSx1QkFyUUEsaUNBcVFBO0FBQ0E7QUFDQSxLQXZRQTs7QUF5UUE7QUFDQSxpQkExUUEseUJBMFFBLENBMVFBLEVBMFFBO0FBQ0EsS0EzUUE7QUE0UUEsYUE1UUEscUJBNFFBLENBNVFBLEVBNFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxHQUpBOztBQU1BO0FBQ0E7QUFDQSxLQXRSQTs7QUF3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVSQTtBQTZSQTtBQUNBLEtBOVJBO0FBK1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuU0E7O0FBcVNBLGVBclNBLHlCQXFTQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL1NBOzs7QUFrVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0F6VUE7O0FBMlVBO0FBQ0Esc0JBNVVBLDhCQTRVQSxJQTVVQSxFQTRVQSxhQTVVQSxFQTRVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDhGQUZBO0FBR0EsZUFIQSxtQkFHQSxNQUhBLEVBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQWZBLE1BZUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTs7QUFLQTs7QUFFQSxTQTVCQTtBQTZCQSxnQkE3QkEsc0JBNkJBO0FBQ0E7QUFDQSxTQS9CQTs7QUFpQ0EsS0F2WEE7O0FBeVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3WEE7QUE4WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXZZQTs7QUF5WUE7QUFDQSxtQkExWUEsNkJBMFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxaQTs7QUFvWkEscUJBcFpBLCtCQW9aQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsdUVBRkE7QUFHQSxlQUhBLG1CQUdBLE1BSEEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQXBhQTs7QUFzYUEscUNBdGFBLDZDQXNhQSxNQXRhQSxFQXNhQSxNQXRhQSxFQXNhQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuYkE7O0FBcWJBLGlCQXJiQSwyQkFxYkE7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0EsS0ExYkE7QUEyYkEsZUEzYkEseUJBMmJBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBaGNBLEVBMUZBLEU7Ozs7Ozs7Ozs7OztBQ3ROQTtBQUFBO0FBQUE7QUFBQTtBQUF3NUIsQ0FBZ0IsaTZCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNTZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRIO0FBQzVIO0FBQ21FO0FBQ0w7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxpRUFBd0Q7QUFDNUcsYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLGlFQUF3RDtBQUNqSDs7QUFFQTs7QUFFQTtBQUMyTTtBQUMzTSxnQkFBZ0IsbU5BQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWUsWUFBWSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBOEQ7QUFDOUUsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBNEM7QUFDaEUsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BELDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQXdDO0FBQzFFLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlELDZCQUE2QjtBQUM3QixnQ0FBZ0MsNENBQTRDO0FBQzVFO0FBQ0E7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlLHVCQUF1QixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0NBQXdDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0NBQXNDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlDQUF5QztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFLDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkIsb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5Q0FBeUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVDQUF1QztBQUN2RSw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QixrQkFBa0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUFBO0FBQUE7QUFBQTtBQUEraEIsQ0FBZ0IscWtCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcU5uakIsbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQSxFQURBOztBQUlBO0FBQ0Esb0JBREEsRUFKQTs7QUFPQTtBQUNBLG9CQURBLEVBUEE7O0FBVUE7QUFDQSxvQkFEQSxFQVZBOztBQWFBO0FBQ0EsaUJBREEsRUFiQTs7QUFnQkE7QUFDQSxpQkFEQSxFQWhCQTs7QUFtQkE7QUFDQSxpQkFEQSxFQW5CQSxFQURBOzs7QUF3QkEsTUF4QkEsa0JBd0JBO0FBQ0E7QUFDQSxrQkFEQSxFQUNBO0FBQ0Esb0JBRkEsRUFFQTtBQUNBLHNCQUhBLEVBR0E7O0FBRUEsdUJBTEE7QUFNQSxnQ0FOQTs7QUFRQSxrQkFSQTtBQVNBLGFBVEE7QUFVQSxrQkFWQTtBQVdBLGdDQVhBO0FBWUEsa0NBWkE7O0FBY0Esc0JBZEE7O0FBZ0JBLHFCQWhCQTtBQWlCQSx1QkFqQkE7O0FBbUJBLGlDQW5CQTs7QUFxQkEsdUJBckJBO0FBc0JBLHNEQXRCQTs7QUF3QkEsR0FqREE7QUFrREEsU0FsREEscUJBa0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBNURBO0FBNkRBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTs7QUFjQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0F0QkEsRUE3REE7O0FBcUZBO0FBQ0Esc0JBREEsZ0NBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBREE7QUFFQSwyREFGQTtBQUdBLGVBSEEsbUJBR0EsTUFIQSxFQUdBOztBQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FWQTs7QUFZQSxLQTNCQTtBQTRCQSxxQkE1QkEsNkJBNEJBLE1BNUJBLEVBNEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEseUJBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLDZDQURBO0FBRUEsNENBRkE7QUFHQSxtQkFIQSxxQkFHQTtBQUNBO0FBQ0EsYUFMQTs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLGdDQURBO0FBRUEsc0RBRkEsRUFGQTs7QUFNQSxrSEFOQTtBQU9BLGlCQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTs7QUFLQTtBQUNBLFdBbkJBOzs7QUFzQkEsT0EvQ0EsTUErQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHlCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQSw2Q0FEQTtBQUVBLDRDQUZBO0FBR0EsbUJBSEEscUJBR0E7QUFDQTtBQUNBLGFBTEE7O0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxnQ0FEQTtBQUVBLHNEQUZBLEVBRkE7O0FBTUEsb0hBTkE7QUFPQSxpQkFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLDRCQUZBO0FBR0EsOEJBSEE7O0FBS0E7QUFDQSxXQW5CQTs7O0FBc0JBO0FBQ0EsS0E3SEE7O0FBK0hBO0FBQ0Esa0JBaElBLDBCQWdJQSxNQWhJQSxFQWdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVJQTtBQTZJQSxxQkE3SUEsNkJBNklBLE1BN0lBLEVBNklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekpBOztBQTJKQTtBQUNBLG9CQTVKQSw0QkE0SkEsUUE1SkEsRUE0SkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBektBO0FBMEtBO0FBQ0Esb0JBM0tBLDRCQTJLQSxRQTNLQSxFQTJLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4TEE7OztBQTJMQTtBQUNBLFlBNUxBLG9CQTRMQSxRQTVMQSxFQTRMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSx1QkFGQTtBQUdBLHNCQUhBOzs7QUFNQTtBQUNBLDJDQURBO0FBRUEsMENBRkE7QUFHQSxpQkFIQSxxQkFHQTtBQUNBO0FBQ0EsV0FMQTs7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsOEJBREE7QUFFQSxvREFGQSxFQUZBOztBQU1BLGdGQU5BO0FBT0EsZUFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSwwQkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0EsU0FsQkE7OztBQXFCQSxLQXhPQTs7QUEwT0Esb0JBMU9BLDRCQTBPQSxNQTFPQSxFQTBPQTtBQUNBO0FBQ0E7QUFDQSx3REFEQTs7QUFHQSxLQS9PQTs7QUFpUEEsY0FqUEEsc0JBaVBBLENBalBBLEVBaVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyUEE7O0FBdVBBLGdCQXZQQSwwQkF1UEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQS9QQTs7QUFpUUEsWUFqUUEsc0JBaVFBO0FBQ0E7QUFDQSxLQW5RQTs7QUFxUUEsY0FyUUEsd0JBcVFBO0FBQ0E7QUFDQSxLQXZRQTs7QUF5UUEsdUJBelFBLGlDQXlRQTtBQUNBO0FBQ0EsS0EzUUE7O0FBNlFBLGFBN1FBLHFCQTZRQSxDQTdRQSxFQTZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLEVBSUEsR0FKQTs7QUFNQTtBQUNBO0FBQ0EsS0F2UkE7O0FBeVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlSQTtBQStSQTtBQUNBLEtBaFNBO0FBaVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRTQTs7QUF3U0EsZUF4U0EseUJBd1NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsVEE7OztBQXFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0E3VUE7O0FBK1VBO0FBQ0Esc0JBaFZBLDhCQWdWQSxJQWhWQSxFQWdWQSxhQWhWQSxFQWdWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQSw4QkFEQTtBQUVBLG9EQUZBLEVBRkE7O0FBTUEsNkZBTkE7QUFPQSxlQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBZkEsTUFlQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSwwQkFGQTtBQUdBLDRCQUhBOztBQUtBOztBQUVBLFNBaENBO0FBaUNBLGdCQWpDQSxzQkFpQ0E7QUFDQTtBQUNBLFNBbkNBOztBQXFDQSxLQWpZQTs7QUFtWUEsV0FuWUEscUJBbVlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkEsRUFNQSxJQU5BO0FBT0EsS0E1WUE7O0FBOFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsWkE7QUFtWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTVaQTs7QUE4WkE7QUFDQSxtQkEvWkEsNkJBK1pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMWFBOztBQTRhQSxxQkE1YUEsK0JBNGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx1RUFGQTtBQUdBLGVBSEEsbUJBR0EsTUFIQSxFQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBNWJBOztBQThiQSxxQ0E5YkEsNkNBOGJBLE1BOWJBLEVBOGJBLE1BOWJBLEVBOGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMWNBOztBQTRjQSxpQkE1Y0EsMkJBNGNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBamRBO0FBa2RBLGVBbGRBLHlCQWtkQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQSxLQXZkQSxFQXJGQSxFOzs7Ozs7Ozs7Ozs7QUN0TkE7QUFBQTtBQUFBO0FBQUE7QUFBODVCLENBQWdCLHU2QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWw3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFBdzdCLENBQWdCLGk4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTU4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUFBO0FBQUE7QUFBQTtBQUFpNUIsQ0FBZ0IsMDVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcjZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNzIpO1xuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50cywgb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9KVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI5YzJkZWQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyOWMyZGVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjljMmRlZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMyOWMyZGVkXCIsXG4gIFwiNWZkNzA1MzJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjljMmRlZCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2VcIl0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzd2lwZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0ICsgXCJweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGN1cnJlbnQ6IF92bS5jdXJJbmRleCB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2VUb3BUYWIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzd2lwZXItaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm5lYXItYnlcIl0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnNjcmVlbkhlaWdodCArIFwicHhcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3YXJuLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaaguacquW8gOaUvu+8jOaVrOivt+acn+W+he+8gVwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0ubXlVc2VySW5mbyA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm15LWZvbGxvd1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0ICsgXCJweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIndhcm4taW5mb1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K+355m75b2V5ZCO5p+l55yL77yBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2aWRlby1mb2xsb3ctY29tcFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJ2aWRlb0ZvbGxvd0NvbXBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5IZWlnaHQ6IF92bS5zY3JlZW5IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgcGxheUZvbGxvd1N0YXR1czogX3ZtLnBsYXlGb2xsb3dTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW9MaXN0OiBfdm0udmlkZW9MaXN0LFxuICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hMaXN0OiBfdm0ucmVmcmVzaExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgcGFnaW5nTGlzdDogX3ZtLnBhZ2luZ0xpc3RcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzaG93TG9hZGluZzogX3ZtLnNob3dMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkaW5nOiBfdm0uaGlkZUxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgbGV0Rm9sbG93VmlkZW9QYXVzZTogX3ZtLmxldEZvbGxvd1ZpZGVvUGF1c2UsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZpZGVvUGFnaW5nOiBfdm0uZGlzcGxheVZpZGVvUGFnaW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZGVvLWNvbXBcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwidmlkZW9Db21wXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2NyZWVuSGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgIHBsYXlTdGF0dXM6IF92bS5wbGF5U3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvTGlzdDogX3ZtLnZpZGVvTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoTGlzdDogX3ZtLnJlZnJlc2hMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2luZ0xpc3Q6IF92bS5wYWdpbmdMaXN0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmc6IF92bS5zaG93TG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGluZzogX3ZtLmhpZGVMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWaWRlb1BhZ2luZzogX3ZtLmRpc3BsYXlWaWRlb1BhZ2luZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgIV92bS5pc0xvYWRpbmdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlclwiXSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG1hcmdpblRvcDogX3ZtLnN0YXR1c0JhckhlaWdodCArIFwicHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItbGVmdFwiXSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItY2VudGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YXBGb2xsb3coMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWl0ZW0tdGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpmYTov5FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1pdGVtLWxpbmVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiYWN0aXZhdGUtbGluZVwiOiBfdm0uY3VySW5kZXggPT09IDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItaXRlbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFwRm9sbG93KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1pdGVtLXRpdGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YWz5rOoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItaXRlbS1saW5lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImFjdGl2YXRlLWxpbmVcIjogX3ZtLmN1ckluZGV4ID09PSAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWl0ZW1cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhcEZvbGxvdygyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItaXRlbS10aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaOqOiNkFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWl0ZW0tbGluZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJhY3RpdmF0ZS1saW5lXCI6IF92bS5jdXJJbmRleCA9PT0gMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaGVhZGVyLXJpZ2h0LXNlYXJjaFwiLCBcIm5vcm1hbC1pbWdcIl0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tc2VhcmNoLnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ29TZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaXNMb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJoZWFkZXJcIl0sXG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBtYXJnaW5Ub3A6IF92bS5zdGF0dXNCYXJIZWlnaHQgKyBcInB4XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWxlZnRcIl0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLWNlbnRlclwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItaXRlbVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyLXJlZnJlc2gtdGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiL5ouJ5Yi35paw6KeG6aKRXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1yaWdodC1zZWFyY2hcIiwgXCJub3JtYWwtaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2FkaW5nLmdpZlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8c3R5bGUgc2NvcGVkPlxuXHQvKiBpbmRleCBzdGFydCAqL1xuXHQucGFnZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHR9XG5cdC8qIGluZGV4IGVuZCAqL1xuXHRcblx0Lyog6aG26YOo6YCJ6aG55Y2hIHN0YXJ0ICovXG5cdC5oZWFkZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmctbGVmdDogNDBycHg7XG5cdFx0cGFkZGluZy1yaWdodDogNDBycHg7XG5cdH1cblx0XG5cdC5oZWFkZXItY2VudGVyIHtcblx0XHRmbGV4OiAxO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXHRcblx0LmhlYWRlci1sZWZ0LFxuXHQuaGVhZGVyLXJpZ2h0IHtcblx0XHRjb2xvcjogIzk5OTtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xuXHR9XG5cdFxuXHQuaGVhZGVyLXJpZ2h0LXNlYXJjaCB7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0LyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cblx0fVxuXHRcblx0LmhlYWRlci1pdGVtIHtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1sZWZ0OiA2cnB4O1xuXHRcdG1hcmdpbi1yaWdodDogNnJweDtcblx0fVxuXHRcblx0LmhlYWRlci1pdGVtLXRpdGxlIHtcblx0XHR3aWR0aDogMTIwcnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDYwcnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA2MHJweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHQuaGVhZGVyLXJlZnJlc2gtdGl0bGUge1xuXHRcdHdpZHRoOiAzMDBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGhlaWdodDogNjBycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5oZWFkZXItaXRlbS1saW5lIHtcblx0XHRoZWlnaHQ6IDVycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDhycHg7XG5cdFx0d2lkdGg6IDYwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XG5cdH1cblx0Lyog6aG26YOo6YCJ6aG55Y2hIGVuZCAqL1xuXHRcblx0Lyog6YCJ6aG55Y2h6L2u5pKt57uE5Lu2IHN0YXJ0ICovXG5cdC5teS1zd2lwZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdH1cblx0Lm5lYXItYnkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXHQubXktZm9sbG93IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0Lyog6YCJ6aG55Y2h6L2u5pKt57uE5Lu2IGVuZCAqL1xuXHQud2Fybi1pbmZvIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDM2cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0Lm5vcm1hbC1pbWcge1xuXHRcdHdpZHRoOiA1MHJweDtcblx0XHRoZWlnaHQ6IDUwcnB4O1xuXHRcdG9wYWNpdHk6IDAuODtcblx0fVxuPC9zdHlsZT5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XG5cdFx0PCEtLSDlt6bkuK3lj7PnmoTkuInkuKrpobXpnaLliIfmjaLvvIzkvp3mrKHmmK/vvJrpmYTov5EgLSDlhbPms6ggLSDmjqjojZAgLS0+XG5cdFx0PHN3aXBlciBzdHlsZT1cIm15LXN3aXBlclwiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgOmN1cnJlbnQ9XCJjdXJJbmRleFwiIEBjaGFuZ2U9XCJjaGFuZ2VUb3BUYWJcIj5cblx0XHRcdDxzd2lwZXItaXRlbT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuZWFyLWJ5XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KydweCd9XCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3YXJuLWluZm9cIj7mmoLmnKrlvIDmlL7vvIzmlazor7fmnJ/lvoXvvIE8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJteVVzZXJJbmZvID09IG51bGxcIiBjbGFzcz1cIm15LWZvbGxvd1wiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsncHgnfVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid2Fybi1pbmZvXCI+6K+355m75b2V5ZCO5p+l55yL77yBPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZGVvLWZvbGxvdy1jb21wXG5cdFx0XHRcdFx0XHRyZWY9XCJ2aWRlb0ZvbGxvd0NvbXBcIlxuXHRcdFx0XHRcdFx0OnNjcmVlbkhlaWdodD1cInNjcmVlbkhlaWdodFwiIFxuXHRcdFx0XHRcdFx0OnBsYXlGb2xsb3dTdGF0dXM9XCJwbGF5Rm9sbG93U3RhdHVzXCIgXG5cdFx0XHRcdFx0XHQ6dmlkZW9MaXN0PVwidmlkZW9MaXN0XCJcblx0XHRcdFx0XHRcdDpyZWZyZXNoTGlzdD1cInJlZnJlc2hMaXN0XCJcblx0XHRcdFx0XHRcdDpwYWdpbmdMaXN0PVwicGFnaW5nTGlzdFwiXG5cdFx0XHRcdFx0XHRAc2hvd0xvYWRpbmc9XCJzaG93TG9hZGluZ1wiXG5cdFx0XHRcdFx0XHRAaGlkZUxvYWRpbmc9XCJoaWRlTG9hZGluZ1wiXG5cdFx0XHRcdFx0XHRAbGV0Rm9sbG93VmlkZW9QYXVzZT1cImxldEZvbGxvd1ZpZGVvUGF1c2VcIlxuXHRcdFx0XHRcdFx0QGRpc3BsYXlWaWRlb1BhZ2luZz1cImRpc3BsYXlWaWRlb1BhZ2luZ1wiPjwvdmlkZW8tZm9sbG93LWNvbXA+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdFx0PHN3aXBlci1pdGVtPlxuXHRcdFx0XHRcdDx2aWRlby1jb21wXG5cdFx0XHRcdFx0XHRyZWY9XCJ2aWRlb0NvbXBcIlxuXHRcdFx0XHRcdFx0OnNjcmVlbkhlaWdodD1cInNjcmVlbkhlaWdodFwiIFxuXHRcdFx0XHRcdFx0OnBsYXlTdGF0dXM9XCJwbGF5U3RhdHVzXCIgXG5cdFx0XHRcdFx0XHQ6dmlkZW9MaXN0PVwidmlkZW9MaXN0XCJcblx0XHRcdFx0XHRcdDpyZWZyZXNoTGlzdD1cInJlZnJlc2hMaXN0XCJcblx0XHRcdFx0XHRcdDpwYWdpbmdMaXN0PVwicGFnaW5nTGlzdFwiXG5cdFx0XHRcdFx0XHRAc2hvd0xvYWRpbmc9XCJzaG93TG9hZGluZ1wiXG5cdFx0XHRcdFx0XHRAaGlkZUxvYWRpbmc9XCJoaWRlTG9hZGluZ1wiXG5cdFx0XHRcdFx0XHRAZGlzcGxheVZpZGVvUGFnaW5nPVwiZGlzcGxheVZpZGVvUGFnaW5nXCI+PC92aWRlby1jb21wPlxuXHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHQ8L3N3aXBlcj5cblx0XHRcblx0XHQ8dmlldyBjbGFzcz1cImhlYWRlclwiIDpzdHlsZT1cInttYXJnaW5Ub3A6c3RhdHVzQmFySGVpZ2h0KydweCd9XCIgdi1pZj1cIiFpc0xvYWRpbmdcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj48L3RleHQ+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1jZW50ZXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbVwiIEBjbGljaz1cInRhcEZvbGxvdygwKVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj7pmYTov5E8L3RleHQ+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbS1saW5lXCIgOmNsYXNzPVwieydhY3RpdmF0ZS1saW5lJzogY3VySW5kZXggPT09IDB9XCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMSlcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1pdGVtLXRpdGxlXCI+5YWz5rOoPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW0tbGluZVwiIDpjbGFzcz1cInsnYWN0aXZhdGUtbGluZSc6IGN1ckluZGV4ID09PSAxfVwiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtXCIgQGNsaWNrPVwidGFwRm9sbG93KDIpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItaXRlbS10aXRsZVwiPuaOqOiNkDwvdGV4dD5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtLWxpbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2YXRlLWxpbmUnOiBjdXJJbmRleCA9PT0gMn1cIj48L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2ggbm9ybWFsLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1zZWFyY2gucG5nXCIgQGNsaWNrPVwiZ29TZWFyY2hcIj5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOnN0YXR1c0JhckhlaWdodCsncHgnfVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj48L3RleHQ+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1jZW50ZXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLXJlZnJlc2gtdGl0bGVcIj7kuIvmi4nliLfmlrDop4bpopE8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2ggbm9ybWFsLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9hZGluZy5naWZcIj5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSDpobbpg6jliIfmjaLnmoTlr7zoiKogZW5kIC0tPlxuXHRcdFxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0dmFyIHN5c3RlbSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdC8vIGltcG9ydCB1bmlIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcic7XG5cdC8vIGltcG9ydCB1bmlGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb3Rlcic7XG5cdC8vIGltcG9ydCB1bmlTd2lwZXIgZnJvbSAnQC9jb21wb25lbnRzL3N3aXBlcic7XG5cdGltcG9ydCB2aWRlb0NvbXAgZnJvbSAnQC9jb21wb25lbnRzL3ZpZGVvQ29tcC52dWUnO1xuXHRpbXBvcnQgdmlkZW9Gb2xsb3dDb21wIGZyb20gJ0AvY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdC8vIHVuaUhlYWRlcixcblx0XHRcdC8vIHVuaUZvb3Rlcixcblx0XHRcdC8vIHVuaVN3aXBlcixcblx0XHRcdHZpZGVvQ29tcCxcblx0XHRcdHZpZGVvRm9sbG93Q29tcFxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IHN5c3RlbS5zdGF0dXNCYXJIZWlnaHQsXG5cdFx0XHRcdHNjcmVlbkhlaWdodDogc3lzdGVtLnNjcmVlbkhlaWdodCxcblx0XHRcdFx0Ly8gc2NyZWVuSGVpZ2h0OiBzeXN0ZW0uc2FmZUFyZWEuYm90dG9tLC8vIC0gNTAsXG5cdFx0XHRcdGN1ckluZGV4OiAyLFxuXHRcdFx0XHRwbGF5U3RhdHVzOiBmYWxzZSxcblx0XHRcdFx0cGxheUZvbGxvd1N0YXR1czogZmFsc2UsXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyB2aWRlb0xpc3Q6IGdldEFwcCgpLmdldERlZmF1bHRWbG9nTGlzdCgpLFx0XHRcdC8vIOmmlumhteS4gOW8gOWni+afpeivouaJgOW+l+eahOm7mOiupOinhumikeWIl+ihqFxuXHRcdFx0XHR2aWRlb0xpc3Q6IFtdLFx0XHRcdC8vIOmmlumhteS4gOW8gOWni+afpeivouaJgOW+l+eahOm7mOiupOinhumikeWIl+ihqFxuXHRcdFx0XHRyZWZyZXNoTGlzdDogW10sXHRcdFx0Ly8g5LiL5ouJ5Yi35paw5ZCO6I635b6X55qE5paw55qE5YiX6KGoXG5cdFx0XHRcdHBhZ2luZ0xpc3Q6IFtdLFx0XHRcdFx0Ly8g5YiG6aG1bGlzdFxuXHRcdFx0XHRyZWZyZXNoOiAwLFx0XHRcdFx0XHQvLyDku45tZemhtemdouS8oOadpeeahHJlZnJlc2jvvIznlKjkuo7pgIDlh7rnmbvlvZXlkI7ph43mlrDliLfmlrDlvZPliY3pobXnmoTop4bpopFcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHR2YXIgaGF2ZSA9IHBsdXMubmF2aWdhdG9yLmhhc05vdGNoSW5TY3JlZW4oKTtcdC8vIOWIpOaWreaYr+WQpuacieS4i+W3tFxuXHRcdH0sXG5cdFx0b25UYWJJdGVtVGFwIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHRhYkluZGV4ID0gZS5pbmRleDtcblx0XHRcdC8vIHRoaXMucGxheVN0YXR1cyA9IHRhYkluZGV4ID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvLyDliIfmjaLop4bpopHopoHlgZrmmoLlgZzmiJbmkq3mlL7nmoTliKTmlq1cblx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRpZiAodGFiSW5kZXggPT0gMCkge1xuXHRcdFx0XHQvLyDomZrkvY3ku6XlvoVcblx0XHRcdH0gZWxzZSBpZiAodGFiSW5kZXggPT0gMSkge1xuXHRcdFx0XHRtZS5wbGF5U3RhdHVzID0gZmFsc2U7XG5cdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICh0YWJJbmRleCA9PSAyKSB7XG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSB0cnVlO1xuXHRcdFx0XHRtZS5wbGF5Rm9sbG93U3RhdHVzID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblNob3coKSB7XG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHR2YXIgbXlVc2VySW5mbyA9IGFwcC5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdHRoaXMubXlVc2VySW5mbyA9IG15VXNlckluZm87XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5aaC5p6c5b2T5YmN5rKh5pyJbGlzdO+8jOWImXJlbGF1bmNoXG5cdFx0XHRpZiAodGhpcy4kcmVmcy52aWRlb0NvbXAgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gdGhpcy4kcmVmcy52aWRlb0NvbXAucGxheWVyTGlzdDtcblx0XHRcdFx0aWYgKHBsYXllckxpc3QgIT0gdW5kZWZpbmVkICYmIHBsYXllckxpc3QubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvLyDliKTmlq3lpoLmnpzlvZPliY3mmK90YWLkuLox5oiWMu+8jOWImeaSreaUvu+8jOWQpuWImeS4jeaSreaUvlxuXHRcdFx0aWYgKG1lLmN1ckluZGV4ID09IDApIHtcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDEpIHtcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDIpIHtcblx0XHRcdFx0bWUucGxheVN0YXR1cyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIG9uU2hvd+eahOaXtuWAme+8jOWFs+azqOeahOivne+8jOWImemHjeaWsOWIt+S4gOS4i2xpc3Rcblx0XHRcdHZhciBqdXN0Rm9sbG93VmxvZ2VySWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJqdXN0Rm9sbG93VmxvZ2VySWRcIik7XG5cdFx0XHRpZiAoIWFwcC5pc1N0ckVtcHR5KGp1c3RGb2xsb3dWbG9nZXJJZCkpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy52aWRlb0NvbXAucmVGb2xsb3dQbGF5TGlzdChqdXN0Rm9sbG93VmxvZ2VySWQpO1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJqdXN0Rm9sbG93VmxvZ2VySWRcIiwgXCJcIik7XG5cdFx0XHR9XG5cdFx0XHQvLyDlj5bmtojlhbPms6jkuZ/opoHph43mlrDliLfkuIDkuItsaXN0XG5cdFx0XHR2YXIganVzdENhbmNlbFZsb2dlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwianVzdENhbmNlbFZsb2dlcklkXCIpO1xuXHRcdFx0aWYgKCFhcHAuaXNTdHJFbXB0eShqdXN0Q2FuY2VsVmxvZ2VySWQpKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Db21wLnJlQ2FuY2VsUGxheUxpc3QoanVzdENhbmNlbFZsb2dlcklkKTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdENhbmNlbFZsb2dlcklkXCIsIFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRvbkhpZGUoKSB7XG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0Ly8g5pi+56S65ZKM6ZqQ6JeP77yM6ZyA6KaB5Yik5pat5qC55o2u5LiN5ZCMdGFi5YGa5pqC5YGc5oiW6ICF6ZqQ6JePXG5cdFx0XHRpZiAobWUuY3VySW5kZXggPT0gMCkge1xuXHRcdFx0XHQvLyDomZrkvY3ku6XlvoVcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMSkge1xuXHRcdFx0XHRtZS5wbGF5Rm9sbG93U3RhdHVzID0gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDIpIHtcblx0XHRcdFx0bWUucGxheVN0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g5b2T5YmN6aG15LiL5ouJ5Yi35pawXG5cdFx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHQvLyDkuIvmi4nliLfmlrDliKTmlq3vvIzlpoLmnpzmmK/kuI3lkIx0YWLvvIzpgqPkuYjnu4Tku7bkuK3liLfmlrDnmoTor7fmsYLkuZ/kuI3lkIxcblx0XHRcdGlmIChtZS5jdXJJbmRleCA9PSAwKSB7XG5cdFx0XHRcdC8vIOiZmuS9jeS7peW+hVxuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAxKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Gb2xsb3dDb21wLmRpc3BsYXlWaWRlb1BhZ2luZygxLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMikge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOWJjeW+gOaQnOe0oumhtemdolxuXHRcdFx0Z29TZWFyY2goKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3NlYXJjaC9zZWFyY2hcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5bem5ruR5Y+z5ruR6YCJ6aG55Y2h5pS55Y+Y6YCJ5Lit54q25oCBXG5cdFx0XHRjaGFuZ2VUb3BUYWI6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50O1xuXHRcdFx0XHR0aGlzLmN1ckluZGV4ID0gY3VycmVudDtcblx0XHRcdFx0dGhpcy5wbGF5Rm9sbG93U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHQvLyDngrnlh7vlpLTpg6jpgInpobnljaHvvIzliIfmjaLpobXpnaJcblx0XHRcdHRhcEZvbGxvdzogZnVuY3Rpb24oY3VycmVudCkge1xuXHRcdFx0XHR0aGlzLmN1ckluZGV4ID0gY3VycmVudDtcblx0XHRcdFx0dGhpcy5wbGF5Rm9sbG93U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOS4i+aLieWIt+aWsO+8jOaUueWPmGhlYWTnmoTlrZfmoLfmmL7npLpcblx0XHRcdHNob3dMb2FkaW5nKCkge1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0aGlkZUxvYWRpbmcoKSB7XG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0bGV0Rm9sbG93VmlkZW9QYXVzZSgpIHtcblx0XHRcdFx0dGhpcy5wbGF5Rm9sbG93U3RhdHVzID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW9Db21wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MmMyZjYyYSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIwOWExNGQwOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTJjMmY2MmEmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNTdHlsZTogeyBmbGV4OiBcIjFcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwibGlzdFwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBwYWdpbmdFbmFibGVkOiB0cnVlLCBzaG93U2Nyb2xsYmFyOiBmYWxzZSwgc2Nyb2xsYWJsZTogdHJ1ZSB9LFxuICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5saXN0U2Nyb2xsLCBzY3JvbGxlbmQ6IF92bS5zY3JvbGwgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJyZWZyZXNoXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheTogX3ZtLnJlZnJlc2hpbmcgPyBcInNob3dcIiA6IFwiaGlkZVwiIH0sXG4gICAgICAgICAgICBvbjogeyBwdWxsaW5nZG93bjogX3ZtLm9ucHVsbGluZ2Rvd24sIHJlZnJlc2g6IF92bS5vbnJlZnJlc2ggfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wicmVmcmVzaC1pbmZvLXR4dFwiXSB9KSxcbiAgICAgICAgICAgIF9jKFwibG9hZGluZy1pbmRpY2F0b3JcIilcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fbChfdm0ucGxheWVyTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0ICsgXCJweFwiIH0sXG4gICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcmVjeWNsZTogZmFsc2UsIGRhdGFJbmRleDogaW5kZXgsIGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnBsYXllckN1ciA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICA/IF9jKFwidS12aWRlb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJteVZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NTBycHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS5zY3JlZW5IZWlnaHQgKyBcInB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJteVZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gXCJjb250YWluXCIgOiBcImZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbmFibGVQcm9ncmVzc0dlc3R1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmc6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5wbGF5T3JQYXVzZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5OiBfdm0ub25wbGF5LFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ub25lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICB0aW1ldXBkYXRlOiBfdm0udGltZXVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICFpdGVtLnBsYXlcbiAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjc1MHJweFwiLCBmaWx0ZXI6IFwiYmx1cigxMHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnNjcmVlbkhlaWdodCArIFwicHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGZhZGVTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0uY292ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyBcImFzcGVjdEZpdFwiIDogXCJzY2FsZVRvRmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1ib3hcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wicHVibGlzaC1pbmZvLXZsb2dlci1uYW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQFwiICsgX3ZtLl9zKGl0ZW0udmxvZ2VyTmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1jb250ZW50XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbi1maXJlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXVpc2Mtd29yZHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnZsb2dlck5hbWUpICsgXCLnmoTljp/lo7DliJvkvZxcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNJT1NcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwbGF5LWNkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMjBycHhcIiwgaGVpZ2h0OiBcIjEyMHJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWNkLnBuZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzSU9TXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wicGxheS1jZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9wZXJhdGlvbi1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9wZXJhdGlvbi1mYWNlLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1c2VyLWZhY2VcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0udmxvZ2VyRmFjZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgIWl0ZW0uZG9JRm9sbG93VmxvZ2VyICYmIF92bS51c2VySWQgIT0gX3ZtLnRoaXNWbG9nZXJJZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9sbG93LW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tZm9sbG93LnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJsaWtlLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uZG9JTGlrZVRoaXNWbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tdW5saWtlLnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2VPckRpc2xpa2VWbG9nKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRvSUxpa2VUaGlzVmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZU9yRGlzbGlrZVZsb2coMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNvbWUtY291bnRzXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldEdyYWNlTnVtYmVyKGl0ZW0ubGlrZUNvdW50cykpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29tbWVudFRvZ2dsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEdyYWNlTnVtYmVyKF92bS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29tbWVudC1hbmQtc2hhcmUtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaGFyZVRvZ2dsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YiG5LqrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwidmlld1wiLFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInVuaS1wb3B1cFwiLFxuICAgICAgICAgIHsgcmVmOiBcImNvbW1lbnRcIiwgYXR0cnM6IHsgdHlwZTogXCJjb21tZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidW5pLXBvcHVwLWNvbW1lbnRzXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aGlzVmxvZ2VySWQ6IF92bS50aGlzVmxvZ2VySWQsXG4gICAgICAgICAgICAgICAgdGhpc1Zsb2dJZDogX3ZtLnRoaXNWbG9nSWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1bmktcG9wdXBcIixcbiAgICAgICAgICB7IHJlZjogXCJzaGFyZVwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCB0eXBlOiBcInNoYXJlXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidW5pLXBvcHVwLXNoYXJlXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aGlzVmxvZ2VySWQ6IF92bS50aGlzVmxvZ2VySWQsXG4gICAgICAgICAgICAgICAgdGhpc1Zsb2dJZDogX3ZtLnRoaXNWbG9nSWQsXG4gICAgICAgICAgICAgICAgdmxvZ1VybDogX3ZtLnRoaXNWbG9nLnVybCxcbiAgICAgICAgICAgICAgICBpc1ByaXZhdGU6IF92bS50aGlzVmxvZy5pc1ByaXZhdGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHN0eWxlPlxuXHQuaWNvbiB7XG5cdFx0d2lkdGg6IDgwcnB4O1xuXHRcdGhlaWdodDogODBycHg7XG5cdFx0b3BhY2l0eTogMC45O1xuXHR9XG5cdFxuXHQudXNlci1mYWNlIHtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0fVxuXHRcblx0LnBsYXktY2Qge1xuXHRcdHdpZHRoOiAxNTBycHg7XG5cdFx0aGVpZ2h0OiAxNTBycHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cdC5yZWZyZXNoLWluZm8tdHh0IHtcblx0XHRjb2xvcjogI0YxRjFGMTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAyMDBycHg7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4OyBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWUge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogNDBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLW11c2ljLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tY29udGVudCB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdGxpbmVzOiA1O1xuXHRcdHdpZHRoOiA1MjBycHg7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblx0Lmljb24tZmlyZSB7XG5cdFx0d2lkdGg6IDM2cnB4O1xuXHRcdGhlaWdodDogMzZycHg7XG5cdH1cblx0Lm11aXNjLXdvcmRzIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdHdpZHRoOjQwMHJweDtcblx0fVxuXHQuc29tZS1jb3VudHMge1xuXHRcdGZvbnQtc2l6ZToyNHJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAycnB4O1xuXHR9XG5cdC5vcGVyYXRpb24tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDsgXG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDtcblx0fVxuXHQub3BlcmF0aW9uLWZhY2UtYm94IHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci13aWR0aDogM3JweDtcblx0fVxuXHQuZm9sbG93LW1lIHtcblx0XHR3aWR0aDogNDBycHg7XG5cdFx0aGVpZ2h0OiA0MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC0yMHJweDtcblx0fVxuXHQubGlrZS1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcblx0fVxuXHQuY29tbWVudC1hbmQtc2hhcmUtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XG5cdH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdDwhLS0gPHVuaS1saXN0IEBjaGFuZ2U9XCJvbmNoYW5nZVwiIDpudW09XCJwbGF5ZXJMaXN0Lmxlbmd0aFwiPiAtLT5cblx0XHQ8bGlzdCA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIEBzY3JvbGw9XCJsaXN0U2Nyb2xsXCIgQHNjcm9sbGVuZD1cInNjcm9sbFwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiID5cdFxuXHRcdFx0PHJlZnJlc2ggQHB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIEByZWZyZXNoPVwib25yZWZyZXNoXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XG5cdFx0XHQgIDx0ZXh0IGNsYXNzPVwicmVmcmVzaC1pbmZvLXR4dFwiPjwvdGV4dD5cblx0XHRcdCAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHQ8Y2VsbCA6cmVjeWNsZT1cImZhbHNlXCIgXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwbGF5ZXJMaXN0XCIgXG5cdFx0XHRcdDprZXk9XCJpbmRleFwiIFxuXHRcdFx0XHQ6ZGF0YS1pbmRleD1cImluZGV4XCIgXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0Jzogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIj5cblx0XHRcdFx0PCEtLSA8dW5pLXZpZGVvIDpzcmM9XCJpdGVtLnVybFwiIDpwbGF5U3RhdHVzPVwicGxheVN0YXR1c1wiIDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiIEBwbGF5PVwib25wbGF5XCI+PC91bmktdmlkZW8+IC0tPlxuXHRcdFx0XHQ8dmlkZW8gXG5cdFx0XHRcdFx0cmVmPVwibXlWaWRlb1wiIFxuXHRcdFx0XHRcdGlkPVwibXlWaWRlb1wiIFxuXHRcdFx0XHRcdDpvYmplY3QtZml0PVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdjb250YWluJyA6ICdmaWxsJ1wiIFxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLnVybFwiIFxuXHRcdFx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcblx0XHRcdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0IHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCJcblx0XHRcdFx0XHRsb29wIFxuXHRcdFx0XHRcdGF1dG9wbGF5IFxuXHRcdFx0XHRcdHNob3ctbG9hZGluZz1cInRydWVcIlxuXHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDtcIiBcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQgKyAncHgnfVwiIFxuXHRcdFx0XHRcdEBjbGljaz1cInBsYXlPclBhdXNlXCJcblx0XHRcdFx0XHRAcGxheT1cIm9ucGxheVwiIFxuXHRcdFx0XHRcdEBlcnJvcj1cIm9uZXJyb3JcIiBcblx0XHRcdFx0XHRAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj48L3ZpZGVvPlxuXHRcdFx0XHQ8aW1hZ2UgXG5cdFx0XHRcdFx0OmxhenktbG9hZD1cInRydWVcIiBcblx0XHRcdFx0XHQ6ZmFkZS1zaG93PVwiZmFsc2VcIiBcblx0XHRcdFx0XHR2LWlmPVwiIWl0ZW0ucGxheVwiIFxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLmNvdmVyXCIgXG5cdFx0XHRcdFx0Om1vZGU9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2FzcGVjdEZpdCcgOiAnc2NhbGVUb0ZpbGwnXCIgXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4OyBmaWx0ZXI6IGJsdXIoMTBweCk7XCJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrICdweCd9XCI+PC9pbWFnZT5cblx0XHRcdFx0PCEtLTxpbWFnZSA6bGF6eS1sb2FkPVwidHJ1ZVwiIDpmYWRlLXNob3c9XCJmYWxzZVwiIHYtaWY9XCIhaXRlbS5wbGF5XCIgOnNyYz1cIml0ZW0uY292ZXJcIiBtb2RlPVwiXCIgc3R5bGU9XCJ3aWR0aDogNzUwcnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6IDA7cmlnaHQ6IDA7dG9wOiAwO2JvdHRvbTogMDsgZmlsdGVyOiBibHVyKDEwcHgpO1wiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPi0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1Ymxpc2gtaW5mby1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWVcIj5Ae3tpdGVtLnZsb2dlck5hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicHVibGlzaC1pbmZvLWNvbnRlbnRcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdWJsaXNoLWluZm8tbXVzaWMtYm94XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZpcmUucG5nXCIgY2xhc3M9XCJpY29uLWZpcmVcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm11aXNjLXdvcmRzXCI+e3tpdGVtLnZsb2dlck5hbWV9feeahOWOn+WjsOWIm+S9nDwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XG5cdFx0XHRcdFx0XHQ8IS0tIDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9jZC1wbGF5LTQuZ2lmXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxNTBycHg7aGVpZ2h0OiAxNTBycHg7b3BhY2l0eTogMC44O1wiPjwvaW1hZ2U+IC0tPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXNJT1NcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNkLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCIgc3R5bGU9XCJ3aWR0aDogMTIwcnB4O2hlaWdodDogMTIwcnB4O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImlzSU9TXCIgOnNyYz1cIidodHRwczovL2ltb29jLW5ld3Mub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9pbWFnZS9jZC1wbGF5LTQuZ2lmP3RpbWU9Jyt0aW1lc1wiIFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGxheS1jZFwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwhLS0g6KeG6aKR5bGV56S65Y+z5L6n55qE5pON5L2c5oyJ6ZKu77yM5aS05YOPIC0g54K56LWeIC0g6K+E6K66IC0g6L2s5Y+RIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wZXJhdGlvbi1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wZXJhdGlvbi1mYWNlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLnZsb2dlckZhY2VcIiBjbGFzcz1cInVzZXItZmFjZVwiIEBjbGljaz1cImdvVXNlckluZm9TZWVTZWUoaXRlbS52bG9nZXJJZClcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmRvSUZvbGxvd1Zsb2dlciAmJiB1c2VySWQgIT0gdGhpc1Zsb2dlcklkXCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiBcblx0XHRcdFx0XHRcdEBjbGljaz1cImZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXCIgXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbGxvdy1tZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi11bmxpa2UucG5nXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMSlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2dldEdyYWNlTnVtYmVyKGl0ZW0ubGlrZUNvdW50cyl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvbW1lbnRzLnBuZ1wiIEBjbGljaz1cImNvbW1lbnRUb2dnbGVcIiBjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tpdGVtLmNvbW1lbnRzQ291bnRzfX08L3RleHQ+IC0tPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPnt7Z2V0R3JhY2VOdW1iZXIodGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXNoYXJlLnBuZ1wiIEBjbGljaz1cInNoYXJlVG9nZ2xlXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj7liIbkuqs8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L2NlbGw+XG5cdFx0PC9saXN0PlxuXHRcdDwhLS0gPC91bmktbGlzdD4gLS0+XG5cdFx0XG5cdFx0PHZpZXc+XG5cdFx0XHQ8IS0tIOW6lemDqOeql+WPo3BvcHVwIC0tPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJjb21tZW50XCIgdHlwZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwic2hhcmVcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJzaGFyZVwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlIFxuXHRcdFx0XHRcdDp0aGlzVmxvZ2VySWQ9XCJ0aGlzVmxvZ2VySWRcIiBcblx0XHRcdFx0XHQ6dGhpc1Zsb2dJZD1cInRoaXNWbG9nSWRcIiBcblx0XHRcdFx0XHQ6dmxvZ1VybD1cInRoaXNWbG9nLnVybFwiXG5cdFx0XHRcdFx0OmlzUHJpdmF0ZT1cInRoaXNWbG9nLmlzUHJpdmF0ZVwiXG5cdFx0XHRcdFx0PjwvdW5pLXBvcHVwLXNoYXJlPlxuXHRcdFx0PC91bmktcG9wdXA+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0c2NyZWVuSGVpZ2h0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IDBcblx0XHRcdH0sXG5cdFx0XHRzcmM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRwbGF5U3RhdHVzOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9MaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cmVmcmVzaExpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH0sXG5cdFx0XHRwYWdpbmdMaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXG5cdFx0XHRcdHRoaXNWbG9nZXJJZDogXCJcIixcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Y2a5Li755qE5Li76ZSuaWRcblx0XHRcdFx0dXNlcklkOiBcIlwiLFx0XHRcdFx0Ly8g5b2T5YmN55So5oi3aWRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRyZWZyZXNoaW5nOiBmYWxzZSxcblx0XHRcdFx0c2hvd1JlZnJlc2hMb2FkaW5nOiBcImhpZGVcIixcblx0XHRcdFx0XG5cdFx0XHRcdHBsYXllckN1cjogMCxcblx0XHRcdFx0cGFnZTogMCxcblx0XHRcdFx0dG90YWxQYWdlOiAwLFxuXHRcdFx0XHRwbGF5ZXJMaXN0OiB0aGlzLnZpZGVvTGlzdCxcblx0XHRcdFx0dGhpc1Zsb2dUb3RhbENvbWVudENvdW50czogMCxcblx0XHRcdFx0XG5cdFx0XHRcdHZpZGVvQ29udGV4dDoge30sXG5cdFx0XHRcdFxuXHRcdFx0XHRjdXJyZW50SW5kZXg6IDAsXG5cdFx0XHRcdGNvbnRlbnRPZmZzZXRZOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0dGltZXM6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcblx0XHRcdFx0b2JqZWN0Rml0OiBcImZpbGxcIixcblx0XHRcdFx0aXNJT1M6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRcblx0XHRcdGlmKCF0aGlzLmlzSU9TKSB7XG5cdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0aWYgKG15VXNlckluZm8gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIHRydWUpO1xuXHRcdFx0XG5cdFx0XHR2YXIgdmlkZW9Db250ZXh0ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlWaWRlbycpO1xuXHRcdFx0dGhpcy52aWRlb0NvbnRleHQgPSB2aWRlb0NvbnRleHQ7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cmVmcmVzaExpc3QodmFsdWUpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKG5ld0xpc3QgIT0gbnVsbCAmJiBuZXdMaXN0ICE9IHVuZGVmaW5lZCAmJiBuZXdMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6YeN572uXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheVN0YXR1czogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXZhbCkge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOaKiui2hei/hzEwMDDmiJYxMDAwMOeahOaVsOWtl+iwg+aVtO+8jOavlOWmgjEuM2svNi44d1xuXHRcdFx0Z2V0R3JhY2VOdW1iZXIobnVtKSB7XG5cdFx0XHRcdHJldHVybiBnZXRBcHAoKS5ncmFjZU51bWJlcihudW0pO1xuXHRcdFx0fSxcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHZhciB2bG9nSWQgPSB2bG9nLnZsb2dJZDtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NvdW50cz92bG9nSWQ9XCIgKyB2bG9nSWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGxpa2VPckRpc2xpa2VWbG9nKGlzTGlrZSkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHRpZiAoaXNMaWtlID09IDEpIHtcblx0XHRcdFx0XHQvLyDllpzmrKIv54K56LWe6KeG6aKRXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9saWtlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZy52bG9nZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVMaWtlUGxheUxpc3QodmxvZy52bG9nSWQpO1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNMaWtlID09IDApIHtcblx0XHRcdFx0XHQvLyDlj5bmtojllpzmrKIv54K56LWe6KeG6aKRXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5sb2dpbldvcmRzID0gXCLor7fnmbvlvZVcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvdW5saWtlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZy52bG9nZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVEaXNsaWtlUGxheUxpc3QodmxvZy52bG9nSWQpO1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWWnOasoi/ngrnotZ7nmoRsaXN06YeN5paw6K6+572uXG5cdFx0XHRyZUxpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdHJlRGlzbGlrZVBsYXlMaXN0KHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ0lkID09IHZsb2dJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5Y+W5YWz5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVDYW5jZWxQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5Y2a5Li7XG5cdFx0XHRmb2xsb3dNZSh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2ZhbnMvZm9sbG93P215SWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2dlcklkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGdvVXNlckluZm9TZWVTZWUodXNlcklkKSB7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJQYWdlSWRcIiwgdXNlcklkKTtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvbWUvdmxvZ2VySW5mbz91c2VyUGFnZUlkPVwiICsgdXNlcklkXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRsaXN0U2Nyb2xsKGUpIHtcblx0XHRcdFx0aWYoZS5jb250ZW50T2Zmc2V0LnkgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcInNob3dMb2FkaW5nXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkb3dubG9hZFZsb2coKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29weUxpbmsoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0c2hvd1FSQ29kZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRjaGFuZ2VWbG9nVG9Qcml2YXRlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcblx0XHRcdC8vIOS4i+aLieWIt+aWsOeahOi/h+eoi+S4re+8jOaUueWPmOWktOmDqHRhYuaYvuekuueahOWtl+agt1xuXHRcdFx0b25wdWxsaW5nZG93bihlKSB7XG5cdFx0XHR9LFxuXHRcdFx0b25yZWZyZXNoKGUpIHtcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcImhpZGVMb2FkaW5nXCIpO1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSAn4oaTIFB1bGwgVG8gUmVmcmVzaCdcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0Ly8g6YCa6L+HbGlzdOe7hOS7tueahOS4i+aLieWIt+aWsOinpuWPkeW9k+WJjeaJgOWcqOmhtemdoueahOS4i+aLieWIt+aWsFxuXHRcdFx0XHR1bmkuc3RhcnRQdWxsRG93blJlZnJlc2goKTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdG9ucGxheTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheShlLmRldGFpbC5jdXJyZW50VGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHBsYXlPclBhdXNlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheVN0YXR1cyA9IHRoaXMucGxheVN0YXR1cztcblx0XHRcdFx0XG5cdFx0XHRcdGlmICghcGxheVN0YXR1cykge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gIXBsYXlTdGF0dXM7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRsZXQgb3JpZ2luYWxJbmRleCA9IHRoaXMuY3VycmVudEluZGV4O1xuXHRcdFx0XHRsZXQgaXNOZXh0ID0gZmFsc2U7XG5cdFx0XHRcdGlmIChlLmNvbnRlbnRPZmZzZXQueSA8IHRoaXMuY29udGVudE9mZnNldFkpIHtcblx0XHRcdFx0XHRpc05leHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY29udGVudE9mZnNldFkgPSBlLmNvbnRlbnRPZmZzZXQueTtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBudW0gPSB0aGlzLnBsYXllckxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLnJvdW5kKE1hdGguYWJzKHRoaXMuY29udGVudE9mZnNldFkpIC8gKGUuY29udGVudFNpemUuaGVpZ2h0IC8gbnVtKSk7XG5cdFx0XHRcdHRoaXMub25jaGFuZ2UodGhpcy5jdXJyZW50SW5kZXgpO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy50aW1lcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQvLyDliKTmlq3lpoLmnpzop4bpopHliJfooajmgLvplb/luqYt5b2T5YmN5LiL5qCH77yM5bCR5LqOM+S4qu+8jOWImeW8gOWni+WIhumhteafpeivouWQjue7reeahOinhumike+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xuXHRcdFx0XHRcdC8vIOWmguaenOimgeWIhumhteeahHBhZ2XlkozmgLvmlbB0b3RhbFBhZ2Xnm7jnrYnvvIzliJnmsqHmnInmm7TlpJpcblx0XHRcdFx0XHRpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWIhumhteafpeivouaWsOeahGxpc3TvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXG5cdFx0XHRkaXNwbGF5VmlkZW9QYWdpbmcocGFnZSwgbmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2luZGV4TGlzdD91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZwYWdlPVwiICsgcGFnZSArIFwiJnBhZ2VTaXplPTEwXCIsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZsb2dMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcblx0XHRcdFx0XHRcdFx0Ly8gbWUucGxheWVyTGlzdCA9IHZsb2dMaXN0O1xuXHRcdFx0XHRcdFx0XHRpZiAobmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdC5jb25jYXQodmxvZ0xpc3QpO1xuXHRcdFx0XHRcdFx0XHRtZS5wYWdlID0gcGFnZTtcblx0XHRcdFx0XHRcdFx0bWUudG90YWxQYWdlID0gdG90YWxQYWdlO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5zZXRUaGlzVmxvZ0luZm8oKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5mcmVzaENvbW1lbnRDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkb3BsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uY2hhbmdlOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRpZiAoaW5kZXggIT0gdGhpcy5wbGF5ZXJDdXIpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXllckxpc3RbdGhpcy5wbGF5ZXJDdXJdLnBsYXkgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnBsYXllckN1ciA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdHRoaXMuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdHRoaXMuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDorr7nva7lvZPliY12bG9n55qE5L+h5oGvXG5cdFx0XHRzZXRUaGlzVmxvZ0luZm8oKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR0aGlzLnRoaXNWbG9nID0gdmxvZztcblx0XHRcdFx0dGhpcy50aGlzVmxvZ0lkID0gdmxvZy52bG9nSWQ7XG5cdFx0XHRcdHRoaXMudGhpc1Zsb2dlcklkID0gdmxvZy52bG9nZXJJZDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlZnJlc2hWbG9nQ291bnRzKCkge1xuXHRcdFx0XHQvLyDmn6Xor6LlvZPliY3ngrnotZ7mlbDvvIzph43mlrDotYvlgLznu5nlvZPliY3op4bpopFcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy90b3RhbExpa2VkQ291bnRzP3Zsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgY291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdFx0bWUucmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2cudmxvZ0lkLCBjb3VudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QodmxvZ0lkLCBjb3VudHMpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cubGlrZUNvdW50cyA9IGNvdW50cztcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29tbWVudFRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5jb21tZW50Lm9wZW4oKTtcblx0XHRcdFx0dW5pLmhpZGVUYWJCYXIoe1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRzaGFyZVRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5zaGFyZS5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9LFxuICBcInVzZXItZmFjZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInBsYXktY2RcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE1MHJweFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjhcbiAgfSxcbiAgXCJyZWZyZXNoLWluZm8tdHh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0YxRjFGMVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCJcbiAgfSxcbiAgXCJwdWJsaXNoLWluZm8tYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiBcIjIwMHJweFwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDBycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJwdWJsaXNoLWluZm8tY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibGluZXNcIjogNSxcbiAgICBcIndpZHRoXCI6IFwiNTIwcnB4XCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiaWNvbi1maXJlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM2cnB4XCJcbiAgfSxcbiAgXCJtdWlzYy13b3Jkc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI0MDBycHhcIlxuICB9LFxuICBcInNvbWUtY291bnRzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIycnB4XCJcbiAgfSxcbiAgXCJvcGVyYXRpb24tYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJvcGVyYXRpb24tZmFjZS1ib3hcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiM3JweFwiXG4gIH0sXG4gIFwiZm9sbG93LW1lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwidG9wXCI6IFwiLTIwcnB4XCJcbiAgfSxcbiAgXCJsaWtlLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQ1cnB4XCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW9Gb2xsb3dDb21wLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMDdjMDZiYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzZjJkODFjZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTA3YzA2YmImXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNTdHlsZTogeyBmbGV4OiBcIjFcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwibGlzdFwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBwYWdpbmdFbmFibGVkOiB0cnVlLCBzaG93U2Nyb2xsYmFyOiBmYWxzZSwgc2Nyb2xsYWJsZTogdHJ1ZSB9LFxuICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5saXN0U2Nyb2xsLCBzY3JvbGxlbmQ6IF92bS5zY3JvbGwgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJyZWZyZXNoXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheTogX3ZtLnJlZnJlc2hpbmcgPyBcInNob3dcIiA6IFwiaGlkZVwiIH0sXG4gICAgICAgICAgICBvbjogeyBwdWxsaW5nZG93bjogX3ZtLm9ucHVsbGluZ2Rvd24sIHJlZnJlc2g6IF92bS5vbnJlZnJlc2ggfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wicmVmcmVzaC1pbmZvLXR4dFwiXSB9KSxcbiAgICAgICAgICAgIF9jKFwibG9hZGluZy1pbmRpY2F0b3JcIilcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fbChfdm0ucGxheWVyTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc2NyZWVuSGVpZ2h0ICsgXCJweFwiIH0sXG4gICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcmVjeWNsZTogZmFsc2UsIGRhdGFJbmRleDogaW5kZXgsIGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnBsYXllckN1ciA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICA/IF9jKFwidS12aWRlb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJteUZvbGxvd1ZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NTBycHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS5zY3JlZW5IZWlnaHQgKyBcInB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJteUZvbGxvd1ZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gXCJjb250YWluXCIgOiBcImZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbmFibGVQcm9ncmVzc0dlc3R1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmc6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5wbGF5T3JQYXVzZSxcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5OiBfdm0ub25wbGF5LFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ub25lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICB0aW1ldXBkYXRlOiBfdm0udGltZXVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICFpdGVtLnBsYXlcbiAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjc1MHJweFwiLCBmaWx0ZXI6IFwiYmx1cigxMHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnNjcmVlbkhlaWdodCArIFwicHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGZhZGVTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0uY292ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyBcImFzcGVjdEZpdFwiIDogXCJzY2FsZVRvRmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1ib3hcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wicHVibGlzaC1pbmZvLXZsb2dlci1uYW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQFwiICsgX3ZtLl9zKGl0ZW0udmxvZ2VyTmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1jb250ZW50XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbi1maXJlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXVpc2Mtd29yZHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnZsb2dlck5hbWUpICsgXCLnmoTljp/lo7DliJvkvZxcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNJT1NcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwbGF5LWNkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMjBycHhcIiwgaGVpZ2h0OiBcIjEyMHJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9pY29uLWNkLnBuZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzSU9TXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wicGxheS1jZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9wZXJhdGlvbi1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9wZXJhdGlvbi1mYWNlLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1c2VyLWZhY2VcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0udmxvZ2VyRmFjZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgIWl0ZW0uZG9JRm9sbG93VmxvZ2VyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmb2xsb3ctbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi1mb2xsb3cucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9sbG93TWUoaXRlbS52bG9nZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImxpa2UtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi11bmxpa2UucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZU9yRGlzbGlrZVZsb2coMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZG9JTGlrZVRoaXNWbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tbGlrZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWtlT3JEaXNsaWtlVmxvZygwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmxpa2VDb3VudHMpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29tbWVudFRvZ2dsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGhpc1Zsb2dUb3RhbENvbWVudENvdW50cykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29tbWVudC1hbmQtc2hhcmUtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaGFyZVRvZ2dsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic29tZS1jb3VudHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YiG5LqrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0udGhpc1Zsb2cgIT0gbnVsbCAmJiBfdm0udGhpc1Zsb2cgIT0ge31cbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidW5pLXBvcHVwXCIsXG4gICAgICAgICAgICAgIHsgcmVmOiBcImNvbW1lbnRcIiwgYXR0cnM6IHsgdHlwZTogXCJjb21tZW50XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktcG9wdXAtY29tbWVudHNcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Zsb2dlcklkOiBfdm0udGhpc1Zsb2dlcklkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzVmxvZ0lkOiBfdm0udGhpc1Zsb2dJZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bmktcG9wdXBcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZjogXCJzaGFyZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIHR5cGU6IFwic2hhcmVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS1wb3B1cC1zaGFyZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVmxvZ2VySWQ6IF92bS50aGlzVmxvZ2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNWbG9nSWQ6IF92bS50aGlzVmxvZ0lkLFxuICAgICAgICAgICAgICAgICAgICB2bG9nVXJsOiBfdm0udGhpc1Zsb2cudXJsLFxuICAgICAgICAgICAgICAgICAgICBpc1ByaXZhdGU6IF92bS50aGlzVmxvZy5pc1ByaXZhdGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9Gb2xsb3dDb21wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8c3R5bGU+XG5cdC5pY29uIHtcblx0XHR3aWR0aDogODBycHg7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRvcGFjaXR5OiAwLjk7XG5cdH1cblx0XG5cdC51c2VyLWZhY2Uge1xuXHRcdHdpZHRoOiAxMDBycHg7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xuXHR9XG5cdFxuXHQucGxheS1jZCB7XG5cdFx0d2lkdGg6IDE1MHJweDtcblx0XHRoZWlnaHQ6IDE1MHJweDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cblx0LnJlZnJlc2gtaW5mby10eHQge1xuXHRcdGNvbG9yOiAjRjFGMUYxO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cblx0LnB1Ymxpc2gtaW5mby1ib3gge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDIwMHJweDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7IFxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0LnB1Ymxpc2gtaW5mby12bG9nZXItbmFtZSB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiA0MHJweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tbXVzaWMtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0LnB1Ymxpc2gtaW5mby1jb250ZW50IHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0cGFkZGluZzogMTBycHg7XG5cdFx0bGluZXM6IDU7XG5cdFx0d2lkdGg6IDUyMHJweDtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0fVxuXHQuaWNvbi1maXJlIHtcblx0XHR3aWR0aDogMzZycHg7XG5cdFx0aGVpZ2h0OiAzNnJweDtcblx0fVxuXHQubXVpc2Mtd29yZHMge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0cGFkZGluZzogMTBycHg7XG5cdFx0d2lkdGg6NDAwcnB4O1xuXHR9XG5cdC5zb21lLWNvdW50cyB7XG5cdFx0Zm9udC1zaXplOjI0cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdG1hcmdpbi10b3A6IDJycHg7XG5cdH1cblx0Lm9wZXJhdGlvbi1ib3gge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0Ym90dG9tOiAwOyBcblx0XHRyaWdodDogMDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xuXHR9XG5cdC5vcGVyYXRpb24tZmFjZS1ib3gge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0XHRib3JkZXItY29sb3I6ICNGRkZGRkY7XG5cdFx0Ym9yZGVyLXdpZHRoOiAzcnB4O1xuXHR9XG5cdC5mb2xsb3ctbWUge1xuXHRcdHdpZHRoOiA0MHJweDtcblx0XHRoZWlnaHQ6IDQwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogLTIwcnB4O1xuXHR9XG5cdC5saWtlLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xuXHR9XG5cdC5jb21tZW50LWFuZC1zaGFyZS1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiA0NXJweDtcblx0fVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXHQ8dmlldyBzdHlsZT1cImZsZXg6IDE7XCI+XG5cdFx0PCEtLSA8dW5pLWxpc3QgQGNoYW5nZT1cIm9uY2hhbmdlXCIgOm51bT1cInBsYXllckxpc3QubGVuZ3RoXCI+IC0tPlxuXHRcdDxsaXN0IDpwYWdpbmdFbmFibGVkPVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgQHNjcm9sbD1cImxpc3RTY3JvbGxcIiBAc2Nyb2xsZW5kPVwic2Nyb2xsXCIgOnNjcm9sbGFibGU9XCJ0cnVlXCIgPlx0XG5cdFx0XHQ8cmVmcmVzaCBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiA6ZGlzcGxheT1cInJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cblx0XHRcdCAgPHRleHQgY2xhc3M9XCJyZWZyZXNoLWluZm8tdHh0XCI+PC90ZXh0PlxuXHRcdFx0ICA8bG9hZGluZy1pbmRpY2F0b3I+PC9sb2FkaW5nLWluZGljYXRvcj5cblx0XHRcdDwvcmVmcmVzaD5cblx0XHRcdDxjZWxsIDpyZWN5Y2xlPVwiZmFsc2VcIiBcblx0XHRcdFx0di1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHBsYXllckxpc3RcIiBcblx0XHRcdFx0OmtleT1cImluZGV4XCIgXG5cdFx0XHRcdDpkYXRhLWluZGV4PVwiaW5kZXhcIiBcblx0XHRcdFx0OnN0eWxlPVwieydoZWlnaHQnOiBzY3JlZW5IZWlnaHQgKyAncHgnfVwiPlxuXHRcdFx0XHQ8IS0tIDx1bmktdmlkZW8gOnNyYz1cIml0ZW0udXJsXCIgOnBsYXlTdGF0dXM9XCJwbGF5U3RhdHVzXCIgOnNjcmVlbkhlaWdodD1cInNjcmVlbkhlaWdodFwiIHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCIgQHBsYXk9XCJvbnBsYXlcIj48L3VuaS12aWRlbz4gLS0+XG5cdFx0XHRcdDx2aWRlbyBcblx0XHRcdFx0XHRyZWY9XCJteUZvbGxvd1ZpZGVvXCIgXG5cdFx0XHRcdFx0aWQ9XCJteUZvbGxvd1ZpZGVvXCIgXG5cdFx0XHRcdFx0Om9iamVjdC1maXQ9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2NvbnRhaW4nIDogJ2ZpbGwnXCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0udXJsXCIgXG5cdFx0XHRcdFx0OmNvbnRyb2xzPVwiZmFsc2VcIlxuXHRcdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcblx0XHRcdFx0XHQgdi1pZj1cInBsYXllckN1ciA9PT0gaW5kZXhcIlxuXHRcdFx0XHRcdGxvb3AgXG5cdFx0XHRcdFx0YXV0b3BsYXlcblx0XHRcdFx0XHRzaG93LWxvYWRpbmc9XCJ0cnVlXCJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7XCIgXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIiBcblx0XHRcdFx0XHRAY2xpY2s9XCJwbGF5T3JQYXVzZVwiXG5cdFx0XHRcdFx0QHBsYXk9XCJvbnBsYXlcIiBcblx0XHRcdFx0XHRAZXJyb3I9XCJvbmVycm9yXCIgXG5cdFx0XHRcdFx0QHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCI+PC92aWRlbz5cblx0XHRcdFx0PGltYWdlIFxuXHRcdFx0XHRcdDpsYXp5LWxvYWQ9XCJ0cnVlXCIgXG5cdFx0XHRcdFx0OmZhZGUtc2hvdz1cImZhbHNlXCIgXG5cdFx0XHRcdFx0di1pZj1cIiFpdGVtLnBsYXlcIiBcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5jb3ZlclwiIFxuXHRcdFx0XHRcdDptb2RlPVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdhc3BlY3RGaXQnIDogJ3NjYWxlVG9GaWxsJ1wiIFxuXHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDsgZmlsdGVyOiBibHVyKDEwcHgpO1wiXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+XG5cdFx0XHRcdDwhLS08aW1hZ2UgOmxhenktbG9hZD1cInRydWVcIiA6ZmFkZS1zaG93PVwiZmFsc2VcIiB2LWlmPVwiIWl0ZW0ucGxheVwiIDpzcmM9XCJpdGVtLmNvdmVyXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OiAwO3JpZ2h0OiAwO3RvcDogMDtib3R0b206IDA7IGZpbHRlcjogYmx1cigxMHB4KTtcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrICdweCd9XCI+PC9pbWFnZT4tLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwdWJsaXNoLWluZm8tYm94XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicHVibGlzaC1pbmZvLXZsb2dlci1uYW1lXCI+QHt7aXRlbS52bG9nZXJOYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby1jb250ZW50XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1maXJlLnBuZ1wiIGNsYXNzPVwiaWNvbi1maXJlXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtdWlzYy13b3Jkc1wiPnt7aXRlbS52bG9nZXJOYW1lfX3nmoTljp/lo7DliJvkvZw8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHRcdFx0PCEtLSA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvY2QtcGxheS00LmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMTUwcnB4O2hlaWdodDogMTUwcnB4O29wYWNpdHk6IDAuODtcIj48L2ltYWdlPiAtLT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWlzSU9TXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jZC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGxheS1jZFwiIHN0eWxlPVwid2lkdGg6IDEyMHJweDtoZWlnaHQ6IDEyMHJweDtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpc0lPU1wiIDpzcmM9XCInaHR0cHM6Ly9pbW9vYy1uZXdzLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vaW1hZ2UvY2QtcGxheS00LmdpZj90aW1lPScrdGltZXNcIiBcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOinhumikeWxleekuuWPs+S+p+eahOaTjeS9nOaMiemSru+8jOWktOWDjyAtIOeCuei1niAtIOivhOiuuiAtIOi9rOWPkSAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYXRpb24tYm94XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYXRpb24tZmFjZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS52bG9nZXJGYWNlXCIgY2xhc3M9XCJ1c2VyLWZhY2VcIiBAY2xpY2s9XCJnb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lGb2xsb3dWbG9nZXJcIiBcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZm9sbG93LnBuZ1wiIFxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZm9sbG93TWUoaXRlbS52bG9nZXJJZClcIiBcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9sbG93LW1lXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpa2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXVubGlrZS5wbmdcIlxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJsaWtlT3JEaXNsaWtlVmxvZygxKVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uZG9JTGlrZVRoaXNWbG9nXCIgXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tbGlrZS5wbmdcIiBcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMClcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPnt7aXRlbS5saWtlQ291bnRzfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jb21tZW50cy5wbmdcIiBAY2xpY2s9XCJjb21tZW50VG9nZ2xlXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPnt7aXRlbS5jb21tZW50c0NvdW50c319PC90ZXh0PiAtLT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e3RoaXNWbG9nVG90YWxDb21lbnRDb3VudHN9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXNoYXJlLnBuZ1wiIEBjbGljaz1cInNoYXJlVG9nZ2xlXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj7liIbkuqs8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L2NlbGw+XG5cdFx0PC9saXN0PlxuXHRcdDwhLS0gPC91bmktbGlzdD4gLS0+XG5cdFx0XG5cdFx0PHZpZXcgdi1pZj1cInRoaXNWbG9nICE9IG51bGwgJiYgdGhpc1Zsb2cgIT0ge31cIj5cblx0XHRcdDwhLS0g5bqV6YOo6K+E6K6656qX5Y+jcG9wdXAgLS0+XG5cdFx0XHQ8dW5pLXBvcHVwIHJlZj1cImNvbW1lbnRcIiB0eXBlPVwiY29tbWVudFwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLWNvbW1lbnRzIDp0aGlzVmxvZ2VySWQ9XCJ0aGlzVmxvZ2VySWRcIiA6dGhpc1Zsb2dJZD1cInRoaXNWbG9nSWRcIj48L3VuaS1wb3B1cC1jb21tZW50cz5cblx0XHRcdDwvdW5pLXBvcHVwPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJzaGFyZVwiIGJhY2tncm91bmQtY29sb3I9XCIjZmZmXCIgdHlwZT1cInNoYXJlXCI+XG5cdFx0XHRcdDx1bmktcG9wdXAtc2hhcmVcblx0XHRcdFx0XHQ6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgXG5cdFx0XHRcdFx0OnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCIgXG5cdFx0XHRcdFx0OnZsb2dVcmw9XCJ0aGlzVmxvZy51cmxcIlxuXHRcdFx0XHRcdDppc1ByaXZhdGU9XCJ0aGlzVmxvZy5pc1ByaXZhdGVcIlxuXHRcdFx0XHRcdD48L3VuaS1wb3B1cC1zaGFyZT5cblx0XHRcdDwvdW5pLXBvcHVwPlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHNjcmVlbkhlaWdodDoge1xuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9LFxuXHRcdFx0c3JjOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0cGxheUZvbGxvd1N0YXR1czoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHBsYXlTdGF0dXM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0xpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH0sXG5cdFx0XHRyZWZyZXNoTGlzdDoge1xuXHRcdFx0XHRkZWZhdWx0OiBbXVxuXHRcdFx0fSxcblx0XHRcdHBhZ2luZ0xpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0aGlzVmxvZzoge30sXHRcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5a+56LGhXG5cdFx0XHRcdHRoaXNWbG9nSWQ6IFwiXCIsXHRcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Li76ZSuaWRcblx0XHRcdFx0dGhpc1Zsb2dlcklkOiBcIlwiLFx0XHQvLyDlvZPliY3nmoTnn63op4bpopHljZrkuLvnmoTkuLvplK5pZFxuXHRcdFx0XHRcblx0XHRcdFx0cmVmcmVzaGluZzogZmFsc2UsXG5cdFx0XHRcdHNob3dSZWZyZXNoTG9hZGluZzogXCJoaWRlXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRwbGF5ZXJDdXI6IDAsXG5cdFx0XHRcdHBhZ2U6IDAsXG5cdFx0XHRcdHRvdGFsUGFnZTogMCxcblx0XHRcdFx0cGxheWVyTGlzdDogdGhpcy52aWRlb0xpc3QsXG5cdFx0XHRcdHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHM6IDAsXG5cdFx0XHRcdFxuXHRcdFx0XHR2aWRlb0NvbnRleHQ6IHt9LFxuXHRcdFx0XHRcblx0XHRcdFx0Y3VycmVudEluZGV4OiAwLFxuXHRcdFx0XHRjb250ZW50T2Zmc2V0WTogMCxcblx0XHRcdFx0XG5cdFx0XHRcdHRpbWVzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcblx0XHRcdFx0XG5cdFx0XHRcdG9iamVjdEZpdDogXCJmaWxsXCIsXG5cdFx0XHRcdGlzSU9TOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0aWYoIXRoaXMuaXNJT1MpIHtcblx0XHRcdFx0dGhpcy5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxuXHRcdFx0dGhpcy5kaXNwbGF5VmlkZW9QYWdpbmcodGhpcy5wYWdlICsgMSwgdHJ1ZSk7XG5cdFx0XHRcblx0XHRcdHZhciB2aWRlb0NvbnRleHQgPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCdteUZvbGxvd1ZpZGVvJyk7XG5cdFx0XHR0aGlzLnZpZGVvQ29udGV4dCA9IHZpZGVvQ29udGV4dDtcblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRyZWZyZXNoTGlzdCh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgbmV3TGlzdCA9IHZhbHVlO1xuXHRcdFx0XHRpZiAobmV3TGlzdCAhPSBudWxsICYmIG5ld0xpc3QgIT0gdW5kZWZpbmVkICYmIG5ld0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBuZXdMaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDph43nva5cblx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSAwO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG5cdFx0XHRcdHRoaXMuY29udGVudE9mZnNldFkgPTA7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRwbGF5Rm9sbG93U3RhdHVzOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdGlmICghdmFsKSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0ZnJlc2hDb21tZW50Q291bnRzKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG1lLnBsYXllckxpc3QgPT0gbnVsbCB8fCBtZS5wbGF5ZXJMaXN0ID09IHVuZGVmaW5lZCB8fCBtZS5wbGF5ZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgdmxvZ0lkID0gdmxvZy52bG9nSWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvY29tbWVudC9jb3VudHM/dmxvZ0lkPVwiICsgdmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRsaWtlT3JEaXNsaWtlVmxvZyhpc0xpa2UpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0aWYgKGlzTGlrZSA9PSAxKSB7XG5cdFx0XHRcdFx0Ly8g5Zac5qyiL+eCuei1nuinhumikVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5sb2dpbldvcmRzID0gXCLor7fnmbvlvZVcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvbGlrZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2cudmxvZ2VySWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlTGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzTGlrZSA9PSAwKSB7XG5cdFx0XHRcdFx0Ly8g5Y+W5raI5Zac5qyiL+eCuei1nuinhumikVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3VubGlrZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2cudmxvZ2VySWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlRGlzbGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDllpzmrKIv54K56LWe55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVMaWtlUGxheUxpc3QodmxvZ0lkKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdHJlRGlzbGlrZVBsYXlMaXN0KHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUxpa2VUaGlzVmxvZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDlhbPms6jlkI7nmoRsaXN06YeN5paw6K6+572uXG5cdFx0XHRyZUZvbGxvd1BsYXlMaXN0KHZsb2dlcklkKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nZXJJZCA9PSB2bG9nZXJJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lGb2xsb3dWbG9nZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5Y+W5YWz5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVDYW5jZWxQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5Y2a5Li7XG5cdFx0XHRmb2xsb3dNZSh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9mYW5zL2ZvbGxvdz9teUlkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nZXJJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRtZS5yZUZvbGxvd1BsYXlMaXN0KHZsb2dlcklkKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRnb1VzZXJJbmZvU2VlU2VlKHVzZXJJZCkge1xuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyUGFnZUlkXCIsIHVzZXJJZCk7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL21lL3Zsb2dlckluZm8/dXNlclBhZ2VJZD1cIiArIHVzZXJJZFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0bGlzdFNjcm9sbChlKSB7XG5cdFx0XHRcdGlmKGUuY29udGVudE9mZnNldC55ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJzaG93TG9hZGluZ1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG93bmxvYWRWbG9nKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHZhciBwZW5kaW5nTGVuZ3RoID0gdmxvZy51cmw7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29weUxpbmsoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0c2hvd1FSQ29kZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRjaGFuZ2VWbG9nVG9Qcml2YXRlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcblx0XHRcdG9ucmVmcmVzaChlKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJoaWRlTG9hZGluZ1wiKTtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hUZXh0ID0gJ+KGkyBQdWxsIFRvIFJlZnJlc2gnXG5cdFx0XHRcdH0sIDMwMClcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdC8vIOmAmui/h2xpc3Tnu4Tku7bnmoTkuIvmi4nliLfmlrDop6blj5HlvZPliY3miYDlnKjpobXpnaLnmoTkuIvmi4nliLfmlrBcblx0XHRcdFx0dW5pLnN0YXJ0UHVsbERvd25SZWZyZXNoKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRvbnBsYXk6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy4kZW1pdChcInBsYXlcIiwgMC4xKTtcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcblx0XHRcdFx0XHQvLyB0aGlzLiRlbWl0KFwicGxheVwiLCBlLmRldGFpbC5jdXJyZW50VGltZSk7XG5cdFx0XHRcdFx0dGhpcy5kb3BsYXkoZS5kZXRhaWwuY3VycmVudFRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRwbGF5T3JQYXVzZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXlGb2xsb3dTdGF0dXMgPSB0aGlzLnBsYXlGb2xsb3dTdGF0dXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXBsYXlGb2xsb3dTdGF0dXMpIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9ICFwbGF5Rm9sbG93U3RhdHVzO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRzY3JvbGw6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0bGV0IG9yaWdpbmFsSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcblx0XHRcdFx0bGV0IGlzTmV4dCA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoZS5jb250ZW50T2Zmc2V0LnkgPCB0aGlzLmNvbnRlbnRPZmZzZXRZKSB7XG5cdFx0XHRcdFx0aXNOZXh0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0gZS5jb250ZW50T2Zmc2V0Lnk7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgbnVtID0gdGhpcy5wbGF5ZXJMaXN0Lmxlbmd0aDtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gTWF0aC5yb3VuZChNYXRoLmFicyh0aGlzLmNvbnRlbnRPZmZzZXRZKSAvIChlLmNvbnRlbnRTaXplLmhlaWdodCAvIG51bSkpO1xuXHRcdFx0XHR0aGlzLm9uY2hhbmdlKHRoaXMuY3VycmVudEluZGV4KTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMudGltZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWIpOaWreWmguaenOinhumikeWIl+ihqOaAu+mVv+W6pi3lvZPliY3kuIvmoIfvvIzlsJHkuo4z5Liq77yM5YiZ5byA5aeL5YiG6aG15p+l6K+i5ZCO57ut55qE6KeG6aKR77yM5bm25LiU6L+95Yqg5Yiw546w5pyJbGlzdOS4rVxuXHRcdFx0XHRpZiAoKHRoaXMucGxheWVyTGlzdC5sZW5ndGggLSB0aGlzLmN1cnJlbnRJbmRleCkgPCAzKSB7XG5cdFx0XHRcdFx0Ly8g5aaC5p6c6KaB5YiG6aG155qEcGFnZeWSjOaAu+aVsHRvdGFsUGFnZeebuOetie+8jOWImeayoeacieabtOWkmlxuXHRcdFx0XHRcdGlmICh0aGlzLnBhZ2UgPT0gdGhpcy50b3RhbFBhZ2UpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5kaXNwbGF5VmlkZW9QYWdpbmcodGhpcy5wYWdlICsgMSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5YiG6aG15p+l6K+i5paw55qEbGlzdO+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cblx0XHRcdGRpc3BsYXlWaWRlb1BhZ2luZyhwYWdlLCBuZWVkQ2xlYXJMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gXCJcIjtcblx0XHRcdFx0aWYgKG15VXNlckluZm8gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHVzZXJJZCA9IG15VXNlckluZm8uaWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2ZvbGxvd0xpc3Q/bXlJZD1cIiArIHVzZXJJZCArIFwiJnBhZ2U9XCIgKyBwYWdlICsgXCImcGFnZVNpemU9MTBcIixcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmxvZ0xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLnJvd3M7XG5cdFx0XHRcdFx0XHRcdHZhciB0b3RhbFBhZ2UgPSByZXN1bHQuZGF0YS5kYXRhLnRvdGFsO1xuXHRcdFx0XHRcdFx0XHRpZiAobmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdC5jb25jYXQodmxvZ0xpc3QpO1xuXHRcdFx0XHRcdFx0XHRtZS5wYWdlID0gcGFnZTtcblx0XHRcdFx0XHRcdFx0bWUudG90YWxQYWdlID0gdG90YWxQYWdlO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5zZXRUaGlzVmxvZ0luZm8oKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5mcmVzaENvbW1lbnRDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZS5kb1RpbWVyKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcblx0XHRcdFx0XHRcdC8vIG1lLmRvVGltZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG9UaW1lcigpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHQgPSBzZXRUaW1lb3V0KCgpID0+IHsgXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKG1lLnBsYXllckxpc3QgIT0gbnVsbCAmJiBtZS5wbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBtZS5wbGF5ZXJMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0sIDMwMDApXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkb3BsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uY2hhbmdlOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRpZiAoaW5kZXggIT0gdGhpcy5wbGF5ZXJDdXIpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXllckxpc3RbdGhpcy5wbGF5ZXJDdXJdLnBsYXkgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnBsYXllckN1ciA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdHRoaXMuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdHRoaXMuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDorr7nva7lvZPliY12bG9n55qE5L+h5oGvXG5cdFx0XHRzZXRUaGlzVmxvZ0luZm8oKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobWUucGxheWVyTGlzdCAhPSBudWxsICYmIG1lLnBsYXllckxpc3QgIT0gdW5kZWZpbmVkICYmIG1lLnBsYXllckxpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0dGhpcy50aGlzVmxvZyA9IHZsb2c7XG5cdFx0XHRcdFx0dGhpcy50aGlzVmxvZ0lkID0gdmxvZy52bG9nSWQ7XG5cdFx0XHRcdFx0dGhpcy50aGlzVmxvZ2VySWQgPSB2bG9nLnZsb2dlcklkO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZWZyZXNoVmxvZ0NvdW50cygpIHtcblx0XHRcdFx0Ly8g5p+l6K+i5b2T5YmN54K56LWe5pWw77yM6YeN5paw6LWL5YC857uZ5b2T5YmN6KeG6aKRXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvdG90YWxMaWtlZENvdW50cz92bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdG1lLnJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nLnZsb2dJZCwgY291bnRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2dJZCwgY291bnRzKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cubGlrZUNvdW50cyA9IGNvdW50cztcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29tbWVudFRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5jb21tZW50Lm9wZW4oKTtcblx0XHRcdFx0dW5pLmhpZGVUYWJCYXIoe1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRzaGFyZVRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5zaGFyZS5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9LFxuICBcInVzZXItZmFjZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInBsYXktY2RcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE1MHJweFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjhcbiAgfSxcbiAgXCJyZWZyZXNoLWluZm8tdHh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0YxRjFGMVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCJcbiAgfSxcbiAgXCJwdWJsaXNoLWluZm8tYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiBcIjIwMHJweFwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDBycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJwdWJsaXNoLWluZm8tY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibGluZXNcIjogNSxcbiAgICBcIndpZHRoXCI6IFwiNTIwcnB4XCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiaWNvbi1maXJlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM2cnB4XCJcbiAgfSxcbiAgXCJtdWlzYy13b3Jkc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI0MDBycHhcIlxuICB9LFxuICBcInNvbWUtY291bnRzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIycnB4XCJcbiAgfSxcbiAgXCJvcGVyYXRpb24tYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJvcGVyYXRpb24tZmFjZS1ib3hcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiM3JweFwiXG4gIH0sXG4gIFwiZm9sbG93LW1lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwidG9wXCI6IFwiLTIwcnB4XCJcbiAgfSxcbiAgXCJsaWtlLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQ1cnB4XCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyOWMyZGVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyOWMyZGVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItY2VudGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJoZWFkZXItbGVmdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwiaGVhZGVyLXJpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCJcbiAgfSxcbiAgXCJoZWFkZXItcmlnaHQtc2VhcmNoXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWl0ZW1cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWl0ZW0tdGl0bGVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCJoZWFkZXItcmVmcmVzaC10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwMHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcImhlYWRlci1pdGVtLWxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjhycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcIm15LXN3aXBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcIm5lYXItYnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIm15LWZvbGxvd1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwid2Fybi1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNnJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH0sXG4gIFwibm9ybWFsLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjhcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJhY3RpdmF0ZS1saW5lXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==