import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './AddGame.css'

const AddGame = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [gameName, setGameName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [price, setEmail] = useState("");
  const [releaseDate, setGradYear] = useState("");
  const doWork = () => {
    const newGame = {
      id: nanoid(),
      gameName: gameName,
      developer: developer,
      price: price,
      releaseDate: parseInt(releaseDate),
      image: URL.createObjectURL(selectedFile),
    };
    props.addGame(newGame);
  };
  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="row my-5" id="AddGame">
      <h3>AddGame</h3>
      <div className="col-md-2">
        <label htmlFor="txtGameName" className="form-label">
          Game Name
        </label>
        <input
          type="text"
          id="txtGameName"
          placeholder="Game Name"
          className="form-control"
          onChange={(event) => setGameName(event.currentTarget.value)}
          value={gameName}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtDeveloper" className="form-label">
          Developer
        </label>
        <input
          type="text"
          id="txtDeveloper"
          placeholder="Developer"
          className="form-control"
          onChange={(event) => setDeveloper(event.currentTarget.value)}
          value={developer}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtPrice" className="form-label">
          Price
        </label>
        <input
          type="Email"
          id="txtPrice"
          placeholder="$0.00"
          className="form-control"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={price}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtReleaseDate" className="form-label">
          Release Date
        </label>
        <input
          type="text"
          id="txtReleaseDate"
          placeholder="2024"
          className="form-control"
          onChange={(event) => setGradYear(event.currentTarget.value)}
          value={releaseDate}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="fileUpload" className="form-label">
          Game Image
        </label>
        <input type="file" id="fileUpload" className="form-control" onChange={imageUpdate} />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-success btn-lg" id="btnAdd" onClick={doWork}>
          Add Game  <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default AddGame;
