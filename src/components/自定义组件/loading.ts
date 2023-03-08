import {  createVNode, render } from "vue"
import type {App, VNode} from 'vue'
import LodingVue from "./loding.vue"
export default {
  install(app: App) {
    const Vnode: VNode = createVNode(LodingVue)
    render(Vnode, document.body)
    app.config.globalProperties.$loading = {
      show:Vnode.component?.exposed?.show,
      hide:Vnode.component?.exposed?.hide
    }
    app.config.globalProperties.$loading.show()
  }
}