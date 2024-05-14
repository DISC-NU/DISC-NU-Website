import ResponsiveNavBar from './components/navbar.js'
import Welcome from './components/welcome.js'
import PastProjects from './components/past-projects.js';
import Footer from './components/footer'; 


export default function Home() {
  return (
    <div>
      <ResponsiveNavBar />
      <Welcome />
      <PastProjects />
      <Footer />
    </div>

  );
}