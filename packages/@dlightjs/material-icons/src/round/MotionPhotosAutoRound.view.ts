import DLight, { View } from "@dlightjs/dlight"
import { type Typed } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MotionPhotosAutoRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 9c.26.26.34.63.25.98a8.08 8.08 0 0 0 .1 4.38c.88 2.91 3.44 5.1 6.44 5.55 5.52.81 10.19-4.06 9.03-9.62-.65-3.13-3.23-5.61-6.37-6.16a8.169 8.169 0 0 0-3.46.13c-.35.09-.73 0-.98-.25-.56-.56-.28-1.49.47-1.69 1.47-.38 3.06-.44 4.7-.09 3.98.86 7.09 4.18 7.7 8.2 1.04 6.81-4.82 12.58-11.64 11.42-4.01-.69-7.26-3.86-8.04-7.85-.31-1.59-.24-3.12.12-4.53C2.52 8.72 3.45 8.45 4 9zm3-3.5C7 6.33 6.33 7 5.5 7S4 6.33 4 5.5 4.67 4 5.5 4 7 4.67 7 5.5zm5.03 3.49h-.07L10.8 12.3h2.39l-1.16-3.31zM12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-3.39-3.37 2.43-6.46c.15-.4.53-.67.96-.67s.82.27.97.67l2.43 6.46c.16.42-.15.87-.6.87-.27 0-.52-.17-.61-.43l-.56-1.61H10.4l-.57 1.62c-.09.26-.33.43-.61.43a.654.654 0 0 1-.61-.88z\"/>")
      .name("MotionPhotosAutoRound")
  }
}

export default MotionPhotosAutoRound as any as Typed<DLightIconType>
