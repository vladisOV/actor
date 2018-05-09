import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="left brand-logo" style={{ marginLeft: "10px" }}>
          Акты
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
