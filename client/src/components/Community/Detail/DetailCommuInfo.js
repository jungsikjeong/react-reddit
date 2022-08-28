import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

/*********************** */
// 디테일 커뮤니티 사이드
/************************ */

const Container = styled.div`
  flex: 0 0 320px;
  width: 320px;
  background: #ffff;
  color: #000;
  font-weight: bold;
  height: 190px;

  /* 모바일 버전에서는 사라짐 */
  @media (max-width: 960px) {
    display: none;
  }
`;

const Title = styled.div`
  padding: 10px;
  font-size: 20px;
  background: #ccc;
  width: 100%;
  color: white;
  font-weight: bold;
`;

const List = styled.ul`
  font-size: 15px;
`;

const Item = styled.li`
  padding: 7px;
`;

const Button = styled.button`
  font-size: 13px;
  margin-left: 7px;
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

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;

  span {
    z-index: 10;
    top: 25px;
    right: 15px;
    color: #ccc;
    position: absolute;
  }
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
    background-color: #fff;
    outline: 1px solid #0079d3;
  }

  :hover {
    background-color: #fff;
    border: 1px solid #0079d3;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
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
`;

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auth',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)',
    position: 'relative',
  },
};
Modal.setAppElement('#root');

const DetailCommuInfo = ({ community }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const postDate = {
      title,
      description,
    };

    // dispatch(createNote({ postDate, ticketId }));
    closeModal();
  };

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Post'
      >
        <h2 style={{ color: 'black', fontSize: '25px' }}>Add Post</h2>

        <Form onSubmit={onSubmit}>
          <Input
            type='text'
            placeholder='Post Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength='20'
          />
          <span>{title.length} / 20</span>
          <Textarea
            placeholder='Post Text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ margin: '0' }}>Submit</Button>
          </div>
        </Form>
      </Modal>

      <Title>
        <h1>커뮤니티에 대해서</h1>
      </Title>

      <List>
        <Item>{community.description}</Item>
        <Item>
          <span style={{ lineHeight: '20px' }}>
            {community.user && community.user.length}
            <br />
            멤버
          </span>
        </Item>

        <Item>
          {new Date(community.createdAt)
            .toLocaleString('ko-KR')
            .substring(0, 12)}
        </Item>
        <Button onClick={openModal}>포스트 생성</Button>
      </List>
    </Container>
  );
};

DetailCommuInfo.propTypes = {
  community: PropTypes.object,
};

export default DetailCommuInfo;
