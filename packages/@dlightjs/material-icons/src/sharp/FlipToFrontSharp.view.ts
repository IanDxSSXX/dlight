import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class FlipToFrontSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm12 12h2v-2h-2v2zm6-18H7v14h14V3zm-2 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2zm-4 0h2v-2H3v2z\"/>")
      .name("FlipToFrontSharp")
  }
}

export default FlipToFrontSharp as any as Typed<DLightIconType>
