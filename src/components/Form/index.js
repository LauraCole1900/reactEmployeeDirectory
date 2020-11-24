import React from "react";
import "./style.css";

function CreateForm(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <input className="" placeholder="Search by Last Name" type="text" name="search" value={props.search} onChange={props.handleInputChange} />
        </div>
      </div>
    </>
  )
}

export default CreateForm;