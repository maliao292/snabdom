// 导入
import {h,init} from 'snabbdom'

// h 返回虚拟节点
// div 中放置子元素 h1 p


// 对比虚拟DOM的差异 更新到真实DOM
let patch = init([])


 // 第一个参数 标签+选择器
 // 第二个参数 如果是字符串的话就是标签中的内容
let vnode = h('div#container','hello Word') 
let app = document.getElementById('app')

// div 中放置子元素h1 p
// 第一个参数  可以是DOM元素，内部会把DOM元素转换成vnode
// 第二个参数 vnode
// 返回值 vnode
// 渲染到页面上
let oldVnode = patch(app,vnode) 

// 假设
vnode = h('div','你好')
 patch(oldVnode,vnode)