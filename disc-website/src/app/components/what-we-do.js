import Image from 'next/image'

export default function What_we_do (){
    return(
        <div className="everything">
            <h2 className="title">&middot; WHAT WE DO &middot;</h2>
            <div className="boxes">
                <div className="individualCards">
                    <Image src="/Equip.png" width={500} height={500} alt="Equip"  />
                    <div className="text-container">
                        <h4><b>EQUIP</b></h4>
                        <p><b> Enhance your problem-solving skills through coding! </b><br></br>
                            We provide a supportive environment where members learn to tackle challenges step-by-step. 
                            Break down problems, brainstorm solutions, implement code, and reach effective solutions 
                            alongside a vibrant community of like-minded individuals. As a member, you'll not only sharpen 
                            your technical abilities but also forge meaningful connections, meet fellow coders, exchange ideas, 
                            and collaborate on projects. Together, we navigate the ups and downs of coding, celebrating successes 
                            and learning from setbacks.
                        </p>
                    </div>
                </div>

                
                <div className="individualCards">
                    <Image src="/Innovate.png" width={500} height={500} alt="Innovate" />
                    <div className="text-container">
                        <h4><b>INNOVATE</b></h4>
                        <p><b> DISC NU: where innovation meets implementation! </b> <br></br> 
                        We're passionate about coding and bringing ideas to life through technology. 
                        Join us as we dive into the world of software development and explore ways to enact positive change 
                        through our code. In our club, we're all about pushing the boundaries of traditional coding. 
                        We encourage thinking outside the box and experimenting with new technologies. 
                        It doesn't matter if you're a seasoned programmer or just starting out, we offer a space to let your creative ideas 
                        flow freely and turn them into impactful projects. Let's brainstorm solutions to real-world problems 
                        and develop applications, websites, and tools that make a positive difference in our community. Together, we'll
                        produces code that make a difference. </p>
                    </div>                        
                </div>

                <div className="individualCards">
                    <Image src="/Lead.png" width={500} height={500} alt="Lead" />
                    <div className="text-container">
                        <h4><b>LEAD</b></h4>
                        <p><b> Join our dynamic club and make a difference! </b> <br></br>
                        Our community is dedicated to driving social impact and community engagement 
                        through leadership at every level. Whether you're a project manager, tech lead, 
                        or general member, there's a role for you to lead and shape our community's future. 
                        Leadership isn't about titles—it's about action.  We empower our members to 
                        take ownership of projects, develop new ideas, and collaborate with like-minded individuals 
                        who share a passion for making a positive difference. Join us and discover the transformative 
                        power of leadership. Together, we're leading the way towards a brighter future for our community.</p>
                    </div>
                </div>


            </div>
        </div>
    );
}