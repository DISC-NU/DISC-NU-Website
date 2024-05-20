import Image from 'next/image'

export default function Footer () {
    return ( 
        <div className = "footer" style= {{display: "grid", gridTemplateColumns: "3fr 1fr"}}>
            <div>
                <div className="flex justify-start">
                    <div>
                        <p className = 'footerText'>Copyright © DISC NU </p>
                        <p className = 'footerText'>Website Designed and Developed In-House: </p>
                        <p> Paula E. Fregene, Joanna M. Soltys, Melanie Cuenca, Pauline Wakiuru Wachiuri, Satviki Madaan </p>
                    </div>
                </div>
            </div>

            <div class='flex space-x-4' style={{justifyContent: "center"}}>
                    <a href="https://www.facebook.com/discNU/">
                        <Image className= 'icon-gallery' src= '/Facebook.png' width={500} height={500} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/disc_nu/">
                        <Image className= 'icon-gallery' src= '/Instagram.png' width={500} height={500} alt="Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/northwestern-develop-innovation-for-social-change-disc/">
                        <Image className= 'icon-gallery' src= '/LinkedIn.png' width={500} height={500} alt="LinkIn"/>
                    </a>
                    <a href="https://github.com/DISC-NU" >
                        <Image className= 'icon-gallery' src= '/Github.png' width={500} height={500} alt="GitHub"/>
                    </a>
                    <a href="mailto:disc@u.northwestern.edu">
                        <Image className= 'icon-gallery' src='/Email.png' width={500} height={500} alt="Email"/>
                    </a>

                </div>
            </div>
    );
}

    