import React from 'react';
import './MainCard.css'

class MainCard extends React.Component {
    render(){
            return (
            <div id='mainCard'>
                {this.props.category}
            </div>
            )
    };     
}

export default MainCard;