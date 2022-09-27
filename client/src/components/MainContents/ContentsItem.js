import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCommentAlt } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Item = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding: 10px 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const UpAndDownWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;

  .post-like {
    font-size: 13px;
  }
`;

const CommunityName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

const ContentsItem = ({ post, onClickLike, onClickDislike }) => {
  const {
    likesCounter,
    communityName,
    name,
    title,
    description,
    createdAt,
    comments,
    community,
  } = post;

  return (
    <Item>
      <UpAndDownWrap>
        <AiOutlineArrowUp
          color={'gray'}
          cursor={'pointer'}
          onClick={() => onClickLike(post._id)}
        />

        {/* 추천횟수 */}
        <span className='post-like'>{likesCounter}</span>

        <AiOutlineArrowDown
          color={'gray'}
          cursor={'pointer'}
          onClick={() => onClickDislike(post._id)}
        />
      </UpAndDownWrap>
      <Link to={`/r/${community}/${post._id}`}>
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
          /r/{communityName} •
          <span style={{ opacity: '0.5' }}>
            Posted by /u/{name} &nbsp;{' '}
            {new Date(createdAt).toLocaleString('ko-KR').substring(0, 11)}
          </span>
        </CommunityName>

        <PostTitle>{title}</PostTitle>

        <PostContents>{description}</PostContents>

        <div style={{ fontSize: '16px' }}>
          <FaCommentAlt style={{ color: 'black', marginRight: '3px' }} />
          <span style={{ fontSize: '17px', fontWeight: '400' }}>
            {comments.length}
          </span>
        </div>
      </Link>
    </Item>
  );
};

ContentsItem.propTypes = {
  item: PropTypes.object,
  onClickLike: PropTypes.func,
  onClickDislike: PropTypes.func,
};

export default ContentsItem;
