if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "style-page" }, [
      vue.createElementVNode("view", { class: "bg-view" }),
      vue.createElementVNode("text", { class: "text iconfont icon-shouye" }),
      vue.createElementVNode("text", { class: "text iconfont icon-Video" })
    ]);
  }
  const PagesStyleStyle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/03-cpns-uni-app/pages/style/style.vue"]]);
  const cvy = "/static/images/cvy.png";
  const _imports_0 = "/static/images/banner/banner01.jpeg";
  const _imports_1 = "/static/images/banner/banner02.jpeg";
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello",
        cvy
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u76F4\u63A5\u5199div\u662F\u53EF\u4EE5,\u4F46\u662F\u4E0D\u63A8\u8350, \u5E76\u4E14\u8FD9\u4E2Adiv\u6807\u7B7E\u662F\u4E0D\u8DE8\u5E73\u53F0\u7EC4\u4EF6 "),
      vue.createCommentVNode(" <div>\u6211\u662F\u4E00\u4E2Adiv</div> "),
      vue.createElementVNode("view", { class: "title" }, "1.\u6211\u662F\u4E00\u4E2AView\u7EC4\u4EF6(\u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u7EC4\u4EF6)"),
      vue.createElementVNode("text", { class: "text" }, "2.\u6211\u662F\u4E00\u4E2AText\u7EC4\u4EF6"),
      vue.createElementVNode("button", { type: "default" }, "3.\u6211\u662F\u4E00\u4E2Abutton"),
      vue.createCommentVNode(" primary \u662F\u4E00\u4E2A\u4E3B\u9898\u8272 \r\n		 1. \u81EA\u5DF1\u5C01\u88C5\u4E00\u4E2Abutton\r\n		 2. \u91CD\u5199button\u7684\u6837\u5F0F( \u6761\u4EF6\u7F16\u8BD1 )		\r\n		"),
      vue.createElementVNode("button", { type: "primary" }, "4.\u6211\u662F\u4E00\u4E2Abutton"),
      vue.createCommentVNode(" \u56FE\u7247 "),
      vue.createCommentVNode(" \u76F8\u5BF9\u8DEF\u5F84 "),
      vue.createCommentVNode(' <image src="../../static/images/cvy.png" mode="widthFix"></image> '),
      vue.createCommentVNode(" \u7EDD\u5BF9\u8DEF\u5F84 "),
      vue.createCommentVNode(' <image src="@/static/images/cvy.png" mode="widthFix"></image> '),
      vue.createCommentVNode(" \u5BFC\u5165\u7684\u56FE\u7247 "),
      vue.createElementVNode("image", {
        class: "image",
        src: $data.cvy,
        mode: "widthFix"
      }, null, 8, ["src"]),
      vue.createCommentVNode(" base64 \u5B57\u7B26\u4E32 "),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "hy-v-scroll"
      }, [
        vue.createElementVNode("view", { class: "v-item" }, "item1"),
        vue.createElementVNode("view", { class: "v-item" }, "item2"),
        vue.createElementVNode("view", { class: "v-item" }, "item3"),
        vue.createElementVNode("view", { class: "v-item" }, "item4"),
        vue.createElementVNode("view", { class: "v-item" }, "item5"),
        vue.createElementVNode("view", { class: "v-item" }, "item6"),
        vue.createElementVNode("view", { class: "v-item" }, "item7")
      ]),
      vue.createElementVNode("scroll-view", {
        "scroll-x": "true",
        class: "hy-h-scroll",
        "show-scrollbar": false
      }, [
        vue.createElementVNode("view", { class: "h-item" }, "item1"),
        vue.createElementVNode("view", { class: "h-item" }, "item2"),
        vue.createElementVNode("view", { class: "h-item" }, "item3"),
        vue.createElementVNode("view", { class: "h-item" }, "item4"),
        vue.createElementVNode("view", { class: "h-item" }, "item5"),
        vue.createElementVNode("view", { class: "h-item" }, "item6"),
        vue.createElementVNode("view", { class: "h-item" }, "item7")
      ]),
      vue.createElementVNode("swiper", {
        class: "hy-swiper",
        "indicator-dots": true,
        "indicator-active-color": "#ff8198",
        "indicator-color": "#f8f8f8",
        autoplay: true,
        interval: 3e3,
        duration: 1e3
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            class: "swiper-image",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            class: "swiper-image",
            src: _imports_1
          })
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/03-cpns-uni-app/pages/index/index.vue"]]);
  __definePage("pages/style/style", PagesStyleStyle);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/03-cpns-uni-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
