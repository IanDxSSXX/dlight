import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SignalCellular0BarTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z\"/>")
      .name("SignalCellular0BarTwoTone")
  }
}

export default SignalCellular0BarTwoTone as any as Typed<DLightIconType>
