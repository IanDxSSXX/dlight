import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class RemoveModeratorSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 11.09V5l-8-3-5.22 1.96 12.09 12.09c.72-1.53 1.13-3.22 1.13-4.96zM2.81 2.81 1.39 4.22 4 6.83v4.26c0 5.05 3.41 9.76 8 10.91 1.72-.43 3.28-1.36 4.55-2.62l3.23 3.23 1.41-1.41L2.81 2.81z\"/>")
      .name("RemoveModeratorSharp")
  }
}

export default RemoveModeratorSharp as any as Typed<DLightIconType>
