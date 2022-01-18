import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from 'react-bootstrap';
import Header from '../layout/Header';
import { connect } from 'react-redux';
import {RegisterAuthAction } from '../../redux/actions/AuthAction'

function Register(props){

    const {user, register}= props;
    const [userState, setUserState] = useState({});

    return (
        // <Provider store={store}> 
        <>
            <Header></Header>
            <Container>
                
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h1 className="shadow-sm text-success p-3 text-center rounded">Registrate</h1>
                    <Form onSubmit={(event)=>{
                        event.preventDefault();
                        // console.log('hola',userState);
                        // console.log('user',user);
                        register(userState);
                    }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" className='form-control form-control-sm' onChange={(event)=>{
                                const firstName = event.target.value;
                                setUserState({...userState, ...{firstName}})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" className='form-control form-control-sm' onChange={(event)=>{
                                const lastName = event.target.value;
                                setUserState({...userState, ...{lastName}})
                            }}/>
                        </Form.Group>    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" className='form-control form-control-sm' onChange={(event)=>{
                                const email = event.target.value;
                                setUserState({...userState, ...{email}})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" className='form-control form-control-sm' onChange={(event)=>{
                                const password = event.target.value;
                                setUserState({...userState, ...{password}})
                            }}/>
                        </Form.Group>
                                            
                        <div className="d-grid gap-2">                            
                            <Button variant="success btn-block" type="submit" >
                                Aceptar
                            </Button>                            
                        </div>
                        
                        </Form>
                    </Col>
                </Row>
        </Container> 
        </>
                
        // </Provider>
    )

}

const mapStateToProps = (state)=>{
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        register: (userState)=>{
            dispatch(RegisterAuthAction(userState))
            // console.log(userState)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 