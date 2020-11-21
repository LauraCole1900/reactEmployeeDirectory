import React, { Component } from "react";
import "./style.css"

class Table extends Component {
  state = {
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    phone: "",
    email: "",
    hireDate: ""
  }

  TableData() {
    return (
      <>
        <tr key={this.state.id}>
          <td>{this.state.lastName}</td>
          <td>{this.state.firstName}</td>
          <td>{this.state.role}</td>
          <td>{this.state.department}</td>
          <td>{this.state.phone}</td>
          <td>{this.state.email}</td>
          <td>{this.state.hireDate}</td>
        </tr>
      </>
    )
  }
}

export default Table;