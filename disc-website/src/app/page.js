import ResponsiveNavBar from './components/navbar.js'
import PastProjects from './components/past-projects.js';
import What_we_do from './components/what-we-do.js';
import Footer from './components/footer'; 


export default function Home() {
  return (
    <div>

      <ResponsiveNavBar />
      <What_we_do />
      <PastProjects />
      <Footer />
    </div>

  );
}