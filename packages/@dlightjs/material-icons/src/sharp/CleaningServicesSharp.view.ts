import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class CleaningServicesSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M15 11V1H9v10H3v12h18V11h-6zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14v8z\"/>")
      .name("CleaningServicesSharp")
  }
}

export default CleaningServicesSharp as any as Typed<DLightIconType>
