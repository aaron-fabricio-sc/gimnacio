import React from "react";

class NotFound extends React.Component {
  handleClick = () => {
    alert("idiot");
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="title"
              name="title"
              onChange={this.handleChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default NotFound;
