import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default function Header() {
  return (
    <SHeader>
      <List>
        <li>
          <SLink to='/'>Movies</SLink>
        </li>
        <li>
          <SLink to='/tv'>TV</SLink>
        </li>
        <li>
          <SLink to='/search'>Search</SLink>
        </li>
      </List>
    </SHeader>
  );
}