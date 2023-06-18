import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MoneySharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 16h5V8h-5v8zm2-6h1v4h-1v-4zm-8 6h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z\"/>")
      .name("MoneySharp")
  }
}

export default MoneySharp as any as Typed<DLightIconType>
