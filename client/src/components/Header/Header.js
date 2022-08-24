import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import logo from '../../assets/logo.png';
import Search from './Search';
import Button from '../common/Button';
import MobileSideMenu from './MobileSideMenu';

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

const Desktop = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Header = (props) => {
  const [Menu, setMenu] = useState(false);
  const user = false;

  const MenuToggle = () => {
    setMenu(!Menu);
  };

  return (
    <Container>
      <List>
        <Item>
          <Link to='/' onClick={MenuToggle}>
            <img src={logo} alt='logo-img' />
          </Link>
        </Item>
        <Item>
          <Search MenuToggle={MenuToggle} />
        </Item>

        <Item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* 모바일 버전에서 메뉴 활성화 */}
          {/* user일때 보이는화면,아닌화면 등등.. */}
          <Mobile onClick={MenuToggle}>
            <AiOutlineUser color='gray' size='25px' />
            <IoIosArrowDown color={Menu ? '#5CD773' : 'gray'} size='25px' />

            <MobileSideMenu menuState={Menu} />
          </Mobile>
          {/* 데스크탑 메뉴 활성화 */}
          {user ? (
            <Desktop>
              <Link to='/createCommunity'>
                <Button create={true}>커뮤니티 생성</Button>
              </Link>
              <Button logout={true}>Log Out</Button>
            </Desktop>
          ) : (
            <Desktop>
              <Link to='/login'>
                <Button loginBtn={true}>Log In</Button>
              </Link>
              <Link to='/register'>
                <Button signUpBtn={true}>Sign Up</Button>
              </Link>
            </Desktop>
          )}
        </Item>
      </List>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
