//TO DO:

//-zrobic dodawanie punktów
//-wyświetlanie wyniku na koniec




import React from 'react';
import axios from 'axios';
import StartComponent from './StartComponent/StartComponent';
import CategoryComponent from './CategoryComponent/CategoryComponent';
import Cards from './Cards/Cards';

class App extends React.Component {
        constructor() {
            super()
            this.state = {
                gameOn: false,
                categoryChoosed: false,
                categoryType: null,
                apiKEY: "13065829-4a687870cfa2bcfed99bf7395"
            }
        }
        startGame = () => this.setState({gameOn: true});

        setCategory = (categoryType, correctWord, wordsArray) => {
                this.setState({
                categoryChoosed: true,
                categoryType: categoryType,
                correctWord: correctWord,
                wordsArray: wordsArray

            })};

        getImages = async () => {
            console.log(this.state.wordsArray)
            let imagesArray = []
            for (let i = 0; i < 4; i++) {
                if (this.state.categoryType === "Animals") {                       
                    const response = await axios.get(`https://pixabay.com/api/?key=${this.state.apiKEY}&q=${this.state.wordsArray[i]}&image_type=photo`)
                    imagesArray.push(response.data.hits[0].webformatURL)}
                if (this.state.categoryType === "Countries") {
                    const response = `https://www.countryflags.io/${this.state.wordsArray[i]}/flat/64.png`
                    imagesArray.push(response)
                }
                if (this.state.categoryType === "Colors"){
                    const response = this.state.wordsArray[i];
                    imagesArray.push(response)
                }
            }
            return imagesArray;
        }
   
        render() {
            console.log('renderowanie calej apki')
            if (this.state.gameOn && this.state.categoryChoosed && this.state.categoryType)
                {return (
                <div className='game'>
                    <Cards start={this.state.gameOn} category={this.state.categoryChoosed} categoryType={this.state.categoryType} getImages = {this.getImages} correctWord = {this.state.correctWord}  />
                </div>)}
            if (this.state.gameOn){
                return (
                <div className='game'>
                    <CategoryComponent start={this.state.gameOn} category={this.state.categoryChoosed}  setCategory={this.setCategory} />
                </div>)}
             else {
            return (
                <div className='game'>
                    <StartComponent start={this.state.gameOn} startGame = {this.startGame}  />
                </div>)}
            }

    }

export default App;