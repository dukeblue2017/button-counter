import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions/index.js';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>INCREMENT</button>
        <button onClick={this.props.decrement}>DECREMENT</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(null, mapDispatchToProps)(Button);