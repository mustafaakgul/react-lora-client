import React from "react"
import { Link, NavLink } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import * as actions from '../store/actions/auth';

class LoginJWT extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      username: "admin",
      email: "demo@demo.com",
      password: "demodemo",
      remember: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*state = {
    email: "demo@demo.com",
    password: "demodemo",
    remember: false
  }*/

  /*handleLogin = e => {
    e.preventDefault()
    this.props.loginWithJWT(this.state)
  }
  <Form action="/" onSubmit={this.handleLogin}>*/

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    this.props.onAuth(event.target.username.value, event.target.password.value);
    //this.props.history.push("/"); 
  }

  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={(event) => this.handleSubmit(
                    event
                    )}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="username"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Username</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit" value="Submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
/*const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)*/

const WrappedLoginJWT = LoginJWT; 
const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (WrappedLoginJWT);