/*
 * @Module: 框架入口
 * @Author: chaoshuai
 * @Date: 2018-06-10 
 */

import { Bouncing } from 'components/bouncing'
import { Donut } from 'components/donut'

let loading = [
    Bouncing,
    Donut
]
    

function install (Vue) {
  if (install.installed) return

  // 注册全局组件
  loading.map( component => Vue.component(component.name, component))

}

// 全局模式下自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
    install,
    ...loading
}
