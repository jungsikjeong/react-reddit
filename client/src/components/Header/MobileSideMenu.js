import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <Container>
      {menuState && (
        <Navbar>
          <List>
            <Link to='/createCommunity'>
              <Item>커뮤니티 생성</Item>
            </Link>
            <Link to='/lists'>
              <Item>모든 커뮤니티 보기</Item>
            </Link>

            {/* todo:로그아웃에 성공하면 홈으로 돌려보내기 */}
            <Item>로그아웃</Item>
          </List>
        </Navbar>
      )}
    </Container>
  );
};

MobileSideMenu.propTypes = {};

export default MobileSideMenu;
