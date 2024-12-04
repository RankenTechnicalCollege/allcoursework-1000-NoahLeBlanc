import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //What is displayed to the Home page
  return (
    <>
    <header>
      <div id='bannerImage'>
        <img src='../images/logo.png' alt="Ranken Banner Image" />
      </div>
      <nav>
        <ul id='appNav'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Extra1</a></li>
          <li><a href="">Extra2</a></li>
        </ul>
      </nav>
    </header>
    <main>

    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
