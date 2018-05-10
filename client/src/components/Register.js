import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { register } from "../actions";

class Register extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;

    const className = `validate ${error && touched ? "invalid" : ""}`;
    const { name } = field.input;
    return (
      <div className="input-field col s12">
        <input id={name} className={className} type="text" {...field.input} />
        <label htmlFor={name}>{field.label}</label>
      </div>
    );
  }

  onSubmit = values => {
    console.log(values);
    const { username, password, email } = values;
    this.props.register({
      username,
      password,
      email
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row register-form">
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
              <Field label="Email" name="email" component={this.renderField} />
            </div>
            <div className="row">
              <Field
                label="Пароль"
                name="password"
                component={this.renderField}
              />
            </div>
            <div className="row">
              <Field
                label="Повторите пароль"
                name="password_rep"
                component={this.renderField}
              />
            </div>
            <center>
              <div className="row">
                <button type="submit" className="waves-effect waves-light btn">
                  Зарегаться
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

  if (!values.email) {
    errors.email = "Введите пароль!";
  }

  if (!values.password_rep) {
    errors.password = "Повторите пароль!";
  }

  if (values.password_rep !== values.password) {
    errors.password_rep = "Пароли не совпадают!";
    errors.password = "Пароли не совпадают!";
  }

  console.log(errors);
  return errors;
}

function mapStateToProps({ auth }) {
  return { auth };
}

Register = connect(mapStateToProps, { register })(Register);

export default reduxForm({ validate, form: "RegisterForm" })(Register);
