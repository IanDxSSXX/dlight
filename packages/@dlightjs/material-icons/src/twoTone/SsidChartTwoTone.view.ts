import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SsidChartTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3v2.47zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4v-2z\"/>")
      .name("SsidChartTwoTone")
  }
}

export default SsidChartTwoTone as any as Typed<DLightIconType>
