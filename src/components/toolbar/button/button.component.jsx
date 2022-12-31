import { Component }from "react" 


class Button extends Component {


  render() {
    const {handler,prompt} = this.props;
    console.log(handler);
    return (
      <div className="button" >
        <button onClick={handler}>{prompt}</button>
      </div>
    )
  }

}

export default Button ;