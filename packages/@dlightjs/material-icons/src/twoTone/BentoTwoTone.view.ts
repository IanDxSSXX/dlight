import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class BentoTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 17h8V7H4v10zm4-6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm6 2.5h6v4h-6v-4zm6-6v4h-6V7h6z\" opacity=\".3\"/><path d=\"M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 6h-6V7h6v4zM4 7h8v10H4V7zm10 10v-4h6v4h-6zm-4.5-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z\"/>")
      .name("BentoTwoTone")
  }
}

export default BentoTwoTone as any as Typed<DLightIconType>
