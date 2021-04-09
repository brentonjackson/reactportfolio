import React from "react";
import { StyledBurger } from "./Burger.styled";
import "./burger.css";

const Burger = ({ open, setOpen }) => {
  return (
    <div className="burger-nav">
      <StyledBurger
        className="styled-button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledBurger>
    </div>
  );
};

export default Burger;
