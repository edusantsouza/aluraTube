import styled from "styled-components";
import React from "react";

const SectionStyled = styled.div`
  div {
    display: flex;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 16px;
    text-transform: capitalize;
  }
  section {
    padding: 16px;
    position: relative;
  }
`;

export function Section(props) {
  return (
    <SectionStyled>
      <section>
        <h2>Meus favoritos</h2>
        <div>{props.children}</div>
      </section>
    </SectionStyled>
  );
}
