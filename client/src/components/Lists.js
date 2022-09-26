import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommunity } from '../features/community/communitySlice';

import Spinner from './common/Spinner';
import ListItem from './ListItem';
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
  margin: 68px auto 0px;

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

const Lists = () => {
  const { communities, isLoading } = useSelector((state) => state.community);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommunity());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Title>
        <h1>커뮤니티 목록</h1>
      </Title>

      <List>
        {communities &&
          communities.map((community, index) => (
            <ListItem key={community._id} community={community} index={index} />
          ))}
      </List>
    </Container>
  );
};

export default Lists;
