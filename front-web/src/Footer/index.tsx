/* Rodapé da página*/ 

import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedInIcon} from './linkedin.svg';
//import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as FacebookIcon} from './Facebook.svg';

function Footer() {
    return(
        <footer className="main-footer">
       Siga-nos em nossas redes sociais.
       
         <a href="https://www.youtube.com/results?search_query=dev+superior" target= "new">
                <YouTubeIcon/>
             </a>
             <a href="https://www.linkedin.com/in/pablo-diego-demuner-costa-31695b1b7/" target= "new">
                <LinkedInIcon/>
             </a>   
             <a href="https://www.facebook.com/pablodiego.demunercosta" target= "new">
                <FacebookIcon/>
             </a>
            
        </footer>
    )
}
export default Footer;