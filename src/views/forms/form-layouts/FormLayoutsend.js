import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import HorizontalFormIcons from "./HorizontalFormIconsend"

class FormLayoutsend extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Add End Device"
          breadCrumbParent="End Device"
          breadCrumbActive="Add End Device"
        />
        <Row>
          <Col lg="12" md="12">
            <HorizontalFormIcons />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default FormLayoutsend
