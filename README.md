# Vue-loading

> loading of Vue Components

## Getting started

``` js
import Vue from 'vue'
import App from './App.vue'
import loading from '/dist/vue-loading'

Vue.use(loading)

new Vue({
  el: '#app',
  render: h => h(App)
})

```
or

``` js
import Vue from 'vue'
import App from './App.vue'
import { Bouncing } from '/dist/vue-loading'

Vue.use( Bouncing )

new Vue({
  el: '#app',
  render: h => h(App)
})

```

or
``` js
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="/dist/vue-loading"></script>

```

## Using Vue-loading
``` html 
<bouncing-loader :loading="true"></bouncing-loader>
```

DIY color
``` html
<bouncing-loader color="red" :loading="true"></bouncing-loader>
<bouncing-loader color="#8385aa" :loading="true"></bouncing-loader>
<bouncing-loader color="rgba(0,0,0,.3)" :loading="true"></bouncing-loader>

```

## Attributes
   参数  |  说明  |  类型  |　　　　　　　　可选值　　　　　　　　| 默认值
  -|-|-|:-:|-|
  color| 颜色 | string | blue / #8385aa / rgba(0,0,0,.3) 等背景色取值方式 | #8385aa
  loading|是否加载中| boolean | - | true

## demo 

[demo](http://x-lite.github.io/vue-loading)

