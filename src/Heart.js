import { Component } from "react";
import heart1 from "./heart1.png";
import heart2 from "./heart2.png"

export class Heart extends Component {
  
      state = {
      text: "LIKE US!",
      image: heart1
    }
  

  updateHeart() {
    this.setState({text: "Thank you! We love you, too!", image: heart2})
  }

  render() {
    return(
      <div>
        <div className="container">
        <h3>{this.state.text}</h3>
        </div>
        <div className="container">
        <img src={this.state.image} alt="heart" width="120px" onClick={() => this.updateHeart()}/>
      </div>
      </div>
    )
  }
}