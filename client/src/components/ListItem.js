import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Button from './common/Button';

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

const ListItem = ({ community, index }) => {
  index++;

  return (
    <>
      <Item key={community._id}>
        <div className='number'>
          {index}

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
        <span>/r/{community.name}</span>
        <Button join={true}>
          <Link to={`/r/${community._id}`}>Join</Link>
        </Button>
      </Item>
    </>
  );
};

export default ListItem;
