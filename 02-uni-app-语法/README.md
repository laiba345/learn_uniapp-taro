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
- uni-app有两种页面路由跳转方式【路由的跳转以下面两种方式居多】
    - 使用**navigator**组件跳转
        - 组件：navigator
    - 调用API跳转（类似小程序，与vue-router不同）
        - API：navigateTo、redirectTo、navigatorBack、switchTab
        - 通过uni.navigateTo({url:'xxx'}) 可以进行页面的跳转操作
        - 没什么效果的时候，观察自己是否引入了uni_modules

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
            - 在组件中的，onload生命周期函数中进行监听操作
                - uni.$on('事件名字',() => {}) // 后面的是事件的回调
            - 在组件中，onUnload生命周期函数中进行销毁操作
                - uni.$off() 
        - uni.$on( eventName, callback ) 监听全局的自定义事件。由 uni.$emit 触发。
        -  uni.$once( eventName, callback ) 只监听一次全局的自定义事件。由 uni.$emit 触发
        - uni.$off( eventName, callback ) 移除全局自定义事件监听器。
            - 如果没有提供参数，则移除所有的事件监听器
        - **注意事项**
            - **需先监听，再触发事件**；比如：你在A界面触发，然后跳转到B页面后才监听是不行的
            - 通常on和off是同时使用的，可以避免多次重复监听
            - 适合页面返回传递参数、适合跨组件通讯，不适合界面跳转传递参数
        - 数据传递；【url + 事件通道】
            - 正向传递
                - url传递；在页面中通过onload()生命周期进行接收
            - 逆向传递
            ```
            goToDetail05() {
				uni.navigateTo({
					url: "/pages/detail02/detail02?name=liujun&id=400",
					events: {
						acceptDataFormDetail02(data) {
							console.log("home page 拿到detail02传递过来的数据:", data);
						}
					}
				})
			},
            ```
    - 全局数据globalData
    - 本地数据存储
    - Vuex和Pinia，状态管理库

页面生命周期
- Options API
    - App.vue中是我们应用的生命周期；
        - 一般是这三个
        ```
        onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
            <!-- 监听页面隐藏 -->
			console.log('App Hide')
		}
        ```
    - 常用的页面生命周期函数
        - onLoad()
        - onShow()
        - onReady()
        - onUnload() 
        - onPullDownRefresh -> onPullDownRefresh
            - 监听用户下拉动作
            - 其中有一个方法可以用于停止下拉刷新的操作
                - uni.stopPullDownRefresh() // 关闭下拉刷新的图标
        - onReachBottom -> onReachBottom
            - 页面滚动到底部的事件
            - 页面滚动才会触发；
            - 自行通过overflow实现的滚动不会触发回调
    - **页面可以使用Vue组件的生命周期吗？【可以】**
        - 演示页面detail.vue中可以使用Vue组件的生命周期
- Composition APi
    - 基本同上方
    - 在组合式生命周期中在一个特定的包中进行引入操作
    ```
    <script setup>
	import { ref, onBeforeMount, onMounted } from 'vue'
	import {
		onLoad,
		onShow,
		onReady,
		onHide,
		onUnload,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	
	// 1.页面的生命周期
	onLoad(() => {
		console.log('detail05 onLoad');
	})
	
	onShow(() => {
		console.log('detail05 onShow');
	})
	
	onReady(() => {
		console.log('detail05 onReady');
	})
	
	onHide(() => {
		console.log('detail05 onHide');
	})
	
	onUnload(() => {
		console.log('detail05 onUnload');
	})
	
	onPullDownRefresh(() => {
		console.log('detail05 onPullDownRefresh');
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 1000)
	})
	
	onReachBottom(() => {
		console.log('detail05 onReachBottom');
	})
	
	// 2.Vue组件的生命周期
	onBeforeMount(() => {
		console.log('detail05 onBeforeMount');
	})
	onMounted(() => {
		console.log('detail05 onMounted');
	})
    </script>
    ```



