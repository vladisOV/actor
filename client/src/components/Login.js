import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions";
import "../css/Login.css";

class Login extends Component {
  componentWillReceiveProps() {
    console.log(this.props.auth);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `validate ${touched && error ? "invalid" : ""}`;
    const { name } = field.input;
    return (
      <div className="input-field col s12">
        <input id={name} className={className} type="text" {...field.input} />
        <label htmlFor={name}>{field.label}</label>
      </div>
    );
  }

  onSubmit = values => {
    this.props.login(values);
  };

  render() {
    if (this.props.auth) {
      this.props.history.push("/dashboard");
    }
    const { handleSubmit } = this.props;
    return (
      <div className="row login-form">
        <center>
          <form
            className="col s4 offset-s4 "
            onSubmit={handleSubmit(this.onSubmit)}
          >
            <div className="row">
              <Field
                label="Имя пользователя"
                name="username"
                component={this.renderField}
              />
            </div>
            <div className="row">
              <Field
                label="Пароль"
                name="password"
                component={this.renderField}
              />
            </div>
            <center>
              <div className="row">
                <button type="submit" className="waves-effect waves-light btn">
                  Войти
                </button>
              </div>
            </center>
          </form>
        </center>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Введите имя пользователя!";
  }

  if (!values.password) {
    errors.password = "Введите пароль!";
  }

  return errors;
}

function mapStateToProps({ auth }) {
  return { auth };
}

Login = connect(mapStateToProps, { login })(Login);

export default reduxForm({ validate, form: "LoginForm" })(Login);
