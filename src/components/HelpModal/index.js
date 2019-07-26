import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// copied from reactstrap documentation

class HelpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Help</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Memory Game help</ModalHeader>
          <ModalBody>
            <p>The object of the game is to select cards by clicking on them, without clicking on the same one 
              twice
            </p>
            <p>There are 12 cards. Score a point for every card you select that hasn't already been selected. 
              The game records the high score - try and beat your previous. The maximum score is 12
            </p>
            <p>Every time you click on a card, the cards are turned over. They are then shuffled, so will be 
              in a different order when turned back up again.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HelpModal;