import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Title = ({ location }) => {
  const [path, setPath] = useState("");
  const history = useHistory();
  useEffect(() => {
    setPath(location.pathname);
  });
  return (
    <TitleContainer className={`${path === "/checkout" && "dark"}`}>
      <h1>CLOSE TO HOME</h1>
      <p>
        FASHION MIXTAPE<br></br>
        PRODUCED BY NAVINDER & BOBBY NANGLA
      </p>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 30px;
  }
  p {
    font-weight: bold;
    font-size: 15px;
  }
  margin-bottom: 30px;
  color: #d5da89;
  &.dark {
    h1 {
      font-size: 22px;
    }
    p {
      font-weight: bold;
      font-size: 0.7rem;
    }
    color: black;
  }
`;
