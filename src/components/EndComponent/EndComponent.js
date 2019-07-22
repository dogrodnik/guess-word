import React from 'react';

class EndComponent extends React.Component {
    render() {
        return (
        <div className ="ui grid" >
            <div className = "sixteen wide column center aligned" >
                <div className="ui centered">
                    <div className="ui huge statistic">
                        <div className="label">
                        Your Score
                        </div>
                        <div className="value">
                            {`${this.props.score}/${this.props.attempts}`}
                        </div>
                    </div>
                </div>
            </div>
            <div className = "sixteen wide column center aligned">
                <button  className="ui orange button massive">
                    Play again
                </button>
            </div>
        </div>
        )
    }
}

export default EndComponent;