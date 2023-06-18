import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class BikeScooterTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 14h.74L8.82 5.56A2.009 2.009 0 0 0 6.87 4H3v2h3.87l1.42 6.25h-.01A6.008 6.008 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4zm9-6h-.82l-1.35-3.69A1.976 1.976 0 0 0 14.96 3H11v2h3.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5C24 10.2 21.8 8 19 8zm0 8c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3z\"/><path d=\"M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>")
      .name("BikeScooterTwoTone")
  }
}

export default BikeScooterTwoTone as any as Typed<DLightIconType>
