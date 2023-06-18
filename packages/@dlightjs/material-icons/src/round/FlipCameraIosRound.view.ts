import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class FlipCameraIosRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6.33 12.7c-.52.19-1.08.3-1.67.3-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4 .46 0 .91-.08 1.32-.23a.498.498 0 1 1 .35.93zm2.83-2.2L14 13h2c0-2.21-1.79-4-4-4-.46 0-.91.08-1.32.23a.498.498 0 1 1-.35-.93c.52-.19 1.08-.3 1.67-.3 2.76 0 5 2.24 5 5h2l-2.5 2.5z\"/>")
      .name("FlipCameraIosRound")
  }
}

export default FlipCameraIosRound as any as Typed<DLightIconType>
