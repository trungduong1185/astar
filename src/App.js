import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/Menu';
import CountDown from './containers/countDown';
import Vision from './containers/Vision';
import Mentorships from './containers/Mentorship';
import Apply from './containers/Apply';
import Footer from './containers/footer';

import { menu } from './assets/data.json';
import What from './containers/What';
import Fee from './containers/Fee';
import About from './containers/About';
import ProgramTimeline from './containers/ProgramTimeline';
import FAQ from './containers/FAQ';
import Partners from './containers/partners';

function App() {
  return (
    <div className="sans-serif">
      <Menu />
      <div id={menu.top.id} />
      <CountDown />
      <About id={menu.about.id} />
      <ProgramTimeline id={menu.timeline.id} />
      
      <What id={menu.program.id} />
      <Mentorships id={menu.aiexpertnetwork.id} title="AI EXPERT NETWORK" />
      <Vision id={menu.transformation.id} />    
      <Fee id={menu.tuitionfee.id} />
     
      <FAQ id={menu.faq.id} />
      <Partners />
      {/* <Process /> */}
      <Apply />
     
      <Footer />
    </div>
  );
}

export default App;
