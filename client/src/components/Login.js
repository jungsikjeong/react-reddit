import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Button from './common/Button';
import { login, reset } from '../features/auth/authSlice';
import Spinner from './common/Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 640px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  margin: 10px 0px;
  background-color: #f6f7f8;
  border: 0;
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

const SLink = styled(Link)`
  position: relative;

  color: #379eeb;
  margin-left: 3px;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0px;
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    opacity: 0;
    background-color: #37b0e9;
  }
  :hover:after {
    width: 100%;
    opacity: 1;
  }
`;

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [btnOption, setBtnOption] = useState({
    auth: false,
    btnActivate: true,
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // 버튼 색상변화
  useEffect(() => {
    if (email && password) {
      setBtnOption({ auth: false, btnActivate: true });
    } else {
      setBtnOption({ auth: true, btnActivate: false });
    }
  }, [email, password]);

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: 'top-center',
      });
    }

    // 로그인시 '/' 로 이동
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, message, dispatch, isSuccess, user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
            placeholder='Email'
          />
          <Input
            type='password'
            name='password'
            autoComplete='on'
            value={password}
            onChange={onChange}
            required
            placeholder='Password'
          />
          <Button auth={btnOption.auth} btnActivate={btnOption.btnActivate}>
            로그인
          </Button>
          <span
            style={{
              fontSize: '14px',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            새로 오신건가요?
            <SLink to='/register'>회원가입</SLink>
          </span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
