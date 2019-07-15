import React from 'react';

class StartComponent extends React.Component {
        render() {
        if(this.props.start){
            console.log('gra włączona')
            return null
        }
        return (
        <div onClick = {this.props.startGame}>
            <button className="ui orange button massive">
                Start
            </button>
        </div>
        )
    }
}
export default StartComponent;