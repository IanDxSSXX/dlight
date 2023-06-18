import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SyncLockRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 19c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h1.73A7.942 7.942 0 0 1 4 12c0-3.19 1.87-5.93 4.56-7.22.67-.31 1.44.18 1.44.92 0 .38-.22.72-.57.88C7.41 7.55 6 9.61 6 12c0 1.77.78 3.34 2 4.44V15c0-.55.45-1 1-1s1 .45 1 1v4zm5-15c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H19c.55 0 1-.45 1-1s-.45-1-1-1h-4zm5 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z\"/>")
      .name("SyncLockRound")
  }
}

export default SyncLockRound as any as Typed<DLightIconType>
