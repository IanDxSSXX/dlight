import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ArtTrackSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zM12 7v10H2V7h10zm-1.5 8-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z\"/>")
      .name("ArtTrackSharp")
  }
}

export default ArtTrackSharp as any as Typed<DLightIconType>
