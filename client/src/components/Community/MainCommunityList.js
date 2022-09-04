import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommunity } from '../../features/community/communitySlice';

import MainCommunityItem from './MainCommunityItem';
import Spinner from '../common/Spinner';

/*********************** */
// 메인화면 커뮤니티 목록리스트
/************************ */

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

  @media (max-width: 960px) {
    display: none;
  }
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

const NotFound = styled.div`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`;

const MainCommunityList = () => {
  const { communities, isLoading } = useSelector((state) => state.community);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommunity('main'));
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }
  return (
    <Container>
      <Title>
        <h1>커뮤니티 목록</h1>
      </Title>

      <List>
        {communities && communities.length !== 0 ? (
          communities.map((community, index) => (
            <MainCommunityItem
              key={community._id}
              index={index}
              item={community}
            />
          ))
        ) : (
          <NotFound>No Post yet..</NotFound>
        )}
      </List>
    </Container>
  );
};

export default MainCommunityList;
