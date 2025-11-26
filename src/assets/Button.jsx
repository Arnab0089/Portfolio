import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <StyledWrapper className="backdrop-blur-2xl">
      <Link to="#projects">
        <button className="btn font-primary-2 text-primary-2">
          Visit My Projects
          <img
            src="/stacks_12134443.png"
            alt="projects icon"
            className="inline-block ml-4 w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border: 2px solid #1f4c65;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
`;

export default Button;
