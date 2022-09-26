import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getMainPosts, postLike, reset } from '../../features/post/postSlice';

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
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  const dispatch = useDispatch();

  const onClickLike = (postId) => {
    dispatch(postLike(postId));
    if (!isError) {
      dispatch(getMainPosts());
      console.log('posts:', posts);
    }
  };

  const onClickDislike = () => {};

  useEffect(() => {
    if (isError) {
      dispatch(reset());
      toast.error(message, {
        position: 'top-center',
      });
    }
    dispatch(getMainPosts());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      <List>
        {posts &&
          posts?.map((post) => (
            <ContentsItem
              post={post}
              key={post._id}
              onClickLike={onClickLike}
            />
          ))}
      </List>
    </Container>
  );
};

export default ContentsList;
