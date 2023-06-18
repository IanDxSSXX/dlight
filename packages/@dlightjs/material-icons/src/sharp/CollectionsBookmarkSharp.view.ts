import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class CollectionsBookmarkSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-2 10-2.5-1.5L15 12V4h5v8z\"/>")
      .name("CollectionsBookmarkSharp")
  }
}

export default CollectionsBookmarkSharp as any as Typed<DLightIconType>
