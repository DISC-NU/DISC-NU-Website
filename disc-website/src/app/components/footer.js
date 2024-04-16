export default function Footer () {
    return ( 
        <div className = "footer" style= {{display: "grid", gridTemplateColumns: "3fr 1fr"}}>
            <div>
                <div class="flex justify-start">
                    <div className = "footerText">
                        <p>Copyright © DISC NU </p>
                        <p>Website Designed and Developed In-House </p>
                    </div>
                </div>
            </div>

            <div class='flex space-x-4' style={{justifyContent: "center"}}>
                    <a href="https://www.google.com/">
                        <img class= 'icon-gallery' src= 'Facebook.png'/>
                    </a>
                    <a href="https://www.google.com/">
                        <img class= 'icon-gallery' src= 'Instagram.png'/>
                    </a>
                    <a href="https://www.google.com/">
                        <img class= 'icon-gallery' src= 'LinkedIn.png'/>
                    </a>
                </div>
            </div>
    );
}

    