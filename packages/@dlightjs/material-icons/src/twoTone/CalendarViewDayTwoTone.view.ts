import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class CalendarViewDayTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z\"/><path d=\"M5 12h14v1H5z\" opacity=\".3\"/>")
      .name("CalendarViewDayTwoTone")
  }
}

export default CalendarViewDayTwoTone as any as Typed<DLightIconType>
