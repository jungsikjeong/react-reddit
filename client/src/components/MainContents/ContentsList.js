import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dbArray from '../../data/db';

import ContentsItem from './ContentsItem';

const Container = styled.div`
  width: 100%;
  margin-right: 30px;
`;

const List = styled.ul`
  color: black;
  font-weight: bold;
  font-size: 13px;
`;

const ContentsList = () => {
  return (
    <Container>
      <List>
        {dbArray.map((item) => (
          <ContentsItem item={item} key={item.id} />
        ))}
      </List>
    </Container>
  );
};

ContentsList.propTypes = {};

export default ContentsList;
