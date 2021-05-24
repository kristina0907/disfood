(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Catalog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _omponents_HeaderCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Сomponents/HeaderCatalog */ "./resources/js/Сomponents/HeaderCatalog.vue");
/* harmony import */ var _omponents_SidebarCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Сomponents/SidebarCatalog */ "./resources/js/Сomponents/SidebarCatalog.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SidebarCatalog: _omponents_SidebarCatalog__WEBPACK_IMPORTED_MODULE_1__.default,
    NavbarCatalog: _omponents_HeaderCatalog__WEBPACK_IMPORTED_MODULE_0__.default,
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default())
  },
  data: function data() {
    return {
      categories: [],
      types: [],
      filteredTypes: [],
      category: null,
      catname: '',
      type: null,
      typename: '',
      packages: [],
      packnames: [],
      products: [],
      selectedCategories: '',
      selectedTypes: '',
      tileView: false,
      listView: true
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    changeFilter: function changeFilter(data) {
      var self = this;
      this.category = data.category;
      this.type = data.type;
      this.packages = data.packages;

      if (data.catname) {
        data.catname.forEach(function (item, i) {
          self.catname = item.name;
        });
      }

      if (data.typename) {
        data.typename.forEach(function (item, i) {
          self.typename = item.name;
        });
      }

      if (data.packnames) {
        self.packnames = [];
        data.packnames.forEach(function (item, i) {
          self.packnames.push(item[0].name);
        });
      }

      this.getFilterData(data);
    },
    getFilterData: function getFilterData(data) {
      var _this = this;

      var self = this;
      axios.get('/get/catalog/', {
        params: data
      }).then(function (response) {
        //console.log(response.data)
        if (response.data !== 'undefined' && response.data !== null) {
          _this.products = response.data;
        }
      });
    },
    removePack: function removePack(pack) {
      var self = this;
      var newname = self.packnames.filter(function (item) {
        return item !== pack;
      });
      self.packnames = newname;
      self.$emit('update-package', self.packnames);
    },
    removeType: function removeType(type) {
      var self = this;
      self.typename = '';
      self.$emit('update-types', type);
    },
    removeCat: function removeCat(cat) {
      var self = this;
      self.catname = '';
      self.$emit('update-category', cat);
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/get/categories/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this2.categories = response.data;
        }
      });
      axios.get('/get/types/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this2.types = response.data;
        }
      });
      axios.get('/get/packages/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this2.packages = response.data;
        }
      });
    },
    filterTypes: function filterTypes(event) {
      var self = this;
      var name = self.types.types.filter(function (e) {
        return e.category_id == event.id;
      });
      self.filteredTypes = name;
    },
    changeToTileView: function changeToTileView() {
      var self = this;
      self.tileView = true;
      self.listView = false;
    },
    changeToListView: function changeToListView() {
      var self = this;
      self.tileView = false;
      self.listView = true;
    }
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
/* harmony import */ var vuescroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuescroll */ "./node_modules/vuescroll/dist/vuescroll.js");
/* harmony import */ var vuescroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuescroll__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    vuescroll: (vuescroll__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      sidebarExpand: false,
      types: [],
      categories: [],
      ops: {
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: 'right'
        }
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/get/types/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.types = response.data;
        }
      });
      axios.get('/get/categories/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.categories = response.data;
        }
      });
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "sidebar-catalog",
  data: function data() {
    return {
      categories: [],
      types: [],
      packages: [],
      catChecked: {},
      typeChecked: {},
      packagesChecked: []
    };
  },
  mounted: function mounted() {
    this.getData();
    this.$parent.$on('update-package', this.changePackages);
    this.$parent.$on('update-types', this.changeTypes);
    this.$parent.$on('update-category', this.changeCats);
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/get/categories/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.categories = response.data;
        }
      });
      axios.get('/get/types/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.types = response.data;
        }
      });
      axios.get('/get/packages/').then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.packages = response.data;
        }
      });
    },
    sendFilter: function sendFilter() {
      var self = this;
      var catname = this.getCatName(this.catChecked);
      var type = this.getTypeName(this.typeChecked);
      var packnames = [];
      this.packagesChecked.map(function (item) {
        var name = self.getPackagesNames(item);
        packnames.push(name);
      });
      this.$emit('changefilter', {
        category: self.catChecked,
        catname: catname,
        type: self.typeChecked,
        typename: type,
        packages: self.packagesChecked,
        packnames: packnames
      });
    },
    getCatName: function getCatName(id) {
      var name = this.categories.cats.filter(function (e) {
        return e.id == id;
      });
      return name;
    },
    getTypeName: function getTypeName(id) {
      var name = this.types.types.filter(function (e) {
        return e.id == id;
      });
      return name;
    },
    getPackagesNames: function getPackagesNames(id) {
      var name = this.packages.packages.filter(function (e) {
        return e.id == id;
      });
      return name;
    },
    changePackages: function changePackages(data) {
      var self = this;
      var newarr = self.packages.packages.filter(function (item) {
        return data.includes(item.name);
      });
      self.packagesChecked = newarr;
      var maparr = [];
      self.packagesChecked.map(function (item) {
        maparr.push(item.id);
      });
      self.packagesChecked = maparr;
      this.sendFilter();
    },
    changeTypes: function changeTypes(data) {
      var self = this;
      self.typeChecked = '';
      this.sendFilter();
    },
    changeCats: function changeCats(data) {
      var self = this;
      self.catChecked = '';
      this.sendFilter();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.select_category .multiselect__select,\n.select_category .multiselect__tags,\n.select_type .multiselect__select,\n.select_type .multiselect__tags\n{\n    height: 62px;\n}\n.select_category .multiselect__tags,\n.select_type .multiselect__tags\n{\n    min-height: 40px;\n    display: block;\n    padding: 8px 40px 0 8px;\n    border-radius: 10px;\n    border: 1px solid #C8CCD1;\n    background: #fff;\n    font-size: 14px;\n}\n.select_category .multiselect__placeholder,\n.select_type .multiselect__placeholder\n{\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 15px;\n    color: #66727E;\n    display: block !important;\n}\n.select_category .multiselect__select:before,\n.select_type .multiselect__select:before\n{\n    top: 55%;\n}\n.select_category:before\n{\n    content: 'Категория';\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 15px;\n    color: #66727E;\n    display: block;\n    z-index: 99;\n}\n.select_type\n{\n    position: relative;\n    width: 230px;\n    height: 40px;\n    margin: 0 auto;\n}\n.select_type:before\n{\n    content: 'Выберите тип товара';\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 15px;\n    color: #66727E;\n    display: block;\n    z-index: 99;\n}\n.select_category .multiselect__input,\n.select_category .multiselect__single,\n.select_type .multiselect__input,\n.select_type .multiselect__single\n{\n    padding-top: 20px;\n    padding-left: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/Catalog.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Catalog.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalog.vue?vue&type=template&id=a91bf800& */ "./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800&");
/* harmony import */ var _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Catalog.vue?vue&type=script&lang=js&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Catalog.vue?vue&type=style&index=1&lang=css& */ "./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__.render,
  _Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Catalog.vue"
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

/***/ "./resources/js/Сomponents/SidebarCatalog.vue":
/*!****************************************************!*\
  !*** ./resources/js/Сomponents/SidebarCatalog.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarCatalog.vue?vue&type=template&id=1e635c86& */ "./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86&");
/* harmony import */ var _SidebarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarCatalog.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SidebarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/SidebarCatalog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Catalog.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Catalog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarCatalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCatalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_a91bf800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=template&id=a91bf800& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800&");


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

/***/ "./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarCatalog_vue_vue_type_template_id_1e635c86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarCatalog.vue?vue&type=template&id=1e635c86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86&");


/***/ }),

/***/ "./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-style-loader/index.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=template&id=a91bf800& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [_c("navbar-catalog")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "container_catalog_products" }, [
      _c(
        "div",
        { staticClass: "content_catalog" },
        [
          _c("sidebar-catalog", { on: { changefilter: _vm.changeFilter } }),
          _vm._v(" "),
          _c("div", { staticClass: "content_catalog_block" }, [
            _c("div", { staticClass: "container_products_catalog" }, [
              _c("div", { staticClass: "offer_item_product_catalog" }, [
                _c(
                  "div",
                  { staticClass: "offer_filter_item_product_catalog" },
                  [
                    _vm.categories.cats
                      ? _c(
                          "div",
                          { staticClass: "container_select_offer" },
                          [
                            _c("multiselect", {
                              class: "select select_category",
                              attrs: {
                                options: _vm.categories.cats,
                                multiple: false,
                                label: "name",
                                "track-by": "name",
                                placeholder: "",
                                selectLabel: "Выберите категорию",
                                selectedLabel: "Выбрано",
                                deselectLabel: "Нажмите еще раз чтобы удалить"
                              },
                              on: { input: _vm.filterTypes },
                              model: {
                                value: _vm.selectedCategories,
                                callback: function($$v) {
                                  _vm.selectedCategories = $$v
                                },
                                expression: "selectedCategories"
                              }
                            }),
                            _vm._v(" "),
                            _vm.types.types && _vm.selectedCategories
                              ? _c(
                                  "div",
                                  [
                                    _c("multiselect", {
                                      class: "select select_type",
                                      attrs: {
                                        options: _vm.filteredTypes,
                                        multiple: false,
                                        label: "name",
                                        "track-by": "name",
                                        placeholder: "",
                                        selectLabel: "Выберите тип товара",
                                        selectedLabel: "Выбрано",
                                        deselectLabel:
                                          "Нажмите еще раз чтобы удалить"
                                      },
                                      model: {
                                        value: _vm.selectedTypes,
                                        callback: function($$v) {
                                          _vm.selectedTypes = $$v
                                        },
                                        expression: "selectedTypes"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "offer_quantity_block" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "offer_quantity_block_product" },
                        [
                          _c("div", { staticClass: "quantity-block" }, [
                            _c(
                              "button",
                              {
                                staticClass: "quantity-arrow-minus",
                                attrs: { "data-id": "m1" }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "20",
                                      height: "2",
                                      viewBox: "0 0 20 2",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M1 1L19 1",
                                        stroke: "#C8CCD1",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "quantity-num",
                              attrs: {
                                "data-id": "m1",
                                type: "number",
                                value: "1"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "quantity-arrow-plus",
                                attrs: { "data-id": "m1" }
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
                                        d: "M12 3V21",
                                        stroke: "#C8CCD1",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d: "M3 12L21 12",
                                        stroke: "#C8CCD1",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "offer_delivery_item_product_catalog" },
                  [
                    _c("div", { staticClass: "tab_delivery" }, [
                      _c("div", { staticClass: "container_row_head_product" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "delevery_tab_product" }, [
                          _c(
                            "div",
                            {
                              staticClass: "tab-content tab-content_offer_page",
                              attrs: { id: "myTabContent" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "tab-pane fade",
                                  attrs: {
                                    id: "JD",
                                    role: "tabpanel",
                                    "aria-labelledby": "JD-tab"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "item_product_input row" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "container_input_price jd_tab_input col-md-8"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text_input" },
                                            [_vm._v("Куда доставить?")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            attrs: {
                                              type: "text",
                                              value: "Россия, Екатеринбург"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "icon_price_input" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "30",
                                                    height: "31",
                                                    viewBox: "0 0 30 31",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
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
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "container_input_price col-md-4"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text_input" },
                                            [_vm._v("Код станции")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            attrs: {
                                              type: "text",
                                              value: "543 498"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "icon_price_input" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "27",
                                                    height: "30",
                                                    viewBox: "0 0 27 30",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M1 11.9711C1 11.0175 1.45332 10.1207 2.22115 9.55533L13.5 1.25L24.7788 9.55533C25.5467 10.1207 26 11.0175 26 11.9711L26 26.25C26 27.6307 24.8807 28.75 23.5 28.75H18.25C17.6977 28.75 17.25 28.3023 17.25 27.75V19.875C17.25 19.5989 17.0261 19.375 16.75 19.375L10.25 19.375C9.97386 19.375 9.75 19.5989 9.75 19.875V27.75C9.75 28.3023 9.30228 28.75 8.75 28.75H3.5C2.11929 28.75 1 27.6307 1 26.25L1 11.9711Z",
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
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "tab-pane fade show active",
                                  attrs: {
                                    id: "avto",
                                    role: "tabpanel",
                                    "aria-labelledby": "avto-tab"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "item_product_input row" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "container_input_price col-md-12"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text_input" },
                                            [_vm._v("Куда доставить?")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            attrs: {
                                              type: "text",
                                              value: "Россия, Екатеринбург"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "icon_price_input" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "30",
                                                    height: "31",
                                                    viewBox: "0 0 30 31",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
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
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "tab-pane fade",
                                  attrs: {
                                    id: "pickUp",
                                    role: "tabpanel",
                                    "aria-labelledby": "pickUp-tab"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "item_product_input row" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "container_input_price col-md-12"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text_input" },
                                            [_vm._v("Куда доставить?")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            attrs: {
                                              type: "text",
                                              value: "Россия, Екатеринбург"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "icon_price_input" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "30",
                                                    height: "31",
                                                    viewBox: "0 0 30 31",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg"
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
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "offer_product_category_block" }, [
                _c(
                  "div",
                  { staticClass: "header_offer_product_category_block" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "icon_list",
                          on: { click: _vm.changeToListView }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "21",
                                height: "20",
                                viewBox: "0 0 21 20",
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
                                    "M17.5 11C19.1569 11 20.5 12.3431 20.5 14V17C20.5 18.6569 19.1569 20 17.5 20H3.5C1.84315 20 0.5 18.6569 0.5 17V14C0.5 12.3431 1.84315 11 3.5 11H17.5ZM17.5 13H3.5C2.94772 13 2.5 13.4477 2.5 14V17C2.5 17.5523 2.94772 18 3.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17V14C18.5 13.4477 18.0523 13 17.5 13ZM17.5 0C19.1569 0 20.5 1.34315 20.5 3V6C20.5 7.65685 19.1569 9 17.5 9H3.5C1.84315 9 0.5 7.65685 0.5 6V3C0.5 1.34315 1.84315 0 3.5 0H17.5ZM17.5 2H3.5C2.94772 2 2.5 2.44772 2.5 3V6C2.5 6.55228 2.94772 7 3.5 7H17.5C18.0523 7 18.5 6.55228 18.5 6V3C18.5 2.44772 18.0523 2 17.5 2Z",
                                  fill: "#71BF45"
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "icon_tile",
                          on: { click: _vm.changeToTileView }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "21",
                                height: "20",
                                viewBox: "0 0 21 20",
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
                                    "M17.5 11C19.1569 11 20.5 12.3431 20.5 14V17C20.5 18.6569 19.1569 20 17.5 20H14.5C12.8431 20 11.5 18.6569 11.5 17V14C11.5 12.3431 12.8431 11 14.5 11H17.5ZM6.5 11C8.15685 11 9.5 12.3431 9.5 14V17C9.5 18.6569 8.15685 20 6.5 20H3.5C1.84315 20 0.5 18.6569 0.5 17V14C0.5 12.3431 1.84315 11 3.5 11H6.5ZM17.5 13H14.5C13.9477 13 13.5 13.4477 13.5 14V17C13.5 17.5523 13.9477 18 14.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17V14C18.5 13.4477 18.0523 13 17.5 13ZM6.5 13H3.5C2.94772 13 2.5 13.4477 2.5 14V17C2.5 17.5523 2.94772 18 3.5 18H6.5C7.05228 18 7.5 17.5523 7.5 17V14C7.5 13.4477 7.05228 13 6.5 13ZM6.5 0C8.15685 0 9.5 1.34315 9.5 3V6C9.5 7.65685 8.15685 9 6.5 9H3.5C1.84315 9 0.5 7.65685 0.5 6V3C0.5 1.34315 1.84315 0 3.5 0H6.5ZM17.5 0C19.1569 0 20.5 1.34315 20.5 3V6C20.5 7.65685 19.1569 9 17.5 9H14.5C12.8431 9 11.5 7.65685 11.5 6V3C11.5 1.34315 12.8431 0 14.5 0H17.5ZM6.5 2H3.5C2.94772 2 2.5 2.44772 2.5 3V6C2.5 6.55228 2.94772 7 3.5 7H6.5C7.05228 7 7.5 6.55228 7.5 6V3C7.5 2.44772 7.05228 2 6.5 2ZM17.5 2H14.5C13.9477 2 13.5 2.44772 13.5 3V6C13.5 6.55228 13.9477 7 14.5 7H17.5C18.0523 7 18.5 6.55228 18.5 6V3C18.5 2.44772 18.0523 2 17.5 2Z",
                                  fill: "black"
                                }
                              })
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
                  {
                    class: {
                      container_item_offer_catalog: _vm.listView,
                      "tile_container_item_offer_catalog row": _vm.tileView
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        class: {
                          item_product_category: _vm.listView,
                          "tile_item_offer_catalog col": _vm.tileView
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            class: {
                              info_item_offer_catalog: _vm.listView,
                              tile_info_item_offer_catalog: _vm.tileView
                            }
                          },
                          [
                            _c("div", {
                              class: {
                                image_info_item_offer_catalog: _vm.listView,
                                tile_image_info_item_offer_catalog: _vm.tileView
                              },
                              staticStyle: {
                                "background-image": "url(./images/offer.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "name_info_item_offer_catalog" },
                                [
                                  _vm._v(
                                    "Агро Альянс\n                                                    "
                                  ),
                                  _c("span", { staticClass: "icon_star" }, [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "13",
                                          height: "13",
                                          viewBox: "0 0 13 13",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z",
                                            fill: "#FFD789"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "text_star" }, [
                                    _vm._v("4,5")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(3)
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "delivery_item_similar_products" },
                          [
                            _c("div", { staticClass: "icon_delivery" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "25",
                                    height: "24",
                                    viewBox: "0 0 25 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: {
                                      cx: "12.5",
                                      cy: "12",
                                      r: "11",
                                      stroke: "#71BF45",
                                      "stroke-width": "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M12.5 7V13L15 15.5",
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
                            _vm._m(4)
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "container_item_offer_btn" }, [
                          _c("div", { staticClass: "make_deal" }, [
                            _vm._v("Подробнее")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "doc_item_offer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "bay_item_offer_catalog",
                                attrs: {
                                  type: "button",
                                  id: "dropdownMenuButton",
                                  "data-toggle": "dropdown",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "25",
                                      height: "24",
                                      viewBox: "0 0 25 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z",
                                        stroke: "#71BF45",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "9",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "21",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(6)
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: {
                          item_product_category: _vm.listView,
                          "tile_item_offer_catalog col": _vm.tileView
                        }
                      },
                      [
                        _c("div", { staticClass: "info_item_offer_catalog" }, [
                          _c("div", {
                            staticClass: "image_info_item_offer_catalog",
                            staticStyle: {
                              "background-image": "url(./images/offer.png)"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "name_info_item_offer_catalog" },
                              [
                                _vm._v(
                                  "Агро Альянс\n                                                    "
                                ),
                                _c("span", { staticClass: "icon_star" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 13 13",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z",
                                          fill: "#FFD789"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "text_star" }, [
                                  _vm._v("4,5")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(7)
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "delivery_item_similar_products" },
                          [
                            _c("div", { staticClass: "icon_delivery" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "25",
                                    height: "24",
                                    viewBox: "0 0 25 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: {
                                      cx: "12.5",
                                      cy: "12",
                                      r: "11",
                                      stroke: "#71BF45",
                                      "stroke-width": "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M12.5 7V13L15 15.5",
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
                            _vm._m(8)
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(9),
                        _vm._v(" "),
                        _c("div", { staticClass: "container_item_offer_btn" }, [
                          _c("div", { staticClass: "make_deal" }, [
                            _vm._v("Подробнее")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "doc_item_offer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "bay_item_offer_catalog",
                                attrs: {
                                  type: "button",
                                  id: "dropdownMenuButton",
                                  "data-toggle": "dropdown",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "25",
                                      height: "24",
                                      viewBox: "0 0 25 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z",
                                        stroke: "#71BF45",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "9",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "21",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(10)
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: {
                          item_product_category: _vm.listView,
                          "tile_item_offer_catalog col": _vm.tileView
                        }
                      },
                      [
                        _c("div", { staticClass: "info_item_offer_catalog" }, [
                          _c("div", {
                            staticClass: "image_info_item_offer_catalog",
                            staticStyle: {
                              "background-image": "url(./images/offer.png)"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "name_info_item_offer_catalog" },
                              [
                                _vm._v(
                                  "Агро Альянс\n                                                    "
                                ),
                                _c("span", { staticClass: "icon_star" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 13 13",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z",
                                          fill: "#FFD789"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "text_star" }, [
                                  _vm._v("4,5")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(11)
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "delivery_item_similar_products" },
                          [
                            _c("div", { staticClass: "icon_delivery" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "25",
                                    height: "24",
                                    viewBox: "0 0 25 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: {
                                      cx: "12.5",
                                      cy: "12",
                                      r: "11",
                                      stroke: "#71BF45",
                                      "stroke-width": "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d: "M12.5 7V13L15 15.5",
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
                            _vm._m(12)
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(13),
                        _vm._v(" "),
                        _c("div", { staticClass: "container_item_offer_btn" }, [
                          _c("div", { staticClass: "make_deal" }, [
                            _vm._v("Подробнее")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "doc_item_offer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "bay_item_offer_catalog",
                                attrs: {
                                  type: "button",
                                  id: "dropdownMenuButton",
                                  "data-toggle": "dropdown",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "25",
                                      height: "24",
                                      viewBox: "0 0 25 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z",
                                        stroke: "#71BF45",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "9",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        cx: "21",
                                        cy: "21",
                                        r: "1",
                                        stroke: "#71BF45",
                                        "stroke-width": "2"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(14)
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
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
    return _c("div", { staticClass: "text_prompt" }, [
      _vm._v("Нужный объем"),
      _c("br"),
      _vm._v(" для закупки")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab_product_nav" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "myTab", role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "home-tab",
                  "data-toggle": "tab",
                  href: "#JD",
                  role: "tab",
                  "aria-controls": "JD",
                  "aria-selected": "false"
                }
              },
              [
                _c("span", [
                  _vm._v(
                    "\n                                                    ·"
                  )
                ]),
                _vm._v(
                  "\n                                                            ЖД"
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  id: "avto-tab",
                  "data-toggle": "tab",
                  href: "#avto",
                  role: "tab",
                  "aria-controls": "avto",
                  "aria-selected": "true"
                }
              },
              [
                _c("span", [
                  _vm._v(
                    "\n                                                    ·"
                  )
                ]),
                _vm._v(
                  "\n                                                            Авто"
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "pickUp-tab",
                  "data-toggle": "tab",
                  href: "#pickUp ",
                  role: "tab",
                  "aria-controls": "pickUp",
                  "aria-selected": "false"
                }
              },
              [
                _c("span", [
                  _vm._v(
                    "\n                                                    ·"
                  )
                ]),
                _vm._v(
                  "\n                                                            Самовывоз"
                )
              ]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_offer_product_category_block" }, [
        _vm._v("Рис "),
        _c("span", [_vm._v("349")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "more_offer_product_category_block" }, [
        _c("a", { attrs: { href: "" } }, [_vm._v("Показать все")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "place_count_info_item_offer_catalog" }, [
      _c("span", [_vm._v("50кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("25кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("10кг")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_time_delivery" }, [_vm._v("Доставка")]),
      _vm._v(" "),
      _c("div", { staticClass: "time_delivery" }, [_vm._v("от 5 дней")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "price_item_product_category" }, [
      _c("div", { staticClass: "start_price_category_products" }, [
        _vm._v("46, 34 ₽/ кг")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        attrs: { "aria-labelledby": "dropdownMenuButton" }
      },
      [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "place_count_info_item_offer_catalog" }, [
      _c("span", [_vm._v("50кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("25кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("10кг")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_time_delivery" }, [_vm._v("Доставка")]),
      _vm._v(" "),
      _c("div", { staticClass: "time_delivery" }, [_vm._v("от 5 дней")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "price_item_product_category" }, [
      _c("div", { staticClass: "start_price_category_products" }, [
        _vm._v("46, 34 ₽/ кг")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        attrs: { "aria-labelledby": "dropdownMenuButton" }
      },
      [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "place_count_info_item_offer_catalog" }, [
      _c("span", [_vm._v("50кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("25кг")]),
      _vm._v(" "),
      _c("span", [_vm._v("10кг")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "title_time_delivery" }, [_vm._v("Доставка")]),
      _vm._v(" "),
      _c("div", { staticClass: "time_delivery" }, [_vm._v("от 5 дней")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "price_item_product_category" }, [
      _c("div", { staticClass: "start_price_category_products" }, [
        _vm._v("46, 34 ₽/ кг")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu",
        attrs: { "aria-labelledby": "dropdownMenuButton" }
      },
      [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Документ "),
          _c("span", [_vm._v("PDF")])
        ])
      ]
    )
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
        _c("div", { staticClass: "container_btn_search_header" }, [
          _c(
            "div",
            {
              staticClass: "catalog_menu",
              on: {
                click: function($event) {
                  _vm.sidebarExpand = true
                }
              }
            },
            [
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
                "\n                            Каталог\n                    "
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ]),
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sidebar_catalog_menu",
        class: { active: _vm.sidebarExpand }
      },
      [
        _c("div", { staticClass: "header_catalog_menu" }, [
          _c(
            "div",
            {
              staticClass: "close_catalog_menu",
              on: {
                click: function($event) {
                  _vm.sidebarExpand = false
                }
              }
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 25 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d: "M6.125 6.5L18.8992 19.2742",
                      stroke: "#444C54",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d: "M6.125 19.2744L18.8992 6.50022",
                      stroke: "#444C54",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "logo_catalog_menu" }, [
            _c(
              "svg",
              {
                attrs: {
                  width: "136",
                  height: "35",
                  viewBox: "0 0 136 35",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M8.94202 0.921387V8.66406C12.8872 8.66406 16.1685 8.61299 19.6906 8.62211C20.8378 8.62211 21.8374 8.99602 22.7019 9.70554C23.5519 10.4242 24.214 11.4273 24.6955 12.7224C25.1624 14.0101 25.405 15.5276 25.4141 17.2549C25.405 19.015 25.1624 20.5471 24.6955 21.8549C24.214 23.1627 23.5555 24.1749 22.7019 24.8899C21.8428 25.614 20.8378 25.9825 19.6906 25.9825L16.5515 26.1229C15.0304 28.6582 13.6241 30.8433 11.5193 33.8455L19.7836 33.7288C21.8848 33.7014 23.7945 33.3221 25.4944 32.5378C27.198 31.7589 28.6498 30.6281 29.8646 29.1762C31.0775 27.7189 32.0077 25.977 32.6516 23.9506C33.2827 21.9151 33.5945 19.6552 33.5818 17.1619C33.5727 14.7105 33.2444 12.4925 32.5859 10.5044C31.9275 8.51997 30.9991 6.80546 29.7807 5.38095C28.5659 3.95279 27.1086 2.85478 25.4196 2.08872C23.7343 1.32448 21.8556 0.932331 19.7836 0.921387H8.94202Z",
                    fill: "#51668F"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d:
                      "M7.91327 15.4162C9.62779 15.4162 11.0195 16.8079 11.0195 18.5169C11.0195 20.2296 9.62779 21.6213 7.91327 21.6213C6.20058 21.6213 4.80891 20.2296 4.80891 18.5169C4.80891 16.8079 6.20058 15.4162 7.91327 15.4162ZM7.85308 10.5371C12.1248 10.5371 15.5848 14.0008 15.5848 18.2688C15.5848 22.5369 11.8877 28.8076 7.85308 34.0789C4.40764 29.2746 0.125 22.5369 0.125 18.2688C0.125 14.0008 3.59051 10.5371 7.85308 10.5371Z",
                    fill: "#71BF45"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "M51.4418 5.93172L51.9689 5.93719C54.3072 5.93719 55.0641 8.91205 55.0732 10.7798C55.0641 12.6384 54.3728 15.6406 52.0254 15.6406L51.4418 15.668V5.93172ZM67.4889 19.2393V15.6734H65.7762V5.93172H67.3211V2.36589H60.0891V5.93172H61.6066V15.6734H59.9158V19.2393H67.4889ZM68.4045 13.9115C68.3808 14.7523 68.5067 15.5184 68.7729 16.1951C69.0447 16.8773 69.4369 17.4664 69.9549 17.9552C70.4783 18.4459 71.104 18.8198 71.8408 19.0861C72.5741 19.3469 73.3967 19.4782 74.3123 19.4819C75.2024 19.4782 76.0159 19.356 76.74 19.1134C77.4677 18.8672 78.0897 18.517 78.6113 18.0537C79.1348 17.5922 79.5361 17.0414 79.8115 16.3866C80.096 15.7428 80.2365 15.015 80.242 14.2015C80.2365 13.3844 80.1343 12.6895 79.9337 12.1058C79.7331 11.5258 79.4522 11.0461 79.0929 10.6576C78.7335 10.2709 78.3122 9.95718 77.827 9.72006C77.3473 9.4866 76.8184 9.3042 76.253 9.17835C75.6839 9.05067 75.0911 8.95765 74.4801 8.89746C73.8308 8.80809 73.3584 8.64029 73.0592 8.39223C72.7619 8.14052 72.616 7.82863 72.6215 7.45472C72.6251 6.96407 72.7747 6.59016 73.0592 6.32022C73.3456 6.04845 73.7377 5.91348 74.2375 5.90983C74.5731 5.91348 74.8577 5.98461 75.1002 6.13235C75.3428 6.28192 75.5252 6.48255 75.6511 6.7452C75.7769 7.00602 75.8298 7.30515 75.8061 7.64623H79.7094C79.7331 6.81451 79.6163 6.06304 79.3628 5.38636C79.1166 4.71332 78.7481 4.13512 78.2575 3.64448C77.7669 3.16296 77.1777 2.7854 76.4864 2.52457C75.8006 2.26193 75.0255 2.12695 74.1664 2.12695C73.3164 2.12695 72.5504 2.24916 71.8609 2.49539C71.1733 2.74345 70.5768 3.0973 70.0807 3.56423C69.581 4.02204 69.1979 4.58746 68.928 5.24591C68.6653 5.90436 68.5267 6.65218 68.5267 7.47296C68.5267 8.17883 68.6234 8.80444 68.8149 9.34615C69.0119 9.8824 69.2782 10.3548 69.6193 10.7469C69.9603 11.1427 70.347 11.4711 70.7957 11.7355C71.2389 11.9982 71.715 12.1988 72.2239 12.3429C72.7327 12.4834 73.2507 12.5727 73.7797 12.6147C73.9931 12.6274 74.2375 12.6512 74.502 12.6895C74.7646 12.7259 75.0218 12.7971 75.2644 12.8901C75.5106 12.9922 75.7131 13.1418 75.8718 13.3424C76.0305 13.5431 76.1144 13.8148 76.118 14.1559C76.118 14.4769 76.0396 14.7523 75.8845 14.9767C75.7313 15.201 75.5161 15.3743 75.2352 15.491C74.9561 15.6114 74.6333 15.6734 74.2594 15.6734C73.8727 15.668 73.5371 15.5987 73.2507 15.4491C72.9571 15.2995 72.7382 15.0934 72.5832 14.8326C72.4245 14.5663 72.3552 14.2617 72.3588 13.9115H68.4045ZM85.3873 13.7948H89.6554V9.93347H85.3873V6.19801H90.281V2.36589H81.2178V19.2393H85.3873V13.7948ZM95.0524 10.8017C95.0579 9.89152 95.1929 9.10357 95.4628 8.42506C95.7291 7.74837 96.1085 7.22125 96.5937 6.84734C97.0843 6.46978 97.6534 6.2728 98.3064 6.2728C98.9466 6.2728 99.5029 6.46978 99.9735 6.84734C100.446 7.22125 100.811 7.74837 101.071 8.42506C101.329 9.10357 101.464 9.89152 101.464 10.8017C101.464 11.7082 101.329 12.5016 101.071 13.1892C100.811 13.8659 100.446 14.393 99.9735 14.7761C99.5029 15.1591 98.9466 15.3506 98.3064 15.3597C97.6534 15.3506 97.0843 15.1591 96.5937 14.7761C96.1085 14.393 95.7291 13.8659 95.4628 13.1892C95.1929 12.5016 95.0579 11.7082 95.0524 10.8017ZM105.661 10.8017C105.657 9.49572 105.48 8.3138 105.133 7.24861C104.783 6.18525 104.283 5.27327 103.64 4.51268C102.99 3.74662 102.215 3.16296 101.32 2.7471C100.417 2.33671 99.4135 2.12695 98.3064 2.12695C97.1956 2.12695 96.1869 2.33671 95.2768 2.7471C94.3703 3.16296 93.5915 3.74662 92.9421 4.51268C92.2928 5.27327 91.7894 6.18525 91.4392 7.24861C91.089 8.3138 90.9102 9.49572 90.9066 10.8017C90.9102 12.1094 91.089 13.295 91.4392 14.3566C91.7894 15.4199 92.2928 16.3301 92.9421 17.0961C93.5915 17.8585 94.3703 18.4459 95.2768 18.8617C96.1869 19.2685 97.1956 19.4782 98.3064 19.4819C99.4135 19.4782 100.417 19.2685 101.32 18.8617C102.215 18.4459 102.99 17.8585 103.64 17.0961C104.283 16.3301 104.783 15.4199 105.133 14.3566C105.48 13.295 105.657 12.1094 105.661 10.8017ZM110.616 10.8017C110.62 9.89152 110.755 9.10357 111.021 8.42506C111.293 7.74837 111.67 7.22125 112.156 6.84734C112.643 6.46978 113.212 6.2728 113.87 6.2728C114.505 6.2728 115.061 6.46978 115.537 6.84734C116.008 7.22125 116.373 7.74837 116.633 8.42506C116.891 9.10357 117.022 9.89152 117.026 10.8017C117.022 11.7082 116.891 12.5016 116.633 13.1892C116.373 13.8659 116.008 14.393 115.537 14.7761C115.061 15.1591 114.505 15.3506 113.87 15.3597C113.212 15.3506 112.643 15.1591 112.156 14.7761C111.67 14.393 111.293 13.8659 111.021 13.1892C110.755 12.5016 110.62 11.7082 110.616 10.8017ZM121.219 10.8017C121.219 9.49572 121.042 8.3138 120.697 7.24861C120.347 6.18525 119.847 5.27327 119.202 4.51268C118.554 3.74662 117.779 3.16296 116.876 2.7471C115.98 2.33671 114.977 2.12695 113.87 2.12695C112.754 2.12695 111.745 2.33671 110.839 2.7471C109.934 3.16296 109.153 3.74662 108.504 4.51268C107.851 5.27327 107.351 6.18525 107.001 7.24861C106.647 8.3138 106.469 9.49572 106.469 10.8017C106.469 12.1094 106.647 13.295 107.001 14.3566C107.351 15.4199 107.851 16.3301 108.504 17.0961C109.153 17.8585 109.934 18.4459 110.839 18.8617C111.745 19.2685 112.754 19.4782 113.87 19.4819C114.977 19.4782 115.98 19.2685 116.876 18.8617C117.779 18.4459 118.554 17.8585 119.202 17.0961C119.847 16.3301 120.347 15.4199 120.697 14.3566C121.042 13.295 121.219 12.1094 121.219 10.8017ZM127.294 5.93172L127.827 5.93719C130.162 5.93719 130.917 8.91205 130.928 10.7798C130.922 12.6384 130.227 15.6406 127.878 15.6406L127.294 15.668V5.93172ZM123.236 5.95543V15.6734H121.844V19.2393C123.909 19.2393 125.963 19.2447 128.037 19.2393C129.115 19.2393 130.096 19.0295 130.97 18.6282C131.842 18.227 132.593 17.6524 133.215 16.9046C134.643 15.1919 135.139 12.9138 135.125 10.7324C135.116 8.58374 134.598 6.34393 133.168 4.67684C131.745 2.99515 129.797 2.38778 127.648 2.38778L122.012 2.36589V5.93172C122.415 5.93172 122.808 5.95543 123.236 5.95543ZM47.378 5.95543V15.6734H45.9918V19.2393C48.051 19.2393 50.1048 19.2447 52.1786 19.2393C53.2621 19.2393 54.2433 19.0295 55.1152 18.6282C55.9889 18.227 56.7367 17.6524 57.3623 16.9046C58.7905 15.1919 59.2811 12.9138 59.2665 10.7324C59.2629 8.58374 58.743 6.34393 57.3149 4.67684C55.8904 2.99515 53.9442 2.38778 51.7956 2.38778L46.1596 2.36589V5.93172C46.5609 5.93172 46.9494 5.95543 47.378 5.95543Z",
                    fill: "#51668F"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "M88.5992 32.0706L88.7871 33.1869C88.4314 33.2617 88.114 33.3 87.8332 33.3C87.3717 33.3 87.0215 33.2252 86.7643 33.0793C86.5163 32.9352 86.3393 32.7473 86.2372 32.5102C86.1332 32.2767 86.0822 31.777 86.0822 31.0255V26.7429H85.1538V25.7634H86.0822V23.9176L87.3334 23.1661V25.7634H88.5992V26.7429H87.3334V31.0948C87.3334 31.4541 87.3571 31.6839 87.3991 31.7861C87.4465 31.8882 87.5158 31.9685 87.6198 32.0341C87.7164 32.0889 87.8623 32.1217 88.0484 32.1217C88.1888 32.1217 88.3749 32.1034 88.5992 32.0706ZM78.8265 28.7656H82.9778C82.9213 28.1436 82.7626 27.6731 82.5017 27.3593C82.1005 26.8742 81.5807 26.6316 80.9423 26.6316C80.3623 26.6316 79.8771 26.8268 79.4795 27.2153C79.0873 27.5983 78.8684 28.1199 78.8265 28.7656ZM82.9632 30.8048L84.2655 30.9653C84.0612 31.7259 83.6818 32.3187 83.1274 32.7382C82.5711 33.154 81.8561 33.3638 80.997 33.3638C79.9099 33.3638 79.0454 33.0337 78.4106 32.3661C77.7704 31.6931 77.453 30.7537 77.453 29.5444C77.453 28.2932 77.7759 27.3229 78.4197 26.6316C79.0654 25.9403 79.9008 25.5956 80.9277 25.5956C81.9217 25.5956 82.7352 25.9348 83.3645 26.6134C83.9956 27.29 84.3075 28.2367 84.3075 29.466C84.3075 29.5444 84.3075 29.6575 84.3038 29.8016H78.7572C78.8028 30.6187 79.0362 31.2444 79.4485 31.6785C79.868 32.1126 80.3823 32.3333 81.0025 32.3333C81.4639 32.3333 81.8561 32.2111 82.188 31.9685C82.5145 31.7259 82.7717 31.3374 82.9632 30.8048ZM70.7117 33.2015V22.9326H71.9721V28.7893L74.9561 25.7634H76.5848L73.7413 28.523L76.8749 33.2015H75.319L72.864 29.3949L71.9721 30.254V33.2015H70.7117ZM65.9166 33.2015V25.7634H67.0511V26.8924C67.3392 26.3653 67.6055 26.0151 67.8481 25.8509C68.0962 25.6831 68.3679 25.5956 68.6616 25.5956C69.0866 25.5956 69.5152 25.7306 69.9548 26.0005L69.5207 27.1733C69.2124 26.9854 68.9042 26.8979 68.5959 26.8979C68.3205 26.8979 68.0725 26.9818 67.8536 27.1441C67.6347 27.3137 67.4797 27.5417 67.3867 27.8354C67.2462 28.2841 67.1769 28.7747 67.1769 29.3073V33.2015H65.9166ZM62.6991 29.466C62.2413 29.6575 61.5555 29.8162 60.6435 29.9457C60.1255 30.0205 59.7571 30.1044 59.5418 30.1938C59.3266 30.2868 59.1643 30.4272 59.0476 30.6042C58.9308 30.7866 58.8706 30.9835 58.8706 31.2079C58.8706 31.5435 59.0001 31.8189 59.2537 32.0433C59.5054 32.2676 59.8793 32.3789 60.3681 32.3789C60.8551 32.3789 61.2837 32.2767 61.6613 32.0615C62.0407 31.8517 62.3197 31.5581 62.4985 31.1878C62.6334 30.9033 62.6991 30.4838 62.6991 29.9329V29.466ZM62.8067 32.2804C62.3398 32.678 61.8911 32.9589 61.457 33.1212C61.0265 33.2854 60.5651 33.3638 60.0708 33.3638C59.2537 33.3638 58.6226 33.1686 58.183 32.7674C57.7489 32.3697 57.5246 31.8609 57.5246 31.2407C57.5246 30.8759 57.6085 30.544 57.7781 30.2412C57.9404 29.9421 58.1593 29.6995 58.4256 29.5171C58.6919 29.3347 58.9965 29.1942 59.3321 29.1067C59.5801 29.041 59.9541 28.9754 60.452 28.9152C61.4716 28.793 62.2176 28.6489 62.6991 28.4811C62.7082 28.3078 62.7082 28.2002 62.7082 28.1528C62.7082 27.6402 62.586 27.2754 62.3489 27.0693C62.0315 26.7812 61.55 26.6407 60.9153 26.6407C60.3225 26.6407 59.8884 26.7392 59.6039 26.949C59.3175 27.1587 59.1132 27.5235 58.9728 28.0561L57.7452 27.8828C57.8565 27.3593 58.0389 26.9307 58.2961 26.6079C58.5533 26.285 58.9253 26.0297 59.4123 25.8564C59.892 25.6831 60.4575 25.5956 61.0977 25.5956C61.7324 25.5956 62.2449 25.6685 62.6426 25.8181C63.0402 25.9677 63.3338 26.1555 63.5199 26.3835C63.7077 26.6134 63.8372 26.8924 63.912 27.2426C63.954 27.4578 63.974 27.8445 63.974 28.4008V30.0825C63.974 31.259 64.0014 31.9958 64.0579 32.3096C64.109 32.6178 64.2166 32.9169 64.3753 33.2015H63.0584C62.9271 32.9388 62.8432 32.636 62.8067 32.2804ZM46.1267 33.2015V22.9326H48.1732L50.6008 30.2029C50.8252 30.8796 50.9875 31.3848 51.0915 31.7204C51.2082 31.352 51.3888 30.8011 51.6368 30.077L54.0937 22.9326H55.9231V33.2015H54.6117V24.6088L51.6332 33.2015H50.4038L47.4345 24.4647V33.2015H46.1267Z",
                    fill: "#71BF45"
                  }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container_list_sidebar_catalog_menu" },
          [
            _c(
              "vue-scroll",
              { attrs: { ops: _vm.ops } },
              _vm._l(_vm.categories.cats, function(cat) {
                return _vm.categories.cats.length
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "btn-group dropright container_item_list_sidebar_catalog_menu"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "item_list_sidebar_catalog_menu",
                            attrs: {
                              type: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "img_title_item_list_catalog_menu"
                              },
                              [
                                _c("div", {
                                  staticClass: "img_item_list_catalog_menu",
                                  staticStyle: {
                                    "background-image":
                                      "url(./images/similar.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "title_item_list_catalog_menu"
                                  },
                                  [_vm._v(_vm._s(cat.name))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "icon_item_list_catalog_menu" },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "8",
                                      height: "12",
                                      viewBox: "0 0 8 12",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M1.75 1.625L6.10198 5.97698L1.75 10.329",
                                        stroke: "#22262A",
                                        "stroke-width": "2",
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
                        _vm.types.types
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "dropdown-menu dropdown-menu_item_list_sidebar_catalog_menu"
                              },
                              _vm._l(_vm.types.types, function(type) {
                                return cat.id == type.category_id
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: {
                                          href:
                                            "/catalog?category=" +
                                            cat.id +
                                            "&type=" +
                                            type.id
                                        }
                                      },
                                      [_vm._v(_vm._s(type.name))]
                                    )
                                  : _vm._e()
                              }),
                              0
                            )
                          : _vm._e()
                      ]
                    )
                  : _vm._e()
              }),
              0
            )
          ],
          1
        )
      ]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/SidebarCatalog.vue?vue&type=template&id=1e635c86& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar_catalog" }, [
      _c("div", { staticClass: "container_filter_catalog" }, [
        _c("div", { staticClass: "item_filter_catalog" }, [
          _c("div", { staticClass: "title_filter_catalog" }, [
            _vm._v("Тип фасовки")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio" }, [
            _c("input", {
              staticClass: "custom-radio",
              attrs: {
                type: "radio",
                id: "packaging-1",
                name: "packaging",
                value: "indigo"
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "packaging-1" } }, [_vm._v("Весовой")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "radio" }, [
            _c("input", {
              staticClass: "custom-radio",
              attrs: {
                type: "radio",
                id: "packaging-2",
                name: "packaging",
                value: "red"
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "packaging-2" } }, [
              _vm._v("Фасованнный")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_filter_catalog" }, [
          _c("div", { staticClass: "title_filter_catalog" }, [
            _vm._v("Страна производителя")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "read-more-state",
            attrs: { type: "checkbox", id: "countries" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "read-more-wrap" }, [
            _c("div", { staticClass: "checkbox filter_checkbox" }, [
              _c("input", {
                staticClass: "custom-checkbox",
                attrs: {
                  type: "checkbox",
                  id: "country-1",
                  name: "country",
                  value: "indigo"
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "country-1" } }, [_vm._v("Россия")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "checkbox filter_checkbox" }, [
              _c("input", {
                staticClass: "custom-checkbox",
                attrs: {
                  type: "checkbox",
                  id: "country-2",
                  name: "country",
                  value: "indigo"
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "country-2" } }, [_vm._v("Украина")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "checkbox filter_checkbox" }, [
              _c("input", {
                staticClass: "custom-checkbox",
                attrs: {
                  type: "checkbox",
                  id: "country-3",
                  name: "country",
                  value: "indigo"
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "country-3" } }, [
                _vm._v("Азербайджан")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "checkbox filter_checkbox read-more-target" },
              [
                _c("input", {
                  staticClass: "custom-checkbox",
                  attrs: {
                    type: "checkbox",
                    id: "country-5",
                    name: "country",
                    value: "indigo"
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "country-5" } }, [
                  _vm._v("Белоруссия")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "checkbox filter_checkbox read-more-target" },
              [
                _c("input", {
                  staticClass: "custom-checkbox",
                  attrs: {
                    type: "checkbox",
                    id: "country-6",
                    name: "country",
                    value: "indigo"
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "country-6" } }, [
                  _vm._v("Казахстан")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("label", {
            staticClass: "read-more-trigger",
            attrs: { for: "countries" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(c)return!1;return f?-1:l||c?c:w}}},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h)}},function(t,e,n){"use strict";function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var r=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return!!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},h=function(t){delete y[t]},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1))}:v&&v.now?i=function(t){v.now(s(m,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i)}catch(t){c&&!s&&c.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1))}catch(t){F.call(i,t)}}):(n._v=t,n._s=1,D(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1))}catch(t){F.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1)},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V)})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";function i(t){n(99)}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u}},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(a)n=function(){s.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l)}}else n=function(){r.call(i,l)};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o}])});

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Catalog.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c06beb38", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("91a86c6a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuescroll/dist/vuescroll.js":
/*!**************************************************!*\
  !*** ./node_modules/vuescroll/dist/vuescroll.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
    * Vuescroll v4.17.3
    * (c) 2018-2021 Yi(Yves) Wang
    * Released under the MIT License
    * Github: https://github.com/YvesCoding/vuescroll
    * Website: http://vuescrolljs.yvescoding.org/
    */
   
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")) :
	0;
}(this, (function (Vue) { 'use strict';

Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function isIE() {
  /* istanbul ignore if */
  if (isServer()) return false;

  var agent = navigator.userAgent.toLowerCase();
  return agent.indexOf('msie') !== -1 || agent.indexOf('trident') !== -1 || agent.indexOf(' edge/') !== -1;
}

var isIos = function isIos() {
  /* istanbul ignore if */
  if (isServer()) return false;

  var u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

/* istanbul ignore next */
var isServer = function isServer() {
  return Vue.prototype.$isServer;
};

var touchManager = function () {
  function touchManager() {
    classCallCheck(this, touchManager);
  }

  createClass(touchManager, [{
    key: 'getEventObject',
    value: function getEventObject(originEvent) {
      return this.touchObject ? this.isTouch ? originEvent.touches : [originEvent] : null;
    }
  }, {
    key: 'getTouchObject',
    value: function getTouchObject() /* istanbul ignore next */{
      if (isServer()) return null;

      this.isTouch = false;
      var agent = navigator.userAgent,
          platform = navigator.platform,
          touchObject = {};
      touchObject.touch = !!('ontouchstart' in window && !window.opera || 'msmaxtouchpoints' in window.navigator || 'maxtouchpoints' in window.navigator || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
      touchObject.nonDeskTouch = touchObject.touch && !/win32/i.test(platform) || touchObject.touch && /win32/i.test(platform) && /mobile/i.test(agent);

      touchObject.eventType = 'onmousedown' in window && !touchObject.nonDeskTouch ? 'mouse' : 'ontouchstart' in window ? 'touch' : 'msmaxtouchpoints' in window.navigator || navigator.msMaxTouchPoints > 0 ? 'mstouchpoints' : 'maxtouchpoints' in window.navigator || navigator.maxTouchPoints > 0 ? 'touchpoints' : 'mouse';
      switch (touchObject.eventType) {
        case 'mouse':
          touchObject.touchstart = 'mousedown';
          touchObject.touchend = 'mouseup';
          touchObject.touchmove = 'mousemove';

          touchObject.touchenter = 'mouseenter';
          touchObject.touchmove = 'mousemove';
          touchObject.touchleave = 'mouseleave';
          break;
        case 'touch':
          touchObject.touchstart = 'touchstart';
          touchObject.touchend = 'touchend';
          touchObject.touchmove = 'touchmove';
          touchObject.touchcancel = 'touchcancel';

          touchObject.touchenter = 'touchstart';
          touchObject.touchmove = 'touchmove';
          touchObject.touchleave = 'touchend';
          this.isTouch = true;
          break;
        case 'mstouchpoints':
          touchObject.touchstart = 'MSPointerDown';
          touchObject.touchend = 'MSPointerUp';
          touchObject.touchmove = 'MSPointerMove';
          touchObject.touchcancel = 'MSPointerCancel';

          touchObject.touchenter = 'MSPointerDown';
          touchObject.touchmove = 'MSPointerMove';
          touchObject.touchleave = 'MSPointerUp';
          break;
        case 'touchpoints':
          touchObject.touchstart = 'pointerdown';
          touchObject.touchend = 'pointerup';
          touchObject.touchmove = 'pointermove';
          touchObject.touchcancel = 'pointercancel';

          touchObject.touchenter = 'pointerdown';
          touchObject.touchmove = 'pointermove';
          touchObject.touchleave = 'pointerup';
          break;
      }

      return this.touchObject = touchObject;
    }
  }]);
  return touchManager;
}();

function deepCopy(from, to, shallow) {
  if (shallow && isUndef(to)) {
    return from;
  }

  if (isArray(from)) {
    to = [];
    from.forEach(function (item, index) {
      to[index] = deepCopy(item, to[index]);
    });
  } else if (from) {
    if (!isPlainObj(from)) {
      return from;
    }
    to = {};
    for (var key in from) {
      to[key] = _typeof(from[key]) === 'object' ? deepCopy(from[key], to[key]) : from[key];
    }
  }
  return to;
}

function mergeObject(from, to, force, shallow) {
  if (shallow && isUndef(to)) {
    return from;
  }

  to = to || {};

  if (isArray(from)) {
    if (!isArray(to) && force) {
      to = [];
    }
    if (isArray(to)) {
      from.forEach(function (item, index) {
        to[index] = mergeObject(item, to[index], force, shallow);
      });
    }
  } else if (from) {
    if (!isPlainObj(from)) {
      if (force) {
        to = from;
      }
    } else {
      for (var key in from) {
        if (_typeof(from[key]) === 'object') {
          if (isUndef(to[key])) {
            to[key] = deepCopy(from[key], to[key], shallow);
          } else {
            mergeObject(from[key], to[key], force, shallow);
          }
        } else {
          if (isUndef(to[key]) || force) to[key] = from[key];
        }
      }
    }
  }

  return to;
}

function defineReactive(target, key, source, souceKey) {
  /* istanbul ignore if */
  if (!source[key] && typeof source !== 'function') {
    return;
  }
  souceKey = souceKey || key;
  Object.defineProperty(target, key, {
    get: function get$$1() {
      return source[souceKey];
    },

    configurable: true
  });
}

var scrollBarWidth = void 0;
function getGutter() {
  /* istanbul ignore next */
  if (isServer()) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
}

function eventCenter(dom, eventName, hander) {
  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'on';

  type == 'on' ? dom.addEventListener(eventName, hander, capture) : dom.removeEventListener(eventName, hander, capture);
}

var error = function error(msg) {
  console.error('[vuescroll] ' + msg);
};
var warn = function warn(msg) {
  console.warn('[vuescroll] ' + msg);
};

function isChildInParent(child, parent) {
  var flag = false;
  if (!child || !parent) {
    return flag;
  }
  while (child.parentNode !== parent && child.parentNode.nodeType !== 9 && !child.parentNode._isVuescroll) {
    child = child.parentNode;
  }
  if (child.parentNode == parent) {
    flag = true;
  }
  return flag;
}

function getPrefix(global) {
  var docStyle = document.documentElement.style;
  var engine;
  /* istanbul ignore if */
  if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto';
  } /* istanbul ignore next */else if ('MozAppearance' in docStyle) {
      engine = 'gecko';
    } else if ('WebkitAppearance' in docStyle) {
      engine = 'webkit';
    } /* istanbul ignore next */else if (typeof navigator.cpuClass === 'string') {
        engine = 'trident';
      }
  var vendorPrefix = {
    trident: 'ms',
    gecko: 'moz',
    webkit: 'webkit',
    presto: 'O'
  }[engine];
  return vendorPrefix;
}

function getComplitableStyle(property, value) {
  /* istanbul ignore if */
  if (isServer()) return false;

  var compatibleValue = '-' + getPrefix(window) + '-' + value;
  var testElm = document.createElement('div');
  testElm.style[property] = compatibleValue;
  if (testElm.style[property] == compatibleValue) {
    return compatibleValue;
  }
  /* istanbul ignore next */
  return false;
}

/**
 * Insert children into user-passed slot at vnode level
 */
function insertChildrenIntoSlot(h) {
  var parentVnode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var childVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var swapChildren = arguments[4];

  /* istanbul ignore if */
  if (parentVnode && parentVnode.length > 1) {
    return swapChildren ? [].concat(toConsumableArray(childVNode), toConsumableArray(parentVnode)) : [].concat(toConsumableArray(parentVnode), toConsumableArray(childVNode));
  }

  parentVnode = parentVnode[0];

  var _getVnodeInfo = getVnodeInfo(parentVnode),
      ch = _getVnodeInfo.ch,
      tag = _getVnodeInfo.tag,
      isComponent = _getVnodeInfo.isComponent;

  if (isComponent) {
    parentVnode.data = mergeObject({ attrs: parentVnode.componentOptions.propsData }, parentVnode.data, false, // force: false
    true // shallow: true
    );
  }
  ch = swapChildren ? [].concat(toConsumableArray(childVNode), toConsumableArray(ch)) : [].concat(toConsumableArray(ch), toConsumableArray(childVNode));
  delete parentVnode.data.slot;

  return h(tag, mergeObject(data, parentVnode.data, false, true), ch);
}

/**
 *  Get the info of a vnode,
 * vnode must be parentVnode
 */
function getVnodeInfo(vnode) {
  if (!vnode || vnode.length > 1) return {};

  vnode = vnode[0] ? vnode[0] : vnode;
  var isComponent = !!vnode.componentOptions;
  var ch = void 0;
  var tag = void 0;

  if (isComponent) {
    ch = vnode.componentOptions.children || [];
    tag = vnode.componentOptions.tag;
  } else {
    ch = vnode.children || [];
    tag = vnode.tag;
  }

  return {
    isComponent: isComponent,
    ch: ch,
    tag: tag
  };
}

/**
 * Get the vuescroll instance instead of
 * user pass component like slot.
 */
function getRealParent(ctx) {
  var parent = ctx.$parent;
  if (!parent._isVuescrollRoot && parent) {
    parent = parent.$parent;
  }
  return parent;
}

var isArray = function isArray(_) {
  return Array.isArray(_);
};
var isPlainObj = function isPlainObj(_) {
  return Object.prototype.toString.call(_) == '[object Object]';
};
var isUndef = function isUndef(_) {
  return typeof _ === 'undefined';
};

function getNumericValue(distance, size) {
  var number = void 0;
  if (!(number = /(-?\d+(?:\.\d+?)?)%$/.exec(distance))) {
    number = distance - 0;
  } else {
    number = number[1] - 0;
    number = size * number / 100;
  }
  return number;
}

function createStyle(styleId, cssText) {
  /* istanbul ignore if */
  if (isServer() || document.getElementById(styleId)) {
    return;
  }

  var head = document.head || doc.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.id = styleId;
  style.type = 'text/css';

  /* istanbul ignore if */
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(document.createTextNode(cssText));
  }

  head.appendChild(style);
}

// Hide the ios native scrollbar.
function createHideBarStyle() {
  /* istanbul ignore next */
  {
    var cssText = '.__hidebar::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }';

    createStyle('vuescroll-hide-ios-bar', cssText);
  }
}

// create slide mode style
function createSlideModeStyle() {
  var cssText = '\n    @-webkit-keyframes loading-rotate {\n      to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn);\n      }\n    }\n\n    @keyframes loading-rotate {\n      to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn);\n      }\n    }\n\n    @-webkit-keyframes loading-wipe {\n      0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n      }\n      50% {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -40px;\n      }\n      to {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -120px;\n      }\n    }\n\n    @keyframes loading-wipe {\n      0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n      }\n      50% {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -40px;\n      }\n      to {\n        stroke-dasharray: 90, 150;\n        stroke-dashoffset: -120px;\n      }\n    }\n\n    .__vuescroll .__refresh,\n    .__vuescroll .__load {\n      position: absolute;\n      width: 100%;\n      color: black;\n      height: 50px;\n      line-height: 50px;\n      text-align: center;\n      font-size: 16px;\n    }\n    .__vuescroll .__refresh svg,\n    .__vuescroll .__load svg {\n      margin-right: 10px;\n      width: 25px;\n      height: 25px;\n      vertical-align: sub;\n    }\n    .__vuescroll .__refresh svg.active,\n    .__vuescroll .__load svg.active {\n      transition: all 0.2s;\n    }\n    .__vuescroll .__refresh svg.active.deactive,\n    .__vuescroll .__load svg.active.deactive {\n      transform: rotateZ(180deg);\n    }\n    .__vuescroll .__refresh svg path,\n    .__vuescroll .__refresh svg rect,\n    .__vuescroll .__load svg path,\n    .__vuescroll .__load svg rect {\n      fill: #20a0ff;\n    }\n    .__vuescroll .__refresh svg.start,\n    .__vuescroll .__load svg.start {\n      stroke: #343640;\n      stroke-width: 4;\n      stroke-linecap: round;\n      -webkit-animation: loading-rotate 2s linear infinite;\n      animation: loading-rotate 2s linear infinite;\n    }\n    .__vuescroll .__refresh svg.start .bg-path,\n    .__vuescroll .__load svg.start .bg-path {\n      stroke: #f2f2f2;\n      fill: none;\n    }\n    .__vuescroll .__refresh svg.start .active-path,\n    .__vuescroll .__load svg.start .active-path {\n      stroke: #20a0ff;\n      fill: none;\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: 0;\n      -webkit-animation: loading-wipe 1.5s ease-in-out infinite;\n      animation: loading-wipe 1.5s ease-in-out infinite;\n    }\n  ';

  createStyle('vuescroll-silde-mode-style', cssText);
}

var api = {
  mounted: function mounted() {
    vsInstances[this._uid] = this;
  },
  beforeDestroy: function beforeDestroy() {
    delete vsInstances[this._uid];
  },

  methods: {
    // public api
    scrollTo: function scrollTo(_ref, speed, easing) {
      var x = _ref.x,
          y = _ref.y;

      // istanbul ignore if
      if (speed === true || typeof speed == 'undefined') {
        speed = this.mergedOptions.scrollPanel.speed;
      }
      this.internalScrollTo(x, y, speed, easing);
    },
    scrollBy: function scrollBy(_ref2, speed, easing) {
      var _ref2$dx = _ref2.dx,
          dx = _ref2$dx === undefined ? 0 : _ref2$dx,
          _ref2$dy = _ref2.dy,
          dy = _ref2$dy === undefined ? 0 : _ref2$dy;

      var _getPosition = this.getPosition(),
          _getPosition$scrollLe = _getPosition.scrollLeft,
          scrollLeft = _getPosition$scrollLe === undefined ? 0 : _getPosition$scrollLe,
          _getPosition$scrollTo = _getPosition.scrollTop,
          scrollTop = _getPosition$scrollTo === undefined ? 0 : _getPosition$scrollTo;

      if (dx) {
        scrollLeft += getNumericValue(dx, this.scrollPanelElm.scrollWidth - this.$el.clientWidth);
      }
      if (dy) {
        scrollTop += getNumericValue(dy, this.scrollPanelElm.scrollHeight - this.$el.clientHeight);
      }
      this.internalScrollTo(scrollLeft, scrollTop, speed, easing);
    },
    scrollIntoView: function scrollIntoView(elm) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var parentElm = this.$el;

      if (typeof elm === 'string') {
        elm = parentElm.querySelector(elm);
      }

      if (!isChildInParent(elm, parentElm)) {
        warn('The element or selector you passed is not the element of Vuescroll, please pass the element that is in Vuescroll to scrollIntoView API. ');
        return;
      }

      // parent elm left, top

      var _$el$getBoundingClien = this.$el.getBoundingClientRect(),
          left = _$el$getBoundingClien.left,
          top = _$el$getBoundingClien.top;
      // child elm left, top


      var _elm$getBoundingClien = elm.getBoundingClientRect(),
          childLeft = _elm$getBoundingClien.left,
          childTop = _elm$getBoundingClien.top;

      var diffX = left - childLeft;
      var diffY = top - childTop;

      this.scrollBy({
        dx: -diffX,
        dy: -diffY
      }, animate);
    },
    refresh: function refresh() {
      this.refreshInternalStatus();
      // refresh again to keep status is correct
      this.$nextTick(this.refreshInternalStatus);
    }
  }
};

/** Public Api */

/**
 * Refresh all
 */
var vsInstances = {};
function refreshAll() {
  for (var vs in vsInstances) {
    vsInstances[vs].refresh();
  }
}

var baseConfig = {
  // vuescroll
  vuescroll: {
    // vuescroll's size(height/width) should be a percent(100%)
    // or be a number that is equal to its parentNode's width or
    // height ?
    sizeStrategy: 'percent',
    /** Whether to detect dom resize or not */
    detectResize: true,
    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true
  },
  scrollPanel: {
    // when component mounted.. it will automatically scrolls.
    initialScrollY: false,
    initialScrollX: false,
    // feat: #11
    scrollingX: true,
    scrollingY: true,
    speed: 300,
    easing: undefined,
    // Sometimes, the nativebar maybe on the left,
    // See https://github.com/YvesCoding/vuescroll/issues/64
    verticalNativeBarPos: 'right',
    maxHeight: undefined,
    maxWidth: undefined
  },

  //
  rail: {
    background: '#01a99a',
    opacity: 0,
    border: 'none',
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px',
    /** Specify rail's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** Rail the distance from the two ends of the X axis and Y axis. **/
    gutterOfEnds: null,
    /** Rail the distance from the side of container. **/
    gutterOfSide: '2px',
    /** Whether to keep rail show or not, default -> false, event content height is not enough */
    keepShow: false
  },
  bar: {
    /** How long to hide bar after mouseleave, default -> 500 */
    showDelay: 500,
    /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** Whether to show bar on scrolling, default -> true */
    onlyShowBarOnScroll: true,
    /** Whether to keep show or not, default -> false */
    keepShow: false,
    /** Bar's background , default -> #00a650 */
    background: 'rgb(3, 185, 118)',
    /** Bar's opacity, default -> 1  */
    opacity: 1,
    /** bar's size(Height/Width) , default -> 6px */

    size: '6px',
    minSize: 0,
    disable: false
  },
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
};
/**
 * validate the options
 * @export
 * @param {any} ops
 */
function validateOps(ops) {
  var renderError = false;
  var scrollPanel = ops.scrollPanel;
  var _ops$bar = ops.bar,
      vBar = _ops$bar.vBar,
      hBar = _ops$bar.hBar;
  var _ops$rail = ops.rail,
      vRail = _ops$rail.vRail,
      hRail = _ops$rail.hRail;

  // validate scrollPanel

  var initialScrollY = scrollPanel['initialScrollY'];
  var initialScrollX = scrollPanel['initialScrollX'];

  if (initialScrollY && !String(initialScrollY).match(/^\d+(\.\d+)?(%)?$/)) {
    warn('The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.');
  }
  if (initialScrollX && !String(initialScrollX).match(/^\d+(\.\d+)?(%)?$/)) {
    warn('The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.');
  }

  // validate deprecated vBar/hBar vRail/hRail
  if (vBar || hBar || vRail || hRail) {
    warn('The options: vRail, hRail, vBar, hBar have been deprecated since v4.7.0,' + 'please use corresponing rail/bar instead!');
  }

  if (_extraValidate) {
    _extraValidate = [].concat(_extraValidate);
    _extraValidate.forEach(function (hasError) {
      if (hasError(ops)) {
        renderError = true;
      }
    });
  }
  return renderError;
}

var _extraValidate = null;
var extendOpts = function extendOpts(extraOpts, extraValidate) {
  extraOpts = [].concat(extraOpts);
  extraOpts.forEach(function (opts) {
    mergeObject(opts, baseConfig);
  });

  _extraValidate = extraValidate;
};

// all modes
var modes = ['slide', 'native'];
// do nothing
var NOOP = function NOOP() {};
// some small changes.
var smallChangeArray = ['mergedOptions.vuescroll.pullRefresh.tips', 'mergedOptions.vuescroll.pushLoad.tips', 'mergedOptions.vuescroll.scroller.disable', 'mergedOptions.rail', 'mergedOptions.bar'];
// refresh/load dom ref/key...
var __REFRESH_DOM_NAME = 'refreshDom';
var __LOAD_DOM_NAME = 'loadDom';

var scrollMap = {
  vertical: {
    size: 'height',
    opsSize: 'width',
    posName: 'top',
    opposName: 'bottom',
    sidePosName: 'right',
    page: 'pageY',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    offset: 'offsetHeight',
    client: 'clientY',
    axis: 'Y',
    scrollButton: {
      start: 'top',
      end: 'bottom'
    }
  },
  horizontal: {
    size: 'width',
    opsSize: 'height',
    posName: 'left',
    opposName: 'right',
    sidePosName: 'bottom',
    page: 'pageX',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    offset: 'offsetWidth',
    client: 'clientX',
    axis: 'X',
    scrollButton: {
      start: 'left',
      end: 'right'
    }
  }
};

function requestAnimationFrame(global) {
  // Check for request animation Frame support
  var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
  var isNative = !!requestFrame;

  if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
    isNative = false;
  }

  if (isNative) {
    return function (callback, root) {
      requestFrame(callback, root);
    };
  }

  var TARGET_FPS = 60;
  var requests = {};
  var rafHandle = 1;
  var intervalHandle = null;
  var lastActive = +new Date();

  return function (callback) {
    var callbackHandle = rafHandle++;

    // Store callback
    requests[callbackHandle] = callback;

    // Create timeout at first request
    if (intervalHandle === null) {
      intervalHandle = setInterval(function () {
        var time = +new Date();
        var currentRequests = requests;

        // Reset data structure before executing callbacks
        requests = {};

        for (var key in currentRequests) {
          if (currentRequests.hasOwnProperty(key)) {
            currentRequests[key](time);
            lastActive = time;
          }
        }

        // Disable the timeout when nothing happens for a certain
        // period of time
        if (time - lastActive > 2500) {
          clearInterval(intervalHandle);
          intervalHandle = null;
        }
      }, 1000 / TARGET_FPS);
    }

    return callbackHandle;
  };
}

var colorCache = {};
var rgbReg = /rgb\(/;
var extractRgbColor = /rgb\((.*)\)/;

// Transform a common color int oa `rgbA` color
function getRgbAColor(color, opacity) {
  var id = color + '&' + opacity;
  if (colorCache[id]) {
    return colorCache[id];
  }

  var div = document.createElement('div');
  div.style.background = color;
  document.body.appendChild(div);
  var computedColor = window.getComputedStyle(div).backgroundColor;
  document.body.removeChild(div);

  /* istanbul ignore if */
  if (!rgbReg.test(computedColor)) {
    return color;
  }

  return colorCache[id] = 'rgba(' + extractRgbColor.exec(computedColor)[1] + ', ' + opacity + ')';
}

var bar = {
  name: 'bar',
  props: {
    ops: Object,
    state: Object,
    hideBar: Boolean,
    otherBarHide: Boolean,
    type: String
  },
  computed: {
    bar: function bar() {
      return scrollMap[this.type];
    },
    barSize: function barSize() {
      return Math.max(this.state.size, this.ops.bar.minSize);
    },
    barRatio: function barRatio() {
      return (1 - this.barSize) / (1 - this.state.size);
    }
  },
  render: function render(h) {
    var _style, _style2, _barStyle;

    var vm = this;
    /** Get rgbA format background color */
    var railBackgroundColor = getRgbAColor(vm.ops.rail.background, vm.ops.rail.opacity);

    if (!this.touchManager) {
      this.touchManager = new touchManager();
    }

    /** Rail Data */
    var railSize = vm.ops.rail.size;
    var endPos = vm.otherBarHide ? 0 : railSize;
    var touchObj = vm.touchManager.getTouchObject();
    var rail = {
      class: '__rail-is-' + vm.type,
      style: (_style = {
        position: 'absolute',
        'z-index': '1',

        borderRadius: vm.ops.rail.specifyBorderRadius || railSize,
        background: railBackgroundColor,
        border: vm.ops.rail.border
      }, defineProperty(_style, vm.bar.opsSize, railSize), defineProperty(_style, vm.bar.posName, vm.ops.rail['gutterOfEnds'] || 0), defineProperty(_style, vm.bar.opposName, vm.ops.rail['gutterOfEnds'] || endPos), defineProperty(_style, vm.bar.sidePosName, vm.ops.rail['gutterOfSide']), _style)
    };

    if (touchObj) {
      var _rail$on;

      rail.on = (_rail$on = {}, defineProperty(_rail$on, touchObj.touchenter, function () {
        vm.setRailHover();
      }), defineProperty(_rail$on, touchObj.touchleave, function () {
        vm.setRailLeave();
      }), _rail$on);
    }

    // left space for scroll button
    var buttonSize = vm.ops.scrollButton.enable ? railSize : 0;
    var barWrapper = {
      class: '__bar-wrap-is-' + vm.type,
      style: (_style2 = {
        position: 'absolute',
        borderRadius: vm.ops.rail.specifyBorderRadius || railSize
      }, defineProperty(_style2, vm.bar.posName, buttonSize), defineProperty(_style2, vm.bar.opposName, buttonSize), _style2),
      on: {}
    };

    var scrollDistance = vm.state.posValue * vm.state.size;
    var pos = scrollDistance * vm.barRatio / vm.barSize;
    var opacity = vm.state.opacity;
    var parent = getRealParent(this);

    // set class hook
    parent.setClassHook(this.type == 'vertical' ? 'vBarVisible' : 'hBarVisible', !!opacity);

    /** Scrollbar style */
    var barStyle = (_barStyle = {
      cursor: 'pointer',
      position: 'absolute',
      margin: 'auto',
      transition: 'opacity 0.5s',
      'user-select': 'none',
      'border-radius': 'inherit'

    }, defineProperty(_barStyle, vm.bar.size, vm.barSize * 100 + '%'), defineProperty(_barStyle, 'background', vm.ops.bar.background), defineProperty(_barStyle, vm.bar.opsSize, vm.ops.bar.size), defineProperty(_barStyle, 'opacity', opacity), defineProperty(_barStyle, 'transform', 'translate' + scrollMap[vm.type].axis + '(' + pos + '%)'), _barStyle);
    var bar = {
      style: barStyle,
      class: '__bar-is-' + vm.type,
      ref: 'thumb',
      on: {}
    };

    if (vm.type == 'vertical') {
      barWrapper.style.width = '100%';
      // Let bar to be on the center.
      bar.style.left = 0;
      bar.style.right = 0;
    } else {
      barWrapper.style.height = '100%';
      bar.style.top = 0;
      bar.style.bottom = 0;
    }

    /* istanbul ignore next */
    {
      var _touchObj = this.touchManager.getTouchObject();
      bar.on[_touchObj.touchstart] = this.createBarEvent();
      barWrapper.on[_touchObj.touchstart] = this.createTrackEvent();
    }

    return h(
      'div',
      rail,
      [this.createScrollbarButton(h, 'start'), this.hideBar ? null : h(
        'div',
        barWrapper,
        [h('div', bar)]
      ), this.createScrollbarButton(h, 'end')]
    );
  },
  data: function data() {
    return {
      isBarDragging: false
    };
  },

  methods: {
    setRailHover: function setRailHover() {
      var parent = getRealParent(this);
      var state = parent.vuescroll.state;

      if (!state.isRailHover) {
        state.isRailHover = true;
        parent.showBar();
      }
    },
    setRailLeave: function setRailLeave() {
      var parent = getRealParent(this);
      var state = parent.vuescroll.state;

      state.isRailHover = false;
      parent.hideBar();
    },
    setBarDrag: function setBarDrag(val) /* istanbul ignore next */{
      this.$emit('setBarDrag', this.isBarDragging = val);

      var parent = getRealParent(this);
      // set class hook
      parent.setClassHook(this.type == 'vertical' ? 'vBarDragging' : 'hBarDragging', !!val);
    },
    createBarEvent: function createBarEvent() {
      var ctx = this;

      var parent = getRealParent(ctx);
      var touchObj = ctx.touchManager.getTouchObject();

      function mousedown(e) /* istanbul ignore next */{
        var event = ctx.touchManager.getEventObject(e);
        if (!event) return;

        e.stopImmediatePropagation();
        e.preventDefault();
        event = event[0];

        document.onselectstart = function () {
          return false;
        };
        ctx.axisStartPos = event[ctx.bar.client] - ctx.$refs['thumb'].getBoundingClientRect()[ctx.bar.posName];

        // Tell parent that the mouse has been down.
        ctx.setBarDrag(true);
        eventCenter(document, touchObj.touchmove, mousemove);
        eventCenter(document, touchObj.touchend, mouseup);
      }

      function mousemove(e) /* istanbul ignore next */{
        if (!ctx.axisStartPos) {
          return;
        }

        var event = ctx.touchManager.getEventObject(e);
        if (!event) return;

        event = event[0];

        var thubmParent = ctx.$refs.thumb.parentNode;

        var delta = event[ctx.bar.client] - thubmParent.getBoundingClientRect()[ctx.bar.posName];
        delta = delta / ctx.barRatio;

        var percent = (delta - ctx.axisStartPos) / thubmParent[ctx.bar.offset];
        parent.scrollTo(defineProperty({}, ctx.bar.axis.toLowerCase(), parent.scrollPanelElm[ctx.bar.scrollSize] * percent), false);
      }

      function mouseup() /* istanbul ignore next */{
        ctx.setBarDrag(false);
        parent.hideBar();

        document.onselectstart = null;
        ctx.axisStartPos = 0;

        eventCenter(document, touchObj.touchmove, mousemove, false, 'off');
        eventCenter(document, touchObj.touchend, mouseup, false, 'off');
      }

      return mousedown;
    },
    createTrackEvent: function createTrackEvent() {
      var ctx = this;

      return function handleClickTrack(e) {
        var parent = getRealParent(ctx);

        var _ctx$bar = ctx.bar,
            client = _ctx$bar.client,
            offset = _ctx$bar.offset,
            posName = _ctx$bar.posName,
            axis = _ctx$bar.axis;

        var thumb = ctx.$refs['thumb'];

        e.preventDefault();
        e.stopImmediatePropagation();

        /* istanbul ignore if */
        if (!thumb) return;

        var barOffset = thumb[offset];
        var event = ctx.touchManager.getEventObject(e)[0];

        var percent = (event[client] - e.currentTarget.getBoundingClientRect()[posName] - barOffset / 2) / (e.currentTarget[offset] - barOffset);

        parent.scrollTo(defineProperty({}, axis.toLowerCase(), percent * 100 + '%'));
      };
    },


    // Scrollbuton relative things...
    createScrollbarButton: function createScrollbarButton(h, type /* start or end  */) {
      var _style3;

      var barContext = this;

      if (!barContext.ops.scrollButton.enable) {
        return null;
      }

      var size = barContext.ops.rail.size;
      var _barContext$ops$scrol = barContext.ops.scrollButton,
          opacity = _barContext$ops$scrol.opacity,
          background = _barContext$ops$scrol.background;

      var borderColor = getRgbAColor(background, opacity);

      var wrapperProps = {
        class: ['__bar-button', '__bar-button-is-' + barContext.type + '-' + type],
        style: (_style3 = {}, defineProperty(_style3, barContext.bar.scrollButton[type], 0), defineProperty(_style3, 'width', size), defineProperty(_style3, 'height', size), defineProperty(_style3, 'position', 'absolute'), defineProperty(_style3, 'cursor', 'pointer'), defineProperty(_style3, 'display', 'table'), _style3),
        ref: type
      };

      var innerProps = {
        class: '__bar-button-inner',
        style: {
          border: 'calc(' + size + ' / 2.5) solid transparent',
          width: '0',
          height: '0',
          margin: 'auto',
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '0',
          left: '0'
        },
        on: {}
      };

      if (barContext.type == 'vertical') {
        if (type == 'start') {
          innerProps.style['border-bottom-color'] = borderColor;
          innerProps.style['transform'] = 'translateY(-25%)';
        } else {
          innerProps.style['border-top-color'] = borderColor;
          innerProps.style['transform'] = 'translateY(25%)';
        }
      } else {
        if (type == 'start') {
          innerProps.style['border-right-color'] = borderColor;
          innerProps.style['transform'] = 'translateX(-25%)';
        } else {
          innerProps.style['border-left-color'] = borderColor;
          innerProps.style['transform'] = 'translateX(25%)';
        }
      }

      /* istanbul ignore next */
      {
        var touchObj = this.touchManager.getTouchObject();
        innerProps.on[touchObj.touchstart] = this.createScrollButtonEvent(type, touchObj);
      }

      return h(
        'div',
        wrapperProps,
        [h('div', innerProps)]
      );
    },
    createScrollButtonEvent: function createScrollButtonEvent(type, touchObj) {
      var ctx = this;
      var parent = getRealParent(ctx);

      var _ctx$ops$scrollButton = ctx.ops.scrollButton,
          step = _ctx$ops$scrollButton.step,
          mousedownStep = _ctx$ops$scrollButton.mousedownStep;


      var stepWithDirection = type == 'start' ? -step : step;
      var mousedownStepWithDirection = type == 'start' ? -mousedownStep : mousedownStep;
      var ref = requestAnimationFrame(window);

      // bar props: type
      var barType = ctx.type;

      var isMouseDown = false;
      var isMouseout = true;
      var timeoutId = void 0;

      function start(e) {
        /* istanbul ignore if */

        if (3 == e.which) {
          return;
        }

        // set class hook
        parent.setClassHook('cliking' + barType + type + 'Button', true);

        e.stopImmediatePropagation();
        e.preventDefault();

        isMouseout = false;

        parent.scrollBy(defineProperty({}, 'd' + ctx.bar.axis.toLowerCase(), stepWithDirection));

        eventCenter(document, touchObj.touchend, endPress, false);

        if (touchObj.touchstart == 'mousedown') {
          var elm = ctx.$refs[type];
          eventCenter(elm, 'mouseenter', enter, false);
          eventCenter(elm, 'mouseleave', leave, false);
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () /* istanbul ignore next */{
          isMouseDown = true;
          ref(pressing, window);
        }, 500);
      }

      function pressing() /* istanbul ignore next */{
        if (isMouseDown && !isMouseout) {
          parent.scrollBy(defineProperty({}, 'd' + ctx.bar.axis.toLowerCase(), mousedownStepWithDirection), false);
          ref(pressing, window);
        }
      }

      function endPress() {
        clearTimeout(timeoutId);
        isMouseDown = false;
        eventCenter(document, touchObj.touchend, endPress, false, 'off');

        if (touchObj.touchstart == 'mousedown') {
          var elm = ctx.$refs[type];
          eventCenter(elm, 'mouseenter', enter, false, 'off');
          eventCenter(elm, 'mouseleave', leave, false, 'off');
        }

        parent.setClassHook('cliking' + barType + type + 'Button', false);
      }

      function enter() /* istanbul ignore next */{
        isMouseout = false;
        pressing();
      }

      function leave() /* istanbul ignore next */{
        isMouseout = true;
      }

      return start;
    }
  }
};

function getBarData(vm, type) {
  var axis = scrollMap[type].axis;
  /** type.charAt(0) = vBar/hBar */
  var barType = type.charAt(0) + 'Bar';

  var hideBar = !vm.bar[barType].state.size || !vm.mergedOptions.scrollPanel['scrolling' + axis] || vm.refreshLoad && type !== 'vertical' || vm.mergedOptions.bar.disable;

  var keepShowRail = vm.mergedOptions.rail.keepShow;

  if (hideBar && !keepShowRail) {
    return null;
  }

  return {
    hideBar: hideBar,
    props: {
      type: type,
      ops: {
        bar: vm.mergedOptions.bar,
        rail: vm.mergedOptions.rail,
        scrollButton: vm.mergedOptions.scrollButton
      },
      state: vm.bar[barType].state,
      hideBar: hideBar
    },
    on: {
      setBarDrag: vm.setBarDrag
    },
    ref: type + 'Bar',
    key: type
  };
}

/**
 * create bars
 *
 * @param {any} size
 * @param {any} type
 */
function createBar(h, vm) {
  var verticalBarProps = getBarData(vm, 'vertical');
  var horizontalBarProps = getBarData(vm, 'horizontal');

  // set class hooks
  vm.setClassHook('hasVBar', !!(verticalBarProps && !verticalBarProps.hideBar));
  vm.setClassHook('hasHBar', !!(horizontalBarProps && !horizontalBarProps.hideBar));

  return [verticalBarProps ? h('bar', _extends({}, verticalBarProps, {
    props: _extends({ otherBarHide: !horizontalBarProps }, verticalBarProps.props)
  })) : null, horizontalBarProps ? h('bar', _extends({}, horizontalBarProps, {
    props: _extends({ otherBarHide: !verticalBarProps }, horizontalBarProps.props)
  })) : null];
}

/**
 * This is like a HOC, It extracts the common parts of the
 * native-mode, slide-mode and mix-mode.
 * Each mode must implement the following methods:
 * 1. refreshInternalStatus : use to refresh the component
 * 2. destroy : Destroy some registryed events before component destroy.
 * 3. updateBarStateAndEmitEvent: use to update bar states and emit events.
 */

var createComponent = function createComponent(_ref) {
  var _render = _ref.render,
      components = _ref.components,
      mixins = _ref.mixins;
  return {
    name: 'vueScroll',
    props: {
      ops: { type: Object }
    },
    components: components,
    mixins: [api].concat(toConsumableArray([].concat(mixins))),
    created: function created() {
      var _this = this;

      /**
       * Begin to merge options
       */

      var _gfc = mergeObject(this.$vuescrollConfig || {}, {});
      var ops = mergeObject(baseConfig, _gfc);

      this.$options.propsData.ops = this.$options.propsData.ops || {};
      Object.keys(this.$options.propsData.ops).forEach(function (key) {
        {
          defineReactive(_this.mergedOptions, key, _this.$options.propsData.ops);
        }
      });
      // from ops to mergedOptions
      mergeObject(ops, this.mergedOptions);

      this._isVuescrollRoot = true;
      this.renderError = validateOps(this.mergedOptions);
    },
    render: function render(h) {
      var vm = this;
      if (vm.renderError) {
        return h('div', [[vm.$slots['default']]]);
      }

      if (!vm.touchManager) vm.touchManager = new touchManager();

      // vuescroll data
      var data = {
        style: {
          height: vm.vuescroll.state.height,
          width: vm.vuescroll.state.width,
          padding: 0,
          position: 'relative',
          overflow: 'hidden'
        },
        class: _extends({ __vuescroll: true }, vm.classHooks)
      };

      var touchObj = vm.touchManager.getTouchObject();
      if (touchObj) {
        var _data$on;

        data.on = (_data$on = {}, defineProperty(_data$on, touchObj.touchenter, function () {
          vm.vuescroll.state.pointerLeave = false;
          vm.updateBarStateAndEmitEvent();

          vm.setClassHook('mouseEnter', true);
        }), defineProperty(_data$on, touchObj.touchleave, function () {
          vm.vuescroll.state.pointerLeave = true;
          vm.hideBar();

          vm.setClassHook('mouseEnter', false);
        }), defineProperty(_data$on, touchObj.touchmove, function () /* istanbul ignore next */{
          vm.vuescroll.state.pointerLeave = false;
          vm.updateBarStateAndEmitEvent();
        }), _data$on);
      }

      var ch = [_render(h, vm)].concat(toConsumableArray(createBar(h, vm)));

      var _customContainer = this.$slots['scroll-container'];
      if (_customContainer) {
        return insertChildrenIntoSlot(h, _customContainer, ch, data);
      }

      return h(
        'div',
        data,
        [ch]
      );
    },
    mounted: function mounted() {
      var _this2 = this;

      if (!this.renderError) {
        this.initVariables();
        this.initWatchOpsChange();
        // Call external merged Api
        this.refreshInternalStatus();

        this.updatedCbs.push(function () {
          _this2.scrollToAnchor();
          // need to reflow to deal with the
          // latest thing.
          _this2.updateBarStateAndEmitEvent();
        });
      }
    },
    updated: function updated() {
      var _this3 = this;

      this.updatedCbs.forEach(function (cb) {
        cb.call(_this3);
      });
      // Clear
      this.updatedCbs = [];
    },
    beforeDestroy: function beforeDestroy() {
      if (this.destroy) {
        this.destroy();
      }
    },


    /** ------------------------------- Computed ----------------------------- */
    computed: {
      scrollPanelElm: function scrollPanelElm() {
        return this.$refs['scrollPanel']._isVue ? this.$refs['scrollPanel'].$el : this.$refs['scrollPanel'];
      }
    },
    data: function data() {
      return {
        vuescroll: {
          state: {
            isDragging: false,
            pointerLeave: true,
            isRailHover: false,
            /** Default sizeStrategies */
            height: '100%',
            width: '100%',
            // current size strategy
            currentSizeStrategy: 'percent',
            currentScrollState: null,
            currentScrollInfo: null
          }
        },
        bar: {
          vBar: {
            state: {
              posValue: 0,
              size: 0,
              opacity: 0
            }
          },
          hBar: {
            state: {
              posValue: 0,
              size: 0,
              opacity: 0
            }
          }
        },
        mergedOptions: {
          vuescroll: {},
          scrollPanel: {},
          scrollContent: {},
          rail: {},
          bar: {}
        },
        updatedCbs: [],
        renderError: false,

        classHooks: {
          hasVBar: false,
          hasHBar: false,

          vBarVisible: false,
          hBarVisible: false,

          vBarDragging: false,
          hBarDragging: false,

          clikingVerticalStartButton: false,
          clikingVerticalEndButton: false,
          clikingHorizontalStartButton: false,
          clikingHorizontalEndButton: false,

          mouseEnter: false
        }
      };
    },

    /** ------------------------------- Methods -------------------------------- */
    methods: {
      /** ------------------------ Handlers --------------------------- */

      scrollingComplete: function scrollingComplete() {
        this.updateBarStateAndEmitEvent('handle-scroll-complete');
      },
      setBarDrag: function setBarDrag(val) {
        /* istanbul ignore next */
        this.vuescroll.state.isDragging = val;
      },
      setClassHook: function setClassHook(name, value) {
        this.classHooks[name] = value;
      },


      /** ------------------------ Some Helpers --------------------------- */

      /*
       * To have a good ux, instead of hiding bar immediately, we hide bar
       * after some seconds by using this simple debounce-hidebar method.
       */
      showAndDefferedHideBar: function showAndDefferedHideBar(forceHideBar) {
        var _this4 = this;

        this.showBar();

        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = 0;
        }

        this.timeoutId = setTimeout(function () {
          _this4.timeoutId = 0;
          _this4.hideBar(forceHideBar);
        }, this.mergedOptions.bar.showDelay);
      },
      showBar: function showBar() {
        var opacity = this.mergedOptions.bar.opacity;
        this.bar.vBar.state.opacity = opacity;
        this.bar.hBar.state.opacity = opacity;
      },
      hideBar: function hideBar(forceHideBar) {
        var _vuescroll$state = this.vuescroll.state,
            isDragging = _vuescroll$state.isDragging,
            isRailHover = _vuescroll$state.isRailHover;
        /* istanbul ignore next */

        if (isDragging || isRailHover) {
          return;
        }

        if (forceHideBar && !this.mergedOptions.bar.keepShow) {
          this.bar.hBar.state.opacity = 0;
          this.bar.vBar.state.opacity = 0;
        }

        // add isDragging condition
        // to prevent from hiding bar while dragging the bar
        if (!this.mergedOptions.bar.keepShow && !this.vuescroll.state.isDragging) {
          this.bar.vBar.state.opacity = 0;
          this.bar.hBar.state.opacity = 0;
        }
      },
      useNumbericSize: function useNumbericSize() {
        this.vuescroll.state.currentSizeStrategy = 'number';
        var _mergedOptions$scroll = this.mergedOptions.scrollPanel,
            maxHeight = _mergedOptions$scroll.maxHeight,
            maxWidth = _mergedOptions$scroll.maxWidth;
        var _$el$parentNode = this.$el.parentNode,
            parentClientHeight = _$el$parentNode.clientHeight,
            parentClientWidth = _$el$parentNode.clientWidth;
        var _scrollPanelElm = this.scrollPanelElm,
            scrollHeight = _scrollPanelElm.scrollHeight,
            scrollWidth = _scrollPanelElm.scrollWidth;

        var width = void 0;
        var height = void 0;

        if (maxHeight || maxWidth) {
          height = scrollHeight <= maxHeight ? undefined : maxHeight;
          width = scrollWidth <= maxWidth ? undefined : maxWidth;
        } else {
          height = parentClientHeight;
          width = parentClientWidth;
        }

        this.vuescroll.state.height = height ? height + 'px' : undefined;
        this.vuescroll.state.width = width ? width + 'px' : undefined;
      },
      usePercentSize: function usePercentSize() {
        this.vuescroll.state.currentSizeStrategy = 'percent';

        this.vuescroll.state.height = '100%';
        this.vuescroll.state.width = '100%';
      },

      // Set its size to be equal to its parentNode
      setVsSize: function setVsSize() {
        var sizeStrategy = this.mergedOptions.vuescroll.sizeStrategy;
        var _mergedOptions$scroll2 = this.mergedOptions.scrollPanel,
            maxHeight = _mergedOptions$scroll2.maxHeight,
            maxWidth = _mergedOptions$scroll2.maxWidth;
        var _scrollPanelElm2 = this.scrollPanelElm,
            clientHeight = _scrollPanelElm2.clientHeight,
            clientWidth = _scrollPanelElm2.clientWidth;

        if (sizeStrategy == 'number' || maxHeight && clientHeight > maxHeight || maxWidth && clientWidth > maxWidth) {
          this.useNumbericSize();
        } else if (sizeStrategy == 'percent' && clientHeight != maxHeight && clientWidth != maxWidth) {
          this.usePercentSize();
        }
      },


      /** ------------------------ Init --------------------------- */
      initWatchOpsChange: function initWatchOpsChange() {
        var _this5 = this;

        var watchOpts = {
          deep: true,
          sync: true
        };
        this.$watch('mergedOptions', function () {
          setTimeout(function () {
            if (_this5.isSmallChangeThisTick) {
              _this5.isSmallChangeThisTick = false;
              _this5.updateBarStateAndEmitEvent('options-change');
              return;
            }
            _this5.refreshInternalStatus();
          }, 0);
        }, watchOpts);

        /**
         * We also watch `small` changes, and when small changes happen, we send
         * a signal to vuescroll, to tell it:
         * 1. we don't need to registry resize
         * 2. we don't need to registry scroller.
         */
        smallChangeArray.forEach(function (opts) {
          _this5.$watch(opts, function () {
            _this5.isSmallChangeThisTick = true;
          }, watchOpts);
        });
      },

      // scrollTo hash-anchor while mounted component have mounted.
      scrollToAnchor: function scrollToAnchor() /* istanbul ignore next */{
        var validateHashSelector = function validateHashSelector(hash) {
          return (/^#[a-zA-Z_]\d*$/.test(hash)
          );
        };

        var hash = window.location.hash;
        if (!hash || (hash = hash.slice(hash.lastIndexOf('#'))) && !validateHashSelector(hash)) {
          return;
        }

        var elm = document.querySelector(hash);
        if (!isChildInParent(elm, this.$el) || this.mergedOptions.scrollPanel.initialScrollY || this.mergedOptions.scrollPanel.initialScrollX) {
          return;
        }

        this.scrollIntoView(elm);
      }

      /** ------------------------ Registry Resize --------------------------- */

    }
  };
};

// begin importing
var scrollPanel = {
  name: 'scrollPanel',
  props: { ops: { type: Object, required: true } },
  methods: {
    // trigger scrollPanel options initialScrollX,
    // initialScrollY
    updateInitialScroll: function updateInitialScroll() {
      var x = 0;
      var y = 0;

      var parent = getRealParent(this);

      if (this.ops.initialScrollX) {
        x = this.ops.initialScrollX;
      }
      if (this.ops.initialScrollY) {
        y = this.ops.initialScrollY;
      }
      if (x || y) {
        parent.scrollTo({ x: x, y: y });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (!_this._isDestroyed) {
        _this.updateInitialScroll();
      }
    }, 0);
  },
  render: function render(h) {
    // eslint-disable-line
    var data = {
      class: ['__panel'],
      style: {
        position: 'relative',
        boxSizing: 'border-box'
      }
    };

    var parent = getRealParent(this);

    var _customPanel = parent.$slots['scroll-panel'];
    if (_customPanel) {
      return insertChildrenIntoSlot(h, _customPanel, this.$slots.default, data);
    }

    return h(
      'div',
      data,
      [[this.$slots.default]]
    );
  }
};

/**
 * Init following things
 * 1. Component
 * 2. Render
 * 3. Config
 */
function _install(core, render) {
  var _components;

  var extraConfigs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extraValidators = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var components = (_components = {}, defineProperty(_components, scrollPanel.name, scrollPanel), defineProperty(_components, bar.name, bar), _components);

  var opts = {};
  opts.components = components;
  opts.render = render;
  opts.mixins = core;

  var comp = createComponent(opts);

  // Init Config
  extendOpts(extraConfigs, extraValidators);

  return comp;
}

/**
 * Get the children of parent those are in viewport
 */
function getCurrentViewportDom(parent, container) {
  var children = parent.children;
  var domFragment = [];

  var isCurrentview = function isCurrentview(dom) {
    var _dom$getBoundingClien = dom.getBoundingClientRect(),
        left = _dom$getBoundingClien.left,
        top = _dom$getBoundingClien.top,
        width = _dom$getBoundingClien.width,
        height = _dom$getBoundingClien.height;

    var _container$getBoundin = container.getBoundingClientRect(),
        parentLeft = _container$getBoundin.left,
        parentTop = _container$getBoundin.top,
        parentHeight = _container$getBoundin.height,
        parentWidth = _container$getBoundin.width;

    if (left - parentLeft + width > 0 && left - parentLeft < parentWidth && top - parentTop + height > 0 && top - parentTop < parentHeight) {
      return true;
    }
    return false;
  };

  for (var i = 0; i < children.length; i++) {
    var dom = children.item(i);
    if (isCurrentview(dom) && !dom.isResizeElm) {
      domFragment.push(dom);
    }
  }
  return domFragment;
}

/**
 *  Compatible to scroller's animation function
 */
function createEasingFunction(easing, easingPattern) {
  return function (time) {
    return easingPattern(easing, time);
  };
}

/**
 * Calculate the easing pattern
 * @link https://github.com/cferdinandi/smooth-scroll/blob/master/src/js/smooth-scroll.js
 * modified by wangyi7099
 * @param {String} type Easing pattern
 * @param {Number} time Time animation should take to complete
 * @returns {Number}
 */
function easingPattern(easing, time) {
  var pattern = null;
  /* istanbul ignore next */
  {
    // Default Easing Patterns
    if (easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
    if (easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
    if (easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
    if (easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
    if (easing === 'easeOutCubic') pattern = --time * time * time + 1; // decelerating to zero velocity
    if (easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
    if (easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
    if (easing === 'easeOutQuart') pattern = 1 - --time * time * time * time; // decelerating to zero velocity
    if (easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time; // acceleration until halfway, then deceleration
    if (easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
    if (easing === 'easeOutQuint') pattern = 1 + --time * time * time * time * time; // decelerating to zero velocity
    if (easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time; // acceleration until halfway, then deceleration
  }
  return pattern || time; // no easing, no acceleration
}

function noop() {
  return true;
}

/* istanbul ignore next */
var now = Date.now || function () {
  return new Date().getTime();
};

var ScrollControl = function () {
  function ScrollControl() {
    classCallCheck(this, ScrollControl);

    this.init();

    this.isRunning = false;
  }

  createClass(ScrollControl, [{
    key: 'pause',
    value: function pause() {
      /* istanbul ignore if */
      if (!this.isRunning) return;

      this.isPaused = true;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.isStopped = true;
    }
  }, {
    key: 'continue',
    value: function _continue() {
      /* istanbul ignore if */
      if (!this.isPaused) return;

      this.isPaused = false;
      this.ts = now() - this.percent * this.spd;
      this.execScroll();
    }
  }, {
    key: 'startScroll',
    value: function startScroll(st, ed, spd) {
      var stepCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
      var completeCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : noop;
      var vertifyCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : noop;
      var easingMethod = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : noop;

      var df = ed - st;
      var dir = df > 0 ? -1 : 1;
      var nt = now();

      if (!this.isRunning) {
        this.init();
      }

      if (dir != this.dir || nt - this.ts > 200) {
        this.ts = nt;

        this.dir = dir;
        this.st = st;
        this.ed = ed;
        this.df = df;
      } /* istanbul ignore next */else {
          this.df += df;
        }

      this.spd = spd;

      this.completeCb = completeCb;
      this.vertifyCb = vertifyCb;
      this.stepCb = stepCb;
      this.easingMethod = easingMethod;

      if (!this.isRunning) this.execScroll();
    }
  }, {
    key: 'execScroll',
    value: function execScroll() {
      var _this = this;

      if (!this.df) return;

      var percent = this.percent || 0;
      this.percent = 0;
      this.isRunning = true;

      var loop = function loop() {
        /* istanbul ignore if */
        if (!_this.isRunning || !_this.vertifyCb(percent) || _this.isStopped) {
          _this.isRunning = false;
          return;
        }

        percent = (now() - _this.ts) / _this.spd;

        if (_this.isPaused) {
          _this.percent = percent;
          _this.isRunning = false;
          return;
        }

        if (percent < 1) {
          var value = _this.st + _this.df * _this.easingMethod(percent);
          _this.stepCb(value);
          _this.ref(loop);
        } else {
          // trigger complete
          _this.stepCb(_this.st + _this.df);
          _this.completeCb();

          _this.isRunning = false;
        }
      };

      this.ref(loop);
    }
  }, {
    key: 'init',
    value: function init() {
      this.st = 0;
      this.ed = 0;
      this.df = 0;
      this.spd = 0;
      this.ts = 0;
      this.dir = 0;
      this.ref = requestAnimationFrame(window);

      this.isPaused = false;
      this.isStopped = false;
    }
  }]);
  return ScrollControl;
}();

function scrollTo(elm, x, y) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 300;
  var easing = arguments[4];
  var scrollingComplete = arguments[5];

  var scrollLeft = void 0,
      scrollTop = void 0,
      scrollHeight = void 0,
      scrollWidth = void 0,
      clientWidth = void 0,
      clientHeight = void 0;

  var _elm = elm,
      nodeType = _elm.nodeType;

  var scrollX = new ScrollControl();
  var scrollY = new ScrollControl();

  if (!nodeType) {
    warn('You must pass a dom for the first param, ' + 'for window scrolling, ' + 'you can pass document as the first param.');

    return;
  }

  if (nodeType == 9) {
    // document
    elm = elm.scrollingElement;
  }

  var _elm2 = elm;
  scrollLeft = _elm2.scrollLeft;
  scrollTop = _elm2.scrollTop;
  scrollHeight = _elm2.scrollHeight;
  scrollWidth = _elm2.scrollWidth;
  clientWidth = _elm2.clientWidth;
  clientHeight = _elm2.clientHeight;


  if (typeof x === 'undefined') {
    x = scrollLeft;
  } else {
    x = getNumericValue(x, scrollWidth - clientWidth);
  }
  if (typeof y === 'undefined') {
    y = scrollTop;
  } else {
    y = getNumericValue(y, scrollHeight - clientHeight);
  }

  var easingMethod = createEasingFunction(easing, easingPattern);
  scrollX.startScroll(scrollLeft, x, speed, function (dx) {
    elm.scrollLeft = dx;
  }, scrollingComplete, undefined, easingMethod);
  scrollY.startScroll(scrollTop, y, speed, function (dy) {
    elm.scrollTop = dy;
  }, scrollingComplete, undefined, easingMethod);
}

var nativeApi = {
  mounted: function mounted() {
    // registry scroll
    this.scrollX = new ScrollControl();
    this.scrollY = new ScrollControl();
  },

  methods: {
    nativeStop: function nativeStop() {
      this.scrollX.stop();
      this.scrollY.stop();
    },
    nativePause: function nativePause() {
      this.scrollX.pause();
      this.scrollY.pause();
    },
    nativeContinue: function nativeContinue() {
      this.scrollX.continue();
      this.scrollY.continue();
    },
    nativeScrollTo: function nativeScrollTo(x, y, speed, easing) {
      if (speed === false) {
        
      } else if (typeof speed === 'undefined') {
        speed = this.mergedOptions.scrollPanel.speed;
      }
      var elm = this.scrollPanelElm;
      var scrollTop = elm.scrollTop,
          scrollLeft = elm.scrollLeft,
          scrollWidth = elm.scrollWidth,
          clientWidth = elm.clientWidth,
          scrollHeight = elm.scrollHeight,
          clientHeight = elm.clientHeight;

      if (typeof x === 'undefined') {
        x = scrollLeft;
      } else {
        x = getNumericValue(x, scrollWidth - clientWidth);
      }
      if (typeof y === 'undefined') {
        y = scrollTop;
      } else {
        y = getNumericValue(y, scrollHeight - clientHeight);
      }

      if (speed) {
        easing = easing || this.mergedOptions.scrollPanel.easing;
        var easingMethod = createEasingFunction(easing, easingPattern);

        if (x != scrollLeft) {
          this.scrollX.startScroll(scrollLeft, x, speed, function (x) {
            elm.scrollLeft = x;
          }, this.scrollingComplete.bind(this), undefined, easingMethod);
        }

        if (y != scrollTop) {
          this.scrollY.startScroll(scrollTop, y, speed, function (y) {
            elm.scrollTop = y;
          }, this.scrollingComplete.bind(this), undefined, easingMethod);
        }
      } else {
        elm.scrollTop = y;
        elm.scrollLeft = x;
      }
    },
    getCurrentviewDomNative: function getCurrentviewDomNative() {
      var parent = this.scrollContentElm;
      var domFragment = getCurrentViewportDom(parent, this.$el);
      return domFragment;
    }
  }
};

function getPanelData(context) {
  // scrollPanel data start
  var data = {
    ref: 'scrollPanel',
    style: {
      height: '100%',
      overflowY: 'scroll',
      overflowX: 'scroll'
    },
    class: [],
    nativeOn: {
      '&scroll': context.handleScroll
    },
    props: {
      ops: context.mergedOptions.scrollPanel
    }
  };

  context.scrollYEnable = true;
  context.scrollXEnable = true;

  data.nativeOn.DOMMouseScroll = data.nativeOn.mousewheel = context.onMouseWheel;

  var _context$mergedOption = context.mergedOptions.scrollPanel,
      scrollingY = _context$mergedOption.scrollingY,
      scrollingX = _context$mergedOption.scrollingX;


  if (!context.bar.hBar.state.size || !scrollingX) {
    context.scrollXEnable = false;
    data.style.overflowX = 'hidden';
  }

  if (!context.bar.vBar.state.size || !scrollingY) {
    context.scrollYEnable = false;
    data.style.overflowY = 'hidden';
  }

  var gutter = getGutter();
  /* istanbul ignore if */
  if (!gutter) {
    createHideBarStyle();
    data.class.push('__hidebar');
    if (isIos()) {
      data.style['-webkit-overflow-scrolling'] = 'touch';
    }
  } else {
    // hide system bar by use a negative value px
    // gutter should be 0 when manually disable scrollingX #14
    if (context.bar.vBar.state.size && context.mergedOptions.scrollPanel.scrollingY) {
      if (context.mergedOptions.scrollPanel.verticalNativeBarPos == 'right') {
        data.style.marginRight = '-' + gutter + 'px';
      } /* istanbul ignore next */else {
          data.style.marginLeft = '-' + gutter + 'px';
        }
    }
    if (context.bar.hBar.state.size && context.mergedOptions.scrollPanel.scrollingX) {
      data.style.height = 'calc(100% + ' + gutter + 'px)';
    }
  }

  // clear legency styles of slide mode...
  data.style.transformOrigin = '';
  data.style.transform = '';

  return data;
}

/**
 * create a scrollPanel
 *
 * @param {any} size
 * @param {any} context
 * @returns
 */
function createPanel(h, context) {
  var data = {};

  data = getPanelData(context);

  return h(
    'scrollPanel',
    data,
    [getPanelChildren(h, context)]
  );
}

function getPanelChildren(h, context) {
  var viewStyle = {
    position: 'relative',
    'box-sizing': 'border-box',
    'min-width': '100%',
    'min-height': '100%'
  };
  var data = {
    style: viewStyle,
    ref: 'scrollContent',
    class: '__view'
  };
  var _customContent = context.$slots['scroll-content'];

  if (context.mergedOptions.scrollPanel.scrollingX) {
    viewStyle.width = getComplitableStyle('width', 'fit-content');
  } else {
    data.style['width'] = '100%';
  }

  if (context.mergedOptions.scrollPanel.padding) {
    data.style.paddingRight = context.mergedOptions.rail.size;
  }

  if (_customContent) {
    return insertChildrenIntoSlot(h, _customContent, context.$slots.default, data);
  }

  return h(
    'div',
    data,
    [context.$slots.default]
  );
}

function getPanelData$1(context) {
  // scrollPanel data start
  var data = {
    ref: 'scrollPanel',
    style: {
      'user-select': 'none',
      '-webkit-user-select': 'none',
      'min-width': '100%',
      'min-height': '100%'
    },
    class: [],
    props: {
      ops: context.mergedOptions.scrollPanel
    }
  };

  data.class.push('__slide');
  /* istanbul ignore if */
  if (isIos()) {
    data.style = defineProperty({}, '-webkit-overflow-scrolling', 'touch');
  }

  if (context.mergedOptions.vuescroll.renderMethod == 'transform') {
    data.style['transform-origin'] = 'left top 0px';
  }

  var _context$mergedOption = context.mergedOptions.scrollPanel,
      scrollingX = _context$mergedOption.scrollingX,
      scrollingY = _context$mergedOption.scrollingY,
      padding = _context$mergedOption.padding;


  if (scrollingX && !context.refreshLoad) {
    var width = getComplitableStyle('width', 'fit-content');
    if (width) {
      data.style['width'] = width;
    } /* istanbul ignore next */else {
        data['display'] = 'inline-block';
      }
  }

  /* istanbul ignore if */
  if (!scrollingX) {
    data.class.push('x-hidden');
  }
  /* istanbul ignore if */
  if (!scrollingY) {
    data.class.push('y-hidden');
  }

  if (padding) {
    data.style.paddingRight = context.mergedOptions.rail.size;
  }

  return data;
}

function getPanelChildren$1(h, context) {
  var renderChildren = getVnodeInfo(context.$slots['scroll-panel']).ch || context.$slots.default;
  var finalChildren = [];

  /* istanbul ignore if */
  if (!renderChildren) {
    context.$slots.default = renderChildren = [];
  }

  // handle refresh
  if (context.mergedOptions.vuescroll.pullRefresh.enable) {
    finalChildren.push(h(
      'div',
      {
        'class': '__refresh',
        style: { visibility: context.refrehDomVisiable ? '' : 'hidden' },
        ref: __REFRESH_DOM_NAME,
        key: __REFRESH_DOM_NAME
      },
      [createTipDom(h, context, 'refresh', context.pullRefreshTip)]
    ));
  }

  finalChildren.push(renderChildren);

  // handle load
  if (context.mergedOptions.vuescroll.pushLoad.enable) {
    finalChildren.push(h(
      'div',
      {
        ref: __LOAD_DOM_NAME,
        key: __LOAD_DOM_NAME,
        'class': '__load',
        style: { visibility: context.loadDomVisiable ? '' : 'hidden' }
      },
      [createTipDom(h, context, 'load', context.pushLoadTip)]
    ));
  }

  return finalChildren;
}

// Create load or refresh tip dom of each stages
function createTipDom(h, context, type, tip) {
  var stage = context.vuescroll.state[type + 'Stage'];
  var dom = null;
  // Return user specified animation dom
  /* istanbul ignore if */
  if (dom = context.$slots[type + '-' + stage]) {
    return dom;
  }

  switch (stage) {
    // The dom will show at deactive stage
    case 'deactive':
    case 'active':
      {
        var className = 'active';
        if (stage == 'deactive') {
          className += ' deactive';
        }

        dom = h(
          'svg',
          {
            'class': className,
            attrs: { version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              x: '0px',
              y: '0px',
              viewBox: '0 0 1000 1000',
              'enable-background': 'new 0 0 1000 1000',
              xmlSpace: 'preserve'
            }
          },
          [h('metadata', [' Svg Vector Icons : http://www.sfont.cn ']), h('g', [h(
            'g',
            {
              attrs: { transform: 'matrix(1 0 0 -1 0 1008)' }
            },
            [h('path', {
              attrs: { d: 'M10,543l490,455l490-455L885,438L570,735.5V18H430v717.5L115,438L10,543z' }
            })]
          )])]
        );
      }
      break;
    case 'start':
      dom = h(
        'svg',
        {
          attrs: { viewBox: '0 0 50 50' },
          'class': 'start' },
        [h('circle', {
          attrs: { stroke: 'true', cx: '25', cy: '25', r: '20' },
          'class': 'bg-path' }), h('circle', {
          attrs: { cx: '25', cy: '25', r: '20' },
          'class': 'active-path' })]
      );
      break;
    case 'beforeDeactive':
      dom = h(
        'svg',
        {
          attrs: {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            'p-id': '3562'
          }
        },
        [h('path', {
          attrs: {
            d: 'M512 0C229.706831 0 0 229.667446 0 512s229.667446 512 512 512c282.293169 0 512-229.667446 512-512S794.332554 0 512 0z m282.994215 353.406031L433.2544 715.145846a31.484062 31.484062 0 0 1-22.275938 9.231754h-0.4096a31.586462 31.586462 0 0 1-22.449231-9.814646L228.430769 546.327631a31.507692 31.507692 0 0 1 45.701908-43.386093l137.4208 144.785724L750.442338 308.854154a31.507692 31.507692 0 1 1 44.551877 44.551877z',
            fill: '',
            'p-id': '3563'
          }
        })]
      );
      break;
  }
  return [dom, tip];
}

/**
 * create a scrollPanel
 *
 * @param {any} size
 * @param {any} context
 * @returns
 */
function createPanel$1(h, context) {
  var data = getPanelData$1(context);

  return h(
    'scrollPanel',
    data,
    [getPanelChildren$1(h, context)]
  );
}

// begin importing
/**
 * create a scrollPanel
 *
 * @param {any} size
 * @param {any} vm
 * @returns
 */
function createPanel$2(h, vm) {
  if (vm.mode == 'native') {
    return createPanel(h, vm);
  } else if (vm.mode == 'slide') {
    return createPanel$1(h, vm);
  }
}

// detect content size change
function installResizeDetection(element, callback) {
  return injectObject(element, callback);
}

function injectObject(element, callback) {
  if (element.hasResized) {
    return;
  }

  var OBJECT_STYLE = 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;';
  // define a wrap due to ie's zIndex bug
  var objWrap = document.createElement('div');
  objWrap.style.cssText = OBJECT_STYLE;
  var object = document.createElement('object');
  object.style.cssText = OBJECT_STYLE;
  object.type = 'text/html';
  object.tabIndex = -1;

  object.onload = function () {
    eventCenter(object.contentDocument.defaultView, 'resize', callback);
  };
  // https://github.com/wnr/element-resize-detector/blob/aafe9f7ea11d1eebdab722c7c5b86634e734b9b8/src/detection-strategy/object.js#L159
  if (!isIE()) {
    object.data = 'about:blank';
  }
  objWrap.isResizeElm = true;
  objWrap.appendChild(object);
  element.appendChild(objWrap);
  if (isIE()) {
    object.data = 'about:blank';
  }
  return function destroy() {
    if (object.contentDocument) {
      eventCenter(object.contentDocument.defaultView, 'resize', callback, 'off');
    }
    element.removeChild(objWrap);
    element.hasResized = false;
  };
}

var slideApi = {
  methods: {
    slideScrollTo: function slideScrollTo(x, y, speed, easing) {
      var _getPosition = this.getPosition(),
          scrollLeft = _getPosition.scrollLeft,
          scrollTop = _getPosition.scrollTop;

      x = getNumericValue(x || scrollLeft, this.scroller.__maxScrollLeft);
      y = getNumericValue(y || scrollTop, this.scroller.__maxScrollTop);

      this.scroller.scrollTo(x, y, speed > 0, undefined, false, speed, easing);
    },
    zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {
      if (!this.scroller) {
        warn('zoomBy and zoomTo are only for slide mode!');
        return;
      }
      this.scroller.zoomBy(factor, animate, originLeft, originTop, callback);
    },
    zoomTo: function zoomTo(level) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var originLeft = arguments[2];
      var originTop = arguments[3];
      var callback = arguments[4];

      if (!this.scroller) {
        warn('zoomBy and zoomTo are only for slide mode!');
        return;
      }
      this.scroller.zoomTo(level, animate, originLeft, originTop, callback);
    },
    getCurrentPage: function getCurrentPage() {
      if (!this.scroller || !this.mergedOptions.vuescroll.paging) {
        warn('getCurrentPage and goToPage are only for slide mode and paging is enble!');
        return;
      }
      return this.scroller.getCurrentPage();
    },
    goToPage: function goToPage(dest) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.scroller || !this.mergedOptions.vuescroll.paging) {
        warn('getCurrentPage and goToPage are only for slide mode and paging is enble!');
        return;
      }
      this.scroller.goToPage(dest, animate);
    },
    triggerRefreshOrLoad: function triggerRefreshOrLoad(type) {
      if (!this.scroller) {
        warn('You can only use triggerRefreshOrLoad in slide mode!');
        return;
      }

      var isRefresh = this.mergedOptions.vuescroll.pullRefresh.enable;
      var isLoad = this.mergedOptions.vuescroll.pushLoad.enable;

      if (type == 'refresh' && !isRefresh) {
        warn('refresh must be enabled!');
        return;
      } else if (type == 'load' && !isLoad) {
        warn('load must be enabled and content\'s height > container\'s height!');
        return;
      } else if (type !== 'refresh' && type !== 'load') {
        warn('param must be one of load and refresh!');
        return;
      }

      /* istanbul ignore if */
      if (this.vuescroll.state[type + 'Stage'] == 'start') {
        return;
      }

      this.scroller.triggerRefreshOrLoad(type);
      return true;
    },
    getCurrentviewDomSlide: function getCurrentviewDomSlide() {
      var parent = this.scrollPanelElm;
      var domFragment = getCurrentViewportDom(parent, this.$el);
      return domFragment;
    }
  }
};

var api$1 = {
  // mix slide and nitive modes apis.
  mixins: [slideApi, nativeApi],
  methods: {
    // private api
    internalScrollTo: function internalScrollTo(destX, destY, speed, easing) {
      if (this.mode == 'native') {
        this.nativeScrollTo(destX, destY, speed, easing);
      }
      // for non-native we use scroller's scorllTo
      else if (this.mode == 'slide') {
          this.slideScrollTo(destX, destY, speed, easing);
        }
    },
    stop: function stop() {
      this.nativeStop();
    },
    pause: function pause() {
      this.nativePause();
    },
    continue: function _continue() {
      this.nativeContinue();
    },
    getCurrentviewDom: function getCurrentviewDom() {
      return this.mode == 'slide' ? this.getCurrentviewDomSlide() : this.getCurrentviewDomNative();
    }
  }
};

/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

/**
 * Generic animation class with support for dropped frames both optional easing and duration.
 *
 * Optional duration is useful when the lifetime is defined by another condition than time
 * e.g. speed of an animating object, etc.
 *
 * Dropped frame logic allows to keep using the same updater logic independent from the actual
 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
 * based on the pure time difference.
 */
var time = Date.now || function () {
  return +new Date();
};
var desiredFrames = 60;
var millisecondsPerSecond = 1000;
var running = {};
var counter = 1;

var core = { effect: {} };
var global$1 = null;

if (typeof window !== 'undefined') {
  global$1 = window;
} else {
  global$1 = {};
}

core.effect.Animate = {
  /**
   * A requestAnimationFrame wrapper / polyfill.
   *
   * @param callback {Function} The callback to be invoked before the next repaint.
   * @param root {HTMLElement} The root element for the repaint
   */
  requestAnimationFrame: requestAnimationFrame(global$1),
  /**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
  stop: function stop(id) {
    var cleared = running[id] != null;
    if (cleared) {
      running[id] = null;
    }

    return cleared;
  },

  /**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
  isRunning: function isRunning(id) {
    return running[id] != null;
  },

  /**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @param root {Element ? document.body} Render root, when available. Used for internal
   *   usage of requestAnimationFrame.
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
    var start = time();
    var lastFrame = start;
    var percent = 0;
    var dropCounter = 0;
    var id = counter++;

    if (!root) {
      root = document.body;
    }

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      var newRunning = {};
      for (var usedId in running) {
        newRunning[usedId] = true;
      }
      running = newRunning;
    }

    // This is the internal step method which is called every few milliseconds
    var step = function step(virtual) {
      // Normalize virtual value
      var render = virtual !== true;

      // Get current time
      var now = time();

      // Verification is executed before next animation step
      if (!running[id] || verifyCallback && !verifyCallback(id)) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
        return;
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state variables up-to-date with progress in time.
      if (render) {
        var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true);
          dropCounter++;
        }
      }

      if (!running[id]) {
        return;
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      // Execute step callback, then...
      var value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
      } else if (render) {
        lastFrame = now;
        core.effect.Animate.requestAnimationFrame(step, root);
      }
    };

    // Mark as running
    running[id] = true;

    // Init first step
    core.effect.Animate.requestAnimationFrame(step, root);

    // Return unique animation ID
    return id;
  }
};

/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * modified by wangyi7099
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */
var animatingMethod = null;

var noAnimatingMethod = null;

function Scroller(callback, options) {
  this.__callback = callback;

  this.options = {
    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: {
      top: 100,
      bottom: 100,
      left: 100,
      right: 100
    },

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /** Multiply or decrease scrolling speed **/
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
    provided that another scrolling action has not begun. Used to know
    when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    animatingEasing: 'easeOutCubic',

    noAnimatingEasing: 'easeInOutCubic',

    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
    penetrationDeceleration: 0.03,

    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
    penetrationAcceleration: 0.08
  };

  for (var key in options) {
    this.options[key] = options[key];
  }

  animatingMethod = createEasingFunction(this.options.animatingEasing, easingPattern);
  noAnimatingMethod = createEasingFunction(this.options.noAnimatingEasing, easingPattern);
}

var members = {
  /*
  ---------------------------------------------------------------------------
  INTERNAL FIELDS :: STATUS
  ---------------------------------------------------------------------------
  */

  /** {Boolean} Whether only a single finger is used in touch handling */
  __isSingleTouch: false,

  /** {Boolean} Whether a touch event sequence is in progress */
  __isTracking: false,

  /** {Boolean} Whether a deceleration animation went to completion. */
  __didDecelerationComplete: false,

  /**
   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
   * a gesturestart event happens. This has higher priority than dragging.
   */
  __isGesturing: false,

  /**
   * {Boolean} Whether the user has moved by such a distance that we have enabled
   * dragging mode. Hint: It's only enabled after some pixels of movement to
   * not interrupt with clicks etc.
   */
  __isDragging: false,

  /**
   * {Boolean} Not touching and dragging anymore, and smoothly animating the
   * touch sequence using deceleration.
   */
  __isDecelerating: false,

  /**
   * {Boolean} Smoothly animating the currently configured change
   */
  __isAnimating: false,

  /*
  ---------------------------------------------------------------------------
  INTERNAL FIELDS :: DIMENSIONS
  ---------------------------------------------------------------------------
  */

  /** {Integer} Available outer left position (from document perspective) */
  __clientLeft: 0,

  /** {Integer} Available outer top position (from document perspective) */
  __clientTop: 0,

  /** {Integer} Available outer width */
  __clientWidth: 0,

  /** {Integer} Available outer height */
  __clientHeight: 0,

  /** {Integer} Outer width of content */
  __contentWidth: 0,

  /** {Integer} Outer height of content */
  __contentHeight: 0,

  /** {Integer} Snapping width for content */
  __snapWidth: 100,

  /** {Integer} Snapping height for content */
  __snapHeight: 100,

  /** {Integer} Height to assign to refresh area */
  __refreshHeight: null,
  /** {Integer} Height to assign to refresh area */
  __loadHeight: null,
  /** {Boolean} Whether the refresh process is enabled when the event is released now */
  __refreshActive: false,

  /** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
  __refreshActivate: null,

  __refreshBeforeDeactivate: null,

  /** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
  __refreshDeactivate: null,

  /** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
  __refreshStart: null,

  __loadActive: null,

  __loadActivate: null,

  __loadBeforeDeactivate: null,

  __loadDeactivate: null,

  __loadStart: null,
  /** {Number} Zoom level */
  __zoomLevel: 1,

  /** {Number} Scroll position on x-axis */
  __scrollLeft: 0,

  /** {Number} Scroll position on y-axis */
  __scrollTop: 0,

  /** {Integer} Maximum allowed scroll position on x-axis */
  __maxScrollLeft: 0,

  /** {Integer} Maximum allowed scroll position on y-axis */
  __maxScrollTop: 0,

  /* {Number} Scheduled left position (final position when animating) */
  __scheduledLeft: 0,

  /* {Number} Scheduled top position (final position when animating) */
  __scheduledTop: 0,

  /* {Number} Scheduled zoom level (final scale when animating) */
  __scheduledZoom: 0,

  /**
   * current page
   */
  __currentPageX: null,

  __currentPageY: null,

  /**
   * total page
   */
  __totalXPage: null,

  __totalYPage: null,
  /*
  ---------------------------------------------------------------------------
  INTERNAL FIELDS :: LAST POSITIONS
  ---------------------------------------------------------------------------
  */
  /** whether the scroller is disabled or not */
  __disable: false,
  /** {Number} Left position of finger at start */
  __lastTouchLeft: null,

  /** {Number} Top position of finger at start */
  __lastTouchTop: null,

  /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
  __lastTouchMove: null,

  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
  __positions: null,

  /*
  ---------------------------------------------------------------------------
  INTERNAL FIELDS :: DECELERATION SUPPORT
  ---------------------------------------------------------------------------
  */

  /** {Integer} Minimum left scroll position during deceleration */
  __minDecelerationScrollLeft: null,

  /** {Integer} Minimum top scroll position during deceleration */
  __minDecelerationScrollTop: null,

  /** {Integer} Maximum left scroll position during deceleration */
  __maxDecelerationScrollLeft: null,

  /** {Integer} Maximum top scroll position during deceleration */
  __maxDecelerationScrollTop: null,

  /** {Number} Current factor to modify horizontal scroll position with on every step */
  __decelerationVelocityX: null,

  /** {Number} Current factor to modify vertical scroll position with on every step */
  __decelerationVelocityY: null,

  /*
  ---------------------------------------------------------------------------
  PUBLIC API
  ---------------------------------------------------------------------------
  */

  /**
   * Configures the dimensions of the client (outer) and content (inner) elements.
   * Requires the available space for the outer element and the outer size of the inner element.
   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
   *
   * @param clientWidth {Integer ? null} Inner width of outer element
   * @param clientHeight {Integer ? null} Inner height of outer element
   * @param contentWidth {Integer ? null} Outer width of inner element
   * @param contentHeight {Integer ? null} Outer height of inner element
   */
  setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight, animate) {
    var noScroll = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    var self = this;

    // Only update values which are defined
    if (clientWidth === +clientWidth) {
      self.__clientWidth = clientWidth;
    }

    if (clientHeight === +clientHeight) {
      self.__clientHeight = clientHeight;
    }

    if (contentWidth === +contentWidth) {
      self.__contentWidth = contentWidth;
    }

    if (contentHeight === +contentHeight) {
      self.__contentHeight = contentHeight;
    }

    // Refresh maximums
    self.__computeScrollMax();

    if (!noScroll) {
      // Refresh scroll position
      self.scrollTo(self.__scrollLeft, self.__scrollTop, animate);
    }
  },

  /**
   * Sets the client coordinates in relation to the document.
   *
   * @param left {Integer ? 0} Left position of outer element
   * @param top {Integer ? 0} Top position of outer element
   */
  setPosition: function setPosition(left, top) {
    var self = this;

    self.__clientLeft = left || 0;
    self.__clientTop = top || 0;
  },

  /**
   * Configures the snapping (when snapping is active)
   *
   * @param width {Integer} Snapping width
   * @param height {Integer} Snapping height
   */
  setSnapSize: function setSnapSize(width, height) {
    var self = this;

    self.__snapWidth = width;
    self.__snapHeight = height;
  },

  /**
   * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
   * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
   * the official Twitter client.
   *
   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
   * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
   * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
   * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
   */
  activatePullToRefresh: function activatePullToRefresh(height, _ref) {
    var activateCallback = _ref.activateCallback,
        deactivateCallback = _ref.deactivateCallback,
        startCallback = _ref.startCallback,
        beforeDeactivateCallback = _ref.beforeDeactivateCallback,
        beforeDeactiveEnd = _ref.beforeDeactiveEnd;

    var self = this;

    self.__refreshHeight = height;
    self.__refreshActivate = activateCallback;
    self.__refreshBeforeDeactivate = beforeDeactivateCallback;
    self.__refreshBeforeDeactiveEnd = beforeDeactiveEnd;
    self.__refreshDeactivate = deactivateCallback;
    self.__refreshStart = startCallback;
  },
  activatePushToLoad: function activatePushToLoad(height, _ref2) {
    var activateCallback = _ref2.activateCallback,
        deactivateCallback = _ref2.deactivateCallback,
        startCallback = _ref2.startCallback,
        beforeDeactivateCallback = _ref2.beforeDeactivateCallback,
        beforeDeactiveEnd = _ref2.beforeDeactiveEnd;

    var self = this;

    self.__loadHeight = height;
    self.__loadActivate = activateCallback;
    self.__loadBeforeDeactivate = beforeDeactivateCallback;
    self.__loadBeforeDeactiveEnd = beforeDeactiveEnd;
    self.__loadDeactivate = deactivateCallback;
    self.__loadStart = startCallback;
  },

  /**
   * Starts pull-to-refresh manually.
   */
  triggerRefreshOrLoad: function triggerRefreshOrLoad() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'refresh';

    var wasDecelerating = this.__isDecelerating;
    if (wasDecelerating) {
      core.effect.Animate.stop(wasDecelerating);
      this.__isDecelerating = false;
    }
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
    if (type == 'refresh') {
      if (this.__refreshActive || this.__refreshBeforeDeactiveStarted) return;

      this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);
      if (this.__refreshStart) {
        this.__refreshStart();
        this.__refreshActive = true;
      }
    } else if (type == 'load') {
      if (this.__loadActive || this.__loadBeforeDeactiveStarted) return;

      this.__publish(this.__scrollLeft, this.__maxScrollTop + this.__loadHeight, this.__zoomLevel, true);
      if (this.__loadStart) {
        this.__loadStart();
        this.__loadActive = true;
      }
    }
  },

  /**
   * Signalizes that pull-to-refresh is finished.
   */
  finishRefreshOrLoad: function finishRefreshOrLoad() {
    var self = this;

    if (self.__refreshActive) {
      self.__refreshActive = false;
      var endRefreshActive = function endRefreshActive() {
        if (self.__refreshBeforeDeactiveEnd) {
          self.__refreshBeforeDeactiveEnd();
        }
        self.__refreshBeforeDeactiveStarted = true;
        self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
      };

      if (self.__refreshBeforeDeactivate) {
        self.__refreshBeforeDeactivate(endRefreshActive);
      } else {
        endRefreshActive();
      }
    }

    if (self.__loadActive) {
      self.__loadActive = false;
      var endLoadActive = function endLoadActive() {
        if (self.__loadBeforeDeactiveEnd) {
          self.__loadBeforeDeactiveEnd();
        }
        self.__loadBeforeDeactiveStarted = true;
        self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
      };

      if (self.__loadBeforeDeactivate) {
        self.__loadBeforeDeactivate(endLoadActive);
      } else {
        endLoadActive();
      }
    }
  },

  /**
   * Returns the scroll position and zooming values
   *
   * @return {Map} `left` and `top` scroll position and `zoom` level
   */
  getValues: function getValues() {
    var self = this;

    return {
      left: self.__scrollLeft,
      top: self.__scrollTop,
      zoom: self.__zoomLevel
    };
  },

  /**
   * Returns the maximum scroll values
   *
   * @return {Map} `left` and `top` maximum scroll values
   */
  getScrollMax: function getScrollMax() {
    var self = this;

    return {
      left: self.__maxScrollLeft,
      top: self.__maxScrollTop
    };
  },

  /**
   * Zooms to the given level. Supports optional animation. Zooms
   * the center when no coordinates are given.
   *
   * @param level {Number} Level to zoom to
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? null} Zoom in at given left coordinate
   * @param originTop {Number ? null} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {
    var self = this;

    if (!self.options.zooming) {
      throw new Error('Zooming is not enabled!');
    }

    // Add callback if exists
    if (callback) {
      self.__zoomComplete = callback;
    }

    // Stop deceleration
    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    var oldLevel = self.__zoomLevel;

    // Normalize input origin to center of viewport if not defined
    if (originLeft == null) {
      originLeft = self.__clientWidth / 2;
    }

    if (originTop == null) {
      originTop = self.__clientHeight / 2;
    }

    // Limit level according to configuration
    level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

    // Recompute maximum values while temporary tweaking maximum scroll ranges
    self.__computeScrollMax(level);

    // Recompute left and top coordinates based on new zoom level
    var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
    var top = (originTop + self.__scrollTop) * level / oldLevel - originTop;

    // Limit x-axis
    if (left > self.__maxScrollLeft) {
      left = self.__maxScrollLeft;
    } else if (left < 0) {
      left = 0;
    }

    // Limit y-axis
    if (top > self.__maxScrollTop) {
      top = self.__maxScrollTop;
    } else if (top < 0) {
      top = 0;
    }

    // Push values out
    self.__publish(left, top, level, animate);
  },

  /**
   * Zooms the content by the given factor.
   *
   * @param factor {Number} Zoom by given factor
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? 0} Zoom in at given left coordinate
   * @param originTop {Number ? 0} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {
    var self = this;

    self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
  },

  /**
   * Scrolls to the given position. Respect limitations and snapping automatically.
   *
   * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
   * @param zoom {Number?null} Zoom level to go to
   */
  scrollTo: function scrollTo(left, top, animate, zoom, force, speed, easing) {
    var self = this;

    // Stop deceleration
    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    // Correct coordinates based on new zoom level
    if (zoom != null && zoom !== self.__zoomLevel) {
      if (!self.options.zooming) {
        throw new Error('Zooming is not enabled!');
      }

      left *= zoom;
      top *= zoom;

      // Recompute maximum values while temporary tweaking maximum scroll ranges
      self.__computeScrollMax(zoom);
    } else {
      // Keep zoom when not defined
      zoom = self.__zoomLevel;
    }

    if (!self.options.scrollingX && !force) {
      left = self.__scrollLeft;
    } else {
      if (self.options.paging) {
        left = Math.round(left / self.__clientWidth) * self.__clientWidth;
      } else if (self.options.snapping) {
        left = Math.round(left / self.__snapWidth) * self.__snapWidth;
      }
    }

    if (!self.options.scrollingY && !force) {
      top = self.__scrollTop;
    } else {
      if (self.options.paging) {
        top = Math.round(top / self.__clientHeight) * self.__clientHeight;
      } else if (self.options.snapping) {
        top = Math.round(top / self.__snapHeight) * self.__snapHeight;
      }
    }

    if (!force) {
      // Limit for allowed ranges
      left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
      top = Math.max(Math.min(self.__maxScrollTop, top), 0);
    }

    // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data
    if (left === self.__scrollLeft && top === self.__scrollTop) {
      animate = false;
    }

    // Publish new values
    if (!self.__isTracking) {
      self.__publish(left, top, zoom, animate, speed, easing);
    }
  },

  /**
   * Scroll by the given offset
   *
   * @param left {Number ? 0} Scroll x-axis by given offset
   * @param top {Number ? 0} Scroll x-axis by given offset
   * @param animate {Boolean ? false} Whether to animate the given change
   */
  scrollBy: function scrollBy(left, top, animate) {
    var self = this;

    var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
    var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;

    self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
  },
  getCurrentPage: function getCurrentPage() {
    this.__computePage();
    return {
      x: this.__currentPageX,
      y: this.__currentPageY
    };
  },
  goToPage: function goToPage(_ref3, animate) {
    var x = _ref3.x,
        y = _ref3.y;

    if (isNaN(x)) {
      x = 1;
    }
    if (isNaN(y)) {
      y = 1;
    }
    this.scrollTo((x - 1) * this.__clientWidth, (y - 1) * this.__clientHeight, animate);
  },


  /*
  ---------------------------------------------------------------------------
  EVENT CALLBACKS
  ---------------------------------------------------------------------------
  */

  /**
   * Mouse wheel handler for zooming support
   */
  doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {
    var self = this;
    var change = wheelDelta > 0 ? 0.97 : 1.03;

    return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
  },

  /**
   * Touch start handler for scrolling support
   */
  doTouchStart: function doTouchStart(touches, timeStamp) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var self = this;

    // Reset interruptedAnimation flag
    self.__interruptedAnimation = true;

    // Stop deceleration
    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
      self.__interruptedAnimation = true;
    }

    // Stop animation
    if (self.__isAnimating) {
      core.effect.Animate.stop(self.__isAnimating);
      self.__isAnimating = false;
      self.__interruptedAnimation = true;
    }

    // Use center point when dealing with two fingers
    var currentTouchLeft, currentTouchTop;
    var isSingleTouch = touches.length === 1;
    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    }

    // Store initial positions
    self.__initialTouchLeft = currentTouchLeft;
    self.__initialTouchTop = currentTouchTop;

    // Store current zoom level
    self.__zoomLevelStart = self.__zoomLevel;

    // Store initial touch positions
    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop;

    // Store initial move time stamp
    self.__lastTouchMove = timeStamp;

    // Reset initial scale
    self.__lastScale = 1;

    // Reset locking flags
    self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
    self.__enableScrollY = !isSingleTouch && self.options.scrollingY;

    // Reset tracking flag
    self.__isTracking = true;

    // Reset deceleration complete flag
    self.__didDecelerationComplete = false;

    // Dragging starts directly with two fingers, otherwise lazy with an offset
    self.__isDragging = !isSingleTouch;

    // Some features are  in multi touch scenarios
    self.__isSingleTouch = isSingleTouch;

    // Clearing data structure
    self.__positions = [];
  },

  /**
   * Touch move handler for scrolling support
   */
  doTouchMove: function doTouchMove(touches, timeStamp, scale) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var self = this;

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!self.__isTracking) {
      return;
    }

    var currentTouchLeft, currentTouchTop;

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } else {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    }

    var positions = self.__positions;

    // Are we already is dragging mode?
    if (self.__isDragging) {
      // Compute move distance
      var moveX = currentTouchLeft - self.__lastTouchLeft;
      var moveY = currentTouchTop - self.__lastTouchTop;

      // Read previous scroll position and zooming
      var scrollLeft = self.__scrollLeft;
      var scrollTop = self.__scrollTop;
      var level = self.__zoomLevel;

      // Work with scaling
      if (scale != null && self.options.zooming) {
        var oldLevel = level;

        // Recompute level based on previous scale and new scale
        level = level / self.__lastScale * scale;

        // Limit level according to configuration
        level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

        // Only do further compution when change happened
        if (oldLevel !== level) {
          // Compute relative event position to container
          var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
          var currentTouchTopRel = currentTouchTop - self.__clientTop;

          // Recompute left and top coordinates based on new zoom level
          scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
          scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

          // Recompute max scroll values
          self.__computeScrollMax(level);
        }
      }

      var bouncing = self.options.bouncing;

      if (self.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier;
        var maxScrollLeft = self.__maxScrollLeft;

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
          scrollLeft += moveX / 2 * this.options.speedMultiplier;

          // fix scrollLeft
          scrollLeft = Math.min(Math.max(-bouncing.left, scrollLeft), maxScrollLeft + bouncing.right);
        }
      }

      // Compute new vertical scroll position
      if (self.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier;
        var maxScrollTop = self.__maxScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < 0) {
          scrollTop += moveY / 2 * this.options.speedMultiplier;

          // fix scrollTop
          scrollTop = Math.min(Math.max(-bouncing.top, scrollTop), maxScrollTop + bouncing.bottom);

          // Trigger pull to refresh or push to load
          if (!self.__enableScrollX && (self.__refreshHeight != null || self.__loadHeight != null)) {
            if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {
              self.__refreshActive = true;
              if (self.__refreshActivate) {
                self.__refreshActivate();
              }
            } else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {
              self.__refreshActive = false;
              if (self.__refreshDeactivate) {
                self.__refreshDeactivate();
              }
            }
            // handle for push-load
            else if (!self.__loadActive && scrollTop >= self.__maxScrollTop + self.__loadHeight && self.__loadHeight > 0) {
                self.__loadActive = true;
                if (self.__loadActivate) {
                  self.__loadActivate();
                }
              } else if (self.__loadActive && scrollTop < self.__maxScrollTop + self.__loadHeight) {
                self.__loadActive = false;
                if (self.__loadDeactivate) {
                  self.__loadDeactivate();
                }
              }
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30);
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp);

      // Sync scroll position
      self.__publish(scrollLeft, scrollTop, level);

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      var minimumTrackingForScroll = self.options.locking ? 3 : 0;
      var minimumTrackingForDrag = 5;

      var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

      self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
      self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;

      positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);

      self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
      if (self.__isDragging) {
        self.__interruptedAnimation = false;
      }
    }

    // Update last touch positions and time stamp for next event
    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop;
    self.__lastTouchMove = timeStamp;
    self.__lastScale = scale;
  },

  /**
   * Touch end handler for scrolling support
   */
  doTouchEnd: function doTouchEnd(timeStamp) {
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    var self = this;

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
    if (!self.__isTracking) {
      return;
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    self.__isTracking = false;

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (self.__isDragging) {
      // Reset dragging flag
      self.__isDragging = false;

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {
        // Then figure out what the scroll position was about 100ms ago
        var positions = self.__positions;
        var endPos = positions.length - 1;
        var startPos = endPos;

        // Move pointer to position measured 100ms ago
        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
          startPos = i;
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          var timeOffset = positions[endPos] - positions[startPos];
          var movedLeft = self.__scrollLeft - positions[startPos - 2];
          var movedTop = self.__scrollTop - positions[startPos - 1];

          // Based on 50ms compute the movement to apply for each render step
          self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

          // How much velocity is required to start the deceleration
          var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1;

          // Verify that we have enough velocity to start deceleration
          if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            // Deactivate pull-to-refresh when decelerating
            if (!self.__refreshActive && !self.__loadActive) {
              self.__startDeceleration(timeStamp);
            }
          } else {
            self.__scrollComplete();
          }
        } else {
          self.__scrollComplete();
        }
      } else if (timeStamp - self.__lastTouchMove > 100) {
        self.__scrollComplete();
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!self.__isDecelerating) {
      if (self.__refreshActive && self.__refreshStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);

        if (self.__refreshStart) {
          self.__refreshStart();
        }
      } else if (self.__loadActive && self.__loadStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        self.__publish(self.__scrollLeft, self.__maxScrollTop + self.__loadHeight, self.__zoomLevel, true);

        if (self.__loadStart) {
          self.__loadStart();
        }
      } else {
        if (self.__interruptedAnimation || self.__isDragging) {
          self.__scrollComplete();
        }
        self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel);

        // Directly signalize deactivation (nothing todo on refresh?)
        if (self.__refreshActive) {
          self.__refreshActive = false;
          if (self.__refreshDeactivate) {
            self.__refreshDeactivate();
          }
        } else if (self.__loadActive) {
          self.__loadActive = false;
          if (self.__loadDeactivate) {
            self.__loadDeactivate();
          }
        }
      }
    }

    // Fully cleanup list
    self.__positions.length = 0;
  },

  /** Handle for scroll/publish */
  onScroll: NOOP,

  stop: function stop() {
    var self = this;

    self.__disable = true;
  },
  start: function start() {
    var self = this;

    self.__disable = true;
  },
  /*
  ---------------------------------------------------------------------------
  PRIVATE API
  ---------------------------------------------------------------------------
  */

  /**
   * Applies the scroll position to the content element
   *
   * @param left {Number} Left scroll position
   * @param top {Number} Top scroll position
   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
   */
  __publish: function __publish(left, top, zoom, animate, speed, easing) {
    var self = this;
    if (self.__disable) {
      return;
    }
    if (isNaN(left)) {
      left = this.__scrollLeft;
    }
    if (isNaN(top)) {
      top = this.__scrollTop;
    }
    // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
    var wasAnimating = self.__isAnimating;
    if (wasAnimating) {
      core.effect.Animate.stop(wasAnimating);
      self.__isAnimating = false;
    }

    if (animate && (self.options.animating || speed)) {
      // Keep scheduled positions for scrollBy/zoomBy functionality
      self.__scheduledLeft = left;
      self.__scheduledTop = top;
      self.__scheduledZoom = zoom;

      var oldLeft = self.__scrollLeft;
      var oldTop = self.__scrollTop;
      var oldZoom = self.__zoomLevel;

      var diffLeft = left - oldLeft;
      var diffTop = top - oldTop;
      var diffZoom = zoom - oldZoom;

      var step = function step(percent, now, render) {
        if (render) {
          self.__scrollLeft = oldLeft + diffLeft * percent;
          self.__scrollTop = oldTop + diffTop * percent;
          self.__zoomLevel = oldZoom + diffZoom * percent;

          // Push values out
          if (self.__callback) {
            self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
            self.onScroll();
          }
        }
      };

      var verify = function verify(id) {
        return self.__isAnimating === id;
      };

      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === self.__isAnimating) {
          self.__isAnimating = false;
        }
        if (self.__didDecelerationComplete || wasFinished) {
          self.__scrollComplete();
        }

        if (self.options.zooming) {
          self.__computeScrollMax();
          if (self.__zoomComplete) {
            self.__zoomComplete();
            self.__zoomComplete = null;
          }
        }

        if (self.__refreshBeforeDeactiveStarted) {
          self.__refreshBeforeDeactiveStarted = false;
          if (self.__refreshDeactivate) self.__refreshDeactivate();
        }

        if (self.__loadBeforeDeactiveStarted) {
          self.__loadBeforeDeactiveStarted = false;
          if (self.__loadDeactivate) self.__loadDeactivate();
        }
      };

      var easingFunction = animatingMethod;
      if (easing) {
        easingFunction = createEasingFunction(easing, easingPattern);
      }

      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
      self.__isAnimating = core.effect.Animate.start(step, verify, completed, speed || self.options.animationDuration, wasAnimating ? easingFunction : noAnimatingMethod);
    } else {
      self.__scheduledLeft = self.__scrollLeft = left;
      self.__scheduledTop = self.__scrollTop = top;
      self.__scheduledZoom = self.__zoomLevel = zoom;

      // Push values out
      if (self.__callback) {
        self.__callback(left, top, zoom);
        self.onScroll();
      }

      // Fix max scroll ranges
      if (self.options.zooming) {
        self.__computeScrollMax();
        if (self.__zoomComplete) {
          self.__zoomComplete();
          self.__zoomComplete = null;
        }
      }

      if (self.__refreshBeforeDeactiveStarted) {
        self.__refreshBeforeDeactiveStarted = false;
        if (self.__refreshDeactivate) self.__refreshDeactivate();
      }

      if (self.__loadBeforeDeactiveStarted) {
        self.__loadBeforeDeactiveStarted = false;
        if (self.__loadDeactivate) self.__loadDeactivate();
      }
    }
  },

  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax: function __computeScrollMax(zoomLevel) {
    var self = this;

    if (zoomLevel == null) {
      zoomLevel = self.__zoomLevel;
    }

    self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
    self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
  },
  /** compute current page total page */
  __computePage: function __computePage() {
    var self = this;
    var clientWidth = self.__clientWidth;
    var clientHeight = self.__clientHeight;
    var left = self.__scrollLeft;
    var top = self.__scrollTop;
    self.__totalXPage = Math.ceil(self.__contentWidth / clientWidth);
    self.__currentPageX = Math.ceil(left / clientWidth + 1);
    self.__totalYPage = Math.ceil(self.__contentHeight / clientHeight);
    self.__currentPageY = Math.ceil(top / clientHeight + 1);
  },
  /** complete scroll*/
  __scrollComplete: function __scrollComplete() {
    var self = this;
    self.options.scrollingComplete();
  },
  /*
  ---------------------------------------------------------------------------
  ANIMATION (DECELERATION) SUPPORT
  ---------------------------------------------------------------------------
  */

  /**
   * Called when a touch sequence end and the speed of the finger was high enough
   * to switch into deceleration mode.
   */
  __startDeceleration: function __startDeceleration() {
    var self = this;

    if (self.options.paging) {
      var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
      var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
      var clientWidth = self.__clientWidth;
      var clientHeight = self.__clientHeight;

      // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
      // Each page should have exactly the size of the client area.
      self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
      self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
      self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
      self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
    } else {
      self.__minDecelerationScrollLeft = 0;
      self.__minDecelerationScrollTop = 0;
      self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
      self.__maxDecelerationScrollTop = self.__maxScrollTop;
    }

    // Wrap class method
    var step = function step(percent, now, render) {
      self.__stepThroughDeceleration(render);
    };

    // How much velocity is required to keep the deceleration running
    var minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001;

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
    var verify = function verify() {
      var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
      if (!shouldContinue) {
        self.__didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    var completed = function completed() {
      if (!self.__isDecelerating) {
        return;
      }
      self.__isDecelerating = false;
      if (self.__didDecelerationComplete) {
        self.__scrollComplete();
      }

      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
      self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping);
    };

    // Start animation and switch on flag
    self.__isDecelerating = core.effect.Animate.start(step, verify, completed);
  },

  /**
   * Called on every step of the animation
   *
   * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
   */
  __stepThroughDeceleration: function __stepThroughDeceleration(render) {
    var self = this;
    var bouncing = self.options.bouncing;
    var minLeft = self.__minDecelerationScrollLeft;
    var maxLeft = self.__maxDecelerationScrollLeft;
    var minTop = self.__minDecelerationScrollTop;
    var maxTop = self.__maxDecelerationScrollTop;
    // Add deceleration to scroll position
    var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
    var scrollTop = self.__scrollTop + self.__decelerationVelocityY;

    var bounceX = scrollLeft < minLeft || scrollLeft > maxLeft;
    var bounceY = scrollTop < minTop || scrollTop > maxTop;

    // fix scrollLeft and scrollTop
    var fixedScrollLeft = Math.min(Math.max(minLeft - bouncing.left, scrollLeft), maxLeft + bouncing.right);

    var fixedScrollTop = Math.min(Math.max(minTop - bouncing.top, scrollTop), maxTop + bouncing.bottom);

    //
    // UPDATE SCROLL POSITION
    //
    if (render) {
      self.__publish(fixedScrollLeft, fixedScrollTop, self.__zoomLevel);
    } else {
      self.__scrollLeft = scrollLeft;
      self.__scrollTop = scrollTop;
    }

    //
    // SLOW DOWN
    //

    // Slow down velocity on every iteration
    if (!self.options.paging) {
      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      var frictionFactor = 0.95;

      self.__decelerationVelocityX *= frictionFactor;
      self.__decelerationVelocityY *= frictionFactor;
    }

    //
    // BOUNCING SUPPORT
    //

    var scrollOutsideX = 0;
    var scrollOutsideY = 0;

    // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
    var penetrationDeceleration = self.options.penetrationDeceleration;
    var penetrationAcceleration = self.options.penetrationAcceleration;

    if (bounceX) {
      // Check limits
      if (scrollLeft < self.__minDecelerationScrollLeft) {
        scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
      } else if (scrollLeft > self.__maxDecelerationScrollLeft) {
        scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
      }
    }

    if (bounceY) {
      if (scrollTop < self.__minDecelerationScrollTop) {
        scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
      } else if (scrollTop > self.__maxDecelerationScrollTop) {
        scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
      }
    }

    if (scrollOutsideX !== 0) {
      if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
        self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
        if (scrollOutsideX < 0 && -scrollOutsideX >= bouncing.right && self.__decelerationVelocityX > 0) {
          self.__decelerationVelocityX = -bouncing.right / 2;
        }
        if (scrollOutsideX > 0 && scrollOutsideX >= bouncing.left && self.__decelerationVelocityX < 0) {
          self.__decelerationVelocityX = bouncing.left / 2;
        }
      } else {
        self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
      }
    }

    if (scrollOutsideY !== 0) {
      if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
        self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
        if (scrollOutsideY < 0 && -scrollOutsideY >= bouncing.bottom && self.__decelerationVelocityY > 0) {
          self.__decelerationVelocityY = -bouncing.bottom / 2;
        }
        if (scrollOutsideY > 0 && scrollOutsideY >= bouncing.top && self.__decelerationVelocityY < 0) {
          self.__decelerationVelocityY = bouncing.top / 2;
        }
      } else {
        self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration / 2;
      }
    }
  }
};

// Copy over members to prototype
for (var key in members) {
  Scroller.prototype[key] = members[key];
}

/* DOM-based rendering (Uses 3D when available, falls back on margin when transform not available) */
function render(content, global, suffix, type) {
  if (type == 'position') {
    return function (left, top) {
      content.style.left = -left + 'px';
      content.style.top = -top + 'px';
    };
  }

  var vendorPrefix = getPrefix(global);

  var helperElem = document.createElement('div');
  var undef;

  var perspectiveProperty = vendorPrefix + 'Perspective';
  var transformProperty = 'transform'; //vendorPrefix + 'Transform';

  if (helperElem.style[perspectiveProperty] !== undef) {
    return function (left, top, zoom) {
      content.style[transformProperty] = 'translate3d(' + -left + suffix + ',' + -top + suffix + ',0) scale(' + zoom + ')';
    };
  } else if (helperElem.style[transformProperty] !== undef) {
    return function (left, top, zoom) {
      content.style[transformProperty] = 'translate(' + -left + suffix + ',' + -top + suffix + ') scale(' + zoom + ')';
    };
  }
}

var touch = new touchManager();
function listenContainer(container, scroller, eventCallback, zooming, preventDefault, preventDefaultOnMove) {
  var destroy = null;
  var mousedown = false;
  var touchObj = touch.getTouchObject();

  function touchstart(e) {
    var event = touch.getEventObject(e);
    // Don't react if initial down happens on a form element
    if (event[0] && event[0].target && event[0].target.tagName.match(/input|textarea|select/i) || scroller.__disable) {
      return;
    }
    eventCallback('mousedown');
    mousedown = true;
    scroller.doTouchStart(event, e.timeStamp);

    if (preventDefault) {
      e.preventDefault();
    }
    e.stopPropagation();

    // here , we want to manully prevent default, so we
    // set passive to false
    // see https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
    document.addEventListener(touchObj.touchmove, touchmove, {
      passive: false
    });
  }

  function touchmove(e) {
    if (scroller.__disable || !mousedown) return;

    var event = touch.getEventObject(e);
    eventCallback('mousemove');
    scroller.doTouchMove(event, e.timeStamp, e.scale);
    if (preventDefaultOnMove) {
      e.preventDefault();
    }
  }

  function touchend(e) {
    eventCallback('mouseup');
    mousedown = false;
    scroller.doTouchEnd(e.timeStamp);
    document.removeEventListener(touchObj.touchmove, touchmove);
  }
  function touchcancel(e) {
    scroller.doTouchEnd(e.timeStamp);
  }

  function zoomHandle(e) {
    scroller.doMouseZoom(e.detail ? e.detail * -120 : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
  }

  container.addEventListener(touchObj.touchstart, touchstart, false);

  document.addEventListener(touchObj.touchend, touchend, false);
  document.addEventListener(touchObj.touchcancel, touchcancel, false);

  if (zooming && !touch.isTouch) {
    container.addEventListener(navigator.userAgent.indexOf('Firefox') > -1 ? 'DOMMouseScroll' : 'mousewheel', zoomHandle, false);
  }

  destroy = function destroy() {
    container.removeEventListener(touchObj.touchstart, touchstart, false);

    document.removeEventListener(touchObj.touchend, touchend, false);
    document.removeEventListener(touchObj.touchcancel, touchcancel, false);

    container.removeEventListener(navigator.userAgent.indexOf('Firefox') > -1 ? 'DOMMouseScroll' : 'mousewheel', zoomHandle, false);
  };

  // handle __publish event
  scroller.onScroll = function () {
    eventCallback('onscroll');
  };
  return destroy;
}

/**
 * These mixes is exclusive for slide mode
 */

createSlideModeStyle();
/**
 * @description refresh and load callback
 */
function createStateCallbacks(type, stageType, vm, tipDom) {
  var listeners = vm.$listeners;

  var activateCallback = function activateCallback() {
    vm.vuescroll.state[stageType] = 'active';
    vm.$emit(type + '-activate', vm, tipDom);
  };

  var deactivateCallback = function deactivateCallback() {
    vm.vuescroll.state[stageType] = 'deactive';
    vm.$emit(type + '-deactivate', vm, tipDom);
  };

  var beforeDeactiveEnd = function beforeDeactiveEnd() {
    vm.vuescroll.state[stageType] = 'beforeDeactiveEnd';
    vm.$emit(type + '-before-deactivate-end', vm, tipDom);
  };

  var startCallback = function startCallback() {
    vm.vuescroll.state[stageType] = 'start';
    setTimeout(function () {
      vm.scroller.finishRefreshOrLoad();
    }, 2000); // Default start stage duration
  };

  // let beforeDeactivateCallback = done => {
  //   vm.vuescroll.state[stageType] = 'beforeDeactive';
  //   setTimeout(function() {
  //     done();
  //   }, 500); // Default before-deactivated stage duration
  // };
  var beforeDeactivateCallback = void 0;

  /* istanbul ignore if */
  if (listeners[type + '-before-deactivate']) {
    beforeDeactivateCallback = function beforeDeactivateCallback(done) {
      vm.vuescroll.state[stageType] = 'beforeDeactive';
      vm.$emit(type + '-before-deactivate', vm, tipDom, done.bind(vm.scroller));
    };
  }

  /* istanbul ignore if */
  if (listeners[type + '-start']) {
    startCallback = function startCallback() {
      vm.vuescroll.state[stageType] = 'start';
      vm.$emit(type + '-start', vm, tipDom, vm.scroller.finishRefreshOrLoad.bind(vm.scroller));
    };
  }

  return {
    activateCallback: activateCallback,
    deactivateCallback: deactivateCallback,
    startCallback: startCallback,
    beforeDeactivateCallback: beforeDeactivateCallback,
    beforeDeactiveEnd: beforeDeactiveEnd
  };
}

var slideMix = {
  mounted: function mounted() {
    this.vsMounted = true;
  },

  computed: {
    pullRefreshTip: function pullRefreshTip() {
      return this.mergedOptions.vuescroll.pullRefresh.tips[this.vuescroll.state.refreshStage];
    },
    pushLoadTip: function pushLoadTip() {
      return this.mergedOptions.vuescroll.pushLoad.tips[this.vuescroll.state.loadStage];
    },
    refreshLoad: function refreshLoad() {
      return this.mergedOptions.vuescroll.pullRefresh.enable || this.mergedOptions.vuescroll.pushLoad.enable;
    },
    refrehDomVisiable: function refrehDomVisiable() {
      return this.vsMounted && this.outTheTopBoundary;
    },
    loadDomVisiable: function loadDomVisiable() {
      return this.vsMounted && this.outTheBottomBoundary;
    }
  },
  data: function data() {
    return {
      vuescroll: {
        state: {
          /** Default tips of refresh and load */
          refreshStage: 'deactive',
          loadStage: 'deactive'
        }
      },
      vsMounted: false,
      outTheTopBoundary: false,
      outTheBottomBoundary: false
    };
  },

  methods: {
    // Update:
    // 1. update height/width
    // 2. update refresh or load
    updateScroller: function updateScroller() {
      this.updateDimesion();
      this.registryRefreshLoad();
    },
    updateDimesion: function updateDimesion() {
      var clientWidth = this.$el.clientWidth;
      var clientHeight = this.$el.clientHeight;
      var contentWidth = this.scrollPanelElm.scrollWidth;
      var contentHeight = this.scrollPanelElm.scrollHeight;
      var refreshHeight = 0;
      var loadHeight = 0;
      // If the refresh option is true,let's  give a "margin-top" style to
      // the refresh-tip dom. let it to be invisible when doesn't trigger
      // refresh.
      if (this.mergedOptions.vuescroll.pullRefresh.enable) {
        if (this.vsMounted) {
          var refreshDom = this.$refs[__REFRESH_DOM_NAME].elm || this.$refs[__REFRESH_DOM_NAME];
          refreshHeight = refreshDom.offsetHeight;
          refreshDom.style.marginTop = -refreshHeight + 'px';
        }
      }
      if (this.mergedOptions.vuescroll.pushLoad.enable) {
        if (this.vsMounted) {
          var loadDom = this.$refs[__LOAD_DOM_NAME].elm || this.$refs[__LOAD_DOM_NAME];
          loadHeight = loadDom.offsetHeight;
          contentHeight -= loadHeight;
          loadDom.style.bottom = '-' + loadHeight + 'px';
        }
      }
      if (this.scroller) {
        this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight, false);
      }
    },
    registryRefreshLoad: function registryRefreshLoad() {
      // registry refresh
      if (this.mergedOptions.vuescroll.pullRefresh.enable) {
        this.registryEvent('refresh');
      }
      // registry load
      if (this.mergedOptions.vuescroll.pushLoad.enable) {
        this.registryEvent('load');
      }
    },
    registryScroller: function registryScroller() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$left = _ref.left,
          left = _ref$left === undefined ? 0 : _ref$left,
          _ref$top = _ref.top,
          top = _ref$top === undefined ? 0 : _ref$top,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === undefined ? 1 : _ref$zoom;

      var _mergedOptions$vuescr = this.mergedOptions.vuescroll.scroller,
          preventDefault = _mergedOptions$vuescr.preventDefault,
          preventDefaultOnMove = _mergedOptions$vuescr.preventDefaultOnMove;
      var _mergedOptions$vuescr2 = this.mergedOptions.vuescroll,
          paging = _mergedOptions$vuescr2.paging,
          snapping = _mergedOptions$vuescr2.snapping.enable,
          renderMethod = _mergedOptions$vuescr2.renderMethod,
          zooming = _mergedOptions$vuescr2.zooming,
          locking = _mergedOptions$vuescr2.locking;
      // disale zooming when refresh or load enabled

      zooming = !this.refreshLoad && !paging && !snapping && zooming;
      var _mergedOptions$scroll = this.mergedOptions.scrollPanel,
          scrollingY = _mergedOptions$scroll.scrollingY,
          scrollingX = _mergedOptions$scroll.scrollingX;


      var scrollingComplete = this.scrollingComplete.bind(this);

      // Initialize Scroller
      this.scroller = new Scroller(render(this.scrollPanelElm, window, 'px', renderMethod), _extends({}, this.mergedOptions.vuescroll.scroller, {
        zooming: zooming,
        scrollingY: scrollingY,
        scrollingX: scrollingX && !this.refreshLoad,
        animationDuration: this.mergedOptions.scrollPanel.speed,
        paging: paging,
        snapping: snapping,
        scrollingComplete: scrollingComplete,
        locking: locking
      }));

      this.scroller.__disable = this.mergedOptions.vuescroll.scroller.disable;
      this.scroller.__scrollLeft = left;
      this.scroller.__scrollTop = top;
      this.scroller.__zoomLevel = zoom;

      // Set snap
      if (snapping) {
        this.scroller.setSnapSize(this.mergedOptions.vuescroll.snapping.width, this.mergedOptions.vuescroll.snapping.height);
      }
      var rect = this.$el.getBoundingClientRect();
      this.scroller.setPosition(rect.left + this.$el.clientLeft, rect.top + this.$el.clientTop);

      // Get destroy callback
      var cb = listenContainer(this.$el, this.scroller, function (eventType) {
        // Thie is to dispatch the event from the scroller.
        // to let vuescroll refresh the dom
        switch (eventType) {
          case 'mousedown':
            _this.vuescroll.state.isDragging = true;
            break;
          case 'onscroll':
            {
              /**
                 * Trigger auto load
                 */
              var stage = _this.vuescroll.state['loadStage'];
              var _mergedOptions$vuescr3 = _this.mergedOptions.vuescroll.pushLoad,
                  enable = _mergedOptions$vuescr3.enable,
                  auto = _mergedOptions$vuescr3.auto,
                  autoLoadDistance = _mergedOptions$vuescr3.autoLoadDistance;
              var _scroller = _this.scroller,
                  __scrollTop = _scroller.__scrollTop,
                  __maxScrollTop = _scroller.__maxScrollTop;

              if (stage != 'start' && enable && auto && !_this.lockAutoLoad && // auto load debounce
              autoLoadDistance >= __maxScrollTop - __scrollTop && __scrollTop > 0) {
                _this.lockAutoLoad = true;
                _this.triggerRefreshOrLoad('load');
              }

              if (autoLoadDistance < __maxScrollTop - __scrollTop) {
                _this.lockAutoLoad = false;
              }

              _this.handleScroll(false);
            }

            break;
          case 'mouseup':
            _this.vuescroll.state.isDragging = false;
            break;
        }
      }, zooming, preventDefault, preventDefaultOnMove);

      this.updateScroller();

      return cb;
    },
    updateSlideModeBarState: function updateSlideModeBarState() {
      // update slide mode scrollbars' state
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var vuescroll = this.$el;
      var scroller = this.scroller;

      var outerLeft = 0;
      var outerTop = 0;

      var _$el = this.$el,
          clientWidth = _$el.clientWidth,
          clientHeight = _$el.clientHeight;


      var contentWidth = clientWidth + this.scroller.__maxScrollLeft;
      var contentHeight = clientHeight + this.scroller.__maxScrollTop;

      // We should add the the height or width that is
      // out of horizontal bountry  to the total length

      /* istanbul ignore if */
      if (scroller.__scrollLeft < 0) {
        outerLeft = -scroller.__scrollLeft;
      } /* istanbul ignore next */else if (scroller.__scrollLeft > scroller.__maxScrollLeft) {
          outerLeft = scroller.__scrollLeft - scroller.__maxScrollLeft;
        }

      // out of vertical bountry
      if (scroller.__scrollTop < 0) {
        outerTop = -scroller.__scrollTop;
        this.outTheBottomBoundary = false;
        this.outTheTopBoundary = true;
      } else if (scroller.__scrollTop > scroller.__maxScrollTop) {
        outerTop = scroller.__scrollTop - scroller.__maxScrollTop;
        this.outTheTopBoundary = false;
        this.outTheBottomBoundary = true;
      } else {
        this.outTheTopBoundary = this.outTheBottomBoundary = false;
      }

      heightPercentage = clientHeight / (contentHeight + outerTop);
      widthPercentage = clientWidth / (contentWidth + outerLeft);

      var scrollTop = Math.min(Math.max(0, scroller.__scrollTop), scroller.__maxScrollTop);
      var scrollLeft = Math.min(Math.max(0, scroller.__scrollLeft), scroller.__maxScrollLeft);

      this.bar.vBar.state.posValue = (scrollTop + outerTop) * 100 / vuescroll.clientHeight;
      this.bar.hBar.state.posValue = (scrollLeft + outerLeft) * 100 / vuescroll.clientWidth;

      /* istanbul ignore if */
      if (scroller.__scrollLeft < 0) {
        this.bar.hBar.state.posValue = 0;
      }
      if (scroller.__scrollTop < 0) {
        this.bar.vBar.state.posValue = 0;
      }

      this.bar.vBar.state.size = heightPercentage < 1 ? heightPercentage : 0;
      this.bar.hBar.state.size = widthPercentage < 1 ? widthPercentage : 0;
    },
    registryEvent: function registryEvent(type) {
      var domName = type == 'refresh' ? __REFRESH_DOM_NAME : __LOAD_DOM_NAME;
      var activateFunc = type == 'refresh' ? this.scroller.activatePullToRefresh : this.scroller.activatePushToLoad;
      var stageType = type == 'refresh' ? 'refreshStage' : 'loadStage';
      var tipDom = this.$refs[domName].elm || this.$refs[domName];
      var cbs = createStateCallbacks(type, stageType, this, tipDom);
      var height = tipDom.offsetHeight;

      activateFunc.bind(this.scroller)(height, cbs);
    },
    getSlidePosition: function getSlidePosition() {
      return {
        scrollLeft: this.scroller.__scrollLeft,
        scrollTop: this.scroller.__scrollTop
      };
    }
  }
};

/**
 * These mixes is exclusive for native mode
 */

var nativeMix = {
  methods: {
    updateNativeModeBarState: function updateNativeModeBarState() {
      var container = this.scrollPanelElm;
      var isPercent = this.vuescroll.state.currentSizeStrategy == 'percent';
      var _vuescroll$state = this.vuescroll.state,
          width = _vuescroll$state.width,
          height = _vuescroll$state.height;

      var clientWidth = isPercent || !width ? container.clientWidth : width.slice(0, -2); // xxxpx ==> xxx
      var clientHeight = isPercent || !height ? container.clientHeight : height.slice(0, -2);

      var heightPercentage = clientHeight / container.scrollHeight;
      var widthPercentage = clientWidth / container.scrollWidth;

      this.bar.vBar.state.posValue = container.scrollTop * 100 / clientHeight;
      this.bar.hBar.state.posValue = container.scrollLeft * 100 / clientWidth;

      this.bar.vBar.state.size = heightPercentage < 1 ? heightPercentage : 0;
      this.bar.hBar.state.size = widthPercentage < 1 ? widthPercentage : 0;
    },
    getNativePosition: function getNativePosition() {
      return {
        scrollTop: this.scrollPanelElm.scrollTop,
        scrollLeft: this.scrollPanelElm.scrollLeft
      };
    },
    css: function css(dom, style) /* istanbul ignore next */{
      return window.getComputedStyle(dom)[style];
    },
    checkScrollable: function checkScrollable(e, deltaX, deltaY) /* istanbul ignore next */{
      var scrollable = false;

      // check mouse point scrollable.
      var dom = e.target ? e.target : e;
      while (dom && dom.nodeType == 1 && dom !== this.scrollPanelElm.parentNode && !/^BODY|HTML/.test(dom.nodeName)) {
        var ov = this.css(dom, 'overflow') || '';
        if (/scroll|auto/.test(ov)) {
          var _getScrollProcess = this.getScrollProcess(dom),
              v = _getScrollProcess.v,
              h = _getScrollProcess.h;

          var isScrollX = this.css(dom, 'overflowX') !== 'hidden';
          var isScrollY = this.css(dom, 'overflowY') !== 'hidden';
          if (isScrollX && (deltaX < 0 && h > 0 || deltaX > 0 && h < 1) || isScrollY && (deltaY < 0 && v > 0 || deltaY > 0 && v < 1)) {
            scrollable = dom == this.scrollPanelElm;
            break;
          }
        }
        dom = dom.parentNode ? dom.parentNode : false;
      }

      return scrollable;
    },
    onMouseWheel: function onMouseWheel(event) /* istanbul ignore next */{
      var _mergedOptions$vuescr = this.mergedOptions.vuescroll,
          isReverse = _mergedOptions$vuescr.wheelDirectionReverse,
          duration = _mergedOptions$vuescr.wheelScrollDuration,
          checkShiftKey = _mergedOptions$vuescr.checkShiftKey,
          locking = _mergedOptions$vuescr.locking;


      var deltaX = void 0;
      var deltaY = void 0;
      if (event.wheelDelta) {
        if (event.deltaY || event.deltaX) {
          deltaX = event.deltaX;
          deltaY = event.deltaY;
          if (locking) {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
              deltaY = 0;
            } else {
              deltaX = 0;
            }
          }
        } else {
          deltaX = 0;
          deltaY = -1 * event.wheelDelta / 2;
        }
      } else if (event.detail) {
        deltaY = deltaX = event.detail * 16;
        // horizontal scroll
        if (event.axis == 1) {
          deltaY = 0;
        } else if (event.axis == 2) {
          // vertical scroll
          deltaX = 0;
        }
      }

      if (checkShiftKey && event.shiftKey) {
        // swap value
        deltaX ^= deltaY;
        deltaY ^= deltaX;
        deltaX ^= deltaY;
      }

      if (isReverse) {
        deltaX ^= deltaY;
        deltaY ^= deltaX;
        deltaX ^= deltaY;
      }

      if (this.checkScrollable(event, deltaX, deltaY)) {
        event.stopPropagation();
        event.preventDefault();
        this.scrollBy({ dx: deltaX, dy: deltaY }, duration);
      }
    }
  },
  computed: {
    scrollContentElm: function scrollContentElm() {
      return this.$refs['scrollContent']._isVue ? this.$refs['scrollContent'].$el : this.$refs['scrollContent'];
    }
  }
};

var update = [slideMix, nativeMix];

var mixins = [api$1].concat(toConsumableArray(update));

var core$1 = {
  mixins: mixins,
  mounted: function mounted() {
    if (!this._isDestroyed && !this.renderError) {
      if (this.mode == 'slide') {
        this.updatedCbs.push(this.updateScroller);
      }

      this.$watch('mergedOptions.vuescroll.scroller.disable', {
        sync: true,
        handler: function handler(newVal) {
          if (this.scroller) {
            this.scroller.__disable = newVal;
          }
        }
      });
    }
  },

  computed: {
    mode: function mode() {
      return this.mergedOptions.vuescroll.mode;
    }
  },
  methods: {
    destroy: function destroy() {
      if (this.destroyScroller) {
        this.scroller.stop();
        this.destroyScroller();
        this.destroyScroller = null;
      }

      /* istanbul ignore next */
      if (this.destroyResize) {
        this.destroyResize();
      }
    },
    handleScroll: function handleScroll(nativeEvent) {
      this.updateBarStateAndEmitEvent('handle-scroll', nativeEvent);
    },
    updateBarStateAndEmitEvent: function updateBarStateAndEmitEvent(eventType) {
      var nativeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.mode == 'native') {
        this.updateNativeModeBarState();
      } else if (this.mode == 'slide') {
        /* istanbul ignore if */
        if (!this.scroller) {
          return;
        }

        this.updateSlideModeBarState();
      }
      if (eventType) {
        this.emitEvent(eventType, nativeEvent);
      }
      if (this.mergedOptions.bar.onlyShowBarOnScroll) {
        if (eventType == 'handle-scroll' || eventType == 'handle-resize' || eventType == 'refresh-status' || eventType == 'window-resize' || eventType == 'options-change') {
          this.showAndDefferedHideBar(true /* forceHideBar: true */);
        }
      } else {
        this.showAndDefferedHideBar();
      }
    },
    getScrollProcess: function getScrollProcess() {
      var _scrollPanelElm = this.scrollPanelElm,
          scrollHeight = _scrollPanelElm.scrollHeight,
          scrollWidth = _scrollPanelElm.scrollWidth,
          clientHeight = _scrollPanelElm.clientHeight,
          clientWidth = _scrollPanelElm.clientWidth,
          scrollTop = _scrollPanelElm.scrollTop,
          scrollLeft = _scrollPanelElm.scrollLeft;


      if (this.mode == 'slide') {
        scrollHeight = this.scroller.__contentHeight;
        scrollWidth = this.scroller.__contentWidth;
        scrollTop = this.scroller.__scrollTop;
        scrollLeft = this.scroller.__scrollLeft;
        clientHeight = this.$el.clientHeight;
        clientWidth = this.$el.clientWidth;
      }

      var v = Math.min(scrollTop / (scrollHeight - clientHeight || 1), 1);
      var h = Math.min(scrollLeft / (scrollWidth - clientWidth || 1), 1);

      return {
        v: v,
        h: h
      };
    },
    emitEvent: function emitEvent(eventType) {
      var nativeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _scrollPanelElm2 = this.scrollPanelElm,
          scrollTop = _scrollPanelElm2.scrollTop,
          scrollLeft = _scrollPanelElm2.scrollLeft;


      var vertical = {
        type: 'vertical'
      };
      var horizontal = {
        type: 'horizontal'
      };

      var _getScrollProcess = this.getScrollProcess(),
          v = _getScrollProcess.v,
          h = _getScrollProcess.h;

      vertical['process'] = v;
      horizontal['process'] = h;

      vertical['barSize'] = this.bar.vBar.state.size;
      horizontal['barSize'] = this.bar.hBar.state.size;
      vertical['scrollTop'] = scrollTop;
      horizontal['scrollLeft'] = scrollLeft;

      this.$emit(eventType, vertical, horizontal, nativeEvent);
    },
    initVariables: function initVariables() {
      this.lastMode = this.mode;
      this.$el._isVuescroll = true;
    },
    refreshMode: function refreshMode() {
      var initPos = void 0;
      if (this.scroller) {
        initPos = this.scroller.getValues();
      }

      if (this.destroyScroller) {
        this.scroller.stop();
        this.destroyScroller();
        this.destroyScroller = null;
      }

      if (this.mode == 'slide') {
        this.destroyScroller = this.registryScroller(initPos);
      } else if (this.mode == 'native') {
        // remove the legacy transform style attribute
        this.scrollPanelElm.style.transform = '';
        this.scrollPanelElm.style.transformOrigin = '';
      }
    },
    refreshInternalStatus: function refreshInternalStatus() {
      // 1.set vuescroll height or width according to
      // sizeStrategy
      this.setVsSize();
      // 2. registry resize event
      this.registryResize();
      // 3. registry scroller if mode is 'slide'
      // or remove 'transform origin' is the mode is not `slide`
      this.refreshMode();
      // 4. update scrollbar's height/width
      this.updateBarStateAndEmitEvent('refresh-status');
    },
    registryResize: function registryResize() {
      var _this = this;

      var resizeEnable = this.mergedOptions.vuescroll.detectResize;
      var modeChanged = false;

      if (this.lastMode != this.mode) {
        modeChanged = true;
        this.lastMode = this.mode;
      }

      /* istanbul ignore next */
      if (this.destroyResize && resizeEnable && !modeChanged) {
        return;
      }

      if (this.destroyResize) {
        this.destroyResize();
      }

      if (!resizeEnable) {
        return;
      }

      var contentElm = null;
      if (this.mode == 'slide') {
        contentElm = this.scrollPanelElm;
      } else if (this.mode == 'native') {
        // scrollContent maybe a vue-component or a pure-dom
        contentElm = this.scrollContentElm;
      }

      var vm = this;
      var handleWindowResize = function handleWindowResize() /* istanbul ignore next */{
        vm.updateBarStateAndEmitEvent('window-resize');
        if (vm.mode == 'slide') {
          vm.updatedCbs.push(vm.updateScroller);
          vm.$forceUpdate();
        }
      };

      var handleDomResize = function handleDomResize() {
        var currentSize = {};
        if (_this.mode == 'slide') {
          currentSize['width'] = _this.scroller.__contentWidth;
          currentSize['height'] = _this.scroller.__contentHeight;
          _this.updateBarStateAndEmitEvent('handle-resize', currentSize);
          // update scroller should after rendering
          _this.updatedCbs.push(_this.updateScroller);
          _this.$forceUpdate();
        } else if (_this.mode == 'native') {
          currentSize['width'] = _this.scrollPanelElm.scrollWidth;
          currentSize['height'] = _this.scrollPanelElm.scrollHeight;
          _this.updateBarStateAndEmitEvent('handle-resize', currentSize);
        }

        // Since content sie changes, we should tell parent to set
        // correct size to fit content's size
        _this.setVsSize();
      };
      window.addEventListener('resize', handleWindowResize, false);

      var destroyDomResize = installResizeDetection(contentElm, handleDomResize);

      var destroyWindowResize = function destroyWindowResize() {
        window.removeEventListener('resize', handleWindowResize, false);
      };

      this.destroyResize = function () {
        destroyWindowResize();
        destroyDomResize();

        _this.destroyResize = null;
      };
    },
    getPosition: function getPosition() {
      if (this.mode == 'slide') {
        return this.getSlidePosition();
      } else if (this.mode == 'native') {
        return this.getNativePosition();
      }
    }
  }
};

/**
 * The slide mode config
 */
var config = {
  // vuescroll
  vuescroll: {
    // position or transform
    renderMethod: 'transform',
    // pullRefresh or pushLoad is only for the slide mode...
    pullRefresh: {
      enable: false,
      tips: {
        deactive: 'Pull to Refresh',
        active: 'Release to Refresh',
        start: 'Refreshing...',
        beforeDeactive: 'Refresh Successfully!'
      }
    },
    pushLoad: {
      enable: false,
      tips: {
        deactive: 'Push to Load',
        active: 'Release to Load',
        start: 'Loading...',
        beforeDeactive: 'Load Successfully!'
      },
      auto: false,
      autoLoadDistance: 0
    },
    paging: false,
    zooming: true,
    snapping: {
      enable: false,
      width: 100,
      height: 100
    },
    /* some scroller options */
    scroller: {
      /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
      bouncing: {
        top: 100,
        bottom: 100,
        left: 100,
        right: 100
      },
      /** Minimum zoom level */
      minZoom: 0.5,
      /** Maximum zoom level */
      maxZoom: 3,
      /** Multiply or decrease scrolling speed **/
      speedMultiplier: 1,
      /** This configures the amount of change applied to deceleration when reaching boundaries  **/
      penetrationDeceleration: 0.03,
      /** This configures the amount of change applied to acceleration when reaching boundaries  **/
      penetrationAcceleration: 0.08,
      /** Whether call e.preventDefault event when sliding the content or not */
      preventDefault: false,
      /** Whether call preventDefault when (mouse/touch)move*/
      preventDefaultOnMove: true,
      disable: false
    }
  }
};
/**
 * validate the options
 * @export
 * @param {any} ops
 */
function configValidator(ops) {
  var renderError = false;
  var vuescroll = ops.vuescroll;

  // validate pushLoad, pullReresh, snapping

  if (vuescroll.paging == vuescroll.snapping.enable && vuescroll.paging && (vuescroll.pullRefresh || vuescroll.pushLoad)) {
    error('paging, snapping, (pullRefresh with pushLoad) can only one of them to be true.');
  }

  return renderError;
}

var config$1 = {
  vuescroll: {
    wheelScrollDuration: 0,
    wheelDirectionReverse: false,
    checkShiftKey: true
  }
};

var config$2 = {
  // vuescroll
  vuescroll: {
    mode: 'native'
  }
};
/**
 * validate the options
 * @export
 * @param {any} ops
 */
function configValidator$1(ops) {
  var renderError = false;
  var vuescroll = ops.vuescroll;

  // validate modes

  if (!~modes.indexOf(vuescroll.mode)) {
    error('Unknown mode: ' + vuescroll.mode + ',the vuescroll\'s option "mode" should be one of the ' + modes);
    renderError = true;
  }

  return renderError;
}

var configs = [config$2, config, config$1];
var configValidators = [configValidator$1, configValidator];

var component = _install(core$1, createPanel$2, configs, configValidators);

function install(Vue$$1) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue$$1.component(opts.name || component.name, component);
  Vue$$1.prototype.$vuescrollConfig = opts.ops || {};
}

var Vuescroll = _extends({
  install: install,
  version: '4.17.3',
  refreshAll: refreshAll,
  scrollTo: scrollTo
}, component);

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuescroll);
}

return Vuescroll;

})));


/***/ })

}]);