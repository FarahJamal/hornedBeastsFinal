import React from "react";
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends React.Component {


  render() {
    return (

        <>
<Modal show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <p>      
                        
                            <img src={this.props.url} />
</p>
                    <p>{this.props.desc}</p>
                    

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hide}>
                            Close
                        </Button>
                        <Button variant="primary" onClick=
                            {this.props.hide}
                                >
                            got it! nice pic
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
        );
    }
  }
  
  export default SelectedBeast;
  