/* Rodapé da página*/ 

import './styles.css';

import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
       Sigam nossas redes sociais.
        
             <a href="http://" target= "new">
                <InstagramIcon/>
             </a>
            
        </footer>
    )
}
export default Footer;