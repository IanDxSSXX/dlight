import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class VignetteTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 19h18V5H3v14zm9-13c4.42 0 8 2.69 8 6s-3.58 6-8 6-8-2.69-8-6 3.58-6 8-6z\" opacity=\".3\"/><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-9-1c4.42 0 8-2.69 8-6s-3.58-6-8-6-8 2.69-8 6 3.58 6 8 6zm0-10c3.25 0 6 1.83 6 4s-2.75 4-6 4-6-1.83-6-4 2.75-4 6-4z\"/>")
      .name("VignetteTwoTone")
  }
}

export default VignetteTwoTone as any as Typed<DLightIconType>
