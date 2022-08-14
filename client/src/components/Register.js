import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './common/Button';

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

const Register = (props) => {
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Form>
          <Input placeholder='Email' />
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button auth={true}>회원가입</Button>
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

Register.propTypes = {};

export default Register;
