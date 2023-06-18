import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SquareTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 5h14v14H5z\" opacity=\".3\"/><path d=\"M3 3v18h18V3H3zm16 16H5V5h14v14z\"/>")
      .name("SquareTwoTone")
  }
}

export default SquareTwoTone as any as Typed<DLightIconType>
