(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tvcard"] = factory(require("vue"));
	else
		root["tvcard"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/89: /***/function (__unused_webpack_module, exports) {
      var __webpack_unused_export__;
      __webpack_unused_export__ = {
        value: true
      };
      // runtime helper for setting properties on components
      // in a tree-shakable way
      exports.Z = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_820__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_820__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_820__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_820__.o(definition, key) && !__nested_webpack_require_820__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.p = "";
    /******/
  }();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    // EXPORTS
    __nested_webpack_require_820__.d(__webpack_exports__, {
      "default": function () {
        return (/* binding */entry_lib
        );
      }
    });
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    /* eslint-disable no-var */
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var currentScript = window.document.currentScript;
      if (false) { var getCurrentScript; }
      var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
      if (src) {
        __nested_webpack_require_820__.p = src[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */
    var setPublicPath = null;
    ; // CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = __webpack_require__(203);
    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=template&id=f811bba2

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["tv-btn", {
          'tv-btn-rounded': $props.isRounded,
          'tv-btn-full': $props.isFull,
          'tv-btn-outlined': $props.isOutlined,
          'tv-btn-small': $props.isSmall,
          'tv-btn-large': $props.isLarge,
          'tv-btn-success': $props.isSuccess,
          'tv-btn-info': $props.isInfo,
          'tv-btn-warning': $props.isWarning,
          'tv-btn-error': $props.isError,
          'tv-btn-disabled': $props.isDisabled,
          'tv-btn-circle': $props.isCircle,
          'tv-btn-text': $props.isText
        }]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      }, [$props.icon ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
        key: 0,
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["tv-btn-icon", `tv-icon-${$props.icon} tv-icon-position-${$props.iconPosition}`])
      }, null, 2)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), !$props.text ? (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {
        key: 1
      }) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.text ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, {
        key: 2
      }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.text), 1)], 64)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 2);
    }
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=template&id=f811bba2

    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=script&lang=js
    /* harmony default export */
    var TvButtonvue_type_script_lang_js = {
      name: "TvButton",
      props: {
        isRounded: {
          type: Boolean,
          default: false
        },
        isFull: {
          type: Boolean,
          default: false
        },
        isOutlined: {
          type: Boolean,
          default: false
        },
        isSmall: {
          type: Boolean,
          default: false
        },
        isLarge: {
          type: Boolean,
          default: false
        },
        isSuccess: {
          type: Boolean,
          default: false
        },
        icon: {
          type: String,
          default: ""
        },
        isInfo: {
          type: Boolean,
          default: false
        },
        isWarning: {
          type: Boolean,
          default: false
        },
        isError: {
          type: Boolean,
          default: false
        },
        isDisabled: {
          type: Boolean,
          default: false
        },
        isCircle: {
          type: Boolean,
          default: false
        },
        isText: {
          type: Boolean,
          default: false
        },
        text: {
          type: String,
          default: ""
        },
        iconPosition: {
          type: String,
          default: "right"
        }
      },
      methods: {
        handleClick() {
          this.$emit("click");
        }
      }
    };
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=script&lang=js

    // EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __nested_webpack_require_820__(89);
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue

    ;
    const __exports__ = /*#__PURE__*/(0, exportHelper /* default */.Z)(TvButtonvue_type_script_lang_js, [['render', render]]);

    /* harmony default export */
    var TvButton = __exports__;
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

    /* harmony default export */
    var entry_lib = TvButton;
  }();
  module.exports = __webpack_exports__["default"];
  /******/
})();

/***/ }),

/***/ 493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/89: /***/function (__unused_webpack_module, exports) {
      var __webpack_unused_export__;
      __webpack_unused_export__ = {
        value: true
      };
      // runtime helper for setting properties on components
      // in a tree-shakable way
      exports.Z = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_820__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_820__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_820__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_820__.o(definition, key) && !__nested_webpack_require_820__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.p = "";
    /******/
  }();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    // EXPORTS
    __nested_webpack_require_820__.d(__webpack_exports__, {
      "default": function () {
        return (/* binding */entry_lib
        );
      }
    });
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    /* eslint-disable no-var */
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var currentScript = window.document.currentScript;
      if (false) { var getCurrentScript; }
      var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
      if (src) {
        __nested_webpack_require_820__.p = src[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */
    var setPublicPath = null;
    ; // CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = __webpack_require__(203);
    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvLabel.vue?vue&type=template&id=499bd824

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
        class: "tv-label",
        style: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
          backgroundColor: $options.colorWithOpacity,
          border: `2px solid ${$props.color}`
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      }, [!$props.text ? (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {
        key: 0
      }) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.text ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, {
        key: 1
      }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.text), 1)], 64)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.isEdit || $props.isRemove ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
        key: 2,
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["tv-label-icon", `tv-icon-position-${$props.iconPosition} tv-icon-${$props.isEdit ? 'edit' : 'remove'}`])
      }, null, 2)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 4);
    }
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue?vue&type=template&id=499bd824

    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvLabel.vue?vue&type=script&lang=js
    /* harmony default export */
    var TvLabelvue_type_script_lang_js = {
      name: "TvLabel",
      props: {
        color: {
          type: String,
          default: ""
        },
        isEdit: {
          type: Boolean,
          default: false
        },
        isRemove: {
          type: Boolean,
          default: false
        },
        iconPosition: {
          type: String,
          default: "right"
        },
        text: {
          type: String,
          default: ""
        }
      },
      computed: {
        colorWithOpacity() {
          if (!this.color) {
            return "";
          }
          const color = this.color.substring(1);
          return `rgba(${parseInt(color.substring(0, 2), 16)}, ${parseInt(color.substring(2, 4), 16)}, ${parseInt(color.substring(4, 6), 16)}, 0.4)`;
        }
      },
      methods: {
        handleClick() {
          this.$emit("click");
        }
      }
    };
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue?vue&type=script&lang=js

    // EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __nested_webpack_require_820__(89);
    ; // CONCATENATED MODULE: ./src/component/TvLabel.vue

    ;
    const __exports__ = /*#__PURE__*/(0, exportHelper /* default */.Z)(TvLabelvue_type_script_lang_js, [['render', render]]);

    /* harmony default export */
    var TvLabel = __exports__;
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

    /* harmony default export */
    var entry_lib = TvLabel;
  }();
  module.exports = __webpack_exports__["default"];
  /******/
})();

/***/ }),

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvCard.vue?vue&type=template&id=9dc5eba0

const _hoisted_1 = {
  class: "tv-card-body"
};
const _hoisted_2 = {
  class: "tv-card"
};
const _hoisted_3 = {
  class: "tv-card-image"
};
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = {
  class: "tv-card-content"
};
const _hoisted_6 = {
  class: "tv-card-title"
};
const _hoisted_7 = {
  key: 0,
  class: "tv-card-label"
};
const _hoisted_8 = {
  class: "tv-card-description"
};
const _hoisted_9 = {
  class: "tv-card-action"
};
const _hoisted_10 = {
  class: "tv-card-button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tv_label = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("tv-label");
  const _component_tv_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("tv-button");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
    src: $props.image,
    alt: $props.alt
  }, null, 8, _hoisted_4)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [!$props.title ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "title", {
    key: 0
  }) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 1
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.title), 1)], 64))]), $props.labels ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_7, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.labels.slice(0, $props.limitLabels), label => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_tv_label, {
      key: label.id,
      color: label.color,
      onClick: $event => $options.clickLabel(label)
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(label.name), 1)]),
      _: 2
    }, 1032, ["color", "onClick"]);
  }), 128))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [!$props.description ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "description", {
    key: 0
  }) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 1
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.description), 1)], 64))])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_10, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_tv_button, {
    onClick: $options.clickButton,
    isRounded: ""
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [!$props.textButton ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "textButton", {
      key: 0
    }) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
      key: 1
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.textButton), 1)], 64))]),
    _: 3
  }, 8, ["onClick"])])])])]);
}
;// CONCATENATED MODULE: ./src/component/TvCard.vue?vue&type=template&id=9dc5eba0

// EXTERNAL MODULE: ./node_modules/todovue-button/dist/tvbutton.common.js
var tvbutton_common = __webpack_require__(880);
var tvbutton_common_default = /*#__PURE__*/__webpack_require__.n(tvbutton_common);
// EXTERNAL MODULE: ./node_modules/todovue-label/dist/tvlabel.common.js
var tvlabel_common = __webpack_require__(493);
var tvlabel_common_default = /*#__PURE__*/__webpack_require__.n(tvlabel_common);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvCard.vue?vue&type=script&lang=js


/* harmony default export */ var TvCardvue_type_script_lang_js = ({
  name: "TvCard",
  components: {
    TvButton: (tvbutton_common_default()),
    TvLabel: (tvlabel_common_default())
  },
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: false
    },
    limitLabels: {
      type: Number,
      required: false,
      default: 3
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    textButton: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    clickButton() {
      this.$emit("clickButton");
    },
    clickLabel(label) {
      this.$emit("clickLabel", label);
    }
  }
});
;// CONCATENATED MODULE: ./src/component/TvCard.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/component/TvCard.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TvCardvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var TvCard = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (TvCard);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tvcard.umd.js.map