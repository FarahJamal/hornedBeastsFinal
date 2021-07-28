import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import '../cards.css'
import '../button.css'
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  likesIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  
    
  };
    cardView =() =>{
      this.props.showModal();
      this.props.modalData(
        this.props.title,
        this.props.image_url,
        this.props.description
      );
    }
   
 
  

   
    render() {
      return (
        <div>
        <Card className="cards"
          style={{ width: "20rem", height: "30rem" ,background:"black" }}
        >
          <Card.Img variant="top" src={this.props.image_url} onClick={this.cardView}
  />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
  
          <Card.Footer>
          do you like me?<Button className="button1" variant="primary" onClick={this.likesIncrement}> 😍 : {this.state.counter}</Button>
  
          </Card.Footer>
        </Card>
        </div>
      );
    }
  }
  
  export default HornedBeasts;
  
