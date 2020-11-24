import React from "react";
import "./style.css"

function TableData(props) {
  return (
    <tbody>
    {props.employeesArr.map(employee => (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.lastName}, {employee.firstName}</td>
        <td>{employee.role}</td>
        <td>{employee.department}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.hireDate}</td>
      </tr>
    ))}
    </tbody>
  )
}

export default TableData;