import React, { Component } from "react";
import TableData from "./components/Table";
import employees from "./employees.json";
import './App.css';

class App extends Component {

  state = {
    employeesArr: employees
  }

  render() {
    return (
      <>
        <h1>Employee Directory</h1>
        <table>
          <tr>
            <td>
              <span onClick={() => this.state.sort(this.state.id)} className="sort">ID</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.lastName)} className="sort">Last Name</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.firstName)} className="sort">First Name</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.role)} className="sort">Role</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.department)} className="sort">Department</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.phone)} className="sort">Phone</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.email)} className="sort">Email</span>
            </td>
            <td>
              <span onClick={() => this.state.sort(this.state.hireDate)} className="sort">Date of Hire</span>
            </td>
          </tr>
          {this.state.employeesArr.map(employee => (
            <TableData key={employee.id} {...employee}
              sortTable={this.sortTable} />
          ))}
        </table>

      </>
    )
  }
}

export default App;
