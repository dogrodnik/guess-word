import React from 'react';
import './MainCard.css'

class MainCard extends React.Component {
    render(){
            return (
            <div className ="sixteen wide column" id='mainCard'>
                {this.props.correctWord}
            </div>
            )
    };     
}

export default MainCard;