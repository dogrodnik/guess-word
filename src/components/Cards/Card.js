import React from 'react';
import './Card.css'

class Card extends React.Component {
    render(){
            return (
            <div id='card' style = {this.props.styles}>
                <img className= "ui medium image circular" src={this.props.source} />
            </div>
            )
    };     
}

export default Card;