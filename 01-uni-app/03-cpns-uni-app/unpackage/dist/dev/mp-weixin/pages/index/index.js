"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      cvy: common_assets.cvy
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.cvy,
    b: common_assets._imports_0,
    c: common_assets._imports_1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/kangder/web/learn_uniapp&taro/learn_uniapp-taro/01-uni-app/03-cpns-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
