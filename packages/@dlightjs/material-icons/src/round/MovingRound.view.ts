import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MovingRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2.7 17.29c.39.39 1.02.39 1.41 0L8.7 12.7a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0L19.7 9.7l1.44 1.44a.5.5 0 0 0 .85-.35V6.5a.48.48 0 0 0-.49-.5h-4.29c-.45 0-.67.54-.35.85l1.44 1.44-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2.7 15.88c-.38.39-.38 1.03 0 1.41z\"/>")
      .name("MovingRound")
  }
}

export default MovingRound as any as Typed<DLightIconType>
