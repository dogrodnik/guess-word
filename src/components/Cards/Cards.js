import React from 'react';
import MainCard from './MainCard'
import Card from './Card';

class Cards extends React.Component {
    constructor() {
        super()
        this.state = {
            imagesArray: []
        }
    }

    componentDidMount = async () =>{
        console.log('cards render')
        const imagesArray = await this.props.getImages();
        console.log(imagesArray)
        this.setState({imagesArray: imagesArray})
    }
    render(){
        if(this.state.imagesArray.length === 4){
            return (
            <div className= 'cards'>
                <Card styles ={{left: 200,top: 200}} word = {1} srcc={this.state.imagesArray[0]} />
                <Card styles ={{left: 200,bottom: 200}} word = {2} srcc={this.state.imagesArray[1]}  />
                <MainCard correctWord = {this.props.correctWord}/>
                <Card styles ={{right: 200,top: 200}} word = {3} srcc={this.state.imagesArray[2]}  />
                <Card styles ={{right: 200,bottom: 200}} word = {4} srcc={this.state.imagesArray[3]}  />
            </div>)
            } else {
                return <div>Loading...</div>
            }
    };
}
export default Cards;