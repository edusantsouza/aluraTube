import styled from "styled-components"



const SectionStyled = styled.div`
h2 {
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 16px;
    text-transform: capitalize;
  }
section {
  padding: 16px;
  }
ul{
  display: flex;
}
`

export function Section(props) {
  return(
    <SectionStyled>
      <section>
          <h2>Meus favoritos</h2>
          <ul class="my-favorites">
            {props.children}
          </ul>
      </section>
    </SectionStyled>
  )


}