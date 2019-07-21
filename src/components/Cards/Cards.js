import React from 'react';
import MainCard from './MainCard'
import Card from './Card';

class Cards extends React.Component {
    render(){
        if(this.props.imagesArray.length === 4){
            return (
                <div className= 'cards'>
                    <Card styles ={{left: 200,top: 200}}  source={this.props.imagesArray[0]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[0]}/>
                    <Card styles ={{left: 200,bottom: 200}}  source={this.props.imagesArray[1]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[1]} />
                    <MainCard correctWord = {this.props.correctWord}/>
                    <Card styles ={{right: 200,top: 200}}  source={this.props.imagesArray[2]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[2]}/>
                    <Card styles ={{right: 200,bottom: 200}} source={this.props.imagesArray[3]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[3]} />
                    <div className="ui statistic">
                        <div className="value">
                            {this.props.score}
                        </div>
                        <div className="label">
                            Score
                        </div>
                    </div>
                </div>)
            } else {
                return <div>Loading...</div>
            }
    };
}
export default Cards;