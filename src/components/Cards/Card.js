import React from 'react';
import './Card.css'

class Card extends React.Component {

    getCard(){
        if (this.props.categoryType === 'Colors'){
            let color =  {backgroundColor: this.props.source, height: "200px", width: "120px"}
            let newStyle = {...this.props.styles, ...color};
            return (
                <div id='card' style = {newStyle} onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) } >
                    Color
                </div>)
        } else {
            return (
                <div id='card' style = {this.props.styles} onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) }>
                    <img className= {this.props.categoryType === "Countries" ? "ui small image" : "ui medium image circular"} src={this.props.source} />
                </div>
            )
        }
    };

    render(){
        return (
        <div> 
            {this.getCard()}
        </div>
        )
    };     
}

export default Card;