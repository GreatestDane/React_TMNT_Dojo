import React, { Component } from 'react';
import './Fighters.css';

class Fighters extends Component {
    state = {
        turtles: ['./images/Don.jpg', './images/Leo.jpg', './images/Mikey.jpg', './images/Raph.jpg']
    }


    renderElements = () => {
        const gridElements = this.state.turtles.map((element, i) => {
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
                
                <div className="tmnt-grid-content">
                    {this.renderElements()}
                </div>
                {/* <button onClick={ this.renderElements() }>Render Turtles!</button> */}
            </div>
        )
    }
}

export default Fighters;