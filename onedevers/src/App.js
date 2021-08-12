import Navber from './Navber/Navber';
import './index.css';
import Heder from './Header/Heder';
import Features from './Features/Features';
import Mobile from './Features/Mobile';
import Web from './Features/Web';
import Team from './Features/Team';
import Footer from './Footer/Footer';
import Sendemail from './Features/Sendemail';
import DesktopApp from './Features/DesktopApp';
function App() {
  return (
    <div>
      <Navber/>
      <Heder/>
      <Features/>
      <Mobile/>
      <Web/>
      <DesktopApp/>
      <Sendemail/>
      <Team/>
      <Footer/>
    </div>
  )
};

export default App;
