import React, { Component } from 'react';
import './Mikey.css';

class Mikey extends Component {
    state = {
        weapon: 'nunchucks',
        attack: 26,
        HP: 100,
        defense: 30,
        bio: "Michaelangelo is a fun loving party animal. When he's not busy kicking shell, his favorite activities are sewer surfing and eating pizza."
    }

    render() {
        return (
            <div id='mikey-page'>
                <img src='./images/Mikey.jpg' alt='Michaelangelo' id='mikey-image'></img>
                <div id="mikey-text">
                    <h1>Michaelangelo</h1>
                    <h2>Favorite Weapon: {this.state.weapon}</h2>
                    <h2>Bio: {this.state.bio}</h2>
                    <button className="btn btn-success">Select Fighter</button>
                </div>
            </div>
        )
    }

}

export default Mikey; 