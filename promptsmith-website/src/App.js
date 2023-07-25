import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import OnlineEditor from './component/OnlineEditor';
import Footer from './parameter/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import Forgetpassword from './component/Forgetpassword';
import Ai from './services/Ai';
import Iot from './services/Iot'
import Appdelopment from './services/Appdelopment'
import Webdevelopment from './services/Webdevelopment'
import Softwaredevelopment from './services/Softwaredevlopment'
import Digitalmarketing from './services/Digitalmarketing'
import Erpdevelopment from './services/Erpdevlopment'
import Uiux from "./services/Uiux";
import Ecommerce from './Industries/Ecommerce'
import Education from './Industries/Education'
import HealthCare from './Industries/HealthCare'
import RealEstate from './Industries/RealEstate'
import Travel from './Industries/Travel'
import PageNotFound from './component/PageNotFound';
import About from './promptsmith/About';
import Teams from './promptsmith/Teams';
import Contact from './promptsmith/Contact';
import Clients from './promptsmith/Clients';
import Careers from './promptsmith/Careers';
import Privacypolicy from './promptsmith/Privacypolicy';
import FirstPage from './promptsmith/FirstPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/editor' element={<OnlineEditor />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup-data' element={<Signup />} />
          <Route path="/forgot-password" element={<Forgetpassword />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/privacypolicy' element={<Privacypolicy />} />

          {/* services component  router pages */}
          <Route path="/services/ai/" element={<Ai />} />
          <Route path="/services/iot/" element={<Iot />} />
          <Route path="/services/appdevelopment/" element={<Appdelopment />} />
          <Route path="/services/webdevelopment/" element={<Webdevelopment />} />
          <Route path="/services/erpdevelopment/" element={<Erpdevelopment />} />
          <Route path="/services/uiux/" element={<Uiux />} />
          <Route path="/services/softwaredevelopment/" element={<Softwaredevelopment />} />
          <Route path="/services/digitalmarketing/" element={<Digitalmarketing />} />

          {/* Industries component router pages */}
          <Route path='/industries/softwaredevelopment/' element={<Softwaredevelopment/> } />
          <Route path='/industries/healthcare/' element={<HealthCare/> } />
          <Route path='/industries/education/' element={<Education/> } />
          <Route path='/industries/ecommerce/' element={<Ecommerce />} />
          <Route path='/industries/travel/' element={<Travel/> } />
          <Route path='/industries/realestate/' element={<RealEstate/> } />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
