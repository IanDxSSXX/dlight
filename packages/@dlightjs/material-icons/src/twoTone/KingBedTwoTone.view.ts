import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class KingBedTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 12h16v3H4z\" opacity=\".3\"/><path d=\"M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2zm-7-3h5v3h-5V7zM6 7h5v3H6V7zm14 8H4v-3h16v3z\"/>")
      .name("KingBedTwoTone")
  }
}

export default KingBedTwoTone as any as Typed<DLightIconType>
