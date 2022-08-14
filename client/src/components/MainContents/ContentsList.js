import React from 'react';
import PropTypes from 'prop-types';
import { FaCommentAlt } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-right: 30px;
`;

const List = styled.ul`
  position: relative;
  background-color: #fff;
  color: black;
  font-weight: bold;
  font-size: 13px;
  padding: 10px 30px;
`;

const Item = styled.li``;

const UpAndDownWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CommunityName = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const PostTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
`;

const PostContents = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const ContentsList = () => {
  return (
    <Container>
      <List>
        <Item>
          <UpAndDownWrap>
            <AiOutlineArrowUp />
            {/* 추천횟수 */}
            <span>1</span>
            <AiOutlineArrowDown />
          </UpAndDownWrap>
          <CommunityName>
            {/* 임시로 유저 아이콘 */}
            <div
              style={{
                borderRadius: '50%',
                background: 'black',
                width: '15px',
                height: '15px',
                marginRight: '5px',
              }}
            />

            <p>
              /r/커뮤니티 이름 •{' '}
              <span style={{ opacity: '0.5' }}>
                Posted by /u/유저이름 &nbsp; 2022-08-03 18:07
              </span>
            </p>
          </CommunityName>

          <PostTitle>포스트를 생성</PostTitle>

          <PostContents>포스트 생성 설명</PostContents>

          <div style={{ fontSize: '16px' }}>
            <FaCommentAlt style={{ color: 'black', marginRight: '3px' }} />
            <span style={{ fontSize: '20px', fontWeight: '400' }}>1</span>
          </div>
        </Item>
      </List>
    </Container>
  );
};

ContentsList.propTypes = {};

export default ContentsList;
