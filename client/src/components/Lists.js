import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

import Button from './common/Button';
import { Link } from 'react-router-dom';

/*********************** */
// 커뮤니티 목록들
/************************ */

const Container = styled.div`
  flex: 0 0 350px;
  max-width: 740px;
  color: #000;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 auto;
  font-weight: 600;
`;

const Title = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #edeff1;
  font-size: 20px;
`;

const List = styled.ul`
  font-size: 13px;

  li:not(:last-of-type) {
    border-bottom: 1px solid #edeff1;
  }
`;

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

const Lists = (props) => {
  return (
    <Container>
      <Title>
        <h1>커뮤니티 목록</h1>
      </Title>

      <List>
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
        ></div>
      </List>
    </Container>
  );
};

Lists.propTypes = {};

export default Lists;
