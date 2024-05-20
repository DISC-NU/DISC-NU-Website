import ResponsiveNavBar from './components/navbar.js'
import PastProjects from './components/past-projects.js';
import Faq from './components/faq'
import Footer from './components/footer'; 
import Emailus from './components/emailus';
import Welcome from './components/welcome';
import What_we_do from './components/what-we-do.js';
import WhoWeAre from './components/who-we-are.js';

export default function Home() {
  return (
    <div>
      <ResponsiveNavBar />
      <Welcome />
      <WhoWeAre />
      <What_we_do />
      <PastProjects />
      <Faq />
      <Emailus />
      <Footer />
    </div>

  );
}