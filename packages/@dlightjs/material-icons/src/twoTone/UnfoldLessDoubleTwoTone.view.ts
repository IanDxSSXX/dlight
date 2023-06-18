import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class UnfoldLessDoubleTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z\"/><path d=\"M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z\"/><path d=\"M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z\"/>")
      .name("UnfoldLessDoubleTwoTone")
  }
}

export default UnfoldLessDoubleTwoTone as any as Typed<DLightIconType>
