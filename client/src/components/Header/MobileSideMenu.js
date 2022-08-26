import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';

const Container = styled.div``;

// 모바일 메뉴
const Navbar = styled.div`
  position: fixed;
  top: 45px;
  right: 0;
  width: 250px;
  font-size: 16px;
  background: #ffff;
  color: #000;
  max-height: 80%;
  border-radius: 4px;
  margin-top: 4px;
  padding-top: 8px;
  z-index: 80;
  overflow-y: auto;
  overflow-x: hidden;
`;

const List = styled.ul``;

const Item = styled.li`
  padding: 10px 15px;
  width: 100%;
  height: 40px;
`;

const MobileSideMenu = ({ menuState }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <Container>
      {menuState && user && (
        <Navbar>
          <List>
            <Link to='/createCommunity'>
              <Item>커뮤니티 생성</Item>
            </Link>
            <Link to='/lists'>
              <Item>모든 커뮤니티 보기</Item>
            </Link>

            <Item onClick={onLogout}>로그아웃</Item>
          </List>
        </Navbar>
      )}

      {menuState && !user && (
        <Navbar>
          <List>
            <Link to='/register'>
              <Item>회원 가입</Item>
            </Link>
            <Link to='/login'>
              <Item>로그인</Item>
            </Link>
            <Link to='/lists'>
              <Item>모든 커뮤니티 보기</Item>
            </Link>
          </List>
        </Navbar>
      )}
    </Container>
  );
};

MobileSideMenu.propTypes = {
  menuState: PropTypes.bool,
};

export default MobileSideMenu;
