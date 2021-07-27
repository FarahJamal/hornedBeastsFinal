import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Example from './Example.js'
import  { useState } from "react";


function AnotherTest() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <Example
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default AnotherTest;