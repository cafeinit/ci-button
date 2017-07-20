define("CIUIButton", [], function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @fileoverview CIButtonBase
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

class ClassName {
  constructor(name) {
    this.name = name

    this.props = {
      name: {
        style: String,
        default: name
      },

      color: {
        style: String,
        default: ''   // primary, secondary
      },

      modifier: {
        type: String,
        default: ''   // border, radius, raised
      },

      size: {
        style: String,
        default: ''   // small, big
      },

      text: {
        style: String,
        default: ''
      },

      icon: {
        style: String,
        default: ''
      }
    },

    this.computed = {
      class_name() {
        let name = [ this.name ]

        if (this.modifier) {
          const modifier = this.modifier.split(' ')
          name.push(modifier.map((item) => {
            return ('ci-button_' + item)
          }))
        }

        if (this.size) {
          name.push('ci-button_' + this.size)
        }

        if (this.color) {
          name.push('ci-button_' + this.color)
        }

        return name
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClassName;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/burning/CafeInit/ci-ui-button/src/vue/CIButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bc24099", Component.options)
  } else {
    hotAPI.reload("data-v-2bc24099", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/burning/CafeInit/ci-ui-button/src/vue/CIButtonBlock.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIButtonBlock.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64739324", Component.options)
  } else {
    hotAPI.reload("data-v-64739324", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/burning/CafeInit/ci-ui-button/src/vue/CIButtonFAB.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIButtonFAB.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4acbc744", Component.options)
  } else {
    hotAPI.reload("data-v-4acbc744", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/burning/CafeInit/ci-ui-button/src/vue/CIButtonFlat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CIButtonFlat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d815519c", Component.options)
  } else {
    hotAPI.reload("data-v-d815519c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__ = __webpack_require__(1);
//
//

/**
 * @fileoverview CIButton
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */


/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__["a" /* default */]('ci-button'));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__ = __webpack_require__(1);
//
//

/**
 * @fileoverview CIButtonBlock
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */


/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__["a" /* default */]('ci-button-block'));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__ = __webpack_require__(1);
//
//

/**
 * @fileoverview CIButtonFAB
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */


/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__["a" /* default */]('ci-button-fab'));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__ = __webpack_require__(1);
//
//

/**
 * @fileoverview CIButtonFlat
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */


/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0__CIButtonBase_js__["a" /* default */]('ci-button-flat'));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.class_name
  }, [(_vm.text) ? _c('span', {
    staticClass: "ci-button__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), (_vm.icon) ? _c('i', {
    staticClass: "ci-button__icon material-icons"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2bc24099", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.class_name
  }, [(_vm.text) ? _c('span', {
    staticClass: "ci-button__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), (_vm.icon) ? _c('i', {
    staticClass: "ci-button__icon material-icons"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4acbc744", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.class_name
  }, [(_vm.text) ? _c('span', {
    staticClass: "ci-button__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), (_vm.icon) ? _c('i', {
    staticClass: "ci-button__icon material-icons"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-64739324", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.class_name
  }, [(_vm.text) ? _c('span', {
    staticClass: "ci-button__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), (_vm.icon) ? _c('i', {
    staticClass: "ci-button__icon material-icons"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d815519c", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButton_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CIButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CIButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CIButtonBlock_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CIButtonBlock_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CIButtonBlock_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CIButtonFAB_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CIButtonFAB_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CIButtonFAB_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CIButtonFlat_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CIButtonFlat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__CIButtonFlat_vue__);
/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */






const CIButtons = {
  CIButton: __WEBPACK_IMPORTED_MODULE_0__CIButton_vue___default.a,
  CIButtonBlock: __WEBPACK_IMPORTED_MODULE_1__CIButtonBlock_vue___default.a,
  CIButtonFAB: __WEBPACK_IMPORTED_MODULE_2__CIButtonFAB_vue___default.a,
  CIButtonFlat: __WEBPACK_IMPORTED_MODULE_3__CIButtonFlat_vue___default.a
}

console.log('CIButtons', CIButtons)

CIButtons.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

/* harmony default export */ __webpack_exports__["default"] = (CIButtons);

function plugin(Vue) {
  for (let key in CIButtons) {
    Vue.component(CIButtons[key].name, CIButtons[key])
  }
}


/***/ })
/******/ ])});;