import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

class RegisterJWT extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      //confirmDirty: false,
      email: "",
      password: "",
      userName: "",
      confirm: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*state = {
    email: "",
    password: "",
    name: "",
    confirmPass: ""
  }*/

  /*handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      this.state.email,
      this.state.password,
      this.state.name
    )
          <Form action="/" onSubmit={this.handleRegister}>
  }*/

  handleSubmit = (event) => {
    event.preventDefault();
        //console.log(event.target.username.value);
        this.props.onAuth(event.target.userName.value, event.target.email.value, event.target.password.value, event.target.confirm.value);
        //this.props.history.push("/");
  }

  render() {
    return (
      <Form action="/" onSubmit={(event) => this.handleSubmit(
        event
        )}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            name="userName"
            placeholder="User Name"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
          <Label>Confirm Password</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/pages/login")
            }}
          >
            Login
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit" value="Submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
    )
  }
}
/*const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(RegisterJWT)*/

const WrappedRegisterJWT = RegisterJWT;
const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegisterJWT);