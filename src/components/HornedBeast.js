import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../button.css'
import '../cards.css'
import'../App.css'


class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state={
            numberOfVotes:0
        }

    }

increaseNumberOfVotes=()=>{
    this.setState({
        numberOfVotes: this.state.numberOfVotes+1

    }
    )
}




    render(){
        return(
            <div id="page-container">
   <div id="content-wrap">
    <div className="cards">
            <Card className="cc" style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Text>
                    <p>{this.props.description}</p>
                    </Card.Text>
                    do you like me? <Button className="button1"variant="primary" onClick={this.increaseNumberOfVotes}>😍</Button>{this.state.numberOfVotes}
                </Card.Body>
                </Card>
    </div>
            </div>
            </div>
        )
    }
}

export default HornedBeast