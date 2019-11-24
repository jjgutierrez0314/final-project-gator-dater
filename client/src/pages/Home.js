
import React, { useState }from 'react';
import './css/Home.css';
import img from './img/bg.jpg';
import { Button} from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert} from 'reactstrap';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [greeting, setGreeting] = useState('');
  const [age, setAge] = useState('');  
  const [email, setEmail] = useState('');  
  const [collegeyear, setCollegeYear] = useState(''); 
  const [major, setMajor] = useState('');  
  const [addtion, setAddtion] = useState('');  


  const [loginBox, setLoginBox] = useState(false);
  const [createBox, setCreateBox] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  


  const bgGround = {
    backgroundImage: 'url(' + img + ')',
  };

  const hide ={
      display: greeting,
  }


    const goLogin = () => {
        setLoginBox(true);
        setFadeIn(false);
        setCreateBox(false);
        setUsername('');
        setPassword('');
        setGreeting('none');
      }
    
      const goCreate =() =>{
        setLoginBox(false);
        setFadeIn(false);
        setCreateBox(true);
        setUsername('');
        setPassword('');
        setGreeting('none');
      }

      const goHome = () => {
        setCreateBox(false);
        setLoginBox(false);
        setFadeIn(true);
        setGreeting('inline');
      }


      const Log = ()=>{      
        return (
            <div>
                <Alert color = "black" isOpen={loginBox} id="login" >       
                <h4> Welcome back</h4><br/>
                
                <Form>
                    <FormGroup>
                    <Label >Username</Label>
                        <Input  bsSize="sm" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="admin" />
                    </FormGroup>
                    <FormGroup>
                    <Label >Password</Label>
                        <Input bsSize="sm" type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="******" />
                    </FormGroup>  

                <Row form>
                    <Col md={6}>
                    <Button onClick = {goHome} variant="warning" block>Submit</Button>
                    </Col>
                    <Col md={6}>
                    <Button onClick = {goHome} variant="warning" block>Not now</Button>
                    </Col>
                </Row>
                </Form>      
                </Alert> 
        </div>
        )
      }

      const Create = () =>{
          return(
            <div>
            <Alert color = "black" isOpen={createBox} id="login" > <br/><br/>    
            <h4> Create Page</h4><br/> 
             <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label >Username</Label>
                        <Input  bsSize="sm" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="username" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label >Password</Label>
                        <Input bsSize="sm" type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="password" />
                    </FormGroup>
                    </Col>
                </Row>

                <Row>
                <Col md={3}>
                <FormGroup>
                    <Label >Age</Label>
                    <Input  bsSize="sm" value={age} onChange={e => setAge(e.target.value)}  placeholder="age" />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label >Email</Label>
                    <Input bsSize="sm" type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="email@mail.sfsu.edu" />
                </FormGroup>
                </Col>
                </Row>

                <FormGroup>
                    <Label for="exampleAddress">College Year</Label>
                    <Input type="select" bsSize="sm" value={collegeyear}>
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Major</Label>
                    <Input type="text"  value={major} placeholder="what is your major?"/>
                </FormGroup>

                <Row form>
                    <Col md={6}>
                    <FormGroup check>
                    <Input type="checkbox" id="male" />
                    <Label  check>Gril</Label>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                    <Input type="checkbox" id="male"/>
                    <Label  check>Boy</Label>
                    </FormGroup>
                    </Col>
                </Row>
     
                <FormGroup>
                    <Label for="exampleText">We want to know more about you.</Label>
                    <Input type="textarea" name="text" id="exampleText"value={addtion} placeholder="preference, interest, anyting you want to share..."/>
                </FormGroup>

                <br/>
                <Row form>
                    <Col md={6}>
                    <Button onClick = {goHome} variant="warning" block>Sign Up</Button>
                    </Col>
                    <Col md={6}>
                    <Button onClick = {goHome} variant="warning" block>Not now</Button>
                    </Col>
                </Row>
                </Form>
         </Alert>
         </div>
          )
      }

  return (
    <div style={bgGround} id="bg">
    <Container >
        <Row>   
           
            {loginBox && (  
            <Col sm="12" md={{ size: 6, offset: 4 }}>
                <div className="iBox" >{Log()}</div> 
            </Col>
            )}



            {createBox && (  
            <Col sm="12" md={{ size: 6, offset: 3}}>
                <div className="cBox">{Create()}</div> 
            </Col>
            )}
           
            
       
         
            <Fade in={fadeIn} id="greeting" style={hide}>     
                <h1>Gator.Dater</h1>
                <p>A dating app for SFSU students, in which students register and see people who match their dating interests. <br/>
                Our goal is to make our fellow SFSU students feel a little less cold this winter.</p> 
                
                <ButtonToolbar>   
                    <Button onClick={goLogin}  variant="outline-warning">Get started  </Button>  &nbsp;&nbsp;
                    <Button  onClick={goCreate} variant="outline-warning" >Sign up</Button>
                </ButtonToolbar>
            </Fade>
         
        </Row>
    </Container>
    </div>
  );
};

export default Home;