import ResponsiveNavBar from './components/navbar.js'
import PastProjects from './components/past-projects.js';
import Faq from './components/faq'
import Footer from './components/footer'; 
import Emailus from './components/emailus'

export default function Home() {
  return (
    <div>
      <ResponsiveNavBar />
      <PastProjects />
      <Faq />
      <Emailus />

      <Footer />
    </div>

  );
}