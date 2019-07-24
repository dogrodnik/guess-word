import React from 'react';
import MainCard from './MainCard'
import Card from './Card';

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
                        <div className="sixteen wide column center aligned">
                            <div className="ui statistic center" style = {{border: "5px solid white", padding: "10px", backgroundColor: "rgb(242, 113, 28)", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)"}}>
                                <div className="value" style={{color: "white"}}>
                                    {this.props.score}
                                </div>
                                <div className="label" style={{color: "white"}}>
                                    Score
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            } else {
                return <div>Loading...</div>
            }
    };
}
export default Cards;