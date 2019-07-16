//TODO:
//-ogarnac wybor kategorii
//-po wyborze kategori wybrac losowe słowo z danej kategorii


import React from 'react';
import StartComponent from './StartComponent/StartComponent';
import CategoryComponent from './CategoryComponent/CategoryComponent';
import Cards from './Cards/Cards';
import Animals from '../data/data';

class App extends React.Component {
        constructor() {
            super()
            this.state = {
                gameOn: false,
                categoryChoosed: false,
                categoryType: null
            }
        }
        startGame = () => this.setState({gameOn: true});

        setCategory = (categoryType) => this.setState({
                categoryChoosed: true,
                categoryType: categoryType
            });
   
        render() {
            return (
            <div className='game'>
                <StartComponent start={this.state.gameOn} startGame = {this.startGame}  />
                <CategoryComponent start={this.state.gameOn} category={this.state.categoryChoosed}  setCategory={this.setCategory} />
                <Cards start={this.state.gameOn} category={this.state.categoryChoosed} categoryType={this.state.categoryType}  />
            </div>)
    }
}
export default App;