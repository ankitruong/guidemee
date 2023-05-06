import React from 'react';
import { StyledBurger } from './styled';

export const Burger = ({open, setOpen}: any) => {
  return (
    <StyledBurger className='ml-auto' open={open} onClick={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}