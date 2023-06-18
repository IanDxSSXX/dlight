import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Icon8mpSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5z\"/><path d=\"M3 3v18h18V3H3zm7 2.5h4.5v6H10v-6zm2.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17z\"/><path d=\"M11.5 9H13v1.5h-1.5z\"/>")
      .name("Icon8mpSharp")
  }
}

export default Icon8mpSharp as any as Typed<DLightIconType>
