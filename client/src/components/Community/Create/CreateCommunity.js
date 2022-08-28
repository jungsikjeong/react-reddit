import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createCommunity,
  reset,
} from '../../../features/community/communitySlice';
import { toast } from 'react-toastify';

import Button from '../../common/Button';
import Spinner from '../../common/Spinner';

const Container = styled.div`
  flex: 0 0 350px;
  max-width: 450px;
  color: #000;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 118px auto;
  font-weight: 600;
  height: 450px;
`;

const PageTitle = styled.div`
  padding: 20px 20px 0px 20px;
  font-size: 20px;

  :after {
    content: '';
    display: block;
    border-bottom: 1px solid #edeff1;
    margin: 20px 0px;
  }
`;

const Form = styled.form`
  padding: 0px 20px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 5px 0px;
  }
  span {
    color: #ccc;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  margin: 10px 0px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  outline: none;

  :focus {
    outline: 1px solid #0079d3;
  }

  :hover {
    background-color: #fff;
    border: 1px solid #0079d3;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyleButton = styled(Button)`
  margin: 0;
  width: 200px;
  border: none;
  border-radius: 4px;
  background: #a2a0a0;

  ${(props) =>
    props.btnActivate &&
    css`
      background: #379eeb;
    `}
`;

const CreateCommunity = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
  });

  const [btnOption, setBtnOption] = useState({
    auth: false,
    btnActivate: true,
  });

  const { community, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.community
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, btnActivate } = btnOption;
  const { name, title, description } = formData;

  // 버튼 색상변화
  useEffect(() => {
    if (name && title && description) {
      setBtnOption({ auth: false, btnActivate: true });
    } else {
      setBtnOption({ auth: true, btnActivate: false });
    }
  }, [name, title, description]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message, community]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const communityData = {
      name,
      title,
      description,
    };
    dispatch(createCommunity(communityData));
    navigate(`/r/${community._id}`);
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <Container>
      <PageTitle>
        <h1>커뮤니티 만들기</h1>
      </PageTitle>

      <Form onSubmit={onSubmit}>
        <div>
          <h2>Name</h2>
          <span>커뮤니티 이름은 변경할 수 없습니다.</span>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h2>Title</h2>
          <span>주제를 나타냅니다. 언제든지 변경할 수 있습니다.</span>
          <Input
            type='text'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h2>Description</h2>
          <span>해당 커뮤니티에 대한 설명입니다.</span>
          <Input
            type='text'
            name='description'
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <BtnWrapper>
          <StyleButton auth={auth} btnActivate={btnActivate}>
            커뮤니티 만들기
          </StyleButton>
        </BtnWrapper>
      </Form>
    </Container>
  );
};

export default CreateCommunity;
