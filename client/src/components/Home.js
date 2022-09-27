import React from 'react';
import styled from 'styled-components';

import ContentsList from './MainContents/ContentsList';
import MainCommunityList from './Community/MainCommunityList';

const Container = styled.div`
  margin: 0 auto;
  padding: 88px 24px;
  max-width: 1248px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* min-height: 1000vh; */
`;

const Home = (props) => {
  return (
    <Container>
      <Wrapper>
        <ContentsList />

        <MainCommunityList />
      </Wrapper>
    </Container>
  );
};

export default Home;
