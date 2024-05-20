import ResponsiveNavBar from './components/navbar.js'
import Welcome from './components/welcome.js'
import PastProjects from './components/past-projects.js';
import What_we_do from './components/what-we-do.js';
import Footer from './components/footer'; 
import WhoWeAre from './components/who-we-are.js';


export default function Home() {
  return (
    <div>

      <ResponsiveNavBar />
      <Welcome />
      <WhoWeAre />
      <What_we_do />
      <PastProjects />
      <Footer />
    </div>

  );
}