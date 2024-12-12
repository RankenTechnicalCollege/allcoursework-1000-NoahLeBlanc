import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import "./index.css";
import AddStudent from "./component/AddStudent";
import _, { update } from "lodash";
import Student from "./component/Student";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './component/App.css'

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState("");
  const [gradYear, setGradYear] = useState("");

  useEffect(() => {
    if (localStorage) {
      const studentLocalStorage = JSON.parse(localStorage.getItem("students"));

      if (studentLocalStorage) {
        saveStudents(studentLocalStorage);
      } else {
        saveStudents(students);
      }
    }
  }, []);

  const students = [
    {
      id: nanoid(),
      firstName: "Isak",
      lastName: "Poles",
      email: "ipoles0@cnn.com",
      image: "public/student1.jpg",
      gradYear: 2024,
    },
    {
      id: nanoid(),
      firstName: "Kizzie",
      lastName: "Jellico",
      email: "kjellico1@home.pl",
      image: "student2.jpg",
      gradYear: 2024,
    },
    {
      id: nanoid(),
      firstName: "Pepillo",
      lastName: "Cleverley",
      email: "pcleverley2@nbcnews.com",
      image: "student3.jpg",
      gradYear: 2024,
    },
    {
      id: nanoid(),
      firstName: "Jayne",
      lastName: "Flacknell",
      email: "jflacknell3@tumblr.com",
      image: "student4.jpg",
      gradYear: 2024,
    },
    {
      id: nanoid(),
      firstName: "Louella",
      lastName: "Sherreard",
      email: "lsherreard4@nba.com",
      image: "student5.jpg",
      gradYear: 2026,
    },
    {
      id: nanoid(),
      firstName: "Meggie",
      lastName: "McGahy",
      email: "mmcgahy5@ftc.gov",
      image: "student6.jpg",
      gradYear: 2024,
    },
    {
      id: nanoid(),
      firstName: "Aida",
      lastName: "Yuill",
      email: "ayuill6@cpanel.net",
      image: "student7.jpg",
      gradYear: 2026,
    },
    {
      id: nanoid(),
      firstName: "Butch",
      lastName: "Shave",
      email: "bshave7@wired.com",
      image: "student8.jpg",
      gradYear: 2025,
    },
    {
      id: nanoid(),
      firstName: "Jilly",
      lastName: "Borghese",
      email: "jborghese8@blinklist.com",
      image: "student9.jpg",
      gradYear: 2025,
    },
    {
      id: nanoid(),
      firstName: "Reuben",
      lastName: "Rickasse",
      email: "rrickasse9@craigslist.org",
      image: "student10.jpg",
      gradYear: 2024,
    },
  ];
  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if (localStorage) {
      localStorage.setItem("students", JSON.stringify(students));
      console.log("Saved to local storage");
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  };

  const removeStudent = (studentToDelete) => {
    //console.table(studentToDelete);
    const updatedStudentArray = allStudents.filter((student) => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  };

  const updateStudent = (updatedStudent) => {
    //console.table(updatedStudent)
    const updatedStudentArray = allStudents.map((student) =>
      student.id === updatedStudent.id ? { ...student, ...updatedStudent } : student
    );
    saveStudents(updatedStudentArray);
  };

  const searchStudents = () => {
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(" ");
    }

    if (gradYear) {
      keywordsArray.push(gradYear.toString());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allStudents.filter((student) => {
        for (const word of keywordsArray) {
          if (
            student.firstName.toLowerCase().includes(word) ||
            student.lastName.toLowerCase().includes(word) ||
            student.gradYear === parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allStudents);
    }
  };

  return (
    <div className="container">
      <div className="row" id="allStudents">
        <h3>Current Students</h3>
        {searchResults &&
          searchResults.map((student) => (
            <div className="col-lg-2" key={student.id}>
              <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
            </div>
          ))}
      </div>
      {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>*/}
      {<AddStudent addStudent={addStudent} />}
      <div className="row mt-4" id="searchStudents">
        <h3>Search Students</h3>
        <div className="col-md-4">
          <label htmlFor="txtKeywords">Search by First or Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search First or Last Name"
            onChange={(e) => setKeyWords(e.currentTarget.value)}
            value={keywords}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={gradYear} onChange={(e) => setGradYear(e.currentTarget.value)}>
            <option value="">Select Year</option>
            {_(allStudents)
              .map((student) => student.gradYear)
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
          <button type="button" className="btn btn-lg btn-primary" onClick={searchStudents}>
            Search Students  <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
