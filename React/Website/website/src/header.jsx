import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
function Header() {
  //What is displayed to the Home page
  return (
    <>
    <a href="index.html"><img src="images/logo.png" className='img-fluid' id='RankenBanner' alt="Ranken Banner Logo" /></a>
    <nav id="primary_nav" className="border border-dark bg-ranken-red">
        <div className="container-fluid ">
            <ul className="nav navbar">
                <button>HamburgerButton</button>
                <li className="nav-item"><a className="nav-link link-light" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link link-light" href="bookstore.html">Bookstore</a></li>
                <li className="nav-item"><a className="nav-link link-light" href="finances.html">Finances</a></li>
                <li className="nav-item"><a className="nav-link link-light" href="student_services.html">Student Services</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Header
