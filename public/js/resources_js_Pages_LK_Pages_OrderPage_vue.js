(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_LK_Pages_OrderPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _omponents_LK_ChatRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Сomponents/LK/ChatRoom */ "./resources/js/Сomponents/LK/ChatRoom.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChatRoom: _omponents_LK_ChatRoom__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      orderid: this.$route.params.id,
      order: {},
      lastMessage: {}
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/get/order/' + this.orderid).then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.order = response.data;
        }
      });
    },
    getLastMessage: function getLastMessage() {
      var _this2 = this;

      axios.get('/get/last/message/' + this.orderid).then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this2.lastMessage = response.data;
        }
      });
    },
    changeLastMessage: function changeLastMessage(data) {
      var self = this;
      self.lastMessage = data.lastMessage;
    },
    summPackage: function summPackage(price, capacity) {
      return price * capacity;
    },
    summAll: function summAll() {
      var summ = 0;

      if (this.order.packages) {
        this.order.packages.map(function (item) {
          summ = parseFloat(summ) + parseFloat(item.capacity) * parseFloat(item.price);
        });
      }

      return summ;
    },
    capacityAll: function capacityAll() {
      var summ = 0;

      if (this.order.packages) {
        this.order.packages.map(function (item) {
          summ = parseInt(summ, 10) + parseInt(item.capacity, 10);
        });
      }

      return summ;
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getLastMessage();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'chat-room',
  components: {},
  data: function data() {
    return {
      messages: [],
      isExpand: false,
      newMessage: ''
    };
  },
  methods: {
    getMessages: function getMessages() {
      var _this = this;

      axios.get('/get/messages/' + this.$attrs.offerId).then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this.messages = response.data;
        }
      });
    },
    sendMessage: function sendMessage(event) {
      var _this2 = this;

      event.preventDefault();
      var self = this;
      var message = self.newMessage;
      var author = 11; //TODO подтянуть сюда user_id

      var chat_room = self.$attrs.offerId;
      axios.post('/send/messages', {
        message: message,
        author: author,
        room: chat_room
      }).then(function (response) {
        if (response.data !== 'undefined' && response.data !== null) {
          _this2.messages.push(response.data);

          _this2.newMessage = '';
        }

        self.$emit('changeLastMessage', {
          lastMessage: response.data
        });
      });
    },
    scroll: function scroll() {
      document.getElementById('cont').scrollTop = document.getElementById('cont').scrollHeight;
    },
    changeDropdown: function changeDropdown() {
      this.isExpand = !this.isExpand;
    }
  },
  updated: function updated() {
    this.scroll();
  },
  mounted: function mounted() {
    this.getMessages();
  }
});

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/OrderPage.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/OrderPage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=template&id=0bcaedeb& */ "./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb&");
/* harmony import */ var _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LK/Pages/OrderPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Сomponents/LK/ChatRoom.vue":
/*!*************************************************!*\
  !*** ./resources/js/Сomponents/LK/ChatRoom.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatRoom.vue?vue&type=template&id=2587a2ec& */ "./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec&");
/* harmony import */ var _ChatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatRoom.vue?vue&type=script&lang=js& */ "./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ChatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Сomponents/LK/ChatRoom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_0bcaedeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderPage.vue?vue&type=template&id=0bcaedeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb&");


/***/ }),

/***/ "./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec&":
/*!********************************************************************************!*\
  !*** ./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRoom_vue_vue_type_template_id_2587a2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatRoom.vue?vue&type=template&id=2587a2ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LK/Pages/OrderPage.vue?vue&type=template&id=0bcaedeb& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "xs-12 col-md-4 left_container" }, [
        _c(
          "div",
          { staticClass: "left_container_info" },
          [
            _c("router-link", { attrs: { to: { name: "my-orders" } } }, [
              _c("div", { staticClass: "prev_page" }, [_vm._v("Назад")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "transaction_name" }, [
              _vm._v("Сделка №" + _vm._s(_vm.order.id))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info_transaction" }, [
              _c("div", { staticClass: "status_transaction" }, [
                _vm._v("Оплата")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "create_transaction" }, [
                _vm._v("Создана " + _vm._s(_vm.order.created_at))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "total_transaction" }, [
              _c("div", { staticClass: "title_block_transaction" }, [
                _vm._v("Итого")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sum_transaction" }, [
                _vm._v("Сумма сделки: "),
                _c("span", [_vm._v(_vm._s(_vm.summAll()) + " ₽")]),
                _vm._v(" "),
                _c("span", { staticClass: "nds" }, [_vm._v("НДС")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "volume_transaction" }, [
                _vm._v("Объем сделки: "),
                _c("span", [_vm._v(_vm._s(_vm.capacityAll()) + " кг")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "delivery_transaction" },
              [
                _c("div", { staticClass: "title_block_transaction" }, [
                  _vm._v("Доставка")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "where_from_transaction" }, [
                  _c("div", { staticClass: "icon_where" }, [
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
                            d:
                              "M5.20825 14.8779L12.4999 21.8749L19.7916 14.8779",
                            stroke: "#8898A8",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }
                        }),
                        _vm._v(" "),
                        _c("line", {
                          attrs: {
                            x1: "1",
                            y1: "-1",
                            x2: "17.4719",
                            y2: "-1",
                            transform:
                              "matrix(1.19249e-08 -1 -1 -1.19249e-08 11.4915 21.5967)",
                            stroke: "#8898A8",
                            "stroke-width": "2",
                            "stroke-linecap": "round"
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.order.from
                    ? _c("div", [
                        _vm._v(
                          _vm._s(_vm.order.from.region_ru) +
                            ", " +
                            _vm._s(_vm.order.from.title_ru)
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "where_transaction" }, [
                  _c("div", { staticClass: "icon_where" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "25",
                          height: "26",
                          viewBox: "0 0 25 26",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M22.9166 11.4584C22.9166 16.0129 16.3878 21.8434 13.6677 24.0749C12.9822 24.6373 12.0177 24.6373 11.3321 24.0749C8.61203 21.8434 2.08325 16.0129 2.08325 11.4584C2.08325 5.70545 6.74695 1.04175 12.4999 1.04175C18.2529 1.04175 22.9166 5.70545 22.9166 11.4584Z",
                            stroke: "#8898A8",
                            "stroke-width": "2"
                          }
                        }),
                        _vm._v(" "),
                        _c("ellipse", {
                          attrs: {
                            cx: "12.5",
                            cy: "11.4583",
                            rx: "3.125",
                            ry: "3.125",
                            stroke: "#8898A8",
                            "stroke-width": "2"
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.order.delivery
                    ? _c("div", [
                        _vm._v(
                          _vm._s(_vm.order.delivery.region_ru) +
                            ", " +
                            _vm._s(_vm.order.delivery.title_ru)
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm._l(_vm.order.type_delivery, function(del) {
                  return _vm.order.type_delivery
                    ? _c("div", { staticClass: "type_transaction" }, [
                        _vm._v("Тип доставки: "),
                        _c("span", [_vm._v(_vm._s(del.name))])
                      ])
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("div", { staticClass: "partner_transaction" }, [
                  _vm._v("Контрагент: "),
                  _vm.order.organization
                    ? _c("span", [_vm._v(_vm._s(_vm.order.organization.name))])
                    : _vm._e()
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "history_transaction" },
              [
                _c("div", { staticClass: "title_block_transaction" }, [
                  _vm._v("История сделки")
                ]),
                _vm._v(" "),
                _vm._l(_vm.order.history, function(history) {
                  return _c("div", { staticClass: "date_active_transaction" }, [
                    _vm._v(_vm._s(history.created_at)),
                    _c("span", [_vm._v(_vm._s(history.status.name))])
                  ])
                })
              ],
              2
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "xs-12 col-md-8" }, [
        _c(
          "div",
          { staticClass: "right_container" },
          [
            _c("chat-room", {
              attrs: { offerId: _vm.orderid },
              on: { changeLastMessage: _vm.changeLastMessage }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "message_content",
                attrs: {
                  "data-toggle": "modal",
                  "data-target": "#messageModal"
                }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "last_message" }, [
                  _c("div", { staticClass: "top_last_message" }, [
                    _c("div", { staticClass: "sender_last_message" }, [
                      _c("div", {
                        staticClass: "photo_sender_last_message",
                        staticStyle: {
                          "background-image": "url(/images/photo.png)"
                        }
                      }),
                      _vm._v(" "),
                      _vm.lastMessage.author
                        ? _c(
                            "div",
                            { staticClass: "info_sender_last_message" },
                            [
                              _c(
                                "div",
                                { staticClass: "name_sender_last_message" },
                                [_vm._v(_vm._s(_vm.lastMessage.author.name))]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.lastMessage.author.roles, function(
                                role
                              ) {
                                return _c(
                                  "div",
                                  { staticClass: "post_sender_last_message" },
                                  [_vm._v(_vm._s(role.name))]
                                )
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "time_last_message" }, [
                      _vm._v(_vm._s(_vm.lastMessage.created_at))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text_last_message" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.lastMessage.message) +
                        "\n                        "
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "table_container table-responsive" }, [
              _c("div", { staticClass: "top_table_info" }, [
                _vm.order.packages
                  ? _c("div", { staticClass: "transaction_objects" }, [
                      _vm._v(
                        "\n                            Объектов сделки " +
                          _vm._s(_vm.order.packages.length) +
                          "\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "total" }, [
                  _vm._v("Итого "),
                  _c("span", [_vm._v(_vm._s(_vm.summAll()) + " ₽")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table default_table table_product" },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Товар")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("Фасовка")
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("Объём\n                                "),
                        _c("span", { staticClass: "sort_col" }, [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "15",
                                height: "9",
                                viewBox: "0 0 15 9",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751",
                                  stroke: "#22262A",
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
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v(
                          "Цена закупки\n                                "
                        ),
                        _c("span", { staticClass: "sort_col" }, [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "15",
                                height: "9",
                                viewBox: "0 0 15 9",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751",
                                  stroke: "#22262A",
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
                      _c(
                        "th",
                        { staticClass: "sum_table", attrs: { scope: "col" } },
                        [
                          _vm._v("Сумма\n                                "),
                          _c("span", { staticClass: "sort_col" }, [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  width: "15",
                                  height: "9",
                                  viewBox: "0 0 15 9",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751",
                                    stroke: "#22262A",
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.order.packages, function(pack) {
                      return _c("tr", [
                        _c("td", { staticClass: "bold" }, [
                          _c(
                            "div",
                            { staticClass: "product_container_table" },
                            [
                              _c("div", {
                                staticClass: "image_product_table",
                                style:
                                  "background-image: url(" +
                                  _vm.order.offer.product.image +
                                  ");"
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.order.offer.product.name))
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(pack.package.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(pack.capacity) + " кг")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(pack.price) + " Р / кг")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "sum_table" }, [
                          _vm._v(
                            _vm._s(_vm.summPackage(pack.price, pack.capacity)) +
                              " Р"
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "conatainer_title_message" }, [
      _c("div", { staticClass: "title_content_message" }, [
        _vm._v("Сообщения")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "count_message" }, [
        _vm._v("Непрочитано "),
        _c("span", [_vm._v("5")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navigation_table" }, [
      _c("div", { staticClass: "num_rows" }, [
        _c("span", [
          _vm._v(
            "\n                                Количество сторок\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container_select_rows" }, [
          _c("select", { attrs: { name: "", id: "" } }, [
            _c("option", { attrs: { value: "" } }, [_vm._v("5")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v("10")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "page_count" }, [
        _vm._v(
          "\n                            1-5 из 100\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Сomponents/LK/ChatRoom.vue?vue&type=template&id=2587a2ec& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal modal_message",
      attrs: {
        "data-easein": "slideRightIn",
        id: "messageModal",
        tabindex: "-1",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("div", { staticClass: "title_modal_message" }, [
              _vm._v("Сообщения")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  id: "message_close",
                  "data-dismiss": "modal"
                }
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
                        d: "M6 6L18.7742 18.7742",
                        stroke: "#22262A",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d: "M6 18.7742L18.7742 5.99998",
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
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-body", attrs: { id: "cont" } },
            _vm._l(_vm.messages, function(message) {
              return _c("div", { staticClass: "modal_item_message" }, [
                _c("div", { staticClass: "top_last_message" }, [
                  _c("div", { staticClass: "sender_last_message" }, [
                    _c("div", {
                      staticClass: "photo_sender_last_message",
                      staticStyle: {
                        "background-image": "url(/images/photo.png)"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "info_sender_last_message" },
                      [
                        _c("div", { staticClass: "name_sender_last_message" }, [
                          _vm._v(_vm._s(message.author.name))
                        ]),
                        _vm._v(" "),
                        _vm._l(message.author.roles, function(role) {
                          return _c(
                            "div",
                            { staticClass: "post_sender_last_message m-b-10" },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(role.name) +
                                  "\n                                "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "time_last_message" }, [
                    _vm._v(_vm._s(message.created_at))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text_last_message" }, [
                  _vm._v(
                    "\n                       " +
                      _vm._s(message.message) +
                      "\n                    "
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal_footer_message" }, [
            _c("form", { attrs: { action: "" } }, [
              _c("div", { staticClass: "modal_container_input_message" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newMessage,
                      expression: "newMessage"
                    }
                  ],
                  attrs: { type: "text", placeholder: "Сообщение ..." },
                  domProps: { value: _vm.newMessage },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newMessage = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "container_message_file" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      staticClass: "input-file",
                      attrs: { type: "file", name: "file", id: "file" }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "btn btn-tertiary js-labelFile",
                        attrs: { for: "file" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              width: "23",
                              height: "25",
                              viewBox: "0 0 23 25",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21.981 11.6672L12.0815 21.5667C12.0815 21.5667 7.48528 26.1629 3.24264 21.9203C-1 17.6776 3.59619 13.0814 3.59619 13.0814L13.8492 2.82837C13.8492 2.82837 16.6777 -5.7091e-05 19.5061 2.82837C22.3345 5.6568 19.5061 8.48522 19.5061 8.48522L9.6066 18.3847C9.6066 18.3847 8.19239 19.7989 6.77817 18.3847C5.36396 16.9705 6.77817 15.5563 6.77817 15.5563L15.9706 6.3639",
                                stroke: "#8898A8",
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
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "btn_send_message" }, [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.sendMessage($event)
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "23",
                          height: "24",
                          viewBox: "0 0 23 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M1.72693 11.827C0.899184 11.5087 0.864737 10.3503 1.6721 9.98331L20.407 1.46743C21.2482 1.08508 22.1135 1.95043 21.7312 2.7916L13.2153 21.5265C12.8483 22.3339 11.69 22.2994 11.3716 21.4717L8.85208 14.9209C8.7505 14.6568 8.5418 14.4481 8.27771 14.3466L1.72693 11.827Z",
                            stroke: "white",
                            "stroke-width": "2"
                          }
                        })
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);