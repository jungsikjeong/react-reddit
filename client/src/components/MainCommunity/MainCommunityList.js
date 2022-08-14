import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainCommunityItem from './MainCommunityItem';

const Container = styled.div`
  position: relative;
  flex: 0 0 350px;
  width: 350px;
  height: 464px;
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

const MainCommunityList = () => {
  return (
    <Container>
      <Title>
        <h1>상위 커뮤니티</h1>
      </Title>

      <List>
        <MainCommunityItem />
      </List>
    </Container>
  );
};

MainCommunityList.propTypes = {};

export default MainCommunityList;
