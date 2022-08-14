import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  outline: none;
  color: #fff;
  font-weight: bold;
  border: 1px solid #1283d6;
  border-radius: 15px;
  font-size: 17px;
  background: rgba(0, 0, 0, 0);
  font-weight: bold;
  padding: 5px 3px;
  cursor: pointer;

  ${(props) =>
    props.loginBtn &&
    css`
      margin-right: 7px;
      color: #258cd9;
      background: #fff;
      :hover {
        background: #f5fafd;
      }
    `}

  ${(props) =>
    props.signUpBtn &&
    css`
      background: #1484d6;
      :hover {
        background: #379eeb;
      }
    `}

    ${(props) =>
    props.auth &&
    css`
      margin-bottom: 10px;
      width: 100%;
      border: none;
      border-radius: 4px;
      background: #a2a0a0;
      :hover {
        background: #379eeb;
      }
    `}

    ${(props) =>
    props.join &&
    css`
      margin-left: auto;
      width: 50px;
      padding: 5px;
      font-size: 14px;
      border: none;
      border-radius: 15px;
      background: #0079d3;
      :hover {
        transition: 0.2s;
        background: #379eeb;
      }
    `}

    
    ${(props) =>
    props.logout &&
    css`
      width: 100px;
      padding: 5px;
      font-size: 14px;
      border: none;
      border-radius: 15px;
      background: #379eeb;
      :hover {
        transition: 0.2s;
        background: #ccc;
      }
    `}

    ${(props) =>
    props.create &&
    css`
      margin-right: 10px;
      width: 130px;
      padding: 5px;
      font-size: 14px;
      border: 1px solid #eadb9b;
      border-radius: 15px;
      background: #fff;
      color: #000;
      :hover {
        transition: 0.2s;
        background: #f6f7f8;
      }
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
