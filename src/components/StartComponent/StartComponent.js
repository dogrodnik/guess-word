import React from 'react';

class StartComponent extends React.Component {
        
    render() {
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