import React from 'react';
import StartComponent from './StartComponent/StartComponent';
import Cards from './Cards/Cards'

class App extends React.Component {
        constructor() {
            super()
            this.state = {
                gameOn: false
            }
        }
        startGame = () => this.setState({gameOn: true})
        
        render() {
            return (<div className='game'>
                <StartComponent
                    start={this.state.gameOn} 
                    startGame = {this.startGame}  
                />
                <Cards start={this.state.gameOn}  />
            </div>)
    }
}
export default App;