import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class RepeatOnTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 18H7v3l-4-4 4-4v3h10v-4h2v6zm-2-9V7H7v4H5V5h12V2l4 4-4 4z\"/>")
      .name("RepeatOnTwoTone")
  }
}

export default RepeatOnTwoTone as any as Typed<DLightIconType>
