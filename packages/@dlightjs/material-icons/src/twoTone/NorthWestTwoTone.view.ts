import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class NorthWestTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z\"/>")
      .name("NorthWestTwoTone")
  }
}

export default NorthWestTwoTone as any as Typed<DLightIconType>
