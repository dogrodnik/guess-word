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
                    <Card styles ={{left: 200,top: 200}}  source={this.state.imagesArray[0]} categoryType={this.props.categoryType}/>
                    <Card styles ={{left: 200,bottom: 200}}  source={this.state.imagesArray[1]} categoryType={this.props.categoryType}  />
                    <MainCard correctWord = {this.props.correctWord}/>
                    <Card styles ={{right: 200,top: 200}}  source={this.state.imagesArray[2]} categoryType={this.props.categoryType} />
                    <Card styles ={{right: 200,bottom: 200}} source={this.state.imagesArray[3]} categoryType={this.props.categoryType}  />
                </div>)
            } else {
                return <div>Loading...</div>
            }
    };
}
export default Cards;