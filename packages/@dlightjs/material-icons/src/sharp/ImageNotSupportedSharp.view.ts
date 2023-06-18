import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ImageNotSupportedSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m21.9 21.9-8.49-8.49L3 3l-.9-.9L.69 3.51 3 5.83V21h15.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H21v15.17z\"/>")
      .name("ImageNotSupportedSharp")
  }
}

export default ImageNotSupportedSharp as any as Typed<DLightIconType>
