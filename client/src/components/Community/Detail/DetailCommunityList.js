import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dbArray from '../../../data/db';

import DetailCommunityItem from './DetailCommunityItem';

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

const NoPost = styled.div`
  text-align: center;
  font-size: 20px;
  color: #000;
`;

const CommunityList = () => {
  return (
    <Container>
      <List>
        {dbArray.map((item) => (
          <DetailCommunityItem item={item} key={item.id} />
        ))}
      </List>
      {/* <NoPost>아직 작성된 포스트가 없습니다.</NoPost> */}
    </Container>
  );
};

CommunityList.propTypes = {};

export default CommunityList;
