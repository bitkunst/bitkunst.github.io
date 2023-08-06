import styled, { css } from "styled-components";

const btnStyles = css`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:hover {
    color: #212529;
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    opacity: 0.65;
  }
`;

const CustomButton = styled.a`
  ${btnStyles}
  color: #6c757d;
  border-color: #6c757d;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }

  &:disabled {
    color: #6c757d;
    background-color: transparent;
  }

  &:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }
`;

function Button({ content, href }) {
  return (
    <CustomButton href={href} target={"_blank"}>
      {content}
    </CustomButton>
  );
}

export default Button;
