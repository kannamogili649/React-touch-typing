import { Component } from "react";
import "./App.css";

// Created an array containing combinations of asdfjkl; keys
const stringList = [
  "a l ; s d f j k",
  "ad al as da fa",
  "ads alf als ask dak",
  "alf; da;s fads fla;",
  "fl;ks fla;s skald sk;f",
];
let count = 0;

class App extends Component {
  state = {
    displayString: stringList[count],
    inputValue: "",
    isLevelCompleted: false,
  };

  // This will set the value of the input
  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // This function can be called when practice again button is clicked
  practiceAgain = () => {
    this.setState({ isLevelCompleted: false });
    count = 0;
    this.setState({ displayString: stringList[count] });
  };

  //This will check the entered input string with string that to be matched
  onKeyPress = () => {
    const { displayString, inputValue } = this.state;
    if (displayString === inputValue) {
      count = count + 1;
      if (count === 5) {
        this.setState({ isLevelCompleted: true });
      }
      this.setState({ displayString: stringList[count], inputValue: "" });
    }
  };

  // This will render when all the levels are completed
  renderResultOutput = () => {
    return (
      <div className="result-container">
        <div className="result-content-container">
          <h1 className="final-display-content">
            You are successfully completed the practice with ASDFJKL; keys
          </h1>
          <button
            onClick={this.practiceAgain}
            type="button"
            className="practice-again-btn"
          >
            Practice Again
          </button>
        </div>
      </div>
    );
  };

  // This will render during practicing of keys
  renderRunningLevel = () => {
    const { displayString, inputValue } = this.state;
    let level = count + 1;
    return (
      <div className="container">
        <h1 className="heading">Learn to Type Fast</h1>
        <p className="level-number">Level: {level}/5</p>
        <div className="string-container">
          <p className="string-content">{displayString}</p>
        </div>
        <div className="type-area">
          <input
            type="text"
            value={inputValue}
            placeholder="Type Here..."
            className="input-area"
            onChange={this.onChangeInput}
            onKeyUp={this.onKeyPress}
          />
        </div>
      </div>
    );
  };

  render() {
    const { isLevelCompleted } = this.state;
    return isLevelCompleted ? (
      <div>{this.renderResultOutput()}</div>
    ) : (
      <div>{this.renderRunningLevel()}</div>
    );
  }
}

export default App;
