import React from 'react';
import './CategoryComponent.css';

class CategoryComponent extends React.Component {
    getData = async (word) => {
        await this.props.getWords(word)
        await this.props.getImages()
    }

    render() {
            return (<div id="category-component">
                <div className="ui centered orange inverted header"> 
                    Choose category
                </div>
                <div className="ui massive horizontal divided list" >
                    <div className="item">
                        <button  className="ui orange button massive" onClick = {async () =>await this.getData('Colors') }>
                            Colors
                        </button>
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {async () => await this.getData('Animals') }>
                            Animals
                        </button>                   
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {async () => await this.getData('Countries') }>
                            Countries
                        </button>                   
                    </div>
                </div>
            </div>)
    }
}
export default CategoryComponent;