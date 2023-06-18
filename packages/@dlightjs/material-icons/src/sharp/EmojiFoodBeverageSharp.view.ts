import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class EmojiFoodBeverageSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 19h18v2H2zM20 3H9v2.4L11 7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3z\"/>")
      .name("EmojiFoodBeverageSharp")
  }
}

export default EmojiFoodBeverageSharp as any as Typed<DLightIconType>
