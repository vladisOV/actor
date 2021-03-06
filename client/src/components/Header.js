import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <Link to="/register">Зарегаться</Link>
          </li>,
          <li key="2">
            <Link to="/login">Войти</Link>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Link to="/profile">Профиль</Link>
          </li>,
          <li key="2">
            <a href="/auth/logout">Выйти</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            style={{ marginLeft: "10px" }}
            className="left brand-logo"
            to={this.props.auth ? "/dashboard" : "/"}
          >
            Акты
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
