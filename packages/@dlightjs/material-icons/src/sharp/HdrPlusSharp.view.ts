import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class HdrPlusSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15-.86-.01L12 19h-1.5l-.9-2H8.5v2H7v-6h5v4zm0-5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12v6zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5v3z\"/>")
      .name("HdrPlusSharp")
  }
}

export default HdrPlusSharp as any as Typed<DLightIconType>
