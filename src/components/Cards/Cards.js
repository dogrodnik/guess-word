import React from 'react';
import MainCard from './MainCard'
import Card from './Card';

class Cards extends React.Component {
    render(){
        if(this.props.start && this.props.category){
            return (
            <div className= 'cards'>
                <Card styles ={{left: 200,top: 200}} />
                <Card styles ={{left: 200,bottom: 200}} />
                <MainCard category = {this.props.categoryType}/>
                <Card styles ={{right: 200,top: 200}} />
                <Card styles ={{right: 200,bottom: 200}} />
            </div>)
        } else {
            return null
        };
    };
};

export default Cards;