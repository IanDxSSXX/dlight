import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class NumbersTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z\"/>")
      .name("NumbersTwoTone")
  }
}

export default NumbersTwoTone as any as Typed<DLightIconType>
