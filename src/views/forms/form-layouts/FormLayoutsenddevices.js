import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import AggridTable from "./../../tables/aggrid/Aggrid4enddevices"

class FormLayoutsenddevices extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="End Devices"
          breadCrumbParent="End Device"
          breadCrumbActive="End Devices"
        />
        <Row>
          <Col lg="12" md="12">
            <AggridTable />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default FormLayoutsenddevices
