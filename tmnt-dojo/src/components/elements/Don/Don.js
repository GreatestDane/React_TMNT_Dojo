import React, { Component } from 'react';
import './Don.css';

class Don extends Component {
    state = {
        weapon: 'Bō Staff',
        attack: 25,
        HP: 100,
        defense: 40,
        bio: "Donatello is the sensitive nerd of the group. Although deadly with his Bō Staff, he prefers to use his brains (and gadgets) to defeat his enemies. When he's not training or taking down the foot, you can find him buried in a book."
    }

    render() {
        return (
            <div id='Don-page'>
                <img src='./images/Don.jpg' alt='Donatello' id='Don-image'></img>
                <div id="Don-text">
                    <h1>Donatello</h1>
                    <h2>Favorite Weapon: {this.state.weapon}</h2>
                    <h2>Bio: {this.state.bio}</h2>
                </div>
            </div>
        )
    }

}

export default Don; 