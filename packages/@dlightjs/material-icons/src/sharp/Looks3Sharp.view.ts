import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Looks3Sharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 3H3.01v18H21V3zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01v10z\"/>")
      .name("Looks3Sharp")
  }
}

export default Looks3Sharp as any as Typed<DLightIconType>
