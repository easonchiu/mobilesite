(window.$_$=window.$_$||[]).push([[7],{"+5I/":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,String(this.getFullYear()).substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr(String(t[n]).length)));return e}},"/uSs":function(e,t,n){e.exports={basename:"",prodPathPrefix:"",prodPath:"demo"}},"4mzW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n("/uSs")),u=c(n("cDcd")),a=c(n("V5bz")),r=n("oncg");function c(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)(function(e){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(0),n.e(5)]).then(function(){var e=n("/J7A");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}),l=(0,a.default)(function(e){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(0),n.e(4)]).then(function(){var e=n("X9vW");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return u.default.createElement(r.BrowserRouter,{basename:o.default.basename},u.default.createElement(r.Switch,null,u.default.createElement(r.Route,{exact:!0,path:"/",component:i}),u.default.createElement(r.Route,{exact:!0,path:"/index2",component:l}),u.default.createElement(r.Redirect,{to:"/index"})))}},BBGD:function(e,t,n){"use strict";var o,u=n("xlLY"),a=(o=u)&&o.__esModule?o:{default:o};window.isApp&&a.default&&a.default.setWebviewBounces({isBounces:0})},K2gz:function(e,t){e.exports=classNames},QcgC:function(e,t){e.exports=FastClick},UqNH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("rKB8"),u=r(n("ZSx1")),a=r(n("fhFi"));function r(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.compose)((0,o.applyMiddleware)(u.default))(o.createStore);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(a.default,e)}},V5bz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n("Yz+Y")),u=s(n("iCc5")),a=s(n("V7oC")),r=s(n("FYw3")),c=s(n("mRg0")),i=n("cDcd"),l=s(i);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){(0,u.default)(this,n);var t=(0,r.default)(this,(n.__proto__||(0,o.default)(n)).call(this,e));return t.state={Component:null},t}return(0,c.default)(n,t),(0,a.default)(n,[{key:"componentDidMount",value:function(){var t=this;this.hasLoadedComponent()||e().then(function(e){return e.default}).then(function(e){t.setState({Component:e})}).catch(function(e){throw console.error("Cannot load component in <AsyncComponent />"),e})}},{key:"hasLoadedComponent",value:function(){return null!==this.state.Component}},{key:"render",value:function(){var e=this.state.Component;return e?l.default.createElement(e,this.props):null}}]),n}(i.PureComponent);return t.displayName="AsyncComponent",t}},Vtdi:function(e,t,n){"use strict";n("TuJu"),n("cNiH"),n("+5I/"),n("BBGD");var o=l(n("cDcd")),u=n("faye"),a=n("h74D"),r=l(n("QcgC")),c=l(n("UqNH")),i=l(n("4mzW"));function l(e){return e&&e.__esModule?e:{default:e}}n("E2g8").polyfill(),window.Set=n("q2v8"),window.Map=n("VGv9"),r.default.attach(document.body);var s=(0,c.default)();(0,u.render)(o.default.createElement(a.Provider,{store:s},o.default.createElement(i.default,null)),document.getElementById("root"))},ZSx1:function(e,t){e.exports=ReduxThunk},aVna:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("QbLZ")),u=r(n("m1cH")),a=n("FiMI");function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.handleActions)({DEMO_POP:function(e,t){var n=[].concat((0,u.default)(e.list));return n.pop(),(0,o.default)({},e,{list:n})},DEMO_PUSH:function(e,t){var n=[].concat((0,u.default)(e.list));return n.push(n.length),(0,o.default)({},e,{list:n})},DEMO_CLEAR:function(e,t){return(0,o.default)({},e,{list:[]})},DEMO_ASYNC_PUSH:function(e,t){var n=[].concat((0,u.default)(e.list));return n.push(n.length),(0,o.default)({},e,{list:n})}},{list:[0,1,2]})},cDcd:function(e,t){e.exports=React},cNiH:function(e,t,n){"use strict";/Android [4-6]/.test(navigator.appVersion)&&window.addEventListener("resize",function(e){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||window.setTimeout(document.activeElement.scrollIntoViewIfNeeded)}),document.body.addEventListener("click",function(e){if("INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName){var t=document.querySelector("input:focus");t&&t.blur()}})},eW3l:function(e,t){e.exports=Qs},faye:function(e,t){e.exports=ReactDOM},fhFi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,u=n("rKB8"),a=n("aVna"),r=(o=a)&&o.__esModule?o:{default:o};t.default=(0,u.combineReducers)({$$demo:r.default})},h74D:function(e,t){e.exports=ReactRedux},oncg:function(e,t){e.exports=ReactRouterDOM},rKB8:function(e,t){e.exports=Redux}},[["Vtdi",6,2,1,0]]]);