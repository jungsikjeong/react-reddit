import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCommentAlt } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const Item = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding: 10px 30px;
  background-color: #fff;
`;

const UpAndDownWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
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
  line-height: 22px;
`;

const ContentsItem = ({ item }) => {
  const {
    like,
    communityName,
    userName,
    postTitle,
    postContents,
    date,
    comments,
  } = item;
  return (
    <Item>
      <UpAndDownWrap>
        <AiOutlineArrowUp />
        {/* 추천횟수 */}
        <span>{like}</span>
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
          /r/{communityName} •
          <span style={{ opacity: '0.5' }}>
            Posted by /u/{userName} &nbsp; {date}
          </span>
        </p>
      </CommunityName>

      <PostTitle>{postTitle}</PostTitle>

      <PostContents>{postContents}</PostContents>

      <div style={{ fontSize: '16px' }}>
        <FaCommentAlt style={{ color: 'black', marginRight: '3px' }} />
        <span style={{ fontSize: '17px', fontWeight: '400' }}>
          {comments.length}
        </span>
      </div>
    </Item>
  );
};

ContentsItem.propTypes = {
  item: PropTypes.object,
};

export default ContentsItem;
