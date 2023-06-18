import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SensorOccupiedSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm9.23-3.85 1.85-.77A12.056 12.056 0 0 0 16.62.92l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38zM8.15 2.77 7.38.92A12.089 12.089 0 0 0 .92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38zM2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85a10.117 10.117 0 0 1-5.38-5.38zm13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77a10.117 10.117 0 0 1-5.38 5.38z\"/>")
      .name("SensorOccupiedSharp")
  }
}

export default SensorOccupiedSharp as any as Typed<DLightIconType>
