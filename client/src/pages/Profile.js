
import React, { useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
// import fb from './img/fb.jpg';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import './css/Profile.css';
import img from './img/bg.jpg';
import Random from './Random';
import Update from './Update';

import { Switch, Route, Redirect}  from "react-router-dom";
import { Button} from 'react-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const Profile = ({dispatch, isUpdateOpen}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [sideNav, setNav] = useState(false);
  const [isLoggedOut, setLogout] = useState(false);
  const [isGoUpdate, setGoupdate] = useState(false);

  const [pref, setPref] = useState('');
  const [availUsers, setAvail] = useState([]); // Based on what gender person you are looking to date, this will be filled on login

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    setLogout(!isLoggedOut);
    dispatch(setIsUpdateOpen(false));
  }

  const bgGround = {
    backgroundImage: 'url(' + img + ')',

  const openNav = ()=> {
    if(sideNav){
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginRight = "0px";

      setNav(false);
    }
    else {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginRight = '250px';
      setNav(true);
    }
  }

  const goUpdate = () => {
    dispatch(setIsUpdateOpen(!isUpdateOpen));
    document.getElementById('mySidenav').style.width = '0px';
    document.getElementById('main').style.marginRight = '0px';
    setNav(false);

    populate();
  }

  const populate = () => {
    axios.post('/user/listUsers', { pref })
    .then((res => {setAvail(res)}))
  }

  if (isLoggedOut) { return <Redirect to='/' /> }
  else { populate() }


  return (

    <div style={bgGround} >
    <div id = "main">
    <Navbar color="warning" light expand="md" >
        <NavbarBrand >GatorDater- Profile.js</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Some Option#1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Some Option#2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <input type="image" src = "./img/fb.jpg" border="border of the image" alt="text"></input> */}
         Welcome, Seafoodghost &nbsp;&nbsp;&nbsp;
         <Button  variant="warning" onClick = {openNav}> &#9776;</Button>
        </Collapse>
      </Navbar>
      
     
    
       
      <Switch>
      {isUpdateOpen && ( 
        <Route path = "/" component ={Update}/> 
        
      )}
        <Route path = "/" component = {Random}/>       
      </Switch>


      
      <div id="mySidenav" className="sidenav"> 
        <ListGroup>
         
          <ListGroupItem>Some information.</ListGroupItem>
          <ListGroupItem>Email: Some content@sfsu.edu</ListGroupItem>
          <ListGroupItem>Some content</ListGroupItem>
          <ListGroupItem>Some content</ListGroupItem>
          <ListGroupItem><Button bsSize = "sm" onClick ={goUpdate} block>Update Profile</Button></ListGroupItem>
          <ListGroupItem><Button  bsSize = "sm"  onClick = {logout} block> LogOut</Button></ListGroupItem>
        </ListGroup>       
     </div>
     </div> 
    </div>

  );
};




const mapStateToProps = state => ({
   isUpdateOpen: state.pageReducer.isUpdateOpen,

});
export default connect(mapStateToProps)(Profile);