import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class DataThresholdingSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 3H3v18h18V3zM10.67 8.17l2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41 4.41-4.42zM5 16h1.72L5 17.72V16zm.84 3 3-3h1.83l-3 3H5.84zm3.96 0 3-3h1.62l-3 3H9.8zm3.73 0 3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z\"/>")
      .name("DataThresholdingSharp")
  }
}

export default DataThresholdingSharp as any as Typed<DLightIconType>
