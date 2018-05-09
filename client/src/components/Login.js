import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Вход" name="title" component={this.renderField} />
        <Field
          label="Имя пользователя"
          name="username"
          component={this.renderField}
        />
        <Field label="Пароль" name="password" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "LoginForm" })(
  connect(null, { login })(Login)
);
