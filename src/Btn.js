import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Btn extends React.Component {
  render() {
      return (
        <div>
        
        <Link to={'/A'}> <Button>Home</Button></Link> 
          </div>
          
    );
  }
}    
export default Btn;