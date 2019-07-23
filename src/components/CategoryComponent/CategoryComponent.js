import React from 'react';

class CategoryComponent extends React.Component {
    getData = async (word) => {
        await this.props.getWords(word)
        await this.props.getImages()
    }

    render() {
            return (<div className ="ui grid" >
                <div className = "sixteen wide column center aligned"> 
                    <div className = 'ui centered orange inverted header' style = {{fontSize: "2.75em"}}>
                        Choose category
                    </div>
                </div>
                <div className = "sixteen wide column center aligned">
                    <div className="ui vertical buttons" >
                            <button  className="ui orange button massive" onClick = {async () =>await this.getData('Colors') }>
                                Colors
                            </button>
                            <button className="ui orange button massive" onClick = {async () => await this.getData('Animals') }>
                                Animals
                            </button>                   
                            <button className="ui orange button massive" onClick = {async () => await this.getData('Flags') }>
                                Flags
                            </button>                   
                    </div>
                </div>
            </div>)
    }
}
export default CategoryComponent;