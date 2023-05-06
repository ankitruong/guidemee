import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: white;
  transform: ${({ open }: {open: boolean}) => open ? 'translateX(0%)' : 'translateX(-100%)'};
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  position: absolute;
  opacity: 0.8;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;