import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button
} from "reactstrap"

import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Key, HardDrive, Edit2, Menu} from "react-feather"
import axios from "axios";

class HorizontalFormIcons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.value);
    //console.log(event.target.elements.endDeviceName.value);
    const name =  event.target.elements.endDeviceName.value;
    const description = event.target.elements.description.value;
    const activation_method = event.target.elements.activation_method.value;
    const last_value = event.target.elements.last_value.value;
    const rssi = event.target.elements.rssi.value;
    const snr = event.target.elements.snr.value;
    const status = event.target.elements.status.value;

    return axios.post("http://127.0.0.1:8000/api/", {
        name:name,
        description:description,
        activation_method:activation_method,
        last_value:last_value,
        rssi:rssi,
        snr:snr,
        status:status
    })
    .then(res => console.log(res))
    .catch(error => console.err(error));
    console.log("post area");
        
  
  }

  /*constructor(props) {
    super(props);
    this.state = this.initialState;
    this.bookChange = this.bookChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }

  initialState = {
    title:'', author:'', coverPhotoUrl:'', isbnNumber:'', price:'', language:''
  }*/
/*
  submitBook = event => {
    event.preventDefault();
    alert("sadsa");
    const book = {
        title: this.state.title,
        author: this.state.author,
        coverPhotoURL: this.state.coverPhotoURL,
        isbnNumber: this.state.isbnNumber,
        price: this.state.price,
        language: this.state.language,
        genre: this.state.genre
    };*/

  /*axios.post("http://localhost:8085/rest/enddevices", book)
      .then(response => {
          if(response.data != null){
              this.setState(this.initialState);
              alert("book saved");
          }
      });
  };*/

  /*bookChange = event => {
      this.setState({
          [event.target.name]:event.target.value
      });
  };*/

  render() {

    return (
      <Card>
        <CardHeader>
          <CardTitle>Add End Device</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={(event) => this.handleSubmit(
                    event
                    )}>
            
            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Device Name</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="endDeviceName"
                  id="endDeviceName"
                  placeholder="Device Name"
                />
                <div className="form-control-position">
                  <HardDrive size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Description</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                />
                <div className="form-control-position">
                  <Edit2 size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Device Type</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="deviceType"
                  id="deviceType"
                  placeholder="Device Type"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Activation Method</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="activation_method"
                  id="activation_method"
                  placeholder="Activation Method"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Last Value</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="last_value"
                  id="last_value"
                  placeholder="Last Value"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>RSSI</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="rssi"
                  id="rssi"
                  placeholder="RSSI"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>SNR</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="snr"
                  id="snr"
                  placeholder="SNR"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Status</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="status"
                  id="status"
                  placeholder="Status"
                />
                <div className="form-control-position">
                  <Menu size={15} />
                </div>
              </Col>
            </FormGroup> 

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Device EUI</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="dev_eui"
                  id="dev_eui"
                  placeholder="Device EUI"
                />
                <div className="form-control-position">
                  <Key size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Application EUI</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="app_eui"
                  id="app_eui"
                  placeholder="Application EUI"
                />
                <div className="form-control-position">
                  <Key size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Device Address</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="dev_add"
                  id="dev_add"
                  placeholder="Device Address"
                />
                <div className="form-control-position">
                  <Key size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Network Session Key</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="net_sess_key"
                  id="net_sess_key"
                  placeholder="Network Session Key"
                />
                <div className="form-control-position">
                  <Key size={15} />
                </div>
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="4">
                <span>Application Session Key</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="app_sess_key"
                  id="app_sess_key"
                  placeholder="Application Session Key"
                />
                <div className="form-control-position">
                  <Key size={15} />
                </div>
              </Col>
            </FormGroup>        

            <FormGroup row className="has-icon-left position-relative">
              <Col md={{ size: 8, offset: 4 }}>
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Remember Me"
                  defaultChecked={false}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md={{ size: 8, offset: 4 }}>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  value="Submit"
                  className="mr-1 mb-1"
                  /*onClick={
                    e => e.preventDefault()                 
                  }*/
                >
                  Submit
                </Button.Ripple>
                <Button.Ripple
                  outline
                  color="warning"
                  type="reset"
                  className="mb-1"
                >
                  Reset
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default HorizontalFormIcons
