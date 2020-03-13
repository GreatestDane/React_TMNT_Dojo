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
            <div>
                Mikey
            </div>
        )
    }

}

export default Mikey; 