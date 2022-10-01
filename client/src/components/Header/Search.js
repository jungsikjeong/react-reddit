import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchPosts } from '../../features/post/postSlice';

const Container = styled.div`
  margin-top: 10px;
  flex-grow: 1;
  max-width: 690px;
`;

const Wrap = styled.div`
  display: flex;
  padding-left: 10px;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f6f7f8;
  border: 0;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  outline: none;
  margin-left: 8px;
`;

const Form = styled.form`
  width: 100%;
  align-items: center;
  background-color: #f6f7f8;
  border: 1px solid #f6f7f8;
  border-radius: 4px;

  :hover {
    background-color: #fff;
    border: 1px solid #0079d3;
    ${Input} {
      background-color: #fff;
    }
  }
`;

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(searchPosts(searchValue));

    setSearchValue('');
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Wrap>
          <FiSearch color='gray' fontSize='25px' />
          <Input
            value={searchValue}
            onChange={onChange}
            placeholder='Search Reddit'
          />
        </Wrap>
      </Form>
    </Container>
  );
};

Search.propTypes = {
  MenuToggle: PropTypes.func,
};

export default Search;
