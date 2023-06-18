import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class AutoStoriesRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18.15 1.35-4 4c-.1.1-.15.22-.15.36v8.17c0 .43.51.66.83.37l4-3.6a.48.48 0 0 0 .17-.37V1.71a.5.5 0 0 0-.85-.36zm4.32 3.85c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2-.33.16-.53.51-.53.88v12.08c0 .76.81 1.23 1.48.87C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.81.4 4.02 1.04.67.36 1.48-.11 1.48-.87V6.08c0-.37-.2-.72-.53-.88z\"/>")
      .name("AutoStoriesRound")
  }
}

export default AutoStoriesRound as any as Typed<DLightIconType>
