import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './AddStudent.css'

const AddStudent = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [email, setEmail] = useState("");
  const doWork = () => {
    const newStudent = {
      id: nanoid(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      gradYear: parseInt(gradYear),
      image: URL.createObjectURL(selectedFile),
    };
    props.addStudent(newStudent);
  };
  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="row my-5" id="AddStudent">
      <h3>AddStudent</h3>
      <div className="col-md-2">
        <label htmlFor="txtFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          id="txtFirstName"
          placeholder="First Name"
          className="form-control"
          onChange={(event) => setFirstName(event.currentTarget.value)}
          value={firstName}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="txtLastName"
          placeholder="Last Name"
          className="form-control"
          onChange={(event) => setLastName(event.currentTarget.value)}
          value={lastName}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtEmail" className="form-label">
          Email Name
        </label>
        <input
          type="Email"
          id="txtEmail"
          placeholder="Email Address"
          className="form-control"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtGradYear" className="form-label">
          Graduation
        </label>
        <input
          type="text"
          id="txtGradYear"
          placeholder="2024"
          className="form-control"
          onChange={(event) => setGradYear(event.currentTarget.value)}
          value={gradYear}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="fileUpload" className="form-label">
          Student Image
        </label>
        <input type="file" id="fileUpload" className="form-control" onChange={imageUpdate} />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-success btn-lg" id="btnAdd" onClick={doWork}>
          Add Student  <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
