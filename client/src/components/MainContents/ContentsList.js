import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMainPosts } from '../../features/post/postSlice';

import Spinner from '../common/Spinner';
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
  const { posts, isLoading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      <List>
        {posts &&
          posts.map((post) => <ContentsItem post={post} key={post._id} />)}
      </List>
    </Container>
  );
};

export default ContentsList;
