export default function Footer () {
    return ( 
        <div className = "footer" style= {{display: "grid", gridTemplateColumns: "3fr 1fr"}}>
            <div>
                <div class="flex justify-start">
                    <div>
                        <p className = 'footerText'>Copyright © DISC NU </p>
                        <p className = 'footerText'>Website Designed and Developed In-House: </p>
                        <p> Paula E. Fregene, Joanna Soltys, Melanie Cuenca, Pauline W. Wahiuri, Satviki Madaan </p>
                    </div>
                </div>
            </div>

            <div class='flex space-x-4' style={{justifyContent: "center"}}>
                    <a href="https://www.facebook.com/discNU/">
                        <img class= 'icon-gallery' src= 'Facebook.png'/>
                    </a>
                    <a href="https://www.instagram.com/disc_nu/">
                        <img class= 'icon-gallery' src= 'Instagram.png'/>
                    </a>
                    <a href="https://www.linkedin.com/company/northwestern-develop-innovation-for-social-change-disc/">
                        <img class= 'icon-gallery' src= 'LinkedIn.png'/>
                    </a>
                    <a href="https://github.com/DISC-NU" >
                        <img class= 'icon-gallery' src= 'Github.png'/>
                    </a>
                    <a href="mailto:disc@u.northwestern.edu">
                        <img class= 'icon-gallery' src='Email.png'/>
                    </a>

                </div>
            </div>
    );
}

    