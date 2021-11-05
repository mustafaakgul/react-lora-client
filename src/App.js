import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

const App = props => {
  return <Router />
}

export default App

/*
import './App.css';
import "antd/dist/antd.css"
import React, { Component } from 'react';
import BaseRouter from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import * as actions from './store/actions/auth';

import CustomLayout from "./containers/Layout";

import {connect} from "react-redux";

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);*/