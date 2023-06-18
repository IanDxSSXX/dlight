import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class EnhancedEncryptionSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19A4.995 4.995 0 0 0 7 6v2H4v14h16V8zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z\"/>")
      .name("EnhancedEncryptionSharp")
  }
}

export default EnhancedEncryptionSharp as any as Typed<DLightIconType>
