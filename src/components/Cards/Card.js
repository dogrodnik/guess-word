import React from 'react';
import './Card.css'

class Card extends React.Component {

    getCard(){
        if (this.props.categoryType === 'Colors'){
            let color =  {backgroundColor: this.props.source, height: "200px", width: "120px"}
            let newStyle = {...this.props.styles, ...color};
            return (
                <div id='card' style = {newStyle} >
                    Color
                </div>)
        } else {
            return (
                <div id='card' style = {this.props.styles}>
                    <img className= {this.props.categoryType === "Countries" ? "ui small image" : "ui medium image circular"} src={this.props.source} />
                </div>
            )
        }
    };

    render(){
        return <div> 
        {this.getCard()}</div>
    };     
}

export default Card;