import { constant, update } from "lodash";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFloppyDisk, faWarning} from '@fortawesome/free-solid-svg-icons';
import {faMagicWandSparkles} from '@fortawesome/free-solid-svg-icons';

const Game = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [gameName, setGameName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [price, setPrice] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    setGameName(props.game.gameName);
    setDeveloper(props.game.developer);
    setPrice(props.game.price);
    setReleaseDate(props.game.releaseDate);
  }, []);

  const saveGame = () => {
    setEditMode(false);
    const updatedGame = {
      gameName: gameName,
      developer: developer,
      price: price,
      releaseDate: releaseDate,
      id: props.game.id,
      image: props.game.image,
    };
    props.updateGame(updatedGame);
  };

  return (
    <div className="card">
      <img src={props.game.image} alt="Our Game" className="card-img=top mx-auto" />
      {!editMode && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{props.game.gameName}</li>
          <li className="list-group-item text-center">{props.game.developer}</li>
          <li className="list-group-item text-center">{props.game.price}</li>
          <li className="list-group-item text-center">{props.game.releaseDate}</li>
          <button type="button" className="btn btn-danger" onClick={() => props.removeGame(props.game)}>
            Delete Game <FontAwesomeIcon icon={faWarning} />
          </button>
          <button type="button" className="btn btn-warning" onClick={() => setEditMode(true)}>
            Edit Game <FontAwesomeIcon icon={faMagicWandSparkles} />
          </button>
        </ul>
      )}
      {editMode && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <input
              type="text"
              className="form-control"
              value={gameName}
              onChange={(e) => setGameName(e.currentTarget.value)}
            />
            <input
              type="text"
              className="form-control"
              value={developer}
              onChange={(e) => setDeveloper(e.currentTarget.value)}
            />
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
            />
            <input
              type="text"
              className="form-control"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.currentTarget.value)}
            />
          </li>
          <button type="button" className="btn btn-danger" onClick={() => props.removeGame(props.game)}>
            Delete Game
          </button>
          <li className="list-group-item text-center">
            <button type="button" className="btn btn-secondary" onClick={saveGame}>
              Save   <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Game;
