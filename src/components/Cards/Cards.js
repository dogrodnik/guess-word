import React from 'react';
import MainCard from './MainCard'
import Card from './Card';
import Animals from '../../data/Animals';
import Colors from '../../data/Colors';
import Countries from '../../data/Countries';

class Cards extends React.Component {
    constructor(){
        super()
        this.state = {
            correctWord: null,
            wordsArray: []
        }
    }
    shuffle(array) {
        let currentIndex = array.length,temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    getWords = (category) =>{
            //SETTING A ARRAY WITH PROPER DATA
            let dataArray = [];    
            switch (category) {
                case 'Animals':
                    dataArray = Animals;
                    break;
                case 'Colors':
                    dataArray = Colors;
                    break;
                case 'Countries':
                    dataArray = Countries;
                    break;
                default:
                    console.log('ERROR NO CATEGORY');
                    }
            //GETTING CORRECT WORD
            let wordsArray = []
            let correctIndex = Math.floor(Math.random() * dataArray.length);
            let correctWord = dataArray[correctIndex];
            wordsArray.push(correctWord);
            dataArray.splice(correctIndex,1)
            //GETTING RANDOM WORDS
            for (let i = 0; i < 3; i++) {
                let randomNumber = Math.floor(Math.random() * dataArray.length)
                let randomWord = dataArray[randomNumber];
                dataArray.splice(randomNumber, 1);
                wordsArray.push(randomWord);
            }
            //CHANGING POSITIONS OF ELEMENTS IN ARRAY AND SETING STATE
            let shuffledArray = this.shuffle(wordsArray)
            if(this.state.correctWord === null){
                this.setState({
                    correctWord: correctWord,
                    wordsArray: shuffledArray
                })
            }
            };

    render(){
        if (this.props.start && this.props.category && this.props.categoryType) {
            this.getWords(this.props.categoryType);
            return (
            <div className= 'cards'>
                <Card styles ={{left: 200,top: 200}} word = {this.state.wordsArray[0]} />
                <Card styles ={{left: 200,bottom: 200}} word = {this.state.wordsArray[1]} />
                <MainCard correctWord = {this.state.correctWord}/>
                <Card styles ={{right: 200,top: 200}} word = {this.state.wordsArray[2]}/>
                <Card styles ={{right: 200,bottom: 200}} word = {this.state.wordsArray[3]}/>
            </div>)
        } else {
            return null
        };
    };
};

export default Cards;