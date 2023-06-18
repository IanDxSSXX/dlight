import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class DriveFileMoveRtlTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m11.17 8-2-2H4v12h16V8h-8.83zM16 14h-4v3l-4-4 4-4v3h4v2z\" opacity=\".3\"/><path d=\"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-1-4-4 4-4v3h4v2h-4v3z\"/>")
      .name("DriveFileMoveRtlTwoTone")
  }
}

export default DriveFileMoveRtlTwoTone as any as Typed<DLightIconType>
