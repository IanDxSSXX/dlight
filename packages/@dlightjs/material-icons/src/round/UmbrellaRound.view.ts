import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class UmbrellaRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m17.12 6.28-2.62.64L13 5.77V3.4c0-.26.22-.48.5-.48.23 0 .43.16.49.36.11.42.5.72.95.72.55 0 1-.45 1-1 0-.1-.02-.2-.05-.3-.3-.98-1.26-1.7-2.39-1.7C12.12 1 11 2.07 11 3.4v2.37L9.5 6.92l-2.62-.64a.505.505 0 0 0-.6.64l4.77 14.39c.15.46.55.69.95.69s.8-.23.95-.69l4.77-14.39a.505.505 0 0 0-.6-.64zM11 14.8 9.03 8.86l.92.23.76-.58.29-.22v6.51zm2 0V8.29l.28.22.76.58.92-.23L13 14.8z\"/>")
      .name("UmbrellaRound")
  }
}

export default UmbrellaRound as any as Typed<DLightIconType>
