import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import employees from "../../employees.json";
import "./style.css";

function CreateForm() {
  // Iterate over props/employees object and pull department values into array
  const employeeObj = {data: employees};
  console.log(employeeObj);
  const deptNames = employeeObj.map;
  console.log(deptNames);
  // Iterate over deptNames array and filter duplicates
  // Create submenu named with remaining values

  // Iterate over props/employees object and pull role values into array
  const roleNames = employeeObj.map;
  console.log(roleNames);
  // Iterate over roleNames array and filter duplicates
  // Create submenu named with remaining values

  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Select filter criteria">
        <Dropdown.Item as="button">Department</Dropdown.Item><br />
        <Dropdown.Item as="button">Role</Dropdown.Item>
      </DropdownButton>
    </>
  )

  // New dropdown appears to select specific role or department
  // Choices pulled from array pulled from props?
  // onClick, filter by selected criteria
}

export default CreateForm;