import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class RemoveRoadRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1zm7-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm9.79-4.29a.996.996 0 0 0-1.41 0L19 17.09l-1.38-1.38a.996.996 0 1 0-1.41 1.41l1.38 1.38-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 19.91l1.38 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.38 1.38-1.38a.996.996 0 0 0 0-1.41z\"/>")
      .name("RemoveRoadRound")
  }
}

export default RemoveRoadRound as any as Typed<DLightIconType>
