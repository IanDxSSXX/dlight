import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class WebAssetOffRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17l-4-4zm12.95 18.61L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94l-.84-.84A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01zM15.17 18l-10-10H4v10h11.17z\"/>")
      .name("WebAssetOffRound")
  }
}

export default WebAssetOffRound as any as Typed<DLightIconType>
