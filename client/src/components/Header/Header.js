import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { logout, reset } from '../../features/auth/authSlice';

import logo from '../../assets/logo.png';
import Search from './Search';
import Button from '../common/Button';
import MobileSideMenu from './MobileSideMenu';
import { getMainPosts } from '../../features/post/postSlice';

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

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const MenuToggle = () => {
    setMenu(!Menu);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <Container>
      <List>
        <Item onClick={() => dispatch(getMainPosts())}>
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
              <Button logout={true} onClick={onLogout}>
                로그아웃
              </Button>
            </Desktop>
          ) : (
            <Desktop>
              <Link to='/login'>
                <Button loginBtn={true}>로그인</Button>
              </Link>
              <Link to='/register'>
                <Button signUpBtn={true}>회원가입</Button>
              </Link>
            </Desktop>
          )}
        </Item>
      </List>
    </Container>
  );
};

export default Header;
