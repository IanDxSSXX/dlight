// ~> App.view.js
import DLight, { View } from "@dlightjs/dlight"
import AnswerButton from "./AnswerButton.view"
class App extends View {
  canCome = true

  onAnswerNo() {
    this.canCome = false
  }

  onAnswerYes() {
    this.canCome = true
  }

  Body() {
    p("Are you happy?")
    AnswerButton()
      .onYes(this.onAnswerYes.bind(this))
      .onNo(this.onAnswerNo.bind(this))
    p(`${this.canCome ? "😀" : "😥"}`)
      ._fontSize("50px")
  }
}

export default App

// ~> AnswerButton.view.js
class AnswerButton extends View {
  @Prop onYes
  @Prop onNo

  Body() {
    button("yes")
      .onclick(this.onYes)
    button("NO")
      .onclick(this.onNo)
  }
}

export default AnswerButton
