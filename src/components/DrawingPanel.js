import React from 'react'
import Pixel from './Pixel'
import ColorPicker from './ColorPicker'
import colors from '../DrawingVariables'
import { base } from '../base'

class DrawingPanel extends React.Component {
  panelPixelSize = 10 // size of each panel pixel in real pixels
  panelSize = 50 // size of drawing panel

  constructor() {
    super()
    this.state = {
      activeColor: colors[4],
      pixels: Array(this.panelSize).fill(Array(this.panelSize).fill(colors[0])) // 2D array with colors
    }
  }

  handleClick = (i, j) => {
    const pixels = JSON.parse(JSON.stringify(this.state.pixels))
    pixels[i][j] = this.state.activeColor
    this.setState({ pixels })
  }

  updateColor = (color) => {
    let newColor = this.state.activeColor
    newColor = color
    this.setState({ activeColor: newColor })
  }

  createPixel = (i, j) => {
    const newPixel = (
      <Pixel
        key={`${i}, ${j}`}
        Color={this.state.pixels[i][j]}
        Size={this.panelPixelSize}
        handleClick = {() => this.handleClick(i, j)}
      />
    )
    return newPixel
  }

  prepareDrawing = () => {
    return (
      <table>
        <tbody>
          {this.state.pixels.map((row, i) =>
            <tr key={i}>
              {row.map((col, j) =>
                <td key={j}>
                  {this.createPixel(i, j)}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  componentWillMount = () => {
    this.ref = base.syncState('pixels/', {
      context: this,
      state: 'pixels'
    })
  }

  componentWillUnmount = () => {
    base.removeBinding(this.ref)
  }

  render() {
    return (
      <div className="panelContainer">
        <ColorPicker 
          colorOptions={colors}
          updateColor={this.updateColor}
        />
        <br /><br />
        {this.prepareDrawing()}
      </div>
    )
  }
}

export default DrawingPanel
