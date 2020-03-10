import React,  { Component } from 'react';
import Header from "../elements/Header/Header.js";
import Fighters from '../elements/Fighters/Fighters.js';
import './Home.css';

class Home extends Component {
    state = {
        turtles: ['./images/Don.jpg', './images/Leo.jpg', './images/Mikey.jpg', './images/Raph.jpg']
    }


    render() {
        return (
            <div className="tmnt-home">
                <Header />
                <Fighters />
            </div>
        )
    }
}

export default Home; 