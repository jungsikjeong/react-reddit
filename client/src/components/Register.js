import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';

import Button from './common/Button';
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

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [btnOption, setBtnOption] = useState({
    auth: false,
    btnActivate: true,
  });

  const { email, name, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  // 버튼 색상변화
  useEffect(() => {
    if (email && name && password) {
      setBtnOption({ auth: false, btnActivate: true });
    } else {
      setBtnOption({ auth: true, btnActivate: false });
    }
  }, [email, name, password]);

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: 'top-center',
      });
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, message, dispatch, isSuccess, user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      return;
    } else if (name.length < 3) {
      toast.warn('이름은 세글자 이상으로 입력해주세요!', {
        position: 'top-center',
      });
    } else if (password.length < 6) {
      toast.warn('비밀번호는 여섯글자 이상으로 입력해주세요!', {
        position: 'top-center',
      });
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
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
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
            placeholder='Username'
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
            회원가입
          </Button>

          <span
            style={{
              fontSize: '14px',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            이미 가입하셨나요?
            <SLink to='/login'>로그인</SLink>
          </span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
