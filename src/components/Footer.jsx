import React, {Component} from 'react';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 * IMPORT OWN STYLES
 * */
import './styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ul id="ul_footer">
                    <li style={{color:'#A2A09E'}}>Política de cookies</li>
                    <li style={{color:'#A2A09E'}}>Términos y condiciones</li>
                    <li style={{color:'#A2A09E'}}>Política de privacidad</li>
                </ul>
                <div className="mr-5">
                    <h6>© Mercahome S.A.</h6>
                </div>
            </div>
        )
    }
}

export default Footer;
