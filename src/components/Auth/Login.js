import React from 'react';
import {Col, Container, Row, Form, Button} from 'react-bootstrap'
import Header from '../layout/Header';




function Login(){


    return (
        <> 
        <Header></Header>
        <Container>
            
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <h1 className="shadow-sm text-success p-3 text-center rounded">Iniciar sesión</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>    
                                        
                    <div className="d-grid gap-2">
                        <Button variant="success btn-block" type="button" >
                            Aceptar
                        </Button>                             
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
    )

}

export default Login