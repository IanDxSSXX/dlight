import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ScoreboardSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17.5 13.5H16v-3h1.5v3zM22 4h-5V2h-2v2H9V2H7v2H2v16h20V4zM9.5 12.5h-3v1h3V15H5v-3.5h3v-1H5V9h4.5v3.5zm3.25 5.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 9v6h-4.5V9H19z\"/>")
      .name("ScoreboardSharp")
  }
}

export default ScoreboardSharp as any as Typed<DLightIconType>
