import React from 'react';
import styled from 'styled-components';
import loading from '../../assets/spinner.gif';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50px;
  height: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Spinner = () => {
  return (
    <Wrapper>
      <img src={loading} alt='loading..' />
    </Wrapper>
  );
};

export default Spinner;
