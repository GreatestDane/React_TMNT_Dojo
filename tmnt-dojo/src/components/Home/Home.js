import React,  { Component } from 'react';
import Fighters from '../elements/Fighters/Fighters.js';
import './Home.css';

class Home extends Component {
    state = {
        turtles: ['./images/Don.jpg', './images/Leo.jpg', './images/Mikey.jpg', './images/Raph.jpg']
    }


    render() {
        return (
            <div className="tmnt-home">
                <Fighters />
            </div>
        )
    }
}

export default Home; 