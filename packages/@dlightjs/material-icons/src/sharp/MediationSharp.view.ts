import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MediationSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 13h-5.06A8.974 8.974 0 0 1 8 20.05 3.005 3.005 0 0 1 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14A6.969 6.969 0 0 0 10.91 13h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3a2.99 2.99 0 0 1 2.99 2.95A8.974 8.974 0 0 1 12.93 11H18V8l4 4-4 4v-3z\"/>")
      .name("MediationSharp")
  }
}

export default MediationSharp as any as Typed<DLightIconType>
