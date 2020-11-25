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
    this.setState({ [name]: value })
    this.filterResults()
  }

  // Filter method from data in input field
  filterResults = () => {
    const sortString = this.state.search;
    const employeesArr2 = this.state.employeesArr.slice(0);
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
  sortById = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "id") : this.descendingSort(this.state.employeesArr, "id")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  };

  sortByName = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "lastName") : this.descendingSort(this.state.employeesArr, "lastName")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  sortByRole = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "role") : this.descendingSort(this.state.employeesArr, "role")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  sortByDepartment = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "department") : this.descendingSort(this.state.employeesArr, "department")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  sortByPhone = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "phone") : this.descendingSort(this.state.employeesArr, "phone")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  sortByEmail = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "email") : this.descendingSort(this.state.employeesArr, "email")
    this.setState({ ...this.state, sortAscending: !this.state.sortAscending, employeesArr: sorted })
  }

  sortByHireDate = () => {
    const sorted = (this.state.sortAscending) ? this.ascendingSort(this.state.employeesArr, "hireDate") : this.descendingSort(this.state.employeesArr, "hireDate")
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
                <span onClick={this.sortById}>ID</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByName}>Name</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByRole}>Role</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByDepartment}>Department</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByPhone}>Phone</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByEmail}>Email</span>
              </th>
              <th className="tableHeader">
                <span onClick={this.sortByHireDate}>Date of Hire</span>
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
