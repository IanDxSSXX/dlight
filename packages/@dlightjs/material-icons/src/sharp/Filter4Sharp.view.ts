import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Filter4Sharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z\"/>")
      .name("Filter4Sharp")
  }
}

export default Filter4Sharp as any as Typed<DLightIconType>
