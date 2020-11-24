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

  filterResults = () => {
    const sortString = this.state.search;
    const employeesArr2 = this.state.employeesArr.slice(0);
    console.log(employeesArr2);
    const sortedEmployees = employeesArr2.filter(names => sortString === "" || names.includes(sortString) )
    console.log(sortedEmployees);
    // get state.search
    // filter employee array where last name starts with current state.search
  }

  sortById = () => {
    const sorted = this.state.employeesArr.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  };

  sortByName = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  sortByRole = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.role > b.role ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  sortByDepartment = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.department > b.department ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  sortByPhone = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.phone > b.phone ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  sortByEmail = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.email > b.email ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  sortByHireDate = () => {
    const sorted = this.state.employeesArr.sort((a, b) => a.hireDate > b.hireDate ? 1 : -1);
    this.setState({ ...this.state, employeesArr: sorted })
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    // Look up logic & syntax for this
    this.setState({ [name]: value })
    // call filterResults
    this.filterResults()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1><img src={tardis} alt="TARDIS" className="titleImage" />
          Employee Directory
          <img src={tardis} alt="TARDIS" className="titleImage" /></h1>
          {/* TARDIS image from https://webstockreview.net/explore/tardis-clipart-transparent-background/ */}
        </div>
        <div className="row formRow">
          <CreateForm search={this.state.search} handleInputChange={this.handleInputChange} />
        </div>
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
            <TableData key={this.state.employeesArr.id} employeesArr={this.state.employeesArr} />
        </table>

      </div>
    )
  }
}

export default App;
