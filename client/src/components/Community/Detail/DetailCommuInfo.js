import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*********************** */
// 디테일 커뮤니티 사이드
/************************ */

const Container = styled.div`
  flex: 0 0 320px;
  width: 320px;
  background: #ffff;
  color: #000;
  font-weight: bold;
  height: 190px;

  /* 모바일 버전에서는 사라짐 */
  @media (max-width: 960px) {
    display: none;
  }
`;

const Title = styled.div`
  padding: 10px;
  font-size: 20px;
  background: #ccc;
  width: 100%;
  color: white;
  font-weight: bold;
`;

const List = styled.ul`
  font-size: 15px;
`;

const Item = styled.li`
  padding: 7px;
`;

const Button = styled.button`
  font-size: 13px;
  margin-left: 7px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  padding: 5px;
  background-color: #ccc;
  color: white;
  font-weight: bold;
`;

const DetailCommuInfo = () => {
  return (
    <Container>
      <Title>
        <h1>커뮤니티에 대해서</h1>
      </Title>

      <List>
        <Item>커뮤니티 설명</Item>
        <Item>
          <span style={{ lineHeight: '20px' }}>
            100
            <br />
            멤버
          </span>
        </Item>
        <Item>08.15.2022</Item>
        <Button>포스트 생성</Button>
      </List>
    </Container>
  );
};

DetailCommuInfo.propTypes = {};

export default DetailCommuInfo;
