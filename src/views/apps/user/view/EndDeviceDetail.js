import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button
} from "reactstrap"
import { Edit, Trash } from "react-feather"
import { Link } from "react-router-dom"
import "../../../../assets/scss/pages/users.scss"
import axios from "axios";

class UserView extends React.Component {

  state = {
    enddevice : {}
  }

  componentDidMount(){
      const enddeviceID = this.props.match.params.enddeviceID;
      axios.get(`http://127.0.0.1:8000/api/${enddeviceID}`)
      .then(res => {
          this.setState({
            enddevice:res.data
          });
          console.log(res.data);
      })
  }

  handleDelete(event) {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    this.props.history.push("/");
    this.forceUpdate();
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>End Device - {this.state.enddevice.name}</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  End Device Name
                                </div>
                                <div>{this.state.enddevice.name}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Added From
                                </div>
                                <div>Crystal Hamilton</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Activation Method
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.enddevice.activation_method}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>active</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Device Type
                                </div>
                                <div>admin</div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/app/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                    <Button.Ripple color="danger" outline onSubmit={this.handleDelete}>
                      <Trash size={15} />
                      <span className="align-middle ml-50" type="submit" value="Delete">Delete</span>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Data Package</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Last Value
                                </div>
                                <div>crystal</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  RSSI
                                </div>
                                <div>Crystal Hamilton</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  SNR
                                </div>
                                <div className="text-truncate">
                                  <span>crystalhamilton@gmail.com</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Description
                    </div>
                    <div> 28 January 1998</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Device EUI
                    </div>
                    <div>+65958951757</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Application EUI
                    </div>
                    <div className="text-truncate">
                      <span>https://rowboat.com/insititious/Crystal</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Device Address
                    </div>
                    <div className="text-truncate">
                      <span>English, French</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Net Session Key
                    </div>
                    <div className="text-truncate">
                      <span>Female</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      App Session Key
                    </div>
                    <div className="text-truncate">
                      <span>email, message, phone</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Created Date
                    </div>
                    <div className="text-truncate">
                      <span>email, message, phone</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}
export default UserView
