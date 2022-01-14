import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row, Form, Button} from 'react-bootstrap'
import { connect, Provider } from 'react-redux'
import store from '../../store'
import Login from '../Login';

const Register = (props) => {

    const [userState, setUserState] = useState({});
    const {user, register} = props

    const redirectToLogin = async (response) => {
        // ReactDOM.render(
        //     <React.StrictMode>
        //         <Login />       
        //     </React.StrictMode>,
        //     document.getElementById('root')
        //   );
    }
    return (
        <Provider store={store}> 
        <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Registrate</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form onSubmit={(event)=>{
                        event.preventDefault();
                        console.log('hola',userState);
                        // register(userState)
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
                            }} />
                        </Form.Group>
                                            
                        <div className="d-grid gap-2">                            
                            <Button variant="success btn-block" type="submit" >
                                Aceptar
                            </Button>
                            <Button variant="success btn-block" type="button" onClick={redirectToLogin}>
                                Volver al Login
                            </Button>
                        </div>
                        
                        </Form>
                    </Col>
                </Row>
            </Container>         
        </Provider>
       
    )
}
const mapStateToProps = (state)=>{
    return {
        user: state
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        register: (userState)=>{
            // dispatch()
            console.log('fun: ',userState)
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register); 