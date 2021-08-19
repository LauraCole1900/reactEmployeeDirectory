import React, { Component } from "react";
import TableData from "./components/Table";
import CreateForm from "./components/Form";
import employees from "./employees.json";
import tardis from "./assets/tardis-clipart.png"
import './App.css';

class App extends Component {

  state = {
    employeesArr: employees,
    search: "",
    sortAscending: true
  }

  // Data input from input form
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, function(){
      this.filterResults()
    })

  }

  // Filter method from data in input field
  filterResults = () => {
    const sortString = this.state.search;
    const employeesArr2 = this.state.employeesArr.slice(0);
    console.log(this.state.search)
    if (sortString.length > 2) {
      const sortedEmployees = employeesArr2.filter(employeeObj => {
        console.log(employeeObj.lastName.indexOf(sortString))
        return employeeObj.lastName.indexOf(sortString) > -1
      })
      console.log(sortedEmployees);
      // render sortedEmployees
      this.setState({...this.state, employeesArr: sortedEmployees})
    }
  }

  // Sort ascending
  ascendingSort = (arr, prop) => {
    return arr.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
  }

  // Sort descending
  descendingSort = (arr, prop) => {
    return arr.sort((a, b) => (b[prop] > a[prop]) ? 1 : -1);
  }

  // Sort by object properties
  sortBy = (prop) => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, prop) : this.descendingSort(this.state.employeesArr, prop)
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  // Render to page
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1><img src={tardis} alt="TARDIS" className="titleImage" />
          Employee Directory
          <img src={tardis} alt="TARDIS" className="titleImage" /></h1>
          {/* TARDIS image from https://webstockreview.net/explore/tardis-clipart-transparent-background/ */}
        </div>
        {/* Input form */}
        <div className="row formRow">
          <CreateForm search={this.state.search} handleInputChange={this.handleInputChange} />
        </div>
        {/* Table headers */}
        <table>
          <thead>
            <tr>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("id")}>ID</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("lastName")}>Name</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("role")}>Role</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("department")}>Department</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("phone")}>Phone</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("email")}>Email</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.sortBy("hireDate")}>Date of Hire</span>
              </th>
            </tr>
          </thead>
          {/* Table data */}
          <TableData employeesArr={this.state.employeesArr} />
        </table>

      </div>
    )
  }
}

export default App;
