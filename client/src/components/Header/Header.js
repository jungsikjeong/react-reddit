import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import Search from './Search';
import Button from '../common/Button';

const Container = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: white;
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.li`
  width: 100%;
`;

const Header = (props) => {
  return (
    <Container>
      <List>
        <Item>
          <Link to='/'>
            <img src={logo} alt='logo-img' />
          </Link>
        </Item>
        <Item>
          <Search />
        </Item>
        <Item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button loginBtn={true}>
            <Link to='/login'>Log In</Link>
          </Button>
          <Button signUpBtn={true}>
            <Link to='/register'>Sign Up</Link>
          </Button>
        </Item>
      </List>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
