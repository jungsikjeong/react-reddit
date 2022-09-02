import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveComment } from '../../features/post/postSlice';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  color: #1a1a1b;
  margin-left: 20px;
  min-height: 50px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const User = styled.div``;

const Text = styled.div`
  padding-left: 5px;
  margin-top: 5px;
`;

const EditRemove = styled.div`
  display: flex;
  padding-left: 5px;
`;

const Button = styled.button`
  border-radius: 2px;
  align-items: center;
  height: 100%;
  line-height: 20px;
  margin-right: 4px;
  padding: 6px 4px;
  text-align: left;
  background: transparent;
  border: none;
  color: #878a8c;
  cursor: pointer;
  :hover {
    background: #ccc;
  }
`;

const CommentItem = ({ comment }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const params = useParams();

  const { communityId, postId } = params;
  const { _id: commentId } = comment;

  const onEdit = () => {};

  const onRemove = () => {
    dispatch(RemoveComment({ communityId, postId, commentId }));
  };

  let test = user && comment.user === user._id;

  return (
    <Container>
      <Wrapper>
        <User>
          {new Date(comment.date).toLocaleString('ko-KR').substring(0, 11)}

          <span style={{ marginLeft: '7px', fontWeight: 'bold' }}>
            {comment.name}
          </span>
        </User>

        <Text>{comment.text}</Text>
        {test && (
          <EditRemove>
            <Button>Edit</Button> <Button onClick={onRemove}>Remove</Button>
          </EditRemove>
        )}
      </Wrapper>
    </Container>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object,
};

export default CommentItem;
