import { styled } from "styled-components";
import Theme from "./Theme";

const ButtonStyle = styled.button`
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  letter-spacing: 0.3em;
  color: ${Theme.bgcolor};
  border-radius: 0;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, ${Theme.bgcolor}, ${Theme.bgcolor}, rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);

  &:hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;

const Button = (props) => {
  return <ButtonStyle>제출</ButtonStyle>;
};

export default Button;
