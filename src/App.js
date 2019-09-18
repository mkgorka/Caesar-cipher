import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        ' Caeasar cipher is a type of shift cipher - each letter is replaced by a letter on a fixed number of positions down the alphabet. This method is named after Julius Caeasar, who used it for private correspondence.',
      shift: '',
      output: ''
    };
    this.handleDecodeSubmit = this.handleDecodeSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleShiftChange = this.handleShiftChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ input: event.target.value })
  }
  handleOutputChange(event) {
    this.setState({ output: event.target.value })
  }
  handleShiftChange(event) {
    this.setState({ shift: event.target.value })
  }
  handleSubmit(event) { //Encoding function
    event.preventDefault();


    let alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻaąbcćdeęfghijklłmnńoóprsśtuwyzźż0123456789";
    let input = this.state.input;
    let shift = this.state.shift;
    shift = (shift % alphabet.length)
    let output = "";

    for (let i = 0; i < input.length; i++) {

      let currentLetter = input[i];

      if (currentLetter === " ") {
        output += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      currentIndex = currentIndex + shift;


      let newLetter = alphabet[currentIndex];

      output += newLetter;

    }
    this.setState({
      output: output
    })

  }
  handleDecodeSubmit(event) { // Decoding function
    event.preventDefault();

    let alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻaąbcćdeęfghijklłmnńoóprsśtuwyzźż0123456789";
    let input = this.state.input;
    let shift = this.state.shift;
    shift = (shift % alphabet.length)
    let output = "";

    for (let i = 0; i < input.length; i++) {
      let currentLetter = input[i];
      if (currentLetter === " ") {
        output += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      currentIndex = currentIndex - shift;
      let newLetter = alphabet[currentIndex];

      output += newLetter;

    }
    this.setState({
      output: output
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Caeasar cipher encryption and decription tool</h3>
          <form>
            <textarea id="input" value={this.state.input} onChange={this.handleInputChange} className="textarea" />
            <h1> Shift: <input type="number" id="shift" onChange={this.handleShiftChange} /></h1>
            <button onClick={this.handleSubmit} className="button-primary">Encode</button>
            <button onClick={this.handleDecodeSubmit} className="button">Decode</button>
            <div className="result">
              <textarea value={this.state.output} onChange={this.handleOutputChange} className="textarea" id="output" />
            </div>
          </form>
        </header>
      </div>
    );
  };
}
export default App;