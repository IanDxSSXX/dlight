import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MergeRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12a.996.996 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a.996.996 0 1 1-1.41-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88a.996.996 0 0 1-1.41 0z\"/>")
      .name("MergeRound")
  }
}

export default MergeRound as any as Typed<DLightIconType>
