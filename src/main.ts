import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
// import App from './components/01-ref.vue'
// import App from './components/02-watch-computed.vue'
// import App from './components/03-toRef.vue'
// import App from './components/04-lifecycle.vue'
// import App from './components/父子传值/Father.vue'
// import App from './components/组件/index.vue'
// import App from './components/transition/index.vue'
// import App from './components/跨组件传值/index.vue'
// import App from './components/自定义指令/index.vue'
// import App from './store/app.vue'
// import App from  './components/vue2/idnex.vue'


// import App from  './views/滑动验证/ImgCheck.vue'
// import App from './views/图片懒加载/LazyImg.vue'

// import App from './views/测试/test.vue'
import App from './views/天气预报/test.vue'



import loading from './components/自定义组件/loading'


const myPlugin = {
    install(app, options) {
        let dom = document.documentElement
        var ObserverList = []
        var scrollFun = (() => {
        var initUrl = (num) => {
            ObserverList.forEach(({ el, value }, index) => {
            if (el.offsetTop - 150 < num) {
                el.src = value
                console.log(el);
                ObserverList.splice(index, 1)
            }
            })
        }
        return () => {
            window.addEventListener('scroll', () => {
            initUrl(10)
            })
        }
        }
        )()

        app.directive('myfocus', {
            mounted(el, { value }) {
                ObserverList.push({ el, value })
                scrollFun()
            },
            unmounted() {
                let index = ObserverList.findIndex(v => v.el === el)
                if (index != -1) {
                    ObserverList.splice(index,1)
                }
            },
        });
    }
}





const app = createApp(App)
app.use(myPlugin)

// pinia
import {createPinia} from 'pinia'
// 引入持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
// 使用该插件
store.use(piniaPluginPersist)
app.use(store)


//编写ts loading 声明文件放置报错 和 智能提示
type Lod = {
    show: () => void,
    hide: () => void

}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $loading: Lod
    }
}




app.use(loading)
import Card from './components/组件/Card.vue'
app.component('Card', Card)
app.mount('#app')
