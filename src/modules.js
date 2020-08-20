import { init, h } from 'snabbdom'
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'
let patch = init([style, eventlisteners])
let vnode = h('div#container', {
    style: { color: '#f00', backgroundColor: "#0f0" },
    on: {
        click: eventHandler
    }
},
    [h('h1', 'moduler')]
)
function eventHandler() {
    console.log('click')
}

let app = document.getElementById('app')
patch(app, vnode)