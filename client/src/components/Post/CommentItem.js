import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const Form = styled.form`
  margin-top: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin: 10px 0px;
  background-color: #f6f7f8;
  border: 0;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  outline: none;
  :focus {
    background-color: #fff;
    outline: 1px solid #0079d3;
  }

  :hover {
    background-color: #fff;
    border: 1px solid #0079d3;
  }
  ${(props) =>
    props.optionDisabled &&
    css`
      :hover {
        background: #f6f7f8;
        border: none;
      }
    `}
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
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(comment.text);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const params = useParams();

  const { communityId, postId } = params;
  const { _id: commentId } = comment;

  const onOpenEdit = () => {
    setEdit(true);
  };

  const onCloseEdit = () => {
    setEdit(false);
    setText(comment.text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onRemove = () => {
    dispatch(RemoveComment({ communityId, postId, commentId }));
  };

  let exist = user && comment.user === user._id;

  return (
    <Container>
      {edit ? (
        <>
          <User>
            {new Date(comment.date).toLocaleString('ko-KR').substring(0, 11)}

            <span style={{ marginLeft: '7px', fontWeight: 'bold' }}>
              {comment.name}
            </span>
          </User>
          <Form onSubmit={onSubmit}>
            <TextArea
              placeholder={`${comment.name}님의 댓글 작성중..`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button>포스트 생성</Button>
              <Button onClick={onCloseEdit}>포스트 취소</Button>
            </div>
          </Form>
        </>
      ) : (
        <Wrapper>
          <User>
            {new Date(comment.date).toLocaleString('ko-KR').substring(0, 11)}

            <span style={{ marginLeft: '7px', fontWeight: 'bold' }}>
              {comment.name}
            </span>
          </User>

          <Text>{comment.text}</Text>
          {exist && (
            <EditRemove>
              <Button onClick={onOpenEdit}>Edit</Button>
              <Button onClick={onRemove}>Remove</Button>
            </EditRemove>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object,
};

export default CommentItem;
