import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MicExternalOnRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M9.22 7H4.78C4.3 6.47 4 5.77 4 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .77-.3 1.47-.78 2zm7.02-4.99C18.32 2.13 20 4.08 20 6.16V21c0 .55-.45 1-1 1s-1-.45-1-1V6.09c0-.96-.64-1.86-1.58-2.05A2.01 2.01 0 0 0 14 6v11.84c0 2.08-1.68 4.03-3.76 4.15C7.92 22.13 6 20.29 6 18h-.55a.5.5 0 0 1-.5-.45L4.11 9.1c-.06-.59.4-1.1.99-1.1h3.8c.59 0 1.05.51 1 1.1l-.85 8.45c-.03.26-.25.45-.5.45H8a2.01 2.01 0 0 0 2.42 1.96c.94-.19 1.58-1.09 1.58-2.05V6c0-2.29 1.92-4.13 4.24-3.99z\"/>")
      .name("MicExternalOnRound")
  }
}

export default MicExternalOnRound as any as Typed<DLightIconType>
