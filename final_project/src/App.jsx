import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import "./index.css";
import AddGame from "./component/AddGame";
import _, { update } from "lodash";
import Game from "./component/Game";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './component/App.css'

function App() {
  const [allGames, setAllGames] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState("");
  const [releaseDate, setGradYear] = useState("");

  useEffect(() => {
    if (localStorage) {
      const gameLocalStorage = JSON.parse(localStorage.getItem("games"));

      if (gameLocalStorage) {
        saveGames(gameLocalStorage);
      } else {
        saveGames(games);
      }
    }
  }, []);

  const games = [
    {
      id: nanoid(),
      gameName: "Fallout 3",
      developer: "Bethesda Game Studios",
      price: "$9.99",
      image: "public/game1.jpg",
      releaseDate: 2008,
    },
    {
      id: nanoid(),
      gameName: "Skyrim",
      developer: "Bethesda Game Studios",
      price: "$39.99",
      image: "game2.jpg",
      releaseDate: 2016,
    },
    {
      id: nanoid(),
      gameName: "In Stars and Time",
      developer: "insertdisc5",
      price: "$19.99",
      image: "game3.jpg",
      releaseDate: 2023,
    },
    {
      id: nanoid(),
      gameName: "Risk Of Rain 2",
      developer: "Hopoo Games",
      price: "$8.24",
      image: "game4.jpg",
      releaseDate: 2020,
    },
    {
      id: nanoid(),
      gameName: "Apex Legends",
      developer: "Respawn",
      price: "FREE",
      image: "game5.jpg",
      releaseDate: 2020,
    },
    {
      id: nanoid(),
      gameName: "Call of Duty",
      developer: "Treyarch, Raven Software",
      price: "$69.99",
      image: "game6.jpg",
      releaseDate: 2022,
    },
    {
      id: nanoid(),
      gameName: "Terraria",
      developer: "Re-Logic",
      price: "$9.99",
      image: "game7.jpg",
      releaseDate: 2011,
    },
    {
      id: nanoid(),
      gameName: "SIGNALIS",
      developer: "rose-engine",
      price: "$19.99",
      image: "game8.jpg",
      releaseDate: 2022,
    },
    {
      id: nanoid(),
      gameName: "Caves Of Qud",
      developer: "Freehold Games",
      price: "$29.99",
      image: "game9.jpg",
      releaseDate: 2024,
    },
    {
      id: nanoid(),
      gameName: "Sid Meier's Civilization VI ",
      developer: "Rickasse",
      price: "$2.99",
      image: "game10.jpg",
      releaseDate: 2016,
    },
  ];
  const saveGames = (games) => {
    setAllGames(games);
    setSearchResults(games);
    if (localStorage) {
      localStorage.setItem("games", JSON.stringify(games));
      console.log("Saved to local storage");
    }
  };

  const addGame = (newGame) => {
    const updatedGames = [...allGames, newGame];
    saveGames(updatedGames);
  };

  const removeGame = (gameToDelete) => {
    //console.table(gameToDelete);
    const updatedGameArray = allGames.filter((game) => game.id !== gameToDelete.id);
    saveGames(updatedGameArray);
  };

  const updateGame = (updatedGame) => {
    //console.table(updatedGame)
    const updatedGameArray = allGames.map((game) =>
      game.id === updatedGame.id ? { ...game, ...updatedGame } : game
    );
    saveGames(updatedGameArray);
  };

  const searchGames = () => {
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(" ");
    }

    if (releaseDate) {
      keywordsArray.push(releaseDate.toString());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allGames.filter((game) => {
        for (const word of keywordsArray) {
          if (
            game.gameName.toLowerCase().includes(word) ||
            game.developer.toLowerCase().includes(word) ||
            game.releaseDate === parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allGames);
    }
  };

  return (
    <div className="container">
      <div className="row bg-steamLightBlue" id="allGames">
        <h3>Wishlist</h3>
        {searchResults &&
          searchResults.map((game) => (
            <div className="col-lg-2 bg-steamGreyBlue rounded px-2" key={game.id}>
              <Game game={game} removeGame={removeGame} updateGame={updateGame} />
            </div>
          ))}
      </div>
      {/*!allGames && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllGames(games)}>Save Game</button>*/}
      {<AddGame addGame={addGame} />}
      <div className="row mt-4" id="searchGames">
        <h3>Search Games</h3>
        <div className="col-md-4">
          <label htmlFor="txtKeywords">Search by Game Name or Developer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search First or Last Name"
            onChange={(e) => setKeyWords(e.currentTarget.value)}
            value={keywords}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={releaseDate} onChange={(e) => setGradYear(e.currentTarget.value)}>
            <option value="">Select Release Year</option>
            {_(allGames)
              .map((game) => game.releaseDate)
              .sort()
              .uniq()
              .map((year) => (
                <option key={year} value={year}>
                  {" "}
                  {year}
                </option>
              ))
              .value()}
          </select>
        </div>
        <div className="col-md">
          <button type="button" className="btn btn-lg btn-primary" onClick={searchGames}>
            Search Games  <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
