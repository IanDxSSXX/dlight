import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class OpacityTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.24 9.65 12 5.27 7.76 9.6C6.62 10.73 6.01 12 6 14h12c-.01-2-.62-3.23-1.76-4.35z\" opacity=\".3\"/><path d=\"M17.66 8 12 2.35 6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"/>")
      .name("OpacityTwoTone")
  }
}

export default OpacityTwoTone as any as Typed<DLightIconType>
