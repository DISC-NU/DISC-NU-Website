import ResponsiveNavBar from './components/navbar.js'
import PastProjects from './components/past-projects.js';
import Footer from './components/footer'; 


export default function Home() {
  return (
    <div>
      <ResponsiveNavBar />
      <PastProjects />
      <Footer />
    </div>

  );
}