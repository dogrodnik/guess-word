import React from 'react';
import './MainCard.css'

class MainCard extends React.Component {
    render(){
            return (
            <div className ={this.props.clas} id='mainCard'>
                {this.props.correctWord}
            </div>
            )
    };     
}

export default MainCard;