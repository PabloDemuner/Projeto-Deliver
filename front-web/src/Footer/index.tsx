/* Rodapé da página

(Para adicionar o icone do Insta
 nas linhas 19 á 21.   
<a href="http://" target= "new">
                <InstagramIcon/>
             </a>)*/ 

import './styles.css';

//Para adicionar o icone do Insta nas linhas 19 á 21.
//import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg'

function Footer() {
    return(
        <footer className="main-footer">
       LinkedIn para mais informações . 
             <a href="https://www.linkedin.com/in/pablo-diego-demuner-costa-31695b1b7" target= "new">
                <LinkedinIcon/>
             </a>
            
        </footer>
    )
}
export default Footer;