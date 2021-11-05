import React from "react"
import {
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import { AgGridReact } from "ag-grid-react"
import { ContextLayout } from "../../../utility/context/Layout"
import { ChevronDown } from "react-feather"
import axios from "axios"

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"

import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"

/*function LinkComponent(props: ICellRendererParams) {
  return (
    <a href={"https://yourwebsite/entity/detail?id=" + props.value}>
      {props.value}
    </a>
  );
}*/

class AggridTable extends React.Component {
  
  state = {
    rowData: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true
    },
    columnDefs: [
      {
        headerName: "Data",
        field: "last_value",
        width: 225,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      },
      {
        headerName: "RSSI",
        field: "rssi",
        filter: true,
        width: 150
      },
      /*{
        headerName: "End Device Name",
        field: "name",
        cellRenderer: function(params) {
          var link = "http://localhost:3000/EndDevice/EndDeviceDetail/" + params.data.id;
          var returnvalue = '<a href=link target="_blank" rel="noopener">' + params.value +'</a>';
          console.log(returnvalue);
          return returnvalue
          //return '<a href={{link}} target="_blank" rel="noopener">' + params.value +'</a>'
        },
        filter: true,
        width: 300,
        pinned: window.innerWidth > 992 ? "left" : false
      },*/
      {
        headerName: "End Device Name",
        field: "name",
        filter: true,
        width: 300,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRenderer: (params) => 
          `<a href="/EndDevice/EndDeviceDetail/${params.data.id}" >${params.value}</a>`
          //return '<a href={{link}} target="_blank" rel="noopener">' + params.value +'</a>'  
      },
      {
        headerName: "SNR",
        field: "snr",
        filter: true,
        width: 150
      },
      {
        headerName: "Communication Status",
        field: "status",
        filter: true,
        width: 300
      },
      /*{
        headerName: "Device EUI",
        field: "dev_eui",
        cellRenderer: "childMessageRenderer",
        cellRendererParams: {
          clicked: function(field) {
            alert(`${field} was clicked`);
          },
        },
        filter: true,
        width: 225
      }*/
    ]
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(response => {
      let rowData = response.data
      console.log(rowData)
      JSON.stringify(rowData)
      this.setState({ rowData })
    })
  }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages()
    })
  }

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        currenPageSize: val,
        getPageSize: val
      })
    }
  }

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="End Devices"
          breadCrumbParent="End Device"
          breadCrumbActive="End Devices"
        />
        <Card className="overflow-hidden agGrid-card">
          <CardBody className="py-0">
            {this.state.rowData === null ? null : (
              <div className="ag-theme-material w-100 my-2 ag-grid-table">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-1">
                    <UncontrolledDropdown className="p-1 ag-dropdown">
                      <DropdownToggle tag="div">
                        {this.gridApi
                          ? this.state.currenPageSize
                          : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                        {this.state.rowData.length -
                          this.state.currenPageSize * this.state.getPageSize >
                        0
                          ? this.state.currenPageSize * this.state.getPageSize
                          : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(134)}
                        >
                          134
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-1">
                    <div className="table-input mr-1">
                      <Input
                        placeholder="search..."
                        onChange={e => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                    <div className="export-btn">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export as CSV
                      </Button.Ripple>
                    </div>
                  </div>
                </div>
                <ContextLayout.Consumer>
                  {context => (
                    <AgGridReact
                      gridOptions={{}}
                      rowSelection="multiple"
                      defaultColDef={defaultColDef}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={this.onGridReady}
                      colResizeDefault={"shift"}
                      animateRows={true}
                      floatingFilter={true}
                      pagination={true}
                      paginationPageSize={this.state.paginationPageSize}
                      pivotPanelShow="always"
                      enableRtl={context.state.direction === "rtl"}
                    />
                  )}
                </ContextLayout.Consumer>
              </div>
            )}
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AggridTable
