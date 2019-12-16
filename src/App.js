
import React, { useRef, useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import './App.css';

function App (){
  return (
    <div className="App">
      <Form>
        <Form.Control type="email"/>
        <Form.Control type="password"/>
        <Button variant="danger" type="reset">Reset</Button>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default App;
