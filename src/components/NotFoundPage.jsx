import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
// import Wrapper from '../components/Wrapper';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 *  IMPORT STYLES
 * */
import './styles/NotFoundPage.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "promoción"
        }
    }


    render() {
        return (
            <Fragment>
                {/*<Wrapper>*/}
                <div>
                    <div className="" style={{
                        background: 'url(./assets/images/404_page_cover.jpg)',
                        width: 100 + 'vw',
                        height: 100 + 'vh',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 100 + '%' + 100 + '%'
                    }}>

                        <div style={{
                            position: 'absolute',
                            top: 14 + 'em',
                            left: 8 + 'em'
                        }}>
                            <h1 className="text-center ">volver a la tienda</h1>
                            <a href="/"><img src="./assets/images/merca_dev.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/*</Wrapper>*/}
            </Fragment>
        );
    }
}

export default App;
