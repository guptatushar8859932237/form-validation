import DataGridDemo from "./EmployeeTable";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Greet() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [open,setOpen] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = ()=> setOpen(false)
  const [data, setData] = useState(" ")
  const [error, setError] = useState({})
  
  const handlechange = (e) => {
    const {name, value} = e.target
    setData({ ...data, [name]: value })
    console.log(data) 
  }

  const handlevalidate = (value) => {
    let error = {}
    if (!value.text) {
      error.text = 'user name required'
    } if (!value.email) {
      error.email = 'email required'
    }if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.email)){
      error.email='invalid email'
    }
     if (!value.contact) {
      error.contact = 'contact required'
    } if (!value.address) {
      error.address = 'address required'
    } if (!value.password) {
      error.password = 'Password must contain A: specal char  B:number & one cap digit'
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value.password)){
      error.password='password invalid'
    }
     if (!value.designation) {
      error.designation = 'designation required'
    }
     else {
    
      console.log('error')
    }
    setError(error)
  }
  const handleclick = () => {
    handlevalidate(data)
if(data){
  setOpen(true);

}
  }
  return (
    <>
      <Navbar bg="light" expand="lb">
        <Container fluid>
          <Navbar.Brand href="#"> HR Management</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
          <Button variant="primary" onClick={handleShow}>
            Add New Record
          </Button>

          <Modal show={show} onHide={handleHide} >
            <Modal.Header closeButton>
              <Modal.Title>Employee Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <input placeholder="ID"  required  className="lui"></input>

              <input placeholder="FullName" name="text" required onChange={handlechange} className="lui"></input>
              <p className="valid">{error.text}</p>
              <input placeholder="Email" name="email"  required onChange={handlechange} className="lui"></input>
              <p className="valid">{error.email}</p>
              <input placeholder="contact" name="contact"  required onChange={handlechange} className="lui"></input>
              <p className="valid">{error.contact}</p>
              <input placeholder="Address" className="lui"  required  name="address" onChange={handlechange} ></input>
              <p className="valid">{error.address}</p>
              <input placeholder="password" type='password' required  name='password' onChange={handlechange} className="lui" ></input>
              <p className="valid">  {error.password}</p>
              <input placeholder="designation" name="designation"  required onChange={handlechange} className="lui" ></input>
              <p className="valid">{error.designation}</p>
              <button className="subbtn" type='submit'  onClick={handleclick}>submit </button><br></br>
      <Modal show= {open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>the sumaary of the user data is :</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                <h1>Id:{data.email}</h1>
                <h1>Full name:</h1>
                <h1>Email:</h1>
                <h1>Contact:</h1>
                <h1>Address:</h1>
                <h1>Password:</h1>
                <h1>Designation:</h1>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href='' onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </Container>
      </Navbar>
      <DataGridDemo data = {data}/>
    </>
  )
}