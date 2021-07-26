import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={
        pageTitle:'Welcome To Horned Animals'
    }

}
changePageContent=()=>{
this.setState({
     pageTitle: "Welcome to Harry Potter World!"
 
}
)
}

  render(){
    return(

      <div>



      </div>


    );
  }
}
export default Header;