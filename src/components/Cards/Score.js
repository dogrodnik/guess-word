import React from 'react';

class Score extends React.Component {
    render(){
            return (
                <div className="sixteen wide column center aligned">
                    <div className="ui statistic center" style = {{border: "5px solid white", padding: "10px", backgroundColor: "rgb(242, 113, 28)", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)"}}>
                        <div className="value" style={{color: "white"}}>
                            {this.props.score}
                        </div>
                        <div className="label" style={{color: "white"}}>
                            Score
                        </div>
                    </div>
                </div>
            )
    };     
}

export default Score;