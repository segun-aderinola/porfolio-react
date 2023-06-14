// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import './assets/css/tooplate-style.css';
// import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


// export function AddLibrary(UrlOfLibrary){

//   const createScript = document.createElement('script'); 
//   createScript.async = true;
//   createScript.src = UrlOfLibrary;
//   document.appendChild(createScript);

// }

function App() {
  return (
   <div>      
      <Header />
      <Main />
      <Footer />    
   </div>      
  );
}

export default App;
