import React from 'react'
import HornedBeast from './HornedBeast'
import HornedData from './HornedData.json';
import  HarryPotterData from './HarryPotterData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            pageTitle:HornedData,
            pageTitle2:'Welcome To Horned Animals'

        }
    
    }
    changePageContent2=()=>{
    this.setState({
         pageTitle: HarryPotterData,
         pageTitle2: "Welcome to Harry Potter World!"

     
    }
    )
    }



    render() {
          return (
            <div>
                <h1 className="header"> {this.state.pageTitle2} 

    <Button className="button2"variant="primary"onClick={this.changePageContent2} >🔀</Button>
    </h1>

{ 


this.state.pageTitle.map(item=>{
                    return(
                        
                        <HornedBeast
        
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
        
                        />
                    )
                })
                }
            </div>

        )
    }
}

export default Main;
