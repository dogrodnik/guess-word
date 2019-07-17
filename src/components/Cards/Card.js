import React from 'react';
import './Card.css'

class Card extends React.Component {
    render(){
            return (
            <div id='card' style = {this.props.styles}>
                {this.props.word}
            </div>
            )
    };     
}

export default Card;