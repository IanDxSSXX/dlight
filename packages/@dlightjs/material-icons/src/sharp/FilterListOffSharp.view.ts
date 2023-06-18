import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class FilterListOffSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41L14 16.83z\"/>")
      .name("FilterListOffSharp")
  }
}

export default FilterListOffSharp as any as Typed<DLightIconType>
