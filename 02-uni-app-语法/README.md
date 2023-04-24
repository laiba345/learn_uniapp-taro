uniapp扩展组件
- 单独安装组件；在项目中是不需要引入的；不需要手动引入等；
- 导入全部组件


图片过小
- 3kb 在小程序端编译器会将其转成base64

动态重写uni-ui组件里面的样式
- 在uni.scss中书写
    - 可以重写的样式在官方文档中查询
    - uni-sass辅助样式
- 编写局部样式
    - .uni-forms-item_label{}
    - :deep(.uni-forms-item_label){}
    - :global(.uni-forms-item_label){} // 编写全局样式

```
/* 
	1. 重写uni-ui组件库内置的样式变量
*/
@import '@/uni_modules/uni-scss/variables.scss';
$uni-primary:purple;
$uni-success:pink;
```

uni-forms组件
- uni-forms组件使用步骤【类似于Element Plus的表单组件用法】
    - 安装uni-forms等组件
    - uni-forms搭建表单布局
    - 编写表单项的验证规则
    - 提交表单时验证表单项
    - 重置表单
- 重写uni-forms组件样式
    - 参考上方

页面路由
- uni-app有两种页面路由跳转方式
    - 使用**navigator**组件跳转
        - 组件：navigator
    - 调用API跳转（类似小程序，与vue-router不同）
        - API：navigateTo、redirectTo、navigatorBack、switchTab
    - 路由方式
        - 初始化
        - 打开新页面
        - 页面重定向
        - 页面返回
        - Tab切换
        - 重加载

页面间通讯
- 在uni-app中常见的页面通讯方式
    - url查询字符串和EventChannel
        - 直接在url后面通过查询字符串的方式拼接
            - 如url查询字符串出现特殊字符等格式，需编码
        - 然后可在onLoad生命周期中获取url传递的参数

        - EventChannel 对象的获取方式
            - Options语法：this.getOpenerEventChannel()
            - Composition语法：getCurrentInstance().proxy. getOpenerEventChannel()

    - 使用事件总线
        - uni.$emit( eventName, OBJECT ) **触发全局的自定义事件**
        - uni.$on( eventName, callback ) 监听全局的自定义事件。由 uni.$emit 触发。
        -  uni.$once( eventName, callback ) 只监听一次全局的自定义事件。由 uni.$emit 触发
        - uni.$off( eventName, callback ) 移除全局自定义事件监听器。
            - 如果没有提供参数，则移除所有的事件监听器
        - **注意事项**
            - 需先监听，再触发事件；比如：你在A界面触发，然后跳转到B页面后才监听是不行的
            - 通常on和off是同时使用的，可以避免多次重复监听
            - 适合页面返回传递参数、适合跨组件通讯，不适合界面跳转传递参数
    - 全局数据globalData
    - 本地数据存储
    - Vuex和Pinia，状态管理库

页面生命周期
- Options API
    - 常用的页面生命周期函数
    - 页面可以使用Vue组件的生命周期吗？【可以】
- Composition APi
    - 基本同上方



