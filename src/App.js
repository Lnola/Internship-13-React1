import React, { Component } from "react";
import ColoredText from "./components/coloredText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfResults: [true, true, true],
      color: 'black'
    }
  }

  changeColors = (newColor, e) => {
    this.setState({ color: newColor });
  }

  changeStateOfResults = (label, e) => {
    let changedArray = [];

    this.state.stateOfResults.forEach((state, index) => {
      if (label - 1 === index)
        changedArray.push(!state);
      else
        changedArray.push(state);
    });

    this.setState({ stateOfResults: changedArray })
  }

  resetColorsButton = e=> {
    this.setState({color: "black"});
  }

  resetIndexesButton = e=> {
    this.setState({stateOfResults: [true,true,true]});
  }

  shouldTextBeBold = color => {
    if (this.state.color === color)
      return 'bold';
    return '';
  }

  shouldTextBeNormal = index => {
    if (this.state.stateOfResults[index - 1])
      return 'bold';
    return '';
  }

  render() {
    return (
      <>
        <h1>Colors</h1>
        <p style={{ fontWeight: this.shouldTextBeBold("red") }} onClick={e => this.changeColors('red', e)}>Red</p>
        <p style={{ fontWeight: this.shouldTextBeBold("blue") }} onClick={e => this.changeColors('blue', e)}>Blue</p>
        <p style={{ fontWeight: this.shouldTextBeBold("green") }} onClick={e => this.changeColors('green', e)}>Green</p>
        <button onClick={e=>this.resetColorsButton(e)}>Reset</button>

        <h1>Indexes</h1>
        <p style={{ fontWeight: this.shouldTextBeNormal(1) }} onClick={e => this.changeStateOfResults(1, e)}>1</p>
        <p style={{ fontWeight: this.shouldTextBeNormal(2) }} onClick={e => this.changeStateOfResults(2, e)}>2</p>
        <p style={{ fontWeight: this.shouldTextBeNormal(3) }} onClick={e => this.changeStateOfResults(3, e)}>3</p>
        <button onClick={e=>this.resetIndexesButton(e)}>Reset</button>

        <h1>Result</h1>
        <ColoredText color={this.state.color} label="1" isSelected={this.state.stateOfResults[0]} />
        <ColoredText color={this.state.color} label="2" isSelected={this.state.stateOfResults[1]} />
        <ColoredText color={this.state.color} label="3" isSelected={this.state.stateOfResults[2]} />
      </>
    );
  }
}

export default App;
