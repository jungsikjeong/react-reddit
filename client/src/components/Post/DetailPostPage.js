import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaCommentAlt } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../features/post/postSlice';
import Spinner from '../common/Spinner';
import { loginClick } from '../../features/auth/authSlice';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 80px;

  max-width: 1248px;
  color: black;
  font-weight: bold;
  background-color: #fff;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 10px;
`;

const UpAndDownWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;

  .post-like {
    font-size: 13px;
  }

  .icon {
    :hover {
      color: #49d263;
    }
  }
`;

const FromWrap = styled.div`
  display: flex;
  margin-left: 20px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 5px 0 15px 20px;
`;

const Contents = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const InputWrap = styled.div`
  margin-left: 20px;
  margin-top: 15px;
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
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  padding: 5px;
  background-color: #ccc;
  color: white;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #379ef4;
  }
`;

const DetailPostPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { communityId, postId } = params;
  const { post, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.post
  );

  const { user } = useSelector((state) => state.auth);

  const { title, description, createdAt, name } = post;

  useEffect(() => {
    dispatch(getPost({ communityId, postId }));
  }, [dispatch, communityId, postId]);

  if (isLoading) {
    return <Spinner />;
  }

  const onLoginClick = () => {
    dispatch(loginClick('postPage'));
  };
  return (
    <Container>
      <Wrapper>
        <UpAndDownWrap>
          <AiOutlineArrowUp
            color={'gray'}
            cursor={'pointer'}
            className='icon'
          />

          {/* 추천횟수 */}
          <span className='post-like'>1</span>

          <AiOutlineArrowDown
            color={'gray'}
            cursor={'pointer'}
            className='icon'
          />
        </UpAndDownWrap>

        <FromWrap>
          Posted by &nbsp;
          {/* 임시로  아이콘 */}
          <div
            style={{
              borderRadius: '50%',
              background: 'black',
              width: '15px',
              height: '15px',
              marginRight: '5px',
            }}
          />
          /u/{name}{' '}
          {new Date(createdAt).toLocaleString('ko-KR').substring(0, 11)}
        </FromWrap>

        <Title>{title}</Title>

        <Contents>{description}</Contents>

        <div style={{ fontSize: '16px', marginLeft: '20px' }}>
          <FaCommentAlt style={{ color: 'black', marginRight: '3px' }} />
          Comments
        </div>

        <InputWrap>
          {user ? (
            <>
              <span style={{ color: '#379EEB' }}>{user.name}</span> 으로 댓글
              작성
              <Form>
                <TextArea />
              </Form>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button>포스트 생성</Button>
              </div>
            </>
          ) : (
            <>
              댓글을 입력하려면
              <Link to='/login' onClick={onLoginClick}>
                <span style={{ color: '#379EEB' }}> 로그인 </span>
              </Link>
              해주세요..
              <Form>
                <TextArea disabled optionDisabled={true} />
              </Form>
            </>
          )}
        </InputWrap>
      </Wrapper>
    </Container>
  );
};

export default DetailPostPage;
