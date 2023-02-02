import {View} from "@dlightjs/dlight"

export class TaskCard extends View {
  @Prop task
  @Prop deleteTask
  @Prop toggleBox
  didMount() {
    console.log(`[didAppear] Loaded task named ${this.task.name}, it is${this.task.finished?"":" not"} finished.`)
  }
  didUnmount() {
    console.log(`[didUnMount] Unmount task named ${this.task.name}, it is${this.task.finished?"":" not"} finished.`)
  }
  handleChange = e => {
    if (e.target.checked !== this.task.finished) {
      this.toggleBox(e.target.checked, this.task)
    }
  }
  spanStyle = {margin:"0 5px", textDecoration:this.task.finished ? "line-through" : "none"}
  buttonStyle = {padding: "5px"}

  Body=(
    <>
      <div>
        <input type={"checkbox"} checked={this.task.finished} onchange={this.handleChange} />
      </div>
      <span style={this.spanStyle}>{this.task.name}</span>
      <button onclick={()=>this.deleteTask(this.task)} style={this.buttonStyle}>delete</button>
    </>
  )
}
