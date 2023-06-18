import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Rotate90DegreesCcwTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7.35 9.24 3.69 12.9l3.65 3.66L11 12.9z\" opacity=\".3\"/><path d=\"M7.34 6.41.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zm0 10.15L3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66zm12.02-9.92A8.95 8.95 0 0 0 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 0 1 0 9.9 6.973 6.973 0 0 1-7.79 1.44l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 0 0 0-12.72z\"/>")
      .name("Rotate90DegreesCcwTwoTone")
  }
}

export default Rotate90DegreesCcwTwoTone as any as Typed<DLightIconType>
