import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Icon6FtApartRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zm-.35 4.92-1.79 1.79c-.32.32-.86.1-.86-.35v-.8L5 15v.79c0 .45-.54.67-.85.35l-1.79-1.79c-.2-.2-.2-.51 0-.71l1.79-1.79a.5.5 0 0 1 .85.36v.8L19 13v-.79c0-.45.54-.67.85-.35l1.79 1.79c.2.19.2.51.01.7zM10 18.5c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h1.5c.28 0 .5-.22.5-.5zm-1 2v.5H8v-.5h1zm8-1.5h-.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V19H15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5s-.22.5-.5.5zm-3-.5c0 .28-.22.5-.5.5h-1v.5h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h1.5c.28 0 .5.22.5.5z\"/>")
      .name("Icon6FtApartRound")
  }
}

export default Icon6FtApartRound as any as Typed<DLightIconType>
