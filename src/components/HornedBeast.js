import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import '../button.css'
import '../cards.css'
import '../App.css'


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0
        };

    }

  
  

    increaseNumberOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,

        }
        );


    }
    cardView =() =>{
        this.props.showModal();
        this.props.modalData(
          this.props.title,
          this.props.imgUrl,
          this.props.description
        );
      }
  

    render() {
        return (


            <div id="page-container">

                <div id="content-wrap">
                    <div className="cards">
                        <Card  className="cc" style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Img onClick={() =>
                                     {  
                                     this.cardView();}} variant="top" src={this.props.imgUrl} />
                                                              <Card.Text>
                                    <p>{this.props.description}</p>
                                </Card.Text>
                            </Card.Body>
                            <div class="card-footer text-muted">
                            do you like me? <Button className="button1" variant="primary" onClick={this.increaseNumberOfVotes}>😍</Button>{this.state.numberOfVotes}
  </div>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

export default HornedBeast