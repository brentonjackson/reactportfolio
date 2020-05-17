import React from 'react';
import { bool, func } from 'prop-types';
import {StyledBurger} from './Burger.styled';
import './burger.css';

const Burger = ({open, setOpen}) => {
    return (
        <div className="burger-nav">
            <StyledBurger className="styled-button" open={open} onClick={() => setOpen(!open)}>
                <div className="burger" />
                <div className="burger"  />
                <div className="burger" />
            </StyledBurger>
        </div>
        
        // <section className="burger-nav" open={open} onClick={() => setOpen(!open)}>
        //     <div className="styled-button">
                // <div className="burger"></div>
                // <div className="burger"></div>
                // <div className="burger"></div>
        //     </div>
        // </section>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
  export default Burger;