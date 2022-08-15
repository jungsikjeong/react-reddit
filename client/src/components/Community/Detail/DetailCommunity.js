import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommunityList from './CommunityList';
import DetailCommuInfo from './DetailCommuInfo';

/****** ********************** */
// 커뮤니티 디테일페이지         //
/****** ********************** */

const Container = styled.div``;

const BackgroundTop = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ccc;
  /* 로그인된 유저고 커뮤니티를 만든 유저면 클릭되게 */
  cursor: pointer;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  height: 80px;
  background: white;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  top: 180px;
  justify-content: center;
  position: absolute;
  font-size: 16px;
  color: #000;
`;

const Box = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  height: 55px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Name = styled.div`
  width: 100%;
  font-size: 15px;
  color: gray;
`;

const Main = styled.div`
  display: flex;
  padding: 0px 40px;
  margin-top: 300px;
  width: 100%;
`;

const DetailCommunity = (props) => {
  return (
    <Container>
      <BackgroundTop />
      <BackgroundBottom />

      <Wrapper>
        {/* 임시 아이콘 */}
        <div
          style={{
            borderRadius: '50px',
            background: 'black',
            width: '50px',
            height: '50px',
          }}
        />
        <Box>
          <Title>커뮤니티 타이틀</Title>
          <Name>/r/커뮤니티 이름</Name>
        </Box>
      </Wrapper>

      <Main>
        <CommunityList />

        <DetailCommuInfo />
      </Main>
    </Container>
  );
};

DetailCommunity.propTypes = {};

export default DetailCommunity;
