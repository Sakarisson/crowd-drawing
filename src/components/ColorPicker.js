import React from 'react'

let counter = 9999

class ColorPicker extends React.Component {
  render() {
    return (
      <div className="colorPicker">
        {this.props.colorOptions.map((color) => 
          <ColorOption
            clickHandler={this.props.updateColor}
            color={color}
          />
        )}
      </div>
    )
  }
}

class ColorOption extends React.Component {
  render() {
    return (
      <button 
      className="square"
      key={counter++}
      onClick={() => this.props.clickHandler(this.props.color)}
      style={{
        backgroundColor: this.props.color
      }}
    />
    )
  }
}

export default ColorPicker
