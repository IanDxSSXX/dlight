import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Looks6TwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 13h2v2h-2zm8-8H5v14h14V5zm-4 4h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4v2z\" opacity=\".3\"/><path d=\"M9 9v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7h-4a2 2 0 0 0-2 2zm4 4v2h-2v-2h2zm-8 8h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5z\"/>")
      .name("Looks6TwoTone")
  }
}

export default Looks6TwoTone as any as Typed<DLightIconType>
