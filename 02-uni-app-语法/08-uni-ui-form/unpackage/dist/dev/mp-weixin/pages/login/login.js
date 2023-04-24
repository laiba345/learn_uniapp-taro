"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        username: null,
        password: null
      },
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: "请输入账号"
            }
          ]
        },
        password: {
          rules: [
            {
              required: true,
              errorMessage: "请输入密码"
            },
            {
              minLength: 6,
              maxLength: 8,
              errorMessage: "请输入6-8位的密码"
            }
          ]
        }
      }
    };
  },
  methods: {
    submit() {
      console.log("submit");
      this.$refs.form.validate().then((value) => {
        console.log(value);
      }).catch((err) => {
        console.error(err);
      });
    },
    reset() {
      console.log("reset");
      this.$refs.form.clearValidate();
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = null;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入账号",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      label: "账号",
      name: "username",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.formData.password
    }),
    f: common_vendor.p({
      label: "密码",
      name: "password",
      required: true
    }),
    g: common_vendor.sr("form", "e8d12734-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    j: common_vendor.o((...args) => $options.reset && $options.reset(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/kangder/web/learn_uniapp&taro/learn_uniapp-taro/02-uni-app-语法/08-uni-ui-form/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
