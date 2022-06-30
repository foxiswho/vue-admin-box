import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { baidu } from './utils/system/statistics'
import 'element-plus/theme-chalk/display.css' // 引入基于断点的隐藏类
import 'element-plus/dist/index.css'
import 'normalize.css' // css初始化
import './assets/style/common.scss' // 公共css
import './theme/modules/chinese/index.scss'
// 
import SvgIcon from '@/components/form/SvgIcon/index.vue';
import { VueDraggableNext } from "vue-draggable-next";
import DraggableWarp from "@/components/form/DraggableWarp.vue";
import OptionInput from "@/components/form/OptionInput.vue";
import UploadWarp from "@/components/form/elementWarp/UploadWarp.vue";
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件
//
import App from './App.vue'
import store from './store'
import router from './router'
import { getAuthRoutes } from './router/permission'
import i18n from './locale'
if (import.meta.env.MODE !== 'development') { // 非开发环境调用百度统计
  // baidu()
}

/** 权限路由处理主方法 */
getAuthRoutes()

const app = createApp(App)
app.use(ElementPlus, { size: store.state.app.elementSize })
app.use(store)
app.use(router)
app.use(i18n)

// 
app.component("draggable", VueDraggableNext);
app.component("draggable-warp", DraggableWarp);
app.component("option-input", OptionInput);
app.component("svg-icon", SvgIcon);
app.component("upload-warp", UploadWarp);

app.directive('highlight', function (el: { querySelectorAll: (arg0: string) => any }) {
  let blocks = el.querySelectorAll('pre code');
  setTimeout(() => {
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block)
    })
  }, 200)
})
// 

// app.config.performance = true
app.mount('#app')