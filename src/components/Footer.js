import React from 'react'
 
export function getYear(){
  return new Date().getFullYear();      
}
console.log(getYear());
function Footer() {
  return (
    <div>
    <footer className="footer py-5">
    <div className="container">
      <div className="row">

        <div className="col-lg-12 col-12">
          <p className="copyright-text text-center">Copyright &copy; <span id="currentYear">{getYear()}</span> Segun Aderinola
            . All rights reserved</p>

        </div>

      </div>
    </div>
  </footer>
  
    </div>

    
  )
}

export default Footer