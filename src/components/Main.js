import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


// export function createScript(url){
//   const body = document.getElementsByTagName('body');
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.async = true;
//   script.src = url;
//   // body.appendChild(script);
//   // return script;
// }
// export function sendMail(){
//   emailjs.init('2tZGa6hshAaxdxpOY')
//   const btn = document.getElementById("button");

// document.getElementById("myform").addEventListener("submit", function (event) {
//   event.preventDefault();

//   btn.value = "Sending...";

//   const serviceID = "service_y997r2a";
//   const templateID = "template_zqp34tq";

//   emailjs
//     .sendForm(serviceID, templateID, this)
//     .then(
//       () => {
//         btn.value = "Sent!";
//       },

//       err => {
//         btn.value = "Not Sent!";
//         alert(JSON.stringify(err));
//       }
//     )
//     // .then(document.getElementById("form").reset());
// });
// }

function Main() {

 

  return (
    <div>
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">

        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome To <span className="mobile-block">My Portfolio Website!</span></small>
            <h1 className="animated animated-text">
              <span className="mr-2">Hi!, I'm</span>
              <div className="animated-info">
                <span className="animated-item">Segun Aderinola</span>
                <span className="animated-item">A Fullstack Developer</span>
                <span className="animated-item">A NodeJS Developer</span>
                                
              </div>
            </h1>

            <p>I am a Fullstack developer with a passion for creating engaging and user-friendly web experiences.
            With numerous years of experience and strong understanding in Frontend and Backend Technologies such as HTML5, CSS3, JavaScript, jQuery, PHP, NodeJS, ExpressJS, TypeScript, Bootstrap, Tailwind, MongoDb, and MySQL. I am also experienced in responsive design, cross-browser compatibility, and accessibility standards. In addition to my technical skills, I am a team player with excellent communication and problem-solving abilities. I am always looking for new challenges and opportunities to grow and improve as a developer.</p>

            <div className="custom-btn-group mt-4">
              <a className="btn mr-lg-2 custom-btn" href="https://drive.google.com/file/d/1ahAgwDAmZoQk6jua1OnEe0FJcHfCTFWI/view?usp=share_link"
                target="_blank" rel="noopener noreferrer"><i className='fa fa-file'></i>View My Resume</a>

            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-12">
          <div className="about-image svg">
            <img src="https://res.cloudinary.com/deh3s35go/image/upload/v1678754405/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc_d8outg.gif" className="img-fluid" alt="svg" />
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section className="project py-5" id="project">
    <div className="container">

      <div className="row">
        <div className="col-lg-11 text-center mx-auto col-12">

          <div className="col-lg-8 mx-auto mb-5">
            <h2>Things I have developed over the years as a Fullstack Developer</h2>
          </div>

          <OwlCarousel className='owl-theme owl-carousel' loop items={1} margin={10} nav>
            <div className="item">
              <div className="project-info mb-4">
                <img
                  src="https://res.cloudinary.com/deh3s35go/image/upload/v1680993023/Screenshot_20230408_105220_gtr9ad.png"
                  className="img-fluid" alt="project" />
              </div>

              <h5 className="mb-4" style={{color:'rgb(53, 52, 52)'}}>eMarket Landing Page Design (CSS3, Bootstrap, HTML5)</h5>
              

              <div className="custom-btn-group mb-5">
                <a className="btn mr-lg-2 custom-btn" href="
                            https://emarket-landingpage.netlify.app/" target="_blank" rel="noopener noreferrer"><i
                    className='uil uil-file-alt'></i>Live Link</a>                    
              </div>
            </div>
            <div className="item">
              <div className="project-info mb-4">
                <img
                  src="https://ik.imagekit.io/segunjames/Screenshot_2023-05-23_012129.png?updatedAt=1684801480638"
                  className="img-fluid" alt="project" />
              </div>

              <h5 className="mb-4" style={{color:'rgb(53, 52, 52)'}}>Small Small Realtor Landing Page </h5>
              

              <div className="custom-btn-group mb-5">
                <a className="btn mr-lg-2 custom-btn" href="
                            https://smallsmall.netlify.app" target="_blank" rel="noopener noreferrer"><i
                    className='uil uil-file-alt'></i>Live Link</a>                    
              </div>
            </div>
            <div className="item">
              <div className="project-info mb-4">
                <img
                  src="https://ik.imagekit.io/segunjames/Screenshot_2023-05-24_224703.png?updatedAt=1684971795661"
                  className="img-fluid" alt="project" />
              </div>

              <h5 className="mb-4" style={{color:'rgb(53, 52, 52)'}}>Kuda Landing Page Redesign</h5>
              

              <div className="custom-btn-group mb-5">
                <a className="btn mr-lg-2 custom-btn" href="https://eloquent-licorice-80395c.netlify.app" target="_blank" rel="noopener noreferrer"><i
                    className='uil uil-file-alt'></i>Live Link</a>                    
              </div>
            </div>
            <div className="item">
              <div className="project-info mb-4">
                <img
                  src="https://res.cloudinary.com/deh3s35go/image/upload/v1682967774/Identity_and_Access_Management_System_rzz5ez.png"
                  className="img-fluid" alt="project" />
              </div>

              <h5 className="mb-4" style={{color:'rgb(53, 52, 52)'}}>Authentication and Verification API (Nodejs)</h5>
              

              <div className="custom-btn-group mb-5">
               
                    <a className="btn mr-lg-2 custom-btn" href="
                    https://github.com/segun-aderinola/authenticationAPI-nodejs-typescript" target="_blank" rel="noopener noreferrer"><i className='uil uil-github-alt'></i>GitHub Link</a>

              </div>
            </div>

            
            <div className="item">
              <div className="project-info  mb-5">
                <img src="https://res.cloudinary.com/deh3s35go/image/upload/v1681270692/Screenshot_20230412_043708_zlnqu4.png"
                  className="img-fluid" alt="project"/>
              </div>
              <h5 className="mb-4" style={{color:'rgb(53, 52, 52)'}}>Upload Image using Cloudinary (NodeJS, Cloudinary, ExpressJS)</h5>
              <div className="custom-btn-group mb-5">
                <a className="btn mr-lg-2 custom-btn" href="https://github.com/segun-aderinola/image_upload_nodejs-cloudinary-fromidable" target="_blank"
                  rel="noopener noreferrer"><i className='uil uil-github-alt'></i> Github Link </a>

              </div>
            </div>

          </OwlCarousel>

        </div>
      </div>
    </div>
  </section>

  
  <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
    <div className="container ">
      <div className="row">

        <div className="col-lg-12 col-12 mx-auto">
          <h2 className="mb-4">Experiences</h2>

          <div className="timeline">

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2023</span>
              </div>
              <div className="timeline-info">
                <h3><span>Backend Developer</span><br/><small>Xedla Pay, Nigeria</small></h3>
                <p>
                  Developed user authentication and authorizations api for Xedla Pay mobile application.
                </p>
                <p>Developed the dispute management api microservice.</p>
                <p>Implemented customer email notification system using nodemailer.</p>
                <p>Integrated chat features for disputes using socket.io</p>
                <p>Assisted in developing escrow transaction endpoint for Xedla pay.</p>
                <p>Provided API documentations for the endpoints I worked on using Postman.</p>                                             
                <p> Participated in each step of the product development process from ideation to development improvement for features.
                </p>
                
              
              </div>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2022</span>
              </div>
              <div className="timeline-info">
                <h3><span>Backend Developer</span><br/><small> DevyCron IT, Nigeria</small></h3>
                <p>
                  Developed and maintained backend systems for web applications using Node.js and Express.js
                </p>
                
                <p>Developed and Implemented user authentication and authorization system using JSON Web Tokens (JWT)</p>
                <p>Worked with MongoDB and MySQL databases, and implemented data caching using Redis.</p>
                <p>Designed and developed RESTful APIs and integrated third-party APIs </p>
                               
                <p>Developed a Hotel and Bar Management system using CodeIgniter framework and MySQL</p>
              
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2021</span>
              </div>
              <div className="timeline-info">
                <h3><span> IT/Technical Support</span><br/> <small> Nirsal Microfinance Bank, Nigeria </small></h3>
                <p>
                  Responded to staff requests for technical support.
                </p>
                <p>
                  Diagnosed and resolved hardware and software issues, such as printer problems, network connectivity issues, software installation errors, and more.
                </p>
                <p>
                  Configured and maintained computer systems, servers, and network
                  devices.
                </p>
                <p>
                  Collaborated with other IT teams to resolve complex technical issues.
                </p>
                <p>Assisted in providing technical training and support to end-users on software applications and systems.
                </p>
                <p>Maintained accurate records of technical support requests and solutions.</p>
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2020</span>
              </div>
              <div className="timeline-info">
                <h3><span> PHP Developer </span><br/><small> Bitsmart Technologies, Nigeria </small></h3>
                <p>
                  Building stable and maintainable codebases using PHP.
                </p>
                <p>Developed and maintained web applications using PHP and JavaScript</p>

                <p>Teamed up with creative and user experience teams to develop unique and engaging interfaces.</p>
                <p>Collaborated with other developers and designers to ensure that projects were completed on time and to a high standard</p>
                <p>Debugged and tested code to ensure that it was free from errors and bugs</p>

                <p>Implemented security measures to protect web applications from attacks like SQL Injection Testing, Hashing etc</p>
                               
                <p>Created user interfaces that were user-friendly and responsive</p>
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2019</span>
              </div>
              <div className="timeline-info">
                <h3>Web Developer<small>(Internship)</small> <br/><small>Softrays Institute of technologies, Nigeria</small></h3>
                  <p>Learnt the fundamentals of Web development with HTML and CSS</p>
                  <p>Cloned my University Portal using Bootstrap CSS framework</p>
                  <p>Learnt backend development with PHP and MySQL </p>
                  <p>Developed an e-Commerce website with both frontend using bootstrap and css3 and the backend implemented using PHP, and MySQL</p>
                  <p>Designed landing pages and Web User interfaces using HTML5 and CSS3 </p>                                
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>     
  </section>

  
  <section className="skills py-5 " id="skills">
    <div className="container">
      <h2 className="mx-auto mb-5 text-center"> My Skills</h2>
      <ul>
        <li>JavaScript (ES5)</li>
        <li>jQuery</li>                         
        <li>NodeJs</li>
        <li>PHP</li>
        <li>CodeIgniter</li>
        <li>ExpressJs</li>
        <li>Socket.io</li>
        <li>MongoDb</li>
        <li>MySQL</li>                  
        <li>Tailwind</li>
        <li>Bootstrap</li>                               
        <li>CSS3</li>
        <li>Version Control (Git, GitHub)</li>        
        <li>Algorithm & Data Structures</li>        
        <li>Microservices Applications</li>     
                    
      </ul>
    </div>
  </section>

  
  <section className="contact py-5" id="contact">
    <div className="container">
      <div className="row">

        <div className="col-lg-5 mr-lg-5 col-12">
          <div className="google-map w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.26930963933!2d3.2139195366012823!3d6.54822079674991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1671019653775!5m2!1sen!2sng"
              width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" title='frame'></iframe>
          </div>

          <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
            <div className="contact-info-item">
              <h3 className="mb-3 text-white">Say Hello!</h3>
              <p className="footer-text mb-0">+2349151886948, +2348108885919</p>
            </div>

            <ul className="social-links">
              <li><a target="_blank" href="https://www.github.com/segun-aderinola" rel='noreferrer'>
                <span className="fa fa-github"></span> </a> </li>
              <li><a target="_blank" href="https://api.whatsapp.com/send?phone=08108885919&text=Message from my Website" rel="noreferrer">
                <span className="fa fa-whatsapp"></span>
              </a> </li>
              <li><a target="_blank" href="mailto:aderinolasegun9@gmail.com?subject=Mail from My Website" rel="noreferrer">
                <span className="fa fa-envelope"></span>
              </a> </li>
              <li><a target="_blank" href="#">
                <span className="fa fa-linkedin"></span>
              </a> </li>

            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="contact-form">
            <h2 className="mb-4">Interested in working with me? Let's talk!</h2>

            <form id="myform">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <input type="text" className="form-control" placeholder="Your Name" name="from_name" id="from_name" />

                </div>

                <div className="col-lg-6 col-12">
                  <input type="email" className="form-control" name="from_email" placeholder="Email" id="from_email" />
                </div>

                <div className="col-12">
                  <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
                </div>

                <div className="ml-lg-auto col-lg-5 col-12">
                  <input type="submit" className="form-control submit-btn" onClick='sendMessage()' value="Send Message" />
                </div>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
  {/* {createScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js')} */}
  </div>
  )
}

export default Main