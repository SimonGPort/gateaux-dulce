import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border: 1px solid white;
  &:hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Text = styled.h2`
  font-size: 40px;
  color: white;
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  margin: 0;
  font-family: Quicksand;
  text-align: center;
`;
