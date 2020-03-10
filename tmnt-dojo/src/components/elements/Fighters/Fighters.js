import React, { Component } from 'react';
import './Fighters.css';

class Fighters extends Component {
    state = {
        turtles: ['./images/Don.jpg', './images/Leo.jpg', './images/Mikey.jpg', './images/Raph.jpg']
    }


    renderElements = () => {
        const gridElements = this.fighters.map((element, i) => {
            return (
                <div key={i} className="tmnt-grid-element">
                    {element}
                </div>
            )
        })
        return gridElements;
    }

    render() {
        return (
            <div className="tmnt-grid">
                <h1>MY NAME JEFF</h1>
                <div className="tmnt-grid-content">
                    {this.renderElements()}
                </div>
                <button>Render Turtles!</button>
            </div>
        )
    }
}

export default Fighters;