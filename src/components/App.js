import React from 'react';
import axios from 'axios';
import './styles.css'
import Animals from '../data/Animals';
import Colors from '../data/Colors';
import Flags from '../data/Flags';
import StartComponent from './StartComponent/StartComponent';
import CategoryComponent from './CategoryComponent/CategoryComponent';
import EndComponent from './EndComponent/EndComponent';
import Cards from './Cards/Cards';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gameOn: false,
            categoryChoosed: false,
            categoryType: null,
            apiKEY: "13065829-4a687870cfa2bcfed99bf7395",
            score: 0,
            attempts: 0,
            totalAttempts: 10,
            imagesArray: []
        }
    }
    startGame = () => this.setState({gameOn: true});

    getImages = async () => {
        let imagesArray = []
        for (let i = 0; i < 4; i++) {
            if (this.state.categoryType === "Animals") {                       
                const response = await axios.get(`https://pixabay.com/api/?key=${this.state.apiKEY}&q=${this.state.wordsArray[i]}&image_type=photo&category=animals`)
                imagesArray.push(response.data.hits[0].webformatURL)}
            if (this.state.categoryType === "Flags") {
                const response = `https://www.countryflags.io/${this.state.wordsArray[i]}/flat/64.png`
                imagesArray.push(response)
            }
            if (this.state.categoryType === "Colors"){
                const response = this.state.wordsArray[i];
                imagesArray.push(response)
            }
        }
        await this.setState({imagesArray: imagesArray })
    }
    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
        }
    getWords = async (category) => {
        //SETTING A ARRAY WITH PROPER DATA
        let dataArray = [];
        switch (category) {
            case 'Animals':
                dataArray = Animals;
                break;
            case 'Colors':
                dataArray = Colors;
                break;
            case 'Flags':
                dataArray = Flags.getNames();
                break;
            default:
                console.log('ERROR NO CATEGORY');
        }
        //GETTING CORRECT WORD
        let wordsArray = []
        let correctIndex = Math.floor(Math.random() * dataArray.length);
        let correctWord = dataArray[correctIndex];
        if (category === 'Flags') {
            const { getCode } = require('country-list');
                const correctWordShortcut = getCode(correctWord);
                wordsArray.push(correctWordShortcut);
            } else {
                wordsArray.push(correctWord)
            }
        dataArray.splice(correctIndex, 1)
        //GETTING RANDOM WORDS
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * dataArray.length)
            let randomWord = dataArray[randomNumber];
            if (category === 'Flags') {
                const { getCode } = require('country-list');
                randomWord = getCode(randomWord)
            }
            dataArray.splice(randomNumber, 1);
            wordsArray.push(randomWord);
        }
        //CHANGING POSITIONS OF ELEMENTS IN ARRAY AND SETING STATE
        let shuffledArray = this.shuffle(wordsArray)
        this.setState({
                categoryChoosed: true,
                categoryType: category,
                correctWord: correctWord,
                wordsArray: shuffledArray
            })               
    };

    updateScore = async (word, category) => {
        if (category === "Flags"){
            const { getName } = require('country-list');
            word = await getName(word);
        }
        if(word === this.state.correctWord){
            this.setState({
                score: this.state.score+1,
                attempts: this.state.attempts+1
            })
        } else {
            this.setState({
                score: this.state.score,
                attempts: this.state.attempts + 1
            })
        }
        await this.getWords(category)
        await this.getImages(); 
    }
    playAgain = () => {
        this.setState({
            gameOn: true,
            categoryChoosed: false,
            categoryType: null,
            apiKEY: "13065829-4a687870cfa2bcfed99bf7395",
            score: 0,
            attempts: 0,
            imagesArray: []
        })
    };
    
    render() {
        if (this.state.attempts === this.state.totalAttempts){
            return <EndComponent 
                score = {this.state.score}
                attempts = {this.state.attempts}
                playAgain = {this.playAgain}
            />
        }
        if (this.state.gameOn && this.state.categoryChoosed && this.state.categoryType)
            {return (
            <div className='game'>
                <Cards 
                    start={this.state.gameOn} 
                    category={this.state.categoryChoosed} 
                    categoryType={this.state.categoryType} 
                    getImages = {this.getImages} 
                    correctWord = {this.state.correctWord} 
                    getWords={this.getWords} 
                    score={this.state.score} 
                    updateScore = {this.updateScore}
                    imagesArray = {this.state.imagesArray}
                    wordsArray = {this.state.wordsArray}
                />
            </div>)}
        if (this.state.gameOn){
            return (
            <div className='game'>
                <CategoryComponent 
                    start={this.state.gameOn} 
                    category={this.state.categoryChoosed}  
                    setCategory={this.setCategory} 
                    getWords={this.getWords}
                    getImages = {this.getImages} 
                />
            </div>)}
            else {
            return (
                <div className='game'>
                    <StartComponent 
                        startGame = {this.startGame}  
                    />
                </div>)}
        }
}

export default App;