import styled from "styled-components"


const AdicionarStyled = styled.div`
button{
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: solid grey .5px;
  cursor: pointer;

  margin-top: 20px;
}

`

export function Adicionar() {
  return (
    <AdicionarStyled>
          
              <button>
                Add
              </button>
         
    </AdicionarStyled>
  )
}