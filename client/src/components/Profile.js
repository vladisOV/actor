import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { auth } = this.props;
    return <div>Profile : {auth.username}</div>;
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Profile);
