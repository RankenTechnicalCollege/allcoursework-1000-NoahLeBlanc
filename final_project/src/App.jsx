import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid';
import './index.css'
import AddStudent from './AddStudent';

function App() {
  const [allStudents, setAllStudents] = useState(null);


const students = [{
  
  id: nanoid(),
  firstName: "Isak",
  lastName: "Poles",
  email: "ipoles0@cnn.com",
  image: "public/student1.jpg"
  }, {
  id: nanoid(),
  firstName: "Kizzie",
  lastName: "Jellico",
  email: "kjellico1@home.pl",
  image: "student2.jpg"

  }, {
  id: nanoid(),
  firstName: "Pepillo",
  lastName: "Cleverley",
  email: "pcleverley2@nbcnews.com",
  image: "student3.jpg"
  }, {
  id: nanoid(),
  firstName: "Jayne",
  lastName: "Flacknell",
  email: "jflacknell3@tumblr.com",
  image: "student4.jpg"
  }, {
  id: nanoid(),
  firstName: "Louella",
  lastName: "Sherreard",
  email: "lsherreard4@nba.com",
  image: "student5.jpg"
  }, {
  id: nanoid(),
  firstName: "Meggie",
  lastName: "McGahy",
  email: "mmcgahy5@ftc.gov",
  image: "student6.jpg"
  }, {
  id: nanoid(),
  firstName: "Aida",
  lastName: "Yuill",
  email: "ayuill6@cpanel.net",
  image: "student7.jpg"
  }, {
  id: nanoid(),
  firstName: "Butch",
  lastName: "Shave",
  email: "bshave7@wired.com",
  image: "student8.jpg"
  }, {
  id: nanoid(),
  firstName: "Jilly",
  lastName: "Borghese",
  email: "jborghese8@blinklist.com",
  image: "student9.jpg"
  }, {
  id: nanoid(),
  firstName: "Reuben",
  lastName: "Rickasse",
  email: "rrickasse9@craigslist.org",
  image: "student10.jpg"
}];

const addStudent = (newStudent) => {
  const updatedStudents = [...allStudents, newStudent]
  saveStudents(updatedStudents);
};

  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) =>(
        <div className='col-lg-2' key={students.id}>
          <div className='card'>
            <img src={student.image} alt='Our Student' />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{student.firstName}</li>
              <li className='list-group-item'>{student.lastName}</li>
              <li className='list-group-item'>{student.email}</li>
            </ul>
          </div>

        </div>)
)}
      </div>
      {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>}
      <AddStudent addStudent = {addStudent}/>

    </div>

  )
}

export default App
