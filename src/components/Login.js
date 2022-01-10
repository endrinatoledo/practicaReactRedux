import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row, Form, Button} from 'react-bootstrap'
import {Provider} from 'react-redux'
import store from '../store'
import Navbar from './Navbar';
import UserList from './UserList';




const Login = () => {


    const validateLogin = async (response) => {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <Navbar />
                    <UserList />
                </Provider>              
            </React.StrictMode>,
            document.getElementById('root')
          );
    }

    return (
        <> 
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Iniciar sesión</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa email" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa contraseña" />
                        </Form.Group>    
                                             */}
                        <div className="d-grid gap-2">
                            <Button variant="success btn-block" type="button" onClick={validateLogin}>
                            Aceptar
                            </Button>
                        </div>
                        
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="">
            
            </div>
        </>
       
    )
}

export default Login