import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ReportOffSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 7h2v2.33l7.2 7.2.8-.8V8.27L15.73 3H8.27l-.8.8L11 7.33zM2.41 1.58 1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM11 12.99l.01.01H11v-.01zm1 4.31c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3c0 .72-.58 1.3-1.3 1.3z\"/>")
      .name("ReportOffSharp")
  }
}

export default ReportOffSharp as any as Typed<DLightIconType>
