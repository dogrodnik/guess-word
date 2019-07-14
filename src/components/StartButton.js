import React from 'react';

class StartButton extends React.Component {
        render() {
        return (
        <div onClick = {() => console.log('lets start')}>
            <button className="ui orange button massive">
                Start
            </button>
        </div>
        )
    }
}
export default StartButton;