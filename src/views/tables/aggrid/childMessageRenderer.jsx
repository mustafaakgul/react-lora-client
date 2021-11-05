import React, { Component } from 'react';
/*
export default class ChildMessageRenderer extends Component {
  constructor(props) {
    super(props);

    this.invokeParentMethod = this.invokeParentMethod.bind(this);
  }

  invokeParentMethod() {
    this.props.context.componentParent.methodFromParent(
        `Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`
    );
    //alert(${this.props.node.rowIndex});
  }

  render() {
    return (
      <span>
        <button
          onClick={this.invokeParentMethod}
          className="btn btn-info"
        >
          Detail
        </button>
      </span>
      <button onClick={this.btnClickedHandler}>Click Me!</button>
    );
  }
}*/

export default class ChildMessageRenderer extends Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        
        <span>
        <button
          onClick={this.btnClickedHandler}
          className="btn btn-info"
        >
          Detail
        </button>
      </span>
      )
    }
  }