import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentsList from './MainContents/ContentsList';
import MainCommunityList from './MainCommunity/MainCommunityList';

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 24px;
  max-width: 1248px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 1000vh;
`;

const Home = (props) => {
  return (
    <Container>
      <Wrapper>
        <ContentsList>s</ContentsList>

        <MainCommunityList>s</MainCommunityList>
      </Wrapper>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
