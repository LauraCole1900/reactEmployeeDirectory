import React, { Component } from "react";
import TableData from "./components/Table";
import employees from "./employees.json";
import tardis from "./assets/tardis-clipart.png"
import './App.css';

class App extends Component {

  state = {
    employeesArr: employees,
    sortAscending: true
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
        <table>
          <thead>
            <tr>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.id)}>ID</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.lastName)}>Name</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.role)}>Role</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.department)}>Department</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.phone)}>Phone</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.email)}>Email</span>
              </th>
              <th className="tableHeader">
                <span onClick={() => this.state.sort(this.state.hireDate)}>Date of Hire</span>
              </th>
            </tr>
          </thead>
          {this.state.employeesArr.map(employee => (
            <TableData key={employee.id} {...employee}
              sortTable={this.sortTable} />
          ))}
        </table>

      </div>
    )
  }
}

export default App;
