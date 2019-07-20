import React from 'react';
import './CategoryComponent.css';
import Animals from '../../data/Animals';
import Colors from '../../data/Colors';
import Countries from '../../data/Countries';

class CategoryComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            correctWord: null,
            wordsArray: [],
        }
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
        dataArray.splice(correctIndex, 1)
        //GETTING RANDOM WORDS
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * dataArray.length)
            let randomWord = dataArray[randomNumber];
            dataArray.splice(randomNumber, 1);
            wordsArray.push(randomWord);
        }
        //CHANGING POSITIONS OF ELEMENTS IN ARRAY AND SETING STATE
        let shuffledArray = this.shuffle(wordsArray)
        if (this.state.correctWord === null) {
            this.setState({
                correctWord: correctWord,
                wordsArray: shuffledArray
            }, () => this.props.setCategory(category, this.state.correctWord, this.state.wordsArray))
        }
        
    };
    render() {
        if (this.props.start && !this.props.category) {
            return (<div id="category-component">
                <div className="ui centered orange inverted header"> 
                    Choose category
                </div>
                <div className="ui massive horizontal divided list" >
                    <div className="item">
                        <button  className="ui orange button massive" onClick = {() =>this.getWords('Colors') }>
                            Colors
                        </button>
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {() => this.getWords('Animals') }>
                            Animals
                        </button>                   
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {() =>this.getWords('Countries') }>
                            Countries
                        </button>                   
                    </div>
                </div>
            </div>)
        } else { return null}
    }
}
export default CategoryComponent;