export default function What_we_do (){
    return(
        <div className= 'boxes' style= {{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            <div className="individualCards">
                <img src="Equip.png" alt="testing"  />
                <div className="text-container">
                    <h4><b>Equip</b></h4>
                    <p> Enhance your problem-solving skills through coding! <br></br>
                        We provide a supportive environment where members learn to tackle challenges step-by-step. 
                        Break down problems, brainstorm solutions, implement code, and reach effective solutions 
                        alongside a vibrant community of like-minded individuals. As a member, you'll not only sharpen 
                        your technical abilities but also forge meaningful connections. Meet fellow coders, exchange ideas, 
                        and collaborate on projects. Together, we navigate the ups and downs of coding, celebrating successes 
                        and learning from setbacks. Whether you're a seasoned coder or a beginner, join us to discover the joy 
                        of problem-solving and the camaraderie of a supportive community. Together, we'll code our way to success!
                    </p>
                </div>
            </div>

            
            <div className="individualCards">
                <img src="Innovate.png" alt="testing" />
                <div className="text-container">
                    <h4><b>Innovate</b></h4>
                    <p>Join us at DISN NU, where innovation meets implementation! <br></br> 
                    We're passionate about coding and bringing ideas to life through technology. 
                    Join us as we dive into the world of software development and explore ways to enact positive change 
                    through our codes. In our club, we're all about pushing the boundaries of traditional coding. Here, 
                    you'll find a space to let your creative ideas flow freely and turn them into impactful projects. 
                    Whether you're a seasoned programmer or just starting out, we offer a space to let your creative ideas 
                    flow freely and turn them into impactful projects. Let's brainstorm solutions to real-world problems 
                    and develop applications, websites, and tools that make a positive difference in our community. Our 
                    club is a supportive community that encourages thinking outside the box and experimenting with new 
                    technologies. Come join us and write code that makes a difference!</p>
                </div>                        
            </div>

            <div className="individualCards">
                <img src="Lead.png" alt="testing" />
                <div className="text-container">
                    <h4><b>Lead</b></h4>
                    <p>Join our dynamic club and make a difference! <br></br>
                    Our community is dedicated to driving social impact and community engagement 
                    through leadership at every level. Whether you're a project manager, executive, 
                    or servant leader, there's a role for you to lead and shape our community's future. 
                    Leadership isn't about titles—it's about action.  We empower our members to 
                    take ownership of projects, develop new ideas, and collaborate with like-minded individuals 
                    who share a passion for making a positive difference. Join us and discover the transformative 
                    power of leadership. Together, we're leading the way towards a brighter future for our community.</p>
                </div>
            </div>


        </div>

    );
}