// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--blue-gradient);
//   height: 100vh;
  text-align: left;
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid black;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateY(4%)' : 'translateY(-100%)'};
  

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Montserrat';
    padding: 2rem 0;
    color: var(--main-white);
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    &:hover {
      color: black;
    }
  }
`;