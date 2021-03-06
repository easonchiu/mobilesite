// polyfill
require('es6-promise').polyfill()
window.Set = require('es6-set')
window.Map = require('es6-map')

// reset css
import 'src/assets/css/reset'

// base framework
import React from 'react'
import { render } from 'react-dom'

// // >>>
// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }
// // <<<

// fastclick
import fastclick from 'fastclick'

fastclick.attach(document.body)

// routes
import Routers from 'src/routes'

// render to #root
render(
  <Routers />,
  document.getElementById('root'),
)

// >>>
module.hot && module.hot.accept()
import V from 'vconsole'

window.vc = new V()
// <<<
