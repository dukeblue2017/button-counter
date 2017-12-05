import React from 'react';
import { connect } from 'react-redux';

const Counter = function() {
  return (<div>0</div>)
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter);