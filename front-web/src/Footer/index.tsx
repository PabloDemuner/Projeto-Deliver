/* Rodapé da página*/ 

import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedInIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
       App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
       
         <a href="http://" target= "new">
                <YouTubeIcon/>
             </a>
             <a href="http://" target= "new">
                <LinkedInIcon/>
             </a>   
             <a href="http://" target= "new">
                <InstagramIcon/>
             </a>
            
        </footer>
    )
}
export default Footer;