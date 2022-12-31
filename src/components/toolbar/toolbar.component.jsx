import { Component} from "react"
import Button from "./button/button.component"

class ToolBar extends Component {
  render() {
   return (<div>
     <Button handler = {()=>{alert("playing")}} prompt={"play something"}/>
     <p>hi</p>
     <Button handler = {()=>{alert("uploading")}} prompt={"upload image"}/>
   </div>)
  }
}

export default ToolBar ;