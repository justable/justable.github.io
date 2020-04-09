(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{241:function(e,t,a){e.exports=a.p+"assets/img/mount.ea01fad0.png"},242:function(e,t,a){e.exports=a.p+"assets/img/update.88ec6939.png"},310:function(e,t,a){"use strict";a.r(t);var n=a(28),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://overreacted.io/zh-hans/react-as-a-ui-runtime/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),n("OutboundLink")],1)])]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#概述"}},[e._v("概述")])]),n("li",[n("a",{attrs:{href:"#一次渲染分-reconciliation-协调阶段-和-commit-提交阶段"}},[e._v("一次渲染分 Reconciliation(协调阶段) 和 Commit(提交阶段)")])]),n("li",[n("a",{attrs:{href:"#源码目录介绍"}},[e._v("源码目录介绍")]),n("ul",[n("li",[n("a",{attrs:{href:"#component-purecomponent"}},[e._v("Component & PureComponent")])]),n("li",[n("a",{attrs:{href:"#createelement-type-config-children-reactelement"}},[e._v("createElement: (type, config, children) => ReactElement")])]),n("li",[n("a",{attrs:{href:"#render-element-container-callback-legacyrendersubtreeintocontainer"}},[e._v("render: (element, container, callback) => legacyRenderSubtreeIntoContainer")])])])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("基于 vdom 机制的前端框架，它们的渲染原理大同小异，可能存在的区别是在 diff 阶段，有的是比对新老 vdom，有的是 vdom 直接和真实 dom 做对比，下图以 React 为例，它采用的是前者")]),e._v(" "),n("ul",[n("li",[e._v("mount 阶段：\n"),n("img",{attrs:{src:a(241),alt:""}})]),e._v(" "),n("li",[e._v("update 阶段：\n"),n("img",{attrs:{src:a(242),alt:""}})])]),e._v(" "),n("p",[e._v("内存中维护一颗宿主树，数据变化时（setState），自动更新宿主树，得到一颗新树，然后 Diff 新老宿主树，找到有变化的部分，得到一个 Change(Patch)，将这个 Patch 加入队列，最终批量更新这些 Patch 到 宿主环境 中。")]),e._v(" "),n("p",[e._v("React 在不同的宿主环境中需要不同的渲染器，在 web 环境中，渲染器为 "),n("code",[e._v("react-dom")]),e._v("，在原生环境中，渲染器为 "),n("code",[e._v("react-native")]),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"一次渲染分-reconciliation-协调阶段-和-commit-提交阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一次渲染分-reconciliation-协调阶段-和-commit-提交阶段"}},[e._v("#")]),e._v(" 一次渲染分 Reconciliation(协调阶段) 和 Commit(提交阶段)")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5dadc6045188255a270a0f85#heading-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考一"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/facebook/react/issues/13186#issuecomment-403959161",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考二"),n("OutboundLink")],1)])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The render phase determines what changes need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.")])]),e._v(" "),n("li",[n("p",[e._v("The commit phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like componentDidMount and componentDidUpdate during this phase.")])]),e._v(" "),n("li",[n("p",[e._v("协调阶段：React 会创建一棵新树（workInProgressTree），可以类比 git 的新建分支，并搜集本次 rerender 中所有的变化，将其应用于 WIP，最终和老树 diff，得到最终的 patch，进入提交阶段。v16 版本之后对此阶段进行了重新设计，v16 之前的 diff 采用的递归，因此无法被打断和恢复，若耗时过长，会导致浏览器白屏影响用户体验；v16 之后出现了 fiber，diff 变成了对链表的 diff，fiber 就相当于链表的每个 node，整个 diff 过程分成了一个个时间片，React 在执行完一个时间片后会主动交还控制权（将下一个时间片传给 requestIdleCallback）给浏览器，整个协调阶段是 React 内部的动作，并不会涉及 dom 操作，所以这些断断续续并不会对用户造成影响，要注意的是，新版协调的不连续性，即控制权的交还和恢复可能造成生命周期函数的重复调用，所以此阶段执行的生命周期函数（constructor ～ getSnapshotBeforeUpdate）不能有副作用，像 componentWillMount、componentWillUpdate 都被取消了。")])]),e._v(" "),n("li",[n("p",[e._v("提交阶段：react dom 负责把这些 patch 作用于真实 dom，这个阶段必须同步执行不能被打断，componentDidMount、componentDidUpdate、componentWillUnmount 会在此阶段被调用。")])])]),e._v(" "),n("h2",{attrs:{id:"源码目录介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码目录介绍"}},[e._v("#")]),e._v(" 源码目录介绍")]),e._v(" "),n("ul",[n("li",[e._v("/packages 核心代码区")]),e._v(" "),n("li",[e._v("/packages/react React")]),e._v(" "),n("li",[e._v("/packages/react-dom ReactDOM")]),e._v(" "),n("li",[e._v("/packages/shared 公共函数库")]),e._v(" "),n("li",[e._v("/scripts 打包相关脚本")]),e._v(" "),n("li",[e._v("/scripts/rollup/build.js 打包入口")]),e._v(" "),n("li",[e._v("/scripts/rollup/bundles.js 打包配置")])]),e._v(" "),n("h3",{attrs:{id:"component-purecomponent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-purecomponent"}},[e._v("#")]),e._v(" Component & PureComponent")]),e._v(" "),n("p",[e._v("/packages/react/src/ReactBaseClasses.js"),n("br"),e._v("\nPureComponent 的 prototype 比 Component 多了一个 isPureReactComponent，仅此而已")]),e._v(" "),n("h3",{attrs:{id:"createelement-type-config-children-reactelement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#createelement-type-config-children-reactelement"}},[e._v("#")]),e._v(" createElement: (type, config, children) => ReactElement")]),e._v(" "),n("p",[e._v("/packages/react/src/ReactElement.js")]),e._v(" "),n("ul",[n("li",[e._v("把 config 的变量转移给 props")]),e._v(" "),n("li",[e._v("设置 type.defaultProps 给 props")]),e._v(" "),n("li",[e._v("返回 ReactElement 对象")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ReactElement")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  $$"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("typeof")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("REACT_ELEMENT_TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  type"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  key"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  ref"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  props"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  _owner"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" owner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("h3",{attrs:{id:"render-element-container-callback-legacyrendersubtreeintocontainer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#render-element-container-callback-legacyrendersubtreeintocontainer"}},[e._v("#")]),e._v(" render: (element, container, callback) => legacyRenderSubtreeIntoContainer")])])}),[],!1,null,null,null);t.default=s.exports}}]);