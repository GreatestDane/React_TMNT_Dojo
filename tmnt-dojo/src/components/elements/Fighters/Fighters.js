import React, { Component } from 'react';
import './Fighters.css';

class Fighters extends Component {
    state = {
        turtles: [<img src='./images/Don.jpg' className='images' alt="Donatello" />, <img src='./images/Leo.jpg' className='images' alt="Leonardo" />, <img src='./images/Mikey.jpg' className='images' alt="Michaelangelo" />, <img src='./images/Raph.jpg' className='images' alt="Raphael" />]
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