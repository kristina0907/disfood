"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_LK_Pages_Settings_CompanyEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _omponents_LK_UserLKHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Сomponents/LK/UserLKHeader */ "./resources/js/Сomponents/LK/UserLKHeader.vue");
/* harmony import */ var _Leftsidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leftsidebar */ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_quick_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quick-edit */ "./node_modules/vue-quick-edit/dist/vue-quick-edit.esm.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Router */ "./resources/js/Router/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id'],
  components: {
    Leftsidebar: _Leftsidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserLKHeader: _omponents_LK_UserLKHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    QuickEdit: vue_quick_edit__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {//org_id:this.$route.params.id,
    };
  },
  methods: {
    /**
     *
     * @param org
     */
    storeChanges: function storeChanges(org) {
      axios.post('/set/update/organization', org).then(function (response) {
        if (response.status == 200) {
          console.log(response.status); //router.push({ name: 'settingsprofile', query: { redirect: '/settings/profile' } });
        }
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['user']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'leftsidebar',
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('profile', ['getCompanies'])),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('profile', ['companies'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['user'])),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLoginAuthButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UserLoginAuthButton */ "./resources/js/Сomponents/UserLoginAuthButton.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UserLoginAuthButton: _UserLoginAuthButton__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isExpand: false
    };
  },
  methods: {
    changeDropdown: function changeDropdown() {
      this.isExpand = !this.isExpand;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['user']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'user-login-auth-button',
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['changeCurrentOrganization'])),
  mounted: function mounted() {
    this.$store.dispatch('getUserData');
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['user', 'currentUserOrganization']))
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-user-login-button\r\n{\r\n    font-family: Montserrat;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n    padding: 20px;\n}\n.dropdown-item.dropdown-item-settings.user-login-a\r\n{\r\n    font-family: Montserrat;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n    color: #71BF45;\r\n    cursor: pointer;\n}\nheader .dropdown-menu.show\r\n{\r\n    left:-50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyEdit.vue?vue&type=template&id=19276c9d& */ "./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d&");
/* harmony import */ var _CompanyEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyEdit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leftsidebar.vue?vue&type=template&id=160422eb& */ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb&");
/* harmony import */ var _Leftsidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leftsidebar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Leftsidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Сomponents/LK/UserLKHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Сomponents/LK/UserLKHeader.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLKHeader.vue?vue&type=template&id=6c98f324& */ "./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324&");
/* harmony import */ var _UserLKHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLKHeader.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserLKHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/LK/UserLKHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Сomponents/UserLoginAuthButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Сomponents/UserLoginAuthButton.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLoginAuthButton.vue?vue&type=template&id=488559df& */ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df&");
/* harmony import */ var _UserLoginAuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLoginAuthButton.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserLoginAuthButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserLoginAuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/UserLoginAuthButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanyEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftsidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Leftsidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftsidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLKHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLKHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLKHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginAuthButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginAuthButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyEdit_vue_vue_type_template_id_19276c9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanyEdit.vue?vue&type=template&id=19276c9d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d&");


/***/ }),

/***/ "./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftsidebar_vue_vue_type_template_id_160422eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Leftsidebar.vue?vue&type=template&id=160422eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb&");


/***/ }),

/***/ "./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324&":
/*!************************************************************************************!*\
  !*** ./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLKHeader_vue_vue_type_template_id_6c98f324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLKHeader.vue?vue&type=template&id=6c98f324& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324&");


/***/ }),

/***/ "./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAuthButton_vue_vue_type_template_id_488559df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginAuthButton.vue?vue&type=template&id=488559df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/CompanyEdit.vue?vue&type=template&id=19276c9d& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [_c("UserLKHeader")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "xs-12 col-md-4 left_container" },
        [_c("leftsidebar")],
        1
      ),
      _vm._v(" "),
      _vm.user && _vm.user.user && _vm.user.user.organizations
        ? _c(
            "div",
            { staticClass: "xs-12 col-md-8" },
            _vm._l(_vm.user.user.organizations, function(org) {
              return org.id == _vm.id
                ? _c("div", { staticClass: "right_container" }, [
                    _c("div", { staticClass: "setting_info_company" }, [
                      _c("div", {
                        staticClass: "image_info_item_offer_catalog",
                        style: "background-image: url(" + org.logo + ");"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "div",
                            { staticClass: "name_setting_info_company" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(org.name) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "settingsaccreditation",
                                  params: { id: org.id }
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "setting_accredited_company",
                                  attrs: {
                                    "data-tooltip":
                                      "Загрузите документы и заполните информацию."
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Поставщик • " +
                                      _vm._s(org.status.name) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile_information_block" }, [
                      _c("div", { staticClass: "name_profile_information" }, [
                        _vm._v("Реквизиты компании")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row profile_information_list_row" },
                        [
                          _c("div", { staticClass: "col-xs-12 col-md-5" }, [
                            _c(
                              "table",
                              { staticClass: "profile_information_list" },
                              [
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("ИНН")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.inn,
                                                callback: function($$v) {
                                                  _vm.$set(org, "inn", $$v)
                                                },
                                                expression: "org.inn"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("ОГРН")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.ogrn,
                                                callback: function($$v) {
                                                  _vm.$set(org, "ogrn", $$v)
                                                },
                                                expression: "org.ogrn"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("КПП")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.kpp,
                                                callback: function($$v) {
                                                  _vm.$set(org, "kpp", $$v)
                                                },
                                                expression: "org.kpp"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-xs-12 col-md-7" }, [
                            _c(
                              "table",
                              { staticClass: "profile_information_list" },
                              [
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("Руководитель")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.fio_ceo,
                                                callback: function($$v) {
                                                  _vm.$set(org, "fio_ceo", $$v)
                                                },
                                                expression: "org.fio_ceo"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("Основание")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item value_profile_information_command"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.reason,
                                                callback: function($$v) {
                                                  _vm.$set(org, "reason", $$v)
                                                },
                                                expression: "org.reason"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "profile_information_dop_list" },
                        [
                          _c(
                            "table",
                            { staticClass: "profile_information_list" },
                            [
                              _c(
                                "tr",
                                { staticClass: "profile_information_item" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "title_profile_information_item"
                                    },
                                    [_vm._v("Телефон")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "value_profile_information_item"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "row" },
                                        [
                                          _c("quick-edit", {
                                            staticClass:
                                              "name_profile_information",
                                            attrs: {
                                              emptyText: "Не указано",
                                              buttonCancelText: "Отмена"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.storeChanges(org)
                                              }
                                            },
                                            model: {
                                              value: org.phone,
                                              callback: function($$v) {
                                                _vm.$set(org, "phone", $$v)
                                              },
                                              expression: "org.phone"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "edit_profile_information_item"
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                      stroke: "#66727E",
                                                      "stroke-width": "2",
                                                      "stroke-linecap": "round"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M11.8893 2.94299L16.3788 7.43256",
                                                      stroke: "#66727E",
                                                      "stroke-width": "2"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "profile_information_item" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "title_profile_information_item"
                                    },
                                    [_vm._v("Юр. адрес")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "value_profile_information_item"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "row" },
                                        [
                                          _c("quick-edit", {
                                            staticClass:
                                              "name_profile_information",
                                            attrs: {
                                              emptyText: "Не указано",
                                              buttonCancelText: "Отмена"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.storeChanges(org)
                                              }
                                            },
                                            model: {
                                              value: org.adress,
                                              callback: function($$v) {
                                                _vm.$set(org, "adress", $$v)
                                              },
                                              expression: "org.adress"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "edit_profile_information_item"
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                      stroke: "#66727E",
                                                      "stroke-width": "2",
                                                      "stroke-linecap": "round"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M11.8893 2.94299L16.3788 7.43256",
                                                      stroke: "#66727E",
                                                      "stroke-width": "2"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile_information_block" }, [
                      _c("div", { staticClass: "name_profile_information" }, [
                        _vm._v("Банковские реквизиты")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row profile_information_list_row" },
                        [
                          _c("div", { staticClass: "col-xs-12 col-md-5" }, [
                            _c(
                              "table",
                              { staticClass: "profile_information_list" },
                              [
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("БИК")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.bik,
                                                callback: function($$v) {
                                                  _vm.$set(org, "bik", $$v)
                                                },
                                                expression: "org.bik"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("Банк")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.bank_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    org,
                                                    "bank_name",
                                                    $$v
                                                  )
                                                },
                                                expression: "org.bank_name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-xs-12 col-md-7" }, [
                            _c(
                              "table",
                              { staticClass: "profile_information_list" },
                              [
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("Корр. счет")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.kor_account,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    org,
                                                    "kor_account",
                                                    $$v
                                                  )
                                                },
                                                expression: "org.kor_account"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticClass: "profile_information_item" },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "title_profile_information_item"
                                      },
                                      [_vm._v("Расчет. счет")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "value_profile_information_item"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row" },
                                          [
                                            _c("quick-edit", {
                                              staticClass:
                                                "name_profile_information",
                                              attrs: {
                                                emptyText: "Не указано",
                                                buttonCancelText: "Отмена"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.storeChanges(org)
                                                }
                                              },
                                              model: {
                                                value: org.r_account,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    org,
                                                    "r_account",
                                                    $$v
                                                  )
                                                },
                                                expression: "org.r_account"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "edit_profile_information_item"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "20",
                                                      height: "20",
                                                      viewBox: "0 0 20 20",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.8893 2.94299L16.3788 7.43256",
                                                        stroke: "#66727E",
                                                        "stroke-width": "2"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile_information_block" }, [
                      _c("div", { staticClass: "name_profile_information" }, [
                        _vm._v("Документы")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "description_profile_information" },
                        [_vm._v("Документы в форма PDF, DOC")]
                      ),
                      _vm._v(" "),
                      org.documents.length
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "setting_document_list profile_information_list"
                            },
                            _vm._l(org.documents, function(document) {
                              return _c(
                                "div",
                                {
                                  staticClass: "container_new_document uploaded"
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      staticClass: "input-file",
                                      attrs: {
                                        type: "file",
                                        name: "file",
                                        id: "file"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "btn btn-tertiary js-labelFile",
                                        attrs: { for: "file" }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v("ID " + _vm._s(document.id))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              width: "16",
                                              height: "12",
                                              viewBox: "0 0 16 12",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d:
                                                  "M14.4001 1.70001L5.6001 10.5L1.6001 6.50001",
                                                stroke: "#71BF45",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile_information_block" }, [
                      _c("div", { staticClass: "name_profile_information" }, [
                        _vm._v("Логотип")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "description_profile_information" },
                        [
                          _vm._v(
                            "Изображение в формате PNG, JPG. Не более 2мб, 200х200px"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "item_add_company item_add_company_logo"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "container_new_photo container_edit_logo"
                            },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  staticClass: "input-file",
                                  attrs: {
                                    type: "file",
                                    name: "file",
                                    id: "file"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "btn btn-tertiary js-labelFile",
                                    attrs: { for: "file" }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M1 6C1 4.89543 1.89543 4 3 4L21 4C22.1046 4 23 4.89543 23 6L23 18C23 19.1046 22.1046 20 21 20L3 20C1.89543 20 1 19.1046 1 18L1 6Z",
                                            stroke: "#22262A",
                                            "stroke-width": "2",
                                            "stroke-linejoin": "round"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13",
                                            stroke: "#22262A",
                                            "stroke-width": "2"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("circle", {
                                          attrs: {
                                            cx: "6",
                                            cy: "9",
                                            r: "1",
                                            stroke: "#22262A",
                                            "stroke-width": "2"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "send_moderation" }, [
                      _c("div", { staticClass: "send_moderation_block" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn_send_moderation",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Отправить на модерацию")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "info_text_send_moderation" },
                          [
                            _c("div", { staticClass: "icon_send_moderation" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: {
                                      cx: "12",
                                      cy: "12",
                                      r: "11",
                                      stroke: "#71BF45",
                                      "stroke-width": "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M12 7V12",
                                      stroke: "#71BF45",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M12 16V16.5",
                                      stroke: "#71BF45",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(2, true)
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "delite_company" }, [
                        _vm._v("Удалить компанию")
                      ])
                    ])
                  ])
                : _vm._e()
            }),
            0
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "setting_company_questions" }, [
      _c("div", { staticClass: "title_setting_company_questions" }, [
        _vm._v("Есть вопросы")
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(
          "Один из ваших документов не прошел модерацию. Мы все равно аккредитовали ваш аккаунт. За\n                            уточнениями по документу обратитесь к менеджеру. "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "profile_information_item" }, [
      _c("td", { staticClass: "title_profile_information_item" }, [
        _vm._v("Должность")
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "value_profile_information_item" }, [
        _vm._v("Директор\n                                            "),
        _c("span", { staticClass: "edit_profile_information_item" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("При внесении изменений в данные о компании будет"),
      _c("br"),
      _vm._v("произведена автоматическая повторная модерация")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/Settings/Leftsidebar.vue?vue&type=template&id=160422eb& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "left_container_info" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sidebar_profile_block" },
        [
          _c(
            "svg",
            {
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M3 21.5L3.16547 20.4362C3.37405 19.0954 4.24842 17.9469 5.54504 17.5466C7.13654 17.0553 9.49052 16.5 12 16.5C14.5095 16.5 16.8635 17.0553 18.455 17.5466C19.7516 17.9469 20.6259 19.0954 20.8345 20.4362L21 21.5",
                  stroke: "#71BF45",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z",
                  stroke: "#71BF45",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { path: "/settings/profile" } } }, [
            _c("span", { staticStyle: { color: "#000" } }, [_vm._v("Профиль")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("router-link", { attrs: { to: { path: "/settings/addcompany" } } }, [
        _c(
          "div",
          {
            staticClass: "sidebar_btn_add_company",
            attrs: {
              "data-toggle": "modal",
              "data-target": "#modal_add_company"
            }
          },
          [_vm._v("\n            Добавить компанию\n        ")]
        )
      ]),
      _vm._v(" "),
      _vm.user && _vm.user.user && _vm.user.user.organizations
        ? _c(
            "div",
            { staticClass: "sidebar_company_list" },
            _vm._l(_vm.user.user.organizations, function(org) {
              return _c(
                "div",
                { staticClass: "sidebar_company_item" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: { to: { path: "/settings/editcompany/" + org.id } }
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M9 0H11C12.5977 0 13.9037 1.24892 13.9949 2.82373L14 3V4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V7C0 5.34315 1.34315 4 3 4H6V3C6 1.40232 7.24892 0.0963391 8.82373 0.00509269L9 0H11H9ZM18 14H2V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V14ZM17 6H3C2.44772 6 2 6.44772 2 7V12H18V7C18 6.44772 17.5523 6 17 6ZM11 2H9C8.48716 2 8.06449 2.38604 8.00673 2.88338L8 3V4H12V3C12 2.48716 11.614 2.06449 11.1166 2.00673L11 2Z",
                              fill: "#8898A8"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(org.name))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "sidebar_accreditation_company_item" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { path: "/accreditation/customer" } } },
                        [
                          _vm._v(
                            "\n                    — Аккредитация\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            0
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title_profile_settings" }, [
      _vm._v("Настройки"),
      _c("br"),
      _vm._v("аккаунта")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/UserLKHeader.vue?vue&type=template&id=6c98f324& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "lk-header" }, [
    _c("nav", { staticClass: "navbar navbar-expand-lg pad-bot-0" }, [
      _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
        _c(
          "svg",
          {
            attrs: {
              width: "135",
              height: "34",
              viewBox: "0 0 135 34",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M8.81702 0.421143V8.16382C12.7622 8.16382 16.0435 8.11275 19.5656 8.12187C20.7128 8.12187 21.7124 8.49578 22.5769 9.20529C23.4269 9.92393 24.089 10.9271 24.5705 12.2221C25.0374 13.5098 25.28 15.0273 25.2891 16.7546C25.28 18.5147 25.0374 20.0469 24.5705 21.3546C24.089 22.6624 23.4305 23.6747 22.5769 24.3897C21.7178 25.1138 20.7128 25.4822 19.5656 25.4822L16.4265 25.6227C14.9054 28.158 13.4991 30.3431 11.3943 33.3453L19.6586 33.2286C21.7598 33.2012 23.6695 32.8218 25.3694 32.0375C27.073 31.2587 28.5248 30.1278 29.7396 28.676C30.9525 27.2186 31.8827 25.4768 32.5266 23.4504C33.1577 21.4148 33.4695 19.155 33.4568 16.6616C33.4477 14.2102 33.1194 11.9923 32.4609 10.0042C31.8025 8.01973 30.8741 6.30521 29.6557 4.8807C28.4409 3.45255 26.9836 2.35453 25.2946 1.58847C23.6093 0.824236 21.7306 0.432087 19.6586 0.421143H8.81702Z",
                fill: "#51668F"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d:
                  "M7.78827 14.9162C9.50279 14.9162 10.8945 16.3079 10.8945 18.0169C10.8945 19.7296 9.50279 21.1213 7.78827 21.1213C6.07558 21.1213 4.68391 19.7296 4.68391 18.0169C4.68391 16.3079 6.07558 14.9162 7.78827 14.9162ZM7.72808 10.0371C11.9998 10.0371 15.4598 13.5008 15.4598 17.7688C15.4598 22.0369 11.7627 28.3076 7.72808 33.5789C4.28264 28.7746 0 22.0369 0 17.7688C0 13.5008 3.46551 10.0371 7.72808 10.0371Z",
                fill: "#71BF45"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M51.3167 5.43147L51.8439 5.43694C54.1822 5.43694 54.9391 8.41181 54.9482 10.2795C54.9391 12.1381 54.2478 15.1404 51.9004 15.1404L51.3167 15.1677V5.43147ZM67.3639 18.739V15.1732H65.6512V5.43147H67.1961V1.86565H59.9641V5.43147H61.4816V15.1732H59.7908V18.739H67.3639ZM68.2795 13.4113C68.2558 14.2521 68.3816 15.0182 68.6479 15.6948C68.9197 16.377 69.3118 16.9661 69.8298 17.455C70.3533 17.9456 70.9789 18.3195 71.7158 18.5858C72.449 18.8466 73.2716 18.978 74.1873 18.9816C75.0773 18.978 75.8908 18.8558 76.6149 18.6132C77.3427 18.3669 77.9647 18.0167 78.4863 17.5535C79.0098 17.092 79.4111 16.5412 79.6865 15.8864C79.971 15.2425 80.1115 14.5148 80.1169 13.7013C80.1115 12.8841 80.0093 12.1892 79.8087 11.6055C79.608 11.0255 79.3272 10.5458 78.9678 10.1573C78.6085 9.77065 78.1872 9.45693 77.702 9.21982C77.2223 8.98635 76.6934 8.80396 76.1279 8.67811C75.5589 8.55043 74.9661 8.45741 74.3551 8.39722C73.7057 8.30784 73.2333 8.14004 72.9342 7.89198C72.6369 7.64028 72.491 7.32838 72.4965 6.95447C72.5001 6.46383 72.6497 6.08992 72.9342 5.81997C73.2206 5.54821 73.6127 5.41323 74.1125 5.40958C74.4481 5.41323 74.7326 5.48437 74.9752 5.63211C75.2178 5.78167 75.4002 5.98231 75.526 6.24496C75.6519 6.50578 75.7048 6.80491 75.6811 7.14599H79.5843C79.608 6.31427 79.4913 5.5628 79.2378 4.88611C78.9915 4.21307 78.6231 3.63488 78.1325 3.14424C77.6418 2.66271 77.0527 2.28516 76.3614 2.02433C75.6756 1.76168 74.9004 1.62671 74.0413 1.62671C73.1914 1.62671 72.4253 1.74891 71.7359 1.99515C71.0482 2.2432 70.4518 2.59705 69.9557 3.06398C69.4559 3.5218 69.0729 4.08722 68.803 4.74567C68.5403 5.40411 68.4017 6.15193 68.4017 6.97271C68.4017 7.67858 68.4984 8.3042 68.6899 8.84591C68.8869 9.38215 69.1532 9.85456 69.4942 10.2467C69.8353 10.6425 70.222 10.9708 70.6707 11.2353C71.1139 11.4979 71.59 11.6986 72.0988 11.8427C72.6077 11.9831 73.1257 12.0725 73.6547 12.1144C73.8681 12.1272 74.1125 12.1509 74.3769 12.1892C74.6396 12.2257 74.8968 12.2968 75.1394 12.3898C75.3856 12.492 75.5881 12.6416 75.7467 12.8422C75.9054 13.0428 75.9893 13.3146 75.993 13.6557C75.993 13.9767 75.9145 14.2521 75.7595 14.4764C75.6063 14.7008 75.3911 14.8741 75.1102 14.9908C74.8311 15.1112 74.5083 15.1732 74.1344 15.1732C73.7477 15.1677 73.4121 15.0984 73.1257 14.9489C72.8321 14.7993 72.6132 14.5932 72.4582 14.3324C72.2995 14.0661 72.2302 13.7615 72.2338 13.4113H68.2795ZM85.2623 13.2945H89.5303V9.43322H85.2623V5.69777H90.156V1.86565H81.0927V18.739H85.2623V13.2945ZM94.9274 10.3014C94.9329 9.39127 95.0679 8.60332 95.3378 7.92481C95.6041 7.24813 95.9835 6.72101 96.4687 6.3471C96.9593 5.96954 97.5284 5.77255 98.1813 5.77255C98.8216 5.77255 99.3779 5.96954 99.8484 6.3471C100.321 6.72101 100.686 7.24813 100.946 7.92481C101.204 8.60332 101.339 9.39127 101.339 10.3014C101.339 11.2079 101.204 12.0013 100.946 12.689C100.686 13.3657 100.321 13.8928 99.8484 14.2758C99.3779 14.6588 98.8216 14.8504 98.1813 14.8595C97.5284 14.8504 96.9593 14.6588 96.4687 14.2758C95.9835 13.8928 95.6041 13.3657 95.3378 12.689C95.0679 12.0013 94.9329 11.2079 94.9274 10.3014ZM105.536 10.3014C105.532 8.99547 105.355 7.81355 105.008 6.74837C104.658 5.685 104.158 4.77303 103.515 4.01244C102.865 3.24638 102.09 2.66271 101.195 2.24685C100.292 1.83646 99.2885 1.62671 98.1813 1.62671C97.0706 1.62671 96.0619 1.83646 95.1518 2.24685C94.2453 2.66271 93.4664 3.24638 92.8171 4.01244C92.1678 4.77303 91.6644 5.685 91.3142 6.74837C90.964 7.81355 90.7852 8.99547 90.7816 10.3014C90.7852 11.6092 90.964 12.7948 91.3142 13.8563C91.6644 14.9197 92.1678 15.8298 92.8171 16.5959C93.4664 17.3583 94.2453 17.9456 95.1518 18.3615C96.0619 18.7682 97.0706 18.978 98.1813 18.9816C99.2885 18.978 100.292 18.7682 101.195 18.3615C102.09 17.9456 102.865 17.3583 103.515 16.5959C104.158 15.8298 104.658 14.9197 105.008 13.8563C105.355 12.7948 105.532 11.6092 105.536 10.3014ZM110.491 10.3014C110.495 9.39127 110.63 8.60332 110.896 7.92481C111.168 7.24813 111.545 6.72101 112.031 6.3471C112.518 5.96954 113.087 5.77255 113.745 5.77255C114.38 5.77255 114.936 5.96954 115.412 6.3471C115.883 6.72101 116.248 7.24813 116.508 7.92481C116.766 8.60332 116.897 9.39127 116.901 10.3014C116.897 11.2079 116.766 12.0013 116.508 12.689C116.248 13.3657 115.883 13.8928 115.412 14.2758C114.936 14.6588 114.38 14.8504 113.745 14.8595C113.087 14.8504 112.518 14.6588 112.031 14.2758C111.545 13.8928 111.168 13.3657 110.896 12.689C110.63 12.0013 110.495 11.2079 110.491 10.3014ZM121.094 10.3014C121.094 8.99547 120.917 7.81355 120.572 6.74837C120.222 5.685 119.722 4.77303 119.077 4.01244C118.429 3.24638 117.654 2.66271 116.751 2.24685C115.855 1.83646 114.852 1.62671 113.745 1.62671C112.629 1.62671 111.62 1.83646 110.714 2.24685C109.809 2.66271 109.028 3.24638 108.379 4.01244C107.726 4.77303 107.226 5.685 106.876 6.74837C106.522 7.81355 106.344 8.99547 106.344 10.3014C106.344 11.6092 106.522 12.7948 106.876 13.8563C107.226 14.9197 107.726 15.8298 108.379 16.5959C109.028 17.3583 109.809 17.9456 110.714 18.3615C111.62 18.7682 112.629 18.978 113.745 18.9816C114.852 18.978 115.855 18.7682 116.751 18.3615C117.654 17.9456 118.429 17.3583 119.077 16.5959C119.722 15.8298 120.222 14.9197 120.572 13.8563C120.917 12.7948 121.094 11.6092 121.094 10.3014ZM127.169 5.43147L127.702 5.43694C130.037 5.43694 130.792 8.41181 130.803 10.2795C130.797 12.1381 130.102 15.1404 127.753 15.1404L127.169 15.1677V5.43147ZM123.111 5.45518V15.1732H121.719V18.739C123.784 18.739 125.838 18.7445 127.912 18.739C128.99 18.739 129.971 18.5293 130.845 18.128C131.717 17.7267 132.468 17.1522 133.09 16.4044C134.518 14.6917 135.014 12.4136 135 10.2321C134.991 8.0835 134.473 5.84369 133.043 4.17659C131.62 2.49491 129.672 1.88753 127.523 1.88753L121.887 1.86565V5.43147C122.29 5.43147 122.682 5.45518 123.111 5.45518ZM47.253 5.45518V15.1732H45.8668V18.739C47.926 18.739 49.9798 18.7445 52.0536 18.739C53.137 18.739 54.1183 18.5293 54.9902 18.128C55.8638 17.7267 56.6117 17.1522 57.2373 16.4044C58.6654 14.6917 59.1561 12.4136 59.1415 10.2321C59.1378 8.0835 58.618 5.84369 57.1899 4.17659C55.7653 2.49491 53.8192 1.88753 51.6706 1.88753L46.0346 1.86565V5.43147C46.4358 5.43147 46.8243 5.45518 47.253 5.45518Z",
                fill: "#51668F"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M88.4742 31.5706L88.6621 32.6869C88.3064 32.7617 87.989 32.8 87.7081 32.8C87.2467 32.8 86.8965 32.7252 86.6393 32.5793C86.3912 32.4352 86.2143 32.2473 86.1122 32.0102C86.0082 31.7767 85.9571 31.277 85.9571 30.5255V26.2429H85.0287V25.2634H85.9571V23.4176L87.2084 22.6661V25.2634H88.4742V26.2429H87.2084V30.5948C87.2084 30.9541 87.2321 31.1839 87.274 31.2861C87.3214 31.3882 87.3908 31.4685 87.4947 31.5341C87.5914 31.5889 87.7373 31.6217 87.9234 31.6217C88.0638 31.6217 88.2498 31.6034 88.4742 31.5706ZM78.7015 28.2656H82.8528C82.7962 27.6436 82.6375 27.1731 82.3767 26.8593C81.9754 26.3742 81.4556 26.1316 80.8172 26.1316C80.2372 26.1316 79.752 26.3268 79.3544 26.7153C78.9623 27.0983 78.7434 27.6199 78.7015 28.2656ZM82.8382 30.3048L84.1405 30.4653C83.9362 31.2259 83.5568 31.8187 83.0023 32.2382C82.446 32.654 81.731 32.8638 80.872 32.8638C79.7849 32.8638 78.9203 32.5337 78.2856 31.8661C77.6454 31.1931 77.328 30.2537 77.328 29.0444C77.328 27.7932 77.6509 26.8229 78.2947 26.1316C78.9404 25.4403 79.7758 25.0956 80.8026 25.0956C81.7967 25.0956 82.6102 25.4348 83.2394 26.1134C83.8705 26.79 84.1824 27.7367 84.1824 28.966C84.1824 29.0444 84.1824 29.1575 84.1788 29.3016H78.6321C78.6777 30.1187 78.9112 30.7444 79.3234 31.1785C79.7429 31.6126 80.2573 31.8333 80.8774 31.8333C81.3389 31.8333 81.731 31.7111 82.063 31.4685C82.3895 31.2259 82.6467 30.8374 82.8382 30.3048ZM70.5867 32.7015V22.4326H71.847V28.2893L74.831 25.2634H76.4598L73.6163 28.023L76.7498 32.7015H75.194L72.739 28.8949L71.847 29.754V32.7015H70.5867ZM65.7915 32.7015V25.2634H66.926V26.3924C67.2142 25.8653 67.4805 25.5151 67.7231 25.3509C67.9711 25.1831 68.2429 25.0956 68.5366 25.0956C68.9615 25.0956 69.3902 25.2306 69.8298 25.5005L69.3957 26.6733C69.0874 26.4854 68.7792 26.3979 68.4709 26.3979C68.1955 26.3979 67.9474 26.4818 67.7286 26.6441C67.5097 26.8137 67.3546 27.0417 67.2616 27.3354C67.1212 27.7841 67.0519 28.2747 67.0519 28.8073V32.7015H65.7915ZM62.5741 28.966C62.1163 29.1575 61.4305 29.3162 60.5185 29.4457C60.0005 29.5205 59.632 29.6044 59.4168 29.6938C59.2016 29.7868 59.0393 29.9272 58.9225 30.1042C58.8058 30.2866 58.7456 30.4835 58.7456 30.7079C58.7456 31.0435 58.8751 31.3189 59.1286 31.5433C59.3803 31.7676 59.7542 31.8789 60.2431 31.8789C60.7301 31.8789 61.1587 31.7767 61.5362 31.5615C61.9156 31.3517 62.1947 31.0581 62.3734 30.6878C62.5084 30.4033 62.5741 29.9838 62.5741 29.4329V28.966ZM62.6817 31.7804C62.2148 32.178 61.7661 32.4589 61.332 32.6212C60.9015 32.7854 60.44 32.8638 59.9458 32.8638C59.1286 32.8638 58.4975 32.6686 58.058 32.2674C57.6239 31.8697 57.3995 31.3609 57.3995 30.7407C57.3995 30.3759 57.4834 30.044 57.6531 29.7412C57.8154 29.4421 58.0343 29.1995 58.3006 29.0171C58.5669 28.8347 58.8715 28.6942 59.2071 28.6067C59.4551 28.541 59.829 28.4754 60.327 28.4152C61.3466 28.293 62.0925 28.1489 62.5741 27.9811C62.5832 27.8078 62.5832 27.7002 62.5832 27.6528C62.5832 27.1402 62.461 26.7754 62.2239 26.5693C61.9065 26.2812 61.425 26.1407 60.7902 26.1407C60.1975 26.1407 59.7634 26.2392 59.4788 26.449C59.1925 26.6587 58.9882 27.0235 58.8477 27.5561L57.6202 27.3828C57.7315 26.8593 57.9139 26.4307 58.1711 26.1079C58.4282 25.785 58.8003 25.5297 59.2873 25.3564C59.767 25.1831 60.3324 25.0956 60.9726 25.0956C61.6074 25.0956 62.1199 25.1685 62.5175 25.3181C62.9152 25.4677 63.2088 25.6555 63.3948 25.8835C63.5827 26.1134 63.7122 26.3924 63.787 26.7426C63.829 26.9578 63.849 27.3445 63.849 27.9008V29.5825C63.849 30.759 63.8764 31.4958 63.9329 31.8096C63.984 32.1178 64.0916 32.4169 64.2503 32.7015H62.9334C62.8021 32.4388 62.7182 32.136 62.6817 31.7804ZM46.0016 32.7015V22.4326H48.0481L50.4758 29.7029C50.7001 30.3796 50.8625 30.8848 50.9664 31.2204C51.0832 30.852 51.2637 30.3011 51.5118 29.577L53.9687 22.4326H55.7981V32.7015H54.4867V24.1088L51.5082 32.7015H50.2788L47.3094 23.9647V32.7015H46.0016Z",
                fill: "#71BF45"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "navbarSupportedContent" }
        },
        [
          _c("ul", { staticClass: "navbar-nav mr-auto" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      to: { name: "dashboard" },
                      "active-class": "active"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Статистика\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      to: { name: "my-products" },
                      "active-class": "active"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Мои товары\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      to: { name: "my-orders" },
                      "active-class": "active"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Мои сделки\n                    "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      to: { name: "my-messages" },
                      "active-class": "active"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Сообщения\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("user-login-auth-button")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/UserLoginAuthButton.vue?vue&type=template&id=488559df& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.user == null || _vm.user == false
      ? _c("div", [
          _c("div", { staticClass: "nav-item dropdown" }, [
            _c(
              "div",
              {
                staticClass: "login",
                attrs: {
                  id: "navbarDropdown1",
                  role: "button",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false"
                },
                on: {
                  click: function($event) {
                    return _vm.changeDropdown()
                  }
                }
              },
              [
                _c("div", { staticClass: "login_img" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167",
                          stroke: "#71BF45",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z",
                          stroke: "#71BF45",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "dropdown-menu inset-plus",
                attrs: { "aria-labelledby": "navbarDropdown1" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "div",
                    {
                      staticClass:
                        "dropdown-item dropdown-item-settings user-login-a",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#loginModal"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Войти\n                        "
                      ),
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "50",
                            height: "51",
                            viewBox: "0 0 50 51",
                            fill: "none"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: {
                              y: "0.5",
                              width: "50",
                              height: "50",
                              rx: "25",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "17.6666",
                              y: "24",
                              width: "14.6667",
                              height: "9.66667",
                              rx: "2",
                              stroke: "#71BF45",
                              "stroke-width": "2"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M20.8334 23.8333V20.5C20.8334 19.3949 21.2724 18.3351 22.0538 17.5537C22.8352 16.7723 23.895 16.3333 25 16.3333C26.1051 16.3333 27.1649 16.7723 27.9463 17.5537C28.7277 18.3351 29.1667 19.3949 29.1667 20.5V23.8333",
                              stroke: "#71BF45",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "dropdown-item dropdown-item-settings user-login-a",
                        attrs: { to: { path: "/authorization" } }
                      },
                      [
                        _vm._v(
                          "\n                       Регистрация\n                        "
                        ),
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "50",
                              height: "51",
                              viewBox: "0 0 50 51",
                              fill: "none"
                            }
                          },
                          [
                            _c("rect", {
                              attrs: {
                                y: "0.5",
                                width: "50",
                                height: "50",
                                rx: "25",
                                fill: "white"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.5 33.4167L17.5821 32.8886C17.7907 31.5477 18.6647 30.3964 19.9679 30.0183C21.2773 29.6384 23.0843 29.25 25 29.25C26.9157 29.25 28.7227 29.6384 30.0321 30.0183C31.3353 30.3964 32.2093 31.5477 32.4179 32.8886L32.5 33.4167",
                                stroke: "#71BF45",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M25 25.5C27.3012 25.5 29.1667 23.6345 29.1667 21.3333C29.1667 19.0321 27.3012 17.1667 25 17.1667C22.6989 17.1667 20.8334 19.0321 20.8334 21.3333C20.8334 23.6345 22.6989 25.5 25 25.5Z",
                                stroke: "#71BF45",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.user && _vm.user.user.id
      ? _c("div", { staticClass: "nav-item dropdown" }, [
          _c(
            "div",
            {
              staticClass: "login",
              attrs: {
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false"
              },
              on: {
                click: function($event) {
                  return _vm.changeDropdown()
                }
              }
            },
            [
              _vm.currentUserOrganization
                ? _c(
                    "div",
                    [
                      _vm.currentUserOrganization
                        ? _c("div", { staticClass: "name_company" }, [
                            _vm._v(_vm._s(_vm.currentUserOrganization[0].name))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.user.user.roles, function(role) {
                        return _vm.user.user.roles
                          ? _c("div", { staticClass: "accredited_company" }, [
                              _vm._v(
                                _vm._s(role.name) +
                                  "\n                    · " +
                                  _vm._s(
                                    _vm.currentUserOrganization[0].status.name
                                  ) +
                                  "\n                "
                              )
                            ])
                          : _vm._e()
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "login_img" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167",
                        stroke: "#71BF45",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z",
                        stroke: "#71BF45",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "dropdown-menu dropdown-menu-login",
              attrs: { "aria-labelledby": "navbarDropdown" }
            },
            [
              _c("li", { staticClass: "dropdown-item-login" }, [
                _c(
                  "div",
                  { staticClass: "login" },
                  [
                    _vm._l(_vm.user.user.organizations, function(org, index) {
                      return _vm.user.user.organizations
                        ? _c(
                            "div",
                            { staticClass: "login_info" },
                            [
                              _vm._l(_vm.user.user.organizations, function(
                                org
                              ) {
                                return _vm.user.user.organizations && index == 0
                                  ? _c("div", { staticClass: "name_company" }, [
                                      _vm._v(_vm._s(org.name))
                                    ])
                                  : _vm._e()
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.user.user.roles, function(role) {
                                return _vm.user.user.roles && index == 0
                                  ? _c(
                                      "div",
                                      { staticClass: "accredited_company" },
                                      [
                                        _vm._v(
                                          _vm._s(role.name) +
                                            "\n                            · " +
                                            _vm._s(org.status.name) +
                                            "\n                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "login_img" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167",
                              stroke: "#71BF45",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z",
                              stroke: "#71BF45",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          })
                        ]
                      )
                    ])
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item dropdown-item-settings",
                      attrs: { to: { path: "/dashboard" } }
                    },
                    [
                      _vm._v(
                        "\n                    Личный кабинет\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item dropdown-item-settings",
                      attrs: { to: { path: "/settings/profile" } }
                    },
                    [
                      _vm._v(
                        "\n                    Настройки\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "dropdown_info_text dropdown-item-border" },
                [_vm._v("Переключиться на организацию")]
              ),
              _vm._v(" "),
              _vm._l(_vm.user.user.organizations, function(org, index) {
                return _vm.currentUserOrganization[0].id !== org.id
                  ? _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            return _vm.changeCurrentOrganization(org.id)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "dropdown-item dropdown-item-border" },
                          [
                            _c("div", { staticClass: "item_company_list" }, [
                              _c("div", { staticClass: "name_company_list" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(org.name) +
                                    "\n                    "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "icon_company_list" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167",
                                      stroke: "#71BF45",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z",
                                      stroke: "#71BF45",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm._m(1)
            ],
            2
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "text-user-login-button" }, [
        _vm._v(
          "\n                        Войдите, чтобы делать покупки, и отслеживать заказы.\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-item dropdown-item-exit",
          attrs: {
            href: "/logout",
            onclick:
              "event.preventDefault();\n                           document.getElementById('logout-form').submit();"
          }
        },
        [_vm._v("Выйти")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-quick-edit/dist/vue-quick-edit.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-quick-edit/dist/vue-quick-edit.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "install": () => (/* binding */ y)
/* harmony export */ });
var e=function(e){return e.reduce((function(e,t){return e[t]=t,e}),{})},t=e(["display","edit"]),n=e(["input","rawInput","show","close","invalid"]),i=e(["boolean","checkbox","input","password","radio","select","textarea","url"]),a={name:"QuickEdit",props:{buttonOkText:{type:String,default:"Ok"},buttonCancelText:{type:String,default:"Cancel"},emptyText:{type:String,default:"Empty"},booleanYesText:{type:String,default:"Yes"},booleanNoText:{type:String,default:"No"},type:{type:String,default:i.input},options:{type:Array,default:function(){return[]}},value:{type:[String,Array,Boolean,Number],default:""},placeholderValue:{type:String,default:""},classes:{type:Object,default:function(){return null}},validator:{type:Function,default:null},showButtons:{type:Boolean,default:!0},startOpen:{type:Boolean,default:!1},formatMultiple:{type:Function,default:function(e){return e.join(", ")}}},computed:{isEmpty:function(){return""===this.prettyValue||null===this.prettyValue},isEditing:function(){return t.edit===this.inputState},isEnabled:function(){return!this.$attrs.disabled&&""!==this.$attrs.disabled},isRequired:function(){return this.$attrs.required||""===this.$attrs.required},isMultiple:function(){return this.displayOptions.length&&(this.types.select===this.type||this.types.checkbox===this.type||this.types.radio===this.type)},prettyValue:function(){return this.isMultiple?Array.isArray(this.theValue)?this.formatMultiple(this.theValue.map(this.getDisplayOption)):this.getDisplayOption(this.theValue):this.theValue},displayOptions:function(){var e=this.options[0];return e&&"string"==typeof e?this.options.map((function(e){return{value:e,text:e}})):this.options},displayValue:function(){return this.types.boolean===this.type?this.theValue?this.booleanYesText:this.booleanNoText:this.types.password===this.type?"•".repeat(8):this.isEmpty?this.emptyText:this.prettyValue},classNames:function(){return Object.assign({},this.defaultClasses,this.classes)},tabIndex:function(){return this.$attrs.tabindex||0}},watch:{value:function(e){this.setValue(e)}},data:function(){return{inputState:this.startOpen?t.edit:t.display,theValue:"",inputValue:"",types:i,defaultClasses:{buttonCancel:"vue-quick-edit__button vue-quick-edit__button--cancel",buttonOk:"vue-quick-edit__button vue-quick-edit__button--ok",buttons:"vue-quick-edit__buttons",input:"vue-quick-edit__input",link:"vue-quick-edit__link",isClickable:"vue-quick-edit__link--is-clickable",isEmpty:"vue-quick-edit__link--is-empty",isRequired:"vue-quick-edit__link--is-required",wrapper:"vue-quick-edit"}}},methods:{handleClick:function(){this.isEnabled&&(this.types.boolean===this.type?(this.theValue=!this.theValue,this.$emit(n.input,this.theValue)):this.show())},show:function(e){void 0===e&&(e=!0),this.inputValue=this.theValue,this.inputState=t.edit,this.$emit(n.show,this.theValue),e&&this.focus()},close:function(e){void 0===e&&(e=!0),this.inputState=t.display,this.$emit(n.close,this.theValue),e&&this.focus()},ok:function(e){if(void 0===e&&(e=!0),this.validator){var t=this.validator(this.inputValue);if(t)return void this.$emit(n.invalid,this.theValue,t)}this.theValue=this.inputValue,this.$emit(n.input,this.theValue),this.$emit(n.rawInput,this.inputValue),this.close(e)},focus:function(){var e=this;setTimeout((function(){var t=e.isEditing?"input,select,textarea":"span",n=e.$refs.el&&e.$refs.el.querySelector(t);n&&n.focus()}),0)},setValue:function(e){this.theValue=e,this.inputValue=e},getDisplayOption:function(e){var t=this.displayOptions.find((function(t){return t.value===e}));return t?t.text:""}},created:function(){this.setValue(this.value)}};function u(e,t,n,i,a,u,s,l,o,r){"boolean"!=typeof s&&(o=l,l=s,s=!1);var d,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),i&&(c._scopeId=i),u?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=d):t&&(d=s?function(e){t.call(this,r(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(c.functional){var p=c.render;c.render=function(e,t){return d.call(t),p(e,t)}}else{var y=c.beforeCreate;c.beforeCreate=y?[].concat(y,d):[d]}return n}var s,l="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return function(e,t){return function(e,t){var n=l?t.media||"default":e,i=r[n]||(r[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(a),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var u=i.ids.size-1,o=document.createTextNode(a),d=i.element.childNodes;d[u]&&i.element.removeChild(d[u]),d.length?i.element.insertBefore(o,d[u]):i.element.appendChild(o)}}}(e,t)}}var r={};var d=a,c=function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"el",class:t.classNames.wrapper},[t.isEditing&&t.isEnabled?[t.types.select===t.type?i("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));t.inputValue=e.target.multiple?n:n[0]}}},"select",t.$attrs,!1),[i("option",{directives:[{name:"show",rawName:"v-show",value:t.$attrs.placeholder,expression:"$attrs.placeholder"}],domProps:{value:t.placeholderValue}},[t._v(t._s(t.$attrs.placeholder))]),t._v(" "),t._l(t.displayOptions,(function(e){return i("option",{key:e.value,attrs:{disabled:e.disabled},domProps:{value:e.value}},[t._v(t._s(e.text))])}))],2):t.types.textarea===t.type?i("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex},domProps:{value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.ok(!0):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"textarea",t.$attrs,!1)):t.types.radio===t.type||t.types.checkbox===t.type?t._l(t.displayOptions,(function(e){return[i("label",{key:e.value},[t._v("\n        "+t._s(e.text)+"\n        "),"checkbox"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(t.inputValue)?t._i(t.inputValue,e.value)>-1:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(n){var i=t.inputValue,a=n.target,u=!!a.checked;if(Array.isArray(i)){var s=e.value,l=t._i(i,s);a.checked?l<0&&(t.inputValue=i.concat([s])):l>-1&&(t.inputValue=i.slice(0,l).concat(i.slice(l+1)))}else t.inputValue=u}}}):"radio"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:"radio"},domProps:{value:e.value,checked:t._q(t.inputValue,e.value)},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(n){t.inputValue=e.value}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:t.tabIndex,type:t.type},domProps:{value:e.value,value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])]})):"checkbox"===t.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){var n=t.inputValue,i=e.target,a=!!i.checked;if(Array.isArray(n)){var u=t._i(n,null);i.checked?u<0&&(t.inputValue=n.concat([null])):u>-1&&(t.inputValue=n.slice(0,u).concat(n.slice(u+1)))}else t.inputValue=a}}},"input",t.$attrs,!1)):"radio"===t.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],change:function(e){t.inputValue=null}}},"input",t.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.classNames.input,attrs:{tabindex:t.tabIndex,type:t.type},domProps:{value:t.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ok(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.close(!0)}],input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.showButtons?i("div",{class:t.classNames.buttons},[i("button",{class:t.classNames.buttonOk,attrs:{title:t.buttonOkText},on:{click:function(e){return t.ok(!0)}}},[t._t("button-ok",[t._v(t._s(t.buttonOkText))])],2),t._v(" "),i("button",{class:t.classNames.buttonCancel,attrs:{title:t.buttonCancelText},on:{click:function(e){return t.close(!0)}}},[t._t("button-cancel",[t._v(t._s(t.buttonCancelText))])],2)]):t._e()]:[t._t("prepend"),t._v(" "),i("span",{class:(e={},e[t.classNames.link]=!0,e[t.classNames.isClickable]=t.isEnabled,e[t.classNames.isEmpty]=t.isEmpty,e[t.classNames.isRequired]=t.isRequired&&t.isEmpty,e),attrs:{tabindex:!!t.isEnabled&&t.tabIndex},on:{click:t.handleClick,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)}}},[t._t("default",[t._v(t._s(t.displayValue))],{value:t.displayValue,rawValue:t.theValue})],2),t._v(" "),t._t("append")]],2)};c._withStripped=!0;var p=u({render:c,staticRenderFns:[]},(function(e){e&&e("data-v-63f6990f_0",{source:".vue-quick-edit__link {\n  white-space: pre-wrap;\n  color: #0088cc;\n}\n.vue-quick-edit__link--is-clickable {\n  border-bottom: 1px dashed #0088cc;\n  cursor: pointer;\n}\n.vue-quick-edit__link--is-clickable:hover {\n  color: #2a6496;\n  border-color: #2a6496;\n}\n.vue-quick-edit__link--is-empty {\n  font-style: italic;\n  color: gray;\n}\n.vue-quick-edit__link--is-required {\n  color: #dc3545;\n}\n.vue-quick-edit__input {\n  background-color: #f9f9f9;\n  color: #333;\n  border: 1px solid #ccc;\n  height: 32px;\n  padding: 0;\n}\n.vue-quick-edit__buttons {\n  margin-top: 8px;\n}\n.vue-quick-edit__button {\n  height: 34px;\n  min-width: 34px;\n  border: 1px solid #ccc;\n}\n.vue-quick-edit__button--ok {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #357ebd;\n}\n.vue-quick-edit__button--cancel {\n  color: #333;\n  margin-left: 8px;\n  background-color: #fff;\n}\n[multiple].vue-quick-edit__input,\ntextarea.vue-quick-edit__input {\n  height: unset;\n  min-height: 64px;\n  display: block;\n}\n.vue-quick-edit__input:not(textarea):not([multiple]) + .vue-quick-edit__buttons,\nlabel + .vue-quick-edit__buttons {\n  display: inline;\n  margin-left: 8px;\n}",map:void 0,media:void 0})}),d,void 0,!1,void 0,!1,o,void 0,void 0);function y(e){y.installed||(y.installed=!0,e.component("QuickEdit",p))}var h={install:y},f=null;"undefined"!=typeof window?f=window.Vue:"undefined"!=typeof __webpack_require__.g&&(f=__webpack_require__.g.Vue),f&&f.use(h);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (p);


/***/ })

}]);