import React from 'react';
import Counter from './components/Counter.js'
import Button from './components/Button.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Button />
      </div>
    );
  }
}

export default App;
