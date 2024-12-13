import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './AddComponent.css'

const AddComponent = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [partName, setPartName] = useState("");
  const [componentType, setComponentType] = useState("");
  const [partID, setPartID] = useState("");
  const [generation, setGeneration] = useState("");
  const doWork = () => {
    const newStudent = {
      id: nanoid(),
      partName: partName,
      componentType: componentType,
      partID: partID,
      generation: parseInt(generation),
      image: URL.createObjectURL(selectedFile),
    };
    props.addComponent(newStudent);
  };
  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="row my-5" id="AddComponent">
      <h3>AddComponent</h3>
      <div className="col-md-2">
        <label htmlFor="txtPartName" className="form-label">
          Part Name
        </label>
        <input
          type="text"
          id="txtPartName"
          placeholder="First Name"
          className="form-control"
          onChange={(event) => setPartName(event.currentTarget.value)}
          value={partName}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtComponentType" className="form-label">
          Component Type
        </label>
        <input
          type="text"
          id="txtComponentType"
          placeholder="Last Name"
          className="form-control"
          onChange={(event) => setComponentType(event.currentTarget.value)}
          value={componentType}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtPartID" className="form-label">
          Part ID
        </label>
        <input
          type="Email"
          id="txtPartID"
          placeholder="Email Address"
          className="form-control"
          onChange={(event) => setPartID(event.currentTarget.value)}
          value={partID}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtGeneration" className="form-label">
          Generation
        </label>
        <input
          type="text"
          id="txtGeneration"
          placeholder="2024"
          className="form-control"
          onChange={(event) => setGeneration(event.currentTarget.value)}
          value={generation}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="fileUpload" className="form-label">
          Component Image
        </label>
        <input type="file" id="fileUpload" className="form-control" onChange={imageUpdate} />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-success btn-lg" id="btnAdd" onClick={doWork}>
          Add Component  <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default AddComponent;
