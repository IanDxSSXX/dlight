import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class VolunteerActivismRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2zm7-5.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25.65-.76 1.66-1.25 2.7-1.25C20.55 2 22 3.45 22 5.3c0 2.1-2.5 4.51-5.33 7.09a1 1 0 0 1-1.35 0C12.5 9.81 10 7.4 10 5.3M19.99 17h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51a.49.49 0 0 1-.3-.63c.09-.26.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2z\"/>")
      .name("VolunteerActivismRound")
  }
}

export default VolunteerActivismRound as any as Typed<DLightIconType>
