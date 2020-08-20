// 导入
import { h, init } from 'snabbdom'

let patch = init([])

let vnode = h('div#container',
    [
        h('h1', 'h1元素'),
        h('b', '粗大的B'), 
        h('ul',
            [
                h('li', 'l2'),
                h('li', 'l23')
            ]),
        h('i', 'xieti'),
        h('i', 'xieti2')]
)

let app = document.getElementById('app')

let oldvnode = patch(app, vnode)
setTimeout(() => {
    vnode = h('div#container', [h('div', 'd1'), h('div', 'd2')])
    patch(oldvnode, vnode)
    patch(oldvnode,h('!'))
}, 2000)