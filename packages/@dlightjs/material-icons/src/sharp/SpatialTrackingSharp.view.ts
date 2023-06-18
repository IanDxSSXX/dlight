import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SpatialTrackingSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"10\" cy=\"9\" r=\"4\"/><path d=\"M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z\"/><path d=\"m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z\"/>")
      .name("SpatialTrackingSharp")
  }
}

export default SpatialTrackingSharp as any as Typed<DLightIconType>
