import React, { useRef, useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const initialState = { email: "", password: "" };
  const [form, setForm] = useState(initialState);
  const emailRef = useRef();
  const passwordRef = useRef();
  const fields = [emailRef, passwordRef];
  const onSubmitHandler = e => {
    e.preventDefault();
    verify().length === 0 ? console.log(form) : console.log("INVALID");
  };
  const resetHandler = () => {
    setForm({ email: "", password: "" });
  };
  const verify = () => {
    let errors = new Set();
    if (!form.email.includes("@")) errors.add(emailRef);
    if (form.email.length < 3) errors.add(emailRef);
    if (form.password.length < 6) errors.add(passwordRef);
    if (form.password.length > 16) errors.add(passwordRef);
    return Array.from(errors);
  };
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    let errors = verify();
    fields.forEach(f => {
      f.current.style.border = "2px solid green";
    });
    errors.forEach(f => {
      f.current.style.border = "2px solid red";
    });
  });
  return (
    <div className="App">
      <Form onSubmit={onSubmitHandler}>
        <Form.Control
          onChange={changeHandler}
          name="email"
          type="email"
          required
          ref={emailRef}
          style={{ border: "2px solid red" }}
        />
        <Form.Control
          onChange={changeHandler}
          name="password"
          type="password"
          required
          ref={passwordRef}
          style={{ border: "2px solid red" }}
        />
        <Button onClick={resetHandler} variant="danger" type="reset">
          Reset
        </Button>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default App;
