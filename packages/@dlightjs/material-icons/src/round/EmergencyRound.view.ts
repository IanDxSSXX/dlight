import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class EmergencyRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m20.29 8.37-1-1.73a1.01 1.01 0 0 0-1.37-.37L14 8.54V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.54L6.07 6.27a.993.993 0 0 0-1.36.36l-1 1.73c-.28.48-.12 1.1.36 1.37L8 12l-3.93 2.27c-.48.28-.64.89-.37 1.37l1 1.73c.28.48.89.64 1.37.37L10 15.46V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4.54l3.93 2.27c.48.28 1.09.11 1.37-.37l1-1.73c.28-.48.11-1.09-.37-1.37L16 12l3.93-2.27c.48-.27.64-.89.36-1.36z\"/>")
      .name("EmergencyRound")
  }
}

export default EmergencyRound as any as Typed<DLightIconType>
