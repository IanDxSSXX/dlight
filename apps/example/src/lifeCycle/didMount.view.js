import { View } from "@dlightjs/dlight"

@View
class DidMount {
  name = "John"

  didMount() {
    this.name = "Cindy"
  }

  Body() {
    div(`hello ${this.name}!`)
  }
}

export default DidMount
