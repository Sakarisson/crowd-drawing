import React from 'react'

class Pixel extends React.Component {
  render() {
    return (
      <div>
        <button className="square"
          onClick={this.props.handleClick}
          //onClick={() => console.log(this.props)}
          style={{
            "backgroundColor": this.props.Color,
            height: this.props.Size,
            width: this.props.Size
          }}>
        </button>
      </div>
    )
  }
}

export default Pixel
