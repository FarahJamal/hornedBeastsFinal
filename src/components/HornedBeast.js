import React from 'react';


class HornedBeast extends React.Component {
    render(){
        return(
                <div className="divs">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className="div1">

                <img className="image" src={this.props.image_url} alt ={this.props.title}/>

            </div>
            </div>
        )
    }
}

export default HornedBeast