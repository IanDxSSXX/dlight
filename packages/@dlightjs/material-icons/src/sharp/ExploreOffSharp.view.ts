import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ExploreOffSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18 6-2.91 6.26 5.25 5.25A9.91 9.91 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l5.25 5.25L18 6zM2.1 4.93l1.56 1.56A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l1.56 1.56 1.41-1.41L3.51 3.51 2.1 4.93zm6.81 6.81 3.35 3.35L6 18l2.91-6.26z\"/>")
      .name("ExploreOffSharp")
  }
}

export default ExploreOffSharp as any as Typed<DLightIconType>
