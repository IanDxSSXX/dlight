import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class DevicesFoldTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m15 3-3 1.29v13.68l3-1.29z\" opacity=\".3\"/><path d=\"M20 3h-3c0-1.44-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 1.29L15 3v13.68l-3 1.29V4.29zM20 19h-5.33l1.12-.48c.73-.32 1.21-1.04 1.21-1.84V5h3v14zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z\"/>")
      .name("DevicesFoldTwoTone")
  }
}

export default DevicesFoldTwoTone as any as Typed<DLightIconType>
