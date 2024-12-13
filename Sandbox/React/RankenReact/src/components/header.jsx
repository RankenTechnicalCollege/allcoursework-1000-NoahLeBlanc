import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
export function NavPrimary() {
    return(
    <>
    <a href="index.html"><img src="/public/images/logo.png" className='img-fluid' alt="Ranken Banner Logo" /></a>
    <nav className="border border-dark bg-ranken-red">
        <div className="container-fluid ">
            <ul className="nav navbar">
                
                {/*Add a Hamburger Button here*/}
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
export function NavSecondary(){
    return(
        <section className="border bg-secondary">
        <div className="container-fluid ">
            <ul className="nav navbar">
                <li className="nav-brand text-ranken-red bg-light p-1 rounded"><i>Inside Ranken</i>
                </li>
                <li className="nav-item"><a className="nav-link link-light" href="index.html#campus_resources">Campus Resources</a>
                </li>  
                <li className="nav-item"><a className="nav-link link-light" href="index.html#student_orientation">Student Orientation</a>
                </li>
                <li className="nav-item"><a className="nav-link link-light" href="index.html#calendar">Calendar</a>
                </li>
                <li className="nav-item"><a className="nav-link link-light" href="index.html#title_ix">Title IX</a>
                </li>
            </ul>
        </div>
    </section>
    )
}
export  function StudentEvents() { 
    return (
    <>
    <div className="container mt-4">
        <div className="row row-cols-2">
            <section className="col d-flex">
                <img src="/public/images/r_logo.png" id='ranken_r' alt="Ranken R Logo" className="img-fluid" />
                <div>
                    <h3 className="text-ranken-red"><strong>Student Upcoming Events:</strong></h3>
                    <ul>
                        {/*-------------------------Student Upcoming Events Go here:-------------------------*/} 
                    </ul>
                </div>
            </section>
            <section className="col">
                <h2>
                    Higher Education Emergency Relief Fund III
                    The American Rescue Plan
                </h2>
                <h3>
                    <a className='text-ranken-red' href="https://ranken.edu/cares-act/">
                        CARES Act and CRRSAA information
                    </a>
                </h3>
            </section>
        </div>
        </div>
    </>
    )
    }