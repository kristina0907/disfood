(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Frontpage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _omponents_NavbarCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Сomponents/NavbarCatalog */ "./resources/js/Сomponents/NavbarCatalog.vue");
/* harmony import */ var _omponents_HeaderCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Сomponents/HeaderCatalog */ "./resources/js/Сomponents/HeaderCatalog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NavbarCatalog: _omponents_NavbarCatalog__WEBPACK_IMPORTED_MODULE_0__.default,
    HeaderCatalog: _omponents_HeaderCatalog__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      types: []
    };
  },
  methods: {
    getCats: function getCats() {
      var _this = this;

      axios.get('/get/types/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.types = response.data;
        }
      });
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
    this.getCats();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "navbar-catalog",
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'navbar-catalog',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./resources/js/Pages/Frontpage.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Frontpage.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frontpage.vue?vue&type=template&id=dd256e42& */ "./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42&");
/* harmony import */ var _Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frontpage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__.render,
  _Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Frontpage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Сomponents/HeaderCatalog.vue":
/*!***************************************************!*\
  !*** ./resources/js/Сomponents/HeaderCatalog.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderCatalog.vue?vue&type=template&id=5132101a& */ "./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a&");
/* harmony import */ var _HeaderCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderCatalog.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HeaderCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/HeaderCatalog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Сomponents/NavbarCatalog.vue":
/*!***************************************************!*\
  !*** ./resources/js/Сomponents/NavbarCatalog.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarCatalog.vue?vue&type=template&id=1652be90& */ "./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90&");
/* harmony import */ var _NavbarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarCatalog.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavbarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/NavbarCatalog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frontpage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderCatalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarCatalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_dd256e42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Frontpage.vue?vue&type=template&id=dd256e42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42&");


/***/ }),

/***/ "./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderCatalog_vue_vue_type_template_id_5132101a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderCatalog.vue?vue&type=template&id=5132101a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a&");


/***/ }),

/***/ "./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCatalog_vue_vue_type_template_id_1652be90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarCatalog.vue?vue&type=template&id=1652be90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Frontpage.vue?vue&type=template&id=dd256e42& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("div", { staticClass: "row" }, [_c("HeaderCatalog")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "container_main" }, [
      _c("div", { staticClass: "about_company_block" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-5" }, [
            _c("div", { staticClass: "corn" }, [
              _c("div", { staticClass: "img_corn" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "345",
                      height: "345",
                      viewBox: "0 0 345 345",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M341.826 326.714L294.497 279.384C327.197 231.194 309.449 196.773 287.935 176.013C284.708 172.893 280.083 172.248 276.211 173.861C271.693 161.814 263.948 151.702 255.665 143.743C252.438 140.623 247.813 139.978 243.94 141.591C239.423 129.544 231.678 119.432 223.395 111.472C220.168 108.353 215.543 107.708 211.67 109.321C207.153 97.2737 199.408 87.27 191.125 79.2024C186.93 75.1149 180.153 75.2225 176.066 79.31C167.568 87.8078 161.652 97.0585 157.887 106.74C146.808 94.1542 128.199 86.9473 97.6497 86.9473C91.7335 86.9473 86.893 91.7878 86.893 97.7039C86.893 128.253 94.0999 146.862 106.685 157.941C97.6497 161.491 88.2913 167.085 79.2557 176.12C75.0606 180.315 75.0606 186.984 79.1482 191.179C87.1081 199.462 97.2194 207.207 109.267 211.725C107.653 215.597 108.299 220.223 111.418 223.45C119.378 231.732 129.489 239.477 141.537 243.995C139.923 247.867 140.569 252.493 143.688 255.72C151.648 264.002 161.759 271.747 173.807 276.265C172.193 280.137 172.839 284.763 175.958 287.99C188.544 301.005 205.969 312.622 228.558 312.622C243.403 312.622 260.291 307.567 279.438 294.551L326.767 341.881C328.918 344.032 331.607 345 334.404 345C337.201 345 339.89 343.924 342.041 341.881C346.021 337.793 346.021 331.016 341.826 326.714ZM279.007 263.895L262.227 247.114C274.274 229.366 279.438 213.446 280.191 199.462C295.25 218.609 294.82 239.047 279.007 263.895ZM167.138 247.975C181.121 247.329 197.041 242.166 214.79 230.119L231.463 246.792C206.722 262.711 186.177 263.142 167.138 247.975ZM182.52 197.849L199.193 214.521C174.452 230.334 153.907 230.764 134.868 215.705C148.959 215.059 164.771 209.896 182.52 197.849ZM246.737 231.625L229.957 214.844C242.004 197.096 247.167 181.176 247.92 167.192C262.98 186.339 262.55 206.777 246.737 231.625ZM214.467 199.355L197.687 182.574C209.734 164.826 214.897 148.906 215.65 134.922C230.71 154.069 230.28 174.507 214.467 199.355ZM183.918 103.297C198.332 121.906 198.009 141.806 183.165 165.794C173.054 149.121 168.966 124.703 183.918 103.297ZM151.11 151.272C122.82 149.766 110.773 140.838 108.729 108.891C140.676 110.827 149.604 122.982 151.11 151.272ZM138.525 174.291C147.991 175.044 157.564 178.164 165.739 183.22C141.752 198.171 121.852 198.386 103.243 183.973C116.151 174.937 129.167 173.539 138.525 174.291ZM199.408 280.245C213.392 279.599 229.311 274.436 247.06 262.389L263.733 279.062C238.992 294.981 218.447 295.304 199.408 280.245Z",
                        fill: "#51668F"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M19.1214 4.00967C14.9262 -0.185434 8.14954 -0.185434 3.95443 4.00967C-0.240671 8.20478 -0.240671 14.9815 3.95443 19.1766L57.7378 72.96C59.8892 75.1113 62.5784 76.0794 65.3751 76.0794C68.1718 76.0794 70.861 75.0038 73.0123 72.96C77.2074 68.7649 77.2074 61.9882 73.0123 57.7931L19.1214 4.00967Z",
                        fill: "#51668F"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M133.039 73.071C135.19 75.2224 137.879 76.1905 140.676 76.1905C143.473 76.1905 146.162 75.1148 148.313 73.071C152.508 68.8759 152.508 62.0992 148.313 57.9041L94.5298 4.12069C90.3347 -0.074411 83.558 -0.074411 79.3629 4.12069C75.1678 8.3158 75.1678 15.0925 79.3629 19.2876L133.039 73.071Z",
                        fill: "#51668F"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M19.1253 79.3099C14.9302 75.1148 8.15345 75.1148 3.95834 79.3099C-0.236765 83.5051 -0.236765 90.2818 3.95834 94.4769L57.7417 148.26C59.8931 150.412 62.5823 151.38 65.379 151.38C68.1757 151.38 70.8649 150.304 73.0162 148.26C77.2113 144.065 77.2113 137.288 73.0162 133.093L19.1253 79.3099Z",
                        fill: "#51668F"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "play_company" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "125",
                        height: "125",
                        viewBox: "0 0 125 125",
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
                            "M62.5 0C27.9822 0 0 27.9822 0 62.5C0 97.0178 27.9822 125 62.5 125C97.0178 125 125 97.0178 125 62.5C125 27.9822 97.0178 0 62.5 0ZM53.9443 84.2469L85.6111 65.9641C88.2777 64.4245 88.2777 60.5755 85.6111 59.0359L53.9443 40.7531C51.2777 39.2135 47.9443 41.138 47.9443 44.2172L47.9443 80.7828C47.9443 83.862 51.2777 85.7865 53.9443 84.2469Z",
                          fill: "#71BF45"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "search_company_block" }, [
        _c("div", { staticClass: "title_search_company_block" }, [
          _vm._v("Найти товар")
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm.types.types
          ? _c(
              "div",
              { staticClass: "search_category_company" },
              _vm._l(_vm.types.types, function(type) {
                return _c(
                  "div",
                  { staticClass: "item_search_category_company" },
                  [_vm._v(_vm._s(type.name))]
                )
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "user_registration_company_block" }, [
        _c("div", { staticClass: "title_user_registration_company_block" }, [
          _vm._v("Упрощаем процессы проведения сделок")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12 col-md-6" }, [
            _c("div", { staticClass: "item_user_registration_company" }, [
              _c(
                "div",
                { staticClass: "left_item_user_registration_company" },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "icon_item_user_registration_company" },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            width: "81",
                            height: "81",
                            viewBox: "0 0 81 81",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M37.9666 33.6717L29.7401 19.4229C28.9026 17.9695 28.6764 16.2431 29.1112 14.623C29.546 13.0029 30.6063 11.6218 32.059 10.7831C33.5117 9.94436 35.2379 9.71673 36.8583 10.1502C38.4788 10.5837 39.8608 11.6428 40.7007 13.0947L53.357 35.016",
                              stroke: "#51668F",
                              "stroke-width": "6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M28.2715 42.192L16.2481 21.3668C15.8318 20.647 15.5613 19.8523 15.4523 19.028C15.3433 18.2038 15.3977 17.3661 15.6126 16.5628C15.8274 15.7596 16.1985 15.0066 16.7045 14.3469C17.2106 13.6871 17.8416 13.1335 18.5617 12.7178C19.2818 12.3021 20.0767 12.0323 20.9011 11.924C21.7255 11.8156 22.5631 11.8708 23.3662 12.0863C24.1692 12.3018 24.9219 12.6735 25.5812 13.1801C26.2406 13.6867 26.7936 14.3182 27.2087 15.0386L37.9665 33.6717",
                              stroke: "#51668F",
                              "stroke-width": "6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M48.7245 52.3048C47.0461 49.3978 46.5913 45.9433 47.4601 42.701C48.3289 39.4587 50.45 36.6944 53.357 35.016L50.1929 29.5357C49.7766 28.816 49.5062 28.0213 49.3971 27.197C49.2881 26.3727 49.3425 25.535 49.5574 24.7318C49.7723 23.9286 50.1433 23.1755 50.6493 22.5158C51.1554 21.856 51.7864 21.3025 52.5065 20.8867C53.2266 20.471 54.0215 20.2013 54.8459 20.0929C55.6703 19.9846 56.5079 20.0397 57.311 20.2553C58.114 20.4708 58.8667 20.8425 59.526 21.349C60.1854 21.8556 60.7384 22.4872 61.1535 23.2076L67.4817 34.1682C69.1446 37.047 70.2241 40.2252 70.6586 43.5212C71.0931 46.8173 70.874 50.1666 70.0139 53.378C69.1538 56.5894 67.6696 59.5998 65.6458 62.2375C63.6221 64.8752 61.0986 67.0884 58.2195 68.7506C55.3403 70.4129 52.1619 71.4917 48.8658 71.9255C45.5696 72.3593 42.2203 72.1394 39.0091 71.2786C35.798 70.4178 32.7878 68.9328 30.1506 66.9085C27.5134 64.8842 25.3008 62.3602 23.6391 59.4807L11.6157 38.6555C10.7782 37.2021 10.552 35.4757 10.9868 33.8556C11.4217 32.2356 12.4819 30.8544 13.9346 30.0157C15.3873 29.177 17.1135 28.9494 18.7339 29.3828C20.3544 29.8163 21.7364 30.8754 22.5763 32.3274L28.2716 42.192",
                              stroke: "#51668F",
                              "stroke-width": "6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M55.6875 7.27423C59.0204 7.27379 62.2947 8.15114 65.1808 9.81801C68.067 11.4849 70.4632 13.8825 72.1284 16.7696",
                              stroke: "#51668F",
                              "stroke-width": "6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M21.1788 75.9376C17.7764 73.0852 14.9018 69.657 12.6862 65.8094",
                              stroke: "#51668F",
                              "stroke-width": "6",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(4)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-6" }, [
            _c(
              "div",
              { staticClass: "item_user_registration_company active" },
              [
                _c(
                  "div",
                  { staticClass: "left_item_user_registration_company" },
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "icon_item_user_registration_company" },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "80",
                              height: "80",
                              viewBox: "0 0 80 80",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M80 35.0935C80 22.776 75.3123 17.8889 72.5446 16.0937C72.6194 13.7249 72.3452 9.58586 69.7021 6.44416C67.483 3.80113 64.1917 2.47963 59.9529 2.47963C55.2902 2.47963 51.9989 4.10032 49.68 6.3444C41.5016 -0.711977 31.0292 -1.23556 23.7983 1.63188C17.0162 4.32477 12.8771 9.88504 12.553 16.6173C8.06485 18.5372 4.39952 22.0779 2.20531 26.8902C-1.36027 34.7445 -0.138499 44.1197 5.24728 51.0015C3.60163 53.2207 2.50452 56.113 2.50452 59.9529C2.50452 64.2166 3.85097 67.483 6.46906 69.7022C9.61077 72.3452 13.7748 72.6195 16.1186 72.5447C17.9139 75.2875 22.801 80 35.1184 80C42.3493 80 47.411 77.5315 50.8519 74.6392C51.9241 74.7638 52.9713 74.8386 54.0186 74.8386C60.1025 74.8386 65.4135 72.794 69.2783 68.8794C73.7166 64.3912 75.5866 58.008 74.689 50.827C77.5315 47.3611 80 42.3244 80 35.0935ZM59.9529 7.46647C62.6458 7.46647 64.6405 8.18954 65.8872 9.63573C68.231 12.4034 67.483 17.0661 67.483 17.116C67.2835 18.3128 68.0316 19.5097 69.1785 19.9086C69.4279 19.9834 75.0131 22.0779 75.0131 35.0935C75.0131 42.4491 71.8714 46.9373 68.9791 49.5304C69.5775 47.2614 69.9266 44.9176 69.9266 42.4741C69.9266 40.4544 69.7021 38.5095 69.2783 36.6394C69.5027 36.3901 69.6772 36.1158 69.8019 35.7917L72.2953 28.3114C72.7192 27.0148 72.021 25.5936 70.7244 25.1698C69.4029 24.7209 68.0066 25.444 67.5827 26.7405L66.6602 29.4833C65.0145 26.4413 62.7954 23.7236 60.1773 21.5044L62.2967 13.0517C62.6208 11.7053 61.8229 10.3588 60.4765 10.0347C59.1301 9.68561 57.7836 10.5084 57.4595 11.8548L55.8138 18.4873C54.0185 17.49 52.0986 16.717 50.1039 16.1435C50.5527 13.301 52.4976 7.46647 59.9529 7.46647ZM42.499 64.9148C32.65 64.9148 24.297 58.5316 21.28 49.7299C22.0529 49.306 22.6015 48.5081 22.6015 47.5856C22.6015 44.3441 23.8981 42.5987 25.0949 42.5987C26.4663 42.5987 27.5883 41.4767 27.5883 40.1053C27.5883 38.7339 26.4663 37.6119 25.0949 37.6119C23.3495 37.6119 21.6041 38.3849 20.2327 39.8809C21.255 31.0542 27.4138 23.7983 35.6421 21.1304C35.293 22.3023 35.0686 23.6238 35.0686 25.1448C35.0686 26.5162 36.1906 27.6382 37.562 27.6382C38.9334 27.6382 40.0554 26.5162 40.0554 25.1448C40.0554 21.9033 41.352 20.158 42.5488 20.158C42.6984 20.158 42.8231 20.1081 42.9478 20.0832C55.1157 20.3325 64.9397 30.2812 64.9397 42.499C64.9397 54.8414 54.8663 64.9148 42.499 64.9148ZM6.74334 28.9099C9.26169 23.3745 14.0989 20.1081 20.0333 19.9336C21.4046 19.8837 22.5017 18.7367 22.4519 17.3653C22.402 15.994 21.2301 14.8969 19.8837 14.9467C19.1356 14.9717 18.4375 15.0714 17.7144 15.1711C18.4873 11.1817 21.28 7.99006 25.6434 6.2696C31.3284 4.02552 40.1053 4.47432 46.7378 10.3837C45.9149 12.0044 45.4163 13.6751 45.142 15.1961C44.2693 15.1213 43.3966 15.0714 42.499 15.0714C40.6289 15.0714 38.7838 15.2708 37.0134 15.6199L34.9439 9.38637C34.52 8.08979 33.0988 7.36669 31.7773 7.81551C30.4807 8.23939 29.7576 9.66066 30.2064 10.9572L32.251 17.0661C25.3442 19.8588 19.8338 25.3692 17.0661 32.3009L10.9323 30.2563C9.61077 29.8075 8.21445 30.5306 7.76564 31.8271C7.34176 33.1237 8.03991 34.545 9.33649 34.9689L15.6199 37.0633C15.2708 38.8087 15.0714 40.629 15.0714 42.4741C15.0714 43.3717 15.1212 44.2444 15.196 45.1171C13.2262 45.4662 10.9572 46.2391 8.91261 47.5606C4.87327 42.1748 4.00058 34.9689 6.74334 28.9099ZM19.9585 69.2284C19.6094 68.0066 18.3876 67.2337 17.1409 67.4581C17.091 67.4581 12.4283 68.1812 9.68557 65.8872C8.21445 64.6405 7.49136 62.6957 7.49136 59.9529C7.49136 52.4726 13.2761 50.5527 16.1435 50.054C16.7419 52.0986 17.5398 54.0684 18.5621 55.8886L11.9546 57.5343C10.6081 57.8584 9.81024 59.2299 10.1344 60.5514C10.4087 61.6734 11.431 62.4463 12.553 62.4463C12.7525 62.4463 12.9519 62.4214 13.1514 62.3715L21.5792 60.2521C23.7734 62.8452 26.4413 65.0145 29.4584 66.6352L26.7156 67.5579C25.419 67.9818 24.6959 69.4029 25.1448 70.6995C25.4938 71.7468 26.4663 72.3951 27.5135 72.3951C27.7629 72.3951 28.0371 72.3452 28.3114 72.2704L35.7917 69.777C36.1158 69.6772 36.415 69.5027 36.6644 69.2783C38.5344 69.6773 40.4793 69.9017 42.499 69.9017C44.9425 69.9017 47.3113 69.5526 49.5553 68.9542C46.9622 71.8465 42.4491 74.9882 35.1184 74.9882C22.1277 74.9882 20.0333 69.403 19.9585 69.2284ZM65.7127 65.3885C63.0697 68.0565 59.4542 69.5526 55.2154 69.8019C56.6117 67.7075 57.26 66.0618 57.3099 65.8623C57.3597 65.7376 57.3348 65.613 57.3597 65.5132C60.6261 63.3938 63.3938 60.6261 65.5132 57.3597C65.6379 57.3348 65.7626 57.3348 65.8872 57.2849C66.0867 57.2101 67.7573 56.5619 69.9016 55.1406C69.7021 59.2298 68.2809 62.7704 65.7127 65.3885Z",
                                fill: "#51668F"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M50.0292 35.0935C50.0292 31.8521 51.3258 30.1067 52.5226 30.1067C53.894 30.1067 55.016 28.9847 55.016 27.6133C55.016 26.2419 53.894 25.1199 52.5226 25.1199C48.8074 25.1199 45.0424 28.5359 45.0424 35.0935C45.0424 36.4649 46.1644 37.587 47.5358 37.587C48.9072 37.587 50.0292 36.4899 50.0292 35.0935Z",
                                fill: "#51668F"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M35.0686 42.5738C35.0686 39.3324 36.3652 37.587 37.562 37.587C38.9334 37.587 40.0555 36.465 40.0555 35.0936C40.0555 33.7222 38.9334 32.6002 37.562 32.6002C33.8468 32.6002 30.0818 36.0161 30.0818 42.5738C30.0818 43.9452 31.2038 45.0673 32.5752 45.0673C33.9466 45.0673 35.0686 43.9701 35.0686 42.5738Z",
                                fill: "#51668F"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M40.0556 47.5606C36.3404 47.5606 32.5753 50.9766 32.5753 57.5343C32.5753 58.9057 33.6974 60.0277 35.0687 60.0277C36.4401 60.0277 37.5622 58.9057 37.5622 57.5343C37.5622 54.2928 38.8587 52.5474 40.0556 52.5474C41.427 52.5474 42.549 51.4254 42.549 50.054C42.549 48.6826 41.427 47.5606 40.0556 47.5606Z",
                                fill: "#51668F"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M55.016 42.5739C51.3008 42.5739 47.5358 45.9898 47.5358 52.5475C47.5358 53.9189 48.6578 55.0409 50.0292 55.0409C51.4006 55.0409 52.5226 53.9189 52.5226 52.5475C52.5226 49.3061 53.8192 47.5607 55.016 47.5607C56.3874 47.5607 57.5094 46.4387 57.5094 45.0673C57.5094 43.6959 56.3874 42.5739 55.016 42.5739Z",
                                fill: "#51668F"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(6)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("div", { staticClass: "advantages_company_block" }, [
        _c("div", { staticClass: "title_advantages_company_block" }, [
          _vm._v("Плюс ко всему: дополнительные возможности")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12 col-md-3" }, [
            _c("div", { staticClass: "item_advantages_company" }, [
              _c("div", { staticClass: "img_item_advantages_company" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "88",
                      height: "81",
                      viewBox: "0 0 88 81",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: {
                        x: "31",
                        width: "57",
                        height: "57",
                        rx: "28.5",
                        fill: "#CAE7BA"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M75.5 38.5H55.5V26H68.8074C69.3071 26 69.7953 26.1497 70.209 26.4298C70.6227 26.7099 70.943 27.1076 71.1286 27.5715L75.5 38.5Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M5.5 46H55.5",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M59.25 68.5C63.3921 68.5 66.75 65.1421 66.75 61C66.75 56.8579 63.3921 53.5 59.25 53.5C55.1079 53.5 51.75 56.8579 51.75 61C51.75 65.1421 55.1079 68.5 59.25 68.5Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-miterlimit": "10"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M21.75 68.5C25.8921 68.5 29.25 65.1421 29.25 61C29.25 56.8579 25.8921 53.5 21.75 53.5C17.6079 53.5 14.25 56.8579 14.25 61C14.25 65.1421 17.6079 68.5 21.75 68.5Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-miterlimit": "10"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M51.75 61H29.25",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M14.25 61H8C7.33696 61 6.70107 60.7366 6.23223 60.2678C5.76339 59.7989 5.5 59.163 5.5 58.5V23.5C5.5 22.837 5.76339 22.2011 6.23223 21.7322C6.70107 21.2634 7.33696 21 8 21H55.5V54.5047",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M55.5 54.5047V38.5H75.5V58.5C75.5 59.163 75.2366 59.7989 74.7678 60.2678C74.2989 60.7366 73.663 61 73 61H66.75",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(8)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3" }, [
            _c("div", { staticClass: "item_advantages_company" }, [
              _c("div", { staticClass: "img_item_advantages_company" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "88",
                      height: "81",
                      viewBox: "0 0 88 81",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: {
                        x: "31",
                        width: "57",
                        height: "57",
                        rx: "28.5",
                        fill: "#CAE7BA"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M68.0024 23.5H13.0024C11.6217 23.5 10.5024 24.6193 10.5024 26V66C10.5024 67.3807 11.6217 68.5 13.0024 68.5H68.0024C69.3832 68.5 70.5024 67.3807 70.5024 66V26C70.5024 24.6193 69.3832 23.5 68.0024 23.5Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M53 23.5V18.5C53 17.1739 52.4732 15.9021 51.5355 14.9645C50.5979 14.0268 49.3261 13.5 48 13.5H33C31.6739 13.5 30.4021 14.0268 29.4645 14.9645C28.5268 15.9021 28 17.1739 28 18.5V23.5",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M70.5026 40.4714C61.3847 45.7466 51.0339 48.5164 40.5 48.4998C29.968 48.5164 19.6188 45.7475 10.5021 40.4741",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M36.75 38.5H44.25",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text_item_advantages_company" }, [
                _vm._v("Подготавливаем экспортную документацию")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3" }, [
            _c("div", { staticClass: "item_advantages_company" }, [
              _c("div", { staticClass: "img_item_advantages_company" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "88",
                      height: "81",
                      viewBox: "0 0 88 81",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: {
                        x: "31",
                        width: "57",
                        height: "57",
                        rx: "28.5",
                        fill: "#CAE7BA"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M13 34.3333V16C13 15.337 13.2634 14.7011 13.7322 14.2322C14.2011 13.7634 14.837 13.5 15.5 13.5H65.5C66.163 13.5 66.7989 13.7634 67.2678 14.2322C67.7366 14.7011 68 15.337 68 16V34.3333C68 60.5881 45.7169 69.2865 41.2676 70.7616C40.7702 70.9328 40.2298 70.9328 39.7324 70.7616C35.2831 69.2865 13 60.5881 13 34.3333Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M54.25 31L35.9166 48.5L26.75 39.75",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(9)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3" }, [
            _c("div", { staticClass: "item_advantages_company" }, [
              _c("div", { staticClass: "img_item_advantages_company" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "88",
                      height: "81",
                      viewBox: "0 0 88 81",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: {
                        x: "31",
                        width: "57",
                        height: "57",
                        rx: "28.5",
                        fill: "#CAE7BA"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M40.5 41V11",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M66.4807 26L14.5192 56",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M40.5 11C45.7561 11.001 50.9197 12.3828 55.4736 15.0072C60.0276 17.6316 63.8122 21.4063 66.4484 25.9535C69.0845 30.5007 70.4798 35.6606 70.4944 40.9167C70.509 46.1727 69.1424 51.3403 66.5316 55.9021C63.9207 60.4638 60.1571 64.2595 55.6178 66.9092C51.0785 69.5588 45.9227 70.9693 40.6667 70.9995C35.4107 71.0297 30.2391 69.6784 25.6696 67.0811C21.1002 64.4838 17.2933 60.7315 14.6302 56.2",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M27.9982 34.1706L10.6663 44.177C10.5553 43.1216 10.4998 42.0611 10.5 40.9998C10.4991 35.2549 12.1475 29.6304 15.2493 24.7948C18.3511 19.9591 22.7759 16.1156 27.998 13.7209L27.9982 34.1706Z",
                        stroke: "#51668F",
                        "stroke-width": "6",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(10)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "become_partner_company_block" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(11),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 col-md-3 icon_become_partner_company" },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "125",
                    height: "114",
                    viewBox: "0 0 125 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("rect", {
                    attrs: {
                      x: "-3.80847",
                      y: "69.2122",
                      width: "23.3106",
                      height: "62.6471",
                      rx: "10",
                      transform: "rotate(-45 -3.80847 69.2122)",
                      fill: "#F0F2F4"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    attrs: {
                      x: "110.219",
                      y: "10.8149",
                      width: "23.3106",
                      height: "121.922",
                      rx: "10",
                      transform: "rotate(45 110.219 10.8149)",
                      fill: "#F0F2F4"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(12)
        ])
      ]),
      _vm._v(" "),
      _vm._m(13),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _c("div", { staticClass: "questions_company_block" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-xs-12 col-md-4 padding_item_questions_company"
            },
            [
              _c("div", { staticClass: "item_questions_company" }, [
                _c("div", { staticClass: "icon_item_questions_company" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "26",
                        height: "24",
                        viewBox: "0 0 26 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M7.00098 2C3.68727 2 1.00098 4.68629 1.00098 8V12C1.00098 12.2403 1.01511 12.4774 1.04259 12.7104C1.01489 12.802 1 12.8993 1 13V21.8258C1 22.6801 2.00212 23.141 2.65079 22.585L7.43827 18.4815C7.80075 18.1708 8.26243 18 8.73985 18H19.001C22.3147 18 25.001 15.3137 25.001 12V8C25.001 4.68629 22.3147 2 19.001 2H7.00098Z",
                          stroke: "#51668F",
                          "stroke-width": "2"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title_item_questions_company" }, [
                  _vm._v("Возникли трудности?")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text_item_questions_company" }, [
                  _vm._v(
                    "Свяжитесь с нами по телефону. Мы обязательно поможем\n                           "
                  )
                ]),
                _vm._v(" "),
                _vm._m(15)
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-xs-12 col-md-4 padding_item_questions_company"
            },
            [
              _c("div", { staticClass: "item_questions_company" }, [
                _c("div", { staticClass: "icon_item_questions_company" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "26",
                        height: "24",
                        viewBox: "0 0 26 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z",
                          stroke: "#51668F",
                          "stroke-width": "2",
                          "stroke-linejoin": "round"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z",
                          stroke: "#51668F",
                          "stroke-width": "2",
                          "stroke-linejoin": "round"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title_item_questions_company" }, [
                  _vm._v("Есть вопросы и предложения?")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text_item_questions_company" }, [
                  _vm._v(
                    "Напишите нам на почту и мы рассмотрим ваше обращение\n                           "
                  )
                ]),
                _vm._v(" "),
                _vm._m(16)
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-xs-12 col-md-4 padding_item_questions_company"
            },
            [
              _c("div", { staticClass: "item_questions_company" }, [
                _c("div", { staticClass: "icon_item_questions_company" }, [
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
                          stroke: "#51668F",
                          "stroke-width": "2"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M12 7V12",
                          stroke: "#51668F",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M12 16V16.5",
                          stroke: "#51668F",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title_item_questions_company" }, [
                  _vm._v("Нашли ошибку?")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text_item_questions_company" }, [
                  _vm._v(
                    "Неверные данные, неправильное отображение, другие\n                               моменты"
                  )
                ]),
                _vm._v(" "),
                _vm._m(17)
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-md-7" }, [
      _c("div", { staticClass: "abot_company" }, [
        _c("h1", { staticClass: "title_about_company" }, [
          _vm._v("Продовольственная"),
          _c("br"),
          _vm._v("торговая платформа B2B")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "description_about_company" }, [
        _vm._v(
          "\n                           Disfood Market – это профессиональная платформа, в которой можно купить и продать продукты\n                           питания\n                           оптом, получить рекомендацию по цене и продвинуть свой товар\n                       "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn_about_company" }, [
        _c("a", { staticClass: "btn_register", attrs: { href: "" } }, [
          _vm._v("Зарегистрироваться")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn_learn_more", attrs: { href: "" } }, [
          _vm._v("Узнать подробнее")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("\n                                       О компании"),
      _c("br"),
      _vm._v("и платформе\n                                   ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container_btn_search__company" }, [
      _c("div", { staticClass: "search_header" }, [
        _c("input", {
          attrs: { type: "text", placeholder: "Введите название продукта" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn_search_company" }, [
        _vm._v(
          "\n                       Найти товары и поставщиков\n                   "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_item_user_registration_company" }, [
        _vm._v("Покупателям")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text_item_user_registration_company" }, [
        _vm._v(
          "\n                                       Лучшая цена на рынке, без посредников"
        ),
        _c("br"),
        _vm._v(
          "и сложных цепочек оформления сделки\n                                   "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "list_user_registration_company" }, [
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Проверенные\n                                                   поставщики и товары"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Все поставщики представленые"
                ),
                _c("br"),
                _vm._v(
                  "на платформе проверены,\n                                                   аккредитованы"
                ),
                _c("br"),
                _vm._v(
                  "и имеют необходимую документацию\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Сделка за 24 часа\n                                               "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Платформа выступает гарантом для обеих сторон, ведением сделки\n                                                   занимается менеджер Disfood. За статусом сделки можно следить"
                ),
                _c("br"),
                _vm._v(
                  "в\n                                                   личном кабинете\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Полное сопровождение\n                                                   сделки"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Подготовим необходимую экспортную документацию. Оформим логистику до\n                                                   вашего склада\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Прямая связь с\n                                                   поддержкой"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Менеджеры Disfood Market всегда помогут разобраться в любый вопросах,\n                                                   проконсультируют по товарам и услугам\n                                               "
                )
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn_user_registration_company" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("Зарегистрироваться")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_item_user_registration_company" }, [
        _vm._v("Поставщикам")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text_item_user_registration_company" }, [
        _vm._v(
          "\n                                       Обеспечим время проведения"
        ),
        _c("br"),
        _vm._v("сделки до 24 часов\n                                   ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "list_user_registration_company" }, [
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Удобное управление\n                                                   сделками"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Все заявки и сделки хранятся в вашем личном кабинете. Оперативно\n                                                   управляйте вашим складом и обновлением цен\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Сделка за 24 часа\n                                               "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Платформа выступает гарантом для обеих сторон, ведением сделки\n                                                   занимается менеджер Disfood. За статусом сделки можно следить"
                ),
                _c("br"),
                _vm._v(
                  "в\n                                                   личном кабинете\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Полное сопровождение\n                                                   сделки"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   Подготовим необходимую экспортную документацию. Оформим логистику до\n                                                   склада вашего заказчика\n                                               "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_user_registration_company" }, [
          _c("div", {
            staticClass: "icon_item_list_user_registration_company"
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "title_item_list_user_registration_company" },
              [
                _vm._v(
                  "Бесплатное размещение\n                                                   в каталоге"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text_item_list_user_registration_company" },
              [
                _vm._v(
                  "\n                                                   После акредитации ваши товары появятся в общем каталоге. Принимайте\n                                                   заявки и продвигайте товары\n                                               "
                )
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn_user_registration_company" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("Стать поставщиком")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "delivery_company_block" }, [
      _c("div", {
        staticClass: "img_car",
        staticStyle: { "background-image": "url('./images/car.png')" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "title_delivery_company" }, [
            _vm._v("Доставляем товары"),
            _c("br"),
            _vm._v("по всей России ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "type_delivery_company" }, [
            _vm._v("ЖД, Авто, Самовывоз")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description_delivery_company" }, [
            _c("p", [
              _vm._v(
                "Мгновенный расчет доставки до вашего склада. Менеджеры Disfood оформят сопроводительную\n                               документацию и логистику."
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Либо вы можете самостоятельно забрать заказ со склада поставщика"
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_item_advantages_company" }, [
      _vm._v("Занимаемся логистикой"),
      _c("br"),
      _vm._v("до вашего склада")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_item_advantages_company" }, [
      _vm._v("Прогнозируем"),
      _c("br"),
      _vm._v("цены на товары")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_item_advantages_company" }, [
      _vm._v("Выступаем гарантом"),
      _c("br"),
      _vm._v("для обеих сторон")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-md-4" }, [
      _c("div", { staticClass: "title_become_partner_company" }, [
        _vm._v("Ответственно отбираем лучших поставщиков товаров")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text_become_partner_company" }, [
        _vm._v(
          "\n                           Чтобы стать нашим поставщиком необходимо пройти регистрацию и соответствовать нашим требованиям:\n                       "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn_user_registration_company" }, [
        _c("a", { attrs: { href: "" } }, [_vm._v("Стать поставщиком")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-md-5" }, [
      _c("div", { staticClass: "list_become_partner_company" }, [
        _c("ul", [
          _c("li", [_vm._v("Вы являетесь производителем")]),
          _vm._v(" "),
          _c("li", [_vm._v("Готовность к интеграции учетных систем")]),
          _vm._v(" "),
          _c("li", [_vm._v("Актуализация цен и остатков")]),
          _vm._v(" "),
          _c("li", [_vm._v("Соответствие качества отгружаемой продукции")]),
          _vm._v(" "),
          _c("li", [_vm._v("Достаточное наличие производственных мощностей")]),
          _vm._v(" "),
          _c("li", [_vm._v('Отсутствие "негативной" истории отгрузок')]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "После заполнения формы регистрации и соответствующей проверки к Вам приедет наш\n                                   представитель для подписания договора"
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "partners_company_block" }, [
      _c("div", { staticClass: "title_partners_company_block" }, [
        _vm._v("Наши партнеры")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-3 padding_item_partners_company" },
          [
            _c("div", { staticClass: "item_partners_company" }, [
              _c("div", {
                staticClass: "img_item_partners_company",
                staticStyle: { "background-image": "url(./images/offer.png)" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "name_item_partners_company" }, [
                _vm._v("Агро Альянс")
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "all_partners_company_block" }, [
        _c("a", { attrs: { href: "" } }, [_vm._v("Показать всех")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "news_company_block" }, [
      _c("div", { staticClass: "header_news_company_block" }, [
        _c("div", { staticClass: "title_news_company_block" }, [
          _vm._v("Новости")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "all_news_company_block" }, [
          _c("a", { attrs: { href: "" } }, [_vm._v("Смотреть все")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "list_news" }, [
        _c("div", { staticClass: "item_list_news_company" }, [
          _c("div", {
            staticClass: "img_item_list_news_company",
            staticStyle: { "background-image": "url(./images/news.png)" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title_item_list_news_company" }, [
            _vm._v("Цены на молочные продукты увеличат в ближайшее время")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category_news_item_list_news_company" }, [
            _vm._v(
              "\n                           Новости • Индустрия\n                       "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_news_company" }, [
          _c("div", {
            staticClass: "img_item_list_news_company",
            staticStyle: { "background-image": "url(./images/news.png)" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title_item_list_news_company" }, [
            _vm._v("Цены на молочные продукты увеличат в ближайшее время")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category_news_item_list_news_company" }, [
            _vm._v(
              "\n                           Новости • Индустрия\n                       "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_news_company" }, [
          _c("div", {
            staticClass: "img_item_list_news_company",
            staticStyle: { "background-image": "url(./images/news.png)" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title_item_list_news_company" }, [
            _vm._v("Цены на молочные продукты увеличат в ближайшее время")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category_news_item_list_news_company" }, [
            _vm._v(
              "\n                           Новости • Индустрия\n                       "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_list_news_company" }, [
          _c("div", {
            staticClass: "img_item_list_news_company",
            staticStyle: { "background-image": "url(./images/news.png)" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title_item_list_news_company" }, [
            _vm._v("Цены на молочные продукты увеличат в ближайшее время")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category_news_item_list_news_company" }, [
            _vm._v(
              "\n                           Новости • Индустрия\n                       "
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "link_item_questions_company" }, [
      _c("a", { attrs: { href: "tel:+8 800 550 71 90" } }, [
        _vm._v("8 800 550 71 90")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "link_item_questions_company" }, [
      _c("a", { attrs: { href: "mailto:info@disfood.ru" } }, [
        _vm._v("info@disfood.ru")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "link_item_questions_company" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("Сообщить об ошибке")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/HeaderCatalog.vue?vue&type=template&id=5132101a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header_catalog" }, [
    _c("nav", { staticClass: "navbar navbar-expand-lg" }, [
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
                    attrs: { to: { name: "tosuppliers" } }
                  },
                  [_vm._v("Как покупать")]
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
                  { staticClass: "nav-link", attrs: { to: { name: "about" } } },
                  [_vm._v("Стать поставциком")]
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
                  { staticClass: "nav-link", attrs: { to: { name: "about" } } },
                  [_vm._v("О компании")]
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
                    attrs: { to: { name: "delivery" } }
                  },
                  [_vm._v("Блог")]
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
                    attrs: { to: { name: "contacts" } }
                  },
                  [_vm._v("Контакты")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right_menu_block" }, [
            _c("div", { staticClass: "adress_header" }, [
              _c("span", [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "30",
                      height: "31",
                      viewBox: "0 0 30 31",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z",
                        stroke: "#71BF45",
                        "stroke-width": "2"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle", {
                      attrs: {
                        cx: "15",
                        cy: "13.75",
                        r: "3.75",
                        stroke: "#71BF45",
                        "stroke-width": "2"
                      }
                    })
                  ]
                )
              ]),
              _vm._v("\n                    Екатеринбург")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "phone_header" }, [
              _vm._v("8 800 550 71 90")
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container_header_catalog" }, [
      _c("div", { staticClass: "header_catalog_items" }, [
        _c(
          "div",
          { staticClass: "container_btn_search_header" },
          [
            _c("router-link", { attrs: { to: { name: "catalog" } } }, [
              _c("div", { staticClass: "catalog_menu" }, [
                _c("span", [
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
                          d: "M4 7H20",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M4 17H16",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(
                  "\n                        Каталог\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "container_header_catalog_btn_info" }, [
          _c(
            "div",
            { staticClass: "catalog_header_btn_info" },
            [
              _c("router-link", { attrs: { to: { name: "authorization" } } }, [
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
                        stroke: "#22262A",
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
                        stroke: "#22262A",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    })
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "catalog_header_btn_info" }, [
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
                      "M13 4.5C13 5.05228 13.4477 5.5 14 5.5C14.5523 5.5 15 5.05228 15 4.5H13ZM5.42857 16C5.98086 16 6.42857 15.5523 6.42857 15C6.42857 14.4477 5.98086 14 5.42857 14V16ZM5 2H11V0H5V2ZM3 12V4H1V12H3ZM13 4V4.5H15V4H13ZM5.42857 14H5V16H5.42857V14ZM1 12C1 14.2091 2.79086 16 5 16V14C3.89543 14 3 13.1046 3 12H1ZM11 2C12.1046 2 13 2.89543 13 4H15C15 1.79086 13.2091 0 11 0V2ZM5 0C2.79086 0 1 1.79086 1 4H3C3 2.89543 3.89543 2 5 2V0Z",
                    fill: "#22262A"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "10",
                    y: "9",
                    width: "12",
                    height: "14",
                    rx: "3",
                    stroke: "#22262A",
                    "stroke-width": "2"
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "catalog_header_btn_info" }, [
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
                      "M1 2H3.39566C4.33305 2 5.14468 2.65106 5.34803 3.56614L6 6.5M6 6.5L7.10424 12.5733C7.62296 15.4263 10.1077 17.5 13.0075 17.5H15.7106C18.512 17.5 20.9406 15.5615 21.5614 12.8297L22.5835 8.33243C22.7969 7.39379 22.0834 6.5 21.1208 6.5H6Z",
                    stroke: "#22262A",
                    "stroke-width": "2",
                    "stroke-linecap": "round"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    cx: "8.5",
                    cy: "21",
                    r: "1",
                    stroke: "#22262A",
                    "stroke-width": "2"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    cx: "20.5",
                    cy: "21",
                    r: "1",
                    stroke: "#22262A",
                    "stroke-width": "2"
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "catalog_header_btn_info" }, [
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
                    stroke: "#22262A",
                    "stroke-width": "2"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M12 7V13L14.5 15.5",
                    stroke: "#22262A",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]
            )
          ])
        ])
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search_header" }, [
      _c("input", { attrs: { type: "text", placeholder: "Найти товар" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/NavbarCatalog.vue?vue&type=template&id=1652be90& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "header_container_btn" }, [
    _c(
      "div",
      { staticClass: "logo" },
      [
        _c("router-link", { attrs: { to: { name: "frontpage" } } }, [
          _c(
            "svg",
            {
              attrs: {
                width: "212",
                height: "60",
                viewBox: "0 0 212 60",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M57.8734 38.9931V30.866H53.9739V8.67774H57.4892V0.549071H41.011V8.67774H44.4718V30.866H40.6283V38.9931H57.8734ZM59.9577 26.8546C59.9108 28.771 60.1952 30.509 60.7972 32.0549C61.4113 33.6113 62.3098 34.9515 63.4896 36.0662C64.68 37.181 66.1094 38.0326 67.7824 38.6377C69.4598 39.2336 71.3339 39.5361 73.4122 39.5437C75.4542 39.5361 77.3041 39.2608 78.9513 38.7027C80.6061 38.1461 82.0264 37.3353 83.2169 36.2871C84.4057 35.2419 85.3209 33.9789 85.9531 32.495C86.5945 31.0202 86.9166 29.3624 86.9227 27.5156C86.9166 25.6581 86.6867 24.0653 86.2269 22.7373C85.7686 21.4213 85.1288 20.3171 84.3165 19.4353C83.4906 18.5519 82.5286 17.8395 81.4305 17.301C80.3338 16.7701 79.1344 16.3557 77.8441 16.0652C76.5433 15.7794 75.1956 15.5706 73.7964 15.4345C72.3232 15.2288 71.2522 14.8461 70.567 14.2804C69.8879 13.7116 69.5597 12.9992 69.5687 12.1401C69.5763 11.0313 69.9166 10.1722 70.567 9.56109C71.2159 8.94547 72.1114 8.63539 73.2489 8.62026C74.0097 8.63539 74.6556 8.79724 75.2168 9.13454C75.7658 9.47488 76.1863 9.93168 76.4707 10.5292C76.7535 11.1251 76.873 11.7982 76.8171 12.5772H85.7141C85.761 10.691 85.5039 8.97118 84.9291 7.43137C84.3589 5.89306 83.5163 4.5771 82.4106 3.46989C81.2959 2.36267 79.9466 1.502 78.372 0.906043C76.808 0.313107 75.0413 0.0121007 73.084 0C71.1509 0 69.4039 0.282855 67.8293 0.839489C66.2622 1.40974 64.9084 2.21443 63.774 3.27627C62.6395 4.33358 61.7698 5.6102 61.1542 7.11372C60.5507 8.61119 60.2421 10.3083 60.2315 12.193C60.2421 13.7964 60.4599 15.2106 60.9016 16.4494C61.3402 17.6731 61.9528 18.7456 62.7227 19.644C63.5002 20.5501 64.3881 21.2928 65.4015 21.8933C66.4195 22.4892 67.4995 22.9506 68.6627 23.2803C69.8153 23.5979 70.9966 23.8067 72.2067 23.8914C72.6998 23.9307 73.2489 23.9852 73.8524 24.0653C74.4453 24.1546 75.0307 24.3134 75.5904 24.5312C76.15 24.7596 76.6083 25.1 76.9729 25.5568C77.3314 26.0136 77.5235 26.6292 77.5325 27.4082C77.5325 28.1388 77.3495 28.7635 76.9986 29.2823C76.6431 29.7935 76.1576 30.1883 75.5268 30.4545C74.887 30.7298 74.1534 30.866 73.3033 30.866C72.4139 30.8584 71.6455 30.692 70.9966 30.3547C70.3356 30.0144 69.8349 29.5485 69.4765 28.945C69.1195 28.349 68.9531 27.6517 68.9637 26.8546H59.9577ZM98.6438 26.5823H108.364V17.7972H98.6438V9.28127H109.796V0.549071H89.1432V38.9931H98.6438V26.5823ZM120.661 19.7711C120.673 17.7034 120.988 15.8989 121.599 14.3621C122.21 12.8177 123.071 11.6167 124.182 10.7576C125.29 9.89689 126.59 9.45521 128.08 9.44765C129.532 9.45521 130.8 9.89689 131.875 10.7576C132.948 11.6167 133.781 12.8177 134.377 14.3621C134.963 15.8989 135.268 17.7034 135.271 19.7711C135.268 21.8388 134.963 23.6433 134.377 25.1998C133.781 26.7487 132.948 27.9542 131.875 28.8255C130.8 29.6922 129.532 30.1339 128.08 30.1535C126.59 30.1339 125.29 29.6922 124.182 28.8255C123.071 27.9542 122.21 26.7487 121.599 25.1998C120.988 23.6433 120.673 21.8388 120.661 19.7711ZM144.828 19.7711C144.817 16.7973 144.422 14.0989 143.631 11.6787C142.834 9.25404 141.7 7.17876 140.228 5.44079C138.753 3.69829 136.986 2.36267 134.938 1.42032C132.886 0.488567 130.606 0.0121007 128.08 0C125.545 0.0121007 123.245 0.488567 121.177 1.42032C119.117 2.36267 117.339 3.69829 115.86 5.44079C114.378 7.17876 113.231 9.25404 112.437 11.6787C111.632 14.0989 111.229 16.7973 111.218 19.7711C111.229 22.7448 111.632 25.4478 112.437 27.865C113.231 30.2881 114.378 32.368 115.86 34.1059C117.339 35.8454 119.117 37.181 121.177 38.1264C123.245 39.0551 125.545 39.5361 128.08 39.5437C130.606 39.5361 132.886 39.0551 134.938 38.1264C136.986 37.181 138.753 35.8454 140.228 34.1059C141.7 32.368 142.834 30.2881 143.631 27.865C144.422 25.4478 144.817 22.7448 144.828 19.7711ZM156.116 19.7711C156.124 17.7034 156.434 15.8989 157.049 14.3621C157.661 12.8177 158.521 11.6167 159.628 10.7576C160.739 9.89689 162.036 9.45521 163.528 9.44765C164.983 9.45521 166.246 9.89689 167.326 10.7576C168.398 11.6167 169.232 12.8177 169.828 14.3621C170.412 15.8989 170.714 17.7034 170.722 19.7711C170.714 21.8388 170.412 23.6433 169.828 25.1998C169.232 26.7487 168.398 27.9542 167.326 28.8255C166.246 29.6922 164.983 30.1339 163.528 30.1535C162.036 30.1339 160.739 29.6922 159.628 28.8255C158.521 27.9542 157.661 26.7487 157.049 25.1998C156.434 23.6433 156.124 21.8388 156.116 19.7711ZM179.809 14.5678C179.628 13.5649 179.38 12.5999 179.082 11.6787C178.285 9.25404 177.15 7.17876 175.674 5.44079C174.204 3.69829 172.434 2.36267 170.384 1.42032C168.336 0.488567 166.055 0.0121007 163.528 0C160.994 0.0121007 158.698 0.488567 156.627 1.42032C154.567 2.36267 152.79 3.69829 151.306 5.44079C149.827 7.17876 148.685 9.25404 147.888 11.6787C147.078 14.0989 146.679 16.7973 146.667 19.7711C146.679 22.7448 147.078 25.4478 147.888 27.865C148.685 30.2881 149.827 32.368 151.306 34.1059C152.79 35.8454 154.567 37.181 156.627 38.1264C158.698 39.0551 160.994 39.5361 163.528 39.5437C166.055 39.5361 168.336 39.0551 170.384 38.1264C172.434 37.181 174.204 35.8454 175.674 34.1059C177.022 32.5192 178.087 30.6451 178.869 28.4836C176.352 27.322 174.602 24.7203 174.602 21.7042C174.602 18.319 176.801 15.4663 179.809 14.5678ZM183.137 0.603524V9.66093C187.752 9.66093 191.597 9.60345 195.713 9.61101C197.058 9.61101 198.227 10.0527 199.237 10.8816C200.232 11.7256 201.01 12.8979 201.573 14.409C202.119 15.9185 202.402 17.6928 202.412 19.7166C202.402 21.7768 202.119 23.5707 201.573 25.1C201.01 26.6292 200.236 27.8105 199.237 28.65C198.23 29.494 197.058 29.9327 195.713 29.9327L192.043 30.0945C190.261 33.0607 188.616 35.617 186.153 39.1292L195.822 38.9931C198.284 38.9583 200.518 38.5166 202.506 37.603C204.499 36.6849 206.203 35.3689 207.62 33.6688C209.042 31.9656 210.129 29.9206 210.881 27.5504C211.624 25.1695 211.988 22.524 211.969 19.6047C211.961 16.7429 211.574 14.1412 210.807 11.8179C210.037 9.49152 208.948 7.48431 207.52 5.82348C206.103 4.14753 204.398 2.86485 202.42 1.96637C200.446 1.07243 198.249 0.615625 195.822 0.603524H183.137ZM10.3145 0.603524V9.66093C14.9324 9.66093 18.7759 9.60345 22.8932 9.61101C24.2379 9.61101 25.4101 10.0527 26.4175 10.8816C27.4143 11.7256 28.1903 12.8979 28.7499 14.409C29.3005 15.9185 29.5834 17.6928 29.5924 19.7166C29.5834 21.7768 29.3005 23.5707 28.7499 25.1C28.1903 26.6292 27.4158 27.8105 26.4175 28.65C25.4101 29.494 24.2379 29.9327 22.8932 29.9327L19.2206 30.0945C17.4403 33.0607 15.7946 35.617 13.329 39.1292L23.0006 38.9931C25.4615 38.9583 27.6972 38.5166 29.6847 37.603C31.6783 36.6849 33.3815 35.3689 34.8003 33.6688C36.2191 31.9656 37.3082 29.9206 38.0614 27.5504C38.8011 25.1695 39.1671 22.524 39.149 19.6047C39.1414 16.7429 38.7542 14.1412 37.9858 11.8179C37.2174 9.49152 36.1268 7.48431 34.7005 5.82348C33.2832 4.14753 31.5785 2.86485 29.603 1.96637C27.623 1.07243 25.4283 0.615625 23.0006 0.603524H10.3145Z",
                  fill: "#51668F"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d:
                    "M9.11488 17.5612C11.1191 17.5612 12.7451 19.1902 12.7451 21.1959C12.7451 23.2016 11.1191 24.8292 9.11488 24.8292C7.10767 24.8292 5.48163 23.2016 5.48163 21.1959C5.48163 19.1902 7.10767 17.5612 9.11488 17.5612ZM9.0453 11.8572C14.0399 11.8572 18.0876 15.9064 18.0876 20.8979C18.0876 25.894 13.7646 33.2346 9.0453 39.4075C5.0097 33.7852 0 25.894 0 20.8979C0 15.9064 4.04921 11.8572 9.0453 11.8572Z",
                  fill: "#71BE45"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d:
                    "M181.935 17.5612C183.936 17.5612 185.564 19.1902 185.564 21.1959C185.564 23.2016 183.936 24.8292 181.935 24.8292C179.925 24.8292 178.299 23.2016 178.299 21.1959C178.299 19.1902 179.925 17.5612 181.935 17.5612ZM181.866 11.8572C186.86 11.8572 190.906 15.9064 190.906 20.8979C190.906 25.894 186.585 33.2346 181.866 39.4075C177.83 33.7852 172.82 25.894 172.82 20.8979C172.82 15.9064 176.87 11.8572 181.866 11.8572Z",
                  fill: "#71BE45"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M181.169 54.0524C180.751 54.2187 180.131 54.3655 179.307 54.4865C178.833 54.5485 178.505 54.6256 178.314 54.7103C178.118 54.7966 177.967 54.9191 177.865 55.0824C177.753 55.2443 177.703 55.4273 177.703 55.6239C177.703 55.9265 177.82 56.1821 178.048 56.3833C178.277 56.5844 178.617 56.6858 179.059 56.6858C179.496 56.6858 179.888 56.592 180.228 56.3954C180.573 56.2048 180.824 55.9416 180.983 55.6088C181.107 55.3532 181.169 54.9735 181.169 54.4698V54.0524ZM181.261 56.5965C180.836 56.9565 180.434 57.2076 180.042 57.3589C179.652 57.5026 179.228 57.5767 178.788 57.5767C178.044 57.5767 177.478 57.4012 177.08 57.0382C176.685 56.6782 176.487 56.2169 176.487 55.6587C176.487 55.3229 176.561 55.025 176.711 54.7527C176.859 54.4789 177.056 54.2611 177.301 54.0947C177.545 53.9359 177.82 53.8088 178.121 53.7226C178.346 53.6651 178.684 53.6077 179.131 53.5532C180.054 53.4443 180.732 53.3127 181.169 53.1584C181.169 53.0026 181.173 52.9058 181.173 52.8635C181.173 52.3991 181.067 52.0694 180.851 51.8833C180.558 51.6247 180.127 51.4931 179.555 51.4931C179.016 51.4931 178.622 51.5853 178.361 51.7759C178.11 51.965 177.92 52.2978 177.796 52.7742L176.685 52.6199C176.785 52.1465 176.952 51.7593 177.185 51.4689C177.413 51.1709 177.75 50.947 178.19 50.7882C178.629 50.6294 179.136 50.5522 179.717 50.5522C180.29 50.5522 180.754 50.6218 181.119 50.7534C181.474 50.888 181.737 51.0589 181.908 51.2647C182.079 51.4689 182.194 51.7245 182.261 52.0391C182.3 52.2357 182.315 52.5851 182.315 53.0888V54.6105C182.315 55.6708 182.346 56.3409 182.392 56.6192C182.439 56.9021 182.536 57.1698 182.678 57.4285H181.491C181.374 57.1925 181.293 56.9172 181.261 56.5965ZM174.78 54.9629L175.899 55.1127C175.779 55.8796 175.465 56.4876 174.958 56.9263C174.454 57.3634 173.834 57.5767 173.099 57.5767C172.181 57.5767 171.441 57.2817 170.88 56.6782C170.322 56.0777 170.041 55.214 170.041 54.0917C170.041 53.3626 170.16 52.7319 170.404 52.1858C170.644 51.6398 171.009 51.2299 171.503 50.9621C171.992 50.6868 172.53 50.5522 173.104 50.5522C173.834 50.5522 174.435 50.7337 174.896 51.1058C175.365 51.4779 175.658 51.9998 175.79 52.6774L174.683 52.8514C174.574 52.3991 174.392 52.0588 174.125 51.8304C173.858 51.602 173.533 51.4885 173.149 51.4885C172.576 51.4885 172.111 51.6942 171.751 52.1087C171.391 52.5156 171.21 53.169 171.21 54.0569C171.21 54.9629 171.387 55.6209 171.732 56.0308C172.081 56.4377 172.533 56.6434 173.087 56.6434C173.536 56.6434 173.908 56.5028 174.206 56.232C174.509 55.9537 174.698 55.5347 174.78 54.9629ZM164.039 53.4216H167.794C167.74 52.8559 167.596 52.4294 167.365 52.1465C167 51.7094 166.528 51.4885 165.951 51.4885C165.432 51.4885 164.987 51.6625 164.63 52.0149C164.275 52.3643 164.076 52.8332 164.039 53.4216ZM167.782 55.2639L168.956 55.4031C168.773 56.1004 168.43 56.6313 167.926 57.011C167.422 57.3907 166.784 57.5767 166.002 57.5767C165.022 57.5767 164.24 57.2772 163.662 56.6737C163.086 56.0656 162.798 55.214 162.798 54.1219C162.798 52.9875 163.089 52.1117 163.67 51.4885C164.255 50.8653 165.01 50.5522 165.94 50.5522C166.837 50.5522 167.574 50.8578 168.142 51.4689C168.713 52.0815 168.998 52.9451 168.998 54.0524C168.998 54.1219 168.994 54.2187 168.991 54.3579H163.98C164.014 55.0945 164.228 55.6633 164.6 56.0505C164.982 56.4453 165.447 56.6434 166.01 56.6434C166.424 56.6434 166.784 56.5345 167.077 56.3137C167.372 56.0928 167.608 55.745 167.782 55.2639ZM156.026 50.7035H157.165V53.5018H160.325V50.7035H161.463V57.4285H160.325V54.4471H157.165V57.4285H156.026V50.7035ZM151.561 54.3897V53.4988C152.045 53.4912 152.37 53.4761 152.546 53.4413C152.723 53.405 152.882 53.3051 153.041 53.1342C153.199 52.9648 153.277 52.7546 153.277 52.5035C153.277 52.1934 153.177 51.9423 152.971 51.7638C152.765 51.5823 152.502 51.4885 152.174 51.4885C151.531 51.4885 151.085 51.8682 150.826 52.6199L149.746 52.446C150.079 51.183 150.896 50.5522 152.189 50.5522C152.909 50.5522 153.467 50.7458 153.874 51.1406C154.279 51.5309 154.485 51.9998 154.485 52.5428C154.485 53.0919 154.222 53.529 153.688 53.8588C154.024 54.0403 154.279 54.2732 154.446 54.5485C154.617 54.8268 154.701 55.1596 154.701 55.5513C154.701 56.1518 154.482 56.6434 154.04 57.014C153.602 57.3907 152.986 57.5767 152.201 57.5767C150.67 57.5767 149.784 56.8991 149.533 55.5347L150.605 55.3063C150.702 55.7374 150.9 56.0702 151.198 56.3016C151.496 56.5421 151.837 56.6586 152.219 56.6586C152.599 56.6586 152.921 56.5497 153.177 56.3364C153.432 56.1201 153.559 55.8418 153.559 55.4999C153.559 55.2413 153.482 55.0129 153.323 54.8192C153.157 54.6211 152.986 54.5061 152.809 54.4547C152.626 54.4093 152.301 54.3851 151.821 54.3851C151.782 54.3851 151.697 54.3851 151.561 54.3897ZM142.829 50.7035H143.968V55.8297L147.128 50.7035H148.356V57.4285H147.217V52.3325L144.057 57.4285H142.829V50.7035ZM140.27 54.0403C140.27 53.3399 140.103 52.7667 139.771 52.3174C139.441 51.8727 138.976 51.6473 138.373 51.6473C137.745 51.6473 137.258 51.8833 136.913 52.3567C136.576 52.8241 136.402 53.4594 136.402 54.2505C136.402 55.0325 136.591 55.6285 136.968 56.0384C137.347 56.4528 137.812 56.6586 138.365 56.6586C138.931 56.6586 139.391 56.4226 139.74 55.9416C140.096 55.4621 140.27 54.8268 140.27 54.0403ZM140.329 47.9233L141.332 47.9339C141.289 48.3877 141.183 48.7008 141.034 48.8793C140.878 49.0578 140.681 49.1727 140.436 49.2196C140.193 49.2741 139.721 49.2968 139.008 49.2968C138.067 49.2968 137.428 49.3906 137.087 49.5721C136.742 49.7506 136.499 50.041 136.348 50.4403C136.196 50.8426 136.115 51.3539 136.097 51.9801C136.382 51.5551 136.72 51.2329 137.107 51.0211C137.487 50.8079 137.924 50.7035 138.4 50.7035C139.287 50.7035 140.014 51.0045 140.592 51.6126C141.168 52.2206 141.459 53.0374 141.459 54.072C141.459 54.8571 141.316 55.4999 141.021 56.0036C140.731 56.5028 140.386 56.89 139.987 57.1698C139.589 57.4451 139.043 57.5767 138.361 57.5767C137.559 57.5767 136.941 57.3982 136.499 57.0307C136.053 56.6661 135.712 56.2018 135.481 55.6285C135.24 55.0597 135.121 54.0675 135.121 52.6547C135.121 50.8774 135.422 49.6764 136.022 49.0653C136.623 48.4497 137.556 48.1396 138.803 48.1396C139.582 48.1396 140.019 48.1245 140.123 48.1003C140.232 48.0776 140.297 48.0156 140.329 47.9233ZM123.643 56.4876H124.84C125.56 56.4876 126.079 56.3984 126.384 56.2244C126.69 56.0505 126.845 55.7722 126.845 55.3955C126.845 55.1021 126.729 54.8419 126.505 54.6181C126.275 54.3897 125.773 54.2732 124.991 54.2732H123.643V56.4876ZM122.5 50.7035H123.643V53.3324H125.088C126.029 53.3324 126.752 53.5184 127.263 53.8784C127.771 54.246 128.022 54.7451 128.022 55.388C128.022 55.9492 127.809 56.4302 127.392 56.8295C126.965 57.2318 126.284 57.4285 125.351 57.4285H122.5V50.7035ZM128.878 50.7035H130.02V57.4285H128.878V50.7035ZM115.065 50.7035H116.207V56.4876H119.364V50.7035H120.503V56.4876H121.234V59.3343H120.297V57.4285H115.065V50.7035ZM107.805 50.7035H108.944V55.8297L112.104 50.7035H113.33V57.4285H112.193V52.3325L109.033 57.4285H107.805V50.7035ZM100.65 50.7035H101.792V53.5018H104.952V50.7035H106.09V57.4285H104.952V54.4471H101.792V57.4285H100.65V50.7035ZM97.7266 54.0524C97.3121 54.2187 96.6935 54.3655 95.8676 54.4865C95.3972 54.5485 95.0644 54.6256 94.8723 54.7103C94.6772 54.7966 94.5259 54.9191 94.4231 55.0824C94.3172 55.2443 94.2612 55.4273 94.2612 55.6239C94.2612 55.9265 94.3792 56.1821 94.6091 56.3833C94.8375 56.5844 95.1748 56.6858 95.6165 56.6858C96.0552 56.6858 96.4469 56.592 96.7903 56.3954C97.1306 56.2048 97.3832 55.9416 97.5436 55.6088C97.6661 55.3532 97.7266 54.9735 97.7266 54.4698V54.0524ZM97.8219 56.5965C97.3968 56.9565 96.9915 57.2076 96.6027 57.3589C96.211 57.5026 95.7935 57.5767 95.3443 57.5767C94.6046 57.5767 94.0389 57.4012 93.6426 57.0382C93.2463 56.6782 93.0481 56.2169 93.0481 55.6587C93.0481 55.3229 93.1207 55.025 93.2735 54.7527C93.4202 54.4789 93.6169 54.2611 93.8604 54.0947C94.1039 53.9359 94.3777 53.8088 94.6817 53.7226C94.9056 53.6651 95.2429 53.6077 95.6922 53.5532C96.6148 53.4443 97.291 53.3127 97.7266 53.1584C97.7311 53.0026 97.7341 52.9058 97.7341 52.8635C97.7341 52.3991 97.6252 52.0694 97.4105 51.8833C97.1185 51.6247 96.6844 51.4931 96.1111 51.4931C95.5772 51.4931 95.1824 51.5853 94.9238 51.7759C94.6696 51.965 94.4806 52.2978 94.3565 52.7742L93.2433 52.6199C93.3461 52.1465 93.5125 51.7593 93.7439 51.4689C93.9754 51.1709 94.3127 50.947 94.7498 50.7882C95.19 50.6294 95.6982 50.5522 96.276 50.5522C96.8508 50.5522 97.3167 50.6218 97.6736 50.7534C98.0321 50.888 98.2968 51.0589 98.4693 51.2647C98.6357 51.4689 98.7521 51.7245 98.8232 52.0391C98.8595 52.2357 98.8777 52.5851 98.8777 53.0888V54.6105C98.8777 55.6708 98.9049 56.3409 98.9518 56.6192C99.0002 56.9021 99.0955 57.1698 99.2407 57.4285H98.0473C97.9308 57.1925 97.8552 56.9172 97.8219 56.5965ZM87.2534 54.1068C87.2534 54.966 87.4273 55.6088 87.7783 56.0233C88.1292 56.4377 88.5557 56.6434 89.0519 56.6434C89.5601 56.6434 89.9912 56.4302 90.3527 55.996C90.7142 55.571 90.8942 54.9085 90.8942 54.01C90.8942 53.1509 90.7172 52.511 90.3663 52.0815C90.0139 51.6594 89.5904 51.4431 89.1018 51.4431C88.6162 51.4431 88.1882 51.6715 87.8131 52.1238C87.4394 52.5776 87.2534 53.2386 87.2534 54.1068ZM86.2233 59.9999V50.7035H87.2595V51.5778C87.506 51.2329 87.7783 50.9773 88.0899 50.8079C88.3969 50.6369 88.772 50.5522 89.2092 50.5522C89.7855 50.5522 90.2892 50.6989 90.7293 50.9939C91.1695 51.2873 91.4992 51.7094 91.7231 52.2433C91.947 52.7818 92.0619 53.3702 92.0619 54.013C92.0619 54.7028 91.9364 55.3229 91.6883 55.8765C91.4418 56.4256 91.0818 56.8446 90.6129 57.1426C90.1409 57.4285 89.6478 57.5767 89.1275 57.5767C88.7463 57.5767 88.409 57.498 88.105 57.3392C87.8025 57.1804 87.5574 56.9762 87.3623 56.7327V59.9999H86.2233ZM81.498 50.7035H85.3657V51.6473H82.64V57.4285H81.498V50.7035ZM69.007 50.7035H70.7798L72.548 56.0853L74.5098 50.7035H76.1495V57.4285H75.0105V52.0149L73.0229 57.4285H72.0034L70.1218 51.7562V57.4285H69.007V50.7035ZM62.6254 53.4216H66.3796C66.3297 52.8559 66.1845 52.4294 65.9485 52.1465C65.5855 51.7094 65.1151 51.4885 64.5373 51.4885C64.0124 51.4885 63.5738 51.6625 63.2168 52.0149C62.8613 52.3643 62.6632 52.8332 62.6254 53.4216ZM66.3675 55.2639L67.5428 55.4031C67.3598 56.1004 67.0149 56.6313 66.5112 57.011C66.009 57.3907 65.3662 57.5767 64.5872 57.5767C63.6025 57.5767 62.825 57.2772 62.2487 56.6737C61.6709 56.0656 61.3835 55.214 61.3835 54.1219C61.3835 52.9875 61.6785 52.1117 62.2578 51.4885C62.8402 50.8653 63.5949 50.5522 64.5237 50.5522C65.4237 50.5522 66.1588 50.8578 66.726 51.4689C67.2963 52.0815 67.5837 52.9451 67.5837 54.0524C67.5837 54.1219 67.5791 54.2187 67.5776 54.3579H62.5603C62.6027 55.0945 62.8129 55.6633 63.1896 56.0505C63.5647 56.4453 64.0321 56.6434 64.5948 56.6434C65.0107 56.6434 65.3662 56.5345 65.6642 56.3137C65.9606 56.0928 66.1921 55.745 66.3675 55.2639ZM58.9014 51.6473H57.2799C56.6022 51.6473 56.1651 51.7517 55.9654 51.965C55.7718 52.1737 55.672 52.4218 55.672 52.7016C55.672 53.107 55.8172 53.3974 56.1061 53.588C56.3965 53.7771 56.9063 53.8709 57.6429 53.8709H58.9014V51.6473ZM60.0373 50.7035V57.4285H58.9014V54.8071H58.2449C57.8456 54.8071 57.5431 54.8571 57.3479 54.9629C57.1498 55.0673 56.8654 55.3955 56.4888 55.9582L55.495 57.4285H54.0838L55.312 55.6164C55.6856 55.0628 56.0622 54.7527 56.4343 54.6801C55.7824 54.5908 55.3014 54.3579 54.9853 53.9752C54.6722 53.5956 54.5133 53.1584 54.5133 52.6668C54.5133 52.0815 54.7191 51.6126 55.132 51.2495C55.5434 50.885 56.1394 50.7035 56.9184 50.7035H60.0373ZM48.708 54.1068C48.708 54.966 48.8835 55.6088 49.2329 56.0233C49.5823 56.4377 50.0073 56.6434 50.5065 56.6434C51.0117 56.6434 51.4428 56.4302 51.8058 55.996C52.1688 55.571 52.3473 54.9085 52.3473 54.01C52.3473 53.1509 52.1734 52.511 51.8209 52.0815C51.4655 51.6594 51.048 51.4431 50.5564 51.4431C50.0694 51.4431 49.6398 51.6715 49.2677 52.1238C48.8941 52.5776 48.708 53.2386 48.708 54.1068ZM47.6779 59.9999V50.7035H48.7126V51.5778C48.9576 51.2329 49.2374 50.9773 49.5445 50.8079C49.85 50.6369 50.2236 50.5522 50.6653 50.5522C51.2386 50.5522 51.7423 50.6989 52.1809 50.9939C52.6226 51.2873 52.9554 51.7094 53.1792 52.2433C53.4016 52.7818 53.515 53.3702 53.515 54.013C53.515 54.7028 53.391 55.3229 53.1399 55.8765C52.8949 56.4256 52.5364 56.8446 52.066 57.1426C51.5956 57.4285 51.0994 57.5767 50.5791 57.5767C50.1994 57.5767 49.8606 57.498 49.5596 57.3392C49.2556 57.1804 49.009 56.9762 48.8154 56.7327V59.9999H47.6779ZM40.4341 50.7035H41.5701V55.8297L44.7299 50.7035H45.9596V57.4285H44.8191V52.3325L41.6593 57.4285H40.4341V50.7035ZM30.0668 50.7035H31.2058V56.4846H33.8029V50.7035H34.9434V56.4846H37.5451V50.7035H38.678V57.4285H30.0668V50.7035ZM27.9341 54.9629L29.0534 55.1127C28.9324 55.8796 28.6208 56.4876 28.1141 56.9263C27.6089 57.3634 26.9902 57.5767 26.2551 57.5767C25.3354 57.5767 24.5958 57.2817 24.0376 56.6782C23.4795 56.0777 23.1982 55.214 23.1982 54.0917C23.1982 53.3626 23.3176 52.7319 23.5566 52.1858C23.7987 51.6398 24.1662 51.2299 24.6593 50.9621C25.1494 50.6868 25.6864 50.5522 26.2612 50.5522C26.9932 50.5522 27.5907 50.7337 28.0536 51.1058C28.5195 51.4779 28.8174 51.9998 28.9475 52.6774L27.8388 52.8514C27.7329 52.3991 27.5499 52.0588 27.2791 51.8304C27.0114 51.602 26.6862 51.4885 26.3065 51.4885C25.7302 51.4885 25.2644 51.6942 24.9059 52.1087C24.5489 52.5156 24.3674 53.169 24.3674 54.0569C24.3674 54.9629 24.5413 55.6209 24.8907 56.0308C25.2356 56.4377 25.6864 56.6434 26.243 56.6434C26.6922 56.6434 27.0643 56.5028 27.3638 56.232C27.6633 55.9537 27.8554 55.5347 27.9341 54.9629ZM20.6267 54.0524C20.2138 54.2187 19.5921 54.3655 18.7663 54.4865C18.2974 54.5485 17.9646 54.6256 17.7725 54.7103C17.5759 54.7966 17.4276 54.9191 17.3217 55.0824C17.2174 55.2443 17.1629 55.4273 17.1629 55.6239C17.1629 55.9265 17.2809 56.1821 17.5108 56.3833C17.7392 56.5844 18.0765 56.6858 18.5182 56.6858C18.9568 56.6858 19.3471 56.592 19.6905 56.3954C20.0308 56.2048 20.2834 55.9416 20.4437 55.6088C20.5662 55.3532 20.6267 54.9735 20.6267 54.4698V54.0524ZM20.7205 56.5965C20.3 56.9565 19.8947 57.2076 19.5029 57.3589C19.1111 57.5026 18.6952 57.5767 18.2459 57.5767C17.5063 57.5767 16.9421 57.4012 16.5412 57.0382C16.148 56.6782 15.9483 56.2169 15.9483 55.6587C15.9483 55.3229 16.0239 55.025 16.1737 54.7527C16.3204 54.4789 16.5185 54.2611 16.7606 54.0947C17.0041 53.9359 17.2764 53.8088 17.5819 53.7226C17.8043 53.6651 18.14 53.6077 18.5923 53.5532C19.515 53.4443 20.1926 53.3127 20.6267 53.1584C20.6313 53.0026 20.6343 52.9058 20.6343 52.8635C20.6343 52.3991 20.5269 52.0694 20.3106 51.8833C20.0202 51.6247 19.5846 51.4931 19.0113 51.4931C18.4758 51.4931 18.0841 51.5853 17.8224 51.7759C17.5698 51.965 17.3792 52.2978 17.2582 52.7742L16.148 52.6199C16.2463 52.1465 16.4127 51.7593 16.6441 51.4689C16.8755 51.1709 17.2143 50.947 17.653 50.7882C18.0886 50.6294 18.5984 50.5522 19.1762 50.5522C19.751 50.5522 20.2153 50.6218 20.5753 50.7534C20.9323 50.888 21.1985 51.0589 21.3679 51.2647C21.5373 51.4689 21.6538 51.7245 21.7234 52.0391C21.7597 52.2357 21.7793 52.5851 21.7793 53.0888V54.6105C21.7793 55.6708 21.802 56.3409 21.8535 56.6192C21.9004 56.9021 21.9987 57.1698 22.1393 57.4285H20.9504C20.8309 57.1925 20.7538 56.9172 20.7205 56.5965ZM10.152 54.1068C10.152 54.966 10.3305 55.6088 10.6799 56.0233C11.0309 56.4377 11.4559 56.6434 11.952 56.6434C12.4588 56.6434 12.8929 56.4302 13.2544 55.996C13.6159 55.571 13.7974 54.9085 13.7974 54.01C13.7974 53.1509 13.6174 52.511 13.265 52.0815C12.914 51.6594 12.4905 51.4431 12.005 51.4431C11.5194 51.4431 11.0883 51.6715 10.7147 52.1238C10.3396 52.5776 10.152 53.2386 10.152 54.1068ZM9.125 59.9999V50.7035H10.1611V51.5778C10.4047 51.2329 10.6815 50.9773 10.9915 50.8079C11.2971 50.6369 11.6707 50.5522 12.1093 50.5522C12.6841 50.5522 13.1893 50.6989 13.628 50.9939C14.0697 51.2873 14.3994 51.7094 14.6233 52.2433C14.8486 52.7818 14.9621 53.3702 14.9621 54.013C14.9621 54.7028 14.8381 55.3229 14.5885 55.8765C14.3434 56.4256 13.9834 56.8446 13.513 57.1426C13.0426 57.4285 12.548 57.5767 12.0292 57.5767C11.6465 57.5767 11.3092 57.498 11.0052 57.3392C10.7026 57.1804 10.4576 56.9762 10.2625 56.7327V59.9999H9.125Z",
                  fill: "#51668F"
                }
              })
            ]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container_catalog_search" },
      [
        _c("router-link", { attrs: { to: { name: "catalog" } } }, [
          _c("div", { staticClass: "catalog" }, [
            _c("span", [
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
                      d: "M4 7H20",
                      stroke: "white",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d: "M4 17H16",
                      stroke: "white",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }
                  })
                ]
              )
            ]),
            _vm._v("\n                Каталог\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header_search" }, [
          _c("input", { attrs: { type: "text", placeholder: "Найти товар" } }),
          _vm._v(" "),
          _c("div", { staticClass: "btn_header_search" }, [
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
                      "M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z",
                    stroke: "white",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M22 22L18 18",
                    stroke: "white",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container_header_btn_info" },
      [
        _c("router-link", { attrs: { to: { name: "authorization" } } }, [
          _vm._v("\n            Войти\n            "),
          _c("div", { staticClass: "header_btn_info" }, [
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
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header_btn_info" }, [
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
                    "M13 4.5C13 5.05228 13.4477 5.5 14 5.5C14.5523 5.5 15 5.05228 15 4.5H13ZM5.42857 16C5.98086 16 6.42857 15.5523 6.42857 15C6.42857 14.4477 5.98086 14 5.42857 14V16ZM5 2H11V0H5V2ZM3 12V4H1V12H3ZM13 4V4.5H15V4H13ZM5.42857 14H5V16H5.42857V14ZM1 12C1 14.2091 2.79086 16 5 16V14C3.89543 14 3 13.1046 3 12H1ZM11 2C12.1046 2 13 2.89543 13 4H15C15 1.79086 13.2091 0 11 0V2ZM5 0C2.79086 0 1 1.79086 1 4H3C3 2.89543 3.89543 2 5 2V0Z",
                  fill: "#71BF45"
                }
              }),
              _vm._v(" "),
              _c("rect", {
                attrs: {
                  x: "10",
                  y: "9",
                  width: "12",
                  height: "14",
                  rx: "3",
                  stroke: "#71BF45",
                  "stroke-width": "2"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header_btn_info" }, [
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
                    "M1 2H3.39566C4.33305 2 5.14468 2.65106 5.34803 3.56614L6 6.5M6 6.5L7.10424 12.5733C7.62296 15.4263 10.1077 17.5 13.0075 17.5H15.7106C18.512 17.5 20.9406 15.5615 21.5614 12.8297L22.5835 8.33243C22.7969 7.39379 22.0834 6.5 21.1208 6.5H6Z",
                  stroke: "#71BF45",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }
              }),
              _vm._v(" "),
              _c("circle", {
                attrs: {
                  cx: "8.5",
                  cy: "21",
                  r: "1",
                  stroke: "#71BF45",
                  "stroke-width": "2"
                }
              }),
              _vm._v(" "),
              _c("circle", {
                attrs: {
                  cx: "20.5",
                  cy: "21",
                  r: "1",
                  stroke: "#71BF45",
                  "stroke-width": "2"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header_btn_info" }, [
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
                  d: "M12 7V13L14.5 15.5",
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
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);