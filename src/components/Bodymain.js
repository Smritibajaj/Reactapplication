import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Bodymain extends React.Component {
    render() {
        return(
            <div className="container">
            <div className="content">
            <p>
              WELCOME TO <br/>
              RENTAL MANAGEMENT SYSTEM
            </p>
            <p className="App-link">
              Please Select Location
            </p>
            </div>
            </div>
        )
    }
}    
export default Bodymain;