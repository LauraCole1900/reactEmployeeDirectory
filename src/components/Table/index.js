import React from "react";
import "./style.css"

function TableData(props) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.lastName}</td>
        <td>{props.firstName}</td>
        <td>{props.role}</td>
        <td>{props.department}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.hireDate}</td>
      </tr>
    </>
  )
}

export default TableData;