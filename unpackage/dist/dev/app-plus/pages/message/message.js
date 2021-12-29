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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
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

/***/ 116:
/*!*********************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/main.js?{"page":"pages%2Fmessage%2Fmessage"} ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_message_message_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/message/message.nvue?mpType=page */ 117);

        
        
        
        _pages_message_message_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_message_message_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/message/message'
        _pages_message_message_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_message_message_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 117:
/*!***************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.nvue?vue&type=template&id=2944fc83&mpType=page */ 118);
/* harmony import */ var _message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.nvue?vue&type=script&lang=js&mpType=page */ 120);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./message.nvue?vue&type=style&index=0&lang=css&mpType=page */ 123).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./message.nvue?vue&type=style&index=0&lang=css&mpType=page */ 123).default)
            }

}

/* normalize component */

var component = Object(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "2c464088",
  false,
  _message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/*!*********************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=template&id=2944fc83&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./message.nvue?vue&type=template&id=2944fc83&mpType=page */ 119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_template_id_2944fc83_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 119:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=template&id=2944fc83&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("view", { staticClass: ["line"] }),
          _c(
            "scroll-view",
            { attrs: { scrollY: "true" }, on: { scrolltolower: _vm.loadMore } },
            _vm._l(_vm.msgList, function(msg, index) {
              return _c("block", { key: index }, [
                msg.msgType == 1
                  ? _c("view", { staticClass: ["msg-item-box"] }, [
                      _c(
                        "view",
                        { staticClass: ["msg-item-left"] },
                        [
                          _c("u-image", {
                            staticClass: ["user-face"],
                            staticStyle: { alignSelf: "center" },
                            attrs: { mode: "scaleToFill", src: msg.fromFace }
                          }),
                          _c("view", { staticClass: ["msg-item-middle"] }, [
                            _c("u-text", { staticClass: ["user-nickname"] }, [
                              _vm._v(_vm._s(msg.fromNickname))
                            ]),
                            _c("u-text", { staticClass: ["msg-content"] }, [
                              _vm._v(
                                "关注了你    " +
                                  _vm._s(
                                    _vm.getGraceDateBeforeNow(msg.createTime)
                                  )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      !msg.msgContent.isFriend
                        ? _c(
                            "view",
                            {
                              staticClass: ["msg-item-right"],
                              staticStyle: {
                                backgroundColor: "#ef274d",
                                alignSelf: "center"
                              },
                              on: {
                                click: function($event) {
                                  _vm.followMe(msg.id, msg.fromUserId)
                                }
                              }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["op-fans-btn"],
                                  staticStyle: { alignSelf: "center" }
                                },
                                [_vm._v("回粉")]
                              )
                            ]
                          )
                        : _vm._e(),
                      msg.msgContent.isFriend
                        ? _c(
                            "view",
                            {
                              staticClass: ["msg-item-right"],
                              staticStyle: {
                                backgroundColor: "#545456",
                                alignSelf: "center"
                              },
                              on: {
                                click: function($event) {
                                  _vm.cancelFollow(msg.id, msg.fromUserId)
                                }
                              }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["op-fans-btn"],
                                  staticStyle: { alignSelf: "center" }
                                },
                                [_vm._v("互关")]
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  : _vm._e(),
                msg.msgType == 2
                  ? _c(
                      "view",
                      { staticClass: ["msg-item-box"] },
                      [
                        _c(
                          "view",
                          { staticClass: ["msg-item-left"] },
                          [
                            _c("u-image", {
                              staticClass: ["user-face"],
                              staticStyle: { alignSelf: "center" },
                              attrs: { mode: "scaleToFill", src: msg.fromFace }
                            }),
                            _c("view", { staticClass: ["msg-item-middle"] }, [
                              _c("u-text", { staticClass: ["user-nickname"] }, [
                                _vm._v(_vm._s(msg.fromNickname))
                              ]),
                              _c("u-text", { staticClass: ["msg-content"] }, [
                                _vm._v(
                                  "点赞了你的视频    " +
                                    _vm._s(
                                      _vm.getGraceDateBeforeNow(msg.createTime)
                                    )
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        _c("u-image", {
                          staticClass: ["vlog-cover"],
                          staticStyle: { alignSelf: "center" },
                          attrs: {
                            mode: "aspectFill",
                            src: msg.msgContent.vlogCover
                          },
                          on: {
                            click: function($event) {
                              _vm.goToVlog(msg.msgContent.vlogId)
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                msg.msgType == 3
                  ? _c(
                      "view",
                      { staticClass: ["msg-item-box"] },
                      [
                        _c(
                          "view",
                          { staticClass: ["msg-item-left"] },
                          [
                            _c("u-image", {
                              staticClass: ["user-face"],
                              staticStyle: { alignSelf: "center" },
                              attrs: { mode: "scaleToFill", src: msg.fromFace }
                            }),
                            _c("view", { staticClass: ["msg-item-middle"] }, [
                              _c("u-text", { staticClass: ["user-nickname"] }, [
                                _vm._v(_vm._s(msg.fromNickname))
                              ]),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["msg-content"],
                                  staticStyle: {
                                    fontWeight: "400",
                                    width: "360rpx",
                                    lines: "2",
                                    textOverflow: "ellipsis"
                                  }
                                },
                                [_vm._v(_vm._s(msg.msgContent.commentContent))]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["msg-content"],
                                  staticStyle: { fontWeight: "200" }
                                },
                                [
                                  _vm._v(
                                    "发表了评论    " +
                                      _vm._s(
                                        _vm.getGraceDateBeforeNow(
                                          msg.createTime
                                        )
                                      )
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        ),
                        _c("u-image", {
                          staticClass: ["vlog-cover"],
                          staticStyle: { alignSelf: "center" },
                          attrs: {
                            mode: "aspectFill",
                            src: msg.msgContent.vlogCover
                          },
                          on: {
                            click: function($event) {
                              _vm.goToVlog(msg.msgContent.vlogId)
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                msg.msgType == 4
                  ? _c(
                      "view",
                      { staticClass: ["msg-item-box"] },
                      [
                        _c(
                          "view",
                          { staticClass: ["msg-item-left"] },
                          [
                            _c("u-image", {
                              staticClass: ["user-face"],
                              staticStyle: { alignSelf: "center" },
                              attrs: { mode: "scaleToFill", src: msg.fromFace }
                            }),
                            _c("view", { staticClass: ["msg-item-middle"] }, [
                              _c("u-text", { staticClass: ["user-nickname"] }, [
                                _vm._v(_vm._s(msg.fromNickname))
                              ]),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["msg-content"],
                                  staticStyle: {
                                    fontWeight: "400",
                                    width: "360rpx",
                                    lines: "2",
                                    textOverflow: "ellipsis"
                                  }
                                },
                                [_vm._v(_vm._s(msg.msgContent.commentContent))]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["msg-content"],
                                  staticStyle: { fontWeight: "200" }
                                },
                                [
                                  _vm._v(
                                    "回复了你    " +
                                      _vm._s(
                                        _vm.getGraceDateBeforeNow(
                                          msg.createTime
                                        )
                                      )
                                  )
                                ]
                              )
                            ])
                          ],
                          1
                        ),
                        _c("u-image", {
                          staticClass: ["vlog-cover"],
                          staticStyle: { alignSelf: "center" },
                          attrs: {
                            mode: "aspectFill",
                            src: msg.msgContent.vlogCover
                          },
                          on: {
                            click: function($event) {
                              _vm.goToVlog(msg.msgContent.vlogId)
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                msg.msgType == 5
                  ? _c(
                      "view",
                      { staticClass: ["msg-item-box"] },
                      [
                        _c(
                          "view",
                          { staticClass: ["msg-item-left"] },
                          [
                            _c("u-image", {
                              staticClass: ["user-face"],
                              staticStyle: { alignSelf: "center" },
                              attrs: { mode: "scaleToFill", src: msg.fromFace }
                            }),
                            _c("view", { staticClass: ["msg-item-middle"] }, [
                              _c("u-text", { staticClass: ["user-nickname"] }, [
                                _vm._v(_vm._s(msg.fromNickname))
                              ]),
                              _c("u-text", { staticClass: ["msg-content"] }, [
                                _vm._v(
                                  "点赞了你的评论    " +
                                    _vm._s(
                                      _vm.getGraceDateBeforeNow(msg.createTime)
                                    )
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        _c("u-image", {
                          staticClass: ["vlog-cover"],
                          staticStyle: { alignSelf: "center" },
                          attrs: {
                            mode: "aspectFill",
                            src: msg.msgContent.vlogCover
                          },
                          on: {
                            click: function($event) {
                              _vm.goToVlog(msg.msgContent.vlogId)
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            }),
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

/***/ 120:
/*!***************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./message.nvue?vue&type=script&lang=js&mpType=page */ 121);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 121:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      msgList: [],
      page: 0,
      totalPage: 0 };

  },
  onShow: function onShow() {
    this.page = 0;
    this.totalPage = 0;
    this.msgList = [];

    this.fetchList(0);
  },
  methods: {
    goToVlog: function goToVlog(vlogId) {
      uni.navigateTo({
        url: "../vlog/vlog?vlogId=" + vlogId });

    },
    // 关注/取关后的list重新状态刷新设置
    reFreshList: function reFreshList(msgId, vlogerId, status) {
      var me = this;
      var msgList = me.msgList;
      for (var i = 0; i < msgList.length; i++) {
        var msg = msgList[i];
        if (msg.id == msgId) {
          var msgContent = msg.msgContent;
          msgContent.isFriend = status;
          msgList.splice(i, 1, msg);
        }
      }
      me.msgList = msgList;
    },
    cancelFollow: function cancelFollow(msgId, vlogerId) {
      var me = this;
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken() },

        url: serverUrl + "/fans/cancel?myId=" + userId + "&vlogerId=" + vlogerId,
        success: function success(result) {

          if (result.data.status == 200) {
            me.reFreshList(msgId, vlogerId, false);
            uni.setStorageSync("justCancelVlogerId", vlogerId);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }

        } });


    },
    followMe: function followMe(msgId, vlogerId) {
      var me = this;
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
            me.reFreshList(msgId, vlogerId, true);
            uni.setStorageSync("justFollowVlogerId", vlogerId);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000 });

          }

        } });


    },

    loadMore: function loadMore() {
      var pendginPage = this.page + 1;
      this.fetchList(pendginPage);
    },
    fetchList: function fetchList(page) {
      var me = this;

      var myUserInfo = app.getUserInfoSession();
      if (myUserInfo == null) {
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none" });

        // uni.navigateTo({
        // 	url: "../loginRegist/loginRegist",
        // 	animationType: "slide-in-bottom",
        // 	success() {
        // 		me.loginWords = "请登录"
        // 	}
        // });
        return;
      }

      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken() },

        url: serverUrl + "/msg/list?userId=" + userId + "&page=" + page + "&pageSize=10",
        success: function success(result) {

          if (result.data.status == 200) {
            var msgList = result.data.data;
            console.log(__f__(msgList, " at pages\\message\\message.nvue:324"));
            if (msgList != null && msgList != undefined && msgList.length > 0) {
              me.msgList = me.msgList.concat(msgList);
              me.page = page;
            }
          }

        } });

    },
    // 时间显示 刚刚/xx小时前/...
    getGraceDateBeforeNow: function getGraceDateBeforeNow(dateTimeStr) {
      var date = app.dateFormat("YYYY-mm-dd", new Date(dateTimeStr));
      return getApp().getDateBeforeNow(date);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 122)["default"]))

/***/ }),

/***/ 122:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),

/***/ 123:
/*!***********************************************************************************************************************!*\
  !*** E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./message.nvue?vue&type=style&index=0&lang=css&mpType=page */ 124);
/* harmony import */ var _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Tools_HBuilderX_2_5_1_20200103_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_message_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 124:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/imooc/imooc-red-book/前端源码/RedBook-Dev/pages/message/message.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "#181b27"
  },
  "line": {
    "height": "1rpx",
    "backgroundColor": "#393a41",
    "width": "750rpx"
  },
  "user-face": {
    "width": "120rpx",
    "height": "120rpx",
    "borderRadius": "100rpx",
    "borderWidth": "1",
    "borderColor": "#F1F1F1"
  },
  "msg-item-box": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx",
    "marginTop": "10rpx"
  },
  "msg-item-left": {
    "display": "flex",
    "flexDirection": "row"
  },
  "msg-item-middle": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": "30rpx",
    "paddingTop": "20rpx"
  },
  "user-nickname": {
    "color": "#FFFFFF",
    "fontSize": "14",
    "fontWeight": "600"
  },
  "msg-content": {
    "color": "#FFFFFF",
    "fontSize": "12",
    "fontWeight": "300",
    "marginTop": "2rpx"
  },
  "msg-item-right": {
    "width": "160rpx",
    "height": "70rpx",
    "opacity": 0.8,
    "borderRadius": "8rpx",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "op-fans-btn": {
    "fontSize": "13",
    "color": "#FFFFFF",
    "fontWeight": "500"
  },
  "vlog-cover": {
    "width": "100rpx",
    "height": "120rpx",
    "marginRight": "10rpx",
    "borderRadius": "2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz8zODZjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvbWFpbi5qcz85YzI2Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvbWVzc2FnZS9tZXNzYWdlLm52dWU/Yzg4NyIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5udnVlPzhhNTAiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9wYWdlcy9tZXNzYWdlL21lc3NhZ2UubnZ1ZT9hYzM0Iiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvcGFnZXMvbWVzc2FnZS9tZXNzYWdlLm52dWU/ZmY3MiIsInVuaS1hcHA6Ly8vcGFnZXMvbWVzc2FnZS9tZXNzYWdlLm52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5udnVlPzk3NjYiLCJ3ZWJwYWNrOi8vL0U6L2ltb29jL2ltb29jLXJlZC1ib29rL+WJjeerr+a6kOeggS9SZWRCb29rLURldi9wYWdlcy9tZXNzYWdlL21lc3NhZ2UubnZ1ZT82YzhhIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvQXBwLnZ1ZT8yM2ZmIiwid2VicGFjazovLy9FOi9pbW9vYy9pbW9vYy1yZWQtYm9vay/liY3nq6/mupDnoIEvUmVkQm9vay1EZXYvQXBwLnZ1ZT8zYTc1Il0sIm5hbWVzIjpbInR5cG9mIiwidiIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJmb3JtYXRMb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIm1zZ3MiLCJtYXAiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwicG9wIiwiam9pbiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSwyREFBMkQsbUJBQU8sQ0FBQyxrREFBMkM7Ozs7Ozs7Ozs7Ozs7QUNEOUc7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0EsUUFBOEI7QUFDOUIsUUFBa0U7QUFDbEUsUUFBUSwrRUFBRztBQUNYLFFBQVEsK0VBQUc7QUFDWCxRQUFRLCtFQUFHO0FBQ1gsZ0JBQWdCLCtFQUFHOzs7Ozs7Ozs7Ozs7O0FDUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFFQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUVBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQzJNO0FBQzNNLGdCQUFnQixtTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDckNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakM7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQSxhQUFhLFNBQVMsa0JBQWtCLE9BQU8sOEJBQThCLEVBQUU7QUFDL0U7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCLHNDQUFzQyxtQ0FBbUM7QUFDekUsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBO0FBQ0EsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCLHdDQUF3QyxtQ0FBbUM7QUFDM0UsNENBQTRDLGlDQUFpQztBQUM3RTtBQUNBO0FBQ0EsNENBQTRDLCtCQUErQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCLHdDQUF3QyxtQ0FBbUM7QUFDM0UsNENBQTRDLGlDQUFpQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0JBQXNCO0FBQ2xFLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0Isd0NBQXdDLG1DQUFtQztBQUMzRSw0Q0FBNEMsaUNBQWlDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUNBQWlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxzQkFBc0I7QUFDbEUsc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3Qix3Q0FBd0MsbUNBQW1DO0FBQzNFLDRDQUE0QyxpQ0FBaUM7QUFDN0U7QUFDQTtBQUNBLDRDQUE0QywrQkFBK0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3VkE7QUFBQTtBQUFBO0FBQUE7QUFBbWlCLENBQWdCLHlrQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpTXZqQixtQjtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxhQUZBO0FBR0Esa0JBSEE7O0FBS0EsR0FQQTtBQVFBLFFBUkEsb0JBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQWRBO0FBZUE7QUFDQSxZQURBLG9CQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0EsNENBREE7O0FBR0EsS0FMQTtBQU1BO0FBQ0EsZUFQQSx1QkFPQSxLQVBBLEVBT0EsUUFQQSxFQU9BLE1BUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5CQTtBQW9CQSxnQkFwQkEsd0JBb0JBLEtBcEJBLEVBb0JBLFFBcEJBLEVBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsOEJBREE7QUFFQSxvREFGQSxFQUZBOztBQU1BLGdGQU5BO0FBT0EsZUFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBCQUZBO0FBR0EsNEJBSEE7O0FBS0E7O0FBRUEsU0FwQkE7OztBQXVCQSxLQS9DQTtBQWdEQSxZQWhEQSxvQkFnREEsS0FoREEsRUFnREEsUUFoREEsRUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSw4QkFEQTtBQUVBLG9EQUZBLEVBRkE7O0FBTUEsZ0ZBTkE7QUFPQSxlQVBBLG1CQU9BLE1BUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTs7QUFLQTs7QUFFQSxTQXBCQTs7O0FBdUJBLEtBM0VBOztBQTZFQSxZQTdFQSxzQkE2RUE7QUFDQTtBQUNBO0FBQ0EsS0FoRkE7QUFpRkEsYUFqRkEscUJBaUZBLElBakZBLEVBaUZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSx1QkFGQTtBQUdBLHNCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0EsOEJBREE7QUFFQSxvREFGQSxFQUZBOztBQU1BLHdGQU5BO0FBT0EsZUFQQSxtQkFPQSxNQVBBLEVBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQWxCQTs7QUFvQkEsS0EzSEE7QUE0SEE7QUFDQSx5QkE3SEEsaUNBNkhBLFdBN0hBLEVBNkhBO0FBQ0E7QUFDQTtBQUNBLEtBaElBLEVBZkEsRTs7Ozs7Ozs7Ozs7OzswRkNsTUEsU0FBU0EsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDakIsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkwsQ0FBL0IsQ0FBUjtBQUNBLFNBQU9DLENBQUMsQ0FBQ0ssU0FBRixDQUFZLENBQVosRUFBZUwsQ0FBQyxDQUFDTSxNQUFGLEdBQVcsQ0FBMUIsQ0FBUDtBQUNEOztBQUVjLFNBQVNDLFNBQVQsR0FBc0I7QUFDbkMsT0FBSyxJQUFJQyxJQUFJLEdBQUdDLFNBQVMsQ0FBQ0gsTUFBckIsRUFBNkJJLElBQUksR0FBRyxJQUFJQyxLQUFKLENBQVVILElBQVYsQ0FBcEMsRUFBcURJLElBQUksR0FBRyxDQUFqRSxFQUFvRUEsSUFBSSxHQUFHSixJQUEzRSxFQUFpRkksSUFBSSxFQUFyRixFQUF5RjtBQUN2RkYsUUFBSSxDQUFDRSxJQUFELENBQUosR0FBYUgsU0FBUyxDQUFDRyxJQUFELENBQXRCO0FBQ0Q7O0FBRUQsTUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFVZixDQUFWLEVBQWE7QUFDL0IsUUFBSWdCLElBQUksR0FBR2QsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLENBQS9CLENBQVg7O0FBRUEsUUFBSWdCLElBQUksQ0FBQ0MsV0FBTCxPQUF1QixpQkFBM0IsRUFBOEM7QUFDNUMsVUFBSTtBQUNGakIsU0FBQyxHQUFHLHFCQUFxQmtCLElBQUksQ0FBQ0MsU0FBTCxDQUFlbkIsQ0FBZixDQUFyQixHQUF5QyxnQkFBN0M7QUFDRCxPQUZELENBRUUsT0FBT29CLENBQVAsRUFBVTtBQUNWcEIsU0FBQyxHQUFHLGlCQUFKO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJQSxDQUFDLEtBQUssSUFBVixFQUFnQjtBQUNkQSxTQUFDLEdBQUcsWUFBSjtBQUNELE9BRkQsTUFFTyxJQUFJQSxDQUFDLEtBQUtxQixTQUFWLEVBQXFCO0FBQzFCckIsU0FBQyxHQUFHLGlCQUFKO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsWUFBSXNCLEtBQUssR0FBR3ZCLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVN1QixXQUFULEVBQVo7O0FBRUEsWUFBSUQsS0FBSyxLQUFLLFFBQVYsSUFBc0JBLEtBQUssS0FBSyxTQUFwQyxFQUErQztBQUM3Q3RCLFdBQUMsR0FBRyxjQUFjc0IsS0FBZCxHQUFzQixLQUF0QixHQUE4QnRCLENBQTlCLEdBQWtDLFNBQWxDLEdBQThDc0IsS0FBOUMsR0FBc0QsS0FBMUQ7QUFDRCxTQUZELE1BRU87QUFDTHRCLFdBQUMsR0FBR3dCLE1BQU0sQ0FBQ3hCLENBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPQSxDQUFQO0FBQ0QsR0ExQlUsQ0FBWDtBQTJCQSxNQUFJeUIsR0FBRyxHQUFHLEVBQVY7O0FBRUEsTUFBSVgsSUFBSSxDQUFDUCxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsUUFBSW1CLE9BQU8sR0FBR1osSUFBSSxDQUFDYSxHQUFMLEVBQWQ7QUFDQUYsT0FBRyxHQUFHWCxJQUFJLENBQUNjLElBQUwsQ0FBVSxhQUFWLENBQU47O0FBRUEsUUFBSUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCLE1BQWhCLE1BQTRCLENBQWhDLEVBQW1DO0FBQ2pDSixTQUFHLElBQUlDLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTEQsU0FBRyxJQUFJLGdCQUFnQkMsT0FBdkI7QUFDRDtBQUNGLEdBVEQsTUFTTztBQUNMRCxPQUFHLEdBQUdYLElBQUksQ0FBQyxDQUFELENBQVY7QUFDRDs7QUFFRCxTQUFPVyxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDckREO0FBQUE7QUFBQTtBQUFBO0FBQWs2QixDQUFnQiwyNkJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F0N0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBaTVCLENBQWdCLDA1QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXI2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvbWVzc2FnZS9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExNik7XG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgb3B0aW9ucy5jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbihjb21wb25lbnRzLCBvcHRpb25zLmNvbXBvbmVudHMgfHwge30pXG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbWVzc2FnZS9tZXNzYWdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL21lc3NhZ2UvbWVzc2FnZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZXNzYWdlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk0NGZjODMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lc3NhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNzYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21lc3NhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21lc3NhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMmM0NjQwODhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovaW1vb2MvaW1vb2MtcmVkLWJvb2sv5YmN56uv5rqQ56CBL1JlZEJvb2stRGV2L3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc3NhZ2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOTQ0ZmM4MyZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2VcIl0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaW5lXCJdIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzY3JvbGwtdmlld1wiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzY3JvbGxZOiBcInRydWVcIiB9LCBvbjogeyBzY3JvbGx0b2xvd2VyOiBfdm0ubG9hZE1vcmUgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5tc2dMaXN0LCBmdW5jdGlvbihtc2csIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImJsb2NrXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgbXNnLm1zZ1R5cGUgPT0gMVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tYm94XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbGVmdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1c2VyLWZhY2VcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYWxpZ25TZWxmOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbW9kZTogXCJzY2FsZVRvRmlsbFwiLCBzcmM6IG1zZy5mcm9tRmFjZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbWlkZGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1c2VyLW5pY2tuYW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobXNnLmZyb21OaWNrbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWNvbnRlbnRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWFs+azqOS6huS9oCAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEdyYWNlRGF0ZUJlZm9yZU5vdyhtc2cuY3JlYXRlVGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAhbXNnLm1zZ0NvbnRlbnQuaXNGcmllbmRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1zZy1pdGVtLXJpZ2h0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZjI3NGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb2xsb3dNZShtc2cuaWQsIG1zZy5mcm9tVXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvcC1mYW5zLWJ0blwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Zue57KJXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBtc2cubXNnQ29udGVudC5pc0ZyaWVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tcmlnaHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU0NTQ1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbmNlbEZvbGxvdyhtc2cuaWQsIG1zZy5mcm9tVXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvcC1mYW5zLWJ0blwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5LqS5YWzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBtc2cubXNnVHlwZSA9PSAyXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm1zZy1pdGVtLWJveFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbGVmdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1c2VyLWZhY2VcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1vZGU6IFwic2NhbGVUb0ZpbGxcIiwgc3JjOiBtc2cuZnJvbUZhY2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJtc2ctaXRlbS1taWRkbGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widXNlci1uaWNrbmFtZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobXNnLmZyb21OaWNrbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm1zZy1jb250ZW50XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi54K56LWe5LqG5L2g55qE6KeG6aKRICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEdyYWNlRGF0ZUJlZm9yZU5vdyhtc2cuY3JlYXRlVGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInZsb2ctY292ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbXNnLm1zZ0NvbnRlbnQudmxvZ0NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvVG9WbG9nKG1zZy5tc2dDb250ZW50LnZsb2dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgbXNnLm1zZ1R5cGUgPT0gM1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJtc2ctaXRlbS1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm1zZy1pdGVtLWxlZnRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widXNlci1mYWNlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYWxpZ25TZWxmOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInNjYWxlVG9GaWxsXCIsIHNyYzogbXNnLmZyb21GYWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbWlkZGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVzZXItbmlja25hbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1zZy5mcm9tTmlja25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtc2ctY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM2MHJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXM6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1zZy5tc2dDb250ZW50LmNvbW1lbnRDb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibXNnLWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFdlaWdodDogXCIyMDBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWPkeihqOS6huivhOiuuiAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0R3JhY2VEYXRlQmVmb3JlTm93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInZsb2ctY292ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbXNnLm1zZ0NvbnRlbnQudmxvZ0NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvVG9WbG9nKG1zZy5tc2dDb250ZW50LnZsb2dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgbXNnLm1zZ1R5cGUgPT0gNFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJtc2ctaXRlbS1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm1zZy1pdGVtLWxlZnRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widXNlci1mYWNlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYWxpZ25TZWxmOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInNjYWxlVG9GaWxsXCIsIHNyYzogbXNnLmZyb21GYWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbWlkZGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVzZXItbmlja25hbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1zZy5mcm9tTmlja25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtc2ctY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM2MHJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXM6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1zZy5tc2dDb250ZW50LmNvbW1lbnRDb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibXNnLWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFdlaWdodDogXCIyMDBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWbnuWkjeS6huS9oCAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0R3JhY2VEYXRlQmVmb3JlTm93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNyZWF0ZVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInZsb2ctY292ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbXNnLm1zZ0NvbnRlbnQudmxvZ0NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvVG9WbG9nKG1zZy5tc2dDb250ZW50LnZsb2dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgbXNnLm1zZ1R5cGUgPT0gNVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJtc2ctaXRlbS1ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm1zZy1pdGVtLWxlZnRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widXNlci1mYWNlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYWxpZ25TZWxmOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInNjYWxlVG9GaWxsXCIsIHNyYzogbXNnLmZyb21GYWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXNnLWl0ZW0tbWlkZGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVzZXItbmlja25hbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG1zZy5mcm9tTmlja25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtc2ctY29udGVudFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIueCuei1nuS6huS9oOeahOivhOiuuiAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRHcmFjZURhdGVCZWZvcmVOb3cobXNnLmNyZWF0ZVRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ2bG9nLWNvdmVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImFzcGVjdEZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IG1zZy5tc2dDb250ZW50LnZsb2dDb3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1RvVmxvZyhtc2cubXNnQ29udGVudC52bG9nSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzc2FnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNzYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjxzdHlsZT5cbi8qIC5zdGF0dXNfYmFyIHtcblx0aGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XG5cdHdpZHRoOiAxMDAlO1xufSAqL1xuXG4ucGFnZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYjI3O1xufVxuXG4ubGluZSB7XG5cdGhlaWdodDogMXJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzM5M2E0MTtcblx0d2lkdGg6IDc1MHJweDtcbn1cblxuLnVzZXItZmFjZSB7XG5cdHdpZHRoOiAxMjBycHg7XG5cdGhlaWdodDogMTIwcnB4O1xuXHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdGJvcmRlci13aWR0aDogMXB4O1xuXHRib3JkZXItY29sb3I6ICNGMUYxRjE7XG59XG5cbi5tc2ctaXRlbS1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDMwcnB4O1xuXHRtYXJnaW4tdG9wOiAxMHJweDtcbn1cbi5tc2ctaXRlbS1sZWZ0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tc2ctaXRlbS1taWRkbGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tbGVmdDogMzBycHg7XG5cdHBhZGRpbmctdG9wOiAyMHJweDtcbn1cbi51c2VyLW5pY2tuYW1lIHtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tc2ctY29udGVudCB7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdG1hcmdpbi10b3A6IDJycHg7XG59XG4ubXNnLWl0ZW0tcmlnaHQge1xuXHR3aWR0aDogMTYwcnB4O1xuXHRoZWlnaHQ6IDcwcnB4O1xuXHRvcGFjaXR5OiAwLjg7XG5cdGJvcmRlci1yYWRpdXM6IDhycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm9wLWZhbnMtYnRuIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cbi52bG9nLWNvdmVyIHtcblx0d2lkdGg6IDEwMHJweDtcblx0aGVpZ2h0OiAxMjBycHg7XG5cdG1hcmdpbi1yaWdodDogMTBycHg7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbjwvc3R5bGU+XG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJzdGF0dXNfYmFyXCI+IC0tPlxuXHRcdCAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8sIOavj+S4qumhtemdoumDvemcgOimgeacie+8jOebrueahOS4jeiuqemhtemdouimhueblueKtuaAgeagjyAtLT5cblx0XHQ8IS0tIDwvdmlldz4gLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxuXHRcdFxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBAc2Nyb2xsdG9sb3dlcj1cImxvYWRNb3JlXCI+XG5cdFx0XHRcblx0XHRcdDxibG9jayB2LWZvcj1cIihtc2csIGluZGV4KSBpbiBtc2dMaXN0XCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdDwhLS0g57KJ5Lid5YWz5rOoIC0tPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwibXNnLm1zZ1R5cGUgPT0gMVwiIGNsYXNzPVwibXNnLWl0ZW0tYm94XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtc2ctaXRlbS1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgbW9kZT1cInNjYWxlVG9GaWxsXCIgY2xhc3M9XCJ1c2VyLWZhY2VcIiA6c3JjPVwibXNnLmZyb21GYWNlXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZy1pdGVtLW1pZGRsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXItbmlja25hbWVcIj57e21zZy5mcm9tTmlja25hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtc2ctY29udGVudFwiPuWFs+azqOS6huS9oCAgICB7e2dldEdyYWNlRGF0ZUJlZm9yZU5vdyhtc2cuY3JlYXRlVGltZSl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PCEtLSDoh6rlt7HmmK/lkKblhbPms6jov5nkuKrnsonkuJ3opoHliqDliKTmlq0gLS0+XG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFtc2cubXNnQ29udGVudC5pc0ZyaWVuZFwiIGNsYXNzPVwibXNnLWl0ZW0tcmlnaHRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlZjI3NGQ7YWxpZ24tc2VsZjogY2VudGVyO1wiIEBjbGljaz1cImZvbGxvd01lKG1zZy5pZCwgbXNnLmZyb21Vc2VySWQpXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wLWZhbnMtYnRuXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+5Zue57KJPC90ZXh0PiBcblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cIm1zZy5tc2dDb250ZW50LmlzRnJpZW5kXCIgY2xhc3M9XCJtc2ctaXRlbS1yaWdodFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NjthbGlnbi1zZWxmOiBjZW50ZXI7XCIgQGNsaWNrPVwiY2FuY2VsRm9sbG93KG1zZy5pZCwgbXNnLmZyb21Vc2VySWQpXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wLWZhbnMtYnRuXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+5LqS5YWzPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDngrnotZ7op4bpopEgLS0+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJtc2cubXNnVHlwZSA9PSAyXCIgY2xhc3M9XCJtc2ctaXRlbS1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZy1pdGVtLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBtb2RlPVwic2NhbGVUb0ZpbGxcIiBjbGFzcz1cInVzZXItZmFjZVwiIDpzcmM9XCJtc2cuZnJvbUZhY2VcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnLWl0ZW0tbWlkZGxlXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlci1uaWNrbmFtZVwiPnt7bXNnLmZyb21OaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCI+54K56LWe5LqG5L2g55qE6KeG6aKRICAgIHt7Z2V0R3JhY2VEYXRlQmVmb3JlTm93KG1zZy5jcmVhdGVUaW1lKX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8aW1hZ2UgXG5cdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiIFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ2bG9nLWNvdmVyXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIlxuXHRcdFx0XHRcdFx0OnNyYz1cIm1zZy5tc2dDb250ZW50LnZsb2dDb3ZlclwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJnb1RvVmxvZyhtc2cubXNnQ29udGVudC52bG9nSWQpXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDor4Torrrop4bpopEgLS0+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJtc2cubXNnVHlwZSA9PSAzXCIgY2xhc3M9XCJtc2ctaXRlbS1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZy1pdGVtLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBtb2RlPVwic2NhbGVUb0ZpbGxcIiBjbGFzcz1cInVzZXItZmFjZVwiIDpzcmM9XCJtc2cuZnJvbUZhY2VcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnLWl0ZW0tbWlkZGxlXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlci1uaWNrbmFtZVwiPnt7bXNnLmZyb21OaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCIgc3R5bGU9XCJmb250LXdlaWdodDogNDAwO3dpZHRoOiAzNjBycHg7bGluZXM6IDI7dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XCI+e3ttc2cubXNnQ29udGVudC5jb21tZW50Q29udGVudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCIgc3R5bGU9XCJmb250LXdlaWdodDogMjAwO1wiPuWPkeihqOS6huivhOiuuiAgICB7e2dldEdyYWNlRGF0ZUJlZm9yZU5vdyhtc2cuY3JlYXRlVGltZSl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGltYWdlXG5cdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiIFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ2bG9nLWNvdmVyXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIlxuXHRcdFx0XHRcdFx0OnNyYz1cIm1zZy5tc2dDb250ZW50LnZsb2dDb3ZlclwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJnb1RvVmxvZyhtc2cubXNnQ29udGVudC52bG9nSWQpXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDlm57lpI3or4TorrogLS0+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJtc2cubXNnVHlwZSA9PSA0XCIgY2xhc3M9XCJtc2ctaXRlbS1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZy1pdGVtLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBtb2RlPVwic2NhbGVUb0ZpbGxcIiBjbGFzcz1cInVzZXItZmFjZVwiIDpzcmM9XCJtc2cuZnJvbUZhY2VcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnLWl0ZW0tbWlkZGxlXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlci1uaWNrbmFtZVwiPnt7bXNnLmZyb21OaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCIgc3R5bGU9XCJmb250LXdlaWdodDogNDAwO3dpZHRoOiAzNjBycHg7bGluZXM6IDI7dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XCI+e3ttc2cubXNnQ29udGVudC5jb21tZW50Q29udGVudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCIgc3R5bGU9XCJmb250LXdlaWdodDogMjAwO1wiPuWbnuWkjeS6huS9oCAgICB7e2dldEdyYWNlRGF0ZUJlZm9yZU5vdyhtc2cuY3JlYXRlVGltZSl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGltYWdlXG5cdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiIFxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ2bG9nLWNvdmVyXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIlxuXHRcdFx0XHRcdFx0OnNyYz1cIm1zZy5tc2dDb250ZW50LnZsb2dDb3ZlclwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJnb1RvVmxvZyhtc2cubXNnQ29udGVudC52bG9nSWQpXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDngrnotZ7or4TorrogLS0+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJtc2cubXNnVHlwZSA9PSA1XCIgY2xhc3M9XCJtc2ctaXRlbS1ib3hcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZy1pdGVtLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSBtb2RlPVwic2NhbGVUb0ZpbGxcIiBjbGFzcz1cInVzZXItZmFjZVwiIDpzcmM9XCJtc2cuZnJvbUZhY2VcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnLWl0ZW0tbWlkZGxlXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlci1uaWNrbmFtZVwiPnt7bXNnLmZyb21OaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1zZy1jb250ZW50XCI+54K56LWe5LqG5L2g55qE6K+E6K66ICAgIHt7Z2V0R3JhY2VEYXRlQmVmb3JlTm93KG1zZy5jcmVhdGVUaW1lKX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8aW1hZ2Vcblx0XHRcdFx0XHRcdG1vZGU9XCJhc3BlY3RGaWxsXCIgXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZsb2ctY292ZXJcIiBcblx0XHRcdFx0XHRcdHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiXG5cdFx0XHRcdFx0XHQ6c3JjPVwibXNnLm1zZ0NvbnRlbnQudmxvZ0NvdmVyXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImdvVG9WbG9nKG1zZy5tc2dDb250ZW50LnZsb2dJZClcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L2Jsb2NrPlxuXHRcdDwvc2Nyb2xsLXZpZXc+XG5cdFx0XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRtc2dMaXN0OiBbXSxcblx0XHRcdFx0cGFnZTogMCxcblx0XHRcdFx0dG90YWxQYWdlOiAwLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25TaG93KCkge1xuXHRcdFx0dGhpcy5wYWdlID0gMDtcblx0XHRcdHRoaXMudG90YWxQYWdlID0gMDtcblx0XHRcdHRoaXMubXNnTGlzdCA9IFtdO1xuXHRcdFx0XG5cdFx0XHR0aGlzLmZldGNoTGlzdCgwKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGdvVG9WbG9nKHZsb2dJZCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi4uL3Zsb2cvdmxvZz92bG9nSWQ9XCIgKyB2bG9nSWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDlhbPms6gv5Y+W5YWz5ZCO55qEbGlzdOmHjeaWsOeKtuaAgeWIt+aWsOiuvue9rlxuXHRcdFx0cmVGcmVzaExpc3QobXNnSWQsIHZsb2dlcklkLCBzdGF0dXMpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG1zZ0xpc3QgPSBtZS5tc2dMaXN0O1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBtc2dMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgbXNnID0gbXNnTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAobXNnLmlkID09IG1zZ0lkKSB7XG5cdFx0XHRcdFx0XHR2YXIgbXNnQ29udGVudCA9IG1zZy5tc2dDb250ZW50O1xuXHRcdFx0XHRcdFx0bXNnQ29udGVudC5pc0ZyaWVuZCA9IHN0YXR1cztcblx0XHRcdFx0XHRcdG1zZ0xpc3Quc3BsaWNlKGksIDEsIG1zZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLm1zZ0xpc3QgPSBtc2dMaXN0O1xuXHRcdFx0fSxcblx0XHRcdGNhbmNlbEZvbGxvdyhtc2dJZCwgdmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2ZhbnMvY2FuY2VsP215SWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2dlcklkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnJlRnJlc2hMaXN0KG1zZ0lkLCB2bG9nZXJJZCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJqdXN0Q2FuY2VsVmxvZ2VySWRcIiwgdmxvZ2VySWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGZvbGxvd01lKG1zZ0lkLCB2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmFucy9mb2xsb3c/bXlJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZ2VySWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUucmVGcmVzaExpc3QobXNnSWQsIHZsb2dlcklkLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIsIHZsb2dlcklkKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGxvYWRNb3JlKCkge1xuXHRcdFx0XHR2YXIgcGVuZGdpblBhZ2UgPSB0aGlzLnBhZ2UgKyAxO1xuXHRcdFx0XHR0aGlzLmZldGNoTGlzdChwZW5kZ2luUGFnZSk7XG5cdFx0XHR9LFxuXHRcdFx0ZmV0Y2hMaXN0KHBhZ2UpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBteVVzZXJJbmZvID0gYXBwLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdC8vIFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0Ly8gXHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdC8vIFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHQvLyBcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL21zZy9saXN0P3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnBhZ2U9XCIgKyBwYWdlICsgXCImcGFnZVNpemU9MTBcIixcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbXNnTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1zZ0xpc3QpO1xuXHRcdFx0XHRcdFx0XHRpZiAobXNnTGlzdCAhPSBudWxsICYmIG1zZ0xpc3QgIT0gdW5kZWZpbmVkICYmIG1zZ0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLm1zZ0xpc3QgPSBtZS5tc2dMaXN0LmNvbmNhdChtc2dMaXN0KTtcblx0XHRcdFx0XHRcdFx0XHRtZS5wYWdlID0gcGFnZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5pe26Ze05pi+56S6IOWImuWImi94eOWwj+aXtuWJjS8uLi5cblx0XHRcdGdldEdyYWNlRGF0ZUJlZm9yZU5vdyhkYXRlVGltZVN0cikge1xuXHRcdFx0XHR2YXIgZGF0ZSA9IGFwcC5kYXRlRm9ybWF0KFwiWVlZWS1tbS1kZFwiLCBuZXcgRGF0ZShkYXRlVGltZVN0cikpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2V0RGF0ZUJlZm9yZU5vdyhkYXRlKTtcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XHJcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldXHJcbiAgfVxyXG5cclxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG5cclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICB2YXIgbXNnID0gJydcclxuXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbXNnXHJcbn1cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNzYWdlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc3NhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE4MWIyN1wiXG4gIH0sXG4gIFwibGluZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzkzYTQxXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwidXNlci1mYWNlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMHJweFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGMUYxRjFcIlxuICB9LFxuICBcIm1zZy1pdGVtLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtc2ctaXRlbS1sZWZ0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJtc2ctaXRlbS1taWRkbGVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJ1c2VyLW5pY2tuYW1lXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH0sXG4gIFwibXNnLWNvbnRlbnRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMzAwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIycnB4XCJcbiAgfSxcbiAgXCJtc2ctaXRlbS1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE2MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBycHhcIixcbiAgICBcIm9wYWNpdHlcIjogMC44LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJvcC1mYW5zLWJ0blwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIlxuICB9LFxuICBcInZsb2ctY292ZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMlwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxUb29sc1xcXFxIQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcVG9vbHNcXFxcSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXFRvb2xzXFxcXEhCdWlsZGVyWC4yLjUuMS4yMDIwMDEwMy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYWN0aXZhdGUtbGluZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=