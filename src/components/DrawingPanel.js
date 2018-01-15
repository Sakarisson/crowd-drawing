import React, { Component } from 'react'
import Pixel from './Pixel'
import colors from '../DrawingVariables'

class DrawingPanel extends Component {
  panelPixelSize = 25 // size of each panel pixel in real pixels
  panelSize = 10 // size of drawing panel

  constructor() {
    super()
    this.state = {
      pixels: Array(this.panelSize).fill(Array(this.panelSize).fill(colors[2])) // 2D array with colors
    }
  }

  handleClick = (i, j) => {
    const pixels = JSON.parse(JSON.stringify(this.state.pixels))
    pixels[i][j] = colors[1]
    this.setState({ pixels })
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

  render() {
    this.prepareDrawing()
    return (
      <div className="panelContainer">
        {this.prepareDrawing()}
      </div>
    )
  }
}

export default DrawingPanel
