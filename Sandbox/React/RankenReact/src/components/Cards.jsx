import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/index.css'
export function UrgentMessages() {
  return (
    <>
    <section className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title pb-2">Urgent Messages</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <h5>How To:</h5>
                <p>
                    Receive Invoices, make Payments, enroll in a payment plan,
                    print 1098T tax forms, sign up for eRefunds and more ...
                </p>
                <ul>
                    <li>Log into your InsideRanken Account</li>
                    <li>Click on the Finances Tab</li>
                    <li>Click the red link, PAY ONLINE</li>
                    <li>This will take you to Cash net</li>
                    <li>Here you will be able to see your different options for eRefunds1 eBills, Payment plans, and 1098T tax forms</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}
export function Welcome() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Welcome!</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <p>
                    Welcome to Inside Ranken!
                    After login, use the navigation to gain access to not only your seated and online courses,
                    and also additional resources for you to be successful.
                </p>
            </div>
        </div>
      </section>
    </>
  )
}
export function Support() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Support</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <h4>Need Assistance?</h4>
                <ol>
                    <li>
                        To call a specific office on campus, go to Contact Us at the bottom of this webpage.
                    </li>
                    <li>
                        To contact a member of the Student Success Team or your Success Counselor, go to the Student Services tab (above),
                        then select the Student Success Department.
                    </li>
                    <li>
                        To contact the Ranken Help Desk, call <a className='text-ranken-red' href="tel:3142863693">314&nbsp;286&nbsp;3693</a>
                        or email <a className='text-ranken-red' href="mailto:helpdesk@ranken.edu">helpdesk@ranken.edu.</a>
                    </li>
                </ol>
                <h4>Login Issues?</h4>
                <p>
                    If you forgot your password, please go <a className='text-ranken-red' href="https://support.ranken.edu">here</a>
                    to change your password and unlock your account. If you have forgotten your login, please see support.
                </p>
                <h4>Check Your Ranken Email</h4>
                <p>
                    You can check your student email for any new updates or changes around the college <a className='text-ranken-red' href="https://outlook.office.com">Here</a>
                    The student email account is active up to 90 days after the graduation or withdrawal from school.
                    Our student’s Office account has Multi-Factor Authentication enabled. Please read the following instructions: Student - MFA User Guide
                </p>
                <h5><strong>WHAT IS MULTI-FACTOR AUTHENTICATION(MFA)?</strong></h5>
                <p>
                    Multi-Factor authentication (a.k.a. MFA)
                    is a method to help better secure email accounts and Office 365 access.
                    This additional security comes from having to Approve the sign-ins to your account using a mobile device.
                </p>
                <h5><strong>WHAT EMAIL CLIENTS ARE COMPATIBLE WITH OFFICE 365 MULTI-FACTOR AUTHENTICATION?</strong></h5>
                <p>
                    Below is a non-exhaustive list of email clients that are known to be compatible with Office 365 multi-factor authentication:
                </p>
                <ul>
                    <li>Outlook Web - https://outlook.office.com</li>
                    <li>Outlook 2019 - Windows or Mac</li>
                    <li>Outlook 365 - Windows/Mac</li>
                    <li>Outlook 2016 - Windows or Mac</li>
                    <li>Outlook App - Android or iOS</li>
                    <li>Native Mail App - iOS 11 or later</li>
                    <li>Mac Mail - Mac OS 10.14 or later</li>
                    <li>Thunderbird 77.0b1 and later</li>
                </ul>
                <p>If you need help, please contact <a className='text-ranken-red' href="mailto:helpdesk@ranken.edu">helpdesk</a>.</p>
            </div>
        </div>
      </section>
    </>
  )
}
export function StudentHandbook() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">2024-25 Student Handbook</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <p>
                    From the Office of Student Success:
                    All returning students are advised to thoroughly review the 2024-2025 Student Handbook to ensure they are aware of new and updated policies.
                    If you have questions or concerns, you may contact the Vice President for Student Success. 
                    Crystal Herron
                    Vice President for Student Success
                    <a className='text-ranken-red' href="tel:3142863627">314&nbsp;286&nbsp;3627</a>
                    <a className='text-ranken-red' href="mailto:caherron@ranken.edu">caherron@ranken.edu</a>
                </p>
            </div>
        </div>
      </section>
    </>
  )
}
export function TitleIX() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Title IX</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <p>
                    Sex discrimination and discrimination,
                    harassment or violence based on sex,
                    gender identity, or sexual orientation is against the law.
                    The College must ensure that no student suffers a deprivation of her or his access to educational opportunities
                    on the basis of sex. Click the links below for more information.
                </p>
                <a className='text-ranken-red' href="https://insideranken.org/ICS/icsfs/mm/title_ix_policy_rev072020-8-17-20.pdf?target=e5626b16-bbe2-4727-aed0-859925f9f0d1">
                    Link to Title IX
                </a> 
                <a className='text-ranken-red' href="https://insideranken.org/ICS/icsfs/mm/procedures_for_title_ix_sexual_harassment_-_8-19-20.pdf?target=a8448d94-99df-4007-9e86-8b106b1269f3">
                    Procedures for Title IX Sexual Harassment
                </a>
            </div>
        </div>
      </section>
    </>
  )
}
export function CampusResources() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Campus Resources</h2>
            <div className="card-text bg-light text-dark rounded p-1">
            <h5>Student Resources</h5>
            <ul>
                <li><a className='text-ranken-red' href="">Ranken Connections</a></li>
                <li><a className='text-ranken-red' href="">Ranken Student Email</a></li>
                <li><a className='text-ranken-red' href="">Everything Financial</a></li>
                <li><a className='text-ranken-red' href="">Graduation Flyer Saturday, May 10, 2025</a></li>
                <li><a className='text-ranken-red' href="">Financial Aid Entrance Counseling Guide</a></li>
                <li><a className='text-ranken-red' href="">Financial Aid Exit Counseling Guide</a></li>
            </ul>
            <h5>Support Services</h5>
            <ul>
                <li><a className='text-ranken-red' href="">Career Services</a></li>
                <li><a className='text-ranken-red' href="">Student Success Department</a></li>
                <li><a className='text-ranken-red' href="">Student Assistance Program</a></li>
            </ul>
            <h5>Financial Resources</h5>
            <p>
                Student Refunds: We will no longer post refunds at the business office.
                Check your student account for your refund status and be advised
                that if not picked up, the checks will be mailed the day after they are printed.
                Sign up for eRefund today!  Use the Finances tab to access account information.
            </p>
            <a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/BookmarkPortlet/ViewHandler.ashx?-ae8e-369fb1bb0612">Finances</a>
            </div>
        </div>
      </section>
    </>
  )
}
export function Calendar() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Calendar</h2>
            <div className="card-text bg-light text-dark rounded p-1">
            <ul>
                <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-bc4e-73e7f8fbb71e">Spring 2023-2024</a></li>
                <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-977b-6194fccb7d7b">Summer 2023-2024</a></li>
                <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-8719-6b7f45fed568">Fall 2024-2025</a></li>
                <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-af6f-4f478a7368c2">Spring 2024-2025</a></li>
                <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-b24d-e7fe5439ee95">Summer 2024-2025</a></li>
            </ul>
            </div>
        </div>
      </section>
    </>
  )
}
export function AroundTheCollege() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Around the College</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <h5>Register to Vote!</h5>
                <a className='text-ranken-red' href="https://ova.elections.il.gov/">Illinois Voter Registration</a>
                <a className='text-ranken-red' href="http://www.sos.mo.gov/elections/goVoteMissouri/register.aspx">Missouri Voter Registration</a>
                <h5>Ranken Surveys</h5>
                <a className='text-ranken-red' href="https://fs4.formsite.com/Ranken/u35v6dnsjj/index.html">Student Leader Survey</a>
                <a className='text-ranken-red' href="https://insideranken.org/ICS/icsfs/mm/fall__2024-25_survey_links_and_codes_for_insideranken.pdf?target=f1732614-8228-4d05-8610-3fa59790955f">Fall end of Course Survey Links</a>
            </div>
        </div>
      </section>
    </>
  )
}
export function RecentNotifications() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Recent Notifications</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <h5>No New Notifications</h5>
            </div>
        </div>
      </section>
    </>
  )
}
export function StudentOrientation() {
  return (
    <>
    <section  className="bg-ranken-red m-4 p-2 rounded">
        <div className="card-body text-light">
            <h2 className="card-title">Student Orientation</h2>
            <div className="card-text bg-light text-dark rounded p-1">
                <ul>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-99f8-8fabe87fc0e6">Campus Printing IR</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-91a1-8814fa40133d">Campus WiFi Information IR</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-a34f-725d105c06b4">Inside Ranken IR</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-98b8-19b5f0a9955d">Ranken ID - What Is It</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-85f9-507543c5c947">Walker Hall Internet Access IR</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-bb20-e18035e30b28">Accelerated BSAM</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-887e-558f047c3f77">Freedom from Paper</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-98d8-f234dbcc7580">STL-Student Ambassador Job</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-8db8-efe20631353d">WTZ-Student Ambassador Job</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-84a2-22ae24f3216c">WTZ-Student Ambassador Application</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-b359-4e522d169430">STL-Online Student Ambassador Application</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-85b3-f1a92138bb62">Student Success Center (SSC)</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-a2eb-28182c75eaba">Ranken Connection Instructions</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-b871-3493c171cb7c">Student Assistance Program</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-9438-0741a0e7c078">Safety Expectations</a></li>
                    <li><a className='text-ranken-red' href="https://insideranken.org/ICS/Portlets/ICS/Handoutportlet/viewhandler.ashx?handout_-bc6f-57728603310b">PETITION TO WAIVE THE 24HR MAXIMUM PER TERM</a></li>
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}

