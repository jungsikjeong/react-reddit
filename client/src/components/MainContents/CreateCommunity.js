import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../common/Button';

const Container = styled.div`
  flex: 0 0 350px;
  max-width: 450px;
  color: #000;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 50px auto;
  font-weight: 600;
  height: 450px;
`;

const PageTitle = styled.div`
  padding: 20px 20px 0px 20px;
  font-size: 20px;
  /* border-bottom: 1px solid #edeff1; */
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
  /* todo: Input 속성이 다 채워지면 발동 */
  /* background: #379eeb; */
`;

const CreateCommunity = (props) => {
  return (
    <Container>
      <PageTitle>
        <h1>커뮤니티 만들기</h1>
      </PageTitle>

      <Form>
        <div>
          <h2>Name</h2>
          <span>커뮤니티 이름은 변경할 수 없습니다.</span>
          <Input />
        </div>
        <div>
          <h2>Title</h2>
          <span>주제를 나타냅니다. 언제든지 변경할 수 있습니다.</span>
          <Input />
        </div>
        <div>
          <h2>Description</h2>
          <span>해당 커뮤니티에 대한 설명입니다.</span>
          <Input />
        </div>
        <BtnWrapper>
          <StyleButton>커뮤니티 만들기</StyleButton>
        </BtnWrapper>
      </Form>
    </Container>
  );
};

CreateCommunity.propTypes = {};

export default CreateCommunity;
