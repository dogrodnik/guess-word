import React from 'react';
import MainCard from './MainCard'
import Card from './Card';
import Score from './Score';

class Cards extends React.Component {
    render(){
        if(this.props.imagesArray.length === 4){
            return (
                <div>
                    <div className= 'ui grid'>
                        <Card  source={this.props.imagesArray[0]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[0]}/>
                        <Card  source={this.props.imagesArray[1]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[1]} />
                        <Card   source={this.props.imagesArray[2]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[2]}/>
                        <Card  source={this.props.imagesArray[3]} categoryType={this.props.categoryType} updateScore = {this.props.updateScore} word = {this.props.wordsArray[3]} />
                    </div>
                    <div className="ui grid">
                        <MainCard correctWord = {this.props.correctWord}/>
                    </div>
                    <div className="ui grid">
                        <Score score={this.props.score} />
                    </div>
                </div>)
            } else {
                return <div class="ui active inline loader"></div>
            }
    };
}
export default Cards;