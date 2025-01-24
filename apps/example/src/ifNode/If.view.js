import { View } from "@dlightjs/dlight"

@View
class If {
  isHappy = true

  changeMood() {
    this.isHappy = !this.isHappy
  }

  Body() {
    button("Change mood")
      .onClick(this.changeMood)
    if (this.isHappy) {
      div("I am happy!😆")
    } else {
      div("I am sad!🥲")
    }
  }
}

export default If
