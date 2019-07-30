import React from 'react';
import { Button, Modal } from 'semantic-ui-react'

class StartComponent extends React.Component {
    render() {
        return (
        <div className="ui vertical buttons" >
            <button onClick = {this.props.startGame} className="ui orange button massive">
                Start
            </button>
            <Modal trigger={<Button className="ui orange button massive">How to play? </Button>}>
                <Modal.Header>How to play?</Modal.Header>
                <Modal.Content image>
                <Modal.Description>
                    <p>Click start. Choose category. Next you will see a word and four options. Try to choose the correct one. You have 10 attempts. </p>
                    <p><b>GOOD LUCK!</b></p>
                </Modal.Description>
                </Modal.Content>
            </Modal>  
        </div>
        );
    };
};

export default StartComponent;



