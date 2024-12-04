import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
function Middle() {
  //What is displayed to the Home page
  return (
    <>
    <div id="student_upcoming_events" className="container mt-4">
        <div className="row row-cols-2">
            <section className="col d-flex">
                <img src="images/r_logo.png" id="ranken_r" alt="Ranken R Logo" className="img-fluid" />
                <div>
                    <h3 className="text-ranken-red"><strong>Student Upcoming Events:</strong></h3>
                    <ul>
                    </ul>
                </div>
            </section>
            <section className="col">
                <h2>
                    Higher Education Emergency Relief Fund III
                    The American Rescue Plan
                </h2>
                <h3>
                    <a href="https://ranken.edu/cares-act/">
                        CARES Act and CRRSAA information
                    </a>
                </h3>
            </section>
        </div>
    </div>
    </>
  )
}

export default Middle
