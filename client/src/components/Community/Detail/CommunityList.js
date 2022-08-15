import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dbArray from '../../../data/db';

import CommunityItem from './CommunityItem';

/**************************** */
// 디테일 커뮤 리스트 //
/**************************** */
const Container = styled.div`
  width: 100%;
  margin-right: 30px;
`;

const List = styled.ul`
  color: black;
  font-weight: bold;
  font-size: 13px;
`;

const CommunityList = () => {
  return (
    <Container>
      <List>
        {dbArray.map((item) => (
          <CommunityItem item={item} key={item.id} />
        ))}
      </List>
    </Container>
  );
};

CommunityList.propTypes = {};

export default CommunityList;
