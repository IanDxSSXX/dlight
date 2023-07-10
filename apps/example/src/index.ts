import { render, renderToText } from "@dlightjs/dlight"
import TestView from "./test.view"
import ReactiveView from "./basic/reactive.view"
import PropPassingView from "./basic/propPassing.view"
import ObserveElementView from "./advanced/observeElement.view"
import TransitionGroupView from "./advanced/transitionGroup.view"
import BenchmarkView from "./benchmark/benchmark-keyed.view"
import BenchmarkViewSubView from "./benchmark/benchmark-keyed-subview.view"
import ToDoApp from "./tutorial/ToDoApp"
import FetchDataView from "./basic/fetchData.view"
import DerivedValueView from "./basic/derivedValue.view"
import StyledView from "./advanced/styledView.view"
import transformDLight from "@dlightjs/transpiler-standalone"
import { RouteTest } from "./components/Router.view"
import JJ from "./aa.view"
// const code = `
// import { View } from "@dlightjs/dlight"
// import { button, div, SubView } from "@dlightjs/types"

// class TestView extends View {
//   tabKey = 1
//   b = function() {
//     console.log(this.tabKey)
//   }
//   Body() {
//     _(this.b)
//   }
// }
// `

// console.log(transformDLight(code))

// console.log(renderToText(BenchmarkView))
// render("app", BenchmarkView)
render("app", TestView)

// console.time("0")
// const a = () => {
//   for (const i of [...Array(10000).keys()]) {
//     const j = 1
//   }
// }
// a()
// console.timeEnd("0")

// const b = []
// console.time("0")
// for (const i of [...Array(10000).keys()]) {
//   b.push(() => {
//     const j = 1
//   })
// }
// b.forEach(n => n())
// console.timeEnd("0")
