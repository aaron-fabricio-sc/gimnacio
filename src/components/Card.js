import React from "react";
import "./styles/Card.css";
import CircleImage from "../images/circles.png";
class Card extends React.Component {
  /* background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); */
  render() {
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${CircleImage}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={this.props.img} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
