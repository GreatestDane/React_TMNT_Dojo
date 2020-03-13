import React, { Component } from 'react';
import './Raph.css';

class Raph extends Component {
    state = {
        weapon: 'The Sai',
        attack: 35,
        HP: 100,
        defense: 20,
        bio: "Raphael is the hot-headed rogue of the group. The strongest of the four brothers, Raphael has a lone-wolf mentality and is prone to violent outbursts, but he is always there for his brothers when they need him the most."
    }

    render() {
        return (
            <div id='raph-page'>
                <img src='./images/Raph.jpg' alt='Raphael' id='raph-image'></img>
                <div id="raph-text">
                    <h1>Raphael</h1>
                    <h2>Favorite Weapon: {this.state.weapon}</h2>
                    <h2>Bio: {this.state.bio}</h2>
                </div>
            </div>
        )
    }

}

export default Raph; 