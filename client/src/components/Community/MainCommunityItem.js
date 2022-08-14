import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

import Button from '../common/Button';
import { Link } from 'react-router-dom';

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

const MainCommunityItem = (props) => {
  return (
    <>
      <Item>
        <div className='number'>
          1
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>
        {/* 임시로 커뮤니티 아이콘 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/커뮤니티 이름</span>

        <Button join={true}>Join</Button>
      </Item>

      <Item>
        <div className='number'>
          2
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>
        {/* 임시로 커뮤니티 아이콘 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/커뮤니티 이름</span>

        <Button join={true}>Join</Button>
      </Item>

      <Item>
        <div className='number'>
          3
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>
        {/* 임시로 커뮤니티 아이콘 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/커뮤니티 이름</span>

        <Button join={true}>Join</Button>
      </Item>

      <Item>
        <div className='number'>
          4
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>
        {/* 임시로 커뮤니티 아이콘 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/커뮤니티 이름</span>

        <Button join={true}>Join</Button>
      </Item>

      <Item>
        <div className='number'>
          5
          <IoIosArrowUp style={{ margin: '0 5px', color: '#49D263' }} />
        </div>
        {/* 임시로 커뮤니티 아이콘 */}
        <div
          style={{
            borderRadius: '50%',
            background: 'black',
            width: '25px',
            height: '25px',
            marginRight: '5px',
          }}
        />
        <span>/r/커뮤니티 이름</span>

        <Button join={true}>Join</Button>
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

MainCommunityItem.propTypes = {};

export default MainCommunityItem;
