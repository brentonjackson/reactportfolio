// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px;
  background: var(--blue-gradient);
  border: 1px solid transparent;
  border-radius: 10%;
  cursor: pointer;
  padding: 1.5px 0;
  z-index: 10;

  @media (min-width: 1200px) {
      display: none;
  }
  
  &:focus {
    outline: none;
  }

  
  
  div {
    width: 26px;
    height: 3px;
    background: var(--main-white);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 10;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;