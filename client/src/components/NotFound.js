import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 64px;
  width: 100%;
  height: 100%;

  div {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 30px;
  }
`;

const NotFound = () => {
  return (
    <Wrap>
      <div>
        404 Error
        <br />
        페이지를 찾을 수 없습니다.
      </div>
    </Wrap>
  );
};

export default NotFound;
