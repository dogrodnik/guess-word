import React from 'react';

class Card extends React.Component {
    getStyle = (category) => {
        switch (category) {
                case 'Colors':
                    return(
                        {backgroundColor: this.props.source, width: "120px", height: "200px", border: "5px solid black", borderRadius: "5%", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)" }
                    )
                case 'Animals':
                    return(
                        {maxHeight: "200px", border: "5px solid black", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)"}
                    )               
                default:        
                    console.log('No category');
                }
    }

    getCard(){
        if (this.props.categoryType === 'Colors'){
            return (
                <div className = {this.props.clas} style = {this.getStyle(this.props.categoryType)} onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) } >
                </div>)
        } else {
            return (
                <div className = {this.props.clas} onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) }>
                    <img alt={this.props.word}  className = {this.props.categoryType === "Countries" ? "ui small image" : "ui medium circular image"} style = {this.getStyle(this.props.categoryType)} src={this.props.source} />
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