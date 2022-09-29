import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMainPosts,
  errorReset,
  postLike,
  postUnLike,
  reset,
} from '../../features/post/postSlice';

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
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onClickLike = (postId) => {
    if (!user) {
      return toast.error('로그인을 해주세요!', {
        position: 'top-center',
      });
    }
    dispatch(postLike(postId));
  };

  const onClickDislike = (postId) => {
    if (!user) {
      return toast.error('로그인을 해주세요!', {
        position: 'top-center',
      });
    }
    dispatch(postUnLike(postId));
  };

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: 'top-center',
      });
      // dispatch(errorReset());
    }

    dispatch(getMainPosts());
  }, [dispatch, message, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <List>
        {posts &&
          posts.map((post) => (
            <ContentsItem
              post={post}
              key={post._id}
              onClickLike={onClickLike}
              onClickDislike={onClickDislike}
            />
          ))}
      </List>
    </Container>
  );
};

export default ContentsList;
