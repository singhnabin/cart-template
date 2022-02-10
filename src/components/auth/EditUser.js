
import React,{useEffect, useState} from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import Base from '../Base'
import { getUser } from '../CartService'

function EditUser(props) {
    const [user,setUser]= useState();
// console.log(
    useEffect(() => {
        getUser(props.match.params.id).then(data=>{
            if(data.statusCode===200){
                setUser(data.data)
            }
        }).catch(err=>{
            console.log(err)
        }
            )
      
    }, [])
    return (
       <Base>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {/* {loading} */}
            {/* {message && <Alert variant='success'> {message}</Alert>}
            {error && <Alert variant="danger"> {error}</Alert>} */}
            {user&&
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={user.firstName}

                //   onChange={handleFirstName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lastname"
                  value={user.lastName}
                //   onChange={handleLastName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                //   onChange={handleEmail}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                //   onChange={handlePassword}
                />
              </Form.Group> */}

              <Button variant="primary" type="button"
                // onClick={handleClick}
              >
                Submit
            </Button>
            </Form>
            }
          </Col>
        </Row>
      </Container>
    </Base >
    )
}

export default EditUser
