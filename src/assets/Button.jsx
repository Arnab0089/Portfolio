import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ text = "Visit My Projects", img, to = "#" }) => {
  return (
    <StyledWrapper>
      <Link to={to}>
        <button className="custom-btn btn-1 font-primary-2 text-primary-2 flex items-center gap-2">
          {text}
          {img && (
            <img src={img} alt="icon" className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .custom-btn {
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .btn-1 {
    background: linear-gradient(
      0deg,
      rgba(96, 9, 240, 1) 0%,
      rgba(129, 5, 240, 1) 100%
    );
    border: none;
  }

  .btn-1:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export default Button;
