import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../common/Button';

/*********************** */
// 메인화면 커뮤니티 리스트아이템들
/************************ */

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 10px;

  .number {
    display: flex;
    font-size: 18px;
    opacity: 0.9;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  outline: none;
  color: #fff;
  border-radius: 15px;
  background: #1283d6;
  font-weight: bold;
  padding: 5px 3px;
  cursor: pointer;
  :hover {
    background: #379eeb;
  }
`;

const MainCommunityItem = ({ item, index }) => {
  index++;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/r/${item._id}`);
  };

  return (
    <>
      <Item>
        <div className='number'>
          {index}
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>

        {/* 임시로 커뮤니티 아이콘 */}
        {/* to do:: 커뮤니티 아이콘이 설정된게없다면 ? 기본 아이콘 보여주기 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/{item.title}</span>

        <Button join={true} onClick={onClick}>
          Join
        </Button>
      </Item>

      <div
        style={{
          padding: '12px',
          position: 'absolute',
          width: '100%',
          bottom: '0',
        }}
      >
        <Link to='/lists'>
          <StyledButton>View All</StyledButton>
        </Link>
      </div>
    </>
  );
};

export default MainCommunityItem;
