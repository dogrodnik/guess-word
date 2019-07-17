import React from 'react';
import './CategoryComponent.css'

class CategoryComponent extends React.Component {
    render() {
        if (this.props.start && !this.props.category) {
            return (<div id="category-component">
                <div className="ui centered orange inverted header"> 
                    Choose category
                </div>
                <div className="ui massive horizontal divided list" >
                    <div className="item">
                        <button  className="ui orange button massive" onClick = {() =>this.props.setCategory('Colors') }>
                            Colors
                        </button>
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {() =>this.props.setCategory('Animals') }>
                            Animals
                        </button>                   
                    </div>
                    <div className="item">
                        <button className="ui orange button massive" onClick = {() =>this.props.setCategory('Countries') }>
                            Countries
                        </button>                   
                    </div>
                </div>
            </div>)
        } else { return null}
    }
}
export default CategoryComponent;