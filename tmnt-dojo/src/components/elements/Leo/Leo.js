import React, { Component } from 'react';
import './Leo.css';

class Leo extends Component {
    state = {
        weapon: 'Katanas',
        attack: 35,
        HP: 100,
        defense: 35,
        bio: "Leonardo is the no-nonsense leader of the group. The only thing greater than his discipline and his deadly skills with his katanas is the love and respect he has for his brothers. "
    }

    render() {
        return (
            <div id='leo-page'>
                <img src='./images/Leo.jpg' alt='Donatello' id='leo-image'></img>
                <div id="leo-text">
                    <h1>Leonardo</h1>
                    <h2>Favorite Weapon: {this.state.weapon}</h2>
                    <h2>Bio: {this.state.bio}</h2>
                </div>
            </div>
        )
    }

}

export default Leo; 