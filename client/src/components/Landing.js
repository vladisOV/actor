import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Акты</h1>
        хз че тут писать
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
